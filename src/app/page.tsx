import HeroCinematic from "@/components/HeroCinematic";
import AdmissionBanner from "@/components/AdmissionBanner";
import AcademicPrograms from "@/components/AcademicPrograms";
import Notices from "@/components/Notices";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroCinematic />

      {/* Admissions Banner */}
      <AdmissionBanner />

      {/* Academic Programs */}
      <AcademicPrograms />

      {/* Notices */}
      <Notices />
    </>
  );
}
