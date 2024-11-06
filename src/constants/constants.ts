import { iHeroBanner } from "@/types"

export const heroBanner: iHeroBanner[] = [
  {
    heading: [
      { text: "Clean", className: "text-secondary-color sm:text-4xl lg:text-5xl" },
      { text: "Spaces", className: "" },
      { text: "Create", className: "text-secondary-color" },
      { text: "Fresh", className: "" },
      { text: "Starts", className: "text-secondary-color sm:text-4xl lg:text-5xl" },
    ],
    description: "Expert cleaning services to keep your home and workspace spotless and welcoming.",
    // image: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/revslider/Home/home_bg_01.jpg",
    image: "/image-01.jpg",
  },
  {
    heading: [
      { text: "Trust", className: "text-secondary-color" },
      { text: "Our", className: "" },
      { text: "Team", className: "text-secondary-color sm:text-4xl lg:text-5xl" },
      { text: "for", className: "" },
      { text: "Immaculate", className: "text-secondary-color" },
      { text: "Results", className: "" },
    ],
    description: "Our experienced cleaners ensure every corner shines, leaving you with peace of mind.",
    image: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/revslider/Home/slider_img_02.jpg",
  },
  {
    heading: [
      { text: "Quality", className: "text-secondary-color" },
      { text: "Cleaning", className: "" },
      { text: "Done", className: "" },
      { text: "Right,", className: "text-secondary-color" },
      { text: "Every Time", className: "" },
    ],
    description: "Reliable and thorough cleaning services tailored to meet your unique needs.",
    image: "https://livewp.site/wp/md/clengo/wp-content/uploads/sites/61/revslider/Home/slider_img_03.jpg",
  }
]
export const cleaning_categories: { key: string, value: string }[] = [
  { key: 'residential', value: 'Residential Cleaning' },
  { key: 'commercial', value: 'Commercial Cleaning' },
  { key: 'specialized', value: 'Specialized Cleaning' },
  { key: 'eco_friendly', value: 'Eco-Friendly Cleaning' },
  { key: 'emergency', value: 'Emergency Cleaning Services' },
  { key: 'real_estate', value: 'Real Estate & Property Management Cleaning' },
  { key: 'post_construction', value: 'Post-Construction Cleaning' },
  { key: 'window', value: 'Window Cleaning' },
  { key: 'carpet_upholstery', value: 'Carpet & Upholstery Cleaning' },
  { key: 'floor_maintenance', value: 'Floor Care & Maintenance' },
  { key: 'move_in_out', value: 'Move-In/Move-Out Cleaning' },
  { key: 'deep_cleaning', value: 'Deep Cleaning' },
  { key: 'routine', value: 'Routine Cleaning' },
  { key: 'allergy_safe', value: 'Allergy-Safe Cleaning' },
  { key: 'pre_sale', value: 'Pre-Sale Cleaning' }
];
