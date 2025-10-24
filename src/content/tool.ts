// src/content/tool.ts
export type Verse = { ref: string; text: string };
export type Section = {
  id: number;
  icon: string;
  title: string;
  bullets: string[];
  verses: Verse[];
};

export const sections: Section[] = [
  {
    id: 1,
    icon: "🕊️",
    title: "God Has Come",
    bullets: [
      "God has come, just as He promised.",
      "Through Jesus, the King, God’s reign has broken into our world.",
      "He has come near — not to condemn, but to restore."
    ],
    verses: [
      {
        ref: "Mark 1:15 (NIV)",
        text: "“The time has come,” he said. “The kingdom of God has come near. Repent and believe the good news!”"
      },
      {
        ref: "John 1:14 (NIV)",
        text: "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth."
      }
    ]
  },
  {
    id: 2,
    icon: "🌿",
    title: "God Is Making All Things New",
    bullets: [
      "God’s purpose has always been to renew all things—creation, humanity, and relationship with Himself.",
      "Jesus shows us what that renewal looks like: healed bodies, restored hearts, and reconciled people."
    ],
    verses: [
      {
        ref: "Revelation 21:5 (NIV)",
        text: "He who was seated on the throne said, “I am making everything new!” Then he said, “Write this down, for these words are trustworthy and true.”"
      },
      {
        ref: "2 Corinthians 5:17 (NIV)",
        text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!"
      }
    ]
  },
  {
    id: 3,
    icon: "👑",
    title: "Jesus Is the Reigning King",
    bullets: [
      "God’s Kingdom has already come through the life, death, resurrection, and ascension of Jesus, and one day will come in full.",
      "Through Him, God’s reign confronts and defeats the powers of sin, sickness, death, and darkness.",
      "Jesus is the reigning King, and His reign is spreading through His people."
    ],
    verses: [
      {
        ref: "Colossians 1:13 (NIV)",
        text: "For he has rescued us from the dominion of darkness and brought us into the kingdom of the Son he loves,"
      },
      {
        ref: "Hebrews 1:3 (NIV)",
        text: "The Son is the radiance of God’s glory and the exact representation of his being, sustaining all things by his powerful word. After he had provided purification for sins, he sat down at the right hand of the Majesty in heaven."
      }
    ]
  },
  {
    id: 4,
    icon: "🔥",
    title: "The King’s Spirit Empowers His People",
    bullets: [
      "After Jesus ascended, He sent the Holy Spirit to empower His followers.",
      "Now, the same power that was in Jesus lives in us — to proclaim and demonstrate the Kingdom everywhere we go.",
      "Healing, deliverance, mercy, justice, and forgiveness are signs that the King is at work now."
    ],
    verses: [
      {
        ref: "Acts 1:8 (NIV)",
        text: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth."
      },
      {
        ref: "Romans 8:11 (NIV)",
        text: "And if the Spirit of him who raised Jesus from the dead is living in you, he who raised Christ from the dead will also give life to your mortal bodies because of his Spirit who lives in you."
      }
    ]
  },
  {
    id: 5,
    icon: "🌅",
    title: "The Kingdom Will Come in Full",
    bullets: [
      "One day, King Jesus will return.",
      "He will bring the Kingdom in its fullness — evil will be judged, death will be destroyed, and heaven and earth will be made new.",
      "Those who belong to Him will live with God forever in renewed creation."
    ],
    verses: [
      {
        ref: "Revelation 1:7 (NIV)",
        text: "“Look, he is coming with the clouds,” and “every eye will see him, even those who pierced him”; and all peoples on earth “will mourn because of him.” So shall it be! Amen."
      },
      {
        ref: "1 Corinthians 15:24 (NIV)",
        text: "Then the end will come, when he hands over the kingdom to God the Father after he has destroyed all dominion, authority and power."
      }
    ]
  }
];

export const invitation = {
  icon: "📨",
  title: "THE INVITATION",
  paragraphs: [
    "You are invited to enter the Kingdom — to turn from your own way, trust Jesus as King, receive His forgiveness, be filled with His Spirit, and join His renewing mission in the world.",
    "The Gospel isn’t just about going to heaven when you die. It’s about living under the reign of God now, and helping others experience His renewal until He comes again."
  ],
  verse: {
    ref: "Acts 3:19 (NIV)",
    text: "Repent, then, and turn to God, so that your sins may be wiped out, that times of refreshing may come from the Lord,"
  },
  closing: "Come, follow the King — and live in His Kingdom."
};