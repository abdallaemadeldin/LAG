import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

// Add your local font
const myFont = localFont({
  src: [
    {
      path: "../public/fonts/Chewy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MonsterFriendFore.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-custom",
});

export const metadata: Metadata = {
  title: "Lag Agency",
  description:
    "Lag Agency is an events and marketing company dedicated to bridging brands and audiences. We fill the gap with innovative strategies and unforgettable experiences.",
  keywords: [
    "Lag Events",
    "Marketing Agency",
    "Event Planning",
    "Brand Activation",
    "Experiential Marketing",
    "Corporate Events",
    "Product Launches",
    "Creative Marketing",
    "Event Management",
    "We fill the gap",
    "Event Marketing",
    "Pop-up Events",
    "Trade Shows",
    "Conference Planning",
    "Digital Marketing",
    "Social Media Campaigns",
    "Brand Strategy",
    "Influencer Marketing",
    "Promotional Events",
    "Guerrilla Marketing",
    "Team Building Events",
    "B2B Marketing Events",
    "Event Production",
    "Event Branding",
    "Hybrid Events",
    "Live Events",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body className={`${myFont.variable} font-custom`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
