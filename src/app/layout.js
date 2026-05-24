import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/component/SmoothScroll";
import ScrollButtons from "@/component/ScrollButtons";
import PageLoader from "@/component/PageLoader";
import CustomCursor from "@/component/CustomCursor";
import ScrollProgress from "@/component/ScrollProgress";
import "leaflet/dist/leaflet.css";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata = {
  applicationName: "Construct",
  title: {
    default: "Construct | Portfolio – Real Estate Ltd. in Bangladesh",
    template: "%s | Construct"
  },
  description: "Construct is a professional Full-Stack Developer from Dhaka, Bangladesh. Specializing in React, Next.js, Express.js and Node.js to build modern web applications.",
  keywords: [
    "Construct",  "Real Estate Ltd. in Bangladesh", " Construct",
    "construct",  "construct developer",
     "construct portfolio",  "construct real estate", "construct bangladesh",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
};
export default function RootLayout({ children }) {
return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body suppressHydrationWarning className={`${plusJakartaSans.variable} ${inter.variable} bg-background text-on-background font-body-md overflow-x-hidden`}>
        
          <PageLoader />
          <CustomCursor />
          <ScrollProgress />
          <SmoothScroll>
            {children}
            <ScrollButtons />
          </SmoothScroll>
        </body>
    </html>
  );
};