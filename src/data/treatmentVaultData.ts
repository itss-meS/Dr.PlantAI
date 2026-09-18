import { LanguageCode, LanguageOption, TreatmentVaultItem } from '../types';
import tomatoBlightImg from '../assets/images/tomato_blight_leaf_1788623913613.jpg';
import cornRustImg from '../assets/images/corn_rust_macro_1788623944723.jpg';
import healthyLeafImg from '../assets/images/healthy_crop_leaf_1788623932348.jpg';
import farmCanopyImg from '../assets/images/farm_field_canopy_1788623961794.jpg';
import landingHeroImg from '../assets/images/indian_tomato_potato_farmer_1788625005935.jpg';
import potatoBlightImg from '../assets/images/potato_blight_indian_leaf_1788625069920.jpg';

export const FARM_CANOPY_IMG = farmCanopyImg;
export const LANDING_HERO_IMG = landingHeroImg;
export const TOMATO_BLIGHT_IMG = tomatoBlightImg;
export const POTATO_BLIGHT_IMG = potatoBlightImg;
export const CORN_RUST_IMG = cornRustImg;
export const HEALTHY_LEAF_IMG = healthyLeafImg;

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🌐' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', flag: '🇰🇪' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
];

export const TREATMENT_VAULT: TreatmentVaultItem[] = [
  {
    id: 'tomato_early_blight',
    imageUrl: tomatoBlightImg,
    crop: 'Tomato',
    disease: 'Early Blight',
    pathogenType: 'fungus',
    pathogenScientificName: 'Alternaria solani',
    commonNames: ['Target Spot', 'Alternaria Canker', 'Agati Jhulsa (Hindi)'],
    symptomsDescription: 'Concentric dark brown rings resembling a "bullseye" or target board, typically starting on oldest bottom leaves. Leaves yellow and prematurely drop.',
    favorableConditions: 'High humidity (>90%) with warm temperatures (24°C - 29°C), especially after rainfall or heavy dew.',
    severityLevel: 'moderate',
    organicRemedies: [
      {
        name: 'Neem Oil & Soap Emulsion',
        recipe: 'Mix 50ml pure cold-pressed Neem Oil with 10ml liquid dish soap into 10L warm water. Shake vigorously to emulsify.',
        prepTime: '15 mins',
        costEstimate: 'Very Low (< $0.50)',
        applicationMethod: 'Spray undersides and tops of all foliage every 7-10 days early morning before sun is intense.'
      },
      {
        name: 'Sour Buttermilk / Whey Spray',
        recipe: 'Ferment 1 liter of fresh buttermilk or milk whey for 48 hours until distinctly sour. Dilute with 9 liters clean water.',
        prepTime: '2 days ferment',
        costEstimate: 'Free / Kitchen Waste',
        applicationMethod: 'Lactic acid bacteria suppresses fungal spores. Spray weekly at first sign of target spots.'
      },
      {
        name: 'Trichoderma Viride Bio-Fungicide',
        recipe: 'Mix 50g Trichoderma powder with 1kg farmyard compost or 15L water. Let activate in shade for 2 hours.',
        prepTime: '2 hours',
        costEstimate: 'Low (< $2.00)',
        applicationMethod: 'Drench soil at the root zone and spray lower stems to prevent spore splash-back.'
      }
    ],
    chemicalTreatments: [
      {
        activeIngredient: 'Mancozeb 75% WP',
        tradeNames: ['Dithane M-45', 'Indofil M-45', 'Penncozeb'],
        dosagePer15LKnapsack: '35 - 40 grams (approx. 2.5 tablespoons)',
        safetyIntervalDays: 7,
        precautions: 'Wear mask and protective gloves. Do not apply during flowering if honeybees are active.',
        toxicityLevel: 'Moderate'
      },
      {
        activeIngredient: 'Chlorothalonil 75% WP',
        tradeNames: ['Bravo', 'Echo', 'Kavach'],
        dosagePer15LKnapsack: '30 - 35 grams',
        safetyIntervalDays: 5,
        precautions: 'Broad-spectrum contact fungicide. Apply thoroughly covering lower canopy.',
        toxicityLevel: 'Moderate'
      }
    ],
    culturalPractices: [
      'Prune off and safely bury or burn lower 30cm of leaves touching soil',
      'Always use drip irrigation or furrows; strictly avoid overhead sprinkler watering',
      'Mulch with dry straw or plastic film to prevent rain droplets from splashing fungal spores from soil onto leaves',
      'Rotate crops with non-solanaceous crops (e.g. Maize, Beans) for at least 2-3 years'
    ],
    preventionTips: [
      'Space plants 60cm apart for rapid air drying',
      'Stake or trellis tomato vines to keep foliage off wet soil'
    ],
    translations: {
      en: {
        title: 'Tomato Early Blight (Alternaria solani)',
        summary: 'Fungal infection forming concentric target-like brown spots on lower leaves.',
        symptoms: 'Brown bullseye rings, yellowing leaves, bottom-up defoliation.',
        organicAdvice: 'Spray fermented sour buttermilk (1:9 dilution) or 50ml Neem oil emulsion every 7 days. Remove bottom infected leaves.',
        chemicalAdvice: 'Mancozeb 75% WP: 38g per 15L knapsack sprayer. Wait 7 days before harvesting.',
        emergencyAlert: 'Prune the lowest 30cm of foliage immediately to stop upward progression.'
      },
      hi: {
        title: 'टमाटर का अगेती झुलसा (Early Blight)',
        summary: 'फंगल बीमारी जो निचली पत्तियों पर गोल छल्लेदार भूरे धब्बे बनाती है।',
        symptoms: 'पत्तियों पर निशाने (Bullseye) जैसे छल्ले, पत्तियां पीली होकर गिरना।',
        organicAdvice: '1 लीटर खट्टी छाछ को 9 लीटर पानी में मिलाकर या 50ml नीम तेल का घोल बनाकर हर 7 दिन में पत्तियों के नीचे-ऊपर छिड़कें।',
        chemicalAdvice: 'मैनकोजेब 75% WP (Dithane M-45): 15 लीटर पंप में 35-40 ग्राम घोलकर छिड़कें। कटाई से 7 दिन पहले बंद करें।',
        emergencyAlert: 'जमीन से छूने वाली निचली 1 फीट पत्तियों को तुरंत काटकर खेत से दूर नष्ट करें।'
      },
      sw: {
        title: 'Ukungu wa Awali wa Nyanya (Early Blight)',
        summary: 'Ugonjwa wa fangasi unaosababisha madoa ya mviringo kwenye majani ya chini.',
        symptoms: 'Madoa ya kahawia yenye mistari ya duara, majani yananyauka.',
        organicAdvice: 'Nyunyizia mafuta ya mwarobaini (Neem) 50ml au maziwa ya mgando yaliyochachuka kila baada ya siku 7.',
        chemicalAdvice: 'Mancozeb 75% WP: Tumia gramu 35-40 kwenye tanki la lita 15. Subiri siku 7 kabla ya kuvuna.',
        emergencyAlert: 'Kata mara moja majani yote ya chini yanayogusa udongo na uyachome.'
      },
      es: {
        title: 'Tizón Temprano del Tomate (Alternaria)',
        summary: 'Hongo que causa manchas concéntricas en forma de diana en las hojas inferiores.',
        symptoms: 'Anillos marrones con borde amarillo, defoliación de abajo hacia arriba.',
        organicAdvice: 'Aplicar emulsión de aceite de Neem (50ml/10L) o suero de leche fermentado cada 7 días.',
        chemicalAdvice: 'Mancozeb 75% WP: 35-40g por mochila de 15 litros. Intervalo de seguridad: 7 días.',
        emergencyAlert: 'Podar y quemar hojas infectadas inferiores a 30cm del suelo.'
      },
      te: {
        title: 'టమాటా ముందస్తు తెగులు (Early Blight)',
        summary: 'క్రింది ఆకులపై వలయాల వంటి గోధుమ రంగు మచ్చలను కలిగించే ఫంగస్ వ్యాధి.',
        symptoms: 'లక్ష్యం లాంటి వలయాల మచ్చలు, ఆకులు పసుపు రంగులోకి మారి రాలిపోవడం.',
        organicAdvice: '1 లీటరు పుల్లటి మజ్జిగను 9 లీటర్ల నీటిలో కలిపి లేదా వేప నూనెను 7 రోజులకు ఒకసారి పిచికారీ చేయండి.',
        chemicalAdvice: 'మాంకోజెబ్ 75% WP: 15 లీటర్ల పంపుకు 35-40 గ్రాములు వాడండి.',
        emergencyAlert: 'నేలను తాకే క్రింది ఆకులను వెంటనే తొలగించండి.'
      },
      bn: {
        title: 'টমেটোর আগাম ধসা রোগ (Early Blight)',
        summary: 'ছত্রাকজনিত রোগ যা নিচের পাতায় গোল গোল দাগ সৃষ্টি করে।',
        symptoms: 'টার্গেট বোর্ডের মতো দাগ, পাতা হলুদ হয়ে ঝরে পড়া।',
        organicAdvice: 'টক ঘোল বা নিম তেলের স্প্রে প্রতি সপ্তাহে ব্যবহার করুন। আক্রান্ত পাতা কেটে ফেলুন।',
        chemicalAdvice: 'ম্যানকোজেব ৭৫% ডব্লিউপি: ১৫ লিটার ড্রামে ৩৫-৪০ গ্রাম মিশিয়ে স্প্রে করুন।',
        emergencyAlert: 'মাটির কাছাকাছি নিচের পাতাগুলো সাথে সাথে কেটে সরিয়ে ফেলুন।'
      },
      mr: {
        title: 'टोमॅटोचा करपा रोग (Early Blight)',
        summary: 'खालच्या पानांवर गोल रिंगासारखे तपकिरी ठिपके पाडणारा बुरशीजन्य रोग.',
        symptoms: 'पानांवर चक्राकार तपकिरी डाग, पाने पिवळी पडून गळणे.',
        organicAdvice: '५० मिली कडुलिंब तेल किंवा आंबट ताक पाण्यात मिसळून आठवड्यातून एकदा फवारा.',
        chemicalAdvice: 'मॅन्कोझेब ७५% डब्ल्यूपी: १५ लिटर पंपासाठी ३५ ते ४० ग्रॅम फवारा.',
        emergencyAlert: 'जमिनीला टेकलेली खालची पाने ताबडतोब छाटून नष्ट करा.'
      }
    }
  },
  {
    id: 'potato_late_blight',
    imageUrl: potatoBlightImg,
    crop: 'Potato',
    disease: 'Late Blight',
    pathogenType: 'fungus',
    pathogenScientificName: 'Phytophthora infestans',
    commonNames: ['Irish Potato Famine Blight', 'Pichheti Jhulsa (Hindi)'],
    symptomsDescription: 'Rapidly expanding water-soaked irregular dark green/brown lesions on leaves. Under humid mornings, a delicate white fuzzy mildew appears on leaf undersides.',
    favorableConditions: 'Cool (10°C - 20°C) and consistently wet/foggy conditions with free moisture on foliage for >8 hours.',
    severityLevel: 'critical',
    organicRemedies: [
      {
        name: 'Bordeaux Mixture (1% Solution)',
        recipe: 'Dissolve 100g Copper Sulphate and 100g Slaked Lime separately in 5L plastic buckets. Slowly pour copper into lime while stirring, make up to 10L.',
        prepTime: '30 mins',
        costEstimate: 'Low (< $2.00)',
        applicationMethod: 'Preventative protective spray prior to predicted rains or heavy fogs.'
      },
      {
        name: 'Wood Ash & Lime Foliar Dust',
        recipe: 'Sift fine dry hardwood ash mixed 5:1 with agricultural lime.',
        prepTime: '10 mins',
        costEstimate: 'Free / Kitchen Waste',
        applicationMethod: 'Dust lightly over morning dew to raise surface pH and hinder fungal spore penetration.'
      }
    ],
    chemicalTreatments: [
      {
        activeIngredient: 'Metalaxyl 8% + Mancozeb 64% WP',
        tradeNames: ['Ridomil Gold', 'Krishi M-Gold', 'Curzate'],
        dosagePer15LKnapsack: '35 grams (systemic + contact combination)',
        safetyIntervalDays: 14,
        precautions: 'Use when active sporulation is visible. Do not use more than twice per season to prevent resistance.',
        toxicityLevel: 'Hazardous'
      },
      {
        activeIngredient: 'Dimethomorph 50% WP',
        tradeNames: ['Acrobat', 'Forum'],
        dosagePer15LKnapsack: '15 - 20 grams',
        safetyIntervalDays: 7,
        precautions: 'Excellent anti-sporulant. Mix with contact fungicide.',
        toxicityLevel: 'Moderate'
      }
    ],
    culturalPractices: [
      'Plant only certified disease-free seed tubers',
      'Hill up tubers with high soil ridges so rainwater cannot wash fungal spores down into growing tubers',
      'Destroy potato cull piles and rogue volunteer potato plants in adjacent ditches',
      'Harvest only after vines have died completely and dry sunny weather prevails'
    ],
    preventionTips: [
      'Monitor weather forecasts: 2 consecutive days of rain/fog require immediate preventive spray',
      'Select resistant cultivars like Kufri Pukhraj, Kufri Jyoti, or Kennebec'
    ],
    translations: {
      en: {
        title: 'Potato Late Blight (Phytophthora infestans)',
        summary: 'Extremely aggressive water-soaked dark lesions with white fungal fuzz underneath.',
        symptoms: 'Dark watery patches, white mold under leaves in morning dew, rapid blackening.',
        organicAdvice: 'Spray 1% Bordeaux mixture before rain. Dust fine wood ash on damp morning foliage.',
        chemicalAdvice: 'Metalaxyl 8% + Mancozeb 64% (Ridomil Gold): 35g per 15L tank. Act immediately within 24 hours.',
        emergencyAlert: 'CRITICAL THREAT: Late Blight can destroy an entire field within 48 to 72 hours. Spray immediately.'
      },
      hi: {
        title: 'आलू का पिछेती झुलसा (Late Blight)',
        summary: 'अत्यंत घातक बीमारी: पत्तियों पर गीले काले-भूरे धब्बे और नीचे सफेद फफूंद।',
        symptoms: 'पत्तियों के किनारों पर गीले काले धब्बे, सुबह पत्ती के पीछे सफेद फफूंद दिखना।',
        organicAdvice: 'बारिश या कोहरे से पहले 1% बोर्डो मिश्रण का छिड़काव करें। सूखी लकड़ी की राख पत्तियों पर बुरकें।',
        chemicalAdvice: 'रिडोमिल गोल्ड (Metalaxyl + Mancozeb): 15 लीटर पानी में 35 ग्राम मिलाकर तुरंत पूरे खेत में छिड़कें।',
        emergencyAlert: 'आपातकालीन चेतावनी: यह रोग 48 घंटे में पूरी फसल चौपट कर सकता है। बिना देरी छिड़काव करें।'
      },
      sw: {
        title: 'Ukungu wa Mwisho wa Viazi (Late Blight)',
        summary: 'Ugonjwa hatari unaochoma majani na kufanya kuonekana kama yamechomwa na moto.',
        symptoms: 'Madoa meusi yaliyolowa maji, ukungu mweupe chini ya majani asubuhi.',
        organicAdvice: 'Tumia mchanganyiko wa Bordeaux asilimia moja kabla ya mvua kunyesha.',
        chemicalAdvice: 'Ridomil Gold: Gramu 35 kwa tangi la lita 15. Dawa lazima ipulizwe ndani ya saa 24.',
        emergencyAlert: 'TAHADHARI KUBWA: Ugonjwa huu unaweza kuangamiza shamba lote ndani ya siku 3.'
      },
      es: {
        title: 'Tizón Tardío de la Papa (Phytophthora infestans)',
        summary: 'Enfermedad devastadora con lesiones oscuras húmedas y moho blanco inferior.',
        symptoms: 'Manchas acuosas verde oscuro que se vuelven negras rápidamente con alta humedad.',
        organicAdvice: 'Caldo bordelés al 1% preventivo. Espolvorear ceniza de madera en rocío matutino.',
        chemicalAdvice: 'Ridomil Gold (Metalaxil + Mancozeb): 35g por bomba de 15L. Aplicar de emergencia.',
        emergencyAlert: 'PELIGRO CRÍTICO: Puede arrasar el cultivo en 48 horas bajo clima frío y húmedo.'
      },
      te: {
        title: 'బంగాళాదుంప లేట్ బ్లైట్ (Late Blight)',
        summary: 'ఆకులపై వేగంగా వ్యాపించే నల్లటి నీటి మచ్చలు మరియు క్రింద తెల్లని బూజు.',
        symptoms: 'తడి నల్లటి మచ్చలు, ఉదయం వేళ తెల్లటి బూజు, ఆకులు త్వరగా మాడిపోవడం.',
        organicAdvice: 'వర్షాలకు ముందు 1% బోర్డో మిశ్రమాన్ని పిచికారీ చేయండి.',
        chemicalAdvice: 'రిడోమిల్ గోల్డ్: 15 లీటర్ల ట్యాంకుకు 35 గ్రాములు కలిపి వెంటనే పిచికారీ చేయండి.',
        emergencyAlert: 'అత్యవసర హెచ్చరిక: 48 గంటల్లో మొత్తం పంటను నాశనం చేయగలదు.'
      },
      bn: {
        title: 'আলুর নাবি ধসা রোগ (Late Blight)',
        summary: 'মারাত্মক ধ্বংসাত্মক রোগ: পাতায় ভেজা কালো দাগ ও নিচে সাদা ছত্রাকজাল।',
        symptoms: 'পাতায় ভেজা দাগ, সকালে পাতার নিচে সাদা পাউডার, দ্রুত গাছ পচে যাওয়া।',
        organicAdvice: 'কুয়াশা বা বৃষ্টির আগে ১% বোর্দো মিক্সচার স্প্রে করুন। ছাই ছিটিয়ে দিন।',
        chemicalAdvice: 'রিডোমিল গোল্ড: ১৫ লিটার ড্রামে ৩৫ গ্রাম মিশিয়ে দ্রুত স্প্রে করুন।',
        emergencyAlert: 'জরুরি সতর্কতা: এই রোগ ৪৮ ঘণ্টার মধ্যে পুরো মাঠ ধ্বংস করে দিতে পারে।'
      },
      mr: {
        title: 'बटाट्यावरील पिछेती करपा (Late Blight)',
        summary: 'अत्यंत वेगाने पसरणारा रोग: पानांवर काळपट पाणथळ डाग व खाली पांढरी बुरशी.',
        symptoms: 'पानांवर काळसर ओले डाग, सकाळच्या वेळी पानांच्या खाली पांढरी बुरशी.',
        organicAdvice: 'पावसाच्या आधी १% बोर्डो मिश्रणाची फवारणी करा. सकाळी पानांवर लाकडाची राख टाका.',
        chemicalAdvice: 'रिडोमिल गोल्ड (Metalaxyl + Mancozeb): १५ लिटर पंपाला ३५ ग्रॅम घेऊन तात्काळ फवारा.',
        emergencyAlert: 'गंभीर इशारा: हा रोग ४८ तासांत संपूर्ण शेत नष्ट करू शकतो.'
      }
    }
  },
  {
    id: 'corn_common_rust',
    imageUrl: cornRustImg,
    crop: 'Corn (Maize)',
    disease: 'Common Rust',
    pathogenType: 'fungus',
    pathogenScientificName: 'Puccinia sorghi',
    commonNames: ['Maize Rust', 'Makka Ratawa (Hindi)'],
    symptomsDescription: 'Small, circular to elongated golden-brown to cinnamon-brown pustules scattered across both upper and lower leaf surfaces. Powder rubs off on fingers.',
    favorableConditions: 'Moderate temperatures (16°C - 25°C) and high relative humidity (>95%) with night dew.',
    severityLevel: 'moderate',
    organicRemedies: [
      {
        name: 'Potassium Bicarbonate / Baking Soda Spray',
        recipe: 'Dissolve 45g baking soda (or potassium bicarbonate) + 20ml vegetable oil into 15L water.',
        prepTime: '10 mins',
        costEstimate: 'Very Low (< $0.50)',
        applicationMethod: 'Disrupts fungal cell membranes. Spray at first pustule emergence on lower canopy.'
      },
      {
        name: 'Fermented Cow Urine Distillate (Ark)',
        recipe: 'Dilute 1 liter matured indigenous cow urine with 10 liters clean water. Add 200g crushed neem leaves.',
        prepTime: '24 hours',
        costEstimate: 'Free / Kitchen Waste',
        applicationMethod: 'High nitrogen and alkaline pH halts rust pustule sporulation.'
      }
    ],
    chemicalTreatments: [
      {
        activeIngredient: 'Azoxystrobin 18.2% + Difenoconazole 11.4% SC',
        tradeNames: ['Amistar Top', 'Priaxor'],
        dosagePer15LKnapsack: '15 - 18 ml',
        safetyIntervalDays: 14,
        precautions: 'Combines preventative strobilurin with curative triazole. Apply before tassel stage.',
        toxicityLevel: 'Low'
      },
      {
        activeIngredient: 'Propiconazole 25% EC',
        tradeNames: ['Tilt', 'Bumper'],
        dosagePer15LKnapsack: '15 ml',
        safetyIntervalDays: 21,
        precautions: 'Systemic curative action. Do not spray during peak midday heat.',
        toxicityLevel: 'Moderate'
      }
    ],
    culturalPractices: [
      'Plant rust-tolerant or resistant hybrid maize varieties',
      'Destroy alternate host weed plants (such as Oxalis / wood sorrel) around field margins',
      'Avoid high excessive nitrogen fertilizer which produces overly lush, susceptible leaf tissue'
    ],
    preventionTips: [
      'Sow early in the season before airborne rust spore loads peak in the regional air current',
      'Maintain balanced potash (potassium) fertilization to thicken leaf cell walls'
    ],
    translations: {
      en: {
        title: 'Corn Common Rust (Puccinia sorghi)',
        summary: 'Cinnamon-brown powdery pustules on corn leaves that rupture epidermis.',
        symptoms: 'Reddish-brown raised pustules on both leaf surfaces, powdery spores on touch.',
        organicAdvice: 'Spray baking soda + vegetable oil solution or 10% cow urine distillate. Remove Oxalis weeds.',
        chemicalAdvice: 'Azoxystrobin + Difenoconazole (Amistar Top): 15ml per 15L tank if pustules cover >5% leaf area.',
        emergencyAlert: 'Treatment is critical prior to tasseling to preserve grain fill weight.'
      },
      hi: {
        title: 'मक्का का सामान्य रतुआ (Corn Common Rust)',
        summary: 'पत्तियों के दोनों तरफ दालचीनी जैसे भूरे रंग के उभरे हुए फफोलेदार दाने।',
        symptoms: 'पत्तियों पर लाल-भूरे पाउडर जैसे फफोले, छूने पर उंगलियों पर रंग लगना।',
        organicAdvice: '15 लीटर पानी में 45 ग्राम बेकिंग सोडा और 20ml तेल मिलाकर छिड़कें। या 10% गोमूत्र अर्क का प्रयोग करें।',
        chemicalAdvice: 'प्रोपिकोनाजोल 25% EC (Tilt): 15 मिली प्रति 15 लीटर पानी में मिलाकर भुट्टे आने से पहले छिड़कें।',
        emergencyAlert: 'भुट्टा आने से पहले छिड़काव करना जरूरी है ताकि दानों का वजन कम न हो।'
      },
      sw: {
        title: 'Kutu ya Mahindi (Common Rust)',
        summary: 'Vidonda vya unga wa rangi ya kahawia/kutu pande zote mbili za jani.',
        symptoms: 'Madoa madogo ya rangi ya kahawia yaliyoinuka, yakiguswa yanatoka kama unga.',
        organicAdvice: 'Nyunyizia mchanganyiko wa baking soda (kijiko 3) na mafuta ya kupikia katika lita 15 za maji.',
        chemicalAdvice: 'Amistar Top au Tilt: Tumia 15ml kwa tangi la lita 15.',
        emergencyAlert: 'Pambana na ugonjwa huu kabla mahindi hayajatoa mbelewele.'
      },
      es: {
        title: 'Roya Común del Maíz (Puccinia sorghi)',
        summary: 'Pústulas pulverulentas de color marrón canela en ambas caras de la hoja.',
        symptoms: 'Pústulas marrones levantadas que desprenden polvo rojizo al frotar.',
        organicAdvice: 'Bicarbonato de sodio (45g) con aceite vegetal en 15L de agua. Eliminar malezas hospederas.',
        chemicalAdvice: 'Propiconazol (Tilt): 15ml por mochila de 15 litros antes de la floración.',
        emergencyAlert: 'Intervenir antes del espigado para proteger el llenado del grano.'
      },
      te: {
        title: 'మొక్కజొన్న తుప్పు తెగులు (Common Rust)',
        summary: 'ఆకుల రెండు వైపులా దాల్చిన చెక్క రంగులో ఉండే చిన్న పొక్కులు.',
        symptoms: 'ఎరుపు-గోధుమ రంగు పొక్కులు, తాకినప్పుడు పొడి రాలడం.',
        organicAdvice: '15 లీటర్ల నీటిలో 45 గ్రాముల బేకింగ్ సోడా మరియు 20 మి.లీ నూనె కలిపి పిచికారీ చేయండి.',
        chemicalAdvice: 'ప్రొపికోనాజోల్ 25% EC: 15 లీటర్ల పంపుకు 15 మి.లీ వాడండి.',
        emergencyAlert: 'కంకి వచ్చే దశకు ముందే చికిత్స చేయడం చాలా ముఖ్యం.'
      },
      bn: {
        title: 'ভুট্টার সাধারণ মরিচা রোগ (Common Rust)',
        summary: 'পাতার উভয় পাশে গুঁড়ো গুঁড়ো লালচে-বাদামী রঙের ফোস্কা।',
        symptoms: 'পাতায় বাদামী রঙের উঁচু দাগ, হাত দিলে রঙের গুঁড়ো লেগে যায়।',
        organicAdvice: '১৫ লিটার জলে ৪৫ গ্রাম বেকিং সোডা ও সামান্য তেল মিশিয়ে স্প্রে করুন।',
        chemicalAdvice: 'টিল্ট (Propiconazole): ১৫ লিটার ড্রামে ১৫ মিলি মিশিয়ে স্প্রে করুন।',
        emergencyAlert: 'মোচা আসার আগেই স্প্রে করা জরুরি যাতে ফলন নষ্ট না হয়।'
      },
      mr: {
        title: 'मक्यावरील तांबेरा रोग (Common Rust)',
        summary: 'पानांच्या दोन्ही बाजूंवर दालचिनीसारखे तांबूस-तपकिरी रंगाचे बारीक फोड.',
        symptoms: 'पानांवर तांबूस फोड, बोटाने चोळल्यास बुरशीची भुकटी हाताला लागणे.',
        organicAdvice: '१५ लिटर पाण्यात ४५ ग्रॅम खाण्याचा सोडा व थोडे तेल मिसळून फवारा.',
        chemicalAdvice: 'प्रोपिकोनाझोल २५% ईसी (टिल्ट): १५ मिली प्रति १५ लिटर पंपासाठी वापरा.',
        emergencyAlert: 'कणीस भरण्याच्या आधी फवारणी करणे अत्यंत आवश्यक आहे.'
      }
    }
  },
  {
    id: 'apple_scab',
    imageUrl: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80',
    crop: 'Apple',
    disease: 'Apple Scab',
    pathogenType: 'fungus',
    pathogenScientificName: 'Venturia inaequalis',
    commonNames: ['Black Spot of Apple', 'Seb ka Khasta Rog (Hindi)'],
    symptomsDescription: 'Velvety olive-green to dark brown spots with indistinct margins on leaves and young fruit. Lesions become corky, scab-like, causing fruit cracking and premature drop.',
    favorableConditions: 'Extended spring rain periods with foliage remaining wet for 9+ hours at temperatures of 12°C - 24°C.',
    severityLevel: 'moderate',
    organicRemedies: [
      {
        name: 'Lime Sulfur (Calcium Polysulfide)',
        recipe: 'Dilute 100ml liquid lime sulfur into 15L water.',
        prepTime: '15 mins',
        costEstimate: 'Low (< $2.00)',
        applicationMethod: 'Dormant winter spray or post-infection eradicant within 36 hours of rain.'
      },
      {
        name: 'Compost Tea Aerated Extract',
        recipe: 'Steep 2kg well-cured compost in 15L water with 2 tablespoons molasses for 24 hours with aeration.',
        prepTime: '24 hours',
        costEstimate: 'Free / Kitchen Waste',
        applicationMethod: 'Foliar colonizing spray that builds beneficial microbial leaf biofilm.'
      }
    ],
    chemicalTreatments: [
      {
        activeIngredient: 'Myclobutanil 10% WP',
        tradeNames: ['Systhane', 'Rally'],
        dosagePer15LKnapsack: '10 - 12 grams',
        safetyIntervalDays: 14,
        precautions: 'Translaminar curative action. Stop use 14 days before picking.',
        toxicityLevel: 'Moderate'
      }
    ],
    culturalPractices: [
      'Shred and rake fallen orchard leaves in autumn, apply 5% urea spray to speed winter leaf decay',
      'Prune tree canopy annually for open sunlight and rapid wind drying of foliage'
    ],
    preventionTips: [
      'Apply protective fungicide green-tip stage through petal fall'
    ],
    translations: {
      en: {
        title: 'Apple Scab (Venturia inaequalis)',
        summary: 'Olive-green velvety patches on foliage turning into corky dark fruit scabs.',
        symptoms: 'Olive-brown spots on leaves, stunted scabby fruit with cracks.',
        organicAdvice: 'Spray Lime Sulfur early spring or aerated compost tea weekly.',
        chemicalAdvice: 'Myclobutanil 10% WP: 10g per 15L knapsack tank during green-tip bud break.',
        emergencyAlert: 'Infection starts in early spring rains; primary spore season requires active cover.'
      },
      hi: {
        title: 'सेब का स्कैब रोग (Apple Scab)',
        summary: 'पत्तियों और फलों पर जैतून जैसे हरे-भूरे मखमली धब्बे जो बाद में खुरदुरे हो जाते हैं।',
        symptoms: 'पत्तियों पर काले-हरे धब्बे, फलों पर पपड़ी जमना और फलों का फटना।',
        organicAdvice: 'सर्दियों के अंत में लाइम सल्फर का छिड़काव करें। पतझड़ में गिरी पत्तियां नष्ट करें।',
        chemicalAdvice: 'माइक्लोबुटानिल 10% WP (Systhane): 15 लीटर पंप में 10-12 ग्राम मिलाकर कलियों के खिलने पर छिड़कें।',
        emergencyAlert: 'वसंत में बारिश के तुरंत बाद छिड़काव करें ताकि फल खराब न हों।'
      },
      sw: {
        title: 'Ukoko wa Tofaa (Apple Scab)',
        summary: 'Madoa ya kijani ya mzeituni kwenye majani na matunda yanayobadilika kuwa vigumu.',
        symptoms: 'Madoa meusi kama ukoko kwenye matunda, matunda kupasuka.',
        organicAdvice: 'Nyunyizia mchanganyiko wa kiberiti cha chokaa mwanzoni mwa msimu.',
        chemicalAdvice: 'Myclobutanil: Gramu 10 katika lita 15 za maji wakati vichipukizi vinachipua.',
        emergencyAlert: 'Zingatia kunyunyizia dawa mara tu baada ya mvua za masika kuanza.'
      },
      es: {
        title: 'Moteado o Sarna del Manzano (Venturia)',
        summary: 'Manchas aterciopeladas verde oliva en hojas y costras corchosas en frutos.',
        symptoms: 'Hojas con manchas oscuras, frutos agrietados y deformes.',
        organicAdvice: 'Polisulfuro de calcio o té de compost aireado antes de floración.',
        chemicalAdvice: 'Miclobutanil: 10g por 15L de agua al inicio de brotación.',
        emergencyAlert: 'Proteger durante el período crítico de lluvias primaverales.'
      },
      te: {
        title: 'ఆపిల్ స్కాబ్ తెగులు (Apple Scab)',
        summary: 'ఆకులు మరియు పండ్లపై ఆలివ్-ఆకుపచ్చ వెల్వెట్ లాంటి మచ్చలు.',
        symptoms: 'పండ్లపై పొలుసులు రావడం, పండ్లు పగిలిపోవడం.',
        organicAdvice: 'సున్నం-గంధకం ద్రవాన్ని పిచికారీ చేయండి. రాలిన ఆకులను నాశనం చేయండి.',
        chemicalAdvice: 'మైక్లోబుటానిల్ 10% WP: 15 లీటర్లకు 10 గ్రాములు.',
        emergencyAlert: 'వసంత ఋతువు వర్షాల సమయంలో వెంటనే రక్షణ చర్యలు చేపట్టాలి.'
      },
      bn: {
        title: 'আপেলের স্ক্যাব রোগ (Apple Scab)',
        summary: 'পাতা ও ফলের উপর জলপাই-সবুজ মখমলের মতো দাগ যা পরে ফেটে যায়।',
        symptoms: 'ফলের উপর খসখসে ঘা, ফল ফেটে যাওয়া ও অসময়ে ঝরে পড়া।',
        organicAdvice: 'চুন ও গন্ধকের মিশ্রণ স্প্রে করুন। ঝরে পড়া শুকনো পাতা পুড়িয়ে দিন।',
        chemicalAdvice: 'মাইক্লোবিউটানিল: ১৫ লিটার জলে ১০ গ্রাম মিশিয়ে স্প্রে করুন।',
        emergencyAlert: 'কুঁড়ি ফোটার সময় বৃষ্টি হলে দ্রুত ব্যবস্থা নিন।'
      },
      mr: {
        title: 'सफरचंदावरील खपल्या रोग (Apple Scab)',
        summary: 'पानांवर व फळांवर ऑलिव्ह-हिरवट मखमली डाग पडून फळे तडकणे.',
        symptoms: 'पानांवर तपकिरी डाग, फळांवर खपली धरून फळ फाटणे.',
        organicAdvice: 'कळी फुटताना लाइम सल्फरची फवारणी करा. गळून पडलेली पाने नष्ट करा.',
        chemicalAdvice: 'मायक्लोब्युटॅनिल: १५ लिटर पंपाला १० ग्रॅम फवारा.',
        emergencyAlert: 'पावसाळ्यानंतर फळे खराब होण्यापूर्वी तातडीने फवारणी करा.'
      }
    }
  },
  {
    id: 'tomato_yellow_leaf_curl',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d69106093?auto=format&fit=crop&w=600&q=80',
    crop: 'Tomato',
    disease: 'Yellow Leaf Curl Virus',
    pathogenType: 'virus',
    pathogenScientificName: 'Begomovirus (TYLCV)',
    commonNames: ['TYLCV', 'Tomato Leaf Curl', 'Parn Kunchan Rog (Hindi)'],
    symptomsDescription: 'Severe upward curling and cupping of leaflet margins, intense chlorotic yellowing of leaf edges, dramatically stunted bushy plant growth, and flower drop with zero fruit set.',
    favorableConditions: 'High populations of Silverleaf Whitefly (Bemisia tabaci) vector in warm, dry weather (>30°C).',
    severityLevel: 'critical',
    organicRemedies: [
      {
        name: 'Yellow Sticky Card Traps + Soap Spray',
        recipe: 'Mount bright yellow plastic boards coated with castor oil or grease at canopy height (1 trap per 10m²).',
        prepTime: '20 mins',
        costEstimate: 'Very Low (< $0.50)',
        applicationMethod: 'Mass-traps flying whitefly vectors before they inject viral load into young leaves.'
      },
      {
        name: '5% Neem Seed Kernel Extract (NSKE)',
        recipe: 'Pound 500g dry neem seed kernels into coarse powder. Soak overnight in 10L water. Filter and add 10ml soap.',
        prepTime: '12 hours',
        costEstimate: 'Low (< $2.00)',
        applicationMethod: 'Repels whiteflies and disrupts egg hatching. Spray twice weekly.'
      }
    ],
    chemicalTreatments: [
      {
        activeIngredient: 'Thiamethoxam 25% WG',
        tradeNames: ['Actara', 'Cruiser'],
        dosagePer15LKnapsack: '5 - 7 grams',
        safetyIntervalDays: 7,
        precautions: 'Systemic neonicotinoid targeting sap-sucking whitefly vector. Rotate with other chemistries.',
        toxicityLevel: 'Hazardous'
      },
      {
        activeIngredient: 'Diafenthiuron 50% WP',
        tradeNames: ['Pegasus', 'Derby'],
        dosagePer15LKnapsack: '15 grams',
        safetyIntervalDays: 10,
        precautions: 'Translaminar insecticide/miticide against nymph and adult whiteflies.',
        toxicityLevel: 'Moderate'
      }
    ],
    culturalPractices: [
      'Rogue and burn infected stunted plants immediately to prevent field-wide vector spread',
      'Grow border barrier rows of 2-3 rows of tall Maize or Pearl Millet (Bajra) around tomato plots to physically block whiteflies',
      'Use 40-50 mesh insect-proof netting in seedling nursery beds'
    ],
    preventionTips: [
      'Plant TYLCV-resistant hybrids such as Abhinav, To-1057, or US-3140',
      'Never plant new tomato crops directly downwind of old, senescing infested tomato or cotton fields'
    ],
    translations: {
      en: {
        title: 'Tomato Yellow Leaf Curl Virus (TYLCV)',
        summary: 'Devastating virus transmitted by whiteflies causing cupped yellow leaves and zero fruit set.',
        symptoms: 'Curled cup-shaped leaves, yellow margins, severe stunting, flower drop.',
        organicAdvice: 'Install yellow sticky traps (1 per 10m²) to catch whiteflies. Spray 5% Neem seed kernel extract (NSKE).',
        chemicalAdvice: 'Thiamethoxam 25% WG (Actara): 6g per 15L knapsack tank to eliminate vector whiteflies.',
        emergencyAlert: 'Pull out and burn infected plants immediately; viral crops cannot be cured and spread rapidly.'
      },
      hi: {
        title: 'टमाटर का पर्ण कुंचन रोग (Leaf Curl Virus)',
        summary: 'सफेद मक्खी (Whitefly) द्वारा फैलने वाला भयंकर वायरस, जिससे पत्तियां मुड़कर कटोरी जैसी हो जाती हैं।',
        symptoms: 'पत्तियों का ऊपर की ओर मुड़ना, किनारों का पीला पड़ना, पौधे का बौना रह जाना, फूल गिरना।',
        organicAdvice: 'खेत में पीले चिपचिपे कार्ड (Yellow Sticky Traps) लगाएं। 5% नीम के बीज का काढ़ा (NSKE) छिड़कें।',
        chemicalAdvice: 'थियामेथोक्सम 25% WG (Actara): 15 लीटर पानी में 5-6 ग्राम मिलाकर सफेद मक्खी नियंत्रण हेतु छिड़कें।',
        emergencyAlert: 'रोगी पौधों को तुरंत उखाड़कर जमीन में गाड़ दें ताकि अन्य पौधों में वायरस न फैले।'
      },
      sw: {
        title: 'Virusi ya Kukunja Majani ya Nyanya (TYLCV)',
        summary: 'Virusi hatari vinavyosambazwa na nzi weupe vinavyofanya majani kukunjana kama kikombe.',
        symptoms: 'Majani madogo yanayokunjana juu, kingo za njano, mmea unadumaa bila kutoa matunda.',
        organicAdvice: 'Tundika vibao vya njano vyenye gundi kuzuia nzi weupe. Pulizia mafuta ya mwarobaini.',
        chemicalAdvice: 'Thiamethoxam 25% WG (Actara): Gramu 5-6 kwa tanki la lita 15.',
        emergencyAlert: 'Ng\'oa na uchome mimea yote iliyoathirika mara moja kabla haijaambukiza shamba lote.'
      },
      es: {
        title: 'Virus del Rizado Amarillo del Tomate (TYLCV)',
        summary: 'Virus transmitido por mosca blanca que causa deformación foliar severa y aborto floral.',
        symptoms: 'Hojas en forma de cuchara, bordes amarillentos, plantas enanas sin cuajar frutos.',
        organicAdvice: 'Trampas adhesivas amarillas. Extracto de semilla de Neem al 5% para repeler mosca blanca.',
        chemicalAdvice: 'Tiametoxam 25% WG: 6g por bomba de 15L contra la mosca blanca vectora.',
        emergencyAlert: 'Arrancar y destruir inmediatamente las plantas con síntomas iniciales.'
      },
      te: {
        title: 'టమాటా ఆకు ముడుత వైరస్ (Leaf Curl Virus)',
        summary: 'తెల్లదోమ ద్వారా వ్యాపించే వైరస్, ఆకులు గిన్నెలా ముడుచుకుపోతాయి.',
        symptoms: 'ఆకులు పైకి ముడుచుకోవడం, అంచులు పసుపుగా మారడం, మొక్క ఎదుగుదల ఆగిపోవడం.',
        organicAdvice: 'పసుపు రంగు జిగురు అట్టలను పొలంలో అమర్చండి. 5% వేప గింజల కషాయం పిచికారీ చేయండి.',
        chemicalAdvice: 'థయామిథాక్సామ్ 25% WG: 15 లీటర్ల నీటికి 5-6 గ్రాములు కలిపి తెల్లదోమ నివారణకు పిచికారీ చేయండి.',
        emergencyAlert: 'వైరస్ సోకిన మొక్కలను పీకి నాశనం చేయండి.'
      },
      bn: {
        title: 'টমেটোর পাতা কোঁকড়ানো রোগ (Leaf Curl Virus)',
        summary: 'সাদা মাছি বাহিত ভাইরাস: পাতা কোঁকড়ে বাটির মতো হয়ে যায় এবং ফলন সম্পূর্ণ বন্ধ হয়।',
        symptoms: 'পাতা কুঁকড়ে যাওয়া, ধার হলুদ হওয়া, গাছের বৃদ্ধি বন্ধ হওয়া।',
        organicAdvice: 'হলুদ রঙের আঠালো ফাঁদ পাতুন। নিম বীজের নির্যাস ৫% স্প্রে করুন।',
        chemicalAdvice: 'থায়ামেথক্সাম (Actara): ১৫ লিটার জলে ৫-৬ গ্রাম মিশিয়ে সাদা মাছি দমন করুন।',
        emergencyAlert: 'আক্রান্ত গাছ সাথে সাথে তুলে পুড়িয়ে ফেলুন।'
      },
      mr: {
        title: 'टोमॅटोवरील चुरडा-मुरडा / कुकड्या रोग (TYLCV)',
        summary: 'पांढऱ्या माशीमुळे पसरणारा विषाणूजन्य रोग: पाने वाटीसारखी वर वळतात व झाड खुंटते.',
        symptoms: 'पाने वर वळणे, कडा पिवळ्या पडणे, फुले गळणे व फळे न धरणे.',
        organicAdvice: 'पिवळे चिकट सापळे एकरी २० लावा. ५% निंबोळी अर्काची फवारणी करा.',
        chemicalAdvice: 'थायमेथॉक्झाम २५% डब्ल्यूजी: १५ लिटर पंपासाठी ५ ते ६ ग्रॅम फवारा.',
        emergencyAlert: 'रोगट झाडे ताबडतोब उपटून जाळा, कारण यावर रासायनिक औषध काम करत नाही.'
      }
    }
  },
  {
    id: 'pepper_bacterial_spot',
    imageUrl: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80',
    crop: 'Bell Pepper (Capsicum)',
    disease: 'Bacterial Spot',
    pathogenType: 'bacteria',
    pathogenScientificName: 'Xanthomonas campestris pv. vesicatoria',
    commonNames: ['Bacterial Leaf Spot', 'Shimla Mirch Jivanu Rog'],
    symptomsDescription: 'Small water-soaked blister lesions turning dark brown with yellow halos on leaves. Blisters drop out creating a "shot-hole" look. Fruits show raised rough scabby warts.',
    favorableConditions: 'Warm temperatures (24°C - 30°C) with persistent driving rainfall, overhead splashing, and heavy dew.',
    severityLevel: 'moderate',
    organicRemedies: [
      {
        name: 'Copper Soap (Copper Octanoate) Spray',
        recipe: 'Dilute 60ml copper soap liquid in 15L water.',
        prepTime: '5 mins',
        costEstimate: 'Low (< $2.00)',
        applicationMethod: 'Broad-spectrum bactericide certified for organic farming. Spray every 7-10 days.'
      },
      {
        name: 'Garlic & Chili Extract Bactericide',
        recipe: 'Crush 200g garlic cloves and 100g hot chili peppers into 1L water. Strain thoroughly after 24h, dilute into 10L water.',
        prepTime: '24 hours',
        costEstimate: 'Free / Kitchen Waste',
        applicationMethod: 'Allicin compound in garlic inhibits bacterial replication on leaf cuticle.'
      }
    ],
    chemicalTreatments: [
      {
        activeIngredient: 'Copper Oxychloride 50% WP + Streptocycline',
        tradeNames: ['Blitox 50', 'Phytomycin'],
        dosagePer15LKnapsack: '35g Copper Oxychloride + 2g Streptocycline sachet',
        safetyIntervalDays: 7,
        precautions: 'Standard agronomic combination for severe bacterial blight outbreaks.',
        toxicityLevel: 'Moderate'
      }
    ],
    culturalPractices: [
      'Strictly avoid working in pepper fields when foliage is wet from rain or dew',
      'Use drip irrigation instead of sprinkler systems to prevent bacterial leaf-to-leaf splash',
      'Treat seed lots with 50°C hot water bath for 25 minutes prior to nursery sowing'
    ],
    preventionTips: [
      'Choose bacterial-spot resistant sweet pepper hybrids (e.g., Aristotle, Vanguard, Declaration)'
    ],
    translations: {
      en: {
        title: 'Pepper Bacterial Spot (Xanthomonas campestris)',
        summary: 'Bacterial leaf spots with yellow halos and raised warty scabs on pepper fruits.',
        symptoms: 'Water-soaked spots turning into shot-holes, rough warts on fruits.',
        organicAdvice: 'Spray Copper Octanoate soap or fermented Garlic-Chili allicin extract every 7 days.',
        chemicalAdvice: 'Copper Oxychloride 50% (35g) + Streptocycline (2g) per 15L knapsack sprayer.',
        emergencyAlert: 'Do not touch or cultivate pepper plants when wet to stop mechanical spreading.'
      },
      hi: {
        title: 'शिमला मिर्च का जीवाणु धब्बा रोग (Bacterial Spot)',
        summary: 'जीवाणु रोग जिससे पत्तियों पर पीले घेरे वाले भूरे धब्बे और मिर्च पर खुरदुरे मस्से बनते हैं।',
        symptoms: 'पत्तियों में छेद होना, मिर्च पर उभरे हुए मस्से जैसे दाने, पत्तियों का गिरना।',
        organicAdvice: 'कॉपर सोप का छिड़काव करें या लहसुन-तीखी मिर्च का रस पानी में मिलाकर स्प्रे करें।',
        chemicalAdvice: 'कॉपर ऑक्सीक्लोराइड 50% (35 ग्राम) + स्ट्रेप्टोसाइक्लिन (2 ग्राम) 15 लीटर पानी में मिलाकर छिड़कें।',
        emergencyAlert: 'गीले पत्तों पर कभी हाथ न लगाएं, इससे जीवाणु पूरे खेत में फैल जाते हैं।'
      },
      sw: {
        title: 'Madoa ya Bakteria ya Pilipili (Bacterial Spot)',
        summary: 'Ugonjwa wa bakteria unaosababisha madoa yenye duara ya manjano na uvimbe kwenye pilipili.',
        symptoms: 'Mashimo madogo kwenye majani kama risasi, maganda ya pilipili kuwa na vipele.',
        organicAdvice: 'Nyunyizia sabuni ya shaba (Copper soap) au dondoo ya kitunguu saumu na pilipili kali.',
        chemicalAdvice: 'Copper Oxychloride gramu 35 + Streptocycline gramu 2 kwa tanki la lita 15.',
        emergencyAlert: 'Usifanye kazi shambani wakati majani yakiwa bado na unyevunyevu.'
      },
      es: {
        title: 'Mancha Bacteriana del Pimiento (Xanthomonas)',
        summary: 'Lesiones acuosas con halo amarillo y pústulas verrugosas en frutos.',
        symptoms: 'Perforaciones en hojas tipo perdigonada y costras ásperas en frutos.',
        organicAdvice: 'Jabón cúprico o extracto fermentado de ajo y ají picante.',
        chemicalAdvice: 'Oxicloruro de Cobre (35g) + Estreptomicina (2g) por mochila de 15L.',
        emergencyAlert: 'Nunca transitar ni manipular el cultivo mientras las hojas estén mojadas.'
      },
      te: {
        title: 'మిరప బ్యాక్టీరియా మచ్చ తెగులు (Bacterial Spot)',
        summary: 'ఆకులపై పసుపు రంగు వలయాలతో కూడిన మచ్చలు మరియు కాయలపై గజ్జి వంటి పొక్కులు.',
        symptoms: 'ఆకులు తూట్లు పడటం, కాయలపై గరుకైన మచ్చలు ఏర్పడటం.',
        organicAdvice: 'రాగి సబ్బు ద్రావణాన్ని లేదా వెల్లుల్లి-మిర్చి కషాయాన్ని పిచికారీ చేయండి.',
        chemicalAdvice: 'కాపర్ ఆక్సిక్లోరైడ్ 35 గ్రా + స్ట్రెప్టోసైక్లిన్ 2 గ్రా 15 లీటర్ల నీటికి వాడండి.',
        emergencyAlert: 'చెట్లు తడిగా ఉన్నప్పుడు తాకడం వల్ల వ్యాధి త్వరగా వ్యాపిస్తుంది.'
      },
      bn: {
        title: 'মরিচের ব্যাক্টেরিয়াজনিত দাগ (Bacterial Spot)',
        summary: 'পাতায় হলুদ বলয়যুক্ত কালো দাগ ও মরিচের গায়ে খসখসে ফুসকুড়ি।',
        symptoms: 'পাতায় ছিদ্র তৈরি হওয়া, মরিচে ঘা হওয়া ও ফল নষ্ট হওয়া।',
        organicAdvice: 'কপার সাবান দ্রবণ বা রসুন-লঙ্কার নির্যাস সপ্তাহে একবার স্প্রে করুন।',
        chemicalAdvice: 'কপার অক্সিক্লোরাইড ৩৫ গ্রাম + স্ট্রেপ্টোসাইক্লিন ২ গ্রাম ১৫ লিটার জলে স্প্রে করুন।',
        emergencyAlert: 'গাছ ভেজা থাকা অবস্থায় জমিতে কোনো কাজ করবেন না।'
      },
      mr: {
        title: 'मिरचीवरील जिवाणूजन्य ठिपके (Bacterial Spot)',
        summary: 'पानांवर पिवळ्या कडा असलेले तपकिरी ठिपके आणि मिरचीवर खडबडीत चामखीळसारखे डाग.',
        symptoms: 'पानांना छिद्रे पडणे, मिरचीवर खरखरीत डाग पडणे.',
        organicAdvice: 'कॉपर साबण द्रावण किंवा लसूण-मिरचीचा काढा फवारा.',
        chemicalAdvice: 'कॉपर ऑक्सिक्लोराईड (३५ ग्रॅम) + स्ट्रेप्टोसायक्लिन (२ ग्रॅम) १५ लिटर पंपासाठी वापरा.',
        emergencyAlert: 'पाने ओले असताना झाडांना हात लावू नका, रोग वेगाने पसरतो.'
      }
    }
  },
  {
    id: 'crop_healthy_general',
    imageUrl: healthyLeafImg,
    crop: 'Crop Leaf',
    disease: 'Healthy Specimen',
    pathogenType: 'healthy',
    pathogenScientificName: 'Chlorophyll Optimal',
    commonNames: ['Healthy Plant', 'Swasth Fasal (Hindi)'],
    symptomsDescription: 'Uniform vibrant green pigmentation, intact cellular leaf cuticle, normal vein venation without chlorosis, necrotic spotting, curling, or fungal sporulation.',
    favorableConditions: 'Adequate soil nutrition, optimal moisture, proper aeration, and balanced sunlight.',
    severityLevel: 'healthy',
    organicRemedies: [
      {
        name: 'Jeevamrutha / Panchagavya Bio-Booster',
        recipe: 'Apply 200L Jeevamrutha per acre through irrigation water once a month.',
        prepTime: '48 hours',
        costEstimate: 'Free / Kitchen Waste',
        applicationMethod: 'Feeds beneficial soil microbiome and boosts plant innate phytohormone immunity.'
      },
      {
        name: 'Seaweed / Humic Acid Foliar Tonic',
        recipe: 'Dilute 30ml liquid seaweed extract into 15L water.',
        prepTime: '5 mins',
        costEstimate: 'Low (< $2.00)',
        applicationMethod: 'Enhances photosynthesis and builds resistance against environmental heat and drought stress.'
      }
    ],
    chemicalTreatments: [],
    culturalPractices: [
      'Maintain regular balanced organic nutrition and moisture scheduling',
      'Continue routine bi-weekly field scouting of lower canopy undersides for early pathogen alerts',
      'Keep field borders free from perennial alternate weed hosts'
    ],
    preventionTips: [
      'No chemical pesticide intervention required! Protect beneficial predatory insects like ladybugs and lacewings.'
    ],
    translations: {
      en: {
        title: 'Healthy Crop Foliage (Optimal Vitality)',
        summary: 'No active pathology detected. Plant exhibits optimal chlorophyll and cell vigor.',
        symptoms: 'Clean green leaf surface, strong cellular structure, zero lesions.',
        organicAdvice: 'Apply periodic compost tea or seaweed extract to sustain innate plant immune defense.',
        chemicalAdvice: 'No chemical pesticide required! Save your money and protect beneficial insects.',
        emergencyAlert: 'Continue routine field monitoring. Great job maintaining crop health!'
      },
      hi: {
        title: 'स्वस्थ पौधा (रोगमुक्त फसल)',
        summary: 'कोई बीमारी नहीं पाई गई। पौधे की पत्तियां पूर्णतः हरी और तंदुरुस्त हैं।',
        symptoms: 'चमकदार हरी पत्ती, कोई धब्बा या कीड़ा नहीं।',
        organicAdvice: 'महीने में एक बार जीवामृत या वर्मीवाश का उपयोग करें ताकि पौधे की प्राकृतिक प्रतिरोधक क्षमता बनी रहे।',
        chemicalAdvice: 'किसी भी रासायनिक कीटनाशक की आवश्यकता नहीं है! अपने पैसे बचाएं।',
        emergencyAlert: 'फसल की नियमित निगरानी जारी रखें। बहुत बढ़िया प्रबंधन!'
      },
      sw: {
        title: 'Mmea Wenye Afya (Bila Ugonjwa)',
        summary: 'Hakuna dalili ya ugonjwa. Mmea una afya nzuri na rangi ya kijani kibichi.',
        symptoms: 'Majani safi, hakuna madoa wala wadudu.',
        organicAdvice: 'Weka mboji au mbolea ya samadi kuendeleza afya ya udongo na mmea.',
        chemicalAdvice: 'Hakuna haja ya kununua dawa za kemikali. Okoa pesa zako!',
        emergencyAlert: 'Endelea kutunza shamba lako vizuri.'
      },
      es: {
        title: 'Cultivo Sano (Planta Saludable)',
        summary: 'Sin patologías detectadas. Hojas con excelente vigor fotosintético.',
        symptoms: 'Color verde uniforme, cutícula sana, libre de manchas.',
        organicAdvice: 'Aplicar abonos orgánicos o extractos de algas para mantener la defensa natural.',
        chemicalAdvice: '¡No requiere agroquímicos! Ahorre dinero y conserve polinizadores.',
        emergencyAlert: 'Excelente labor. Continúe con el monitoreo preventivo habitual.'
      },
      te: {
        title: 'ఆరోగ్యకరమైన పంట (వ్యాధి రహితం)',
        summary: 'ఎలాంటి తెగులు లేదా వ్యాధి లక్షణాలు లేవు. ఆకులు చాలా పచ్చగా మరియు దృఢంగా ఉన్నాయి.',
        symptoms: 'స్వచ్ఛమైన ఆకుపచ్చ ఆకులు, మచ్చలు లేవు.',
        organicAdvice: 'జీవామృతం లేదా సేంద్రీయ ఎరువులను అందించడం కొనసాగించండి.',
        chemicalAdvice: 'ఎటువంటి రసాయన మందులు అవసరం లేదు! ఖర్చు ఆదా చేసుకోండి.',
        emergencyAlert: 'మీ పంట సంరక్షణ బాగుంది. రెగ్యులర్ తనిఖీలు కొనసాగించండి.'
      },
      bn: {
        title: 'সুস্থ ফসল (কোনো রোগ নেই)',
        summary: 'কোনো রোগ বা ছত্রাকের লক্ষণ নেই। পাতা স্বাভাবিক ও সতেজ রয়েছে।',
        symptoms: 'সুন্দর সবুজ পাতা, কোনো দাগ বা ক্ষত নেই।',
        organicAdvice: 'জীবা মৃত বা জৈব সার প্রয়োগ করুন গাছকে শক্তিশালী রাখতে।',
        chemicalAdvice: 'কোনো রাসায়নিক কীটনাশকের দরকার নেই! টাকা বাঁচান।',
        emergencyAlert: 'চমৎকার যত্ন নিয়েছেন! নিয়মিত নজরদারি চালিয়ে যান।'
      },
      mr: {
        title: 'निरोगी पीक (कोणताही रोग नाही)',
        summary: 'कोणताही रोग किंवा बुरशी आढळली नाही. पीक उत्तम आणि टवटवीत आहे.',
        symptoms: 'स्वच्छ हिरवीगार पाने, डाग किंवा कीड नाही.',
        organicAdvice: 'जीवामृत किंवा सेंद्रिय टॉनिकचा वापर चालू ठेवा.',
        chemicalAdvice: 'कोणत्याही रासायनिक फवारणीची गरज नाही! पैसे वाचवा.',
        emergencyAlert: 'उत्कृष्ट नियोजन! शेताची नियमित पाहणी चालू ठेवा.'
      }
    }
  }
];

export const SAMPLE_SPECIMENS = [
  {
    id: 'sample_tomato_early_blight',
    title: 'Tomato Early Blight',
    crop: 'Tomato',
    condition: 'Early Blight (Target Spots)',
    thumbnailUrl: tomatoBlightImg,
    description: 'Distinct bullseye necrotic concentric rings on lower foliage. High fungal load.',
    expectedConfidence: 94.6,
    diseaseId: 'tomato_early_blight'
  },
  {
    id: 'sample_potato_late_blight',
    title: 'Potato Late Blight',
    crop: 'Potato',
    condition: 'Late Blight (Phytophthora)',
    thumbnailUrl: potatoBlightImg,
    description: 'Dark water-soaked lesion spreading rapidly across potato leaf tip.',
    expectedConfidence: 96.2,
    diseaseId: 'potato_late_blight'
  },
  {
    id: 'sample_healthy_leaf',
    title: 'Healthy Plant Leaf',
    crop: 'Tomato',
    condition: 'Optimal Healthy Foliage',
    thumbnailUrl: healthyLeafImg,
    description: 'Unblemished green lamina, strong vascular veins, zero pathogenic lesions.',
    expectedConfidence: 98.2,
    diseaseId: 'crop_healthy_general'
  },
  {
    id: 'sample_corn_rust',
    title: 'Corn Common Rust',
    crop: 'Corn (Maize)',
    condition: 'Common Rust (Puccinia)',
    thumbnailUrl: cornRustImg,
    description: 'Elevated cinnamon-brown powdery fungal pustules on corn blade.',
    expectedConfidence: 91.8,
    diseaseId: 'corn_common_rust'
  },
  {
    id: 'sample_pepper_spot',
    title: 'Pepper Bacterial Spot',
    crop: 'Bell Pepper',
    condition: 'Bacterial Spot (Xanthomonas)',
    thumbnailUrl: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=500&q=80',
    description: 'Pitted necrotic angular spots with yellow halos across sweet pepper leaf.',
    expectedConfidence: 93.1,
    diseaseId: 'pepper_bacterial_spot'
  },
  {
    id: 'sample_apple_scab',
    title: 'Apple Scab Foliage',
    crop: 'Apple',
    condition: 'Apple Scab (Venturia)',
    thumbnailUrl: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=500&q=80',
    description: 'Olive-drab velvety irregular lesions on apple leaf surface.',
    expectedConfidence: 89.4,
    diseaseId: 'apple_scab'
  }
];
