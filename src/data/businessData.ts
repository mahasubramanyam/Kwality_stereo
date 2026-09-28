export interface PortfolioItem {
  id: string;
  title: string;
  clientBrand: string;
  category: 'cattle-feed' | 'flour-mill' | 'multi-language' | 'borders-motifs' | 'bulk-copper';
  bagType: string;
  dimensions: string;
  stereoType: string;
  languages: string[];
  description: string;
  borderElements?: string[];
  stereoFeatures: string[];
  sampleDetails: {
    reliefDepth: string;
    pressType: string;
    wovenMeshCompatible: string;
  };
}

export interface Industry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  commonBagSizes: string[];
  typicalDesigns: string[];
  challengesSolved: string;
  iconName: string;
}

export const BUSINESS_INFO = {
  name: 'Kwality Stereo',
  tagline: 'Rubber Stereo Manufacturer for Packaging Bags',
  founder: 'Mohan',
  phone: '90490 98150',
  phoneRaw: '9049098150',
  phoneTel: '+919049098150',
  email: 'saimohan361991@gmail.com',
  whatsappNumber: '919049098150',
  whatsappDefaultMsg: 'Hello Mohan ji, I need custom engraved rubber stereos for packaging bags. Please share details and pricing.',
  primaryLocation: {
    city: 'Krishnagiri',
    state: 'Tamil Nadu',
    pincode: '635207',
    label: 'Manufacturing Unit & Works',
    address: 'Puliyanthoppu, Uthangarai Upparatti VTC, Krishnagiri - 635207, Tamil Nadu',
    highlight: 'Central Vulcanizing & High-Precision Engraving Works (Pan-India delivery)'
  },
  branchLocation: {
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560072',
    label: 'Bangalore Branch & Dispatch Hub',
    address: '109, 2nd Cross, 1st Main, Kanaka Nagar, Munikrishnappa Layout, Sangolli Rayanna Main Road, Bangalore, Karnataka - 560072',
    highlight: 'Direct client coordination, sampling & fast Karnataka/Interstate dispatch'
  }
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'samrudhi-milk-gain',
    title: 'Samrudhi Milk Gain — High-Yield Cattle Feed Stereo',
    clientBrand: 'Samrudhi Milk Gain',
    category: 'cattle-feed',
    bagType: '50 Kg HDPE / PP Woven Sack Bag',
    dimensions: '22" x 38" (Repeat Length: 965mm)',
    stereoType: 'Deep-Relief Vulcanized Natural Rubber (6.35mm / 0.250")',
    languages: ['Hindi', 'English', 'Marathi'],
    description: 'Engineered for high-speed rotogravure / flexo roll-to-roll sack printing presses. Crisp reproduction of milch cow and calf illustration with milk bucket symbols and nutritional analysis table.',
    borderElements: ['Sugarcane Stalks', 'Wheat Sheaves', 'Heavy Solid Edge Rims'],
    stereoFeatures: [
      'Anti-ghosting relief engraving',
      'Solid ink laydown on rough HDPE tape texture',
      'Reinforced backing for 250,000+ sack impressions'
    ],
    sampleDetails: {
      reliefDepth: '3.2mm floor-to-face relief',
      pressType: 'Roll-to-roll inline flexo woven bag printer',
      wovenMeshCompatible: '10x10 & 12x12 woven PP tape'
    }
  },
  {
    id: 'chunni-cattle-feed',
    title: 'Chunni — Traditional Cattle Feed & By-product Bag Stereo',
    clientBrand: 'Chunni Special Cattle Feed',
    category: 'cattle-feed',
    bagType: '40 Kg / 50 Kg Woven Sack',
    dimensions: '21" x 36"',
    stereoType: 'Heavy-Gauge Red Rubber Stereo with Micro-Tension Mounting',
    languages: ['Hindi', 'Punjabi', 'English'],
    description: 'Custom rubber stereo hand-engraved for regional dairy cattle feeds. Features ornate traditional agricultural borders with high-contrast Hindi and Gurmukhi/Punjabi typography.',
    borderElements: ['Corn Cobs', 'Wheat Ears', 'Decorative Floral Swag'],
    stereoFeatures: [
      'Bold headline retention without ink bleeding',
      'Dedicated batch / date stamp cutout socket',
      'High resistance to solvent and water-based flexo inks'
    ],
    sampleDetails: {
      reliefDepth: '3.0mm',
      pressType: 'Stack-type flexo printing press',
      wovenMeshCompatible: 'Standard non-laminated woven sack'
    }
  },
  {
    id: 'shri-hariom-gold',
    title: 'Shri Hariom Gold — Premium Cattle & Dairy Nutrition Stereo',
    clientBrand: 'Shri Hariom Gold',
    category: 'cattle-feed',
    bagType: '50 Kg Multi-color PP Woven Bag',
    dimensions: '23" x 39"',
    stereoType: '2-Color Registered Rubber Stereo Set (Cyan / Red separation)',
    languages: ['Hindi', 'Gujarati', 'English'],
    description: 'Twin-color matched rubber stereos designed for precise register alignment on multi-color bag printing presses. Emphasizes the embossed Gold seal and dairy yield graphs.',
    borderElements: ['Healthy Cattle Silhouette', 'Lush Pasture Grass', 'Sunburst Pattern'],
    stereoFeatures: [
      'Color-to-color register pin alignment marks',
      'Fine-line text reproduction on woven sack grain',
      'Zero shrinkage vulcanization formulation'
    ],
    sampleDetails: {
      reliefDepth: '2.8mm / 3.4mm composite',
      pressType: '4-Color Central Impression / Stack Press',
      wovenMeshCompatible: 'BOPP laminated & regular PP sacks'
    }
  },
  {
    id: 'star-flour-mill',
    title: 'Star Flour Mill — Chakki Fresh Atta 50kg & 30kg Stereos',
    clientBrand: 'Star Flour Mill',
    category: 'flour-mill',
    bagType: '30 Kg & 50 Kg White PP Woven Sack',
    dimensions: '20" x 34"',
    stereoType: 'Precision Laser-Engraved Food-Grade Vulcanized Rubber',
    languages: ['English', 'Hindi', 'Bengali'],
    description: 'Clean typographic layout with intricate wheat stalks flanking the central Star emblem. Formulated specifically to prevent ink filling in fine Bengali script loops.',
    borderElements: ['Wheat Sheaf Garland', 'Star Medallion Crest', 'Golden Grain Waves'],
    stereoFeatures: [
      'Ultra-sharp glyph edges for intricate eastern scripts',
      'FSSAI license number and nutritional value matrix',
      'Uniform thickness tolerance within ±0.03mm'
    ],
    sampleDetails: {
      reliefDepth: '3.0mm',
      pressType: 'Direct bag-to-bag / roll-to-roll press',
      wovenMeshCompatible: 'Coated / Uncoated White PP'
    }
  },
  {
    id: 'kohinoor-flour-mill',
    title: 'Kohinoor Flour Mill — Royal Diamond Heritage Atta Bag',
    clientBrand: 'Kohinoor Flour Mill',
    category: 'flour-mill',
    bagType: '25 Kg & 50 Kg Woven Grain Bag',
    dimensions: '21" x 35"',
    stereoType: 'High-Durometer Synthetic-Natural Rubber Blend',
    languages: ['English', 'Punjabi', 'Hindi'],
    description: 'Premium milling brand stereo featuring royal diamond filigree and dense text layout. Guaranteed smooth ink transfer even across uneven woven tape ridges.',
    borderElements: ['Wheat Ears', 'Ornate Diamond Corners', 'Traditional Flour Sieve Crest'],
    stereoFeatures: [
      'Deep relief valleys preventing background smudging',
      'Durable for over 300,000 continuous bag impressions',
      'Easy cleanup with standard rubber stereo wash solutions'
    ],
    sampleDetails: {
      reliefDepth: '3.5mm deep floor',
      pressType: 'High-speed flexographic bag printer',
      wovenMeshCompatible: 'Woven PP with circular weave'
    }
  },
  {
    id: 'multi-lang-tamil-punjabi-bengali',
    title: 'Pan-India Multi-Language Regional Packaging Stereos',
    clientBrand: 'Custom Agri-Retail Packaging',
    category: 'multi-language',
    bagType: '25kg to 50kg Multi-lingual Woven Sacks',
    dimensions: 'Standard Repeat Sizes (600mm to 1200mm)',
    stereoType: 'Multi-Script Custom Master Engraved Rubber Blocks',
    languages: ['Tamil', 'Punjabi', 'Hindi', 'Bengali', 'Kannada', 'Telugu'],
    description: 'Dedicated multi-script typesetting and rubber mold engraving. We accurately engineer native glyph accents, sub-scripts, and diacritics in Tamil, Gurmukhi, Devanagari, and Bengali without breaking on high-speed press runs.',
    borderElements: ['Sugarcane', 'Palm Trees', 'Corn', 'Paddy/Rice Ears'],
    stereoFeatures: [
      'Native typographical proofing before casting',
      'Reinforced character stems to prevent clipping',
      'Uniform kiss-pressure compatibility'
    ],
    sampleDetails: {
      reliefDepth: '3.0mm relief',
      pressType: 'Stack flexo & rotary letterpress',
      wovenMeshCompatible: 'All standard woven sacks'
    }
  },
  {
    id: 'decorative-borders-collection',
    title: 'Agricultural & Decorative Border Stereos (Corn, Wheat, Sugarcane, Palm)',
    clientBrand: 'Standard Agri & Dairy Pack Library',
    category: 'borders-motifs',
    bagType: 'All Sack Packaging Formats',
    dimensions: 'Modular Border Strips & Corner Elements',
    stereoType: 'Heavy Relief Continuous & Corner Stereo Elements',
    languages: ['Iconographic / Universal'],
    description: 'Pre-engineered and custom decorative border stereos: ripe corn, golden wheat sheaves, lush sugarcane stalks, coastal palm trees, and proud cattle silhouettes that give woven packaging instant shelf distinction in mandi markets.',
    borderElements: ['Corn Stalks', 'Wheat Ears', 'Sugarcane Canes', 'Palm Trees', 'Dairy Cows'],
    stereoFeatures: [
      'Continuous repeat border patterns without visible seams',
      'Heavy rubber wall thickness for rugged shop-floor handling',
      'Custom corner interlocks for swift cylinder mounting'
    ],
    sampleDetails: {
      reliefDepth: '3.2mm',
      pressType: 'All flexo sack printers',
      wovenMeshCompatible: 'HDPE / PP woven tape'
    }
  },
  {
    id: 'copper-rubber-standard-packs',
    title: 'Copper/Rubber Stereo Standard Packs (L30 x 10 Packs)',
    clientBrand: 'Kwality Stereo Production Standards',
    category: 'bulk-copper',
    bagType: 'Standard & High-Volume Industrial Bag Runs',
    dimensions: 'L30 x 10 Packs & Custom Repeat Cylinders',
    stereoType: 'Composite Copper-Backed & Pure Vulcanized Rubber Stereos',
    languages: ['Customizable'],
    description: 'Precision manufactured copper/rubber stereos in standard industrial sizing such as L30 x 10 packs. Combines the dimensional stability of copper backing with the flexible, ink-receptive cushioning of vulcanized rubber.',
    borderElements: ['Industrial Alignment Grids', 'Edge Locking Rims'],
    stereoFeatures: [
      'L30 x 10 standard size packs ready for swift dispatch',
      'Superior dimensional stability under cylinder tension',
      'Ideal for heavy repeat runs and high-volume bag mills'
    ],
    sampleDetails: {
      reliefDepth: 'Standard 4.7mm / 6.35mm / 7mm',
      pressType: 'Rotogravure & flexographic bag machines',
      wovenMeshCompatible: 'Export quality HDPE/PP sacks'
    }
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'cattle-feed',
    title: 'Cattle & Dairy Feed Bags',
    subtitle: 'High-durability stereos for dairy mash, pellet, & bypass protein sacks',
    description: 'Cattle feed packaging requires deep-relief rubber stereos that withstand coarse, heavy-gauge woven PP bags. We carve high-contrast cattle illustrations, feeding charts, protein/fat percentages, and Hindi/regional brand logos that stay sharp from first bag to 300,000th sack.',
    commonBagSizes: ['50 Kg standard mash bag', '40 Kg pellet sack', '25 Kg calf starter'],
    typicalDesigns: ['Milch cow & calf artwork', 'Milk yield gallon icons', 'Composition & nutrient tables', 'Mandatory ISI / BIS marks'],
    challengesSolved: 'Deep 3.2mm floor prevents messy ink pooling between coarse woven tape threads.',
    iconName: 'Cow'
  },
  {
    id: 'poultry-feed',
    title: 'Poultry & Bird Feed Bags',
    subtitle: 'Vibrant, sharp typography for broiler, layer & breeder feed sacks',
    description: 'Fast-moving poultry feed operations print high volumes across varying seasonal batches. Our rubber stereos provide quick-change batch/lot date sockets, crisp broiler/rooster silhouettes, and clear feeding phase instructions.',
    commonBagSizes: ['50 Kg broiler finish bag', '50 Kg layer mash sack', '25 Kg chick crumb bag'],
    typicalDesigns: ['Rooster & poultry silhouettes', 'Color-coded starter/grower bands', 'FSSAI & storage directions'],
    challengesSolved: 'Wear-resistant rubber compound resists aggressive drying flexo inks and reduces press downtime.',
    iconName: 'Bird'
  },
  {
    id: 'flour-mills',
    title: 'Flour Mills & Grain Sacks (Atta, Maida, Suji)',
    subtitle: 'Finely etched typography & golden grain borders for food packaging',
    description: 'Flour mill packaging demands pristine, hygienic food-grade aesthetics. We manufacture high-definition rubber stereos that accurately render wheat ears, traditional stone chakki illustrations, and delicate script lettering across Hindi, Punjabi, Bengali, and English.',
    commonBagSizes: ['50 Kg bulk mill bag', '30 Kg chakki fresh bag', '10 Kg & 20 Kg consumer sacks'],
    typicalDesigns: ['Golden wheat sheaves & flour sacks', 'FSSAI license badge', '100% Whole Wheat grain seals', 'Cooking & recipe directions'],
    challengesSolved: 'Micro-relief technology prevents ink fill-in inside intricate scripts (like Devanagari "मात्रा" or Punjabi vowels).',
    iconName: 'Wheat'
  },
  {
    id: 'agri-fertilizer',
    title: 'Agricultural & Fertilizer Packaging',
    subtitle: 'Heavy-duty chemical-resistant stereos for urea, DAP, NPK & seed bags',
    description: 'Fertilizer and agrochemical bags carry mandatory government regulatory disclosures, hazard warnings, chemical formulas, and batch barcodes. Our stereos ensure 100% legibility and zero distortion even on heavy HDPE woven sacks.',
    commonBagSizes: ['45 Kg / 50 Kg Urea & DAP bags', '25 Kg micro-nutrient sack', '10 Kg hybrid seed bag'],
    typicalDesigns: ['Government subsidy disclosure boxes', 'Hazard & handling symbols', 'Batch/MRP/Exp tracking boxes', 'Crop illustrations (paddy, cotton, cane)'],
    challengesSolved: 'Tough solvent-proof vulcanized rubber retains razor-sharp linework through harsh industrial washdowns.',
    iconName: 'Sprout'
  }
];

export const CORE_SERVICES = [
  {
    title: 'Custom Rubber Stereo Engraving',
    description: 'Precision hand-cut and engraved rubber stereos, custom-carved to exact bag repeat lengths. Vulcanized natural and synthetic rubber formulations tailored for coarse woven sack texture.',
    badge: 'Core Specialty',
    points: [
      'Custom floor relief depths (2.8mm to 4.0mm)',
      'High ink transfer efficiency on PP/HDPE',
      'No ink spreading or bridging on tape weave'
    ]
  },
  {
    title: 'Multi-Language Stereo Typesetting',
    description: 'Complete in-house design and engraving in all major Indian regional languages including Tamil, Hindi, Punjabi, Bengali, Kannada, Telugu, Gujarati, and Marathi.',
    badge: 'Native Indian Scripts',
    points: [
      'Accurate glyph accent and diacritic retention',
      'Legible micro-text for mandatory statutory notices',
      'Pre-vulcanization customer proof approval'
    ]
  },
  {
    title: 'Bulk Stereo Manufacturing & Standard Packs',
    description: 'High-volume production capacity for bag manufacturers and flexo printing presses. We supply standard packs like L30 x 10 packs as well as custom repeat continuous stereos.',
    badge: 'Volume Ready',
    points: [
      'Standard L30 x 10 packs always in rotation',
      'Consistent gauge calibration across every stereo',
      'Fast turnaround for repeat batch orders'
    ]
  },
  {
    title: 'Copper / Rubber Composite Stereos',
    description: 'Rigid copper-backed rubber stereos engineered for high-tension printing cylinders where extreme dimensional accuracy and zero elongation under tension are essential.',
    badge: 'High Precision',
    points: [
      'Dimensionally stable copper base',
      'Cushioned vulcanized rubber printing face',
      'Extended cylinder life for mega-run packaging'
    ]
  },
  {
    title: 'Replaceable Batch, Date & MRP Sockets',
    description: 'Modular interchangeable plug-in rubber stereos for batch numbers, manufacture dates, maximum retail price (MRP), and dynamic expiry dates.',
    badge: 'Interchangeable Sockets',
    points: [
      'Dovetail and slot-mounted date plugs',
      'Quick swap without removing the entire master stereo',
      'Reduces downtime on high-volume packing lines'
    ]
  },
  {
    title: 'Cylinder Mounting & Technical Consultation',
    description: 'Expert guidance by Mohan on cylinder pitch, repeat length calculation, distortion factors, and cushion tape selection for maximum print clarity on woven sacks.',
    badge: 'Direct Engineering',
    points: [
      'Calculated stretch / elongation compensation',
      'Mounting guideline drawings provided',
      'Direct phone support with Mohan at 90490 98150'
    ]
  }
];

export const FAQS = [
  {
    question: 'What exactly is a rubber stereo in the packaging industry?',
    answer: 'A rubber stereo is a block of vulcanized rubber into which a design — logos, text, borders, tables — is hand-cut and engraved in relief (also known as a flexo rubber block). It is mounted on the printing cylinder of a bag printing machine to transfer ink onto woven PP (polypropylene) and HDPE (high-density polyethylene) sacks. It is NOT an audio stereo, speaker, tire, or rubber gasket. It is an industrial printing tool specifically for packaging bags.'
  },
  {
    question: 'Which industries and bag types do your rubber stereos cater to?',
    answer: 'Our stereos are custom made for cattle feed bags (like Samrudhi Milk Gain, Chunni, Shri Hariom Gold), poultry feed bags, flour mill atta bags (like Star Flour Mill, Kohinoor Flour Mill), fertilizer/chemical sacks, cement/mineral bags, and grain packaging.'
  },
  {
    question: 'Can you engrave stereos in regional Indian languages like Tamil, Punjabi, Hindi, and Bengali?',
    answer: 'Yes, absolutely! We specialize in multi-language rubber stereo engraving. Whether you need Tamil disclaimers for Krishnagiri/Tamil Nadu, Gurmukhi/Punjabi for Punjab grain mandis, Devanagari/Hindi for North India, or Bengali for Eastern mills, we accurately typeset and hand-engrave every script with sharp legibility.'
  },
  {
    question: 'How do you handle delivery across India from Krishnagiri and Bangalore?',
    answer: 'We dispatch orders daily to every state in India using express transport logistics partners (VRL Logistics, Navata, KPN, ABT, SafeXpress) and registered courier/speed post. Whether your mill is in Punjab, Gujarat, Uttar Pradesh, Tamil Nadu, Karnataka, or West Bengal, your stereos arrive securely packaged with tracking.'
  },
  {
    question: 'How do I place an inquiry or send my bag design artwork?',
    answer: 'You can call Mohan directly at 90490 98150, send your CorelDRAW / PDF / JPEG artwork via WhatsApp (90490 98150), or email saimohan361991@gmail.com. We review your bag dimensions and send a clear quote within hours.'
  },
  {
    question: 'Do you supply standard sizes like L30 x 10 packs?',
    answer: 'Yes! We manufacture standard sizes including L30 x 10 packs, copper/rubber composite stereos, and custom thickness rubber stereos (e.g. 4.7mm, 6.35mm, 7mm) designed for standard flexo sack printing cylinders.'
  }
];
