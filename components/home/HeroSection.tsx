import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';
import { CTAButton } from '@/components/common/CTAButton';
import { FadeIn } from '@/components/common/FadeIn';

export function HeroSection() {
  return (
    <FadeIn className="py-12 sm:py-20 md:hidden md:py-24">
      <div className="flex max-w-xl flex-col gap-6">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={144}
          height={144}
          className="h-[88px] w-[88px] object-contain sm:h-36 sm:w-36"
        />
        <h1 className="text-text text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
          Hi, I&rsquo;m Carter
        </h1>
        <p className="text-secondary text-xl font-medium">
          Full-Stack Developer
        </p>
        <p className="text-text-muted max-w-[520px] text-base leading-relaxed">
          Turning &ldquo;this could be cool&rdquo; into software worth using.
        </p>
        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
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
