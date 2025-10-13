"use client";

// React
import { useState } from "react";

// Nextjs
import Image from "next/image";

// GSAP
import { useGSAP, gsap, ScrollTrigger } from "@/lib/gsap";

// Hooks
import { useScrollSpy } from "@/hook/useScrollSpy";

// Constants
import { drawerWidth, navLinks } from "@/constants";

// MUI Core Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

// Components
import MobileDrawer from "./MobileDrawer";

export default function Header() {
  const activeId = useScrollSpy(navLinks.map(({ id }) => id));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Gsap Animation
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "header",
          start: "bottom top",
          end: "top bottom",
          scrub: true,
        },
        defaults: { duration: 1 },
      })
      .fromTo("header", { backgroundColor: "transparent" }, { backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)" });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  });

  return (
    <Box>
      <AppBar color="transparent" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#" underline="none" className="flex-center gap-x-2">
              <Image src="/images/logo.png" alt="Vitalways logo" width={50} height={50} priority />
              <Typography variant="h6" component="span">
                Vitalways
              </Typography>
            </Link>

            {/* DeskTop Navigation */}
            <Box component="nav" aria-label="Main Navigation" className="hidden md:flex">
              <List className="flex">
                {navLinks.map(({ id, title }) => (
                  <ListItem key={id}>
                    <Link
                      aria-current={id === activeId ? "page" : undefined}
                      href={`#${id} `}
                      underline="none"
                      className={`w-max !font-bold relative transition-colors ease-in-out duration-300 ${
                        activeId === id
                          ? "!text-yellow hover:!text-white-100 after:absolute after:left-0 after:-bottom-5 after:w-full after:h-0.5 after:bg-yellow"
                          : "!text-white-100 hover:!text-yellow"
                      }`}
                    >
                      {title}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Open Drawer Button */}
            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle} className="!block md:!hidden">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* <Mobile Drawer > */}
      <MobileDrawer {...{ mobileOpen, handleDrawerToggle, drawerWidth, navLinks, activeId }} />
    </Box>
  );
}
