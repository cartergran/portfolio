import { PageContainer } from '@/components/layout/PageContainer';
import { SideNav } from '@/components/layout/SideNav';
import { MobileTopBar } from '@/components/layout/MobileTopBar';
import { Section } from '@/components/layout/Section';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { SkillsStrip } from '@/components/home/SkillsStrip';
import { ProjectGrid } from '@/components/home/ProjectGrid';

export default function HomePage() {
  return (
    <PageContainer sidebar={<SideNav />} topbar={<MobileTopBar />}>
      <HeroSection />
      <Section id="about">
        <AboutSection />
      </Section>
      <Section id="experience">
        <ExperienceSection />
        <SkillsStrip />
      </Section>
      <Section id="projects">
        <ProjectGrid />
      </Section>
      <Footer />
    </PageContainer>
  );
}
