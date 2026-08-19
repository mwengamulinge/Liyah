import { StudioInfo, ServiceItem, Testimonial, GalleryItem } from '../types';

export const STUDIO_INFO: StudioInfo = {
  name: "Hair by Liyah's Extension",
  owner: "Aaliyah (Liyah) Bealer",
  tagline: "Securing Beauty, One Braid At A Time. 💎",
  address: "400 East Wintergreen Road",
  cityStateZip: "DeSoto, TX 75115",
  phone: "903-380-8900",
  email: "aaliyahbealer00@gmail.com",
  bookingUrl: "https://www.liyahsextension.com/s/appointments",
  socials: {
    instagram: "https://instagram.com/liyahshadiamond",
    facebook: "https://facebook.com/LiyahShadiamond",
    tiktok: "https://tiktok.com/@liyahshadiamond",
  },
  hours: [
    { day: "Monday", time: "6:00 am – 10:00 pm" },
    { day: "Tuesday", time: "6:00 am – 10:00 pm" },
    { day: "Wednesday", time: "6:00 am – 10:00 pm" },
    { day: "Thursday", time: "6:00 am – 10:00 pm" },
    { day: "Friday", time: "6:00 am – 11:00 pm" },
    { day: "Saturday", time: "6:00 am – 11:00 pm" },
    { day: "Sunday", time: "6:00 am – 6:00 pm" },
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "knotless-braids",
    name: "Knotless Braids",
    category: "knotless",
    tagline: "Lightweight, pain-free & seamless root finish",
    description: "Our signature tension-free knotless braids look natural directly from the scalp. Ultra-gentle on delicate edges, featherlight feel, and long-lasting elegance.",
    image: "/knotless.png",
    hairIncluded: true,
    startingPrice: 130,
    saleStartingPrice: 95,
    popular: true,
    badge: "Bestseller",
    sizes: [
      { size: "Small", regularPrice: 275, salePrice: 185, estimatedHours: "6.5 - 7.5 hrs", recommendedFor: "Maximum fullness, long-lasting 8+ weeks" },
      { size: "Smedium", regularPrice: 260, salePrice: 170, estimatedHours: "5.5 - 6.5 hrs", recommendedFor: "The most requested size - perfect balance" },
      { size: "Medium", regularPrice: 145, salePrice: 115, estimatedHours: "4 - 5 hrs", recommendedFor: "Classic clean everyday look" },
      { size: "Large", regularPrice: 130, salePrice: 95, estimatedHours: "3 - 3.5 hrs", recommendedFor: "Quick, bold, statement styling" },
    ]
  },
  {
    id: "boho-knotless",
    name: "Boho Knotless Braids",
    category: "boho",
    tagline: "Goddess vibe with luxurious curls throughout",
    description: "Tension-free knotless braids infused with voluminous, silky curls woven seamlessly throughout the length. Flirty, romantic, and effortlessly glamorous.",
    image: "https://images.unsplash.com/photo-1584297091622-af8e5fd184c8?auto=format&fit=crop&w=800&q=80",
    hairIncluded: true,
    startingPrice: 155,
    saleStartingPrice: 110,
    popular: true,
    badge: "Trending Style",
    sizes: [
      { size: "Small", regularPrice: 300, salePrice: 210, estimatedHours: "7 - 8 hrs", recommendedFor: "Show-stopping goddess fullness" },
      { size: "Smedium", regularPrice: 295, salePrice: 195, estimatedHours: "6 - 7 hrs", recommendedFor: "Rich curls with refined partings" },
      { size: "Medium", regularPrice: 170, salePrice: 135, estimatedHours: "4.5 - 5.5 hrs", recommendedFor: "Ideal everyday boho glam" },
      { size: "Large", regularPrice: 155, salePrice: 110, estimatedHours: "3.5 - 4.5 hrs", recommendedFor: "Chunky braids with soft tumbling curls" },
    ]
  },
  {
    id: "knotless-bobs",
    name: "Knotless Bobs",
    category: "bobs",
    tagline: "Chic shoulder & collarbone grazing perfection",
    description: "Sleek, modern bob-length knotless braids customized with burnt, sealed, or curled ends. Lightweight, framing your face beautifully for business or vacation.",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=800&q=80",
    hairIncluded: true,
    startingPrice: 155,
    saleStartingPrice: 120,
    sizes: [
      { size: "Small", regularPrice: 175, salePrice: 135, estimatedHours: "5 - 6 hrs", recommendedFor: "Dense, highly defined bob silhouette" },
      { size: "Smedium", regularPrice: 160, salePrice: 125, estimatedHours: "4 - 5 hrs", recommendedFor: "Structured chic everyday bob" },
      { size: "Medium", regularPrice: 155, salePrice: 120, estimatedHours: "3.5 - 4 hrs", recommendedFor: "Fast styling with gorgeous movement" },
    ]
  },
  {
    id: "boho-bobs",
    name: "Boho Bobs",
    category: "bobs",
    tagline: "Playful, textured bob infused with dreamy curls",
    description: "The ultimate hot-girl summer and autumn style! Shoulder-length knotless braids paired with soft wavy tendrils that bounce and turn heads.",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
    hairIncluded: true,
    startingPrice: 150,
    saleStartingPrice: 115,
    badge: "Hot Style",
    sizes: [
      { size: "Small", regularPrice: 180, salePrice: 145, estimatedHours: "5 - 6 hrs", recommendedFor: "Maximum curl density & definition" },
      { size: "Smedium", regularPrice: 165, salePrice: 130, estimatedHours: "4.5 - 5 hrs", recommendedFor: "Fluffy, natural-looking curls" },
      { size: "Medium", regularPrice: 150, salePrice: 115, estimatedHours: "3.5 - 4 hrs", recommendedFor: "Effortless lightweight bob with volume" },
    ]
  },
  {
    id: "scalp-stitch-braids",
    name: "Scalp / Stitch Braids",
    category: "stitch",
    tagline: "Crisp laser-clean partings & custom freestyles",
    description: "Razor-sharp stitch braid rows and artistic scalp designs crafted with precision. Includes creative curved patterns, zig-zags, and custom freestyles.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    hairIncluded: true,
    startingPrice: 75,
    saleStartingPrice: 75,
    priceNote: "Starting at $75+ (Freestyles Included!)",
    badge: "Freestyles Included",
    descriptionExtra: "Price adjusts depending on number of stitch lines (2-12+ braids) and custom freestyle complexity."
  },
  {
    id: "kids-styles",
    name: "Kids Braiding Styles",
    category: "kids",
    tagline: "Gentle, tension-safe styles for kids & teens",
    description: "Tender-headed approved! Protective styling crafted specifically to nurture growing hair, preserve edges, and keep little ones looking fresh for school and events.",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    hairIncluded: true,
    startingPrice: 85,
    saleStartingPrice: 85,
    priceNote: "$85 – $100 depending on style & beads add-on",
    badge: "Gentle Care",
  },
  {
    id: "add-ons-travel",
    name: "Custom Add-Ons & Mobile Travel",
    category: "addons",
    tagline: "Personalized lengths, curl upgrades & VIP mobile service",
    description: "Upgrade your appointment with extra waist/butt/thigh lengths, 100% human raw curl bundles for Boho styles, or book Liyah to travel directly to your location.",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80",
    hairIncluded: false,
    startingPrice: 25,
    priceNote: "Length add-ons ($30-$80) | Raw Curls (+$60) | DFW Travel (Fee Varies)",
  }
];

export const GALLERY_LOOKBOOK: GalleryItem[] = [
  {
    id: "g1",
    title: "Smedium Boho Knotless",
    category: "boho",
    style: "Boho Knotless with Human Hair Curls",
    duration: "6 hrs",
    image: "https://images.unsplash.com/photo-1584297091622-af8e5fd184c8?auto=format&fit=crop&w=1000&q=80",
    caption: "Seamless waist length with honey-brown highlighted curls. Zero scalp tension.",
    tag: "Trending"
  },
  {
    id: "g2",
    title: "Crisp Stitch Braids Freestyle",
    category: "stitch",
    style: "6-Feed-in Stitch Braids with Curved Heart Design",
    duration: "2.5 hrs",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    caption: "Sharp geometry, clean parts and perfectly slicked baby hairs.",
    tag: "Freestyle"
  },
  {
    id: "g3",
    title: "Small Knotless Waist-Length",
    category: "knotless",
    style: "Small Knotless Braids in Jet Black 1B",
    duration: "7 hrs",
    image: "https://images.unsplash.com/photo-1646617747609-45b466ace9a6?auto=format&fit=crop&w=1000&q=80",
    caption: "Over 8 weeks of durability with flexible root movement right out of the chair.",
    tag: "Bestseller"
  },
  {
    id: "g4",
    title: "Chic Boho Bob with Bouncy Ends",
    category: "bobs",
    style: "Smedium Boho Bob with Loose Curls",
    duration: "4.5 hrs",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=80",
    caption: "Shoulder-length lightweight perfection for summer and vacations.",
    tag: "Bob Cut"
  },
  {
    id: "g5",
    title: "Medium Knotless Clean Grid",
    category: "knotless",
    style: "Medium Knotless Braids with Dipped Ends",
    duration: "4.5 hrs",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=1000&q=80",
    caption: "Symmetrical square parts with silky tucked ends.",
    tag: "Classic"
  },
  {
    id: "g6",
    title: "Kids Beaded Protective Braids",
    category: "kids",
    style: "Kids Braided Crown with Clear & Pink Beads",
    duration: "2 hrs",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80",
    caption: "Gentle on young scalps with secure beaded accessories.",
    tag: "Kids Care"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Tasha M.",
    location: "DeSoto, TX",
    rating: 5,
    service: "Smedium Boho Knotless",
    date: "August 2026",
    comment: "Liyah is hands down the best braider in DeSoto! Zero tension on my edges, she finished right on time, and the boho curls stayed juicy and soft for weeks without matting. 10/10 experience!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    verified: true
  },
  {
    id: "t2",
    name: "Keisha R.",
    location: "Cedar Hill, TX",
    rating: 5,
    service: "Small Knotless Braids",
    date: "August 2026",
    comment: "I caught the 72-Hour Flash Sale and saved almost $90! Her parts are surgical, the salon studio is super clean and comfortable, and my head didn't hurt even for one second that night. Will never go anywhere else.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    verified: true
  },
  {
    id: "t3",
    name: "Brianna D.",
    location: "Dallas, TX",
    rating: 5,
    service: "Stitch Braids with Freestyle",
    date: "July 2026",
    comment: "Booked her mobile travel service for an early morning 7 AM slot. She showed up on time with all hair included, did the cleanest stitch parts I’ve ever seen, and was so professional!",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    verified: true
  },
  {
    id: "t4",
    name: "Jasmine W.",
    location: "Duncanville, TX",
    rating: 5,
    service: "Kids Braids with Beads",
    date: "August 2026",
    comment: "My 7-year-old is super tender headed and usually cries with other braiders. Liyah was so gentle and patient, had cartoons on, and her hair came out gorgeous for back-to-school!",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80",
    verified: true
  }
];

export const STUDIO_POLICIES = [
  {
    title: "Deposit Requirement",
    icon: "Lock",
    highlight: "Deposit Required to Secure Slot",
    text: "A non-refundable deposit is required at the time of booking to secure your requested appointment date and time. Your deposit goes directly toward your total service balance on the day of your appointment.",
    rule: "NO REFUNDS ON DEPOSITS. DEPOSITS GO TOWARD YOUR TOTAL."
  },
  {
    title: "Hair Included on Qualifying Styles",
    icon: "Sparkles",
    highlight: "Pre-Stretched Braiding Hair Provided",
    text: "We provide high-quality pre-stretched hypoallergenic braiding hair in standard natural colors (1, 1B, 2, 4) for qualifying styles. Please specify your hair color during booking. Specialty colors or 100% raw human hair curl blends can be added during checkout.",
    rule: "Hair Included on Qualifying Styles"
  },
  {
    title: "DeSoto Studio & Travel Available",
    icon: "MapPin",
    highlight: "Studio in DeSoto, TX | Mobile Visits Available",
    text: "Our studio is located at 400 East Wintergreen Road, DeSoto, TX 75115. We also offer mobile house-call services throughout DeSoto, Cedar Hill, Duncanville, Dallas, and surrounding DFW areas for an additional travel fee.",
    rule: "Will Travel For A Fee"
  },
  {
    title: "Preparation & Cleanliness",
    icon: "CheckCircle2",
    highlight: "Clean, Blown-Out Hair",
    text: "Please arrive with your hair freshly washed, thoroughly detangled, and blown out straight from root to tip with NO heavy oils or waxes applied (light heat protectant only). We will oil and moisturize your scalp during the service.",
    rule: "Proper prep guarantees the cleanest parts and maximum style longevity."
  },
  {
    title: "Flexible Hours & Punctuality",
    icon: "Clock",
    highlight: "Early 6 AM to Late Evening Slots",
    text: "We operate with flexible schedules starting as early as 6:00 AM up to 10:00 PM / 11:00 PM. Please arrive on time. A 15-minute grace period is provided. After 15 minutes, a late fee applies to keep downstream appointments on track.",
    rule: "Early bird 6:00 AM appointments available every single day."
  },
  {
    title: "72-Hour Flash Sale Terms",
    icon: "Flame",
    highlight: "August Flash Sale Pricing",
    text: "Flash sale promotional discounts apply only to appointments booked during the active promotional window with confirmed deposit. Slots are strictly limited and fill quickly on a first-come, first-served basis.",
    rule: "Slots Will Fill Fast - Secure Your Spot Today!"
  }
];
