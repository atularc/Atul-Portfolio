// Portfolio Content Database - Atul Kumar Pandey
// Configured to strictly match Atul_Pandey_CV.pdf
window.portfolioData = {
  profile: {
    name: "Atul Kumar Pandey",
    title: "Senior Unity Developer",
    tagline: "Unity Developer · 4+ Years · Mobile · WebGL · Multiplayer",
    location: "Ghaziabad, India",
    bioTitle: "About Me",
    bioParagraphs: [
      "Unity developer with 4+ years building mobile and WebGL games in C#. Maintains Mystic Motors, a live multiplayer racing game (10K+ Google Play downloads) with Firebase, in-app purchases and a .NET game server; previously led a team of 6 developers on client projects."
    ],
    avatarFront: "/images/dp/20251118_210825.png",
    avatarBack: "/images/dp/20251118_210825.png",
    resumeUrl: "/Atul_Pandey_CV.pdf",
    typedStrings: ["Senior Unity Developer", "4+ Years Experience", "Mobile & WebGL Developer", "Multiplayer Specialist"]
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/atul-pandey-dev",
    github: "https://github.com/atularc",
    email: "atulworks07@gmail.com",
    phone: "+91 8130853178",
    location: "Ghaziabad, India"
  },

  projects: [
    {
      title: "Mystic Motors",
      subtitle: "Android & iOS",
      description: "Spell-based multiplayer racing game with real-time PvP, clans, chat and cosmetics. 10K+ downloads on Google Play.",
      images: [
        "/images/mystic motors/Screenshot_20260707_221735.png",
        "/images/mystic motors/Screenshot_20260707_221739.png",
        "/images/mystic motors/Screenshot_20260707_221749.png",
        "/images/mystic motors/Screenshot_20260707_221753.png",
        "/images/mystic motors/Screenshot_20260707_221756.png",
        "/images/mystic motors/Screenshot_20260707_221759.png",
        "/images/mystic motors/Screenshot_20260707_221816.png",
        "/images/mystic motors/Screenshot_20260707_221822.png",
        "/images/mystic motors/Screenshot_20260707_222145.png",
        "/images/mystic motors/Screenshot_20260707_222158.png",
        "/images/mystic motors/Screenshot_20260707_222207.png",
        "/images/mystic motors/Screenshot_20260707_222209.png"
      ],
      engine: "Unity 3D",
      engineIcon: "/images/unity_logo.png",
      tags: ["Unity 3D", "C#", "Firebase", ".NET Server", "AdMob"],
      playStore: "https://play.google.com/store/apps/details?id=com.tecventures.mysticmotors",
      appStore: "https://apps.apple.com/app/id6612030544",
      link: "https://play.google.com/store/apps/details?id=com.tecventures.mysticmotors",
      featured: true
    },
    {
      title: "Adventure Trip: World Wonders",
      subtitle: "Google Play",
      description: "Client project, built solo. Educational puzzle game across 20 world-wonder locations with 7 mini-puzzles; Firebase cloud save and FCM notifications.",
      images: [
        "/images/adventure trip/1.webp",
        "/images/adventure trip/2.webp",
        "/images/adventure trip/3.webp",
        "/images/adventure trip/4.webp",
        "/images/adventure trip/5.webp",
        "/images/adventure trip/6.webp"
      ],
      engine: "Unity 3D",
      engineIcon: "/images/unity_logo.png",
      tags: ["Unity 3D", "C#", "Firebase", "FCM"],
      playStore: "https://play.google.com/store/apps/details?id=com.Point8Games.AdventureTripWondersoftheWorld",
      link: "https://play.google.com/store/apps/details?id=com.Point8Games.AdventureTripWondersoftheWorld"
    },
    {
      title: "Kitty Dash",
      subtitle: "Google Play",
      description: "Client project, built solo. Endless runner with content loaded through local Addressables.",
      images: [
        "/images/kitty dash/Screenshot_20260713_100206.png",
        "/images/kitty dash/Screenshot_20260713_100212.png",
        "/images/kitty dash/Screenshot_20260713_100215.png",
        "/images/kitty dash/Screenshot_20260713_100304.png",
        "/images/kitty dash/Screenshot_20260713_100309.png",
        "/images/kitty dash/Screenshot_20260713_100315.png",
        "/images/kitty dash/Screenshot_20260713_100327.png",
        "/images/kitty dash/Screenshot_20260713_100342.png",
        "/images/kitty dash/Screenshot_20260713_100347.png"
      ],
      engine: "Unity 3D",
      engineIcon: "/images/unity_logo.png",
      tags: ["Unity 3D", "C#", "Addressables", "AdMob"],
      isPortrait: true,
      playStore: "https://play.google.com/store/apps/details?id=com.Point8Games.KittyDash",
      link: "https://play.google.com/store/apps/details?id=com.Point8Games.KittyDash"
    },
    {
      title: "Slot Game",
      subtitle: "Live WebGL (Browser)",
      description: "Original browser slot game demo: core game logic in C#, DOTween reel animations, UI built from Figma designs.",
      images: [
        "/images/slot game/1.png",
        "/images/slot game/2.png",
        "/images/slot game/3.png",
        "/images/slot game/4.png",
        "/images/slot game/5.png"
      ],
      engine: "Unity WebGL",
      engineIcon: "/images/unity_logo.png",
      tags: ["Unity 3D", "C#", "WebGL", "DOTween", "Figma"],
      webglLink: "https://slotgameunityweb.netlify.app/",
      link: "https://slotgameunityweb.netlify.app/"
    }
  ],

  laboratory: [],

  unreleased: [],

  experience: [
    {
      company: "Tec Ventures",
      role: "Senior Unity Developer",
      timeline: "Apr 2024 – Present",
      bullets: [
        "Develop and maintain Mystic Motors (Android and iOS), a live multiplayer racing game; ship feature updates after launch.",
        "Fixed launch-period crashes and null-reference errors across successive updates using Crashlytics reports.",
        "Specified, integrated and deployed a .NET game server (matchmaking, anti-cheat checks) hosted on DigitalOcean; tested APIs with Postman.",
        "Implemented Google, Apple and guest sign-in (Firebase Auth), Firestore, FCM push notifications, Crashlytics, in-app purchases (Android, iOS) and AdMob ads.",
        "Built game UI from Figma designs with DOTween animation.",
        "Used Unity Profiler to trace frame spikes to string allocations, extra rendering and high draw-call counts, and optimised them."
      ]
    },
    {
      company: "Abhiwan Technology Pvt Ltd",
      role: "Unity Developer / Team Lead",
      timeline: "Oct 2022 – Mar 2024",
      bullets: [
        "Promoted to Team Lead; led a team of 6 developers for about 6 months on client Unity projects.",
        "Built Unity games and apps for clients across mobile and PC.",
        "Classroom Metaverse: virtual classroom where students and teachers join together, built with Photon and Agora Voice SDK."
      ]
    }
  ],

  skills: [
    {
      category: "Engine & Language",
      icon: "🎮",
      color: "#9d7cd8",
      items: ["Unity 3D / 2D", "C# (primary)", "C++", "Unity WebGL", "Unity Addressables"]
    },
    {
      category: "Multiplayer & Network",
      icon: "🌐",
      color: "#38bdf8",
      items: [".NET Game Server", "Photon PUN2", "WebSocket", "Agora Voice SDK"]
    },
    {
      category: "Backend & Auth",
      icon: "☁️",
      color: "#fb923c",
      items: ["Firebase Auth", "Firestore", "FCM", "In-App Purchases", "AdMob", "REST API", "Google/Apple Login", "DigitalOcean", "Postman"]
    },
    {
      category: "UI/UX & Design",
      icon: "🎨",
      color: "#f472b6",
      items: ["Figma", "UI/UX Design", "DOTween"]
    },
    {
      category: "AI-Assisted Development",
      icon: "🤖",
      color: "#2dd4bf",
      items: ["Claude Code", "OpenAI Codex", "Unity MCP", "Unity CLI"]
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      color: "#34d399",
      items: ["Git", "Firebase Crashlytics", "Unity Profiler", "Android Studio", "Xcode"]
    },
    {
      category: "Platforms",
      icon: "📱",
      color: "#a78bfa",
      items: ["Android", "iOS", "PC", "WebGL"]
    },
    {
      category: "Learning",
      icon: "📚",
      color: "#fbbf24",
      items: ["ASP.NET Core", "API development"]
    }
  ],

  education: [
    {
      degree: "BCA",
      institution: "Hi-Tech Institute of Engineering & Technology",
      timeline: "2020 – 2023",
      score: "70%"
    },
    {
      degree: "Intermediate (PCB)",
      institution: "P.C. Senior Secondary School",
      timeline: "2020",
      score: "75%"
    }
  ]
};

// Export for ES modules or keep global for browser loading
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.portfolioData;
}
