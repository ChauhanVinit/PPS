import { Plus_Jakarta_Sans, Urbanist, DM_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata = {
  title: "Plaza Protection",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Plaza Protection: Trusted Security Guard Services For Unmatched Safety</title>
        <meta name="description" content="Plaza Protection brings you the best security guard services with expert teams providing solutions to safeguard property & meet your security needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
      </Head>
      <html lang="en">
        <body className={`${jakarta.className} ${urbanist.className} ${dmSans.className}  `}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>

  );
}