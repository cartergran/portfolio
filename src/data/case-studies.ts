import type { CaseStudyMap } from '../types/project';

export const CASE_STUDIES: CaseStudyMap = {
  'financial-analytics-dashboard': {
    sections: [
      {
        kind: 'overview',
        heading: 'Overview',
        body: 'A full-stack financial analytics dashboard that transforms raw transaction and market data into actionable visual insights. The system handles structured data ingestion, aggregation pipelines, and real-time charting — with an LLM-powered natural-language query layer that lets users ask questions about their data without writing filters by hand.',
      },
      {
        kind: 'problem',
        heading: 'Problem',
        body: 'Financial data is inherently high-volume and multi-dimensional. Users needed to slice portfolios by time range, asset class, and custom tags — but existing tools forced them through rigid filter UIs or required SQL knowledge. Rendering thousands of data points on the client also introduced visible jank, especially on mid-range devices.',
      },
      {
        kind: 'approach',
        heading: 'Approach',
        body: 'I designed a strict schema for financial records up front, making every field typed and every aggregation query predictable. On the frontend, I chose a virtualized charting strategy: only the visible viewport\'s data points are rendered, with pre-aggregated summaries for zoomed-out views. For the natural-language layer, I integrated an LLM to translate plain-English questions into structured filter objects — keeping the model\'s role narrow and deterministic rather than open-ended.',
      },
      {
        kind: 'challenges',
        heading: 'Challenges',
        body: 'The biggest tension was between query flexibility and performance. Arbitrary date-range and tag combinations could produce expensive aggregations, so I introduced a tiered caching strategy — pre-computed daily rollups with on-demand drill-down. On the LLM side, prompt reliability was a concern; I constrained the model\'s output to a strict JSON schema and added validation to reject malformed queries gracefully.',
      },
      {
        kind: 'implementation',
        heading: 'Implementation',
        body: 'The data layer uses TypeScript interfaces mirroring the database schema, so type mismatches surface at compile time rather than runtime. Charts are built with D3.js for fine-grained control over rendering and transitions. The LLM integration sits behind a thin API route that validates both input and output, treating the model as a structured translator rather than a freeform assistant. Material UI provides the component system, with a responsive grid that adapts from a dense desktop layout to a single-column mobile view.',
      },
      {
        kind: 'impact',
        heading: 'Impact',
        body: 'The natural-language query layer reduced the average time-to-insight from minutes of manual filtering to a single typed question. Virtualized rendering eliminated frame drops on data sets exceeding 10,000 points. The strict schema approach caught multiple data-shape bugs during development that would have been runtime errors in a loosely typed system.',
      },
    ],
    metrics: [
      { label: 'Data points rendered', value: '10,000+', unit: 'without jank' },
      { label: 'Query-to-insight time', value: '~3s', unit: 'via NL query' },
      { label: 'Schema coverage', value: '100%', unit: 'typed end-to-end' },
    ],
    links: [
      {
        label: 'Live Demo',
        url: 'https://github.com',
        kind: 'demo',
      },
      {
        label: 'Source Code',
        url: 'https://github.com',
        kind: 'repo',
      },
    ],
    techStack: [
      { name: 'React', role: 'UI framework and component architecture' },
      { name: 'TypeScript', role: 'End-to-end type safety across data pipeline' },
      { name: 'D3.js', role: 'Custom virtualized chart rendering' },
      { name: 'Material UI', role: 'Design system and responsive layout' },
      { name: 'OpenAI API', role: 'Natural-language to structured-query translation' },
      { name: 'Node.js', role: 'API layer with schema validation' },
    ],
  },

  'daily-puzzle-game': {
    sections: [
      {
        kind: 'overview',
        heading: 'Overview',
        body: 'A browser-based daily puzzle game that gives every player the same challenge each day. Built entirely before incorporating any AI tooling, this project is grounded in careful interaction design — hinting systems, streak mechanics, and shareable results that keep players coming back.',
      },
      {
        kind: 'problem',
        heading: 'Problem',
        body: 'Most casual puzzle games either bore players with repetitive mechanics or overwhelm them with complexity. The challenge was designing a game loop tight enough for a two-minute session but satisfying enough to build a daily habit — without relying on notifications or dark patterns to drive retention.',
      },
      {
        kind: 'approach',
        heading: 'Approach',
        body: 'I started from the player experience backward: what does a single session feel like? The core loop is discover → attempt → feedback → resolve. Each puzzle is seeded from the date so every player gets the same challenge. Difficulty is tuned per day-of-week, with gentler puzzles on Monday and harder ones by Friday. The hint system reveals information progressively, rewarding persistence over guessing.',
      },
      {
        kind: 'challenges',
        heading: 'Challenges',
        body: 'Balancing hint generosity was the hardest design problem. Too few hints and players churn after a bad day; too many and the puzzle loses tension. I settled on a three-tier system — a nudge, a partial reveal, and a strong hint — each costing one point from the player\'s score. Streak tracking also needed careful handling around timezones and midnight boundaries to feel fair globally.',
      },
      {
        kind: 'implementation',
        heading: 'Implementation',
        body: 'The game state lives entirely in the browser via LocalStorage, with a compact serialization format that survives page reloads without a backend. Animations are CSS-driven with spring-style easing for tile flips and reveals, adding tactile feedback without JavaScript overhead. The share feature generates a spoiler-free emoji grid — similar to Wordle\'s pattern — that players can paste into messages. All game logic runs client-side with deterministic seeding, so there\'s no server to maintain.',
      },
      {
        kind: 'impact',
        heading: 'Impact',
        body: 'The daily engagement loop and shareable results drove organic word-of-mouth growth. The progressive hint system kept completion rates high without trivializing the puzzles. Building without AI tooling forced every interaction detail to be considered deliberately, resulting in a polished UX that feels handcrafted.',
      },
    ],
    metrics: [
      { label: 'Session length', value: '~2 min', unit: 'average' },
      { label: 'Hint tiers', value: '3', unit: 'progressive reveals' },
      { label: 'Backend required', value: 'None', unit: 'fully client-side' },
    ],
    links: [
      {
        label: 'Play It',
        url: 'https://github.com',
        kind: 'demo',
      },
      {
        label: 'Source Code',
        url: 'https://github.com',
        kind: 'repo',
      },
    ],
    techStack: [
      { name: 'React', role: 'Component architecture and state management' },
      { name: 'TypeScript', role: 'Game logic type safety and puzzle seeding' },
      { name: 'CSS Animations', role: 'Tile flips, reveals, and spring-style transitions' },
      { name: 'LocalStorage', role: 'Persistent game state without a backend' },
      { name: 'Date-seeded RNG', role: 'Deterministic daily puzzle generation' },
    ],
  },

  'react-islands': {
    sections: [
      {
        kind: 'overview',
        heading: 'Overview',
        body: 'A progressive modernization strategy for embedding React components as self-contained "islands" inside a large legacy jQuery application. Rather than a risky full rewrite, this architecture lets teams ship modern UI incrementally — one component at a time — while the existing jQuery code continues to run unchanged around it.',
      },
      {
        kind: 'problem',
        heading: 'Problem',
        body: 'The legacy application had years of jQuery-driven UI with tightly coupled DOM manipulation, global event handlers, and no component boundaries. A full React rewrite would have taken months and frozen feature development. Meanwhile, new feature requests demanded richer interactions that were painful to build in jQuery — modals with complex state, dynamic forms, and real-time updates.',
      },
      {
        kind: 'approach',
        heading: 'Approach',
        body: 'I designed a mount/unmount protocol that treats each React component as an island: it owns a specific DOM node, renders into it on demand, and cleans up completely when removed. The jQuery code doesn\'t need to know React exists — it just manages container elements. A thin bridge layer handles data passing via DOM attributes and custom events, keeping the two worlds decoupled.',
      },
      {
        kind: 'challenges',
        heading: 'Challenges',
        body: 'Idempotency was the core engineering constraint. jQuery code could re-render page sections at any time, destroying and recreating container nodes. Every island mount had to be safe to call repeatedly — detecting whether it was already mounted, cleaning up stale instances, and re-mounting cleanly. Memory leaks from orphaned React roots were a real risk that required explicit teardown hooks tied to jQuery\'s DOM lifecycle.',
      },
      {
        kind: 'implementation',
        heading: 'Implementation',
        body: 'Each island is registered with a manifest that maps a CSS selector to a React component and its props contract. A MutationObserver watches for container elements appearing in the DOM and auto-mounts the corresponding island. Unmounting hooks into jQuery\'s remove and empty events to trigger React root cleanup. Webpack bundles each island as a separate chunk, so the legacy app only loads the JavaScript it needs. TypeScript enforces the props contract between the jQuery data attributes and the React component interface.',
      },
      {
        kind: 'impact',
        heading: 'Impact',
        body: 'The team shipped new React-powered features within the existing release cycle, with zero jQuery regressions. The island pattern became the standard approach for all new UI work, creating a natural migration path. Over time, the ratio of React to jQuery code shifted steadily — without ever requiring a feature freeze or a big-bang rewrite.',
      },
    ],
    metrics: [
      { label: 'Migration strategy', value: 'Incremental', unit: 'zero downtime' },
      { label: 'jQuery regressions', value: '0', unit: 'during rollout' },
      { label: 'Bundle strategy', value: 'Per-island', unit: 'code-split chunks' },
    ],
    links: [
      {
        label: 'Source Code',
        url: 'https://github.com',
        kind: 'repo',
      },
    ],
    techStack: [
      { name: 'React', role: 'Island component rendering and lifecycle' },
      { name: 'jQuery', role: 'Legacy host application and DOM management' },
      { name: 'TypeScript', role: 'Props contracts between jQuery and React' },
      { name: 'Webpack', role: 'Per-island code splitting and chunking' },
      { name: 'MutationObserver', role: 'Auto-mount detection for dynamic DOM' },
      { name: 'Custom Events', role: 'Decoupled bridge between jQuery and React' },
    ],
  },
};
