/**
 * AYKUT GÜNAY SÜRÜCÜ KURSU — MAIN APPLICATION SCRIPT
 * Powers the 10 official driving school & psychotechnical services,
 * hero slider, course selector, dark service showcase carousel, steering hotspots,
 * interactive E-Sınav quiz modal, and quick enrollment form.
 */

const SERVICES_CATALOG = [
  {
    id: 'a1',
    title: 'A1 Sınıfı Ehliyet',
    category: 'Motosiklet',
    badge: '16+ Yaş',
    minAge: '16+',
    transmission: 'Manuel / Otomatik Seçenekli',
    duration: '14 Saat Direksiyon + Teorik',
    condition: '16 Yaşını Doldurmuş Olmak',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Silindir hacmi 125 cc ve gücü 11 kW’a kadar olan motosikletler için güvenli başlangıç ve denge eğitimi.',
    details: [
      '125 cc silindir hacmine ve 11 kW güce kadar olan iki veya üç tekerlekli motosikletleri kapsar.',
      'Özel eğitim pistimizde slalom, sekiz çizme, denge tahtası ve ani fren-kaçış provaları yapılır.',
      'Kask, dizlik ve koruyucu ekipmanlarımız kurumumuz tarafından eğitim süresince temin edilir.'
    ]
  },
  {
    id: 'a2-manuel',
    title: 'A2 Sınıfı Ehliyet (Manuel)',
    category: 'Motosiklet',
    badge: 'Vitesli Moto',
    minAge: '18+',
    transmission: 'Manuel (Debriyajlı / Vitesli)',
    duration: '14 Saat Birebir Direksiyon',
    condition: '18 Yaşını Doldurmuş Olmak',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Gücü 35 kW (47 beygir) sınırını geçmeyen vitesli motosikletler için profesyonel debriyaj ve viraj hakimiyeti eğitimi.',
    details: [
      'A2 Manuel ehliyet ile hem vitesli hem de otomatik A1 ve A2 kapsamındaki tüm motosikletleri kullanabilirsiniz.',
      'Debriyaj kavrama noktası, vites geçişleri, dar alanda dönüş ve akan trafik sürüşü birebir uygulanır.',
      'İlk kez motosiklet kullanacak adaylar için temel denge aşamasından başlanır.'
    ]
  },
  {
    id: 'a2-otomatik',
    title: 'A2 Sınıfı Ehliyet (Otomatik)',
    category: 'Motosiklet',
    badge: 'Otomatik Moto',
    minAge: '18+',
    transmission: 'Otomatik (Maxi Scooter / CVT)',
    duration: '14 Saat Birebir Direksiyon',
    condition: '18 Yaşını Doldurmuş Olmak',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Vites ve debriyajla uğraşmadan 35 kW güce kadar maxi scooter ve otomatik motosiklet kullanmak isteyenlere özel.',
    details: [
      'Şehir içi ulaşımda yüksek konfor sunan maxi scooter ve otomatik motosikletler ile eğitim verilir.',
      'Gaz-fren koordinasyonu, ayna kontrolü ve sınav parkuru manevralarında yüksek ilk sınav başarısı sağlar.',
      'Kadın ve erkek tüm sürücü adaylarımız için ergonomik ağırlık merkezine sahip eğitim motorları kullanılır.'
    ]
  },
  {
    id: 'b-manuel',
    title: 'B Sınıfı Ehliyet (Manuel)',
    category: 'Otomobil',
    badge: 'En Çok Tercih Edilen',
    minAge: '18+',
    transmission: 'Manuel Vites (Tüm Otomobiller)',
    duration: '16 Saat Birebir Direksiyon',
    condition: '18 Yaşını Doldurmuş Olmak',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Hem manuel hem de otomatik vitesli tüm otomobil ve kamyonetleri kullanma yetkisi sağlayan kapsamlı program.',
    details: [
      'B Manuel ehliyet aldığınızda kısıtlama olmaksızın hem düz vites hem otomatik vites araç kullanabilirsiniz.',
      'Yokuş kalkış, L Park, 25 metre geri sürüş ve paralel park teknikleri garantili formüllerle öğretilir.',
      'Çift pedallı, klimalı, son model eğitim araçlarımızla gerçek sınav güzergahında birebir ders yapılır.'
    ]
  },
  {
    id: 'b-otomatik',
    title: 'B Sınıfı Ehliyet (Otomatik)',
    category: 'Otomobil',
    badge: 'Konforlu Sürüş',
    minAge: '18+',
    transmission: 'Otomatik Vites Otomobil',
    duration: '16 Saat Birebir Direksiyon',
    condition: '18 Yaşını Doldurmuş Olmak',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Debriyaj ve araç stop ettirme stresi olmadan doğrudan trafik okuma, park ve güvenli sürüşe odaklanan eğitim.',
    details: [
      'Yoğun şehir trafiğinde hızlıca araç kullanmaya başlamak isteyen adaylarımız için idealdir.',
      'Stop etme riski olmadığı için aday tüm dikkatini yol, ayna ve park manevralarına verir.',
      'Sabırlı uzman bay ve bayan eğitmen alternatiflerimizle sıfır stresli eğitim süreci.'
    ]
  },
  {
    id: 'b-engelli',
    title: 'B Sınıfı Engelli Ehliyeti',
    category: 'Otomobil',
    badge: 'Özel Tertibatlı',
    minAge: '18+',
    transmission: 'Otomatik & Özel Tertibatlı Araç',
    duration: 'Birebir Esnek Program',
    condition: 'Özel Kodlu Sağlık Raporu',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Engelli sürücü adaylarımız için sağlık kurulu raporundaki kodlara uygun özel tertibatlı araçlarımızla birebir eğitim.',
    details: [
      'Elden gaz-fren aparatı, direksiyon topuzu ve sol ayak gaz pedalı gibi MEB onaylı özel tertibatlı araçlarımız mevcuttur.',
      'ÖTV muafiyetli araç alım süreçlerine uygun sağlık raporu kodları konusunda ücretsiz danışmanlık sağlıyoruz.',
      'Engelsiz ulaşım standartlarında klimalı ve tam güvenlikli eğitim ortamı.'
    ]
  },
  {
    id: 'c-sinifi',
    title: 'C Sınıfı Ehliyet',
    category: 'Ağır Vasıta',
    badge: 'Kamyon & Çekici',
    minAge: '21+',
    transmission: 'Manuel Ağır Ticari',
    duration: '20 Saat Direksiyon Eğitimi',
    condition: 'En Az B Sınıfı Ehliyet Şartı',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Kamyon ve çekici türü ticari ağır vasıta araçları kullanacak profesyonel sürücüler için tonaj ve manevra eğitimi.',
    details: [
      'Azami yüklü ağırlığı 3.500 kg üzerindeki kamyon ve çekicileri kullanma yetkisi verir.',
      'B sınıfı ehliyeti olan ve 21 yaşını dolduran adaylar sadece direksiyon sınavına girerek C sınıfına yükseltebilir (fark sınıfı).',
      'Geniş açı dönüşleri, havalı fren sistemi ve rampa kontrolü uygulamalı olarak gösterilir.'
    ]
  },
  {
    id: 'ce-sinifi',
    title: 'CE Sınıfı Ehliyet',
    category: 'Ağır Vasıta',
    badge: 'Tır & Dorse',
    minAge: '21+',
    transmission: 'Çekici + Yarı Römork (Tır)',
    duration: '12 Saat İleri Manevra Eğitimi',
    condition: 'C Sınıfı Ehliyet Şartı',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Uluslararası ve şehirlerarası lojistik sektöründe tır (çekici + römork/dorse) kullanmak isteyenler için uzmanlık eğitimi.',
    details: [
      'C sınıfı ehliyete sahip sürücülerin tır ve dorse kullanabilmesi için gerekli en üst ticari ehliyet sınıfıdır.',
      'Dorse bağlantı (king-pin) kontrolleri, kör nokta yönetimi ve dorse ile L park / geri yanaşma manevraları öğretilir.',
      'Sadece uygulama direksiyon sınavı ile kısa sürede belgenizi alabilirsiniz.'
    ]
  },
  {
    id: 'd-sinifi',
    title: 'D Sınıfı Ehliyet',
    category: 'Ağır Vasıta',
    badge: 'Otobüs Kaptanlığı',
    minAge: '24+',
    transmission: 'Yolcu Taşıma / Otobüs',
    duration: '14 Saat Direksiyon Eğitimi',
    condition: 'En Az B Sınıfı Ehliyet + 24 Yaş',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Belediye, turizm, personel servisi ve şehirlerarası otobüs kaptanlığı yapmak isteyen sürücüler için kurumsal eğitim.',
    details: [
      'Yolcu taşımacılığında kullanılan otobüs ve minibüs (D1 kapsamı dahil) araçları kullanma yetkisi sağlar.',
      'B sınıfından doğrudan D sınıfına fark eğitimiyle geçiş imkanı mevcuttur.',
      'Sarsıntısız sürüş, durak yanaşma ve uzun araç manevra kabiliyeti üzerine odaklanılır.'
    ]
  },
  {
    id: 'psikoteknik',
    title: 'Psikoteknik',
    category: 'Psikoteknik',
    badge: 'Aynı Gün e-Devlet Raporu',
    minAge: '18+',
    transmission: 'Simülatör Destekli Test Merkezi',
    duration: '1 Saatlik Test (Anında Rapor)',
    condition: 'Kimlik & Ehliyet İle Başvuru',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Ticari araç sürücüleri ve ehliyet iadesi süreçleri için Sağlık Bakanlığı onaylı simülatör eşliğinde psikoteknik belgesi.',
    details: [
      'Dikkat, algı, refleks, hız-mesafe tahmini ve el-ayak koordinasyonunu ölçen 12 aşamalı bilgisayarlı simülatör testi.',
      'Kurum psikoloğumuzun onayıyla sonucunuz aynı gün e-Nabız ve e-Devlet sistemine işlenir.',
      'Ticari yük ve yolcu taşımacılığı yapan tüm sürücüler için 5 yılda bir yenilenmesi zorunlu resmi belgedir.'
    ]
  }
];

const HERO_SLIDES = [
  {
    tag: 'YENİ DÖNEM KAYITLARIMIZ BAŞLADI',
    title: 'Uzman Eğitmenlerle<br/>Sürüşte Ustalığa<br/>Adım Atın.',
    desc: 'A1, A2, B (Manuel/Otomatik/Engelli), C, CE, D sınıfı ehliyet eğitimleri ve Sağlık Bakanlığı onaylı Psikoteknik merkezimizle güvenli sürüşün kurumsal adresiyiz.',
    bg: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1800&q=85'
  },
  {
    tag: 'A1 & A2 MANUEL / OTOMATİK MOTOSİKLET',
    title: 'İki Teker Üzerinde<br/>Tam Hakimiyet ve<br/>Güvenli Özgürlük.',
    desc: '16 yaşından itibaren A1, A2 Manuel ve A2 Otomatik motosiklet sınıflarında koruyucu ekipman destekli, özel parkurlu birebir sürüş eğitimi.',
    bg: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1800&q=85'
  },
  {
    tag: 'C, CE, D AĞIR VASITA & PSİKOTEKNİK MERKEZİ',
    title: 'Profesyonel Kaptanlar<br/>ve Ticari Sürücüler<br/>Burada Yetişiyor.',
    desc: 'Kamyon (C), Tır (CE), Otobüs (D) ehliyet sınıfları ve 1 saatte e-Devlet onaylı Psikoteknik belgesi ile mesleki kariyerinize güç katın.',
    bg: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=85'
  }
];

const TESTIMONIALS_DATA = [
  {
    name: 'Merve Aksoy',
    license: 'B Sınıfı Ehliyet (Otomatik) Mezunumuz',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Trafik korkum olduğu için yıllarca ertelemiştim. Aykut Günay Sürücü Kursu’ndaki hocamın sabrı ve verdiği park formülleri sayesinde direksiyon sınavını ilk girişte hatasız geçtim!'
  },
  {
    name: 'Serkan Çelik',
    license: 'CE Sınıfı Tır Ehliyeti & Psikoteknik',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Hem C sınıfından CE tır ehliyetine geçişimi hem de Psikoteknik belgemin yenilenmesini aynı çatı altında çok hızlı tamamladım. Dorse geri manevra eğitimleri gerçekten çok profesyonel.'
  },
  {
    name: 'Burak Demirci',
    license: 'A2 Sınıfı Ehliyet (Manuel) Mezunumuz',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'Daha önce hiç vitesli motosiklet kullanmamıştım. Sekiz çizme ve slalom parkurunda birebir ilgilendiler, tek seferde A2 ehliyetimi aldım. Herkese tavsiye ederim.'
  },
  {
    name: 'Hakan & Ayşe Yıldız',
    license: 'B Sınıfı Engelli Ehliyeti Mezunumuz',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    quote: 'Özel tertibatlı araçlarının bakımlı olması ve rapor sürecindeki danışmanlıkları için Aykut Günay ailesine çok teşekkür ederiz. Engelsiz ve çok konforlu bir eğitim süreciydi.'
  }
];

const BLOG_ARTICLES = [
  {
    title: 'Direksiyon Sınavında L Park ve Paralel Parkta Tek Hamle Formülü',
    date: '15 Kasım 2026',
    category: 'Sınav Rehberi',
    content: `
      <p>MEB direksiyon uygulama sınavında adayların en çok heyecanlandığı iki aşama <strong>L Park</strong> ve <strong>4 Dubalı Paralel Park</strong> manevralarıdır. Aykut Günay Sürücü Kursu eğitimlerimizde bu iki parkı kelebek cam ve sağ ayna referans noktalarıyla standartlaştırıyoruz:</p>
      <ul style="margin:14px 0 14px 18px;list-style:disc;">
        <li><strong>Paralel Parkta 1. Adım:</strong> Sağ kelebek camda ilk dubayı gördüğünüzde tam sağ kırarak sol aynadan kaldırım tarafındaki ikinci dubayı görene kadar geri gelin.</li>
        <li><strong>Paralel Parkta 2. Adım:</strong> Direksiyonu 1.5 tur düzeltip sağ aynanız ön dubayı kapatana kadar düz geri gelin, ardından tam sol yaparak aracınızı şeride paralel hale getirin.</li>
        <li><strong>25 Metre Geri Sürüş:</strong> Aynalarınızdan kaldırım ve çizgi mesafesini sabitleyerek düşük hızda debriyaj veya fren kontrolüyle düz geri çıkışı tamamlayın.</li>
      </ul>
    `
  },
  {
    title: 'A1, A2 Manuel ve A2 Otomatik Motosiklet Ehliyetleri Arasındaki Farklar',
    date: '10 Kasım 2026',
    category: 'Ehliyet Seçimi',
    content: `
      <p>Motosiklet ehliyeti alırken doğru sınıfı seçmek hem kullanacağınız motosikletin motor gücünü hem de vites tipini belirler:</p>
      <ul style="margin:14px 0 14px 18px;list-style:disc;">
        <li><strong>A1 Sınıfı (16 Yaş):</strong> 125 cc ve 11 kW güce kadar olan şehir içi commuter ve scooter modelleri kapsar.</li>
        <li><strong>A2 Manuel (18 Yaş):</strong> 35 kW (47 beygir) güce kadar hem vitesli/debriyajlı hem de otomatik tüm motosikletleri kullanma hakkı verir.</li>
        <li><strong>A2 Otomatik (18 Yaş):</strong> Vites değiştirmeden 35 kW'a kadar yüksek hacimli maxi scooter kullanmak isteyen adaylar için en pratik seçenektir.</li>
      </ul>
    `
  },
  {
    title: 'C, CE, D Sınıfı Ağır Vasıta Ehliyeti ve Psikoteknik Belgesi Nasıl Alınır?',
    date: '04 Kasım 2026',
    category: 'Ticari & Psikoteknik',
    content: `
      <p>Ticari yük ve yolcu taşımacılığı yapmak isteyen sürücüler için ağır vasıta ehliyeti ve Psikoteknik değerlendirme belgesi temel şarttır:</p>
      <ul style="margin:14px 0 14px 18px;list-style:disc;">
        <li><strong>C Sınıfı (Kamyon):</strong> En az B sınıfı ehliyeti olan ve 21 yaşını dolduran adaylar yazılı sınava girmeden yalnızca direksiyon sınavıyla alabilir.</li>
        <li><strong>CE Sınıfı (Tır/Çekici):</strong> C sınıfı ehliyeti olan adaylar dorse/römork direksiyon sınavıyla CE sınıfına geçiş yapar.</li>
        <li><strong>D Sınıfı (Otobüs):</strong> 24 yaşını doldurmuş ve B sınıfı ehliyete sahip adaylar başvurabilir.</li>
        <li><strong>Psikoteknik Belgesi:</strong> Merkezimizde 1 saatlik simülatör testi ve psikolog onayı ile aynı gün e-Devlet üzerinden tanımlanır.</li>
      </ul>
    `
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHeroSlider();
  initCourseOfferingTabs();
  initServicesShowcase();
  initQuickSearch();
  initSteeringHotspots();
  initTestimonials();
  initEnrollmentForm();
  initInteractiveModals();
  initMultiPageFeatures();
});

/* ==================== 1. MOBILE MENU ==================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');
  if (!toggleBtn || !mainNav) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==================== 2. HERO SLIDER ==================== */
function initHeroSlider() {
  let currentSlide = 0;
  const bgLayer = document.getElementById('heroBgLayer');
  const tagText = document.getElementById('heroTagText');
  const titleEl = document.getElementById('heroTitle');
  const descEl = document.getElementById('heroDesc');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');

  function renderSlide(index) {
    currentSlide = (index + HERO_SLIDES.length) % HERO_SLIDES.length;
    const slide = HERO_SLIDES[currentSlide];
    if (bgLayer) bgLayer.style.backgroundImage = `url('${slide.bg}')`;
    if (tagText) tagText.textContent = slide.tag;
    if (titleEl) titleEl.innerHTML = slide.title;
    if (descEl) descEl.textContent = slide.desc;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => renderSlide(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => renderSlide(currentSlide + 1));
  dots.forEach((dot) => {
    dot.addEventListener('click', () => renderSlide(Number(dot.dataset.slide)));
  });

  setInterval(() => renderSlide(currentSlide + 1), 7000);
}

/* ==================== 3. INTERACTIVE COURSE OFFERING TABS (ALL 10 SERVICES) ==================== */
let activeOfferingService = SERVICES_CATALOG[3]; // Default: B Sınıfı Ehliyet (Manuel)

function initCourseOfferingTabs() {
  const tabsContainer = document.getElementById('offeringTabs');
  const applyBtn = document.getElementById('featuredApplyBtn');
  if (!tabsContainer) return;

  tabsContainer.innerHTML = SERVICES_CATALOG.map((service) => `
    <button
      type="button"
      class="offering-tab-btn ${service.id === activeOfferingService.id ? 'active' : ''}"
      data-service-id="${service.id}"
      role="tab"
      aria-selected="${service.id === activeOfferingService.id}"
    >
      <span>${service.title}</span>
      <span class="tab-badge">${service.minAge}</span>
    </button>
  `).join('');

  tabsContainer.querySelectorAll('.offering-tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = SERVICES_CATALOG.find((s) => s.id === btn.dataset.serviceId);
      if (selected) {
        selectOfferingService(selected.id);
      }
    });
  });

  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      prefillAndScrollToForm(activeOfferingService.title);
    });
  }

  selectOfferingService(activeOfferingService.id);
}

function selectOfferingService(serviceId) {
  const service = SERVICES_CATALOG.find((s) => s.id === serviceId);
  if (!service) return;
  activeOfferingService = service;

  document.querySelectorAll('.offering-tab-btn').forEach((btn) => {
    const isMatch = btn.dataset.serviceId === serviceId;
    btn.classList.toggle('active', isMatch);
    btn.setAttribute('aria-selected', String(isMatch));
  });

  const imgEl = document.getElementById('featuredCourseImg');
  const catEl = document.getElementById('featuredCourseCat');
  const titleEl = document.getElementById('featuredCourseTitle');
  const ageEl = document.getElementById('featuredCourseAge');
  const descEl = document.getElementById('featuredCourseDesc');
  const transEl = document.getElementById('featuredCourseTrans');
  const durEl = document.getElementById('featuredCourseDuration');
  const condEl = document.getElementById('featuredCourseCond');

  if (imgEl) {
    imgEl.src = service.image;
    imgEl.alt = service.title;
  }
  if (catEl) catEl.textContent = service.category;
  if (titleEl) titleEl.textContent = service.title;
  if (ageEl) ageEl.innerHTML = `<span>Yaş Sınırı</span><strong>${service.minAge}</strong>`;
  if (descEl) descEl.textContent = service.shortDesc;
  if (transEl) transEl.textContent = service.transmission;
  if (durEl) durEl.textContent = service.duration;
  if (condEl) condEl.textContent = service.condition;
}

/* ==================== 4. DARK NAVY SERVICES CAROUSEL & GRID (ALL 10 SERVICES) ==================== */
function initServicesShowcase() {
  const track = document.getElementById('servicesTrack');
  const viewport = document.getElementById('servicesViewport');
  const filterBtns = document.querySelectorAll('#serviceFilterPills .filter-pill');
  const toggleBtn = document.getElementById('toggleServiceViewBtn');
  const prevBtn = document.getElementById('servicePrevBtn');
  const nextBtn = document.getElementById('serviceNextBtn');
  const progressFill = document.getElementById('servicesProgressFill');

  if (!track) return;

  function renderCards(filterCategory = 'all') {
    const items = filterCategory === 'all'
      ? SERVICES_CATALOG
      : SERVICES_CATALOG.filter((s) => s.category === filterCategory);

    track.innerHTML = items.map((service) => `
      <article class="service-card" data-id="${service.id}">
        <div class="service-card-top">
          <div>
            <h3>${service.title}</h3>
            <span class="service-card-sub">${service.transmission}</span>
          </div>
          <span class="service-age-tag">${service.minAge} Yaş</span>
        </div>

        <div class="service-card-media">
          <img src="${service.image}" alt="${service.title}" loading="lazy" />
          <span class="service-floating-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <circle cx="12" cy="12" r="9"/>
              <circle cx="12" cy="12" r="3"/>
              <line x1="12" y1="3" x2="12" y2="9"/>
              <line x1="4.2" y1="16.5" x2="9.4" y2="13.5"/>
              <line x1="19.8" y1="16.5" x2="14.6" y2="13.5"/>
            </svg>
          </span>
        </div>

        <div class="service-card-desc-box">
          <p>${service.shortDesc}</p>
          <div class="service-card-actions">
            <button type="button" class="service-detail-btn" data-detail-id="${service.id}">
              Detaylı İncele
            </button>
            <a href="#basvuru-formu" class="service-enroll-link" data-enroll-title="${service.title}">
              Hemen Kayıt →
            </a>
          </div>
        </div>
      </article>
    `).join('');

    track.querySelectorAll('[data-detail-id]').forEach((btn) => {
      btn.addEventListener('click', () => openServiceDetailModal(btn.dataset.detailId));
    });

    track.querySelectorAll('[data-enroll-title]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        prefillAndScrollToForm(link.dataset.enrollTitle);
      });
    });
  }

  renderCards('all');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderCards(btn.dataset.filter);
      if (viewport) viewport.scrollTo({ left: 0, behavior: 'smooth' });
    });
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isGrid = track.classList.toggle('grid-all-mode');
      toggleBtn.textContent = isGrid ? 'Kaydırmalı Görünüme Dön' : 'Tümünü Tek Ekranda Göster';
    });
  }

  if (prevBtn && viewport) {
    prevBtn.addEventListener('click', () => {
      viewport.scrollBy({ left: -380, behavior: 'smooth' });
    });
  }

  if (nextBtn && viewport) {
    nextBtn.addEventListener('click', () => {
      viewport.scrollBy({ left: 380, behavior: 'smooth' });
    });
  }

  if (viewport && progressFill) {
    viewport.addEventListener('scroll', () => {
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      if (maxScroll <= 0) {
        progressFill.style.width = '100%';
        return;
      }
      const ratio = Math.min(100, Math.max(25, (viewport.scrollLeft / maxScroll) * 100));
      progressFill.style.width = `${ratio}%`;
    });
  }

  // Footer service quick links
  document.querySelectorAll('[data-select-service]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.dataset.selectService;
      openServiceDetailModal(id);
    });
  });
}

/* ==================== 5. HEADER QUICK SEARCH ==================== */
function initQuickSearch() {
  const input = document.getElementById('quickSearchInput');
  const dropdown = document.getElementById('searchDropdown');
  if (!input || !dropdown) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLocaleLowerCase('tr-TR');
    if (!q) {
      dropdown.hidden = true;
      return;
    }

    const matches = SERVICES_CATALOG.filter((s) =>
      s.title.toLocaleLowerCase('tr-TR').includes(q) ||
      s.category.toLocaleLowerCase('tr-TR').includes(q) ||
      s.shortDesc.toLocaleLowerCase('tr-TR').includes(q)
    );

    if (matches.length === 0) {
      dropdown.innerHTML = `<div class="search-result-item"><span>Sonuç bulunamadı</span></div>`;
    } else {
      dropdown.innerHTML = matches.map((m) => `
        <div class="search-result-item" data-search-id="${m.id}">
          <strong>${m.title}</strong>
          <span>${m.minAge} Yaş</span>
        </div>
      `).join('');
    }

    dropdown.hidden = false;
    dropdown.querySelectorAll('[data-search-id]').forEach((item) => {
      item.addEventListener('click', () => {
        dropdown.hidden = true;
        input.value = '';
        const egitimlerSec = document.getElementById('egitimler');
        if (egitimlerSec) {
          selectOfferingService(item.dataset.searchId);
          egitimlerSec.scrollIntoView({ behavior: 'smooth' });
        } else {
          openServiceDetailModal(item.dataset.searchId);
        }
      });
    });
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.hidden = true;
    }
  });
}

/* ==================== 6. STEERING WHEEL INTERACTIVE HOTSPOTS ==================== */
function initSteeringHotspots() {
  const hotspots = document.querySelectorAll('.wheel-hotspot');
  const tipText = document.getElementById('wheelTooltipText');
  if (!hotspots.length || !tipText) return;

  hotspots.forEach((btn) => {
    btn.addEventListener('click', () => {
      hotspots.forEach((h) => h.classList.remove('active'));
      btn.classList.add('active');
      tipText.textContent = btn.dataset.tip;
    });
  });
}

/* ==================== 7. TESTIMONIALS CAROUSEL ==================== */
function initTestimonials() {
  let startIndex = 0;
  const grid = document.getElementById('testimonialsGrid');
  const prevBtn = document.getElementById('testiPrevBtn');
  const nextBtn = document.getElementById('testiNextBtn');
  if (!grid) return;

  function renderPair() {
    const first = TESTIMONIALS_DATA[startIndex % TESTIMONIALS_DATA.length];
    const second = TESTIMONIALS_DATA[(startIndex + 1) % TESTIMONIALS_DATA.length];

    grid.innerHTML = [first, second].map((item) => `
      <article class="testimonial-card">
        <div class="testi-top-row">
          <div class="testi-author-meta">
            <h4>${item.name}</h4>
            <span>${item.license}</span>
          </div>
          <span class="testi-quote-mark" aria-hidden="true">“</span>
        </div>

        <div class="testi-body-row">
          <div class="testi-avatar-wrap">
            <img src="${item.avatar}" alt="${item.name}" />
            <span class="testi-verified">✓</span>
          </div>
          <p>"${item.quote}"</p>
        </div>

        <div class="testi-rating-row">
          <span>Kursiyer Memnuniyet Puanı: <strong>5.0 / 5.0</strong></span>
          <span class="stars-green">★★★★★</span>
        </div>
      </article>
    `).join('');
  }

  renderPair();

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      startIndex = (startIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length;
      renderPair();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      startIndex = (startIndex + 1) % TESTIMONIALS_DATA.length;
      renderPair();
    });
  }
}

/* ==================== 8. QUICK ENROLLMENT FORM ==================== */
function prefillAndScrollToForm(serviceTitle) {
  const select = document.getElementById('enrollService') || document.getElementById('msgSubject');
  if (select && serviceTitle) {
    Array.from(select.options).forEach((opt) => {
      if (opt.value === serviceTitle) {
        select.value = serviceTitle;
      }
    });
  }
  const formSection = document.getElementById('basvuru-formu') || document.getElementById('mesaj-formu');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => (document.getElementById('enrollName') || document.getElementById('msgName'))?.focus(), 500);
  } else {
    window.location.href = 'iletisim.html#mesaj-formu';
  }
}

function initEnrollmentForm() {
  const form = document.getElementById('quickEnrollmentForm');
  const feedback = document.getElementById('formFeedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('enrollName').value.trim();
    const phone = document.getElementById('enrollPhone').value.trim();
    const service = document.getElementById('enrollService').value;
    const schedule = document.getElementById('enrollSchedule').value;

    feedback.hidden = false;
    feedback.innerHTML = `
      Sayın <strong>${name}</strong>, <strong>${service}</strong> (${schedule}) ön kayıt talebiniz başarıyla alınmıştır.
      Eğitim danışmanımız <strong>${phone}</strong> numaralı telefondan en kısa sürede sizinle iletişime geçecektir.
    `;
    form.reset();
  });
}

/* ==================== 9. UNIVERSAL INTERACTIVE MODALS ==================== */
function openModalWithHTML(htmlContent) {
  const modal = document.getElementById('infoModal');
  const body = document.getElementById('modalBodyContent');
  if (!modal || !body) return;
  body.innerHTML = htmlContent;
  modal.hidden = false;
}

function closeModal() {
  const modal = document.getElementById('infoModal');
  if (modal) modal.hidden = true;
}

function openServiceDetailModal(serviceId) {
  const service = SERVICES_CATALOG.find((s) => s.id === serviceId);
  if (!service) return;

  const bullets = service.details.map((d) => `<li style="margin-bottom:8px;">✓ ${d}</li>`).join('');
  openModalWithHTML(`
    <span class="section-tag">${service.category}</span>
    <h3 id="modalTitle" style="font-size:1.5rem;margin-bottom:8px;">${service.title}</h3>
    <p style="margin-bottom:16px;color:#485b6b;">${service.shortDesc}</p>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:18px;">
      <div class="spec-chip"><span class="spec-label">Yaş Şartı</span><strong>${service.minAge}</strong></div>
      <div class="spec-chip"><span class="spec-label">Şanzıman</span><strong>${service.transmission}</strong></div>
      <div class="spec-chip"><span class="spec-label">Süre</span><strong>${service.duration}</strong></div>
    </div>
    <h4 style="margin-bottom:8px;">Eğitim ve Belgelendirme Kapsamı:</h4>
    <ul style="margin-bottom:22px;color:#0b2234;font-size:0.9rem;">${bullets}</ul>
    <button type="button" class="btn-primary-green" id="modalEnrollTrigger" style="width:100%;justify-content:center;border:none;cursor:pointer;">
      ${service.title} İçin Hemen Başvur
    </button>
  `);

  document.getElementById('modalEnrollTrigger')?.addEventListener('click', () => {
    closeModal();
    prefillAndScrollToForm(service.title);
  });
}

function initInteractiveModals() {
  const modal = document.getElementById('infoModal');
  const closeBtn = document.getElementById('closeModalBtn');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Video Modal Trigger
  document.getElementById('openVideoModalBtn')?.addEventListener('click', () => {
    openModalWithHTML(`
      <span class="section-tag">KURUMSAL TANITIM</span>
      <h3 id="modalTitle" style="font-size:1.45rem;margin-bottom:12px;">Aykut Günay Sürücü Kursu Eğitim Parkuru</h3>
      <p style="margin-bottom:16px;">
        Kurumumuzda teorik e-sınav sınıflarımız, direksiyon simülatörümüz, Psikoteknik değerlendirme laboratuvarımız ve birebir sınav parkuru eğitimlerimizle adaylarımızı ilk sınavda başarıya hazırlıyoruz.
      </p>
      <div style="border-radius:10px;overflow:hidden;margin-bottom:16px;position:relative;">
        <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80" alt="Eğitim Parkuru" style="width:100%;height:240px;object-fit:cover;" />
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div class="spec-chip"><span class="spec-label">Direksiyon Başarısı</span><strong>%98 İlk Sınavda Geçme</strong></div>
        <div class="spec-chip"><span class="spec-label">Hizmet Çeşitliliği</span><strong>10 Farklı Ehliyet &amp; Belge</strong></div>
      </div>
    `);
  });

  // Required Documents Modal
  document.getElementById('openEvrakModalBtn')?.addEventListener('click', () => {
    openModalWithHTML(`
      <span class="section-tag">KAYIT REHBERİ</span>
      <h3 id="modalTitle" style="font-size:1.45rem;margin-bottom:12px;">Kayıt İçin Gerekli Evraklar</h3>
      <ul style="margin-bottom:20px;line-height:1.9;color:#0b2234;">
        <li>✓ <strong>1 Adet Biyometrik Fotoğraf</strong> (Son 6 ay içinde çekilmiş)</li>
        <li>✓ <strong>Öğrenim Belgesi / Diploma</strong> (e-Devlet mezuniyet belgesi geçerlidir)</li>
        <li>✓ <strong>Adli Sicil Kaydı</strong> (e-Devlet üzerinden barkodlu alınabilir)</li>
        <li>✓ <strong>Sürücü Olur Sağlık Raporu</strong> (Aile hekimi veya anlaşmalı poliklinikler)</li>
        <li>✓ <strong>Kimlik Kartı Fotokopisi</strong> (Fark sınıfları için mevcut ehliyet fotokopisi)</li>
      </ul>
      <p style="font-size:0.85rem;color:#485b6b;">Not: e-Devlet evraklarınızın çıktısını kurs merkezimizde ücretsiz olarak alabilirsiniz.</p>
    `);
  });

  // E-Sinav Mini Quiz Modal
  document.getElementById('openESinavBtn')?.addEventListener('click', () => {
    openModalWithHTML(`
      <span class="section-tag">MEB E-SINAV DENEME MODÜLÜ</span>
      <h3 id="modalTitle" style="font-size:1.4rem;margin-bottom:10px;">Örnek E-Sınav Sorusu</h3>
      <p style="font-weight:700;color:#0b2234;margin-bottom:14px;">
        Soru: Aksine bir işaret yoksa yerleşim yeri dışındaki bölünmüş yollarda otomobiller (B Sınıfı) için azami hız sınırı saatte kaç kilometredir?
      </p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;" id="quizOptions">
        <button type="button" class="offering-tab-btn" data-correct="false">A) 90 km/s</button>
        <button type="button" class="offering-tab-btn" data-correct="true">B) 110 km/s</button>
        <button type="button" class="offering-tab-btn" data-correct="false">C) 120 km/s</button>
        <button type="button" class="offering-tab-btn" data-correct="false">D) 130 km/s</button>
      </div>
      <div id="quizResultBox" class="form-feedback" hidden></div>
    `);

    document.querySelectorAll('#quizOptions button').forEach((btn) => {
      btn.addEventListener('click', () => {
        const res = document.getElementById('quizResultBox');
        if (!res) return;
        res.hidden = false;
        if (btn.dataset.correct === 'true') {
          res.textContent = 'Tebrikler! Doğru Cevap: Bölünmüş yollarda otomobiller için azami hız sınırı 110 km/s’dir.';
        } else {
          res.textContent = 'Yanlış cevap. Doğru seçenek B) 110 km/s olacaktır.';
        }
      });
    });
  });

  // Blog Reader Modals
  document.querySelectorAll('[data-blog]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const article = BLOG_ARTICLES[Number(btn.dataset.blog)];
      if (!article) return;
      openModalWithHTML(`
        <span class="section-tag">${article.category} • ${article.date}</span>
        <h3 id="modalTitle" style="font-size:1.4rem;margin-bottom:12px;">${article.title}</h3>
        <div style="color:#485b6b;font-size:0.94rem;line-height:1.7;">${article.content}</div>
      `);
    });
  });
}


/* ==================== 10. MULTI-PAGE FEATURES (About, Services Modern, Gallery, Contact) ==================== */
function initMultiPageFeatures() {
  // 1. Services Modern detail triggers
  document.querySelectorAll('.smod-read-more[data-detail-id]').forEach((btn) => {
    btn.addEventListener('click', () => openServiceDetailModal(btn.dataset.detailId));
  });

  // 2. About Page: Mission / Vision / Values tabs
  const commitTabs = document.querySelectorAll('[data-commit-tab]');
  const commitHeading = document.getElementById('commitHeading');
  const commitText = document.getElementById('commitText');
  const commitContentMap = {
    misyon: {
      heading: 'Misyonumuz',
      text: 'Adana Yüreğir ve çevresinde ehliyet almak isteyen her yaş ve meslek grubundan sürücü adayımıza; trafik kurallarını içselleştirmiş, savunma sürüş tekniklerine hakim, çevreye ve diğer sürücülere saygılı bir sürüş bilinci kazandırmak temel görevimizdir.'
    },
    vizyon: {
      heading: 'Vizyonumuz',
      text: 'A1, A2, B (Manuel/Otomatik/Engelli), C, CE, D ehliyet sınıfları ve Psikoteknik değerlendirme alanında teknolojik simülatör altyapısı ve %98 ilk sınav başarısıyla Çukurova bölgesinin örnek gösterilen lider sürücü eğitim kurumu olmak.'
    },
    degerler: {
      heading: 'Kurumsal Değerlerimiz',
      text: 'Sabırlı ve pedagojik eğitim yaklaşımı, bakımlı ve çift pedallı modern araç filosu, şeffaf fiyatlandırma, kadın ve engelli sürücü adaylarımıza pozitif destek ve trafik güvenliğinde sıfır taviz ilkesi.'
    }
  };

  commitTabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      commitTabs.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const data = commitContentMap[btn.dataset.commitTab];
      if (data && commitHeading && commitText) {
        commitHeading.textContent = data.heading;
        commitText.textContent = data.text;
      }
    });
  });

  // 3. Gallery Page: 2 Columns Filterable Grid
  const galleryGrid = document.getElementById('gallery2ColGrid');
  const galleryTabs = document.querySelectorAll('#galleryFilterTabs .g-tab-btn');

  function renderGallery2Col(category = 'all') {
    if (!galleryGrid) return;
    const list = category === 'all'
      ? SERVICES_CATALOG
      : SERVICES_CATALOG.filter((s) => s.category === category);

    galleryGrid.innerHTML = list.map((item) => `
      <article class="g2-item-card">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="g2-overlay">
          <button type="button" class="g2-zoom-btn" data-gallery-id="${item.id}" aria-label="${item.title} Detayını Aç">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
          </button>
          <span class="g2-cat-tag">${item.category} • ${item.minAge} Yaş</span>
          <h3>${item.title} Eğitimi</h3>
        </div>
      </article>
    `).join('');

    galleryGrid.querySelectorAll('[data-gallery-id]').forEach((btn) => {
      btn.addEventListener('click', () => openServiceDetailModal(btn.dataset.galleryId));
    });
  }

  if (galleryGrid) {
    renderGallery2Col('all');
    galleryTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        galleryTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        renderGallery2Col(tab.dataset.gfilter);
      });
    });
  }

  // 4. Contact Page: Location Tabs & Message Form
  const locTabs = document.querySelectorAll('#locationTabs .smr-tab');
  const locBox = document.getElementById('locationDetailBox');
  const locMap = {
    merkez: `
      <p><strong>Merkez Şube Adres:</strong> Selahattin Eyyubi Mahallesi, Şehit Jandarma Er Mustafa Göksal Caddesi (3770. ve 3800. Sokak kesişimi yakını), 01240 Yüreğir / Adana</p>
      <p><strong>Telefon:</strong> 0552 555 33 94 • Pzt - Cmt: 08:30 - 19:30</p>
    `,
    parkur: `
      <p><strong>Direksiyon Eğitim Parkuru:</strong> Yüreğir resmi MEB direksiyon sınav güzergahı üzerinde L Park, 25m geri sürüş, paralel park ve akan trafik uygulama alanı.</p>
      <p><strong>Randevu &amp; Ulaşım:</strong> 0552 555 33 94</p>
    `,
    psikoteknik: `
      <p><strong>Psikoteknik Değerlendirme Merkezi:</strong> Selahattin Eyyubi Mah. Şehit Jandarma Er Mustafa Göksal Cad. 01240 Yüreğir / Adana (Merkez Binamızda)</p>
      <p><strong>Rapor Süresi:</strong> 1 saatlik simülatör testi sonrası aynı gün e-Devlet onayı.</p>
    `,
    esinav: `
      <p><strong>Teorik &amp; E-Sınav Hazırlık Sınıfları:</strong> Klimalı modern dersliklerimizde tablet ve bilgisayar destekli birebir MEB E-Sınav deneme sınavları.</p>
      <p><strong>Kayıt Bilgi:</strong> 0552 555 33 94</p>
    `
  };

  locTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      locTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      if (locBox && locMap[tab.dataset.loc]) {
        locBox.innerHTML = locMap[tab.dataset.loc];
      }
    });
  });

  const contactForm = document.getElementById('contactMessageForm');
  const contactFeedback = document.getElementById('contactFormFeedback');
  if (contactForm && contactFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('msgName').value.trim();
      const phone = document.getElementById('msgPhone').value.trim();
      const subject = document.getElementById('msgSubject').value;

      contactFeedback.hidden = false;
      contactFeedback.innerHTML = `
        Teşekkürler Sayın <strong>${name}</strong>! <strong>${subject}</strong> konulu mesajınız Yüreğir merkez şubemize ulaşmıştır.
        Danışmanlarımız <strong>${phone}</strong> numaralı telefondan en kısa sürede size dönüş yapacaktır. Acil bilgi için: <strong>0552 555 33 94</strong>.
      `;
      contactForm.reset();
    });
  }

  document.getElementById('contactFaqTrigger')?.addEventListener('click', () => {
    document.getElementById('openEvrakModalBtn')?.click();
  });
}
