export interface AboutContent {
  heading: string;
  paragraphs: readonly string[];
}

export const ABOUT_CONTENT: AboutContent = {
  heading: 'About',
  paragraphs: [
    "I'm a software engineer focused on building intuitive, high-performance web applications. I value creating user experiences that feel seamless, supported by clean, scalable systems.",
    "I came into Cornell as an undeclared engineering student and didn't take my first computer science course until the spring of freshman year. Starting behind pushed me to develop a disciplined approach to learning and problem solving. By sophomore year, I had affiliated with computer science and went on to graduate on time, including a semester abroad.",
    "After graduating, I went into consulting to broaden my exposure across different areas of software development. Working on a range of projects helped me understand not just how to build systems, but how different technical decisions impact real users and business outcomes. Through that experience, I found a strong pull toward web development, where the challenge of building robust systems is matched by the satisfaction of seeing them solve real problems.",
    "Today, I'm drawn to product-focused engineering because it brings a tighter feedback loop between what you build and how it's actually used. I enjoy owning problems end to end, working across the stack to shape solutions that are not just technically sound, but truly effective in practice.",
    'Outside of work, you can usually find me playing in basketball leagues, wishing I was golfing on a beach, watching sports with friends, or continuing to build and refine side projects.',
  ],
};
