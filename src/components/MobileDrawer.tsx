// Nextjs
import Image from "next/image";

// MUI Core Components
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

// Types
interface MobileDrawerTypes {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  drawerWidth: number;
  navLinks: { id: string; title: string }[];
  activeId: string;
}

export default function MobileDrawer({ mobileOpen, handleDrawerToggle, drawerWidth, navLinks, activeId }: MobileDrawerTypes) {
  return (
    <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }} anchor="right">
      <Box
        component="nav"
        aria-label="Mobaile Navigation"
        onClick={handleDrawerToggle}
        width={drawerWidth}
        className="bg-black/90 text-white h-full"
      >
        {/* Logo */}
        <Link href="#" underline="none" className="flex-center gap-x-2 py-2">
          <Image src="/images/logo.png" alt="Vitalways logo" width={40} height={40} priority />
          <Typography variant="h6" component="span">
            Vitalways
          </Typography>
        </Link>

        <Divider />

        {/* Nav Links */}
        <List disablePadding>
          {navLinks.map(({ id, title }) => (
            <ListItem key={id} disablePadding sx={{ borderBottom: "1px solid", borderColor: "divider" }}>
              <ListItemButton
                className="!text-center"
                href={`#${id}`}
                selected={id === activeId}
                aria-current={id === activeId ? "page" : undefined}
              >
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
