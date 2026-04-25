
import React from 'react';
import { CaseStudy, ServiceContent } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'maewellness',
    slug: 'mae-wellness-scaling-holistic-growth',
    title: 'Mae Wellness – Scaling Holistic Growth',
    industry: 'Wellness & Healthcare',
    results: {
      traffic: '7.43K Clicks',
      keywords: '213K Impressions',
      revenue: '3.5% CTR'
    },
    chartData: [
      { name: 'Dec 24', value: 400 },
      { name: 'Feb 25', value: 450 },
      { name: 'Apr 25', value: 520 },
      { name: 'Jun 25', value: 490 },
      { name: 'Aug 25', value: 580 },
      { name: 'Oct 25', value: 650 },
      { name: 'Dec 25', value: 780 },
      { name: 'Jan 26', value: 920 },
    ],
    description: 'Verified Google Search Console data showing a massive scale-up in organic visibility and user engagement for Mae Wellness over a 16-month period.',
    image: 'https://lh3.googleusercontent.com/d/1fUPlUwRNudEIykHqs0GIs36Jdbku5g6S',
    challenge: 'Despite offering premium wellness services, Mae Wellness was invisible in a highly competitive local market. Before our intervention, the site struggled to maintain a baseline of impressions and had negligible click-through rates from high-intent queries.',
    strategy: 'We executed a technical SEO recovery and topical authority mapping strategy. This involved fixing core web vitals, optimizing internal link structures, and creating localized content that aligned with user intent for "holistic health" and "wellness clinic" keywords.',
    outcome: 'The results are validated by Google Search Console: 7.43K total clicks and over 213,000 impressions. We maintained a healthy 3.5% CTR across a competitive landscape, with an average position of 26.4—a massive jump from previous unranked statuses.',
    keyActionPoints: ['Search Console Verified', 'Total Impressions: 213K', '3.5% Click-Through Rate', 'Avg Position: 26.4']
  },
  {
    id: 'monstore',
    slug: 'monstore-self-storage-uk',
    title: 'Monstore Self Storage UK',
    industry: 'Storage & Logistics',
    results: {
      traffic: '5.52K Clicks',
      keywords: '1.77M Impressions',
      revenue: '0.3% CTR'
    },
    chartData: [
      { name: 'Oct 24', value: 1200 },
      { name: 'Dec 24', value: 1350 },
      { name: 'Feb 25', value: 1800 },
      { name: 'Apr 25', value: 2400 },
      { name: 'Jun 25', value: 3100 },
      { name: 'Aug 25', value: 3900 },
    ],
    description: '1.77 million impressions achieved through aggressive local SEO and technical optimization for a major UK self-storage provider.',
    image: 'https://lh3.googleusercontent.com/d/1MToveZaYCNtEpfPNhFDhv8ylDPhqngKR',
    challenge: 'Monstore Self Storage faced extreme competition in the UK market. With a website that lacked semantic depth and technical precision, impressions were stagnant and local rankings were buried behind major national franchises.',
    strategy: 'We implemented a "Hyper-Local Authority" system. This involved deep technical audits to resolve crawl budget issues, followed by the deployment of geo-specific service silos and a rigorous GMB (Google Business Profile) engagement strategy to capture high-intent storage queries.',
    outcome: 'The growth engine delivered massive scale: 1.77 Million total impressions and 5,520 high-intent clicks within a 10-month period. We established a dominant market presence for core transactional terms, reaching an average position of 49.7 despite the hyper-competitive landscape.',
    keyActionPoints: ['GSC Verified: 1.77M Impr', 'Total Clicks: 5.52K', 'Local Pack Dominance', 'Technical SEO Overhaul']
  },
  {
    id: 'excel',
    slug: 'excel-scotland-custom-homes',
    title: 'Excel Scotland – Custom Homes',
    industry: 'Construction',
    results: {
      traffic: '4.38K Clicks',
      keywords: '195K Impressions',
      revenue: '2.2% CTR'
    },
    chartData: [
      { name: 'Oct 24', value: 450 },
      { name: 'Nov 24', value: 480 },
      { name: 'Jan 25', value: 520 },
      { name: 'Mar 25', value: 500 },
      { name: 'May 25', value: 650 },
      { name: 'Jul 25', value: 610 },
      { name: 'Aug 25', value: 720 },
    ],
    description: 'Dominance in the luxury custom home build sector with 195K impressions and high-intent organic leads verified via GSC.',
    image: 'https://lh3.googleusercontent.com/d/13cwKyO0Ze4IuRHfMBalC48YMC5QhLnYW',
    challenge: 'Excel Scotland provides high-end custom homes, but their digital presence was failing to attract luxury-market leads. They were competing against massive developers with larger budgets, making organic visibility for "bespoke homes" and "luxury build" terms difficult to capture.',
    strategy: 'Our focus was on High-Value Semantic Silos. We optimized for long-tail, high-intent keywords that matched the luxury buyer profile. This included a technical speed optimization to ensure a premium user experience and the implementation of advanced Project Schema to showcase their portfolio directly in search results.',
    outcome: 'Verified performance data shows a significant capture of the luxury market: 195,000 impressions and 4,380 clicks from users actively seeking custom home solutions. With a 2.2% CTR and an average position of 33.4 across a vast keyword set, we transformed the site into a lead-generating asset.',
    keyActionPoints: ['GSC Verified: 195K Impr', 'Total Clicks: 4.38K', '2.2% CTR Performance', 'Luxury Market Targeting']
  },
  {
    id: 'kinloss',
    slug: 'kinloss-self-storage',
    title: 'Kinloss Self Storage',
    industry: 'Storage & Moving',
    results: {
      traffic: '422 Clicks',
      keywords: '24.3K Impressions',
      revenue: '1.7% CTR'
    },
    chartData: [
      { name: 'Oct 24', value: 60 },
      { name: 'Nov 24', value: 55 },
      { name: 'Dec 24', value: 65 },
      { name: 'Jan 25', value: 110 },
      { name: 'Feb 25', value: 130 },
      { name: 'Mar 25', value: 105 },
      { name: 'Apr 25', value: 145 },
      { name: 'May 25', value: 125 },
      { name: 'Jun 25', value: 140 },
      { name: 'Jul 25', value: 165 },
    ],
    description: 'Strategic growth for a niche self-storage facility, capturing high-intent local traffic with verified GSC results.',
    image: 'https://lh3.googleusercontent.com/d/1ULlELLfrN2fSckHJ6RVhidQktVijrYKT',
    challenge: 'Kinloss Self Storage was struggling with low digital visibility and a lack of predictable inbound leads. Despite a strong physical offering, their search presence was dominated by larger, multi-location competitors, leaving them with an average position that failed to drive significant volume.',
    strategy: 'We focused on "Precision Intent Targeting." Instead of broad storage terms, we optimized for hyper-specific local queries and transactional phrases that indicated a user was ready to book. We paired this with GMB optimization and a technical cleanup to ensure search engines correctly indexed their specialized service offerings.',
    outcome: 'Verified Google Search Console data shows a steady climb in performance: 24,300 impressions and 422 high-intent clicks. We achieved a competitive 1.7% CTR and an average position of 26.8, resulting in a consistent pipeline of online bookings and physical occupancy growth.',
    keyActionPoints: ['GSC Verified: 24.3K Impr', '422 High-Intent Clicks', '1.7% Conversion Intent CTR', 'Avg Position: 26.8']
  },
  {
    id: 'bsl',
    slug: 'british-school-of-languages',
    title: 'British School of Languages',
    industry: 'Education',
    results: {
      traffic: '+35% Leads',
      keywords: 'Language Authority',
      revenue: 'Increased Sign-ups'
    },
    chartData: [
      { name: 'Q1', value: 1500 },
      { name: 'Q2', value: 1800 },
      { name: 'Q3', value: 2100 },
      { name: 'Q4', value: 2025 },
    ],
    description: 'With improved rankings and targeted traffic, the school experienced a 35% increase in online inquiries and course registrations.',
    image: 'https://lh3.googleusercontent.com/d/1S6T5vHo3Bn4EJAp3J-AGqZuBscX09FHD'
  },
  {
    id: 'chattanooga',
    slug: 'ryan-king-team-chattanooga-real-estate',
    title: 'The Chattanooga Life (Ryan King Team)',
    industry: 'Real Estate',
    results: {
      traffic: 'High Local Intent',
      keywords: 'GMB Local Pack #1',
      revenue: 'Daily Inbound Calls'
    },
    chartData: [
      { name: 'Wk 1', value: 100 },
      { name: 'Wk 2', value: 150 },
      { name: 'Wk 3', value: 300 },
      { name: 'Wk 4', value: 450 },
    ],
    description: 'Dominance in the Google Local Pack for high-value real estate searches, driving massive local engagement and direct calls.',
    image: 'https://lh3.googleusercontent.com/d/1_UNdAwA40hce9EZ6i72RxVNCYAaLDAEo'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Mae Wellness', url: 'https://lh3.googleusercontent.com/d/1fUPlUwRNudEIykHqs0GIs36Jdbku5g6S' },
  { name: 'Excel Scotland', url: 'https://lh3.googleusercontent.com/d/13cwKyO0Ze4IuRHfMBalC48YMC5QhLnYW' },
  { name: 'British School of Languages', url: 'https://lh3.googleusercontent.com/d/1S6T5vHo3Bn4EJAp3J-AGqZuBscX09FHD' },
  { name: 'Kinloss', url: 'https://lh3.googleusercontent.com/d/1ULlELLfrN2fSckHJ6RVhidQktVijrYKT' },
  { name: 'Monstore', url: 'https://lh3.googleusercontent.com/d/1MToveZaYCNtEpfPNhFDhv8ylDPhqngKR' },
  { name: 'Ryan King Team', url: 'https://lh3.googleusercontent.com/d/1_UNdAwA40hce9EZ6i72RxVNCYAaLDAEo' }
];

export const TOOL_LOGOS = [
  { name: 'Ahrefs', url: 'https://lh3.googleusercontent.com/d/1vjIyf-UWP-dfrxWW0x-AjxB75_n2g75R' },
  { name: 'Bing Webmaster', url: 'https://lh3.googleusercontent.com/d/17gl0A8WNsnwiOt52aqQGDgTeCplm9wAA' },
  { name: 'Google Ads', url: 'https://lh3.googleusercontent.com/d/1Hs9UnLpiMr1h2NOIOdsqneHcSIZDjz7L' },
  { name: 'Google Docs', url: 'https://lh3.googleusercontent.com/d/1gotl-QjJ97RBFSFkGrPv6la8JonWvRr0' },
  { name: 'Google Drive', url: 'https://lh3.googleusercontent.com/d/1zdalO7gFOcr089aO6Da8qy2hInB1msHf' },
  { name: 'Looker Studio', url: 'https://lh3.googleusercontent.com/d/1UDz5iiHnZftKhWD9ZU8dma_rqBARaSqd' },
  { name: 'Search Console', url: 'https://lh3.googleusercontent.com/d/1HM0eJoWdOr249XVhkKVvsyiLFUp0bjMX' },
  { name: 'Google Sheets', url: 'https://lh3.googleusercontent.com/d/1xv68OSUVdU0RKnstn516PV7DyQRlkyf' },
  { name: 'Google Analytics', url: 'https://lh3.googleusercontent.com/d/1nmHf2upP8o88HuxvoBM4S-lehIPa5fD6' },
  { name: 'Google Maps', url: 'https://lh3.googleusercontent.com/d/1xy-Qsh_X7z8QuKb9AoCyTYdDdb8qLYL5' },
  { name: 'Keyword Planner', url: 'https://lh3.googleusercontent.com/d/1p2G0xzsM6tXimsTAnS9nYcdy-ml1yGvC' },
  { name: 'Microsoft', url: 'https://lh3.googleusercontent.com/d/1ytLfbNsuVJmgP8dejekNEWRLTOD2aIj1' },
  { name: 'MS Clarity', url: 'https://lh3.googleusercontent.com/d/1rXAT5fFmYLrb3uC3_fIPNnZgmCD7uHn8' },
  { name: 'n8n', url: 'https://lh3.googleusercontent.com/d/1GAPv3CQbtI5-h3AQqp7pzyotdsoXGsx6' },
  { name: 'Screaming Frog', url: 'https://lh3.googleusercontent.com/d/1UHzhGuuWV1mYSH_GE3WboBEdzGTPgStM' },
  { name: 'SEMrush', url: 'https://lh3.googleusercontent.com/d/1FruxIp06eyPxPHcWMS_qmCbCXf1crgxD' },
  { name: 'Zapier', url: 'https://lh3.googleusercontent.com/d/1GRa8R0ABFZm3Xn0jm2Upwgqmf1DzH0pw' }
];

export const SERVICES = [
  { id: 'keyword-research', title: 'Keyword Research', description: 'Strategic intent mapping to identify high-revenue, low-competition organic opportunities.', icon: '🔍' },
  { id: 'topical-maps', title: 'Topical Maps', description: 'Elite semantic architecture to establish unshakeable topical dominance and search authority.', icon: '🗺️' },
  { id: 'on-page-seo', title: 'Technical On-Page SEO', description: 'Precision semantic optimization and technical architecture to ensure maximum crawlability and resonance.', icon: '⚙️' },
  { id: 'off-page', title: 'Digital PR & Authority', description: 'High-authority link acquisition and digital PR to build an unassailable domain moat.', icon: '🔗' },
  { id: 'content-creation', title: 'Content Strategy', description: 'Expert-led, SEO-engineered copywriting that balances high-intent results with ranking power.', icon: '✍️' },
  { id: 'local-seo', title: 'Local SEO Specialist', description: 'Hyper-local dominance strategies to capture the #1 spot in the Google Map Pack and local search.', icon: '📍' },
  { id: 'ecommerce-seo', title: 'Ecommerce Specialist', description: 'Enterprise-grade product optimization and technical architecture to scale online stores.', icon: '🛍️' },
  { id: 'google-ads', title: 'Search Engine Marketing', description: 'Precision-targeted Google Ads campaigns designed for immediate lead generation and ROI.', icon: '📈' },
  { id: 'ai-automation', title: 'AI Automation Specialist', description: 'Expert implementation of custom AI workflows and agents to scale business operations and content production.', icon: '🤖' },
  { id: 'lead-generation', title: 'B2B Lead Generation', description: 'Strategic prospecting and automated outreach systems to build a predictable sales pipeline.', icon: '🎯' },
  { id: 'virtual-assistance', title: 'Operational Support', description: 'High-level operational and technical support to streamline your business workflows and scale capacity.', icon: '💼' },
  { id: 'web-design', title: 'Full-Stack Web Dev', description: 'High-performance, conversion-centered digital architecture built for speed and search dominance.', icon: '💻' }
];

export const SERVICE_DETAILS: Record<string, ServiceContent> = {
  'keyword-research': {
    id: 'keyword-research',
    slug: 'keyword-research-intent-mapping',
    title: 'Keyword Research',
    icon: '🔍',
    description: 'The foundation of every successful search strategy. We don\'t just look for words; we find the language your customers use when they are ready to buy.',
    painPoint: 'You are ranking for terms that bring traffic, but zero sales. You feel like you are shouting into a void.',
    problem: 'Traditional research focuses on volume. Modern SEO requires "Intent Mapping." You are likely targeting informational keywords for a transactional goal, leading to high bounce rates and wasted spend.',
    solution: 'We perform multi-layered intent analysis. We categorize keywords into Informational, Navigational, Commercial, and Transactional buckets to build a funnel that works.',
    importance: 'Without correct keyword targeting, every other SEO effort is a waste of time and money. It is the compass for your entire digital presence.',
    features: ['Search Intent Mapping', 'Competitor Keyword Gap Analysis', 'Long-Tail Opportunity Discovery', 'CPC & Difficulty Evaluation'],
    faqs: [
      { question: 'Why am I getting traffic but no sales?', answer: 'You are likely targeting "Informational" keywords when you need "Transactional" ones. Our research identifies exactly where your customers are in the buying journey to ensure every click has a high chance of converting. We stop the bleeding of wasted ad spend and effort on low-value traffic.' },
      { question: 'Is my competitor stealing my best customers?', answer: 'Yes, if you aren\'t ranking for their brand alternatives or specific pain-point keywords they currently own. We perform a deep gap analysis to find exactly which terms they are profiting from and build a strategy to reclaim that market share. This turns their success into your roadmap for growth.' },
      { question: 'How do I know which keywords are actually worth my time?', answer: 'We use data-driven metrics like CPC (Cost Per Click) and Keyword Difficulty combined with Search Intent to prioritize high-value targets. Focusing on the wrong terms can waste months of work; we ensure you start with the highest ROI opportunities first. Our process removes the guesswork from your SEO strategy.' },
      { question: 'Why is my search volume and data constantly fluctuating?', answer: 'Algorithm shifts and seasonal trends can make static keyword lists obsolete within weeks. We monitor these changes in real-time and adjust your targeting to capture shifting demand before your competitors do. Consistency in research leads to stability in rankings and revenue.' },
      { question: 'Can I rank for broad terms like "Insurance" or "Real Estate"?', answer: 'Ranking for ultra-broad terms is often a "Denial of Wallet" trap that yields low-quality traffic. We pivot your strategy toward high-intent long-tail keywords where competition is lower and conversion rates are significantly higher. This allows you to dominate profitable niches rather than fighting unwinnable wars.' },
      { question: 'What if I target the wrong search intent by mistake?', answer: 'Google will punish your rankings with high bounce rates if your content doesn\'t match the user\'s goal. We categorize every keyword by intent—Informational, Navigational, Commercial, or Transactional—so your landing pages always deliver what the user expects. This alignment is critical for maintaining high topical authority.' },
      { question: 'Will I see results faster if I target more keywords?', answer: 'Spreading your efforts too thin usually leads to mediocre results across the board. We recommend "Silo" targeting, where we focus on a cluster of related, high-performing keywords to gain authority quickly in one area. Quality and depth always outperform shallow breadth in modern search.' },
      { question: 'Is keyword research a one-time setup fee?', answer: 'Treating research as a one-time task is why most businesses get surpassed by more agile competitors. Markets evolve, new competitors emerge, and consumer language changes constantly. Ongoing research ensures your site remains relevant and continues to find new pockets of untapped profit.' },
      { question: 'How do you handle "Hidden" keywords my competitors don\'t know about?', answer: 'We dig into "Zero Volume" and emerging trends that tools often miss but customers are actually searching for. By the time your competitors see these in their reports, you will already own the top spot. This "First-Mover" advantage is a core part of our elite strategy.' },
      { question: 'Will this help me lower my Google Ads cost?', answer: 'Absolutely, because better keyword research leads to higher Quality Scores and more relevant landing pages. When your organic and paid strategies use the same high-intent data, your overall cost-per-acquisition drops significantly. It creates a unified growth engine that maximizes every dollar spent.' }
    ]
  },
  'on-page-seo': {
    id: 'on-page-seo',
    slug: 'technical-on-page-seo-optimization',
    title: 'Technical On-Page SEO',
    icon: '⚙️',
    description: 'The science of tuning your website for search engines while keeping it human-friendly. We optimize every pixel and tag for maximum relevance.',
    painPoint: 'Google visits your site but can\'t understand what you offer. You have great content that remains stuck on page 4.',
    problem: 'Confusing hierarchy, missing alt tags, and poor internal linking are silent killers. If Google\'s bots find "friction" in your code, they will skip you for a cleaner competitor.',
    solution: 'A 100-point technical and semantic on-page overhaul. We refine Meta titles, H-tags, Schema markup, and internal link silos to ensure 100% crawlability.',
    importance: 'On-Page SEO is the "Handshake" with Google. If your site isn\'t technically perfect, you are fighting with one hand tied behind your back.',
    features: ['Semantic Entity Optimization', 'Advanced Schema Markup', 'Internal Linking Silk Road', 'Meta Tag & Header Precision'],
    faqs: [
      { question: 'Why is my site appearing on page 10 despite having content?', answer: 'Confusing hierarchy and poor internal linking are silent killers that prevent Google from understanding your site. We fix your "Friction" points so bots can crawl and index your most important pages instantly. This ensures your hard work actually gets seen by the right audience.' },
      { question: 'Is my slow website killing my conversion rate?', answer: 'Yes, every second of delay leads to a massive drop in user trust and search rankings. We optimize your Core Web Vitals to under 2 seconds, providing the "Snap" users expect. A fast site is a high-ranking site that keeps visitors from bouncing to competitors.' },
      { question: 'What are Meta Tags and why should I care?', answer: 'Think of Meta Tags as your site\'s "Handshake" with Google and your first Impression with users. We craft compelling, high-intent titles and descriptions that boost your Click-Through Rate significantly. This gets more people to choose your link over the nine others on the page.' },
      { question: 'Why does Google keep changing its mind about my rankings?', answer: 'Algorithm updates frequently target sites with poor semantic structure or thin content silos. Our On-Page overhaul builds a resilient foundation that withstands these shifts by focusing on high-quality entities. We align your code with Google\'s current quality standards to ensure long-term stability.' },
      { question: 'What is Schema Markup and do I need it?', answer: 'Schema is a "Direct Data Line" to Google that tells search engines exactly what your business, reviews, and products are. We implement advanced Rich Snippets so your search results look more attractive with stars and prices. This technical edge often doubles or triples your organic visibility overnight.' },
      { question: 'Will fixing my internal links really make a difference?', answer: 'Internal linking is the "Map" that distributes authority across your entire website. We fix orphaned pages and build logical silos so your best content gets the "Link Juice" it deserves. This helps Google discover your new posts faster and ranks your entire site as a cohesive authority.' },
      { question: 'Is my mobile site version just as important as desktop?', answer: 'Google now uses "Mobile-First Indexing," meaning if your mobile site is clunky, your rankings will suffer everywhere. We ensure your design and performance are flawless on smartphones, which is where over 60% of your customers likely are. This eliminates the "Mobile Penalty" that many older sites face.' },
      { question: 'Can On-Page SEO fix my duplicate content issues?', answer: 'Yes, we use canonical tags and proper redirects to tell Google which version of a page is the "Master" copy. This prevents "Keyword Cannibalization" where your own pages fight each other for the same spot. It clears the path for your primary pages to reach the top position.' },
      { question: 'How do H-Tags affect my reader\'s engagement?', answer: 'Properly structured H1-H4 headers create a readable path that keeps users engaged and lowers bounce rates. We refine your hierarchy so both bots and humans can scan your content and find value in seconds. This improves your "Dwell Time," which is a secondary but vital ranking signal.' },
      { question: 'Do I need to update my On-Page SEO every month?', answer: 'The competitive landscape and Google\'s standards shift, so what worked last year might be holding you back now. Regular audits ensure your technical health remains in the "Green" zone and your content stays perfectly optimized. It prevents the slow "Ranking Decay" that hits neglected websites.' }
    ]
  },
  'off-page': {
    id: 'off-page',
    slug: 'digital-pr-authority-backlinks',
    title: 'Digital PR & Authority',
    icon: '🔗',
    description: 'Building the digital reputation your brand deserves. We secure high-authority endorsements from the most trusted names in your industry.',
    painPoint: 'Your content is better than your competitors, but they outrank you because they have more "Authority." You feel cheated by the algorithm.',
    problem: 'Backlinks are votes of confidence. If you have zero high-quality links, Google assumes you aren\'t a leader. Buying cheap links often leads to devastating penalties.',
    solution: 'Elite Digital PR and white-hat outreach. We earn links from real sites with actual traffic, building a "Moat" of authority that is impossible for competitors to cross.',
    importance: 'In competitive niches, Authority is the final decider. A strong backlink profile makes your rankings resilient against algorithm updates.',
    features: ['High-DR Outreach Campaigns', 'Digital PR & Guest Placement', 'Broken Link Reclamation', 'Competitor Link Gap Analysis'],
    faqs: [
      { question: 'Are backlinks still a "Make or Break" factor for SEO?', answer: 'In competitive niches, high-quality backlinks are the primary way Google determines who the authority is. Without a strong "Moat" of links, your site will struggle to outrank established competitors regardless of your content. We build that authority through elite, white-hat outreach to industry-leading sites.' },
      { question: 'Will cheap "Fiverr" style links get my site penalized?', answer: 'Yes, buying low-quality, automated links is a guaranteed way to trigger a "Manual Action" or algorithm penalty from Google. We focus on Digital PR and real placement on sites with actual traffic, ensuring your growth is safe and sustainable. Quality placements build your reputation; spam ruins it forever.' },
      { question: 'How do you find high-authority sites that will actually link to me?', answer: 'We use advanced relationship-based outreach and "Bridge Content" that editors actually want to share with their audience. Our process involves finding sites that reach your target customers and earning a mention that drives both SEO value and referral traffic. This turns link building into a genuine marketing asset.' },
      { question: 'Why is my domain authority (DA/DR) not moving?', answer: 'You likely have a "Link Gap" compared to your competitors, meaning they are gaining authority faster than you are. We analyze their backlink profiles to find their most valuable sources and then secure similar or better placements for you. This aggressive, data-led approach closes the gap and puts you in the lead.' },
      { question: 'What is Digital PR and how does it help my SEO?', answer: 'Digital PR involves getting your brand featured in major news outlets and industry blogs to build massive trust. These "Power Links" act as a huge signal to Google that you are a legitimate leader in your space. It combines brand building with technical SEO dominance for a dual-threat advantage.' },
      { question: 'Do I need specific "Niche Relevant" links?', answer: 'Google values relevancy above almost everything else; a link from a related industry site is worth 100 links from random blogs. We strictly target sites that relate to your product or service to maximize the "Link Juice" transfer. This relevancy helps Google categorize your site as a topical expert.' },
      { question: 'Can backlinks actually drive sales directly?', answer: 'When we place your link on a high-traffic site where your customers already hang out, you get "Referral Traffic" that is ready to buy. Most agencies only look at SEO metrics, but we look at the potential for real-world growth and new customer acquisition. It\'s a strategic partnership, not just a technical metric.' },
      { question: 'Is "Internal Linking" as important as "Backlinking"?', answer: 'Internal links distribute the power you get from external backlinks throughout your entire site. Without a proper internal structure, the authority you build gets "Trapped" on just one or two pages. We optimize your internal architecture to ensure every service page benefits from your Off-Page success.' },
      { question: 'How long does it take for a new backlink to affect my rankings?', answer: 'It typically takes 3-6 weeks for Google to discover, index, and recalculate your authority after a new link is live. SEO is a cumulative game, so the real power comes from the consistent growth of your link profile over several months. This steady "Link Velocity" signals to Google that your brand is becoming more important.' },
      { question: 'Will I lose my rankings if I stop building links?', answer: 'Your competitors are constantly building their own authority, so standing still is effectively moving backward. A consistent, monthly link-building cadence is required to maintain your position and protect your "Moat" from new challengers. We ensure your authority remains unshakeable against any competitor assault.' }
    ]
  },
  'content-creation': {
    id: 'content-creation',
    slug: 'seo-content-creation-strategy',
    title: 'Content Strategy',
    icon: '✍️',
    description: 'Strategic storytelling engineered for search. We produce high-authority content that satisfies users and dominates keywords simultaneously.',
    painPoint: 'You are publishing blogs that no one reads. Your content library feels like a graveyard of wasted effort.',
    problem: 'Generic content fails "Helpful Content" standards. If your writing doesn\'t provide unique value or answer a specific query, Google will ignore it.',
    solution: 'The "Expert-Led" content engine. We combine deep subject matter expertise with SEO optimization to create content that users bookmark and share.',
    importance: 'Content is the fuel for your SEO engine. Without high-quality, relevant content, you have nothing to rank and nothing to convert.',
    features: ['Search Intent Content Silos', 'Expert Ghostwriting', 'Interactive Tools & Lead Magnets', 'Multimedia SEO Integration'],
    faqs: [
      { question: 'Why is my content not getting any traction or organic reach?', answer: 'Generic, AI-generated content often fails Google\'s "Helpful Content" standards because it lacks unique value or expert insight. We build "Expert-Led" content silos that answer specific user questions better than anyone else in your industry. This approach satisfies both Google\'s algorithms and your customers\' needs.' },
      { question: 'How often should I be posting new blogs or articles?', answer: 'Consistency is far more important than raw volume; posting one high-quality, long-form post a week beats daily thin content. We create a sustainable "Content Engine" tailored to your resources and market demand to ensure your growth never stalls. Our goal is to make every post a ranking asset, not just filler.' },
      { question: 'Is my content too long or too short for SEO?', answer: 'Content should be exactly as long as needed to answer the user\'s query comprehensively, which we determine through competitor analysis. We avoid "Fluff" and focus on depth, ensuring we cover the main topic and all its semantic sub-topics. This strategy builds Topical Authority that Google views as the gold standard.' },
      { question: 'Can I use AI to write all my website content?', answer: 'Pure AI content without human editing often lacks the brand voice and "Experience" markers Google currently rewards. We use an "AI+Expert" hybrid model that scales your output while maintaining the deep expertise that drives real conversions. This keeps you safe from future algorithm updates targeting automated spam.' },
      { question: 'What are "Content Silos" and do I need them?', answer: 'Silos group related topics together to show Google you have deep knowledge in a specific area. Without them, your site looks like a random collection of pages rather than a focused authority. We architect your content in logical networks that make it easy for bots to crawl and for users to find what they need.' },
      { question: 'How do I turn my blog readers into paying customers?', answer: 'Most blogs fail because they lack a clear "Call to Value" or relevant lead magnet within the text. we integrate high-converting CTA points and "Buyer Intent" cues so every article acts as a salesperson for your brand. This transforms your website from a library into a lead-generation machine.' },
      { question: 'Why should I bother updating my old articles?', answer: 'Ranking decay is real; fresh content almost always outranks static, outdated posts over time. We perform regular "Content Refresh" cycles to keep your best assets performing at their peak and to capture new keyword opportunities. This protects your historical traffic and compounds your overall growth.' },
      { question: 'What is "Ghostwriting" and how does it work for my brand?', answer: 'We capture your unique perspective and subject matter expertise and translate it into a high-ranking, professional brand voice. You get the credit and authority while we do the heavy lifting of research and optimization. It allows you to be the "Expert" without spending hours writing every week.' },
      { question: 'Do I need videos and images in my blog posts?', answer: 'Multimedia signals tell Google your content is high-quality and keeps users on your page longer, which is a major ranking factor. We integrate custom graphics, screenshots, and video embeds to make your content the most helpful version on the web. This boosts engagement metrics and lowers your bounce rate significantly.' },
      { question: 'What are "Lead Magnets" and how do they grow my business?', answer: 'Lead magnets are high-value tools or guides offered for free in exchange for a user\'s email or contact info. We engineer these specifically to solve your audience\'s most painful problems, building a list of warm leads you can market to long-term. It ensures that even visitors who aren\'t ready to buy today stay connected to your brand.' }
    ]
  },
  'local-seo': {
    id: 'local-seo',
    slug: 'local-seo-specialist-google-maps',
    title: 'Local SEO Specialist',
    icon: '📍',
    description: 'Dominating your immediate geographic area. We make sure that when someone nearby searches for your service, you are the first name they see.',
    painPoint: 'Your competitors are getting all the local phone calls while your business remains invisible on the map.',
    problem: 'Google prioritizes "Proximity, Prominence, and Relevance." If your Google Business Profile is incomplete or your local citations are inconsistent, you are disqualified from the Local Pack.',
    solution: 'A hyper-local dominance strategy. We optimize your GMB, build high-quality local citations, and create geo-specific content that screams "Authority" to Google.',
    importance: 'For physical businesses, Local SEO is the difference between a thriving storefront and a ghost town. 46% of all Google searches are seeking local information.',
    features: ['GMB Optimization & Management', 'Local Citation Building', 'Review Strategy Implementation', 'Geo-Targeted Content Silos'],
    faqs: [
      { question: 'Why am I not showing up in the "Map Pack" on Google Search?', answer: 'Proximity, Prominence, and Relevance are Google\'s core local ranking factors. If your Google Business Profile is incomplete or your local citations are inconsistent, you are likely being disqualified from the top spots. We optimize your profile and listing data to ensure you dominate your immediate geographic area.' },
      { question: 'Is my Google Business Profile (GBP) enough to rank locally?', answer: 'A profile alone isn\'t enough; you need high-quality local content and consistent citations across the web to prove your "Prominence" to Google. We build a network of local mentions that act as a signal of trust, showing search engines you are the leader in your town. This combined approach is what actually drives foot traffic and phone calls.' },
      { question: 'Why are my competitors getting more reviews than I am?', answer: 'They likely have a proactive "Review Acquisition" strategy in place, while you are waiting for customers to act on their own. We implement automated review systems that make it easy for happy clients to leave 5-star feedback consistently. This social proof is a major ranking signal and the primary driver of customer trust.' },
      { question: 'What are "Citations" and do I really need them?', answer: 'Citations are mentions of your business name, address, and phone number (NAP) across directories like Yelp and Yellow Pages. If this data is inconsistent, Google loses trust in your location and drops your rankings. We clean up and build new, high-authority citations to ensure your business data is flawless and authoritative.' },
      { question: 'How do I rank for services in cities where I don\'t have a physical office?', answer: 'This requires specialized "Service Area" pages and geo-targeted content that demonstrates your expertise in those specific regions. We create localized silos that show Google you are a relevant choice for customers in nearby towns. This expands your reach without the overhead of renting more physical space.' },
      { question: 'Will Local SEO actually drive more phone calls and foot traffic?', answer: 'Absolutely—local searches have "High Intent," meaning most people searching for a local service intend to visit or call within 24 hours. We focus on optimizing for "Near Me" terms that put your business in front of customers exactly when they are ready to buy. It\'s the most direct way to grow a physical or service-based business.' },
      { question: 'Why is my "NAP" (Name, Address, Phone) consistency so important?', answer: 'Google uses NAP data to verify your physical existence; even a small discrepancy like "Street" vs "St." can cause confusion and lower your authority. We perform a total "NAP Cleanup" to ensure every mention of your business is perfectly synchronized across the entire web. This builds a foundation of absolute trust with search algorithms.' },
      { question: 'Can I hide my address on Google Business Profile and still rank?', answer: 'Yes, if you are a "Service Area Business" (like a plumber or consultant), we can optimize your profile to rank in your target regions without showing a home office. We focus on your service areas and local reviews to build prominence regardless of a public address. This allows you to maintain privacy while still dominating the local search market.' },
      { question: 'What are "Geo-Targeted Content Silos"?', answer: 'These are content clusters designed to answer local questions and solve problems specific to your city or region. We create blogs and landing pages that mention local landmarks, events, and community-specific needs to prove your "Local Relevancy." This hyper-focus makes you the obvious choice over generic, national competitors.' },
      { question: 'How long does it take to see results from Local SEO?', answer: 'Local results can often be seen in 30-90 days as we clean up your data and optimize your Google Business Profile. Because local competition is often lower than national, dedicated work in this area yields some of the fastest ROIs in the digital marketing world. We start with the quickest wins to get your phones ringing as soon as possible.' }
    ],
    pricingId: 'local-seo-pricing'
  },
  'ecommerce-seo': {
    id: 'ecommerce-seo',
    slug: 'ecommerce-seo-specialist-sales-growth',
    title: 'Ecommerce Specialist',
    icon: '🛍️',
    description: 'Scaling online stores through search. We optimize product pages and category structures to capture customers at the exact moment of purchase.',
    painPoint: 'You are spending thousands on ads because your product pages don\'t get any organic traffic. Your margins are being eaten alive.',
    problem: 'Thin content, duplicate product descriptions, and messy faceted navigation (filters) create a nightmare for SEO crawling and indexing.',
    solution: 'Enterprise-grade Ecommerce architecture. We optimize category hierarchies, implement Product Schema, and craft unique, high-converting product copy.',
    importance: 'Organic ecommerce traffic has the highest ROI of any channel. Ranking for "Buy [Product]" terms is literally printing money for your brand.',
    features: ['Product & Review Schema', 'Faceted Navigation Optimization', 'Category Page Power-Ups', 'Shopping Intent Targeting'],
    faqs: [
      { question: 'Why is my store getting visitors but zero sales?', answer: 'Thin content and a confusing site hierarchy are likely killing your conversion rates and search rankings. We build "Conversion-Centered" category pages and unique product descriptions that answer every buyer objection before they arise. This transforms your store from a catalog into a high-performing sales machine.' },
      { question: 'How do I rank for competitive product keywords against Amazon?', answer: 'You can\'t beat them on volume, but you can beat them on "Authority" and specific long-tail buyer intent. We build high-value product schema and expert topical maps that prove to Google you are a specialized expert. This allows you to capture "Buy Now" traffic that the big retailers often overlook.' },
      { question: 'What is "Product Schema" and why do I need it?', answer: 'Schema acts as a direct line to Google, showing your prices, stock status, and star reviews directly in the search results. We implement advanced JSON-LD markup so your products look more attractive and trustworthy than your competitors. This technical edge significantly increases your click-through rate and trust score.' },
      { question: 'Is my "Faceted Navigation" (Filters) hurting my SEO?', answer: 'Yes, if not handled correctly, filters create thousands of duplicate pages that confuse Google and waste your "Crawl Budget." We optimize your technical architecture so robots only see your most valuable, unique pages. This clears the path for your main categories to reach the top position.' },
      { question: 'Why are my category pages not ranking?', answer: 'Category pages are often your highest-ROI assets, but they frequently lack the "Topical Authority" needed to rank for broad terms. We build content silos and internal link maps that funnel power from your blog directly into your most profitable categories. This turns a simple listing into an authoritative landing page.' },
      { question: 'Will a faster store really increase my revenue?', answer: 'Every 100ms of delay can cause a 7% drop in sales; slow sites are the #1 killer of ecommerce growth. We optimize your images, server response times, and mobile performance to ensure a "Snap" experience. A fast store keeps users shopping and boosts your search rankings through better engagement metrics.' },
      { question: 'Can Ecommerce SEO help me lower my Facebook Ads spend?', answer: 'By capturing high-intent organic traffic, you reduce your reliance on expensive interrupted-based advertising. When you rank for "Buy [Product]" terms, you are getting new customers at a fraction of the cost-per-acquisition of social media ads. It builds long-term equity that makes your business more resilient.' },
      { question: 'How do I deal with "Out of Stock" products in SEO?', answer: 'Simply deleting pages or letting 404 errors build up will destroy your hard-earned rankings. We implement smart redirects and "Related Product" link structures that keep the SEO power on your site while guiding users to available items. This preserves your authority and ensures you never lose a potential sale.' },
      { question: 'Do I need unique product descriptions for every item?', answer: 'Generic manufacturer descriptions are "Duplicate Content" that Google will eventually ignore or penalize. We craft high-converting, unique copy that highlights the benefits and solutions your products provide. This helps you rank for a wider variety of terms while building a stronger case for why a customer should buy.' },
      { question: 'Is mobile SEO more important for Ecommerce than desktop?', answer: 'Over 70% of online shopping now happens on mobile devices, so "Mobile-First" is a requirement, not an option. We ensure your checkout process and product displays are flawless on smartphones to prevent abandoned carts. This captures the modern shopper exactly where they are most comfortable.' }
    ]
  },
  'google-ads': {
    id: 'google-ads',
    slug: 'google-ads-sem-ppc-management',
    title: 'Search Engine Marketing',
    icon: '📈',
    description: 'Immediate market penetration. We build high-ROI PPC campaigns that bypass the wait and put your brand at the top of the search results today.',
    painPoint: 'You tried Google Ads before and "burned" your money with zero leads. You feel like the platform is just too expensive.',
    problem: 'Bad targeting and poor Quality Scores lead to expensive clicks that don\'t convert. Most agencies focus on impressions rather than actual profit.',
    solution: 'Precision-targeted Search & Performance Max campaigns. We focus on high-intent keywords, landing page synergy, and strict conversion tracking.',
    importance: 'SEM is the perfect bridge for new brands. While SEO builds long-term equity, Google Ads captures immediate demand to keep your cash flow healthy.',
    features: ['High-Intent Keyword Bidding', 'Conversion-Optimized Landing Pages', 'A/B Ad Copy Testing', 'Negative Keyword Sculpting'],
    faqs: [
      { question: 'Why are my Google Ads clicks so expensive but not converting?', answer: 'Bad targeting and poor "Quality Scores" mean you are paying a premium for low-quality, irrelevant traffic. We refine your keyword silos and ad copy to ensure you only pay for high-intent visitors who are ready to buy. This stops the "Bleeding" of your marketing budget and increases your overall ROI.' },
      { question: 'Is my "Landing Page" the reason my ads are failing?', answer: 'An ad is only as good as the page it sends people to; if your landing page doesn\'t match the ad\'s promise, users will bounce instantly. We build "High-Convert" landing pages that are perfectly synchronized with your ad group and search intent. This synergy lowers your cost-per-click and raises your sales numbers.' },
      { question: 'Can Google Ads work if I have a small budget?', answer: 'Yes, if we focus narrowly on "Winner" keywords and implement strict negative keyword filtering to block wasted spend. We don\'t chase volume; we chase profit, ensuring every dollar is used to capture the most likely buyers first. This "Precision Bidding" strategy allows small budgets to outperform bigger, sloppier competitors.' },
      { question: 'What are "Negative Keywords" and why do I need them?', answer: 'Negative keywords are a "Shield" that prevents your ads from showing up for irrelevant searches (e.g., "Free" or "Career" when you are selling a service). Without them, you can easily waste 30-50% of your budget on clicks that will never convert. We perform daily "Search Term Sculpting" to keep your campaigns ultra-profitable.' },
      { question: 'Why should I do Google Ads if I\'m already doing SEO?', answer: 'Ads provide the immediate data and cash flow that SEO needs time to build—they are the perfect dual-growth engine. SEO builds long-term equity, while Ads allow you to dominate the top spot for your most profitable terms right now. Using both strategies together protects your brand from every angle of a search result.' },
      { question: 'What is a "Quality Score" and how does it lower my costs?', answer: 'Quality Score is Google\'s way of rewarding relevant advertisers with lower prices and better ad positions. We optimize your keywords, ad copy, and landing pages to ensure your score is consistently high. This means you can outrank competitors while paying less than they do for the same click.' },
      { question: 'How do you prevent "Click Fraud" from competitors?', answer: 'We use advanced IP blocking and behavior-tracking tools to identify and stop malicious bot or competitor clicks. This ensures your budget is spent on real potential customers rather than being wasted by bad actors. We protect your account like it\'s our own money on the line.' },
      { question: 'What are "Performance Max" (PMax) ads and do I need them?', answer: 'PMax uses Google\'s AI to find your customers across Search, YouTube, Display, and Maps all in one campaign. It\'s incredibly powerful for scaling, but it requires expert "Guardrails" to ensure the AI doesn\'t waste your money on low-quality reach. We provide the human strategy needed to make Google\'s AI work for you, not against you.' },
      { question: 'Will I see leads and sales as soon as the ads go live?', answer: 'Yes, Google Ads is a "Switch" that puts you in front of customers immediately after launch. While it takes time to optimize for peak efficiency, you will see real-world traffic and data from day one. This instant "Feedback Loop" is invaluable for testing new markets and refining your total growth strategy.' },
      { question: 'How do you measure the success of a campaign?', answer: 'We focus on "Profit metrics"—Cost Per Lead and Return on Ad Spend (ROAS)—rather than just "Vanity metrics" like impressions. You get a clear report every month showing exactly how many dollars you made for every dollar you spent. Our goal is absolute transparency and predictable revenue growth.' }
    ],
    pricingId: 'sem-pricing'
  },
  'ai-automation': {
    id: 'ai-automation',
    slug: 'ai-automation-specialist-business-scaling',
    title: 'AI Automation Specialist',
    icon: '🤖',
    description: 'Scaling your growth with precision. We integrate advanced AI models (Gemini, GPT) and custom agent workflows to automate the heavy lifting of data analysis, content scaling, and business operations.',
    painPoint: 'You are overwhelmed by manual processes and falling behind competitors who use AI to work 10x faster. You feel like you\'re only scratching the surface of what AI can do.',
    problem: 'Most businesses use AI only at a "Chat" level. They lack the specialized systems to integrate LLMs into their actual business workflows, resulting in fragmented operations and missed efficiency gains.',
    solution: 'We build high-performance AI business systems. From custom GPT agents and n8n workflows to automated growth analysis, we turn AI from a novelty into your most productive "digital employee."',
    importance: 'Speed is the new competitive advantage. Those who leverage an AI specialist to automate their growth systems can outproduce entire departments with a fraction of the headcount and overhead.',
    features: ['Custom LLM Workflow Design', 'n8n & Zapier Agent Integration', 'AI-Powered Business Ops', 'Automated Growth Data Analysis'],
    faqs: [
      { question: 'What does an AI Automation Specialist actually do for my business?', answer: 'We bridge the gap between "Generic AI" and "Business Reality." Instead of just using a chatbot, we build automated systems that handle keyword research, content drafting, technical monitoring, and data scraping on autopilot. This "Digital Workforce" allows you to scale your output by 10x while reducing your manual effort to near zero.' },
      { question: 'Can AI really handle high-level specialist tasks without breaking?', answer: 'Yes, when coupled with specialist-designed workflows and "Safety Guardrails." We don\'t just let the AI run wild; we build strict logical paths that ensure every output meets your business standards. This "Specialist-Led" approach provides the reliability of a human with the speed of a machine.' },
      { question: 'Will Google penalize my site if I use an AI specialist to build systems?', answer: 'Google rewards "Helpful Content" and efficient sites regardless of how it was produced, so long as it satisfies the user\'s query. Our AI workflows are designed to add unique value, not just generate spam, which keeps you safe from future algorithm updates. We focus on "Hybrid" systems that prioritize quality over mindless volume.' },
      { question: 'How do custom AI agents differ from just using ChatGPT?', answer: 'Generic ChatGPT is a tool; custom agents are "Specialized Employees." We build agents that have access to your specific business data, industry jargon, and brand voice. They can perform specific, complex tasks across multiple platforms like Slack, n8n, and your CMS, performing work while you sleep.' },
      { question: 'What is the "AI+Human" Content Specialist model?', answer: 'It\'s a system where AI handles the research and initial structure, while a specialist editor performs the final "Nuance and Fact-Check." This ensures your brand sounds authoritative and verified while benefiting from the massive speed of automation. It\'s the only way to dominate high-volume content markets today.' },
      { question: 'Is my business too small or too unique for AI automation?', answer: 'The more "Unique" and "Complex" your business, the higher the ROI on automation. We specialize in mapping out your specific "Bottlenecks"—those repetitive tasks that keep you busy—and building custom tools to eliminate them. Automation is the great equalizer that lets small firms compete with global giants.' },
      { question: 'Can you build custom AI tools for my specific niche or industry?', answer: 'Absolutely, we build "Proprietary Agents" that understand your specific industry jargon, customer pain points, and product benefits. This isn\'t generic automation; it\'s a custom brain for your marketing engine that thinks like you do. It provides a massive competitive advantage that others cannot easily duplicate.' },
      { question: 'How does AI help with specialist-level technical site auditing?', answer: 'AI can constantly monitor your site for broken links, slowed speeds, or indexing issues in real-time, 24/7. Instead of waiting for a monthly report, you get immediate alerts so you can fix leaks before they damage your rankings. It\'s the "Always-On" security system your digital presence needs to remain healthy.' },
      { question: 'What is "Specialist LLM Data Analysis"?', answer: 'It\'s the process of using Large Language Models to find hidden patterns in your search data and customer behavior that a human analyst might spend weeks looking for. We translate this complex data into "Actionable growth insights" that tell you exactly what to do next to increase revenue. It turns your analytics into a roadmap.' },
      { question: 'What happens to my current team when we implement these specialist systems?', answer: 'Your team is freed from "Grunt Work" and can finally focus on high-value creative work and closing deals. Automation doesn\'t replace your specialists; it acts as an "Exoskeleton" that makes every team member 10x more effective. Your business becomes a high-speed innovation machine.' }
    ],
    pricingId: 'ai-automation-pricing'
  },
  'lead-generation': {
    id: 'lead-generation',
    slug: 'b2b-lead-generation-sales-pipeline',
    title: 'B2B Lead Generation',
    icon: '🎯',
    description: 'Predictable pipeline building. We combine SEO authority with strategic outreach to ensure your sales team always has a calendar full of prospects.',
    painPoint: 'Your business goes through "feast or famine" cycles. You don\'t know where your next customer is coming from.',
    problem: 'Relying on referrals is not a strategy. Without a proactive system to identify and engage prospects, your growth is capped by luck.',
    solution: 'Multichannel Lead Acquisition. We build high-converting lead magnets, landing pages, and automated outreach sequences that filter for your ideal client.',
    importance: 'Leads are the lifeblood of B2B. A systematic approach to lead gen ensures you are always in control of your business trajectory.',
    features: ['Lead Magnet Engineering', 'Automated Outreach Silos', 'CRM Flow Integration', 'ICP (Ideal Customer) Profiling'],
    faqs: [
      { question: 'Why is my business stuck relying on word-of-mouth?', answer: 'Referrals are great, but they aren\'t a "Predictable Strategy" for scaling a modern business. We build a systematic "Lead Acquisition" engine that proactively finds and engages your ideal customers every single day. This puts you in total control of your growth rather than hoping for the next recommendation.' },
      { question: 'Am I wasting my time on leads that will never buy?', answer: 'Most lead gen fails because of poor "Qualification," leading to a sales team that is burned out on bad calls. We implement "Filtering Silos" and scoring systems that ensure you only talk to prospects who have the budget and authority to buy. This focus on "Lead Quality" over quantity maximizes your time and ROI.' },
      { question: 'What is a "Lead Magnet" and do I really need one?', answer: 'A Lead Magnet is a high-value tool or resource offered for free in exchange for contact info, solving a specific pain point for your audience. Without one, you are likely losing 90% of your visitors who aren\'t ready to buy today but would join your list if pushed. It is the core "Value Exchange" that builds your marketing database.' },
      { question: 'Can automated outreach actually feel personalized and authentic?', answer: 'Yes, if we use "Segmented Data" and high-level ICP (Ideal Customer Profile) research to ensure every message is relevant to the receiver. We don\'t do "Blast Spam"; we do "Scalable Personalization" that feels like a 1-on-1 reach-out from an expert. This build trust and authority from the very first interaction.' },
      { question: 'How do I build a sustainable "Lead Pipe" from scratch?', answer: 'We start by defining your perfect customer and finding exactly where they live online—whether it\'s LinkedIn, Search, or Industry Forums. We then engineer the landing pages, magnets, and sequences needed to capture them and funnel them into your CRM. It\'s a complete "End-to-End" system that takes the mystery out of sales.' },
      { question: 'Why are my landing pages getting visits but no conversions?', answer: 'Your page likely suffers from "Friction" points or a weak offer that doesn\'t solve a painful enough problem. We rebuild your pages with "Psychological Optimization" and clear, benefit-driven copy that moves users to take action. This lowers your cost-per-lead and makes every marketing dollar work harder.' },
      { question: 'How long does it take for a lead gen system to start working?', answer: 'While SEO lead gen takes time, our "Outreach and Paid" strategies can often drive qualified leads within the first 14 days. We focus on the "Quickest Wins" first to keep your cash flow healthy while we build the long-term organic assets. This balanced approach ensures steady, unshakeable growth.' },
      { question: 'Does this system integrate with my current CRM (HubSpot/Salesforce)?', answer: 'Absolutely, we specialize in "Seamless Flow" where every lead is automatically captured, scored, and delivered to your preferred platform. No more manual data entry or lost opportunities; your sales team just wakes up to a list of ready-to-talk prospects. It eliminates the technical complexity of scaling a sales team.' },
      { question: 'What is "ICP Profiling" and why is it so critical?', answer: 'ICP stands for Ideal Customer Profile—the 20% of clients who provide 80% of your revenue and profit. We strictly target this elite group so you don\'t waste money or time on "Low-Value" customers who take up all your resources. It\'s the difference between a busy business and a profitable one.' },
      { question: 'Will a lead gen system help me increase my prices?', answer: 'When you have a "Surplus of Leads," you can afford to be choosy and only work with clients who value your worth. This shift from "Desperation" to "Selectivity" is the fastest way to raise your prices and improve your margins. A strong lead engine provides the confidence to say no to bad deals and yes to high-growth ones.' }
    ]
  },
  'virtual-assistance': {
    id: 'virtual-assistance',
    slug: 'virtual-assistant-operational-support',
    title: 'Operational Support',
    icon: '💼',
    description: 'Operational excellence on autopilot. We provide elite administrative support to handle the technical and repetitive tasks of your business.',
    painPoint: 'You are spending 80% of your time on $10/hour tasks. You are too busy "working in" the business to "work on" the business.',
    problem: 'Founder burnout. If you are handling every data entry point, email, and technical fix, you are the bottleneck preventing your own scaling.',
    solution: 'High-Level Operational Support. We provide specialized VAs who understand SEO, CRM management, and business ops to act as your force multiplier.',
    importance: 'Scaling requires delegation. Elite VA support allows you to focus 100% on high-level strategy and closing big deals.',
    features: ['CRM & Workflow Management', 'Technical Site Maintenance', 'Content Management & Posting', 'Research & Data Scraping'],
    faqs: [
      { question: 'Am I stuck doing "Grunt Work" instead of growing my business?', answer: 'Founders often become their own bottleneck by handling data entry, scheduling, and routine site management themselves. We provide specialized VAs who understand SEO and Business Ops to act as your "Force Multiplier." This allows you to reclaim 20-30 hours a week to focus 100% on high-level strategy and closing deals.' },
      { question: 'Can I really trust a Virtual Assistant with my technical SEO tasks?', answer: 'Generic VAs aren\'t enough; you need specialists who are trained in CRM management, Content Posting, and Technical Maintenance. We build your systems and train the support team so you have a "Turn-Key" operation that runs without your constant supervision. You get elite, specialized support that feels like an extension of your own brain.' },
      { question: 'How do I avoid the headache of hiring and training new staff?', answer: 'Hiring is a massive time-sink that often results in "Performance Gaps" if you don\'t have a system. We handle the training and operational setup so your new support team is ready to deliver value from day one. It eliminates the "Trial and Error" phase of scaling your workforce.' },
      { question: 'Is my CRM (HubSpot/Salesforce) becoming a mess of messy data?', answer: 'Disorganized data is worse than no data; it leads to lost leads and poor sales decisions. Our specialists perform "Data Cleanup" and ongoing management to ensure your pipeline is always clear and accurate. This provides the "Visibility" you need to make confident, aggressive growth choices.' },
      { question: 'Why should I bother with a VA for my basic site maintenance?', answer: 'Regular "Technical Health" checks—like fixing broken links and updating plugins—are critical for long-term SEO but are a waste of a founder\'s time. We automate this work so your site is always in the "Green" zone without you ever having to look at a backend dashboard. It\'s the "Peace of Mind" that allows you to focus on innovation.' },
      { question: 'Can a Virtual Assistant handle my content posting and social updates?', answer: 'Consistency is the #1 killer of content marketing; most businesses start strong and then stall when they get busy. Our specialists handle the "Logistics" of posting, scheduling, and basic engagement so your brand remains active 24/7. This ensures your growth engine never stops running, even when you are on vacation.' },
      { question: 'What is "Operational Scale" and do I need it?', answer: 'Operational Scale is having the "Systems + Team" needed to handle a 10x increase in customers without breaking. We build the workflows and provide the support needed to turn your business from a "One-Person Show" into a scalable entity. It provides the "Infrastructure" required for unshakeable market dominance.' },
      { question: 'How do you handle research and data scraping for my outreach?', answer: 'Finding its high-quality data for lead gen is slow, manual work that kills your momentum. Our specialists use advanced tools and manual "Verification" to build lists of your perfect prospects that are 100% ready for outreach. This keeps your sales pipeline full of "Warm Leads" without you ever touching a spreadsheet.' },
      { question: 'What\'s the difference between a "General VA" and a "Force Multiplier"?', answer: 'A General VA waits for instructions; a Force Multiplier understands your business goals and proactively solves problems before they reach your desk. We specialize in the latter, providing high-level support that actually moves the needle on your revenue. You don\'t just get a helper; you get a "Growth Partner."' },
      { question: 'Will this actually pay for itself in terms of ROI?', answer: 'If your time is worth $100+/hour and you spend 20 hours a week on $15/hour tasks, you are losing $1,700 every single week. By delegating these tasks, the ROI is immediate through "Opportunity Reclamation"—the ability to focus on the high-value work that only you can do. It\'s the fastest way to increase your personal and business profitability.' }
    ]
  },
  'web-design': {
    id: 'web-design',
    slug: 'full-stack-web-development-seo-performance',
    title: 'Full-Stack Web Dev',
    icon: '💻',
    description: 'High-performance digital architecture. We build websites that don\'t just look beautiful—they are engineered to rank and optimized to convert.',
    painPoint: 'Your website is slow, hard to navigate, and hasn\'t produced a lead in months. It feels like a liability, not an asset.',
    problem: 'A "pretty" site that fails Core Web Vitals is useless. Most developers ignore SEO during the build, leading to technical debt that prevents you from ever ranking.',
    solution: 'SEO-First Engineering. We build on lightweight, fast stacks with clean code, logical site hierarchy, and "Conversion-Centered Design" principles.',
    importance: 'Your website is your 24/7 salesperson. If it\'s slow or confusing, you are burning your marketing budget before it has a chance to work.',
    features: ['Core Web Vitals Optimization', 'Mobile-First Responsive Design', 'Conversion Rate Optimization (CRO)', 'Clean Architecture & Schema Integration'],
    faqs: [
      { question: 'Why does my website look "Pretty" but fail to generate sales?', answer: 'Most designers focus on "Aesthetics" while ignoring the "Conversion Psychology" and SEO needed to build a business. We use "Conversion-Centered Design" to ensure that every pixel is built to move a user toward a specific action. A beautiful site is only successful if it acts as your highest-performing salesperson.' },
      { question: 'Is my slow website hurting my Google rankings?', answer: 'Google uses "Core Web Vitals" as a major ranking factor; if your site takes more than 3 seconds to load, you are being penalized. We optimize your "LCP" and "FID" scores through elite-level engineering and lightweight stacks. A fast site provides the healthy "Experience" signals Google rewards with top spots.' },
      { question: 'Can my website be "SEO-Ready" from the very first day?', answer: 'Yes, if the technical architecture, URL structures, and "Schema Markup" are built correctly from the ground up. Most agencies build first and "Fix" SEO later, which is like trying to fix a foundation after the house is built. We integrate SEO into the very fabric of your site so you start with a massive competitive edge.' },
      { question: 'Will a custom website really outperform a cheap template or theme?', answer: 'Templates are bloated with "Dead Code" that slows your site down and makes it look like 10,000 other businesses. We build custom-engineered solutions that are lightweight, unique to your brand, and perfectly optimized for your specific goals. This "Clean Architecture" makes your site easier for Google to crawl and for users to trust.' },
      { question: 'How do I ensure my website looks perfect on every mobile device?', answer: 'We use "Mobile-First Design" principles, ensuring that your layout and performance are flawless on smartphones before we even look at desktops. Since over 60% of your traffic is likely on mobile, this is not a choice—it\'s a requirement for survival. We eliminate "Mobile Friction" to ensure you never lose a touch-screen customer.' },
      { question: 'What is "Conversion Rate Optimization" (CRO) and do I need it?', answer: 'CRO is the science of turning more of your current traffic into paying customers through better design and layout. We don\'t just build a site; we build a "Funnel" that guides users from curiosity to a lead or sale. This ensures you get maximum revenue from every visitor you work hard to acquire through SEO.' },
      { question: 'Is my website secure against basic attacks and data breaches?', answer: 'A hacked site is a death sentence for your SEO and user trust; "Hardened Security" must be a core part of your build. We implement advanced firewalling, secure headers, and regular updates to ensure your business stays protected. You get the "Peace of Mind" knowing your digital asset and customer data are safe.' },
      { question: 'How do you handle "Site Hierarchy" and user navigation?', answer: 'A confusing menu is the fast-track to a high "Bounce Rate" and low search rankings. We architect a "Logical Hierarchy" that makes it easy for both bots and humans to find what they need in under 3 clicks. This "Intuitive Flow" keeps users on your site longer and builds your authority in Google\'s eyes.' },
      { question: 'Can I easily update my own content after the site is finished?', answer: 'Yes, we build on intuitive, "Admin-Friendly" platforms that allow you to manage your blogs and pages without needing a developer every time. We provide the "Training and Support" so you are in total control of your digital platform while still having us as your technical backup. Your site grows with your business, not against it.' },
      { question: 'Will a new website really pay for itself in terms of growth?', answer: 'Your website is your only "24/7 Salesperson"; if it\'s failing to convert, you are burning your entire marketing budget. A high-performance, SEO-first site is an investment that compounds over time by gathering more leads and higher rankings every single month. It\'s the single most important foundation for your total digital success.' }
    ],
    pricingId: 'web-dev-pricing'
  },
  'topical-maps': {
    id: 'topical-maps',
    slug: 'topical-maps-semantic-authority',
    title: 'Topical Maps',
    icon: '🗺️',
    description: 'Building semantic authority. We map out every sub-topic in your niche to prove to Google that you are the ultimate expert.',
    painPoint: 'You write great articles, but Google doesn\'t trust you enough to rank them. You feel like an outsider in your own industry.',
    problem: 'Google no longer ranks "pages"; it ranks "topics." If you have gaps in your content coverage, your Topical Authority is weak, and your rankings will hit a ceiling.',
    solution: 'Hierarchical Authority Mapping. We define every pillar and cluster needed to cover your niche 100%, creating a structured network of content that Google loves.',
    importance: 'Topical Maps are the "Moat" around your SEO. Once you own a topic, it is incredibly difficult for competitors to displace you.',
    features: ['Semantic Topic Research', 'Pillar-Cluster Strategy', 'Internal Link Architecture', 'Content Gap Identification'],
    faqs: [
      { question: 'Why am I stuck on page 2 even with "Great" content?', answer: 'Google no longer ranks individual "Pages"; it ranks "Topical Authorities" who cover a niche 100%. If you have gaps in your content coverage, your "Authority Ceiling" will prevent you from ever reaching the #1 spot. We build a "Topical Map" that identifies exactly which cluster of pages you need to own to become the unreachable leader.' },
      { question: 'Is my content "Orphaned" and disconnected from my main topics?', answer: 'Without a "Topical Architecture," your articles are likely floating in isolation, losing 80% of their potential SEO power. We build "Semantic Silos" that connect your disparate posts into a powerful network of authority. This "Internal Flow" makes it easy for Google to see you as the ultimate expert in your field.' },
      { question: 'Can a Topical Map protect me from Google updates?', answer: 'Yes, algorithm updates frequently target "Thin" sites that only target high-volume keywords without covering the deep, supporting topics. A complete map builds a "Resilient Moat" of authority that Google view as a trusted resources. You don\'t just chase rankings; you build a brand that Google cannot afford to ignore.' },
      { question: 'What are "Content Gaps" and how do they kill my rankings?', answer: 'A content gap is a topic your customers care about that you haven\'t covered yet—Google interprets these gaps as a "Lack of True Expertise." We find every missing "Node" in your competitor\'s strategies and build the content needed to seal those holes. This ensures there is no reason for a user (or Google) to leave your site for another.' },
      { question: 'How do you determine the "Primary Entities" in my niche?', answer: 'We use advanced semantic research and "Knowledge Graph" analysis to find the core concepts Google expects your site to mention. By covering these "Entities" correctly, you speak the same language as search algorithms. This technical alignment allows you to rank for keywords you haven\'t even specifically targeted yet.' },
      { question: 'Will this strategy work in "Ultra-Competitive" markets like Law or Finance?', answer: 'Topical Mapping is the *only* way for new or smaller sites to win in high-competition niches where everyone has backlinks. By owning the "Depth" and covering the niche 100%, you gain an authority score that cannot be bought with cheap links. It\'s the "Strategic Shortcut" to bypassing older, lazier competitors.' },
      { question: 'What are "Pillar and Cluster" pages and do I need them?', answer: 'Pillars are your broad "Topic Headquarters," and clusters are the deep, specific sub-topics that support them. We architect this "Hub and Spoke" model to create a perfect user experience and a logical crawl path for bots. This structure is the modern blueprint for total search engine dominance.' },
      { question: 'Is "Internal Link Architecture" a key part of the map?', answer: 'Internal links are the "Bloodline" that carries authority from your best posts to your service pages. We use "Semantic Anchor Text" to tell Google exactly what every page is about and how it relates to the whole. This creates a cohesive "Web of Knowledge" that search engines reward with much higher rankings.' },
      { question: 'How long does it take to see the "Authority Effect" of a map?', answer: 'As you fill in the missing "Nodes" of your map, you will see a gradual lifting of all rankings across your entire site as your overall "Trust Score" increases. The transformation from "Another Website" to "The Authority" usually happens in 4-6 months of consistent execution. Once you hit that threshold, your growth becomes exponential and unshakeable.' },
      { question: 'Do I need to update my Topical Map every year?', answer: 'Niches evolve and new topics emerge, so your map should be a "Living Document" that grows with your industry. We perform regular "Semantic Audits" to find new gaps and opportunities as the market changes. This ensures you remain the unassailable leader that others are always trying to catch.' }
    ]
  }
};

export const CERTIFICATES = [
  { 
    title: 'SEO Guide: How to Rank Higher on Google', 
    url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-8b1bdc1a-e847-4933-a616-9d3fd19cf456.jpg',
    verificationUrl: 'https://www.udemy.com/certificate/UC-8b1bdc1a-e847-4933-a616-9d3fd19cf456/',
    issuer: 'Udemy'
  },
  { 
    title: 'Search Engine Optimization Complete Course', 
    url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-df722e63-48df-4887-b2be-1fc3693b6724.jpg',
    verificationUrl: 'https://www.udemy.com/certificate/UC-df722e63-48df-4887-b2be-1fc3693b6724/',
    issuer: 'Udemy'
  },
  { 
    title: 'Link Building 2023', 
    url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-a6fba8af-48ad-48f9-b95e-0fdcad583a9d.jpg',
    verificationUrl: 'https://www.udemy.com/certificate/UC-a6fba8af-48ad-48f9-b95e-0fdcad583a9d/',
    issuer: 'Udemy'
  },
  { 
    title: 'Keyword Research From Scratch', 
    url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-3a2067d7-8ddb-42f9-9847-20c30b7aa872.jpg',
    verificationUrl: 'https://www.udemy.com/certificate/UC-3a2067d7-8ddb-42f9-9847-20c30b7aa872/',
    issuer: 'Udemy'
  },
  { 
    title: 'Build Responsive Real World Website', 
    url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-84eab162-5805-466e-af4f-9ec7f42d1e1c.jpg',
    verificationUrl: 'https://www.udemy.com/certificate/UC-84eab162-5805-466e-af4f-9ec7f42d1e1c/',
    issuer: 'Udemy'
  },
  { 
    title: 'Build Host and Manage Wordpress Website', 
    url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-48933b58-db1d-4d4c-b71a-48f2221033b1.jpg',
    verificationUrl: 'https://www.udemy.com/certificate/UC-48933b58-db1d-4d4c-b71a-48f2221033b1/',
    issuer: 'Udemy'
  }
];

export const REVIEWS = [
  { name: 'Charm Garcia', company: 'Google Client', rating: 5, text: 'Rihteley was super helpful. Easy and smooth transaction. Highly recommended!' },
  { name: 'Rebecca Jordan', company: 'Google Client', rating: 5, text: 'I’ve worked with a few SEO services before, but Ritehly Website SEO Ranker really stands out. From the start, their team noticed improvements in our technical metrics.' },
  { name: 'Mariel Angeles', company: 'Google Client', rating: 5, text: 'Of all the SEO trainings I attended I can say that with Sir Ritehly the word from SEO Beginner to Experts really fits. Highly recommend:)' },
  { name: 'Cerille P', company: 'Google Client', rating: 5, text: "Sir Ritehly was super helpful. He didn't hesitate to help me, and I was able to develop a structure for my SEO strategy." },
  { name: 'Christine Gella', company: 'Google Client', rating: 5, text: 'Ritehly SEO Service has truly exceeded my expectations. Their expertise in SEO has helped my business grow.' },
  { name: 'Christian Gospel', company: 'Google Client', rating: 5, text: "Absolutely brilliant SEO mentor! In just a short time, they've transformed my approach and boosted my site's visibility. Highly recommended!" },
  { name: 'Kristine Dianne', company: 'Google Client', rating: 5, text: "They really know their stuff when it comes to technical SEO. They helped me improve my website's mobile score and visibility." },
  { name: 'Concepcion Ghosh', company: 'Google Client', rating: 5, text: 'Thank you, Ritehly SEO Service, you are such a great help with very quick responses and accurate analysis. I am so grateful.' },
  { name: 'Amanda G. Gomez', company: 'Google Client', rating: 5, text: 'I highly recommend Ritehly for his exceptional expertise in SEO. With his extensive knowledge and mastery of the field.' },
  { name: 'Mario Jomel Pablico', company: 'Google Client', rating: 5, text: 'All goods! All questions have been answered. The checklist is detailed.' },
  { name: 'Albert Tunacao', company: 'Google Client', rating: 5, text: 'Excellent work, my website is now faster.' },
  { name: 'Jay Rotceh Manon-og', company: 'Google Client', rating: 5, text: 'Daghang salamat very nice service, making my mobile score from 30-84.' }
];

export const FAQS = [
  { 
    question: 'Why is my traffic increasing, but I’m not getting any leads or sales?', 
    answer: 'Traffic is vanity, conversion is sanity. This usually happens when your "Search Intent" is misaligned with your "Offer." We solve this by auditing your landing pages for Conversion Rate Optimization (CRO) and ensuring we are targeting "Bottom-of-the-Funnel" keywords where users are ready to buy, not just browsing.' 
  },
  { 
    question: 'My website looks great, but it’s slow. Does that really affect my ranking?', 
    answer: 'Absolutely. Google uses "Core Web Vitals" as a critical ranking factor. A 1-second delay in page load can drop conversions by 7% and cause Google to push you down the results. Our Web Development service focuses on high-performance architecture to ensure your site loads in under 2 seconds.' 
  },
  { 
    question: 'My local competitors always show up on the map, but I don’t. How do I beat them?', 
    answer: 'Local SEO isn’t just about location; it’s about "Proximity, Prominence, and Relevance." We optimize your Google Business Profile, build high-quality local citations, and create geo-specific content that signals to Google you are the most trusted local authority in your area.' 
  },
  { 
    question: 'How do you ensure SEO efforts don’t get wiped out by the next Google Update?', 
    answer: 'We don’t chase algorithm hacks. We build for long-term "Anti-Fragility." By focusing on E-E-A-T (Experience, Expertise, Authoritativeness, Trust) and high-quality, intent-based content, we make your site a resource Google *wants* to keep at the top, regardless of minor algorithm shifts.' 
  },
  { 
    question: 'I’ve written dozens of blogs, but none are ranking. What’s missing?', 
    answer: 'You’re likely missing "Topical Authority." Google no longer ranks isolated articles; it ranks experts. We build "Topical Maps"—a structured network of content that covers your niche comprehensively. This proves to Google that you aren’t just writing for keywords, but providing expert value.' 
  },
  { 
    question: 'Is link building dangerous? I’ve heard about Google penalties.', 
    answer: 'Only low-quality, automated "link farms" are dangerous. We focus on Digital PR and high-authority outreach. We earn links from real, high-traffic websites in your industry. This doesn’t just boost rankings; it builds brand credibility and referral traffic.' 
  },
  { 
    question: 'I need high-quality leads, not just "any" traffic. How do you qualify them?', 
    answer: 'We use a precision-targeted Lead Generation strategy. By combining SEO with strategic prospecting and automated workflows, we filter out low-intent users. We focus on "High-Value" keywords that indicate a prospect is in the decision-making phase of the buyer journey.' 
  },
  { 
    question: 'Can I really automate my growth with AI? Isn’t AI content bad for Google?', 
    answer: 'AI is a tool, not a replacement. As AI Automation Specialists, we use advanced models to handle data-heavy tasks like content auditing, schema generation, and initial drafts. However, every piece of content is engineered by experts to ensure it meets Google’s "Helpful Content" standards. AI scales our speed; human expertise ranks our quality.' 
  },
  { 
    question: 'Why should I hire a specialist when I can just use a cheap SEO plugin?', 
    answer: 'Plugins are like a compass; a specialist is the navigator. Plugins check if you used a keyword, but they don’t understand your business goals, your competitors’ weaknesses, or technical debt in your code. We provide the strategy and execution that a plugin simply cannot.' 
  },
  { 
    question: 'I want to grow my business, but I’m overwhelmed. How can Operational Support help?', 
    answer: 'Growth requires focus. Our Operational Support systems bridge the gap by handling technical maintenance, CRM management, and administrative workflows. This frees you to focus on high-level strategy while your business operations run smoothly on autopilot.' 
  }
];
