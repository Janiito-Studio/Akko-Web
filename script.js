// Base de datos de traducciones
const translations = {
    es: { bio: 'Soy Akko, creador de contenido en <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. En mi canal reacciono a vídeos, los analizo y comparto mi opinión sobre distintos temas.', videosTitle: 'Últimos vídeos publicados', socialTitle: 'Redes sociales', footerAbout: 'Acerca de', footerContact: 'Contacto', copyright: '2026 Akko. Todos los derechos reservados.', contactMsg: '', minuteAgo: 'Hace 1 minuto', minutesAgo: 'Hace {n} minutos', hourAgo: 'Hace 1 hora', hoursAgo: 'Hace {n} horas', dayAgo: 'Hace 1 día', daysAgo: 'Hace {n} días', monthAgo: 'Hace 1 mes', monthsAgo: 'Hace {n} meses' },
    ct: { bio: 'Sóc Akko, creador de contingut a <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. Al meu canal reacciono a vídeos, els analitzo i comparteixo la meva opinió sobre diferents temes.', videosTitle: 'Últims vídeos publicats', socialTitle: 'Xarxes socials', footerAbout: 'Sobre mi', footerContact: 'Contacte', copyright: '2026 Akko. Tots els drets reservats.', contactMsg: '', minuteAgo: 'Fa 1 minut', minutesAgo: 'Fa {n} minuts', hourAgo: 'Fa 1 hora', hoursAgo: 'Fa {n} hores', dayAgo: 'Fa 1 dia', daysAgo: 'Fa {n} dies', monthAgo: 'Fa 1 mes', monthsAgo: 'Fa {n} mesos' },
    gb: { bio: 'I am Akko, content creator on <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. On my channel I react to videos, analyze them and share my opinion on different topics.', videosTitle: 'Latest published videos', socialTitle: 'Social media', footerAbout: 'About', footerContact: 'Contact', copyright: '2026 Akko. All rights reserved.', contactMsg: '', minuteAgo: '1 minute ago', minutesAgo: '{n} minutes ago', hourAgo: '1 hour ago', hoursAgo: '{n} hours ago', dayAgo: '1 day ago', daysAgo: '{n} days ago', monthAgo: '1 month ago', monthsAgo: '{n} months ago' },
    fr: { bio: 'Je suis Akko, créateur de contenu sur <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. Sur ma chaîne, je réagis aux vidéos, je les analyse et je partage mon opinion sur divers sujets.', videosTitle: 'Dernières vidéos publiées', socialTitle: 'Réseaux sociaux', footerAbout: 'À propos', footerContact: 'Contact', copyright: '2026 Akko. Tous droits réservés.', contactMsg: '', minuteAgo: 'Il y a 1 minute', minutesAgo: 'Il y a {n} minutes', hourAgo: 'Il y a 1 heure', hoursAgo: 'Il y a {n} heures', dayAgo: 'Il y a 1 jour', daysAgo: 'Il y a {n} jours', monthAgo: 'Il y a 1 mois', monthsAgo: 'Il y a {n} mois' },
    de: { bio: 'Ich bin Akko, Content Creator auf <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. Auf meinem Kanal reagiere ich auf Videos, analysiere sie und teile meine Meinung zu verschiedenen Themen.', videosTitle: 'Neueste veröffentlichte Videos', socialTitle: 'Soziale Medien', footerAbout: 'Über mich', footerContact: 'Kontakt', copyright: '2026 Akko. Alle Rechte vorbehalten.', contactMsg: '', minuteAgo: 'Vor 1 Minute', minutesAgo: 'Vor {n} Minuten', hourAgo: 'Vor 1 Stunde', hoursAgo: 'Vor {n} Stunden', dayAgo: 'Vor 1 Tag', daysAgo: 'Vor {n} Tagen', monthAgo: 'Vor 1 Monat', monthsAgo: 'Vor {n} Monaten' },
    it: { bio: 'Sono Akko, creatore di contenuti su <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. Sul mio canale reagisco ai video, li analizzo e condivido la mia opinione su diversi argomenti.', videosTitle: 'Ultimi video pubblicati', socialTitle: 'Social media', footerAbout: 'Chi sono', footerContact: 'Contatti', copyright: '2026 Akko. Tutti i diritti riservati.', contactMsg: '', minuteAgo: '1 minuto fa', minutesAgo: '{n} minuti fa', hourAgo: '1 ora fa', hoursAgo: '{n} ore fa', dayAgo: '1 giorno fa', daysAgo: '{n} giorni fa', monthAgo: '1 mese fa', monthsAgo: '{n} mesi fa' },
    pt: { bio: 'Sou Akko, criador de conteúdo no <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. No meu canal, reajo a vídeos, analiso-os e partilho a minha opinião sobre diferentes tópicos.', videosTitle: 'Últimos vídeos publicados', socialTitle: 'Redes sociais', footerAbout: 'Sobre', footerContact: 'Contactos', copyright: '2026 Akko. Todos os derechos reservados.', contactMsg: '', minuteAgo: 'Há 1 minuto', minutesAgo: 'Há {n} minutos', hourAgo: 'Há 1 hora', hoursAgo: 'Há {n} horas', dayAgo: 'Há 1 dia', daysAgo: 'Há {n} dias', monthAgo: 'Há 1 mês', monthsAgo: 'Há {n} meses' },
    jp: { bio: '私はAkkoです。<a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>のコンテンツクリエイターです。私のチャンネルでは、動画に反応したり、分析したり、様々なトピックについて意見を共有しています。', videosTitle: '最新の公開動画', socialTitle: 'ソーシャルメディア', footerAbout: '概要', footerContact: 'お問い合わせ', copyright: '2026 Akko. 無断複写・転載を禁じます。', contactMsg: '', minuteAgo: '1分前', minutesAgo: '{n}分前', hourAgo: '1時間前', hoursAgo: '{n}時間前', dayAgo: '1日前', daysAgo: '{n}日前', monthAgo: '1ヶ月前', monthsAgo: '{n}ヶ月前' },
    kr: { bio: '저는 <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a> 콘텐츠 크리에이터인 Akko입니다. 내 채널에서는 비디오에 반응하고 분석하며 다양한 주제에 대한 의견을 공유합니다.', videosTitle: '최근 게시된 비디오', socialTitle: '소셜 미디어', footerAbout: '정보', footerContact: '연락처', copyright: '2026 Akko. 모든 권리 보유.', contactMsg: '', minuteAgo: '1분 전', minutesAgo: '{n}분 전', hourAgo: '1시간 전', hoursAgo: '{n}시간 전', dayAgo: '1일 전', daysAgo: '{n}일 전', monthAgo: '1개월 전', monthsAgo: '{n}개월 전' },
    cn: { bio: '我是 Akko，<a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a> 内容创作者。在我的频道上，我会对视频做出反应，分析视频，并分享我对话题的不同看法。', videosTitle: '最新发布的视频', socialTitle: '社交媒体', footerAbout: '关于', footerContact: '联系我们', copyright: '2026 Akko. 保留所有权利。', contactMsg: '', minuteAgo: '1分钟前', minutesAgo: '{n}分钟前', hourAgo: '1小时前', hoursAgo: '{n}小时前', dayAgo: '1天前', daysAgo: '{n}天前', monthAgo: '1个月前', monthsAgo: '{n}个月前' },
    ru: { bio: 'Я Akko, создатель контента на <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. На своем канале я реагирую на video, анализирую их и делюсь своим мнением на разные темы.', videosTitle: 'Последние опубликованные видео', socialTitle: 'Социальные сети', footerAbout: 'Обо мне', footerContact: 'Контакты', copyright: '2026 Akko. Все права защищены.', contactMsg: '', minuteAgo: '1 минуту назад', minutesAgo: '{n} минут назад', hourAgo: '1 час назад', hoursAgo: '{n} часов назад', dayAgo: '1 день назад', daysAgo: '{n} дней назад', monthAgo: '1 месяц назад', monthsAgo: '{n} месяцев назад' },
    sa: { bio: 'أنا Akko، منشئ محتوى على <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. على قناتي، أتفاعل مع الفيديوهات، أحللها وأشارك رأيي في مواضيع مختلفة.', videosTitle: 'أحدث مقاطع الفيديو المنشورة', socialTitle: 'وسائل التواصل الاجتماعي', footerAbout: 'حول', footerContact: 'اتصل بنا', copyright: '2026 Akko. جميع الحقوق محفوظة.', contactMsg: '', minuteAgo: 'قبل دقيقة واحدة', minutesAgo: 'قبل {n} دقائق', hourAgo: 'قبل ساعة واحدة', hoursAgo: 'قبل {n} ساعات', dayAgo: 'قبل يوم واحد', daysAgo: 'قبل {n} أيام', monthAgo: 'قبل شهر واحد', monthsAgo: 'قبل {n} أشهر' },
    nl: { bio: 'Ik ben Akko, content creator op <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. Op mijn kanaal reageer ik op video\'s, analyseer ik ze en deel ik mijn mening over verschillende onderwerpen.', videosTitle: 'Laatst gepubliceerde video\'s', socialTitle: 'Sociale media', footerAbout: 'Over', footerContact: 'Contact', copyright: '2026 Akko. Alle rechten voorbehouden.', contactMsg: '', minuteAgo: '1 minuut geleden', minutesAgo: '{n} minuten geleden', hourAgo: '1 uur geleden', hoursAgo: '{n} uur geleden', dayAgo: '1 dag geleden', daysAgo: '{n} dagen geleden', monthAgo: '1 maand geleden', monthsAgo: '{n} maanden geleden' },
    se: { bio: 'Jag är Akko, innehållsskapare på <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. På min kanal reagerar jag på videor, analyserar dem und delar min åsikt om olika ämnen.', videosTitle: 'Senast publicerade videor', socialTitle: 'Sociala medier', footerAbout: 'Om', footerContact: 'Kontakt', copyright: '2026 Akko. Alla rättigheter förbehållna.', contactMsg: '', minuteAgo: '1 minut sedan', minutesAgo: '{n} minuter sedan', hourAgo: '1 timme sedan', hoursAgo: '{n} timmar sedan', dayAgo: '1 dag sedan', daysAgo: '{n} dagar sedan', monthAgo: '1 månad sedan', monthsAgo: '{n} månader sedan' },
    no: { bio: 'Jeg er Akko, innholdsskaper på <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. På kanalen min reagerer jeg på videoer, analyserer dem og deler min mening om ulike emner.', videosTitle: 'Sist publiserte videoer', socialTitle: 'Sosiale medier', footerAbout: 'Om', footerContact: 'Kontakt', copyright: '2026 Akko. Med enerett.', contactMsg: '', minuteAgo: '1 minutt siden', minutesAgo: '{n} minutter siden', hourAgo: '1 time siden', hoursAgo: '{n} timer siden', dayAgo: '1 dag siden', daysAgo: '{n} dager siden', monthAgo: '1 måned siden', monthsAgo: '{n} måneder siden' },
    dk: { bio: 'Jeg er Akko, indholdsskaber på <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. På min kanal reagerer jeg på videoer, analyserem dem og deler min mening om forskellige emner.', videosTitle: 'Seneste udgivne videoer', socialTitle: 'Sociale medier', footerAbout: 'Om', footerContact: 'Kontakt', copyright: '2026 Akko. Alle rettigheder forbeholdes.', contactMsg: '', minuteAgo: '1 minut siden', minutesAgo: '{n} minutter siden', hourAgo: '1 time siden', hoursAgo: '{n} timer siden', dayAgo: '1 dag siden', daysAgo: '{n} dage siden', monthAgo: '1 måned siden', monthsAgo: '{n} måneder siden' },
    fi: { bio: 'Olen Akko, sisällöntuottaja <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>ssa. Kanavallani reagoin videoihin, analysoin niitä ja jakan mielipiteeni eri aiheista.', videosTitle: 'Uusimmat julkaistut videot', socialTitle: 'Sosiaalinen media', footerAbout: 'Tietoja', footerContact: 'Ota yhteyttä', copyright: '2026 Akko. Kaikki oikeudet pidätetään.', contactMsg: '', minuteAgo: '1 minuutti sitten', minutesAgo: '{n} minuuttia sitten', hourAgo: '1 tunti sitten', hoursAgo: '{n} tuntia sitten', dayAgo: '1 päivä sitten', daysAgo: '{n} päivää sitten', monthAgo: '1 kuukausi sitten', monthsAgo: '{n} kuukautta sitten' },
    pl: { bio: 'Jestem Akko, twórca treści na <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. Na moim kanale reaguję na filmy, analizuję je i dzielę się swoją opinią na różne tematy.', videosTitle: 'Ostatnio opublikowane filmy', socialTitle: 'Media społecznościowe', footerAbout: 'O mnie', footerContact: 'Kontakt', copyright: '2026 Akko. Wszelkie prawa zastrzeżone.', contactMsg: '', minuteAgo: '1 minutę temu', minutesAgo: '{n} minut temu', hourAgo: '1 godzinę temu', hoursAgo: '{n} godzin temu', dayAgo: '1 dzień temu', daysAgo: '{n} dni temu', monthAgo: '1 miesiąc temu', monthsAgo: '{n} miesięcy temu' },
    cz: { bio: 'Jsem Akko, tvůrce obsahu na <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. Na svém kanálu reaguji na videa, analyzuji je a sdílím svůj názor na různá témata.', videosTitle: 'Nejnovější publikovaná videa', socialTitle: 'Sociální média', footerAbout: 'O mně', footerContact: 'Kontakt', copyright: '2026 Akko. Všechna práva vyhrazena.', contactMsg: '', minuteAgo: 'Před 1 minutou', minutesAgo: 'Před {n} minutami', hourAgo: 'Před 1 hodinou', hoursAgo: 'Před {n} hodinami', dayAgo: 'Před 1 dnem', daysAgo: 'Před {n} dny', monthAgo: 'Před 1 měsícem', monthsAgo: 'Před {n} měsíci' },
    ro: { bio: 'Sunt Akko, creator de conținut pe <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. Pe canalul meu reacționez la videoclipuri, le analizez și îmi împăرتășesc părerea sobre diverse subiecte.', videosTitle: 'Cele mai recente videoclipuri', socialTitle: 'Rețele sociale', footerAbout: 'Despre', footerContact: 'Contact', copyright: '2026 Akko. Toate drepturile rezervate.', contactMsg: '', minuteAgo: 'Acum 1 minut', minutesAgo: 'Acum {n} minute', hourAgo: 'Acum 1 oră', hoursAgo: 'Acum {n} ore', dayAgo: 'Acum 1 zi', daysAgo: 'Acum {n} zile', monthAgo: 'Acum 1 lună', monthsAgo: 'Acum {n} luni' },
    gr: { bio: 'Είμαι ο Akko, δημιουργός περιεχομένου στο <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. Στο κανάλι μου αντιδρώ σε βίντεο, τα αναλύω και μοιράζομαι τη γνώμη μου για διάφορα θέματα.', videosTitle: 'Τελευταία δημοσιευμένα βίντεο', socialTitle: 'Κοινωνικά δίκτυα', footerAbout: 'Σχετικά', footerContact: 'Επικοινωνία', copyright: '2026 Akko. Με την επιφύλαξη παντός δικαιώματος.', contactMsg: '', minuteAgo: 'Πριν από 1 λεπτό', minutesAgo: 'Πριν από {n} λεπτά', hourAgo: 'Πριν από 1 ώρα', hoursAgo: 'Πριν από {n} ώρες', dayAgo: 'Πριν από 1 μέρα', daysAgo: 'Πριν από {n} μέρες', monthAgo: 'Πριν από 1 μήνα', monthsAgo: 'Πριν από {n} μήνες' },
    tr: { bio: 'Ben Akko, <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>\'da içerik üreticisiyim. Kanalımda videolara tepki veriyor, onları analiz ediyor ve farklı konulardaki fikirlerimi paylaşıyorum.', videosTitle: 'Son yayınlanan videolar', socialTitle: 'Sosyal medya', footerAbout: 'Hakkında', footerContact: 'İletişim', copyright: '2026 Akko. Tüm hakları saklıdır.', contactMsg: '', minuteAgo: '1 dakika önce', minutesAgo: '{n} dakika önce', hourAgo: '1 saat önce', hoursAgo: '{n} saat önce', dayAgo: '1 gün önce', daysAgo: '{n} gün önce', monthAgo: '1 ay önce', monthsAgo: '{n} ay önce' },
    il: { bio: 'אני Akko, יוצר תוכן ב-<a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. בערוץ שלי אני מגיב לסרטונים, מנתח אותם ומשתף את דעתי בנושאים שונים.', videosTitle: 'הסרטונים האחרונים שפורסמו', socialTitle: 'מדיה חברתית', footerAbout: 'אודות', footerContact: 'צור קשר', copyright: '2026 Akko. כל הזכויות שמורות.', contactMsg: '', minuteAgo: 'לפני דקה אחת', minutesAgo: 'לפני {n} דקות', hourAgo: 'לפני שעה', hoursAgo: 'לפני {n} שעות', dayAgo: 'לפני יום אחד', daysAgo: 'לפני {n} ימים', monthAgo: 'לפני חודש אחד', monthsAgo: 'לפני {n} חודשים' },
    in: { bio: 'मैं रिकीएडिट (Akko) हूँ, <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a> पर कंटेंट क्रिएटर। अपने चैनल पर मैं वीडियो पर प्रतिक्रिया देता हूं, उनका विश्लेषण करता हूं और विभिन्न विषयों पर अपनी राय साझा करता हूं।', videosTitle: 'नवीनतम प्रकाशित वीडियो', socialTitle: 'Social media', footerAbout: 'About', footerContact: 'Contact', copyright: '2026 Akko. All rights reserved.', contactMsg: '', minuteAgo: '1 मिनट पहले', minutesAgo: '{n} मिनट पहले', hourAgo: '1 घंटे पहले', hoursAgo: '{n} घंटे पहले', dayAgo: '1 दिन पहले', daysAgo: '{n} दिन पहले', monthAgo: '1 महीने पहले', monthsAgo: '{n} महीने पहले' },
    th: { bio: 'ฉันคือ Akko ผู้สร้างเนื้อหาบน <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a> ในช่องของฉัน ฉันตอบสนองต่อวิดีโอ วิเคราะห์ และแบ่งปันความคิดเห็นในหัวข้อต่างๆ', videosTitle: 'วิดีโอที่เผยแพร่ล่าสุด', socialTitle: 'โซเชียลมีเดีย', footerAbout: 'เกี่ยวกับ', footerContact: 'ติดต่อ', copyright: '2026 Akko. สงวนลิขสิทธิ์.', contactMsg: '', minuteAgo: '1 นาทีที่แล้ว', minutesAgo: '{n} นาทีที่แล้ว', hourAgo: '1 ชั่วโมงที่แล้ว', hoursAgo: '{n} ชั่วโมงที่แล้ว', dayAgo: '1 วันที่แล้ว', daysAgo: '{n} วันที่แล้ว', monthAgo: '1 เดือนที่แล้ว', monthsAgo: '{n} เดือนที่แล้ว' },
    vn: { bio: 'Tôi là Akko, nhà sáng tạo nội dung trên <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. Trên kênh của mình, tôi phản ứng with các video, phân tích chúng và chia sẻ ý kiến của mình về nhiều chủ đề khác nhau.', videosTitle: 'Các video mới nhất', socialTitle: 'Mạng xã hội', footerAbout: 'Giới thiệu', footerContact: 'Liên hệ', copyright: '2026 Akko. Mọi quyền được bảo lưu.', contactMsg: '', minuteAgo: '1 phút trước', minutesAgo: '{n} phút trước', hourAgo: '1 giờ trước', hoursAgo: '{n} giờ trước', dayAgo: '1 ngày trước', daysAgo: '{n} ngày trước', monthAgo: '1 tháng trước', monthsAgo: '{n} tháng trước' },
    id: { bio: 'Saya Akko, pembuat konten di <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">YouTube</a>. Di saluran saya, saya bereaksi terhadap video, menganalisisnya, dan membagikan pendapat saya tentang berbagai topik.', videosTitle: 'Video terbaru yang dipublikasikan', socialTitle: 'Media sosial', footerAbout: 'Tentang', footerContact: 'Kontak', copyright: '2026 Akko. Seluruh hak cipta.', contactMsg: '', minuteAgo: '1 menit yang lalu', minutesAgo: '{n} menit yang lalu', hourAgo: '1 jam yang lalu', hoursAgo: '{n} jam yang lalu', dayAgo: '1 hari yang lalu', daysAgo: '{n} hari yang lalu', monthAgo: '1 bulan yang lalu', monthsAgo: '{n} bulan yang lalu' },
    Jan: { bio: 'Jan Jan Jan <a href="https://www.youtube.com/@aakkoou?sub_confirmation=1 " target="_blank" class="highlight-link">Jan</a>. Jan Jan Jan, Jan Jan Jan Jan Jan Jan Jan Jan.', videosTitle: 'Jan Jan Jan', socialTitle: 'Jan Jan', footerAbout: 'Jan', footerContact: 'Jan', copyright: '2026 Jan. Jan Jan Jan.', contactMsg: '', minuteAgo: 'Jan 1 Jan', minutesAgo: 'Jan {n} Jan', hourAgo: 'Jan 1 Jan', hoursAgo: 'Jan {n} Jan', dayAgo: 'Jan 1 Jan', daysAgo: 'Jan {n} Jan', monthAgo: 'Jan 1 Jan', monthsAgo: 'Jan {n} Jan' }
};

// Función para cambiar el idioma real
const updateUIContent = (lang) => {
    const t = translations[lang] || translations.es;

    // Actualizar Bio
    const bioText = document.querySelector('.bio-text');
    if (bioText) bioText.innerHTML = t.bio;

    // Actualizar Título Vídeos
    const videosHeading = document.querySelector('.videos-heading');
    if (videosHeading) videosHeading.innerText = t.videosTitle;

    // Actualizar Título Redes Sociales
    const socialHeading = document.querySelector('.social-heading');
    if (socialHeading) socialHeading.innerText = t.socialTitle;

    const copyright = document.querySelector('.copyright');
    if (copyright) copyright.innerText = t.copyright;

    const contactMsg = document.querySelector('.contact-msg');
    if (contactMsg) contactMsg.innerText = t.contactMsg;

    // Actualizar Botones de Navegación
    const navVideosBtn = document.querySelector('.nav-btn-videos');
    if (navVideosBtn) navVideosBtn.innerText = t.videosTitle;
    const navSocialBtn = document.querySelector('.nav-btn-social');
    if (navSocialBtn) navSocialBtn.innerText = t.socialTitle;
};

// Función para cambiar el idioma desde el Dropdown
const changeLang = (code, name) => {
    // Definimos la URL de la bandera
    let flagUrl = `https://flagcdn.com/${code}.svg`;
    if (code === 'ct') flagUrl = 'Catalan Flag.svg';
    if (code === 'Jan') flagUrl = 'Jan Panda.png';

    document.getElementById('current-lang').innerHTML = `<img src="${flagUrl}" alt="${code}" class="flag"> ${name} <i class="fas fa-chevron-down" style="margin-left: 5px; font-size: 0.8rem;"></i>`;

    // Guardar preferencia
    localStorage.setItem('preferredLang', code);
    localStorage.setItem('preferredLangName', name);

    // Traducir UI
    updateUIContent(code);

    // Recargar vídeos para actualizar sus fechas en el idioma correcto (opcional)
    if (window.fetchVideos) window.fetchVideos();
};

document.addEventListener('DOMContentLoaded', () => {

    // Cargar idioma guardado o usar español por defecto
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    const savedLangName = localStorage.getItem('preferredLangName') || 'Español';
    changeLang(savedLang, savedLangName);

    /* --- 2. Carga de Vídeos de Akko --- */
    const videosContainer = document.getElementById('videos-container');

    const akkoVideosData = [
        { title: "Un Mago \"Profesional\" me revela trucos de magia", date: "Hace 19 días", id: "ZWIj6wjvGlQ", link: "https://www.youtube.com/watch?v=ZWIj6wjvGlQ" },
        { title: "Si me río te doy VIP.", date: "Hace 25 días", id: "LhN48OjWeEo", link: "https://www.youtube.com/watch?v=LhN48OjWeEo" },
        { title: "Reaccionando a Mesón Masón, Nuevo album de los Diozes || Parte 2", date: "Hace 34 días", id: "3r7zLLLc7Xw", link: "https://www.youtube.com/watch?v=3r7zLLLc7Xw" },
        { title: "Reaccionando a Mesón Masón, Nuevo album de los Diozes || Parte 1", date: "Hace 35 días", id: "iSZBp5zutV4", link: "https://www.youtube.com/watch?v=iSZBp5zutV4" },
        { title: "Intentaron hacerme reír por un VIP y salió muy mal", date: "Hace 38 días", id: "Wp0qHpbz9DE", link: "https://www.youtube.com/watch?v=Wp0qHpbz9DE" },
        { title: "Reaccionando A Set Ups De Mis Seguidores", date: "Hace 49 días", id: "Dg4FUWNyWPk", link: "https://www.youtube.com/watch?v=Dg4FUWNyWPk" }
    ];

    const generateThumbURL = (id) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

    const renderVideos = (videos) => {
        if (!videosContainer) return;
        videosContainer.innerHTML = '';
        videos.forEach((vid, index) => {
            const delay = index * 0.1;
            const card = document.createElement('div');
            card.className = 'video-card';
            card.style.animation = `fadeInUp 0.6s ease-out ${delay}s both`;
            card.onclick = () => window.open(vid.link, '_blank');
            card.innerHTML = `
                <div class="video-thumbnail">
                    <img src="${generateThumbURL(vid.id)}" alt="${vid.title}" onerror="this.src='https://via.placeholder.com/640x360/1e1f22/ff33cc?text=Video';">
                    <span class="video-date-badge">${vid.date}</span>
                </div>
                <div class="video-info"><h3>${vid.title}</h3></div>
            `;
            videosContainer.appendChild(card);
        });
    };

    const channelId = 'UCZmzSBCQsgUdoTum6lVzOEQ'; // Canal de Akko
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    const fetchVideos = async () => {
        try {
            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();
                if (data.items && data.items.length > 0) {
                    const videos = data.items.filter(item => !item.link.includes('/shorts/')).slice(0, 6).map(item => {
                        // Extraer ID del video desde el link
                        const videoIdMatch = item.link.match(/v=([^&]+)/);
                        const videoId = videoIdMatch ? videoIdMatch[1] : item.guid.split(':').pop();

                        // Formatear la fecha relativa según idioma
                        const lang = localStorage.getItem('preferredLang') || 'es';
                        const t = translations[lang] || translations.es;

                        const pubDate = new Date(item.pubDate);
                        const now = new Date();
                        const diffMs = now - pubDate;
                        const diffMin = Math.floor(diffMs / (1000 * 60));
                        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
                        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
                        const diffMonths = Math.floor(diffDays / 30);
                        let dateStr = "";

                        if (diffMin < 1) {
                            dateStr = t.minuteAgo;
                        } else if (diffMin < 60) {
                            dateStr = diffMin === 1 ? t.minuteAgo : t.minutesAgo.replace('{n}', diffMin);
                        } else if (diffHours < 24) {
                            dateStr = diffHours === 1 ? t.hourAgo : t.hoursAgo.replace('{n}', diffHours);
                        } else if (diffDays < 30) {
                            dateStr = diffDays === 1 ? t.dayAgo : t.daysAgo.replace('{n}', diffDays);
                        } else {
                            dateStr = diffMonths === 1 ? t.monthAgo : t.monthsAgo.replace('{n}', diffMonths);
                        }

                        return {
                            title: item.title,
                            date: dateStr,
                            id: videoId,
                            link: item.link
                        };
                    });
                    renderVideos(videos);
                    return;
                }
            }
        } catch (error) {
            console.error('Error al obtener los vídeos automáticos:', error);
        }

        // Si la API falla (ej. bloqueador de anuncios o error de red), mostramos el contenido de respaldo
        renderVideos(akkoVideosData);
    };

    window.fetchVideos = fetchVideos; // Exponer para recarga manual al cambiar idioma

    // Llamamos a la función que descarga dinámicamente los últimos vídeos
    setTimeout(() => { fetchVideos(); }, 500);
});
