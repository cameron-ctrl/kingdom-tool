// src/content/tool.ts
export type Verse = { ref: string; text: string };

export type Section = {
  id: number;
  icon: string;
  title: string;
  bigIdeaTitle: string;
  bigIdea: string;
  bullets: string[];
  verses: Verse[];
  tagline?: string;
};

export const sections: Section[] = [
  {
    id: 1,
    icon: "🕊️",
    title: "Why did Jesus come?",
    bigIdeaTitle: "The world was broken, but God had a plan.",
    bigIdea:
      "Sin fractured creation and separated humanity from God’s reign, but from the very beginning God promised to restore His world through a coming King.",
    bullets: [
      "Humanity turned from God’s rule, and the world fell under the shadow of sin and death.",
      "Yet God’s heart has always been to renew, not destroy.",
      "Through the prophets He promised a King who would bring peace, justice, and restoration."
    ],
    verses: [
      { ref: "Genesis 3:15 (NIV)", text: "He will crush your head, and you will strike his heel." },
      { ref: "Isaiah 9:6–7 (NIV)", text: "Of the increase of his government and peace there will be no end." }
    ],
    tagline: "➡️ God’s promise ignites hope: His Kingdom will come."
  },
  {
    id: 2,
    icon: "👑",
    title: "What did Jesus do?",
    bigIdeaTitle: "The King came — and heaven broke in.",
    bigIdea:
      "In Jesus, God Himself entered our story. He announced and demonstrated the arrival of His Kingdom—God’s reign of healing, forgiveness, and renewal.",
    bullets: [
      "Jesus declared, “The Kingdom of God has come near.”",
      "Everywhere He went, broken things were made whole.",
      "Through His death and resurrection, He defeated sin, death, and darkness.",
      "In His ascension, He was crowned the world’s true King."
    ],
    verses: [
      { ref: "Mark 1:15 (NIV)", text: "The time has come… the Kingdom of God has come near. Repent and believe the good news!" },
      { ref: "Colossians 1:13–14 (NIV)", text: "He has rescued us from the dominion of darkness and brought us into the kingdom of the Son he loves, in whom we have redemption, the forgiveness of sins." },
      { ref: "Luke 4:18–19 (NIV)", text: "He has anointed me to proclaim good news to the poor… to set the oppressed free, to proclaim the year of the Lord’s favor." }
    ],
    tagline: "➡️ The Kingdom has come through Jesus—and it changes everything."
  },
  {
    id: 3,
    icon: "🔥",
    title: "What is Jesus doing?",
    bigIdeaTitle: "The Spirit is at work — the Kingdom is advancing.",
    bigIdea:
      "After returning to the Father, Jesus poured out His Spirit on His followers. The same power that raised Him now empowers us to live and work under God’s reign.",
    bullets: [
      "The Holy Spirit fills believers with power to proclaim and demonstrate the Kingdom.",
      "Through His people, God’s renewal spreads—in homes, neighborhoods, and nations.",
      "The Spirit is the presence of the future, pulling tomorrow’s hope into today’s world."
    ],
    verses: [
      { ref: "Acts 1:8 (NIV)", text: "You will receive power when the Holy Spirit comes on you; and you will be my witnesses…" },
      { ref: "Romans 8:11 (NIV)", text: "The Spirit of him who raised Jesus from the dead is living in you…" },
      { ref: "2 Corinthians 3:17–18 (NIV)", text: "Where the Spirit of the Lord is, there is freedom… being transformed into his image." }
    ],
    tagline: "➡️ The Kingdom is advancing—by the Spirit, through His people."
  },
  {
    id: 4,
    icon: "🌅",
    title: "What will Jesus do?",
    bigIdeaTitle: "The King will come again — and make all things new.",
    bigIdea:
      "One day, King Jesus will return to bring the Kingdom in its fullness. Everything fractured by sin will be healed. Every wrong made right. Every tear wiped away. The whole world will be renewed under His perfect reign. This isn’t distant escapism—it’s the anchor of our hope and the fuel for our mission today.",
    bullets: [
      "The same Jesus who rose and ascended will return to restore everything that was lost.",
      "Heaven and earth will be reunited; creation will be set free from decay.",
      "Justice will roll like a river—no more violence, fear, or oppression.",
      "We will see God face to face, live in His presence, and reign with Him forever.",
      "Knowing this is our future gives meaning, endurance, and joy to every act of love now."
    ],
    verses: [
      { ref: "Revelation 21:1–5 (NIV)", text: "He will wipe every tear from their eyes… “I am making everything new!”" },
      { ref: "Romans 8:18–21 (NIV)", text: "Creation itself will be liberated from its bondage to decay…" },
      { ref: "1 Corinthians 15:24–26 (NIV)", text: "Then the end will come… The last enemy to be destroyed is death." },
      { ref: "Philippians 3:20–21 (NIV)", text: "We eagerly await a Savior… who will transform our lowly bodies…" }
    ],
    tagline: "➡️ The future Kingdom is not just our destination—it’s our motivation."
  },
  {
    id: 5,
    icon: "📨",
    title: "What should I do?",
    bigIdeaTitle: "The Invitation",
    bigIdea:
      "You are invited to turn from your own way, trust Jesus as King, receive His forgiveness, be filled with His Spirit, and join His renewing mission in the world.",
    bullets: [
      "The Gospel isn’t just about going to heaven when you die—it’s about entering life under God’s reign now.",
      "Following Jesus means joining His Spirit-empowered renewal until He comes again.",
      "This story is still being written—through you."
    ],
    verses: [
      { ref: "Acts 3:19 (NIV)", text: "Repent, then, and turn to God, so that your sins may be wiped out…" }
    ],
    tagline: "➡️ Come, follow the King—and live in His Kingdom."
  }
];

export const invitation = {
  icon: "📨",
  title: "What should I do?",
  paragraphs: [
    "You are invited to turn from your own way, trust Jesus as King, receive His forgiveness, be filled with His Spirit, and join His renewing mission in the world.",
    "The Gospel isn’t just about going to heaven when you die. It’s about living under the reign of God now, and helping others experience His renewal until He comes again."
  ],
  verse: {
    ref: "Acts 3:19 (NIV)",
    text: "Repent, then, and turn to God, so that your sins may be wiped out, that times of refreshing may come from the Lord,"
  },
  closing: "Come, follow the King — and live in His Kingdom."
};
