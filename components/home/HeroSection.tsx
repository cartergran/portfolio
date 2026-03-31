import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';
import { CTAButton } from '@/components/common/CTAButton';
import { FadeIn } from '@/components/common/FadeIn';

export function HeroSection() {
  return (
    <FadeIn className="py-12 sm:py-20 md:py-24 md:hidden">
      <div className="flex flex-col gap-6 max-w-xl">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={144}
          height={144}
          className="w-[88px] h-[88px] sm:w-36 sm:h-36 object-contain"
        />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-text">
          Hi, I&rsquo;m Carter
        </h1>
        <p className="text-xl font-medium text-secondary">Full-Stack Developer</p>
        <p className="text-base text-text-muted max-w-[520px] leading-relaxed">
          Turning &ldquo;this could be cool&rdquo; into software worth using.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <CTAButton
            href="https://github.com/cartergran"
            variant="outlined"
            startIcon={<Github size={16} />}
          >
            GitHub
          </CTAButton>
          <CTAButton
            href="https://linkedin.com/in/cartergran"
            variant="outlined"
            startIcon={<Linkedin size={16} />}
          >
            LinkedIn
          </CTAButton>
        </div>
      </div>
    </FadeIn>
  );
}
