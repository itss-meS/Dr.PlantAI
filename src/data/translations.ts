import { LanguageCode } from '../types';

export interface UiTranslations {
  // Navigation
  navHome: string;
  navScan: string;
  navTreatments: string;
  navHistory: string;

  // Header & Modals
  appTitle: string;
  architectureSpecs: string;
  darkModeToggle: string;
  lightModeToggle: string;
  translateApp: string;

  // Landing Page
  landingSubtitle: string;
  openCameraBtn: string;
  uploadPhotoBtn: string;
  vaultTileTitle: string;
  vaultTileDesc: string;
  historyTileTitle: string;
  historyTileDesc: string;
  recentScansTitle: string;
  viewAllBtn: string;
  instantBadgeTitle: string;
  instantBadgeDesc: string;
  offlineBadgeTitle: string;
  offlineBadgeDesc: string;
  remediesBadgeTitle: string;
  remediesBadgeDesc: string;

  // Camera View
  scannerTitle: string;
  alignLeafHint: string;
  captureBtn: string;
  galleryBtn: string;
  switchCameraBtn: string;
  specimensTitle: string;
  specimensSubtitle: string;
  analyzingText: string;
  cameraPermissionDenied: string;
  cameraPermissionHint: string;

  // History View
  ledgerTitle: string;
  ledgerSubtitle: string;
  exportJsonBtn: string;
  metricScans: string;
  metricMemory: string;
  metricIntegrity: string;
  filterAll: string;
  filterFungus: string;
  filterBacteria: string;
  filterVirus: string;
  filterHealthy: string;
  noRecordsTitle: string;
  noRecordsDesc: string;
  clearHistoryBtn: string;

  // Treatment Vault
  vaultTitle: string;
  vaultSubtitle: string;
  searchPlaceholder: string;
  allCropsFilter: string;
  knapsackCalculatorTitle: string;
  tankSizeLabel: string;
  dosageLabel: string;
  waterLabel: string;
  organicRemediesTab: string;
  chemicalControlTab: string;
  prepTimeLabel: string;
  costLabel: string;
  safetyIntervalLabel: string;
  toxicityLabel: string;

  // Result Modal
  modalTitle: string;
  edgeSpeed: string;
  realLeafTab: string;
  heatmapTab: string;
  confidenceMatch: string;
  saveDiagnosisBtn: string;
  savedToLedgerBtn: string;
  closeBtn: string;
  alternativePossibilities: string;
}

export const UI_TRANSLATIONS: Record<LanguageCode, UiTranslations> = {
  en: {
    navHome: 'Home',
    navScan: 'Scan Leaf',
    navTreatments: 'Treatments',
    navHistory: 'History',

    appTitle: 'Dr. Plant AI',
    architectureSpecs: 'Edge Architecture Specs',
    darkModeToggle: 'Toggle Dark Mode',
    lightModeToggle: 'Toggle Light Mode',
    translateApp: 'Change App Language',

    landingSubtitle: 'Instant on-device disease diagnosis for Indian farms',
    openCameraBtn: 'Open Camera to Scan Leaf',
    uploadPhotoBtn: 'Upload Photo from Gallery',
    vaultTileTitle: 'Offline Treatment Vault',
    vaultTileDesc: 'Botanical sprays, dilution rates & prevention guides',
    historyTileTitle: 'Diagnosis History',
    historyTileDesc: 'On-device ledger saved with WatermelonDB',
    recentScansTitle: 'Recent Scans',
    viewAllBtn: 'View all',
    instantBadgeTitle: 'Instant',
    instantBadgeDesc: 'Sub-Second',
    offlineBadgeTitle: 'No Internet',
    offlineBadgeDesc: 'Digital Dead Zones',
    remediesBadgeTitle: 'Remedies',
    remediesBadgeDesc: 'Organic Recipes',

    scannerTitle: 'Crop Disease Scanner',
    alignLeafHint: 'Hold leaf steady inside the target boundary',
    captureBtn: 'Diagnose Leaf Now',
    galleryBtn: 'Gallery',
    switchCameraBtn: 'Flip Camera',
    specimensTitle: 'Specimen Test Leaves',
    specimensSubtitle: 'Tap any test leaf below for instant offline simulation',
    analyzingText: 'Executing neural inference on leaf...',
    cameraPermissionDenied: 'Camera Access Needed',
    cameraPermissionHint: 'Please allow camera access in browser permissions or upload a leaf photo from your gallery.',

    ledgerTitle: 'Field Pathology Ledger',
    ledgerSubtitle: 'WatermelonDB • On-Device Local SQLite',
    exportJsonBtn: 'Export JSON',
    metricScans: 'Ledger Scans',
    metricMemory: 'Memory Used',
    metricIntegrity: 'Offline Integrity',
    filterAll: 'All Diagnoses',
    filterFungus: 'Fungi',
    filterBacteria: 'Bacteria',
    filterVirus: 'Viruses',
    filterHealthy: 'Healthy',
    noRecordsTitle: 'No Diagnoses Yet',
    noRecordsDesc: 'Scan or upload a diseased crop leaf to create your first ledger entry.',
    clearHistoryBtn: 'Clear Ledger',

    vaultTitle: 'Offline Treatment Vault',
    vaultSubtitle: 'Zero Data Cost • Complete Agricultural Encyclopedia',
    searchPlaceholder: 'Search by crop or disease name...',
    allCropsFilter: 'All Crops',
    knapsackCalculatorTitle: 'Knapsack Tank Dilution Calculator',
    tankSizeLabel: 'Sprayer Tank Volume',
    dosageLabel: 'Chemical Dosage Required',
    waterLabel: 'Clean Water Volume',
    organicRemediesTab: 'Organic Bio-Remedies',
    chemicalControlTab: 'Chemical Control',
    prepTimeLabel: 'Prep Time',
    costLabel: 'Estimated Cost',
    safetyIntervalLabel: 'Harvest Safety Interval (PHI)',
    toxicityLabel: 'WHO Toxicity Class',

    modalTitle: 'Pathology Diagnosis',
    edgeSpeed: 'Edge Inference',
    realLeafTab: 'Real Leaf',
    heatmapTab: 'AI Heatmap',
    confidenceMatch: 'Match',
    saveDiagnosisBtn: 'Save to Local Ledger',
    savedToLedgerBtn: 'Saved to Ledger',
    closeBtn: 'Close',
    alternativePossibilities: 'Alternative Neural Possibilities',
  },

  hi: {
    navHome: 'होम',
    navScan: 'पत्ता स्कैन',
    navTreatments: 'उपचार',
    navHistory: 'इतिहास',

    appTitle: 'डॉ. प्लांट AI',
    architectureSpecs: 'एज आर्किटेक्चर विवरण',
    darkModeToggle: 'डार्क मोड बदलें',
    lightModeToggle: 'लाइट मोड बदलें',
    translateApp: 'ऐप की भाषा बदलें',

    landingSubtitle: 'भारतीय खेतों के लिए बिना इंटरनेट तुरंत फसल रोग निदान',
    openCameraBtn: 'पत्ता स्कैन करने के लिए कैमरा खोलें',
    uploadPhotoBtn: 'गैलरी से फोटो अपलोड करें',
    vaultTileTitle: 'ऑफलाइन उपचार संग्रह',
    vaultTileDesc: 'जैविक स्प्रे, छिड़काव अनुपात व रोकथाम निर्देश',
    historyTileTitle: 'रोग निदान इतिहास',
    historyTileDesc: 'फोन में सुरक्षित वाटरमेलन-डीबी खाता',
    recentScansTitle: 'हालिया स्कैन',
    viewAllBtn: 'सभी देखें',
    instantBadgeTitle: 'तुरंत',
    instantBadgeDesc: '1 सेकंड से कम',
    offlineBadgeTitle: 'इंटरनेट मुक्त',
    offlineBadgeDesc: 'बिना नेटवर्क के',
    remediesBadgeTitle: 'उपचार',
    remediesBadgeDesc: 'जैविक नुस्खे',

    scannerTitle: 'फसल रोग स्कैनर',
    alignLeafHint: 'पत्ते को चौकोर फ्रेम के अंदर स्थिर रखें',
    captureBtn: 'रोग की पहचान करें',
    galleryBtn: 'गैलरी',
    switchCameraBtn: 'कैमरा बदलें',
    specimensTitle: 'नमूना परीक्षण पत्ते',
    specimensSubtitle: 'तुरंत परीक्षण के लिए नीचे दिए गए किसी भी पत्ते पर टैप करें',
    analyzingText: 'पत्ते के रोग का विश्लेषण हो रहा है...',
    cameraPermissionDenied: 'कैमरा अनुमति आवश्यक है',
    cameraPermissionHint: 'कृपया ब्राउज़र सेटिंग्स में कैमरा की अनुमति दें या गैलरी से फोटो चुनें।',

    ledgerTitle: 'खेत रोग निदान खाता',
    ledgerSubtitle: 'वाटरमेलन-डीबी • फोन में सुरक्षित SQLite',
    exportJsonBtn: 'JSON बैकअप लें',
    metricScans: 'कुल स्कैन',
    metricMemory: 'मेमोरी खर्च',
    metricIntegrity: 'ऑफलाइन स्थिति',
    filterAll: 'सभी रिकॉर्ड',
    filterFungus: 'फफूंद (Fungus)',
    filterBacteria: 'जीवाणु (Bacteria)',
    filterVirus: 'विषाणु (Virus)',
    filterHealthy: 'स्वस्थ फसल',
    noRecordsTitle: 'अभी कोई रिकॉर्ड नहीं है',
    noRecordsDesc: 'पहला रिकॉर्ड दर्ज करने के लिए किसी पत्ते को स्कैन करें।',
    clearHistoryBtn: 'इतिहास साफ करें',

    vaultTitle: 'ऑफलाइन उपचार संग्रह',
    vaultSubtitle: 'शून्य इंटरनेट खर्च • संपूर्ण कृषि उपचार ज्ञानकोश',
    searchPlaceholder: 'फसल या रोग का नाम खोजें...',
    allCropsFilter: 'सभी फसलें',
    knapsackCalculatorTitle: 'स्प्रे पंप घोल कैलकुलेटर',
    tankSizeLabel: 'स्प्रेयर टैंक क्षमता',
    dosageLabel: 'दवा की आवश्यक मात्रा',
    waterLabel: 'स्वच्छ पानी की मात्रा',
    organicRemediesTab: 'जैविक व देसी उपाय',
    chemicalControlTab: 'रासायनिक दवाएं',
    prepTimeLabel: 'बनाने का समय',
    costLabel: 'अनुमानित खर्च',
    safetyIntervalLabel: 'फसल कटाई सुरक्षा अंतराल (PHI)',
    toxicityLabel: 'विषाक्तता स्तर',

    modalTitle: 'फसल रोग निदान रिपोर्ट',
    edgeSpeed: 'तुरंत ऑफलाइन जांच',
    realLeafTab: 'असली पत्ता',
    heatmapTab: 'AI हीटमैप',
    confidenceMatch: 'सटीकता',
    saveDiagnosisBtn: 'खाते में सुरक्षित करें',
    savedToLedgerBtn: 'खाते में सुरक्षित हो गया',
    closeBtn: 'बंद करें',
    alternativePossibilities: 'अन्य संभावित रोग',
  },

  mr: {
    navHome: 'मुख्य',
    navScan: 'पान स्कॅन',
    navTreatments: 'उपाय',
    navHistory: 'इतिहास',

    appTitle: 'डॉ. प्लांट AI',
    architectureSpecs: 'तंत्रज्ञान तपशील',
    darkModeToggle: 'डार्क मोड बदला',
    lightModeToggle: 'लाइट मोड बदला',
    translateApp: 'अ‍ॅपची भाषा बदला',

    landingSubtitle: 'भारतीय शेतकर्‍यांसाठी इंटरनेटशिवाय त्वरित पीक रोग निदान',
    openCameraBtn: 'पान स्कॅन करण्यासाठी कॅमेरा उघडा',
    uploadPhotoBtn: 'गॅलरीतून फोटो अपलोड करा',
    vaultTileTitle: 'ऑफलाइन उपाय भांडार',
    vaultTileDesc: 'सेंद्रिय अर्क, फवारणी प्रमाण आणि रोग प्रतिबंधक माहिती',
    historyTileTitle: 'रोग निदान इतिहास',
    historyTileDesc: 'मोबाईलमध्ये सुरक्षित वॉटरमेलन-डीबी वही',
    recentScansTitle: 'नुकतेच केलेले स्कॅन',
    viewAllBtn: 'सर्व पहा',
    instantBadgeTitle: 'त्वरित',
    instantBadgeDesc: '१ सेकंदात निकाल',
    offlineBadgeTitle: 'इंटरनेट नको',
    offlineBadgeDesc: 'नेटवर्क नसतानाही',
    remediesBadgeTitle: 'उपाय',
    remediesBadgeDesc: 'सेंद्रिय औषधे',

    scannerTitle: 'पीक रोग स्कॅनर',
    alignLeafHint: 'पान फ्रेममध्ये स्थिर धरा',
    captureBtn: 'रोगाची तपासणी करा',
    galleryBtn: 'गॅलरी',
    switchCameraBtn: 'कॅमेरा बदला',
    specimensTitle: 'चाचणीसाठी नमुना पाने',
    specimensSubtitle: 'त्वरित चाचणीसाठी खालील नमुना पानावर टॅप करा',
    analyzingText: 'पानावरील रोगाचे विश्लेषण सुरू आहे...',
    cameraPermissionDenied: 'कॅमेरा परवानगी आवश्यक',
    cameraPermissionHint: 'कृपया ब्राउझर सेटिंग्जमध्ये कॅमेरा परवानगी द्या किंवा गॅलरीतून फोटो निवडा.',

    ledgerTitle: 'शेत पीक रोग नोंदवही',
    ledgerSubtitle: 'वॉटरमेलन-डीबी • मोबाईलमधील स्थानिक SQLite',
    exportJsonBtn: 'JSON बॅकअप',
    metricScans: 'एकूण स्कॅन',
    metricMemory: 'वापरलेली मेमरी',
    metricIntegrity: 'ऑफलाइन स्थिती',
    filterAll: 'सर्व नोंदी',
    filterFungus: 'बुरशी',
    filterBacteria: 'जिवाणू',
    filterVirus: 'विषाणू',
    filterHealthy: 'निरोगी पीक',
    noRecordsTitle: 'कोणतीही नोंद आढळली नाही',
    noRecordsDesc: 'पहिली नोंद करण्यासाठी पिकाच्या पानाचा फोटो स्कॅन करा.',
    clearHistoryBtn: 'इतिहास पुसा',

    vaultTitle: 'ऑफलाइन उपाय भांडार',
    vaultSubtitle: 'विना इंटरनेट • संपूर्ण शेती औषध ज्ञानकोश',
    searchPlaceholder: 'पीक किंवा रोगाचे नाव शोधा...',
    allCropsFilter: 'सर्व पिके',
    knapsackCalculatorTitle: 'फवारणी पंप औषध प्रमाण गणक',
    tankSizeLabel: 'पंप टाकी क्षमता',
    dosageLabel: 'लागणारे औषध प्रमाण',
    waterLabel: 'पाण्याचे प्रमाण',
    organicRemediesTab: 'सेंद्रिय व घरगुती उपाय',
    chemicalControlTab: 'रासायनिक नियंत्रक',
    prepTimeLabel: 'तयारी वेळ',
    costLabel: 'अंदाजे खर्च',
    safetyIntervalLabel: 'काढणी सुरक्षा कालावधी (PHI)',
    toxicityLabel: 'विषारीपणा वर्ग',

    modalTitle: 'पीक रोग निदान अहवाल',
    edgeSpeed: 'त्वरित ऑफलाइन निकाल',
    realLeafTab: 'मूळ पान',
    heatmapTab: 'AI हीटमॅप',
    confidenceMatch: 'अचूकता',
    saveDiagnosisBtn: 'नोंदवहीत सेव्ह करा',
    savedToLedgerBtn: 'नोंद सेव्ह झाली',
    closeBtn: 'बंद करा',
    alternativePossibilities: 'इतर संभाव्य रोग शक्यता',
  },

  te: {
    navHome: 'హోమ్',
    navScan: 'ఆకు స్కాన్',
    navTreatments: 'చికిత్సలు',
    navHistory: 'చరిత్ర',

    appTitle: 'డా. ప్లాంట్ AI',
    architectureSpecs: 'ఆర్కిటెక్చర్ వివరాలు',
    darkModeToggle: 'డార్క్ మోడ్ మార్చండి',
    lightModeToggle: 'లైట్ మోడ్ మార్చండి',
    translateApp: 'యాప్ భాష మార్చండి',

    landingSubtitle: 'భారతీయ రైతుల కోసం ఇంటర్నెట్ లేకుండా తక్షణ పంట తెగుళ్ల గుర్తింపు',
    openCameraBtn: 'ఆకును స్కాన్ చేయడానికి కెమెరా తెరవండి',
    uploadPhotoBtn: 'గ్యాలరీ నుండి ఫోటో అప్‌లోడ్ చేయండి',
    vaultTileTitle: 'ఆఫ్‌లైన్ చికిత్సా భాండాగారం',
    vaultTileDesc: 'సేంద్రీయ కషాయాలు, పిచికారీ మోతాదు & నివారణ పద్ధతులు',
    historyTileTitle: 'వ్యాధి నిర్ధారణ చరిత్ర',
    historyTileDesc: 'డివైజ్‌లో భద్రపరచబడిన స్థానిక రికార్డు',
    recentScansTitle: 'ఇటీవలి స్కాన్లు',
    viewAllBtn: 'అన్నీ చూడండి',
    instantBadgeTitle: 'తక్షణం',
    instantBadgeDesc: 'సెకనులోపే',
    offlineBadgeTitle: 'నెట్ అక్కర్లేదు',
    offlineBadgeDesc: 'సిగ్నల్ లేకున్నా',
    remediesBadgeTitle: 'చికిత్సలు',
    remediesBadgeDesc: 'సేంద్రీయ పద్ధతులు',

    scannerTitle: 'పంట తెగుళ్ల స్కానర్',
    alignLeafHint: 'ఆకును చట్రంలో కదలకుండా ఉంచండి',
    captureBtn: 'వ్యాధిని నిర్ధారించండి',
    galleryBtn: 'గ్యాలరీ',
    switchCameraBtn: 'కెమెరా మార్చండి',
    specimensTitle: 'నమూనా ఆకులు',
    specimensSubtitle: 'తక్షణ పరీక్ష కోసం క్రింది నమూనా ఆకుపై నొక్కండి',
    analyzingText: 'ఆకు వ్యాధిని విశ్లేషిస్తోంది...',
    cameraPermissionDenied: 'కెమెరా అనుమతి అవసరం',
    cameraPermissionHint: 'దయచేసి సెట్టింగ్స్‌లో కెమెరా అనుమతించండి లేదా గ్యాలరీ ఫోటో వాడండి.',

    ledgerTitle: 'పంట తెగుళ్ల లెడ్జర్',
    ledgerSubtitle: 'వాటర్‌మిలన్-డిబి • స్థానిక SQLite రికార్డు',
    exportJsonBtn: 'JSON ఎగుమతి',
    metricScans: 'మొత్తం స్కాన్లు',
    metricMemory: 'వాడిన మెమరీ',
    metricIntegrity: 'ఆఫ్‌లైన్ సమగ్రత',
    filterAll: 'అన్ని రికార్డులు',
    filterFungus: 'శిలీంధ్రాలు',
    filterBacteria: 'బ్యాక్టీరియా',
    filterVirus: 'వైరస్‌లు',
    filterHealthy: 'ఆరోగ్యకరమైన పంట',
    noRecordsTitle: 'ఇంకా రికార్డులు లేవు',
    noRecordsDesc: 'మొదటి రికార్డును నమోదు చేయడానికి ఒక ఆకును స్కాన్ చేయండి.',
    clearHistoryBtn: 'చరిత్ర క్లియర్ చేయండి',

    vaultTitle: 'ఆఫ్‌లైన్ చికిత్సా భాండాగారం',
    vaultSubtitle: 'డేటా ఖర్చు లేదు • సమగ్ర వ్యవసాయ నివారణల విజ్ఞాన సర్వస్వం',
    searchPlaceholder: 'పంట లేదా తెగులు పేరు శోధించండి...',
    allCropsFilter: 'అన్ని పంటలు',
    knapsackCalculatorTitle: 'స్ప్రే ట్యాంక్ మోతాదు కాలిక్యులేటర్',
    tankSizeLabel: 'స్ప్రేయర్ ట్యాంక్ సామర్థ్యం',
    dosageLabel: 'అవసరమైన మందు మోతాదు',
    waterLabel: 'స్వచ్ఛమైన నీటి పరిమాణం',
    organicRemediesTab: 'సేంద్రీయ & దేశీ పద్ధతులు',
    chemicalControlTab: 'రసాయన మందులు',
    prepTimeLabel: 'తయారీ సమయం',
    costLabel: 'అంచనా ఖర్చు',
    safetyIntervalLabel: 'కోత భద్రతా వ్యవధి (PHI)',
    toxicityLabel: 'విష తీవ్రత వర్గం',

    modalTitle: 'పంట వ్యాధి నిర్ధారణ నివేదిక',
    edgeSpeed: 'తక్షణ ఆఫ్‌లైన్ ఫలితం',
    realLeafTab: 'నిజమైన ఆకు',
    heatmapTab: 'AI హీట్‌మ్యాప్',
    confidenceMatch: 'ఖచ్చితత్వం',
    saveDiagnosisBtn: 'లెడ్జర్‌లో భద్రపరచండి',
    savedToLedgerBtn: 'భద్రపరచబడింది',
    closeBtn: 'మూసివేయి',
    alternativePossibilities: 'ఇతర సంభావ్య వ్యాధులు',
  },

  bn: {
    navHome: 'হোম',
    navScan: 'পাতা স্ক্যান',
    navTreatments: 'চিকিৎসা',
    navHistory: 'ইতিহাস',

    appTitle: 'ড. প্ল্যান্ট AI',
    architectureSpecs: 'প্রযুক্তি বিবরণ',
    darkModeToggle: 'ডার্ক মোড বদলান',
    lightModeToggle: 'লাইট মোড বদলান',
    translateApp: 'অ্যাপের ভাষা পরিবর্তন করুন',

    landingSubtitle: 'ইন্টারনেট ছাড়াই কৃষকদের জন্য তাৎক্ষণিক ফসলের রোগ নির্ণয়',
    openCameraBtn: 'পাতা স্ক্যান করতে ক্যামেরা খুলুন',
    uploadPhotoBtn: 'গ্যালারি থেকে ছবি আপলোড করুন',
    vaultTileTitle: 'অফলাইন চিকিৎসা ভান্ডার',
    vaultTileDesc: 'জৈব স্প্রে, মিশ্রণ অনুপাত ও রোগ প্রতিরোধ নির্দেশিকা',
    historyTileTitle: 'রোগ নির্ণয়ের ইতিহাস',
    historyTileDesc: 'ফোনে সংরক্ষিত স্থানীয় ওয়াটারমেলন-ডিবি খাতা',
    recentScansTitle: 'সাম্প্রতিক স্ক্যান',
    viewAllBtn: 'সব দেখুন',
    instantBadgeTitle: 'তাত্ক্ষণিক',
    instantBadgeDesc: '১ সেকেন্ডের নিচে',
    offlineBadgeTitle: 'ইন্টারনেট মুক্ত',
    offlineBadgeDesc: 'নেটওয়ার্ক ছাড়াই',
    remediesBadgeTitle: 'প্রতিকার',
    remediesBadgeDesc: 'জৈব প্রস্তুত প্রণালী',

    scannerTitle: 'ফসলের রোগ স্ক্যানার',
    alignLeafHint: 'পাতাটিকে ফ্রেমের ভেতর স্থির রাখুন',
    captureBtn: 'রোগ নির্ণয় করুন',
    galleryBtn: 'গ্যালারি',
    switchCameraBtn: 'ক্যামেরা পরিবর্তন',
    specimensTitle: 'নমুনা পরীক্ষার পাতা',
    specimensSubtitle: 'পরীক্ষার জন্য নিচের যেকোনো পাতায় ট্যাপ করুন',
    analyzingText: 'পাতার রোগ বিশ্লেষণ করা হচ্ছে...',
    cameraPermissionDenied: 'ক্যামেরার অনুমতি প্রয়োজন',
    cameraPermissionHint: 'অনুগ্রহ করে ব্রাউজারে ক্যামেরার অনুমতি দিন বা গ্যালারি থেকে ছবি বেছে নিন।',

    ledgerTitle: 'মাঠের রোগ নির্ণয় খাতা',
    ledgerSubtitle: 'ওয়াটারমেলন-ডিবি • ফোনে সুরক্ষিত SQLite',
    exportJsonBtn: 'JSON ব্যাকআপ',
    metricScans: 'মোট স্ক্যান',
    metricMemory: 'ব্যবহৃত মেমোরি',
    metricIntegrity: 'অফলাইন স্থিতি',
    filterAll: 'সব রেকর্ড',
    filterFungus: 'ছত্রাক (Fungus)',
    filterBacteria: 'ব্যাকটেরিয়া',
    filterVirus: 'ভাইরাস',
    filterHealthy: 'সুস্থ ফসল',
    noRecordsTitle: 'কোনো রেকর্ড পাওয়া যায়নি',
    noRecordsDesc: 'প্রথম রেকর্ড সংরক্ষণের জন্য একটি পাতা স্ক্যান করুন।',
    clearHistoryBtn: 'ইতিহাস মুছুন',

    vaultTitle: 'অফলাইন চিকিৎসা ভান্ডার',
    vaultSubtitle: 'সম্পূর্ণ ডেটামুক্ত • ব্যাপক কৃষি প্রতিকার কোষ',
    searchPlaceholder: 'ফসল বা রোগের নাম খুঁজুন...',
    allCropsFilter: 'সব ফসল',
    knapsackCalculatorTitle: 'স্প্রেয়ার ট্যাঙ্ক মিশ্রণ গণক',
    tankSizeLabel: 'ট্যাঙ্কের ধারণক্ষমতা',
    dosageLabel: 'প্রয়োজনীয় ওষুধের পরিমাণ',
    waterLabel: 'পরিষ্কার জলের পরিমাণ',
    organicRemediesTab: 'জৈব ও ভেষজ প্রতিকার',
    chemicalControlTab: 'রাসায়নিক নিয়ন্ত্রণ',
    prepTimeLabel: 'প্রস্তুতির সময়',
    costLabel: 'আনুমানিক খরচ',
    safetyIntervalLabel: 'ফসল কাটার নিরাপত্তা বিরতি (PHI)',
    toxicityLabel: 'বিষাক্ততার মাত্রা',

    modalTitle: 'রোগ নির্ণয়ের রিপোর্ট',
    edgeSpeed: 'তাত্ক্ষণিক অফলাইন ফলাফল',
    realLeafTab: 'আসল পাতা',
    heatmapTab: 'AI হিটম্যাপ',
    confidenceMatch: 'সঠিকতা',
    saveDiagnosisBtn: 'খাতায় সংরক্ষণ করুন',
    savedToLedgerBtn: 'সংরক্ষণ সফল',
    closeBtn: 'বন্ধ করুন',
    alternativePossibilities: 'অন্যান্য সম্ভাব্য রোগ',
  },

  es: {
    navHome: 'Inicio',
    navScan: 'Escanear',
    navTreatments: 'Tratamientos',
    navHistory: 'Historial',

    appTitle: 'Dr. Plant AI',
    architectureSpecs: 'Especificaciones Edge',
    darkModeToggle: 'Activar modo oscuro',
    lightModeToggle: 'Activar modo claro',
    translateApp: 'Cambiar idioma de la app',

    landingSubtitle: 'Diagnóstico instantáneo de enfermedades de cultivos sin internet',
    openCameraBtn: 'Abrir Cámara para Escanear Hoja',
    uploadPhotoBtn: 'Subir Foto de la Galería',
    vaultTileTitle: 'Bóveda de Tratamientos Offline',
    vaultTileDesc: 'Remedios botánicos, dosis de dilución y guías de prevención',
    historyTileTitle: 'Historial de Diagnósticos',
    historyTileDesc: 'Registro local seguro en el dispositivo con WatermelonDB',
    recentScansTitle: 'Escaneos Recientes',
    viewAllBtn: 'Ver todos',
    instantBadgeTitle: 'Instantáneo',
    instantBadgeDesc: 'Sub-segundo',
    offlineBadgeTitle: 'Sin Internet',
    offlineBadgeDesc: 'Zonas sin cobertura',
    remediesBadgeTitle: 'Remedios',
    remediesBadgeDesc: 'Fórmulas orgánicas',

    scannerTitle: 'Escáner de Enfermedades',
    alignLeafHint: 'Mantenga la hoja quieta dentro del recuadro',
    captureBtn: 'Diagnosticar Hoja Ahora',
    galleryBtn: 'Galería',
    switchCameraBtn: 'Cambiar Cámara',
    specimensTitle: 'Hojas de Prueba de Muestra',
    specimensSubtitle: 'Toque cualquier hoja de muestra para simular el diagnóstico',
    analyzingText: 'Ejecutando inferencia neuronal en la hoja...',
    cameraPermissionDenied: 'Permiso de Cámara Requerido',
    cameraPermissionHint: 'Permita el acceso a la cámara en el navegador o cargue una foto de su galería.',

    ledgerTitle: 'Libro de Patología Agrícola',
    ledgerSubtitle: 'WatermelonDB • SQLite Local en el Dispositivo',
    exportJsonBtn: 'Exportar JSON',
    metricScans: 'Total Escaneos',
    metricMemory: 'Memoria Usada',
    metricIntegrity: 'Integridad Offline',
    filterAll: 'Todos',
    filterFungus: 'Hongos',
    filterBacteria: 'Bacterias',
    filterVirus: 'Virus',
    filterHealthy: 'Saludable',
    noRecordsTitle: 'Sin Diagnósticos Aún',
    noRecordsDesc: 'Escanee o suba una hoja enferma para crear su primer registro.',
    clearHistoryBtn: 'Borrar Historial',

    vaultTitle: 'Bóveda de Tratamientos Offline',
    vaultSubtitle: 'Cero Consumo de Datos • Enciclopedia Agronómica Completa',
    searchPlaceholder: 'Buscar por cultivo o enfermedad...',
    allCropsFilter: 'Todos los Cultivos',
    knapsackCalculatorTitle: 'Calculadora de Dilución para Mochila Fumigadora',
    tankSizeLabel: 'Capacidad del Tanque',
    dosageLabel: 'Dosis Requerida',
    waterLabel: 'Volumen de Agua Limpia',
    organicRemediesTab: 'Bio-Remedios Orgánicos',
    chemicalControlTab: 'Control Químico',
    prepTimeLabel: 'Tiempo de Prep.',
    costLabel: 'Costo Estimado',
    safetyIntervalLabel: 'Intervalo de Seguridad a Cosecha (PHI)',
    toxicityLabel: 'Clase Toxicológica OMS',

    modalTitle: 'Diagnóstico de Patología',
    edgeSpeed: 'Inferencia Edge',
    realLeafTab: 'Hoja Real',
    heatmapTab: 'Mapa Térmico AI',
    confidenceMatch: 'Coincidencia',
    saveDiagnosisBtn: 'Guardar en Libro Local',
    savedToLedgerBtn: 'Guardado con Éxito',
    closeBtn: 'Cerrar',
    alternativePossibilities: 'Otras Posibilidades Neuronales',
  },

  sw: {
    navHome: 'Nyumbani',
    navScan: 'Changanua Jani',
    navTreatments: 'Matibabu',
    navHistory: 'Historia',

    appTitle: 'Dr. Plant AI',
    architectureSpecs: 'Maelezo ya Muundo wa Edge',
    darkModeToggle: 'Washa Hali ya Giza',
    lightModeToggle: 'Washa Hali ya Mwangaza',
    translateApp: 'Badilisha Lugha ya Programu',

    landingSubtitle: 'Utambuzi wa papo hapo wa magonjwa ya mimea bila intaneti',
    openCameraBtn: 'Fungua Kamera Kuchanganua Jani',
    uploadPhotoBtn: 'Pakia Picha Kutoka Galari',
    vaultTileTitle: 'Ghala la Matibabu Nje ya Mtandao',
    vaultTileDesc: 'Dawa za kiasili, vipimo vya kuchanganya na kuzuia magonjwa',
    historyTileTitle: 'Historia ya Utambuzi',
    historyTileDesc: 'Daftari salama kwenye kifaa na WatermelonDB',
    recentScansTitle: 'Uchunguzi wa Hivi Karibuni',
    viewAllBtn: 'Tazama yote',
    instantBadgeTitle: 'Papo hapo',
    instantBadgeDesc: 'Chini ya sekunde 1',
    offlineBadgeTitle: 'Bila Intaneti',
    offlineBadgeDesc: 'Maeneo bila mtandao',
    remediesBadgeTitle: 'Matibabu',
    remediesBadgeDesc: 'Dawa za asili',

    scannerTitle: 'Kichunguzi cha Magonjwa ya Mimea',
    alignLeafHint: 'Shikilia jani vizuri ndani ya fremu',
    captureBtn: 'Tambua Ugonjwa Sasa',
    galleryBtn: 'Galari',
    switchCameraBtn: 'Geuza Kamera',
    specimensTitle: 'Sampuli za Majaribio',
    specimensSubtitle: 'Gusa jani lolote hapa chini kwa jaribio la papo hapo',
    analyzingText: 'Inachambua jani kwa akili bandia...',
    cameraPermissionDenied: 'Ruhusa ya Kamera Inahitajika',
    cameraPermissionHint: 'Tafadhali ruhusu kamera kwenye mipangilio au chagua picha kutoka galari.',

    ledgerTitle: 'Daftari la Magonjwa ya Shambani',
    ledgerSubtitle: 'WatermelonDB • SQLite Kwenye Kifaa',
    exportJsonBtn: 'Pakua JSON',
    metricScans: 'Jumla ya Uchunguzi',
    metricMemory: 'Kumbukumbu Iliyotumika',
    metricIntegrity: 'Hali ya Nje ya Mtandao',
    filterAll: 'Yote',
    filterFungus: 'Kuvu (Fungus)',
    filterBacteria: 'Bakteria',
    filterVirus: 'Virusi',
    filterHealthy: 'Mmea Wenye Afya',
    noRecordsTitle: 'Hakuna Kumbukumbu Bado',
    noRecordsDesc: 'Changanua jani lenye ugonjwa kuanza daftari lako.',
    clearHistoryBtn: 'Futa Historia',

    vaultTitle: 'Ghala la Matibabu Nje ya Mtandao',
    vaultSubtitle: 'Bila Kutumia Data • Kamusi Kamili ya Kilimo',
    searchPlaceholder: 'Tafuta kwa zao au jina la ugonjwa...',
    allCropsFilter: 'Mazao Yote',
    knapsackCalculatorTitle: 'Kikokotoo cha Bomba la Kupulizia (Knapsack)',
    tankSizeLabel: 'Ukubwa wa Tangi la Bomba',
    dosageLabel: 'Kiwango cha Dawa Kinachohitajika',
    waterLabel: 'Kiasi cha Maji Safi',
    organicRemediesTab: 'Dawa za Asili na Mazingira',
    chemicalControlTab: 'Dawa za Kemikali',
    prepTimeLabel: 'Muda wa Maandalizi',
    costLabel: 'Gharama Inayokadiriwa',
    safetyIntervalLabel: 'Muda wa Usalama Kabla ya Mavuno (PHI)',
    toxicityLabel: 'Kiwango cha Sumu (WHO)',

    modalTitle: 'Ripoti ya Ugonjwa wa Mmea',
    edgeSpeed: 'Uchunguzi wa Papo Hapo',
    realLeafTab: 'Jani Halisi',
    heatmapTab: 'Picha ya Joto (AI)',
    confidenceMatch: 'Ulinganifu',
    saveDiagnosisBtn: 'Hifadhi Kwenye Daftari',
    savedToLedgerBtn: 'Imehifadhiwa',
    closeBtn: 'Funga',
    alternativePossibilities: 'Uwezekano Mwingine',
  },
};

export function getTranslation(lang: LanguageCode): UiTranslations {
  return UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.en;
}
