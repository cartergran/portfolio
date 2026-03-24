import { PageContainer } from "../components/layout/PageContainer";
import { HeroSection } from "../components/home/HeroSection";
import { ProjectGrid } from "../components/home/ProjectGrid";
import { SkillsStrip } from "../components/home/SkillsStrip";

export function HomePage() {
  return (
    <PageContainer>
      <HeroSection />
      <ProjectGrid />
      <SkillsStrip />
    </PageContainer>
  );
}
