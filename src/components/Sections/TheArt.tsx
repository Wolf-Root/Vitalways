"use client";

// Nextjs
import Image from "next/image";

// GSAP
import { gsap, useGSAP } from "@/lib/gsap";

// Constants
import { features } from "@/constants";

// MUI Core Components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";

// MUI Icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function TheArt() {
  // GSAP Animtaion
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#TheArt",
          start: "top top",
          end: "bottom center",
          scrub: 1.5,
          pin: true,
        },
        defaults: { ease: "power1.inOut", duration: 1 },
      })
      .to("#TheArt .will-fade, #TheArt h2", { autoAlpha: 0, stagger: 0.1, duration: 0.5 }, 0)
      .to("#TheArt .will-fade", { display: "none" })
      .to("#TheArt .masked-img", { scale: 1.3, maskPosition: "center", maskSize: "400%", duration: 2 })
      .to("#TheArt .masked-content", { opacity: 1, display: "block", duration: 1 });
  }, []);

  return (
    <Container id="TheArt" maxWidth="xl" component="section">
      {/* Title */}
      <Typography component="h2">The Art</Typography>

      {/* Image */}
      <Box className="mocktail-img">
        <Image
          src="/images/under-img.webp"
          alt="Mocktails"
          className="size-full object-contain masked-img"
          width={1920}
          height={1278}
        />
      </Box>

      {/* Masked Container */}
      <Box className="masked-container">
        <Typography component="h3" className="will-fade">
          Sip-Worthy Perfection
        </Typography>

        <Stack className="masked-content" style={{ display: "none" }}>
          <Typography component="h4">Made with Craft, Poured with Passion</Typography>
          <Typography>This isn&apos;t just a drink. It&apos;s a carefully crafted moment made just for you.</Typography>
        </Stack>
      </Box>

      {/* Lists */}
      <Box className="content-wrapper">
        {/* Left List */}
        <List className="will-fade">
          {features.ingredients.map((feature) => (
            <ListItem key={feature} disableGutters>
              <CheckCircleIcon />
              <Typography>{feature}</Typography>
            </ListItem>
          ))}
        </List>

        {/* Right List */}
        <List className="will-fade">
          {features.perfection.map((feature) => (
            <ListItem key={feature} disableGutters className="!justify-end md:!justify-start">
              <CheckCircleIcon />
              <Typography className="w-64 md:w-fit">{feature}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}
