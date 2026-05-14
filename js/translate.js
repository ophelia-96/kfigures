/* ============================================================
   KFIGURES — Translation System (EN / TR)
   ============================================================ */
(function () {
  'use strict';

  const TRANSLATIONS = {
    en: {
      'nav.home': 'Home', 'nav.product': 'Product', 'nav.process': 'Process', 'nav.about': 'About',
      'hero.eyebrow': 'CUSTOM FIGURES',
      'hero.statement': 'not a toy,<br><em>an icon</em>',
      'hero.cta.explore': 'Explore the Drop', 'hero.cta.story': 'Our Story', 'hero.scroll': 'scroll',
      'marquee.1': 'CUSTOM 3D FIGURES', 'marquee.2': 'LUXURY COLLECTIBLES', 'marquee.3': 'MADE TO ORDER', 'marquee.4': 'NOT A TOY. AN ICON.',
      'intro.label': '002 / CONCEPT',
      'intro.large': 'We turn people into <em>objects of desire.</em>',
      'intro.body': 'Handcrafted 3D-printed figures built from your image, your energy, your identity. Not mass-produced. Not generic. Singular.',
      'feature.01.title': 'Yours Only',
      'feature.01.body': 'Every figure is a limited edition of one. No reissues. No duplicates. Entirely yours.',
      'feature.02.title': 'Precision Craft',
      'feature.02.body': 'Studio-grade 3D printing. Hand-finished. Obsessive attention to detail on every millimeter.',
      'cta.ready': 'Ready?', 'cta.title': 'Claim your figure.', 'cta.button': 'See the Collection',
      'footer.tag': 'not a toy. an icon.', 'footer.copy': '© 2025 KFIGURES. All rights reserved.',
      'product.eyebrow': 'THE DROP',
      'product.title': 'whatever<br>you need,<br><em>we got\'em.</em>',
      'product.subtitle': 'if we don\'t — we probably will.',
      'spec.label': '004 / SPECS',
      'spec.title': 'Built to<br><em>last forever.</em>',
      'spec.desc': 'Not mass-produced. Not offshore. Each figure is a one-off studio production, finished by hand, made to endure.',
      'spec.material': 'Material', 'spec.material.val': 'PLA filament',
      'spec.finish': 'Finish', 'spec.finish.val': 'Hand-painted, UV sealed',
      'spec.edition': 'Edition', 'spec.edition.val': 'Edition of 1 — yours only',
      'spec.packaging': 'Packaging', 'spec.packaging.val': 'High-quality display box',
      'gallery.label': '004.5 / GALLERY', 'gallery.title': 'Our Work',
      'gallery.1': 'The Weeknd', 'gallery.2': 'V1 (from Ultrakill)', 'gallery.3': 'Custom Character', 'gallery.4': 'Billie Eilish',
      'types.label': '005 / OFFERINGS', 'types.title': 'What We Make',
      'type.01.name': 'The Self', 'type.01.desc': 'A figure of you. Your likeness, your style, your energy — made permanent.', 'type.01.cta': 'Inquire →',
      'type.02.name': 'The Gift', 'type.02.desc': 'The ultimate gift. Custom figure of someone else. Built for obsession, not shelves.', 'type.02.cta': 'Inquire →',
      'type.03.name': 'The Character', 'type.03.desc': 'Original characters, IP, fantasy builds. If you can imagine it, we can print it.', 'type.03.cta': 'Inquire →',
      'type.04.name': 'The Icon', 'type.04.desc': 'For brands, artists, and collaborators. Limited drops. High-impact collectibles.', 'type.04.cta': 'Inquire →',
      'drop.tag': 'LIMITED COMMISSIONS OPEN',
      'drop.title': 'Slots are rare.<br>Don\'t sleep on yours.',
      'drop.body': 'Once they\'re gone, the waitlist opens.',
      'drop.button': 'Start Your Commission', 'drop.note': 'Response within 48h',
      'custom.label': '006 / CAN\'T FIND IT?',
      'custom.title': 'If we don\'t have<br>what you want,<br><em>reach out.</em>',
      'custom.body': 'We build what doesn\'t exist yet. Tell us what you need — if we can make it, it\'s yours.',
      'custom.button': 'Contact Us',
      'faq.label': '007 / FAQ', 'faq.title': 'Frequently Asked Questions',
      'faq.q1': 'How long does it take?',
      'faq.a1': 'The printing takes about 5-6 hours, painting takes about 3-4 hours then the cargo takes a few days depending on where you live.',
      'faq.q2': 'What type of figures do you sell?',
      'faq.a2': 'It can be a figure of a fictional character, custom figure of a loved one, anyone if you have a picture.',
      'faq.q3': 'How much does these figures cost?',
      'faq.a3': 'The prices are on the shopier page, but if you have questions you can reach my mail.',
      'process.eyebrow': 'THE CRAFT',
      'process.title': 'From Vision<br>to <em>Reality.</em>',
      'process.subtitle': 'every figure has a story.',
      'process.section.label': '003 / HOW IT WORKS', 'process.section.title': 'The Process',
      'step.01.title': 'Submit Your Vision',
      'step.01.body': 'Send us your references. Photos, mood boards, concepts — the more you bring, the sharper the result.',
      'step.02.title': 'We Design the Model',
      'step.02.body': 'Our studio translates your identity into a 3D model. Every pose, texture, and expression dialed in.',
      'step.03.title': 'You Approve',
      'step.03.body': 'Review. Refine. Nothing goes to print without your sign-off. Iteration is part of the craft.',
      'step.04.title': 'We Print & Finish',
      'step.04.body': 'Studio-grade 3D printing. Hand-painted. Sealed. Packaged like the collectable it is.',
      'process.materials.label': '003.5 / MATERIALS', 'process.materials.title': 'What Goes Into Every Figure',
      'process.mat.1.title': 'PLA Filament', 'process.mat.1.body': 'Premium quality PLA — strong, lightweight, and dimensionally accurate.',
      'process.mat.2.title': 'Acrylic Paint', 'process.mat.2.body': 'Hand-applied acrylic paints for vibrant, durable color. Each stroke is deliberate.',
      'process.mat.3.title': 'UV Sealant', 'process.mat.3.body': 'Professional-grade UV coating locks in color and protects against wear and sunlight.',
      'process.timeline.label': '003.7 / TIMELINE', 'process.timeline.title': 'From Order to Doorstep',
      'process.tl.1.label': 'DAY 1-2', 'process.tl.1.title': 'Consultation', 'process.tl.1.body': 'We discuss your vision and finalize the concept.',
      'process.tl.2.label': 'DAY 3-5', 'process.tl.2.title': '3D Modeling', 'process.tl.2.body': 'Your figure is sculpted digitally with precision.',
      'process.tl.3.label': 'DAY 6-7', 'process.tl.3.title': 'Printing', 'process.tl.3.body': 'Studio-grade FDM printing brings the model to life.',
      'process.tl.4.label': 'DAY 8-9', 'process.tl.4.title': 'Hand Finishing', 'process.tl.4.body': 'Sanding, painting, sealing — every detail perfected.',
      'process.tl.5.label': 'DAY 10+', 'process.tl.5.title': 'Delivery', 'process.tl.5.body': 'Carefully packaged and shipped to your door.',
      'process.cta.title': 'See it in person.', 'process.cta.body': 'Ready to start your own figure?', 'process.cta.button': 'View Products',
      'about.eyebrow': '003 / THE MAKER', 'about.subtitle': 'Maker · Embedded Systems · AI',
      'about.bio.label': 'BIO',
      'about.bio': 'I\'m a <strong>maker and embedded systems developer</strong> who builds at the intersection of hardware, software, and AI. From IoT systems that respond to your phone to AI-powered 3D printing workflows — most of what I make is built in collaboration with AI tools. Currently expanding into <strong>game development</strong> and deepening my automation work.',
      'about.skills.label': '004 / TOOLKIT', 'about.skills.title': 'Skills & tools.',
      'about.projects.label': '005 / WORK', 'about.projects.title': 'Completed projects.',
      'about.cat.iot': 'IoT & Remote Control', 'about.cat.ai': 'AI & Creative Tools', 'about.cat.software': 'Software & Automation',
      'about.p1.title': 'ESP32 Telegram PC Wake System', 'about.p1.body': 'A remote PC power-on system triggered by a Telegram message. The ESP32 listens for the "/on" command sent to a Telegram bot — when it receives it, it wakes up the connected PC. No need to be home.',
      'about.p2.title': 'ESP32 Web-Controlled Robot Vehicle', 'about.p2.body': 'A robot vehicle driven through a browser-based HTML interface. The ESP32 hosts a web page with directional buttons — open it on any device on the same network and start driving immediately. No app required.',
      'about.p3.title': 'ESP32 Cloud Relay Communication', 'about.p3.body': 'An IoT relay system where commands travel through the cloud — allowing the ESP32 to receive instructions from anywhere in the world, not just the local network.',
      'about.p4.title': 'kfigures', 'about.p4.body': 'A pipeline that transforms any character or real person into a 3D printable figure. Starting from an image, it runs through image and 3D generation models to produce a print-ready model — turning anyone into a collectible.',
      'about.p5.title': 'Python Personal Assistant System', 'about.p5.body': 'A desktop assistant built in Python that integrates with OBS for PC activity recording, supports remote app launching, and feeds a live security camera — a personal control center for your machine.',
      'about.future.label': '006 / UPCOMING', 'about.future.title': 'What\'s next.',
      'about.f1.title': 'Devil\'s Hand', 'about.f1.body': 'A story-driven card game about a man trapped in debt and hunted by forces that aren\'t quite human. The game weaves narrative and card mechanics together — every hand you play moves the story forward, and the story decides the stakes of the next hand.',
      'about.f2.title': 'Python Personal Assistant — v2', 'about.f2.body': 'An overhaul of the existing assistant system: smarter voice command recognition, a wider set of actions it can perform, and a more polished overall experience — turning a working prototype into something genuinely usable every day.',
      'about.cta.label': 'Get in touch', 'about.cta.title': 'Let\'s build<br><em>something.</em>', 'about.cta.button': 'See the Collection',
    },
    tr: {
      'nav.home': 'Ana Sayfa', 'nav.product': 'Ürünler', 'nav.process': 'Süreç', 'nav.about': 'Hakkımda',
      'hero.eyebrow': 'ÖZEL FİGÜRLER',
      'hero.statement': 'oyuncak falan değil,<br><em>bu bi ikon</em>',
      'hero.cta.explore': 'Bi Bak İstersen', 'hero.cta.story': 'Hikayemiz', 'hero.scroll': 'aşağı kaydır',
      'marquee.1': 'ÖZEL 3D FİGÜRLER', 'marquee.2': 'LÜKS KOLEKSİYON', 'marquee.3': 'SİPARİŞE ÖZEL', 'marquee.4': 'OYUNCAK DEĞİL. İKON.',
      'intro.label': '002 / KONSEPT',
      'intro.large': 'İnsanları <em>herkesin isteyeceği şeylere</em> dönüştürüyoruz.',
      'intro.body': 'Senin fotoğrafından, senin tarzından, senin enerjinden yapılan el işi 3D figürler. Fabrika işi değil. Sıradan hiç değil. Tek ve biricik.',
      'feature.01.title': 'Tek Sana Özel',
      'feature.01.body': 'Her figür dünyada bir tane. Tekrarı yok, kopyası yok. Sadece senin.',
      'feature.02.title': 'Takıntılı İşçilik',
      'feature.02.body': 'Stüdyo seviyesinde 3D baskı. Elle tek tek bitirilmiş. Her milimetresi düşünülmüş.',
      'cta.ready': 'Hazır mısın?', 'cta.title': 'Figürünü kap.', 'cta.button': 'Koleksiyona Bak',
      'footer.tag': 'oyuncak değil. ikon.', 'footer.copy': '© 2025 KFIGURES. Tüm hakları saklıdır.',
      'product.eyebrow': 'KOLEKSİYON',
      'product.title': 'ne istersen,<em>bizde var.</em>',
      'product.subtitle': 'yoksa da — yakında olur.',
      'spec.label': '004 / ÖZELLİKLER',
      'spec.title': 'Ömür boyu<br><em>dayanır.</em>',
      'spec.desc': 'Fabrika işi değil. Çin malı değil. Her figür stüdyoda teker teker üretilir, elle bitirilir, sağlam olsun diye yapılır.',
      'spec.material': 'Malzeme', 'spec.material.val': 'PLA filament',
      'spec.finish': 'Son Kat', 'spec.finish.val': 'Elle boyanmış, UV ile kaplanmış',
      'spec.edition': 'Üretim', 'spec.edition.val': 'Tek adet — sadece senin',
      'spec.packaging': 'Paket', 'spec.packaging.val': 'Kaliteli vitrin kutusu',
      'gallery.label': '004.5 / GALERİ', 'gallery.title': 'Yaptıklarımız',
      'gallery.1': 'The Weeknd', 'gallery.2': 'V1 (Ultrakill)', 'gallery.3': 'Özel Yapım', 'gallery.4': 'Billie Eilish',
      'types.label': '005 / NE YAPIYORUZ', 'types.title': 'Neler Yapıyoruz',
      'type.01.name': 'Kendin', 'type.01.desc': 'Senin figürün. Senin suratın, senin tarzın, senin enerjin — taşa kazınmış gibi kalıcı.', 'type.01.cta': 'Detay Al →',
      'type.02.name': 'Hediye', 'type.02.desc': 'Efsane bi hediye. Sevdiğin birinin figürü. Rafa değil, vitrinde durması için yapılmış.', 'type.02.cta': 'Detay Al →',
      'type.03.name': 'Karakter', 'type.03.desc': 'Kendi karakterin, fantazi dünyandan biri, aklına ne geliyorsa. Hayal et, biz basalım.', 'type.03.cta': 'Detay Al →',
      'type.04.name': 'İkon', 'type.04.desc': 'Markalar, sanatçılar, collab\'lar için. Sınırlı sayıda, fena etkili koleksiyon parçaları.', 'type.04.cta': 'Detay Al →',
      'drop.tag': 'SINIRLI SLOT AÇIK',
      'drop.title': 'Yerler sınırlı.<br>Uyuma.',
      'drop.body': 'Dolunca bekleme listesi açılıyor.',
      'drop.button': 'Siparişini Başlat', 'drop.note': '48 saat içinde dönüş yaparız',
      'custom.label': '006 / ARADIĞIN YOK MU?',
      'custom.title': 'Aradığını<br>bulamadıysan,<br><em>yaz bize.</em>',
      'custom.body': 'Olmayan şeyi biz yaparız zaten. Ne istediğini söyle — yapabiliyorsak direkt senin.',
      'custom.button': 'Bize Yaz',
      'faq.label': '007 / SSS', 'faq.title': 'Merak Edilenler',
      'faq.q1': 'Ne kadar sürüyor?',
      'faq.a1': 'Baskı 5-6 saat, boyama 3-4 saat falan alıyor. Kargo da nerede oturduğuna göre birkaç gün.',
      'faq.q2': 'Ne tür figürler yapıyorsunuz?',
      'faq.a2': 'Anime karakteri, oyun karakteri, sevdiğin birinin figürü, fotoğrafı olan herkesinki olur.',
      'faq.q3': 'Fiyatlar ne kadar?',
      'faq.a3': 'Fiyatlar shopier sayfasında var, kafana takılan bi şey olursa mail at rahat rahat.',
      'process.eyebrow': 'ZANAAT',
      'process.title': 'Hayalden<br><em>Gerçeğe.</em>',
      'process.subtitle': 'her figürün bi hikayesi var.',
      'process.section.label': '003 / NASIL OLUYOR', 'process.section.title': 'Süreç',
      'step.01.title': 'Fikrini Gönder',
      'step.01.body': 'Referanslarını at bize. Fotoğraf, konsept, mood board — ne kadar çok verirsen o kadar iyi çıkar.',
      'step.02.title': 'Modeli Biz Tasarlıyoruz',
      'step.02.body': 'Stüdyomuz seni 3D modele çeviriyor. Poz, doku, ifade — hepsi tık tık ayarlanıyor.',
      'step.03.title': 'Sen Onaylıyorsun',
      'step.03.body': 'Bak, incele, beğenmezsen değiştirelim. Senin onayın olmadan basıma geçmiyoruz.',
      'step.04.title': 'Basıyoruz & Bitiriyoruz',
      'step.04.body': 'Stüdyo kalitesinde 3D baskı. Elle boyanmış. Kaplanmış. Koleksiyon parçası gibi paketlenmiş.',
      'process.materials.label': '003.5 / MALZEMELER', 'process.materials.title': 'Her Figüre Neler Giriyor',
      'process.mat.1.title': 'PLA Filament', 'process.mat.1.body': 'Kaliteli PLA — sağlam, hafif, ölçüsü tam.',
      'process.mat.2.title': 'Akrilik Boya', 'process.mat.2.body': 'Elle sürülen akrilik boyalar. Renkleri canlı, dayanıklılığı sağlam.',
      'process.mat.3.title': 'UV Kaplama', 'process.mat.3.body': 'Profesyonel UV kaplama ile renk sabitlenip güneşe ve aşınmaya karşı korunuyor.',
      'process.timeline.label': '003.7 / ZAMAN ÇİZELGESİ', 'process.timeline.title': 'Siparişten Kapına',
      'process.tl.1.label': 'GÜN 1-2', 'process.tl.1.title': 'Görüşme', 'process.tl.1.body': 'Ne istediğini konuşuyoruz, konsepti netleştiriyoruz.',
      'process.tl.2.label': 'GÜN 3-5', 'process.tl.2.title': '3D Modelleme', 'process.tl.2.body': 'Figürün dijitalde şekilleniyor, detaylar işleniyor.',
      'process.tl.3.label': 'GÜN 6-7', 'process.tl.3.title': 'Baskı', 'process.tl.3.body': 'FDM baskıyla model hayata geçiyor.',
      'process.tl.4.label': 'GÜN 8-9', 'process.tl.4.title': 'Elle Bitirme', 'process.tl.4.body': 'Zımparalama, boyama, kaplama — her detay üzerinde duruyoruz.',
      'process.tl.5.label': 'GÜN 10+', 'process.tl.5.title': 'Teslimat', 'process.tl.5.body': 'Özenle paketlenip sana yollanıyor.',
      'process.cta.title': 'Kendin gör.', 'process.cta.body': 'Kendi figürünü yaptırmaya hazır mısın?', 'process.cta.button': 'Ürünlere Bak',
      'about.eyebrow': '003 / YAPIMCI', 'about.subtitle': 'Yapımcı · Gömülü Sistemler · YZ',
      'about.bio.label': 'BİYOGRAFİ',
      'about.bio': 'Donanım, yazılım ve yapay zekanın kesiştiği yerde bir şeyler yapan bir <strong>maker ve gömülü sistemler geliştiricisiyim</strong>. Telefonundan PC\'ni açan IoT sistemlerinden yapay zekayla çalışan 3D baskı süreçlerine kadar — yaptıklarımın büyük kısmı YZ araçlarıyla beraber oluyor. Şu an <strong>oyun geliştirme</strong> tarafına da giriyorum.',
      'about.skills.label': '004 / ARAÇLAR', 'about.skills.title': 'Neler biliyorum.',
      'about.projects.label': '005 / İŞLER', 'about.projects.title': 'Yaptığım projeler.',
      'about.cat.iot': 'IoT & Uzaktan Kontrol', 'about.cat.ai': 'YZ & Yaratıcı Araçlar', 'about.cat.software': 'Yazılım & Otomasyon',
      'about.p1.title': 'ESP32 Telegram PC Açma Sistemi', 'about.p1.body': 'Telegram\'dan mesaj atarak PC\'ni açabildiğin bi sistem. ESP32, Telegram botuna gelen "/on" komutunu dinliyor — geldiğinde PC\'yi uyandırıyor. Evde olman gerekmiyor.',
      'about.p2.title': 'ESP32 Web Kontrollü Robot Araç', 'about.p2.body': 'Tarayıcıdan sürdüğün bi robot araç. ESP32 bi web sayfası açıyor, yön tuşlarıyla sürüyorsun — aynı WiFi\'daki herhangi bi cihazdan. Uygulama indirmene gerek yok.',
      'about.p3.title': 'ESP32 Bulut Röle Sistemi', 'about.p3.body': 'Komutların buluttan geçtiği bi IoT röle sistemi — ESP32\'ye sadece aynı ağdan değil, dünyanın her yerinden komut gönderebiliyorsun.',
      'about.p4.title': 'kfigures', 'about.p4.body': 'Herhangi bi karakteri ya da gerçek kişiyi 3D baskıya hazır figüre çeviren bi pipeline. Fotoğraftan başlıyor, görüntü ve 3D üretim modellerinden geçiyor, baskıya hazır model çıkıyor — herkesi koleksiyon parçasına dönüştürüyor.',
      'about.p5.title': 'Python Kişisel Asistan', 'about.p5.body': 'OBS ile PC aktivitelerini kaydeden, uzaktan uygulama açabilen ve canlı güvenlik kamerası besleyen Python tabanlı bi masaüstü asistanı — bilgisayarın için kişisel kontrol merkezi.',
      'about.future.label': '006 / YAKINDA', 'about.future.title': 'Sırada ne var.',
      'about.f1.title': 'Devil\'s Hand', 'about.f1.body': 'Borç bataklığına saplanmış, pek de insana benzemeyen güçlerin peşine düştüğü bi adam hakkında hikaye odaklı kart oyunu. Oynadığın her el hikayeyi ilerletiyor, hikaye de bi sonraki elin riskini belirliyor.',
      'about.f2.title': 'Python Kişisel Asistan — v2', 'about.f2.body': 'Asistan sisteminin baştan sona yenilenmesi: daha akıllı ses tanıma, yapabileceği şeyler genişliyor, genel deneyim çok daha düzgün — çalışan bi prototipi her gün rahatça kullanılacak bi şeye çeviriyoruz.',
      'about.cta.label': 'İletişime geç', 'about.cta.title': 'Hadi bi şeyler<br><em>yapalım.</em>', 'about.cta.button': 'Koleksiyona Bak',
    }
  };

  let currentLang = localStorage.getItem('kfigures-lang') || 'en';

  function applyTranslations(lang) {
    const dict = TRANSLATIONS[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (el.hasAttribute('data-i18n-html')) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update flag button
    const flagBtn = document.getElementById('langToggle');
    if (flagBtn) {
      flagBtn.innerHTML = lang === 'en'
        ? '<svg viewBox="0 0 60 40" width="28" height="19"><clipPath id="fc"><rect width="60" height="40" rx="4"/></clipPath><g clip-path="url(#fc)"><rect width="60" height="40" fill="#012169"/><path d="M0 0L60 40M60 0L0 40" stroke="#fff" stroke-width="6"/><path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" stroke-width="3.5"/><path d="M30 0V40M0 20H60" stroke="#fff" stroke-width="10"/><path d="M30 0V40M0 20H60" stroke="#C8102E" stroke-width="6"/></g></svg>'
        : '<svg viewBox="0 0 60 40" width="28" height="19"><clipPath id="fc"><rect width="60" height="40" rx="4"/></clipPath><g clip-path="url(#fc)"><rect width="60" height="40" fill="#E30A17"/><circle cx="26" cy="20" r="10" fill="#fff"/><circle cx="29" cy="20" r="8" fill="#E30A17"/><polygon points="35,20 31.5,21.5 33,24.5 30.5,22.5 28,24.5 29.5,21.5 27,20 30,20 31,17 32,20" fill="#fff"/></g></svg>';
    }

    // Update mobile flag too
    const mobileFlagBtn = document.getElementById('langToggleMobile');
    if (mobileFlagBtn) {
      mobileFlagBtn.innerHTML = flagBtn ? flagBtn.innerHTML : '';
    }

    localStorage.setItem('kfigures-lang', lang);
    currentLang = lang;
  }

  function toggleLang() {
    const newLang = currentLang === 'en' ? 'tr' : 'en';
    applyTranslations(newLang);
  }

  // Expose globally
  window.kfToggleLang = toggleLang;

  // Apply on load
  document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);
  });
})();
