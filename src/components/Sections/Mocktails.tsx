"use client";

// Nextjs
import Image from "next/image";

// GSAP
import { gsap, useGSAP } from "@/lib/gsap";

// MUI Core Components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";

// Constants
import { popularDrinks, topRatedDrinks } from "@/constants";

export default function Mocktails() {
  // GSAP Animtaion
  useGSAP(() => {
    const listItems = gsap.utils.toArray<HTMLElement>("#Mocktails .list > div");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#Mocktails",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        defaults: { duration: 1.2, ease: "power3.out" },
      })
      .from(listItems, { opacity: 0, xPercent: (i) => (i % 2 === 0 ? -100 : 100) })
      .from("#Mocktails .left-leaf", { xPercent: -50, yPercent: 50 }, "-=0.5")
      .from("#Mocktails .right-leaf", { xPercent: 50, yPercent: 50 }, "<");
  }, []);

  return (
    <Box component="section" id="Mocktails">
      {/*  Decorative Leaves  */}
      <Image src="/images/cocktail-left-leaf.webp" alt="" className="left-leaf" width={294} height={332} />
      <Image src="/images/cocktail-right-leaf.webp" alt="" className="right-leaf" width={315} height={332} />

      {/* Content */}
      <Container maxWidth="xl" className="list">
        {/* popular List */}
        <Box>
          <Typography component="h2">Most Popular Mocktails:</Typography>

          <List>
            {popularDrinks.map(({ name, country, detail, price }) => (
              <ListItem key={name}>
                <Stack direction="column">
                  <Typography component="h3">{name}</Typography>
                  <Typography>
                    {country} | {detail}
                  </Typography>
                </Stack>
                <Typography component="span">- {price}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Loved  List*/}
        <Box className="pb-24 md:pb-0">
          <Typography component="h2">Most Loved mocktails:</Typography>

          <List>
            {topRatedDrinks.map(({ name, country, detail, price }) => (
              <ListItem key={name}>
                <Stack direction="column">
                  <Typography component="h3">{name}</Typography>
                  <Typography>
                    {country} | {detail}
                  </Typography>
                </Stack>
                <Typography component="span">- {price}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
}
