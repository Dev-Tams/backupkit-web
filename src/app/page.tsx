import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import CliSection from "@/components/landing/CliSection";
import Storage from "@/components/landing/Storage";
import GithubCta from "@/components/landing/GithubCta";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="mk-page">
      <div className="grid-bg" />

      <Nav />

      <main>
        <Hero />
        <Features />
        <hr className="divider" />
        <CliSection />
        <Storage />
        <hr className="divider" />
        <GithubCta />
      </main>

      <Footer />
    </div>
  );
}
