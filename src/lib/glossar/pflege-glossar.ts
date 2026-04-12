/**
 * Pflege-Glossar — Zentrale Datenbank für Fachbegriffe DE/AR/TR
 *
 * Quelle: PflBG-Curriculum, Thiemes Pflege (2023), PONS Fachwörterbuch Pflege
 * Alle Begriffe von Dozentin geprüft (Stand: 2026-04)
 */

export interface GlossarEintrag {
  id: string;
  begriffDe: string;
  begriffAr: string;
  begriffTr: string;
  erklaerungDe: string;
  erklaerungAr: string;
  erklaerungTr: string;
  fachgebiet: string;
  aussprache?: string;
}

/** Alle Fachgebiete als Union-Type */
export type Fachgebiet =
  | "Prophylaxe"
  | "Anatomie"
  | "Vitalzeichen"
  | "Pflegeprozess"
  | "Hygiene"
  | "Krankheitslehre"
  | "Medikamente"
  | "Ernährung"
  | "Dokumentation"
  | "Kommunikation"
  | "Notfall";

export const FACHGEBIETE: Fachgebiet[] = [
  "Prophylaxe",
  "Anatomie",
  "Vitalzeichen",
  "Pflegeprozess",
  "Hygiene",
  "Krankheitslehre",
  "Medikamente",
  "Ernährung",
  "Dokumentation",
  "Kommunikation",
  "Notfall",
];

export const pflegeGlossar: GlossarEintrag[] = [
  // === Prophylaxe ===
  {
    id: "dekubitus",
    begriffDe: "Dekubitus",
    begriffAr: "قرحة الضغط",
    begriffTr: "Bası yarası",
    erklaerungDe: "Druckgeschwür der Haut durch anhaltenden Druck auf Gewebe, z. B. bei bettlägerigen Patienten.",
    erklaerungAr: "قرحة جلدية ناتجة عن ضغط مستمر على الأنسجة، مثلاً عند المرضى طريحي الفراش.",
    erklaerungTr: "Uzun süreli basınç nedeniyle ciltte oluşan yara, örneğin yatalak hastalarda.",
    fachgebiet: "Prophylaxe",
    aussprache: "de-KU-bi-tus",
  },
  {
    id: "thrombose",
    begriffDe: "Thrombose",
    begriffAr: "تجلط الدم",
    begriffTr: "Tromboz",
    erklaerungDe: "Bildung eines Blutgerinnsels (Thrombus) in einem Blutgefäß, meist in den tiefen Beinvenen.",
    erklaerungAr: "تكوّن خثرة دموية في وعاء دموي، غالباً في أوردة الساق العميقة.",
    erklaerungTr: "Kan damarında kan pıhtısı oluşması, genellikle derin bacak damarlarında.",
    fachgebiet: "Prophylaxe",
    aussprache: "trom-BO-se",
  },
  {
    id: "pneumonie",
    begriffDe: "Pneumonie",
    begriffAr: "التهاب الرئة",
    begriffTr: "Pnömoni",
    erklaerungDe: "Entzündung des Lungengewebes, häufig durch Bakterien oder Viren verursacht.",
    erklaerungAr: "التهاب أنسجة الرئة، غالباً بسبب بكتيريا أو فيروسات.",
    erklaerungTr: "Akciğer dokusunun iltihaplanması, genellikle bakteri veya virüslerden kaynaklanır.",
    fachgebiet: "Prophylaxe",
    aussprache: "pneu-mo-NIE",
  },
  {
    id: "kontraktur",
    begriffDe: "Kontraktur",
    begriffAr: "تقفع المفصل",
    begriffTr: "Kontraktür",
    erklaerungDe: "Dauerhafte Verkürzung von Muskeln, Sehnen oder Bändern, die zu Bewegungseinschränkung führt.",
    erklaerungAr: "تقصّر دائم في العضلات أو الأوتار أو الأربطة يؤدي إلى تقييد الحركة.",
    erklaerungTr: "Kas, tendon veya bağların kalıcı olarak kısalması, hareket kısıtlılığına yol açar.",
    fachgebiet: "Prophylaxe",
    aussprache: "kon-trak-TUR",
  },
  {
    id: "aspiration",
    begriffDe: "Aspiration",
    begriffAr: "الاستنشاق الخاطئ",
    begriffTr: "Aspirasyon",
    erklaerungDe: "Einatmen von Fremdkörpern, Flüssigkeit oder Nahrung in die Atemwege.",
    erklaerungAr: "دخول أجسام غريبة أو سوائل أو طعام إلى الممرات الهوائية عن طريق الاستنشاق.",
    erklaerungTr: "Yabancı cisimlerin, sıvı veya gıdanın solunum yollarına kaçması.",
    fachgebiet: "Prophylaxe",
    aussprache: "as-pi-ra-ZI-ON",
  },
  {
    id: "sturzprophylaxe",
    begriffDe: "Sturzprophylaxe",
    begriffAr: "الوقاية من السقوط",
    begriffTr: "Düşme profilaksisi",
    erklaerungDe: "Maßnahmen zur Vermeidung von Stürzen, z. B. Haltegriffe, rutschfeste Socken, Beleuchtung.",
    erklaerungAr: "إجراءات لمنع السقوط، مثل الدرابزين والجوارب المانعة للانزلاق والإضاءة.",
    erklaerungTr: "Düşmeleri önlemek için alınan tedbirler, örneğin tutunma kolları, kaymaz çoraplar, aydınlatma.",
    fachgebiet: "Prophylaxe",
  },

  // === Vitalzeichen ===
  {
    id: "vitalzeichen",
    begriffDe: "Vitalzeichen",
    begriffAr: "العلامات الحيوية",
    begriffTr: "Vital bulgular",
    erklaerungDe: "Messbare Körperfunktionen: Blutdruck, Puls, Temperatur, Atmung, Sauerstoffsättigung.",
    erklaerungAr: "وظائف الجسم القابلة للقياس: ضغط الدم، النبض، الحرارة، التنفس، تشبع الأكسجين.",
    erklaerungTr: "Ölçülebilir vücut fonksiyonları: kan basıncı, nabız, ateş, solunum, oksijen satürasyonu.",
    fachgebiet: "Vitalzeichen",
  },
  {
    id: "blutdruck",
    begriffDe: "Blutdruck",
    begriffAr: "ضغط الدم",
    begriffTr: "Kan basıncı",
    erklaerungDe: "Druck des Blutes auf die Gefäßwände. Normalwert: ca. 120/80 mmHg.",
    erklaerungAr: "ضغط الدم على جدران الأوعية الدموية. القيمة الطبيعية: حوالي 120/80 ملم زئبق.",
    erklaerungTr: "Kanın damar duvarlarına uyguladığı basınç. Normal değer: yaklaşık 120/80 mmHg.",
    fachgebiet: "Vitalzeichen",
  },
  {
    id: "puls",
    begriffDe: "Puls",
    begriffAr: "النبض",
    begriffTr: "Nabız",
    erklaerungDe: "Tastbare Druckwelle in den Arterien, die durch den Herzschlag entsteht. Normal: 60-100/min.",
    erklaerungAr: "موجة ضغط محسوسة في الشرايين ناتجة عن نبضات القلب. الطبيعي: 60-100 في الدقيقة.",
    erklaerungTr: "Kalp atışıyla arterlerde hissedilen basınç dalgası. Normal: 60-100/dk.",
    fachgebiet: "Vitalzeichen",
  },
  {
    id: "koerpertemperatur",
    begriffDe: "Körpertemperatur",
    begriffAr: "درجة حرارة الجسم",
    begriffTr: "Vücut sıcaklığı",
    erklaerungDe: "Wärme des Körpers. Normalwert: 36,5-37,4 °C. Fieber ab 38,0 °C.",
    erklaerungAr: "حرارة الجسم. القيمة الطبيعية: 36.5-37.4 درجة مئوية. الحمى تبدأ من 38.0 درجة.",
    erklaerungTr: "Vücut ısısı. Normal değer: 36,5-37,4 °C. Ateş 38,0 °C'den itibaren.",
    fachgebiet: "Vitalzeichen",
  },
  {
    id: "atmung",
    begriffDe: "Atmung",
    begriffAr: "التنفس",
    begriffTr: "Solunum",
    erklaerungDe: "Aufnahme von Sauerstoff und Abgabe von Kohlendioxid. Normale Atemfrequenz: 12-20/min.",
    erklaerungAr: "امتصاص الأكسجين وإخراج ثاني أكسيد الكربون. معدل التنفس الطبيعي: 12-20 في الدقيقة.",
    erklaerungTr: "Oksijen alımı ve karbondioksit atılması. Normal solunum hızı: 12-20/dk.",
    fachgebiet: "Vitalzeichen",
  },

  // === Pflegeprozess ===
  {
    id: "pflegeprozess",
    begriffDe: "Pflegeprozess",
    begriffAr: "عملية التمريض",
    begriffTr: "Hemşirelik süreci",
    erklaerungDe: "Systematisches Vorgehen in der Pflege: Informationssammlung, Planung, Durchführung, Evaluation.",
    erklaerungAr: "إجراء منهجي في التمريض: جمع المعلومات، التخطيط، التنفيذ، التقييم.",
    erklaerungTr: "Hemşirelikte sistematik yaklaşım: bilgi toplama, planlama, uygulama, değerlendirme.",
    fachgebiet: "Pflegeprozess",
  },
  {
    id: "anamnese",
    begriffDe: "Anamnese",
    begriffAr: "السيرة المرضية",
    begriffTr: "Anamnez",
    erklaerungDe: "Systematische Befragung des Patienten zu Krankengeschichte, Beschwerden und Lebensumständen.",
    erklaerungAr: "استجواب منهجي للمريض حول تاريخه المرضي وشكاواه وظروف حياته.",
    erklaerungTr: "Hastanın hastalık öyküsü, şikayetleri ve yaşam koşulları hakkında sistematik sorgulanması.",
    fachgebiet: "Pflegeprozess",
    aussprache: "a-nam-NE-se",
  },
  {
    id: "pflegeplanung",
    begriffDe: "Pflegeplanung",
    begriffAr: "تخطيط الرعاية",
    begriffTr: "Bakım planlaması",
    erklaerungDe: "Schriftliche Festlegung von Pflegezielen und Pflegemaßnahmen für den einzelnen Patienten.",
    erklaerungAr: "تحديد كتابي لأهداف الرعاية وإجراءات التمريض للمريض الفردي.",
    erklaerungTr: "Her hasta için bakım hedeflerinin ve hemşirelik müdahalelerinin yazılı olarak belirlenmesi.",
    fachgebiet: "Pflegeprozess",
  },
  {
    id: "evaluation",
    begriffDe: "Evaluation",
    begriffAr: "التقييم",
    begriffTr: "Değerlendirme",
    erklaerungDe: "Überprüfung, ob die geplanten Pflegeziele erreicht wurden und Anpassung des Pflegeplans.",
    erklaerungAr: "مراجعة ما إذا تم تحقيق أهداف الرعاية المخططة وتعديل خطة الرعاية.",
    erklaerungTr: "Planlanan bakım hedeflerine ulaşılıp ulaşılmadığının kontrolü ve bakım planının uyarlanması.",
    fachgebiet: "Pflegeprozess",
    aussprache: "e-va-lu-a-ZI-ON",
  },

  // === Hygiene ===
  {
    id: "hygiene",
    begriffDe: "Hygiene",
    begriffAr: "النظافة",
    begriffTr: "Hijyen",
    erklaerungDe: "Maßnahmen zur Verhütung von Krankheiten und Erhaltung der Gesundheit.",
    erklaerungAr: "إجراءات للوقاية من الأمراض والحفاظ على الصحة.",
    erklaerungTr: "Hastalıkların önlenmesi ve sağlığın korunması için alınan tedbirler.",
    fachgebiet: "Hygiene",
  },
  {
    id: "desinfektion",
    begriffDe: "Desinfektion",
    begriffAr: "التطهير",
    begriffTr: "Dezenfeksiyon",
    erklaerungDe: "Abtöten oder Inaktivierung von Krankheitserregern auf Oberflächen, Haut oder Instrumenten.",
    erklaerungAr: "قتل أو تعطيل مسببات الأمراض على الأسطح أو الجلد أو الأدوات.",
    erklaerungTr: "Yüzeylerde, ciltte veya aletlerde hastalık etkenlerinin öldürülmesi veya etkisizleştirilmesi.",
    fachgebiet: "Hygiene",
    aussprache: "des-in-fek-ZI-ON",
  },
  {
    id: "sterilisation",
    begriffDe: "Sterilisation",
    begriffAr: "التعقيم",
    begriffTr: "Sterilizasyon",
    erklaerungDe: "Vollständige Abtötung aller Mikroorganismen einschließlich Sporen, z. B. durch Autoklavieren.",
    erklaerungAr: "قتل كامل لجميع الكائنات الدقيقة بما فيها الأبواغ، مثلاً بالتعقيم بالبخار.",
    erklaerungTr: "Sporlar dahil tüm mikroorganizmaların tamamen öldürülmesi, örneğin otoklavlama ile.",
    fachgebiet: "Hygiene",
    aussprache: "ste-ri-li-sa-ZI-ON",
  },
  {
    id: "nosokomiale-infektion",
    begriffDe: "Nosokomiale Infektion",
    begriffAr: "عدوى المستشفيات",
    begriffTr: "Hastane enfeksiyonu",
    erklaerungDe: "Infektion, die im Zusammenhang mit einem Krankenhausaufenthalt erworben wird.",
    erklaerungAr: "عدوى يُصاب بها المريض أثناء الإقامة في المستشفى.",
    erklaerungTr: "Hastanede kalış süresinde kazanılan enfeksiyon.",
    fachgebiet: "Hygiene",
    aussprache: "no-so-ko-mi-A-le in-fek-ZI-ON",
  },

  // === Anatomie ===
  {
    id: "mobilisation",
    begriffDe: "Mobilisation",
    begriffAr: "التعبئة الحركية",
    begriffTr: "Mobilizasyon",
    erklaerungDe: "Maßnahmen zur Förderung der Beweglichkeit, z. B. Aufstehen, Gehen, Bewegungsübungen.",
    erklaerungAr: "إجراءات لتعزيز الحركة، مثل النهوض والمشي وتمارين الحركة.",
    erklaerungTr: "Hareketliliği artırmaya yönelik tedbirler, örneğin ayağa kalkma, yürüme, hareket egzersizleri.",
    fachgebiet: "Anatomie",
    aussprache: "mo-bi-li-sa-ZI-ON",
  },
  {
    id: "lagerung",
    begriffDe: "Lagerung",
    begriffAr: "تغيير الوضعية",
    begriffTr: "Pozisyon verme",
    erklaerungDe: "Positionierung des Patienten im Bett zur Druckentlastung, Atmungserleichterung oder Schmerzlinderung.",
    erklaerungAr: "وضع المريض في السرير لتخفيف الضغط أو تسهيل التنفس أو تخفيف الألم.",
    erklaerungTr: "Hastanın yatakta basınç azaltma, solunum kolaylaştırma veya ağrı hafifletme amacıyla konumlandırılması.",
    fachgebiet: "Anatomie",
  },

  // === Dokumentation ===
  {
    id: "dokumentation",
    begriffDe: "Dokumentation",
    begriffAr: "التوثيق",
    begriffTr: "Dokümantasyon",
    erklaerungDe: "Schriftliche Erfassung aller pflegerischen Maßnahmen, Beobachtungen und Veränderungen.",
    erklaerungAr: "تسجيل كتابي لجميع إجراءات التمريض والملاحظات والتغييرات.",
    erklaerungTr: "Tüm hemşirelik müdahalelerinin, gözlemlerin ve değişikliklerin yazılı olarak kaydedilmesi.",
    fachgebiet: "Dokumentation",
  },
  {
    id: "pflegebericht",
    begriffDe: "Pflegebericht",
    begriffAr: "تقرير التمريض",
    begriffTr: "Hemşirelik raporu",
    erklaerungDe: "Täglicher schriftlicher Bericht über den Zustand des Patienten und durchgeführte Maßnahmen.",
    erklaerungAr: "تقرير يومي مكتوب عن حالة المريض والإجراءات المنفذة.",
    erklaerungTr: "Hastanın durumu ve uygulanan müdahaleler hakkında günlük yazılı rapor.",
    fachgebiet: "Dokumentation",
  },

  // === Krankheitslehre ===
  {
    id: "diabetes-mellitus",
    begriffDe: "Diabetes mellitus",
    begriffAr: "داء السكري",
    begriffTr: "Şeker hastalığı",
    erklaerungDe: "Stoffwechselerkrankung mit erhöhtem Blutzuckerspiegel durch Insulinmangel oder -resistenz.",
    erklaerungAr: "مرض أيضي يتميز بارتفاع مستوى السكر في الدم بسبب نقص أو مقاومة الأنسولين.",
    erklaerungTr: "İnsülin eksikliği veya direnci nedeniyle kan şekeri yüksekliğiyle seyreden metabolizma hastalığı.",
    fachgebiet: "Krankheitslehre",
    aussprache: "di-a-BE-tes me-LI-tus",
  },
  {
    id: "apoplex",
    begriffDe: "Apoplex",
    begriffAr: "السكتة الدماغية",
    begriffTr: "İnme",
    erklaerungDe: "Schlaganfall — plötzliche Durchblutungsstörung im Gehirn durch Gefäßverschluss oder Blutung.",
    erklaerungAr: "سكتة دماغية — اضطراب مفاجئ في تدفق الدم إلى الدماغ بسبب انسداد وعاء أو نزيف.",
    erklaerungTr: "Felç — beyin damarlarında tıkanma veya kanama nedeniyle ani kan dolaşımı bozukluğu.",
    fachgebiet: "Krankheitslehre",
    aussprache: "a-po-PLEKS",
  },
  {
    id: "demenz",
    begriffDe: "Demenz",
    begriffAr: "الخرف",
    begriffTr: "Demans",
    erklaerungDe: "Fortschreitender Verlust geistiger Fähigkeiten wie Gedächtnis, Denken und Orientierung.",
    erklaerungAr: "فقدان تدريجي للقدرات العقلية مثل الذاكرة والتفكير والتوجه.",
    erklaerungTr: "Hafıza, düşünme ve yönelim gibi zihinsel yeteneklerin ilerleyici kaybı.",
    fachgebiet: "Krankheitslehre",
    aussprache: "de-MENZ",
  },
  {
    id: "herzinsuffizienz",
    begriffDe: "Herzinsuffizienz",
    begriffAr: "قصور القلب",
    begriffTr: "Kalp yetmezliği",
    erklaerungDe: "Herzschwäche — das Herz kann nicht mehr ausreichend Blut in den Kreislauf pumpen.",
    erklaerungAr: "ضعف القلب — لا يستطيع القلب ضخ كمية كافية من الدم إلى الدورة الدموية.",
    erklaerungTr: "Kalp yetmezliği — kalp yeterli miktarda kanı dolaşıma pompalayamaz.",
    fachgebiet: "Krankheitslehre",
    aussprache: "herz-in-su-fi-ZI-ENZ",
  },

  // === Medikamente ===
  {
    id: "analgetikum",
    begriffDe: "Analgetikum",
    begriffAr: "مسكّن الألم",
    begriffTr: "Ağrı kesici",
    erklaerungDe: "Schmerzmittel — Arzneimittel zur Linderung oder Beseitigung von Schmerzen.",
    erklaerungAr: "دواء لتخفيف أو إزالة الألم.",
    erklaerungTr: "Ağrıyı hafifletmeye veya gidermeye yarayan ilaç.",
    fachgebiet: "Medikamente",
    aussprache: "an-al-GE-ti-kum",
  },
  {
    id: "antibiotikum",
    begriffDe: "Antibiotikum",
    begriffAr: "مضاد حيوي",
    begriffTr: "Antibiyotik",
    erklaerungDe: "Arzneimittel zur Bekämpfung bakterieller Infektionen.",
    erklaerungAr: "دواء لمكافحة العدوى البكتيرية.",
    erklaerungTr: "Bakteriyel enfeksiyonlarla mücadele etmek için kullanılan ilaç.",
    fachgebiet: "Medikamente",
    aussprache: "an-ti-bi-O-ti-kum",
  },

  // === Ernährung ===
  {
    id: "dysphagie",
    begriffDe: "Dysphagie",
    begriffAr: "عسر البلع",
    begriffTr: "Yutma güçlüğü",
    erklaerungDe: "Schluckstörung — Schwierigkeiten beim Schlucken von Nahrung oder Flüssigkeiten.",
    erklaerungAr: "اضطراب في البلع — صعوبة في بلع الطعام أو السوائل.",
    erklaerungTr: "Yutma bozukluğu — yiyecek veya sıvıları yutmada zorluk.",
    fachgebiet: "Ernährung",
    aussprache: "dys-fa-GIE",
  },
  {
    id: "dehydratation",
    begriffDe: "Dehydratation",
    begriffAr: "الجفاف",
    begriffTr: "Dehidratasyon",
    erklaerungDe: "Austrocknung des Körpers durch zu geringe Flüssigkeitszufuhr oder erhöhten Flüssigkeitsverlust.",
    erklaerungAr: "جفاف الجسم بسبب نقص تناول السوائل أو زيادة فقدانها.",
    erklaerungTr: "Yetersiz sıvı alımı veya aşırı sıvı kaybı nedeniyle vücudun kuruması.",
    fachgebiet: "Ernährung",
    aussprache: "de-hyd-ra-ta-ZI-ON",
  },

  // === Kommunikation ===
  {
    id: "empathie",
    begriffDe: "Empathie",
    begriffAr: "التعاطف",
    begriffTr: "Empati",
    erklaerungDe: "Fähigkeit, sich in die Gefühle und Gedanken eines anderen Menschen hineinzuversetzen.",
    erklaerungAr: "القدرة على فهم مشاعر وأفكار شخص آخر والتعاطف معه.",
    erklaerungTr: "Bir başka insanın duygu ve düşüncelerini anlama ve hissetme yeteneği.",
    fachgebiet: "Kommunikation",
    aussprache: "em-pa-TIE",
  },
  {
    id: "validation",
    begriffDe: "Validation",
    begriffAr: "المصادقة العاطفية",
    begriffTr: "Validasyon",
    erklaerungDe: "Kommunikationsmethode nach Naomi Feil für den Umgang mit desorientierten, älteren Menschen.",
    erklaerungAr: "أسلوب تواصل وفق نعومي فيل للتعامل مع كبار السن المشوّشين.",
    erklaerungTr: "Naomi Feil'e göre, yönelim bozukluğu olan yaşlılarla iletişim yöntemi.",
    fachgebiet: "Kommunikation",
    aussprache: "va-li-da-ZI-ON",
  },

  // === Notfall ===
  {
    id: "reanimation",
    begriffDe: "Reanimation",
    begriffAr: "الإنعاش القلبي الرئوي",
    begriffTr: "Resüsitasyon",
    erklaerungDe: "Wiederbelebung bei Herz-Kreislauf-Stillstand: Herzdruckmassage und Beatmung.",
    erklaerungAr: "إنعاش عند توقف القلب والدورة الدموية: تدليك القلب والتنفس الاصطناعي.",
    erklaerungTr: "Kalp durmasında canlandırma: kalp masajı ve suni solunum.",
    fachgebiet: "Notfall",
    aussprache: "re-a-ni-ma-ZI-ON",
  },
  {
    id: "schock",
    begriffDe: "Schock",
    begriffAr: "الصدمة",
    begriffTr: "Şok",
    erklaerungDe: "Lebensbedrohlicher Zustand mit Kreislaufversagen und unzureichender Organdurchblutung.",
    erklaerungAr: "حالة مهددة للحياة مع فشل الدورة الدموية وعدم كفاية تروية الأعضاء.",
    erklaerungTr: "Dolaşım yetmezliği ve organların yetersiz kanlanmasıyla seyreden yaşamı tehdit eden durum.",
    fachgebiet: "Notfall",
  },
  {
    id: "exsikkose",
    begriffDe: "Exsikkose",
    begriffAr: "جفاف شديد",
    begriffTr: "Eksikoz",
    erklaerungDe: "Schwere Austrocknung des Körpers — häufig bei älteren Menschen mit vermindertem Durstgefühl.",
    erklaerungAr: "جفاف شديد في الجسم — شائع عند كبار السن الذين يعانون من ضعف الشعور بالعطش.",
    erklaerungTr: "Vücudun ciddi susuzluğu — özellikle susama hissi azalmış yaşlılarda sık görülür.",
    fachgebiet: "Notfall",
    aussprache: "ek-si-KO-se",
  },
  {
    id: "sepsis",
    begriffDe: "Sepsis",
    begriffAr: "تسمم الدم",
    begriffTr: "Sepsis",
    erklaerungDe: "Blutvergiftung — lebensbedrohliche Reaktion des Körpers auf eine Infektion.",
    erklaerungAr: "تسمم الدم — استجابة مهددة للحياة من الجسم تجاه عدوى.",
    erklaerungTr: "Kan zehirlenmesi — vücudun bir enfeksiyona karşı yaşamı tehdit eden tepkisi.",
    fachgebiet: "Notfall",
    aussprache: "SEP-sis",
  },
];

/**
 * Glossar nach Fachgebiet filtern
 */
export function filterNachFachgebiet(fachgebiet: string): GlossarEintrag[] {
  return pflegeGlossar.filter((e) => e.fachgebiet === fachgebiet);
}

/**
 * Glossar durchsuchen (Begriff + Erklärung in allen Sprachen)
 */
export function sucheGlossar(suchbegriff: string): GlossarEintrag[] {
  const q = suchbegriff.toLowerCase().trim();
  if (!q) return pflegeGlossar;
  return pflegeGlossar.filter(
    (e) =>
      e.begriffDe.toLowerCase().includes(q) ||
      e.begriffAr.includes(q) ||
      e.begriffTr.toLowerCase().includes(q) ||
      e.erklaerungDe.toLowerCase().includes(q) ||
      e.erklaerungAr.includes(q) ||
      e.erklaerungTr.toLowerCase().includes(q)
  );
}

/**
 * Einzelnen Eintrag nach ID finden
 */
export function findeGlossarEintrag(id: string): GlossarEintrag | undefined {
  return pflegeGlossar.find((e) => e.id === id);
}

/**
 * Konvertiert GlossarEintrag → GlossarEntry (CE-05 Legacy-Format)
 * für Kompatibilität mit FachbegriffText
 */
export function zuGlossarEntry(eintrag: GlossarEintrag): {
  begriff: string;
  erklaerung: string;
  uebersetzungTr?: string;
  uebersetzungAr?: string;
  ausspracheAudio?: string;
} {
  return {
    begriff: eintrag.begriffDe,
    erklaerung: eintrag.erklaerungDe,
    uebersetzungTr: eintrag.begriffTr,
    uebersetzungAr: eintrag.begriffAr,
  };
}
