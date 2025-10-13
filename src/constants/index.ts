// Material UI Icon
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const drawerWidth: number = 240;

export const navLinks: { id: string; title: string }[] = [
  { id: "Hero", title: "Home" },
  { id: "Mocktails", title: "Mocktails" },
  { id: "About", title: "About Us" },
  { id: "TheArt", title: "The Art" },
  { id: "Menu", title: "Menu" },
  { id: "Contact", title: "Contact" },
];

export const popularDrinks: { name: string; country: string; detail: string; price: string }[] = [
  { name: "Sunrise Citrus Punch", country: "BR", detail: "Sparkling", price: "$10" },
  { name: "Velvet Berry Elixir", country: "US", detail: "Infused", price: "$12" },
  { name: "Ginger Pear Fizz", country: "CA", detail: "750 ml", price: "$8" },
  { name: "Irish Cream Cold Brew", country: "IE", detail: "600 ml", price: "$9" },
];

export const topRatedDrinks: { name: string; country: string; detail: string; price: string }[] = [
  { name: "Tropical Bloom", country: "US", detail: "House Special", price: "$10" },
  { name: "Passionfruit Mint", country: "US", detail: "Premium Mix", price: "$18" },
  { name: "Citrus Glow", country: "CA", detail: "750 ml Bottle", price: "$12" },
  { name: "Lavender Fizz", country: "IE", detail: "600 ml Bottle", price: "$14" },
];

export const profiles: { id: string; alt: string; img: string }[] = [
  { id: "p1", alt: "Young man with curly hair", img: "/images/profile1.webp" },
  { id: "p2", alt: "Smiling man with beard", img: "/images/profile2.webp" },
  { id: "p3", alt: "Woman with dark hair", img: "/images/profile3.webp" },
  { id: "p4", alt: "+12k badge", img: "/images/profile4.webp" },
];

export const features: { crafted: string[]; ingredients: string[]; perfection: string[] } = {
  crafted: ["Perfectly balanced blends", "Garnished to perfection", "Ice-cold every time", "Expertly shaken & stirred"],
  ingredients: ["Handpicked ingredients", "Signature techniques", "Craftsmanship in Every Sip", "Freshly Muddled Botanicals"],
  perfection: ["Perfectly balanced natural blends", "Garnished to perfection", "Ice-cold every time", "Masterfully Prepared"],
};

export const slides: { id: number; name: string; img: { src: string; alt: string }; title: string; desc: string }[] = [
  {
    id: 1,
    name: "Classic Virgin Mojito",
    img: {
      src: "/images/ClassicVirginMojito.webp",
      alt: "Refreshing classic Virgin Mojito with fresh mint, lime slices, and ice, surrounded by whole limes.",
    },
    title: "The Timeless Art of Pure Refreshment",
    desc: "Our signature classic: a vibrant blend of hand-muddled mint and zesty lime. It's a clean, purely non-alcoholic recipe that perfectly captures the **eternal spirit of summer** in every ice-cold sip.",
  },
  {
    id: 2,
    name: "Raspberry Fizz",
    img: {
      src: "/images/RaspberryFizz.webp",
      alt: "Thick, pink Raspberry Fizz smoothie in a highly textured glass, garnished with fresh raspberries, lime, and a striped straw.",
    },
    title: "Velvety Smooth, Intensely Zesty",
    desc: "A luxurious, thick mocktail balancing sweet raspberries and a tangy hint of lime. Served in an elegant, textured glass, this **velvety fusion** is a crisp and intensely refreshing treat for the senses.",
  },
  {
    id: 3,
    name: "Mango Lassi",
    img: {
      src: "/images/MangoLassi.webp",
      alt: "A thick, bright yellow Mango Lassi served in a hurricane glass, garnished dramatically with fanned mango slices and a mint leaf.",
    },
    title: "Sophisticated Tropical Creaminess",
    desc: "A globally famous, satisfyingly thick and creamy delight. Crafted with fresh, ripe mango, premium yogurt, and a touch of spice. This **elegant, golden blend** is the ultimate sophisticated escape.",
  },
  {
    id: 4,
    name: "Hibiscus Agua Fresca",
    img: {
      src: "/images/HibiscusAguaFresca.webp",
      alt: "Tall glass of deep ruby red Hibiscus Agua Fresca with ice, dramatically decorated with large, rich red hibiscus flowers.",
    },
    title: "Vibrant Color, Authentic Tartness",
    desc: "Each vibrant, naturally **crimson sip** is an authentic Mexican infusion of tart hibiscus flowers and a hint of fresh lime. Poured with passion for a uniquely light, crisp, and refreshing experience.",
  },
];

export const storeInfo: { address: string; contact: { phone: string; email: string } } = {
  address: "25 Salah ad-Din al-Ayyubi Street, Jerusalem, Palestine",
  contact: {
    phone: "(555) 987-6543",
    email: "youssfoficil@gmail.com",
  },
};

export const openingHours: { day: string; time: string }[] = [
  { day: "Mon-Thu", time: "11:00am - 12am" },
  { day: "Fri", time: "11:00am - 2am" },
  { day: "Sat", time: "9:00am - 2am" },
  { day: "Sun", time: "9:00am - 1am" },
];

export const socialLinks = [
  { name: "Github", href: "https://github.com/Wolf-Root", icon: GitHubIcon },
  { name: "Instagram", href: "https://www.instagram.com/wolf_r00t", icon: InstagramIcon },
  { name: "X", href: "https://x.com/wolf_R00T", icon: XIcon },
  { name: "Linkedin", href: "https://www.linkedin.com/in/youssef0110", icon: LinkedInIcon },
];
