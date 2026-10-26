import { PlumbingService, Testimonial, FaqItem } from './types';

// Replaceable contact details configuration
export const PLUMBING_CONFIG = {
  businessName: 'AquaFix Plumbing',
  tagline: 'Reliable, clean, and upfront plumbing services for homes & businesses',
  // Contact placeholders (easily replaceable by user for live hosting)
  phoneDisplay: '(555) 019-2834',
  phoneRaw: '+15550192834',
  whatsappDisplay: '+1 (555) 019-2834',
  whatsappUrl: 'https://wa.me/15550192834?text=Hi%20AquaFix%20Plumbing%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20service.',
  email: 'service@aquafixplumbing-demo.com',
  address: '100 Waterworks Way, Suite 400',
  cityStateZip: 'Metro City, NY 10001',
  operatingHours: 'Mon – Sat: 7:00 AM – 7:00 PM · Closed Sunday',
  
  // Explicit Fictional Disclaimer
  fictionalDisclaimer:
    'AquaFix Plumbing is a fictional showcase website created for demonstration and template purposes. Phone numbers, addresses, and customer profiles shown are illustrative placeholders.',
  
  // Hero Image
  heroImage: '/src/assets/images/hero_plumber_pipes_1793030891695.jpg',
};

export const SERVICES: PlumbingService[] = [
  {
    id: 'leak-repairs',
    title: 'Leak Repairs',
    shortDesc: 'Acoustic and thermal detection to locate and fix hidden water leaks before structural damage occurs.',
    fullDesc:
      'From dripping sink traps and ceiling damp spots to concealed foundation pipe leaks, our technicians pinpoint the exact leak location using non-destructive acoustic sensors and thermal imaging, followed by a durable repair.',
    timeEstimate: '1 – 2 hours typical',
    priceNote: 'Fixed quote provided after diagnosis',
    image: '/src/assets/images/hero_plumber_pipes_1793030891695.jpg',
    highlights: [
      'Non-invasive acoustic & thermal leak pinpointing',
      'Ceiling, wall, slab, and fixture leak isolation',
      'Pressure testing after repair to verify zero seepage',
      'Clean surface protection and debris removal',
    ],
  },
  {
    id: 'tap-installation',
    title: 'Tap Installation',
    shortDesc: 'Expert replacement and installation of modern kitchen mixers, bathroom basins, and exterior bibs.',
    fullDesc:
      'Ensure zero drips, steady water pressure, and pristine finish. We replace corroded valves, align supply lines, and install single-lever, pull-out spray, touchless, and thermostatic taps with manufacturer-warranty compliance.',
    timeEstimate: '45 – 90 mins per fixture',
    priceNote: 'Flat-rate fixture installation pricing',
    image: '/src/assets/images/service_tap_faucet_1793030891517.jpg',
    highlights: [
      'Kitchen, bathroom vanity, laundry & outdoor faucets',
      'Inspection and replacement of aging flexi hoses & isolation valves',
      'Silicone seal and pressure calibration for splash-free flow',
      'Old tap removal and responsible recycling',
    ],
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    shortDesc: 'High-definition video inspection and mechanized snaking to clear tough blockages and restore full flow.',
    fullDesc:
      'Slow-draining showers, backed-up kitchen sinks, and gurgling main sewer lines. We utilize compact drain cameras to diagnose roots, grease build-up, and foreign objects, followed by motorized cabling or hydro-clearing.',
    timeEstimate: '1 – 3 hours',
    priceNote: 'Clear pricing before any equipment enters the pipe',
    image: '/src/assets/images/service_drain_pipes_1793030892791.jpg',
    highlights: [
      'HD video camera line inspection with live monitor view',
      'Motorized drain snake clearing and hydro-scouring',
      'Grease, soap scum, hair, and mineral obstruction removal',
      'Bio-safe flow treatment to prevent repeat backups',
    ],
  },
  {
    id: 'pipe-repairs',
    title: 'Pipe Repairs',
    shortDesc: 'Durable repairs and partial re-piping for copper, PEX, PVC, and galvanized water supply lines.',
    fullDesc:
      'Whether repairing a burst frozen pipe, eliminating hammering noises, or replacing corroded sections with modern flexible PEX or soldered copper, our licensed plumbers restore your home’s hydraulic integrity with minimal wall cuts.',
    timeEstimate: '2 – 4 hours',
    priceNote: 'Complete upfront estimate including materials',
    image: '/src/assets/images/hero_plumber_pipes_1793030891695.jpg',
    highlights: [
      'Burst, cracked, or pinhole punctured pipe splicing',
      'Elimination of water hammer knocking and rattling',
      'Corroded galvanized pipe transitions to PEX / Type-L copper',
      'Full static pressure validation and code-compliant joints',
    ],
  },
  {
    id: 'water-heater-installation',
    title: 'Water Heater Installation',
    shortDesc: 'High-efficiency tankless and traditional storage water heater installation, replacement, and venting.',
    fullDesc:
      'Upgrade to reliable hot water with lower utility costs. We size your household capacity accurately, handle gas and electric connections safely, install thermal expansion tanks, and ensure proper pressure relief valve venting.',
    timeEstimate: '3 – 5 hours',
    priceNote: 'Transparent package including haul-away & permits',
    image: '/src/assets/images/service_water_heater_1793030893498.jpg',
    highlights: [
      'Tankless continuous-flow & conventional tank units',
      'Expansion tank installation & code-required relief piping',
      'Gas line safety shutoff or high-amp electrical disconnect check',
      'Compliant draining and safe disposal of your old heater',
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Upfront Transparent Pricing',
    description:
      'No surprise charges or hidden dispatch fees. You receive a firm, written quote before any tool touches a pipe, and that quote stays locked.',
  },
  {
    title: 'Licensed & Insured Plumbers',
    description:
      'Every technician is background-checked, certified, and fully insured. We uphold strict local plumbing codes and safety protocols.',
  },
  {
    title: 'Clean Workspace Guarantee',
    description:
      'We treat your home with respect. Technicians wear protective shoe covers, lay durable drop cloths, and leave your work area cleaner than we found it.',
  },
  {
    title: '12-Month Workmanship Warranty',
    description:
      'We stand behind every repair and installation. If any fitted part or joint develops an issue within 12 months, we fix it promptly at zero cost.',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Request a Quote or Call',
    description:
      'Submit our quick online request form or call directly with your plumbing problem. We confirm a convenient arrival window.',
  },
  {
    step: '02',
    title: 'Thorough Diagnosis & Flat Quote',
    description:
      'Our plumber arrives on time, inspects the issue with diagnostic tools, explains the solution, and provides a clear, guaranteed price.',
  },
  {
    step: '03',
    title: 'Expert Work & Tidy Execution',
    description:
      'Once approved, we carry out the repair using professional-grade parts, adhering to code standards and keeping your floors protected.',
  },
  {
    step: '04',
    title: 'Pressure Test & Written Guarantee',
    description:
      'We pressure-test the fix together, verify clean water flow and zero leaks, and hand over your itemized receipt and warranty certificate.',
  },
];

export const FICTIONAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Marcus Vance',
    neighborhood: 'Oakridge Residential District',
    serviceReceived: 'Emergency Pinhole Leak Repair',
    quote:
      'Discovered water seeping through our kitchen ceiling on a Tuesday evening. The AquaFix technician arrived within an hour, used an acoustic sensor to isolate the pinhole in the hot supply line, and had the joint replaced cleanly without tearing up our drywall unnecessarily.',
    timeframe: 'Fictional demo customer profile',
    rating: 5,
  },
  {
    id: 'test-2',
    clientName: 'Elena Rostova',
    neighborhood: 'Highland Park Lofts',
    serviceReceived: 'Kitchen Tap & Valve Installation',
    quote:
      'Replaced our dated kitchen mixer with a modern pull-out tap. The plumber also noticed our 15-year-old shutoff valves were corroded and replaced them at a very reasonable flat price. Punctual, respectful of our clean floors, and zero mess left behind.',
    timeframe: 'Fictional demo customer profile',
    rating: 5,
  },
  {
    id: 'test-3',
    clientName: 'David Chen',
    neighborhood: 'Riverside Commercial Center',
    serviceReceived: 'Main Drain Clearing & Camera Scan',
    quote:
      'Our ground-floor boutique restroom kept backing up. The technician fed a fiber-optic camera down the lateral line, showed us where grease build-up had choked the bend, cleared it with the hydro-snake, and confirmed full flow on screen. Very transparent process.',
    timeframe: 'Fictional demo customer profile',
    rating: 5,
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do you determine the cost for a plumbing repair?',
    answer:
      'We operate on transparent flat-rate pricing rather than open-ended hourly meters. When our technician arrives, they conduct an initial inspection, determine the required materials and labor, and provide a firm written price quote before beginning any work. The price you approve is the exact price you pay.',
    category: 'Pricing',
  },
  {
    id: 'faq-2',
    question: 'Do you charge a diagnostic or call-out fee?',
    answer:
      'We charge a standard, modest diagnostic fee to dispatch a fully equipped van to your property and inspect the issue. If you choose to proceed with the recommended repair on that visit, your diagnostic fee is credited directly toward the final invoice.',
    category: 'Pricing',
  },
  {
    id: 'faq-3',
    question: 'How quickly can a plumber arrive for an urgent leak?',
    answer:
      'For active water leaks or burst pipes, we prioritize immediate dispatch and can typically arrive within 45 to 90 minutes across our standard service area. We also walk you through shutting off your main water valve over the phone while the technician is on the way.',
    category: 'Response Time',
  },
  {
    id: 'faq-4',
    question: 'What is covered under your 12-Month Workmanship Guarantee?',
    answer:
      'All labor and craftsmanship performed by our licensed plumbers are covered against failure or defect for a full 12 months. Any manufacturer warranty for supplied fixtures (such as faucets, water heaters, and valves) applies additionally. If a repaired joint drips, we return and fix it at no charge.',
    category: 'Warranty',
  },
  {
    id: 'faq-5',
    question: 'What types of pipes and fixtures can you work on?',
    answer:
      'We service all standard residential and commercial plumbing systems including copper (Type M, L, and K), PEX-A and PEX-B flexible tubing, CPVC, PVC drain-waste-vent lines, and cast-iron main stacks.',
    category: 'Technical',
  },
  {
    id: 'faq-6',
    question: 'Are AquaFix plumbers licensed and insured?',
    answer:
      'Yes, in actual practice every technician would hold state/provincial master or journeyman plumbing licenses, and carry comprehensive general liability and workers’ compensation insurance. (Please note that AquaFix Plumbing itself is a fictional demo business template).',
    category: 'Safety',
  },
];
