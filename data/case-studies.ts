import type { CaseStudyMap } from '../types/project';

export const CASE_STUDIES: CaseStudyMap = {
  panorama: {
    sections: [
      {
        kind: 'overview',
        heading: 'Overview',
        body: 'Panorama is a private investment portfolio platform that brings Robinhood-style transparency to the private markets. Family offices and wealth managers upload quarterly investor reports from their private equity, private debt, and venture capital fund managers. The platform extracts structured investment data from those documents and presents it to investors as a clean, drillable portfolio view. It applies the same mental model as a public brokerage app to an asset class that has never had it.',
      },
      {
        kind: 'problem',
        heading: 'Problem',
        body: 'Investors in private funds receive a ~20-page quarterly PDF from each fund manager. Buried inside is a schedule of investments covering 50 to 100 individual positions: what each was bought for, what it is worth now, and a handful of other figures. To compare performance quarter-over-quarter, an investor has to open two PDFs side by side and manually match every line. Multiply that by multiple funds and multiple quarters and it becomes a serious transparency problem. There is no equivalent of toggling "1-month" or "3-month" on a stock chart. The data simply does not exist in a usable form.',
      },
      {
        kind: 'approach',
        heading: 'Approach',
        body: "I designed the product from the investor's existing mental model: they already understand what a public brokerage portfolio looks like. The goal was to replicate that experience exactly, showing total portfolio value over time, a list of funds beneath it, and the ability to drill into any fund and see its underlying investments, all populated with private market data. The family office sits in the middle: they upload the documents, the platform does the extraction, and their investors see the result without ever touching a PDF.",
      },
      {
        kind: 'challenges',
        heading: 'Challenges',
        body: 'Quarterly investor reports have no enforced standard format. The structure, layout, and level of detail varies significantly across fund managers. Extracting structured investment figures reliably across that variation was the core technical challenge. A second challenge was making time-series charts feel meaningful from data that only updates four times a year. The UI needed to communicate sparse data honestly without making the product feel empty between quarters.',
      },
      {
        kind: 'implementation',
        heading: 'Implementation',
        body: "The platform has two distinct sides. On the family office side, document upload triggers a parsing pipeline: the PDF is stored in S3, a presigned URL is generated and sent to Claude, and the extracted investment figures are validated and written to a MySQL database via an Express API. On the investor side, a React app presents a two-panel layout with a time-series chart on top and a scrollable list of funds or investments below. Every screen supports a toggle to flip the two panels so the list moves to the top and the chart expands to show all positions overlaid. A secondary toggle lets users switch between value metrics (total value, invested capital, gain) across all views. Family offices can also create per-investor statements that slice their fund-level data down to each client's proportional stake.",
      },
      {
        kind: 'impact',
        heading: 'Impact',
        body: 'Panorama eliminates a workflow that previously required opening multiple PDFs and manually reconciling around 75 line items per fund per quarter. For family offices, it becomes a differentiator that offers their investors a level of transparency most competitors do not provide. For investors, the result is the same intuitive experience they already have with public markets, now extended to the private side of their portfolio.',
      },
    ],
    metrics: [
      {
        label: 'Investments per fund',
        value: '50-100',
        unit: 'tracked per quarter',
      },
      {
        label: 'Manual reconciliation',
        value: '0',
        unit: 'PDF comparisons needed',
      },
      { label: 'Data source', value: 'Quarterly PDFs', unit: 'auto-extracted' },
    ],
    links: [
      {
        label: 'Demo',
        url: 'https://drive.google.com/file/d/1oy8Co2yRPMSrWR5OMxdO6wNIbBrR-8k1/view?usp=sharing',
        kind: 'demo',
      },
      {
        label: 'Source Code',
        url: 'https://github.com/cartergran/panorama',
        kind: 'repo',
      },
    ],
    techStack: [
      { name: 'React', role: 'Investor-facing portfolio and fund views' },
      {
        name: 'Express',
        role: 'REST API for document ingestion and data access',
      },
      {
        name: 'MySQL',
        role: 'Structured storage for investment and fund data',
      },
      { name: 'Claude', role: 'PDF extraction and investment data parsing' },
      {
        name: 'AWS S3',
        role: 'PDF storage and presigned URL generation for document processing',
      },
    ],
  },

  imagine: {
    sections: [
      {
        kind: 'overview',
        heading: 'Overview',
        body: 'Imagine is a daily image-guessing puzzle game built as a full-stack TypeScript application. Each day, a single image is hidden behind an 8x8 grid of tiles. Players reveal tiles across up to 5 attempts to identify the hidden subject, first guessing the category and then committing to a specific answer. The image starts heavily pixelated and becomes clearer with each reveal, rewarding players who solve it with the fewest tiles uncovered.',
      },
      {
        kind: 'problem',
        heading: 'Problem',
        body: 'Daily puzzle games live or die on the strength of their core loop. The challenge was building something with genuine visual deduction at its center rather than word recall or trivia, while keeping sessions short enough to complete in a few minutes and compelling enough to return to the next day. The leaderboard also had to be fair and manipulation-resistant without requiring user accounts or logins.',
      },
      {
        kind: 'approach',
        heading: 'Approach',
        body: 'I designed the game around a two-phase guessing structure: commit to a category first, then guess the specific subject. This gives players a meaningful intermediate step and makes the difficulty feel progressive rather than all-or-nothing. The scoring system rewards restraint. Every tile left unrevealed earns points, so the optimal strategy is to solve as early as possible with as few reveals as possible. The maximum score is 314.',
      },
      {
        kind: 'challenges',
        heading: 'Challenges',
        body: 'Server-side image processing was the most complex engineering problem. Pre-generating multiple pixelation levels and pre-cropping every tile into a 3D catalog at server startup required careful management of memory and startup time. Leaderboard writes needed to be concurrency-safe without a traditional database, which I solved using GCS generation numbers for optimistic locking with automatic retry. Automating daily puzzle rotation fully meant reliably coordinating a cron job, a GCS file initialization, and a Heroku dyno restart in sequence every night at midnight.',
      },
      {
        kind: 'implementation',
        heading: 'Implementation',
        body: 'The server downloads puzzle images from Google Cloud Storage at startup, generates pixelation levels using Jimp, and pre-crops all 64 tiles into a 3D base64 catalog indexed by attempt, row, and column. Tiles are served individually on demand. Category and solution validation happen server-side so answers are never exposed to the client, and scores are verified from game logs before any leaderboard submission. A node-schedule cron job at midnight EST increments the puzzle number, initializes a fresh scores file in GCS, patches the Heroku config var, and restarts the dyno, making the daily content cycle fully hands-off. Players can share a color-coded emoji grid of their results, similar to Wordle.',
      },
      {
        kind: 'impact',
        heading: 'Impact',
        body: 'The automated rotation system delivers a new puzzle every day with zero manual intervention. Server-side answer validation keeps the game fair without requiring accounts. The scoring model rewards improvement over time, giving returning players a reason to keep coming back beyond simply finishing the daily challenge.',
      },
    ],
    metrics: [
      { label: 'Grid size', value: '8x8', unit: '64 tiles per puzzle' },
      { label: 'Max score', value: '314', unit: 'points' },
      {
        label: 'Daily rotation',
        value: 'Automated',
        unit: 'zero manual steps',
      },
    ],
    links: [
      {
        label: 'Play It',
        url: 'https://whynotimagine.com/',
        kind: 'demo',
      },
      {
        label: 'Source Code',
        url: 'https://github.com/cartergran/imagine',
        kind: 'repo',
      },
    ],
    techStack: [
      {
        name: 'TypeScript',
        role: 'End-to-end type safety across client and server',
      },
      {
        name: 'React',
        role: 'Game UI, tile interaction, and two-phase guess flow',
      },
      {
        name: 'Express',
        role: 'API server with server-side validation and tile delivery',
      },
      {
        name: 'Jimp',
        role: 'Server-side image pixelation and tile pre-generation',
      },
      {
        name: 'Google Cloud Storage',
        role: 'Puzzle images, metadata, and daily score files',
      },
    ],
  },

  'spotify-lounge': {
    sections: [
      {
        kind: 'overview',
        heading: 'Overview',
        body: "Spotify Lounge is a UX concept designed in 2017 to improve music discovery through social listening. The concept centers on a virtual lounge: a shared room where any Spotify user can connect, listen to the same song in real time, vote on a collaborative queue, and discover new music through the people they follow. The concept predates Spotify's own Jams feature by several years and arrived at nearly the same solution independently.",
      },
      {
        kind: 'problem',
        heading: 'Problem',
        body: 'Spotify\'s discovery features surfaced mainstream music users already knew. More telling, user research revealed that Spotify\'s built-in sharing feature was barely used. People shared music through entirely unconventional channels instead. The core problem was social: music discovery is deeply tied to sharing, but Spotify offered no interactive way to experience music together. There was no mechanism to say "listen to this right now, with me."',
      },
      {
        kind: 'approach',
        heading: 'Approach',
        body: "I started with four user interviews to test the hypothesis that Spotify's recommendations and sharing were the bottleneck for discovery. What I found reframed the problem: the real gap was the absence of a shared, real-time listening experience. From there, I ran a brainstorming session that produced six candidate features across three problem spaces: face-to-face sharing, online community, and personalized discovery. Guerrilla testing narrowed the field to one: the Lounge.",
      },
      {
        kind: 'challenges',
        heading: 'Challenges',
        body: "The core design challenge was balancing democratic control with a coherent listening experience. Letting anyone in the lounge influence the queue risked chaos, but giving the leader total control reduced the social value of the feature. The solution was a vote-ranked queue: anyone could add songs or like existing ones, and the order updated dynamically based on the crowd's preferences. A second challenge emerged during user testing: participants couldn't tell who else was in the lounge, which undercut the social dimension entirely. This led to an overlay design showing connected users and their profiles.",
      },
      {
        kind: 'implementation',
        heading: 'Implementation',
        body: "I designed three distinct entry points into the Lounge from the Spotify home screen, prioritizing quick access without displacing existing features. Medium-fidelity wireframes established the core layout: current track, upcoming queue, and interaction controls on a single screen. These were translated to high-fidelity mockups in Sketch using Spotify's existing visual language, then linked into an interactive prototype in InVision. User tests surfaced the social visibility gap, which led to a second design iteration adding a slide-out overlay with the connected users list and tap-through to their profiles. A preview mechanic let users hold down any queued song to hear a short sample on their own device without interrupting the lounge.",
      },
      {
        kind: 'impact',
        heading: 'Impact',
        body: 'Spotify released Jams in 2022, a collaborative listening feature with nearly identical mechanics: real-time sync, a shared queue, and a host-controlled room that friends can join. The Lounge concept arrived at the same product answer five years earlier through independent research and design. The overlap validates the underlying user need: people want to share the experience of listening, not just the link to a song.',
      },
    ],
    metrics: [
      { label: 'Research participants', value: '4', unit: 'user interviews' },
      { label: 'Features prototyped', value: '6', unit: 'narrowed to 1' },
      {
        label: 'Years before Spotify Jams',
        value: '5',
        unit: 'independent concept',
      },
    ],
    links: [
      {
        label: 'Read the Case Study',
        url: 'https://medium.com/@csg82/spotify-concept-design-for-discovery-4b21d0db441c',
        kind: 'article',
      },
    ],
    techStack: [
      { name: 'Sketch', role: 'High-fidelity UI design and visual mockups' },
      { name: 'InVision', role: 'Interactive prototype for user testing' },
      {
        name: 'UX Research',
        role: 'User interviews and guerrilla testing to define and validate the concept',
      },
      {
        name: 'Product Design',
        role: 'Concept definition, queue mechanics, and two rounds of design iteration',
      },
    ],
  },
};
