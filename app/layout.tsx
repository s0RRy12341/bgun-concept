import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/layout/CartSidebar";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "B-Gun Boutique Holster | נרתיקי Kydex פרימיום — עשוי בישראל",
    template: "%s | B-Gun Boutique Holster",
  },
  description:
    "נרתיקי Kydex פרימיום מיוצרים בישראל בעבודת יד. נרתיקי אפנדיקס, OWB, ומחזיקי מחסניות — התאמה אישית לכל דגם נשק ופנס.",
  keywords: [
    "נרתיק kydex",
    "נרתיק אפנדיקס",
    "holster israel",
    "נרתיק נשק ישראל",
    "kydex holster",
    "iwb holster",
    "owb holster",
    "נרתיק גלוק",
    "B-Gun",
  ],
  metadataBase: new URL("https://www.bgun-holsters.com"),
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://www.bgun-holsters.com",
    siteName: "B-Gun Boutique Holster",
    title: "B-Gun Boutique Holster | נרתיקי Kydex פרימיום",
    description: "נרתיקי Kydex פרימיום מיוצרים בישראל בעבודת יד.",
  },
  twitter: {
    card: "summary_large_image",
    title: "B-Gun Boutique Holster",
    description: "נרתיקי Kydex פרימיום מיוצרים בישראל",
  },
  alternates: {
    canonical: "https://www.bgun-holsters.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className={`${heebo.className} antialiased bg-[#0a0a0a] text-white`}>
        <CartProvider>
          <WishlistProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <CartSidebar />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
