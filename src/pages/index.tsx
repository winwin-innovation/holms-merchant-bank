import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import WeInvest from "../../components/WeInvest";
import ChooseUs from "../../components/ChooseUs";
import TrustedWorldwide from "../../components/TrustedWorldwide";
import Testimonials from "../../components/Testimonials";
import AddsOn from "../../components/AddsOn";
import Footer from "../../components/Footer";
import About from "../../components/About";
import OurFeatures from "../../components/OurFeatures";
import OurTeam from "../../components/OurTeam";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Holms Merchant Bank</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar />
      <HeroSection />
      <About />
      <WeInvest />
      <OurFeatures />
      <ChooseUs />
      <TrustedWorldwide />
      <Testimonials />
      <OurTeam />
      <AddsOn />
      <Footer />
    </>
  );
}
