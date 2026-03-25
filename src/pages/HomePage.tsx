import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { PageContainer } from '../components/layout/PageContainer';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { ExperienceSection } from '../components/home/ExperienceSection';
import { ProjectGrid } from '../components/home/ProjectGrid';
import { SkillsStrip } from '../components/home/SkillsStrip';

export function HomePage() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, []);

  return (
    <PageContainer>
      {/* Full hero: visible only below md */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <HeroSection />
      </Box>

      <AboutSection />
      <ExperienceSection />
      <ProjectGrid />
      <SkillsStrip />
    </PageContainer>
  );
}
