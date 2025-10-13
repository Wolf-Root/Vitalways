import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "@/theme/theme";

export const metadata: Metadata = {
  title: "Vitalways",
  description:
    "Discover Vitalways: Premium non-alcoholic beverages. Explore sophisticated mocktail recipes and zero-proof drinks for a vibrant, healthy lifestyle. Indulge in luxury without the alcohol.",
  authors: { name: "Wolf Root", url: "https://github.com/Wolf-Root" },

  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/favicon/site.webmanifest",

  // Open Graph
  openGraph: {
    title: "Vitalways: Zero-Proof Luxury Mocktails & Recipes",
    description:
      "Explore Vitalways' collection of gourmet, non-alcoholic beverages. Find your perfect sophisticated, guilt-free drink for any occasion.",
    url: "https://Vitalways.vercel.app/",
    siteName: "Vitalways",
    images: [
      {
        url: "https://Vitalways.vercel.app/Preview/Open-Graph-Image.jpg",
        width: 1200,
        height: 630,
        alt: "Vitalways Preview",
      },
    ],
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Vitalways: Luxury Non-Alcoholic Drinks",
    description: "Your source for sophisticated, zero-proof refreshments. Gourmet mocktails designed for a vibrant life.",
    images: ["https://Vitalways.vercel.app/Preview/Twitter-Card-Image.jpg"],
    creator: "@wolf_R00T",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={Theme}>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
