import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { PageContainer } from '../components/layout/PageContainer';
import { HeroSection } from '../components/home/HeroSection';
import { ContentSection } from '../components/home/ContentSection';
import { ProjectGrid } from '../components/home/ProjectGrid';
import { SkillsStrip } from '../components/home/SkillsStrip';
import { useScrollToSection } from '../hooks/useScrollToSection';

export function HomePage() {
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const sectionId = hash.split('/')[0];
    requestAnimationFrame(() => scrollToSection(sectionId));
  }, [scrollToSection]);

  return (
    <PageContainer>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <HeroSection />
      </Box>

      <ContentSection
        id="about"
        heading="About"
        body="This page will tell my story. Content coming soon."
      />
      <ContentSection
        id="experience"
        heading="Experience"
        body="Professional experience details coming soon."
      />
      <ProjectGrid />
      <SkillsStrip />
    </PageContainer>
  );
}
