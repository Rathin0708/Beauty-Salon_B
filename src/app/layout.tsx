import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/business";

const heading = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${business.name} | Bridal & Family Makeup Studio in Vadakankulam`,
  description:
    "Yahweh Family Makeup Studio — bridal makeup, wedding & event preparation, hairstyling and eyebrow beautification in Vadakankulam, Tamil Nadu.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        {children}
      </body>
    </html>
  );
}
