;(() => {
    const formatNumber = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(2).replace(/\.00$/, '') + 'M'
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
        return num.toString()
    }

    const fetchRealStats = async (counters) => {
        try {
            const response = await fetch('stats.json?t=' + Date.now())
            if (!response.ok) return null
            const data = await response.json()
            counters.forEach(counter => {
                let network = ''
                if (counter.parentElement.classList.contains('yt-card')) network = 'youtube'
                if (data[network]) {
                    counter.setAttribute('data-target', data[network])
                }
            })
            return data
        } catch (_) {
            return null
        }
    }

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target')
        const speed = 200
        if (!counter.hasAttribute('data-current')) {
            counter.setAttribute('data-current', '0')
        }
        const updateCount = () => {
            const countRaw = parseFloat(counter.getAttribute('data-current'))
            const inc = target / speed
            if (countRaw < target) {
                const newCount = countRaw + inc
                counter.setAttribute('data-current', newCount)
                if (newCount >= target) {
                    counter.innerText = formatNumber(target)
                } else {
                    counter.innerText = formatNumber(Math.ceil(newCount))
                    setTimeout(updateCount, 15)
                }
            } else {
                counter.innerText = formatNumber(target)
            }
        }
        updateCount()
    }

    const initStats = async () => {
        const counters = document.querySelectorAll('.counter')
        if (!counters.length) return

        const data = await fetchRealStats(counters)

        const statsContainer = document.querySelector('.social-links-grid')
        if (statsContainer) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        counters.forEach(animateCounter)
                        observer.unobserve(entry.target)
                    }
                })
            }, { threshold: 0.3 })
            observer.observe(statsContainer)
        }

        setInterval(() => fetchRealStats(counters), 30000)
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initStats)
    } else {
        initStats()
    }
})()
