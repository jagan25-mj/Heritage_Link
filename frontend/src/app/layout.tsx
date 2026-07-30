import type { Metadata } from "next";
import Script from "next/script";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Heritage Link",
  description: "Discover India's Living Heritage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* CSS Assets */}
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/heritage-theme.css" />
      </head>
      <body>
        
        <CartProvider>
          {children}
        </CartProvider>

        {/* JS Assets */}
        <Script src="/assets/js/jquery-1.11.3.min.js" strategy="beforeInteractive" />
        <Script src="/assets/bootstrap/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.countdown.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.isotope-3.0.6.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/waypoints.js" strategy="beforeInteractive" />
        <Script src="/assets/js/owl.carousel.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.meanmenu.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/sticker.js" strategy="beforeInteractive" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
