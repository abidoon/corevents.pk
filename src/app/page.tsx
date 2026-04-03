import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ProblemSolution from "@/components/home/ProblemSolution";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import HowItWorks from "@/components/home/HowItWorks";
import UseCases from "@/components/home/UseCases";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <FeatureHighlights />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
