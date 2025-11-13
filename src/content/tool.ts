export type Section = {
  id: number;
  title: string;
  bigIdea: string;
  bullets: string[];
  verses: { ref: string; text: string }[];
  tagline: string;
  icon: string;
};

export const meta = {
  title: "The Story of Jesus and His Kingdom",
  subtitle: "How to Participate in God’s Story of Renewal",
};

export const sections: Section[] = [
  {
    id: 1,
    title: "Why did Jesus come? — The world was broken, but God had a plan.",
    bigIdea:
      "Sin fractured creation and separated humanity from God’s reign, but because of His great love, God promised from the very beginning to restore His world through a coming King: Jesus.",
    bullets: [
      "Humanity turned from God’s rule, and the world fell into the dark shadow of sin and death.",
      "The world’s brokenness isn’t just around us — it’s within us. Yet God refused to give up on His creation.",
      "God’s heart has always been to renew, not destroy.",
      "God sent messengers promising a King who would bring peace, justice, and restoration.",
    ],
    verses: [
      {
        ref: "Isaiah 9:6–7 (NIV)",
        text:
          "For to us a child is born, to us a son is given, and the government will be on his shoulders… Of the greatness of his government and peace there will be no end. He will reign… over his kingdom… from that time on and forever.",
      },
    ],
    tagline: "➡️ God’s promise ignites hope: His Kingdom will come.",
    icon: "🌍",
  },

  {
    id: 2,
    title: "What did Jesus do? — The King came — and heaven broke in.",
    bigIdea:
      "In Jesus, God Himself entered our story. He announced and demonstrated the arrival of His Kingdom—God’s reign of healing, forgiveness, and renewal.",
    bullets: [
      "Jesus declared, “The Kingdom of God has come near,” and His words were confirmed by power—everywhere He went, broken things were made whole.",
      "Through His death and resurrection, Jesus was crowned King—defeating sin, death, and all the powers of darkness, so that we can live free and whole under God’s reign.",
      "In giving His life for us, the King took upon Himself the full weight of our brokenness, making a way for humanity to step out of darkness and into the life and freedom of His Kingdom.",
    ],
    verses: [
      {
        ref: "Acts 10:38 (NIV)",
        text:
          "God anointed Jesus of Nazareth with the Holy Spirit and power, and he went around doing good and healing all who were under the power of the devil, because God was with him.",
      },
      {
        ref: "Colossians 1:13–14 (NIV)",
        text:
          "For he has rescued us from the dominion of darkness and brought us into the kingdom of the Son he loves, in whom we have redemption, the forgiveness of sins.",
      },
    ],
    tagline: "➡️ The Kingdom has come through Jesus—and freedom is at hand.",
    icon: "✝️",
  },

  {
    id: 3,
    title:
      "What is Jesus doing now? — His Spirit is at work — God's Kingdom is advancing.",
    bigIdea:
      "After returning to the Father, Jesus poured out His Spirit on His followers. The same power that raised Him from the dead now empowers us to live under God’s reign and bring His renewal to the world.",
    bullets: [
      "The Holy Spirit comes to live within God’s people and gives them power to proclaim and demonstrate the Kingdom.",
      "Through His people, God’s renewal spreads — in homes, neighborhoods, and nations.",
      "The Spirit brings the future fullness of God’s Kingdom into our lives here and now.",
      "The Spirit makes us part of God’s new creation, transforming us to reflect His character and His Kingdom.",
    ],
    verses: [
      {
        ref: "Acts 1:8 (NIV)",
        text:
          "…you will receive power when the Holy Spirit comes on you; and you will be my witnesses…",
      },
      {
        ref: "John 14:12–14 (NIV)",
        text:
          "Very truly I tell you, whoever believes in me will do the works I have been doing… and I will do whatever you ask in my name, so that the Father may be glorified in the Son.",
      },
    ],
    tagline: "➡️ The Kingdom is advancing—by His Spirit, through His people.",
    icon: "🔥",
  },

  {
    id: 4,
    title: "What will Jesus do? — The King will come again — and make all things new.",
    bigIdea:
      "God’s Kingdom has already come through Jesus—every act of healing, forgiveness, and renewal is His reign breaking in. Yet we await the day when His Kingdom comes in fullness, when heaven and earth are made new, and God dwells with His people forever. Everything fractured by sin will be healed. Every wrong made right. Every tear wiped away. The whole world will be renewed under His perfect reign.",
    bullets: [
      "While we already experience the kingdom now in various ways, we await the fullness of His kingdom on earth when He comes again.",
      "The same Jesus who rose from the dead and ascended to His throne will return to restore all that was lost.",
      "Heaven and earth will be made new—creation set free, justice flowing, and every tear wiped away.",
      "We will see God face to face, live in His presence, and reign with Him forever.",
      "This hope fills our lives with joy, purpose, and strength today—it’s the anchor of our hope and the fuel for our mission.",
    ],
    verses: [
      {
        ref: "Revelation 21:4–5 (NIV)",
        text:
          "‘He will wipe every tear from their eyes. There will be no more death’ or mourning or crying or pain… He who was seated on the throne said, ‘I am making everything new!’",
      },
      {
        ref: "Romans 8:18–21 (NIV)",
        text:
          "…creation itself will be liberated from its bondage to decay and brought into the freedom and glory of the children of God.",
      },
      {
        ref: "Acts 3:21 (NIV)",
        text:
          "He must remain in heaven until the time comes for God to restore everything, as he promised long ago through his holy prophets.",
      },
    ],
    tagline:
      "➡️ The future Kingdom is not just our destination—we can share the King’s renewal now.",
    icon: "🌅",
  },
];

export const ctas = {
  inviteLine1: "You can yield your life to King Jesus right now.",
  inviteLine2: "Show me how.",
};