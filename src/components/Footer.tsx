"use client";

// Nextjs
import Image from "next/image";

// GSAP
import { gsap, useGSAP } from "@/lib/gsap";

// Constants
import { openingHours, socialLinks, storeInfo } from "@/constants";

// MUI Core Components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

export default function Footer() {
  // GSAP Animtaion
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: { trigger: "#Contact", start: "top center" },
        defaults: {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
          force3D: true,
        },
      })

      .from("#Contact .right-leaf", { opacity: 1, xPercent: 100, yPercent: 100 }, "<")
      .from("#Contact .drink-img", { scale: 0.8, xPercent: 50 }, "<")
      .from("#Contact .left-leaf", { opacity: 1, xPercent: -50 }, "<")

      .from("#Contact h2", { yPercent: 100, ease: "expo.out", rotationX: -100, transformOrigin: "50% 50% -160px" }, "-=0.5")
      .from("#Contact h3", { yPercent: 100, ease: "expo.out", rotationX: -100, transformOrigin: "50% 50% -160px" }, "-=0.5")
      .from("#Contact p", { yPercent: 50, ease: "expo.out" }, "-=0.5")
      .from("#Contact .Social", { yPercent: 100, ease: "back.out(1.7)" }, "-=0.5");
  }, []);

  return (
    <Box component="footer" id="Contact">
      {/*  Decorative Leaves  */}
      <Image src="/images/footer-left-leaf.webp" alt="" className="left-leaf" width={356} height={393} />
      <Image src="/images/footer-right-leaf.webp" alt="" className="right-leaf" width={308} height={319} />

      {/* Content */}
      <Container maxWidth="xl" className="py-28 md:py-16 flex flex-col justify-between gap-10">
        <Typography component="h2">Where to Find Us</Typography>

        <Stack spacing={1}>
          <Typography component="h3">Visit our store</Typography>
          <Typography>{storeInfo.address}</Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography component="h3">Contact us</Typography>
          <Typography>{storeInfo.contact.phone}</Typography>
          <Typography>{storeInfo.contact.email}</Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography component="h3">Open every day</Typography>
          {openingHours.map(({ day, time }) => (
            <Typography key={day}>
              {day} : {time}
            </Typography>
          ))}
        </Stack>

        <Stack direction="row" className="flex-center">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <IconButton key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} className="Social" size="large">
              <Icon className="!text-3xl md:!text-4xl" />
            </IconButton>
          ))}
        </Stack>
      </Container>

      <Image src="/images/footer-drinks.webp" alt="" className="drink-img" width={1277} height={1280} />
    </Box>
  );
}
