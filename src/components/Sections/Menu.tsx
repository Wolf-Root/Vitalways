"use client";

// React
import { useRef, useState } from "react";

// Nextjs
import Image from "next/image";

// GSAP
import { gsap, useGSAP } from "@/lib/gsap";

// Constants
import { slides } from "@/constants";

// MUI Core Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Menu() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const totalSlidersLists = slides.length;

  // Helper to normalize index
  const getIndex = (i: number) => (i + totalSlidersLists) % totalSlidersLists;

  const prevMocktail = slides[getIndex(currentIndex - 1)];
  const nextMocktail = slides[getIndex(currentIndex + 1)];
  const currentMocktail = slides[currentIndex];

  const goToSlide = (i: number) => setCurrentIndex(getIndex(i));

  // GSAP Animtaion
  useGSAP(() => {
    if (!contentRef.current) return;
    gsap
      .timeline({ defaults: { duration: 1, ease: "power1.inOut" } })
      .fromTo("#Menu #title", { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0 }, 0)
      .fromTo("#Menu .details h2", { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0 }, 0)
      .fromTo("#Menu .details p", { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0 }, 0)
      .fromTo("#Menu .mocktail , #Menu button span", { opacity: 0, xPercent: -100 }, { opacity: 1, xPercent: 0 }, 0);
  }, [currentIndex]);

  return (
    <Box component="section" id="Menu" aria-labelledby="menu-heading">
      {/*  Decorative Leaves  */}
      <Image src="/images/slider-left-leaf.webp" alt="" className="left-leaf" width={275} height={304} />
      <Image src="/images/slider-right-leaf.webp" alt="" className="right-leaf" width={241} height={355} />

      <Typography component="h2" id="menu-heading" className="!sr-only">
        Mocktail Menu
      </Typography>

      {/* Tabs Navigation */}
      <Box className="relative mb-0 md:mb-10 z-10">
        <Tabs
          component="nav"
          aria-label="Mocktail Navigation"
          value={currentIndex}
          onChange={(_, v) => setCurrentIndex(v)}
          textColor="inherit"
          centered
          TabIndicatorProps={{ sx: { display: "none" } }}
          sx={{
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
            },
            "& .MuiTab-root": {
              position: "relative",
              color: "white",
              textTransform: "none",
              fontSize: { xs: "1.1rem", md: "1.5rem" },
              fontWeight: 600,
              transition: "color 0.3s ease",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "100%",
                height: "3px",
                backgroundColor: "white",
                opacity: 0.3,
                transform: "scaleX(0.8)",
                transition: "all 0.3s ease",
                borderRadius: "2px",
              },
              "&.Mui-selected": {
                color: "secondary.main",
                "&::after": {
                  backgroundColor: "secondary.main",
                  opacity: 1,
                  transform: "scaleX(1)",
                },
              },
            },
          }}
        >
          {slides.map(({ id, name }) => (
            <Tab key={id} label={name} className="!w-fit !h-fit !capitalize !text-xl md:!text-3xl !font-modern-negra" />
          ))}
        </Tabs>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" className="flex flex-col justify-between items-center relative">
        {/* Image + Arrows */}
        <Box className="flex-center mt-0 md:mt-10">
          <Stack direction="row" className="items-center justify-between w-full absolute">
            <Button onClick={() => goToSlide(currentIndex - 1)} aria-label="Previous mocktail" color="secondary">
              <Typography component="span">{prevMocktail.name}</Typography>
              <Image
                src="/images/right-arrow.webp"
                alt="White arrow icon pointing left, used for previous item navigation in a slider or carousel."
                width={38}
                height={38}
                aria-hidden
              />
            </Button>

            <Button onClick={() => goToSlide(currentIndex + 1)} aria-label="Next mocktail" color="secondary">
              <Typography component="span">{nextMocktail.name}</Typography>
              <Image
                src="/images/left-arrow.webp"
                alt="White arrow icon pointing right, used for next item navigation in a slider or carousel."
                width={38}
                height={38}
                aria-hidden
              />
            </Button>
          </Stack>

          <Image
            src={currentMocktail.img.src}
            alt={currentMocktail.img.alt}
            className="mocktail object-contain h-[60vh] w-auto"
            width={1280}
            height={1280}
            sizes="(max-width: 768px) 80vw, 600px"
          />
        </Box>

        {/* Details */}
        <Box className="details">
          <Stack spacing={2} ref={contentRef}>
            <Typography>Recipe for:</Typography>
            <Typography id="title">{currentMocktail.name}</Typography>
          </Stack>

          <Stack spacing={2} className="md:max-w-md text-left">
            <Typography component="h2" className="!text-3xl md:!text-5xl !font-serif">
              {currentMocktail.title}
            </Typography>

            <Typography className="md:!text-lg !pe-5">{currentMocktail.desc}</Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
