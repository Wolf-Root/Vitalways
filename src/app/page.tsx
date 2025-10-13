import Box from "@mui/material/Box";

import Hero from "@/components/Sections/Hero";
import Mocktails from "@/components/Sections/Mocktails";
import About from "@/components/Sections/About";
import TheArt from "@/components/Sections/TheArt";
import Menu from "@/components/Sections/Menu";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <Box component="main" className="w-full overflow-hidden">
      <Hero />
      <Mocktails />
      <About />
      <TheArt />
      <Menu />
      <Footer />
    </Box>
  );
}
