"use client";

// Nextjs
import Image from "next/image";

// GSAP
import { gsap, useGSAP, SplitText } from "@/lib/gsap";

// Constants
import { features, profiles } from "@/constants";

// MUI Core Components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import AvatarGroup from "@mui/material/AvatarGroup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

// MUI Icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function About() {
  // GSAP Animtaion
  useGSAP(() => {
    const titleSplit = new SplitText("#About h2", { type: "words", aria: "hidden" });
    const subtitleSplit = new SplitText("#About .subtitle", { type: "words", aria: "hidden" });

    gsap
      .timeline({
        scrollTrigger: { trigger: "#About", start: "top center" },
        defaults: { duration: 0.8, opacity: 0, ease: "sine.out", stagger: 0.05 },
      })
      .from("#About .badge", { xPercent: -100 })
      .from("#About .reviews", { xPercent: 100 }, "<")

      .from(titleSplit.words, {}, "-=0.4")
      .from(subtitleSplit.words, {}, "-=0.4");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#About .top-grid, #About .bottom-grid",
          start: "top center",
          end: "bottom bottom",
        },
        defaults: { duration: 1, opacity: 0, ease: "power2.out", stagger: 0.2 },
      })
      .from("#About .top-grid div, #About .bottom-grid div", {});
  }, []);

  return (
    <Box component="section" id="About">
      <Container maxWidth="xl">
        <Box className="mb-16">
          <Box className="flex flex-col lg:flex-row justify-between gap-5">
            {/* Left Content */}
            <Box className="md:flex-2">
              <Typography className="badge">Best Mocktails</Typography>

              <Typography component="h2">
                Where every element <span className="text-yellow">matters</span> — from the fresh press to the final touch
              </Typography>
            </Box>

            {/* Right Content */}
            <Box className="!space-y-5 md:flex-1 flex flex-col justify-between">
              <Typography className="!text-lg subtitle">
                Every handcrafted sip we create is a reflection of our obsession with detail — from the first press of fresh fruit
                to the balanced, final touch. That care is what turns a simple drink into something truly memorable.
              </Typography>

              {/* Reviews */}
              <Box className="flex flex-col md:flex-row justify-between items-center gap-2 reviews">
                <Stack spacing={1} className="flex-1 items-center lg:items-start">
                  <Rating name="Ratings" value={5} readOnly className="!text-white-100" />

                  <Typography className="!text-xl md:!text-3xl !font-bold">
                    <span className="text-yellow font-bold text-5xl">4.5</span>/5
                  </Typography>

                  <Typography className="!text-sm text-white-100">More than +12000 customers</Typography>
                </Stack>

                <div className="w-full md:w-[1px] bg-white/50 h-[1px] md:h-full" />

                <AvatarGroup className="relative flex-1 noisy w-full md:w-fit p-5 rounded-full flex-center">
                  {profiles.map(({ id, alt, img }) => (
                    <Avatar key={id} alt={alt} src={img} className="!w-12 !h-auto" />
                  ))}
                </AvatarGroup>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Top Images */}
        <Box className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 gap-5 mb-5 top-grid">
          <Stack className="md:col-span-3">
            <Box className="noisy opacity-70" />
            <Image
              src="/images/About1.webp"
              alt="Barista meticulously garnishing a fresh kiwi mocktail with tweezers."
              width={810}
              height={539}
            />
          </Stack>

          <Card className="md:col-span-3 card h-fit xl:h-full">
            <Box className="noisy opacity-70" />
            <CardContent className="!p-5 md:!p-6 2xl:!p-10">
              <Typography component="h3" gutterBottom>
                Crafted to Impress
              </Typography>

              <Divider className="bg-white" />

              <List className="!text-white">
                {features.crafted.map((feature) => (
                  <ListItem key={feature} disableGutters className="flex items-center gap-x-2.5">
                    <CheckCircleIcon />
                    <Typography className="!text-lg">{feature}</Typography>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          <Stack className="md:col-span-6">
            <Box className="noisy opacity-70" />
            <Image
              src="/images/About2.webp"
              alt="Group of friends raising glasses for a celebratory toast with vibrant mocktails."
              width={641}
              height={359}
            />
          </Stack>
        </Box>

        {/* Bottom Images */}
        <Box className="grid grid-cols-1 md:grid-cols-12 gap-5 bottom-grid">
          <Stack className="md:col-span-8">
            <Box className="noisy opacity-70" />
            <Image
              src="/images/About3.webp"
              alt="Five tall mocktails lined up, featuring lemon, cucumber, orange, and rosemary garnishes."
              width={500}
              height={500}
            />
          </Stack>

          <Stack className="md:col-span-4">
            <Box className="noisy opacity-70" />
            <Image
              src="/images/About4.webp"
              alt="Close-up of a refreshing iced mocktail garnished with a bright orange slice and fresh pink flowers."
              width={539}
              height={320}
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
