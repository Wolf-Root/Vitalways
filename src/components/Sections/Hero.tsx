"use client";

// React
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

// Nextjs
import Image from "next/image";

// GSAP
import { useGSAP, gsap, SplitText } from "@/lib/gsap";

// MUI Core Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

export default function Hero() {
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // GSAP Animtaion
  useGSAP(() => {
    const titleSplit = new SplitText("#Hero h1", { type: "chars", charsClass: "heroTitle", autoSplit: true }).chars;
    const subtitle1Lines = new SplitText("#Hero .subtitle1", { type: "lines" }).lines;
    const subtitle2Lines = new SplitText("#Hero .subtitle2", { type: "lines" }).lines;
    const allParagraphLines = [...subtitle1Lines, ...subtitle2Lines];

    gsap.set("#Hero h1, #Hero .subtitle1, #Hero .subtitle2", { visibility: "visible" });

    // Title & Paragraph Timeline
    gsap
      .timeline({
        defaults: {
          yPercent: 100,
          opacity: 0,
          duration: 1.5,
          stagger: 0.06,
          ease: "expo.out",
          rotationX: -100,
          force3D: true,
          transformOrigin: "50% 50% -160px",
        },
      })
      .from(titleSplit, {}, 0.1)
      .from(allParagraphLines, { yPercent: 50 }, "-=1.2");

    // Lefts & Arrow Timeline
    gsap
      .timeline({
        scrollTrigger: { trigger: "#Hero", start: "top top", end: "bottom top", scrub: true },
        defaults: { duration: 1, ease: "power1.inOut" },
      })
      .to("#Hero .left-leaf", { yPercent: 50 }, 0)
      .to("#Hero .arrow", { yPercent: 100 }, 0)
      .to("#Hero .right-leaf", { yPercent: -50 }, 0);

    // Video Animation Timeline
    const startValue = isMobile ? "top center" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const video = videoRef.current;
    if (!video) return;

    gsap
      .timeline({
        scrollTrigger: { trigger: video, start: startValue, end: endValue, scrub: true, pin: true },
      })
      .to(video, { currentTime: video.duration });
  });

  return (
    <>
      <Box component="section" id="Hero">
        {/* Title */}
        <Typography component="h1" style={{ visibility: "hidden" }}>
          REVIVAL
        </Typography>

        {/*  Decorative Leaves  */}
        <Image src="/images/hero-left-leaf.webp" alt="" className="left-leaf" width={266} height={461} />
        <Image src="/images/hero-right-leaf.webp" alt="" className="right-leaf" width={228} height={478} />

        {/* Arrow */}
        <Image src="/images/arrow.webp" alt="" className="arrow" width={24} height={152} />

        {/* Content */}
        <Container maxWidth="xl" className="body">
          <Box className="content">
            <Box className="space-y-5 hidden md:block">
              <Typography className="subtitle1" style={{ visibility: "hidden" }}>
                Cool. Crisp. Crafted.
              </Typography>
              <Typography
                component="h2"
                className="!font-modern-negra !text-6xl !text-yellow max-w-xl subtitle1"
                style={{ visibility: "hidden" }}
              >
                Luxury Zero-Proof Mocktails <br /> The Revival of Taste
              </Typography>
            </Box>

            <Box className="!space-y-5 !text-lg w-full md:max-w-xs lg:max-w-2xs">
              <Typography className="!text-center md:!text-left !font-medium subtitle2" style={{ visibility: "hidden" }}>
                The new standard for luxury: Every handcrafted mocktail is a vibrant blend of zero-proof spirits and premium
                botanicals, designed for sophisticated pleasure without compromise.
              </Typography>

              <Link href="#Mocktails" underline="always" className="subtitle2" style={{ visibility: "hidden" }}>
                View Mocktails
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Video */}
      <Box className="video inset-0">
        <video src="/videos/Hero.mp4" ref={videoRef} muted playsInline preload="auto" />
      </Box>
    </>
  );
}
