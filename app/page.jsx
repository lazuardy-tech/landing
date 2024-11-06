import Maintenance from "@/components/ui/maintenance";
import Header from "@/components/ui/header";
import Cases from "@/components/ui/landing/cases";
import FAQ from "@/components/ui/landing/faq";
import Footer from "@/components/ui/landing/footer";
import Hero from "@/components/ui/landing/hero";
import { isMaintenanceMode } from "@/lib/config";

export default function Page() {
  if (isMaintenanceMode()) return <Maintenance />;

  return (
    <>
      <Header />
      <div className="w-full mx-auto">
        <Hero />
        <Cases />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
