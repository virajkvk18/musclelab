import type { Metadata } from "next";
import PreLoader from "@/components/PreLoader";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://musclelab.in"),
  title: "Muscle Lab Fitness | The Iron Sanctuary • Kai Greene Certified Equipment",
  description:
    "Jabalpur's premier luxury fitness sanctuary featuring biomechanically perfected, Kai Greene certified equipment. 1st Floor, Jain Heights, Wright Town, Jabalpur.",
  keywords: [
    "Muscle Lab Fitness",
    "Muscle Lab Gym Jabalpur",
    "Kai Greene Certified Gym",
    "Wright Town Gym",
    "Best Gym in Jabalpur",
    "Bodybuilding Jabalpur",
    "Biomechanics Gym Equipment",
  ],
  authors: [{ name: "Muscle Lab Fitness" }],
  openGraph: {
    title: "Muscle Lab Fitness | The Architecture of Elite Performance",
    description:
      "Official Kai Greene Certified Iron Sanctuary in Wright Town, Jabalpur. Experience peak biomechanical tension and high-performance athletic training.",
    siteName: "Muscle Lab Fitness",
    images: [
      {
        url: "/assets/logo.png",
        width: 1000,
        height: 1000,
        alt: "Muscle Lab Fitness Official Badge",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Michroma&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Space+Grotesk:wght@300;400;500;600;700&family=Syncopate:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#121214] text-slate-100 antialiased selection:bg-[#c5a059] selection:text-[#121214] overflow-x-hidden">
        {/* Cinematic Logo Reveal Pre-Loader */}
        <PreLoader />

        {/* Global Dumbbell Precision Cursor */}
        <CustomCursor />

        {children}
      </body>
    </html>
  );
}
