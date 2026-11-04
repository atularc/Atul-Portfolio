// Portfolio Content Database - Atul Kumar Pandey
// Configured to strictly match Atul_Pandey_CV.pdf
window.portfolioData = {
  profile: {
    name: "Atul Kumar Pandey",
    title: "Senior Unity Developer",
    tagline: "Senior Unity Developer | Mobile Multiplayer Games | C#, Android, iOS",
    location: "Ghaziabad, India",
    bioTitle: "About Me",
    bioParagraphs: [
      "Senior Unity Developer with 4+ years building and shipping mobile games in C#. Primary developer on Mystic Motors, a live real-time multiplayer racing game on Google Play and the App Store with 10K+ downloads, working across gameplay, networking, Firebase, monetisation and mobile performance. Former Team Lead of 6 developers. Uses AI coding tools daily to deliver faster, and checks the results on real devices."
    ],
    avatarFront: "/images/dp/20251118_210825.png",
    avatarBack: "/images/dp/20251118_210825.png",
    resumeUrl: "Atul_Pandey_CV.pdf",
    typedStrings: ["Atul Kumar Pandey", "a Senior Unity Developer"],
    heroTags: ["Senior Unity Developer", "4+ Years Experience", "Mobile Multiplayer Games", "C#, Android, iOS"]
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
      description: "Live multiplayer racer built in Unity 6 with URP, Firebase and a .NET server. 10K+ downloads on Google Play.",
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
      tags: ["Unity 6", "C#", "URP", "Firebase", ".NET"],
      playStore: "https://play.google.com/store/apps/details?id=com.tecventures.mysticmotors",
      appStore: "https://apps.apple.com/app/id6612030544",
      link: "https://play.google.com/store/apps/details?id=com.tecventures.mysticmotors",
      featured: true
    },
    {
      title: "Adventure Trip: World Wonders",
      subtitle: "Google Play",
      description: "Educational puzzle game across 20 world wonders, built solo for a client, with 7 mini-puzzles, Firebase cloud save and FCM notifications. 1K+ downloads on Google Play.",
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
      description: "My own endless runner, built and published solo, with Addressables and AdMob ads.",
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
      playStore: "https://play.google.com/store/apps/details?id=com.saturagames.kittydash&hl=en_IN",
      link: "https://play.google.com/store/apps/details?id=com.saturagames.kittydash&hl=en_IN"
    },
    {
      title: "Slot Game",
      subtitle: "Live WebGL (Browser)",
      description: "Browser slot game with reel logic in C#, DOTween animation and UI from Figma designs.",
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

  unreleased: [],

  experience: [
    {
      company: "TEC Ventures Pty Ltd, Australia (Remote)",
      role: "Senior Unity Developer",
      timeline: "Mar 2025 – Present",
      bullets: [
        "Took Mystic Motors, a spell-based 8-car multiplayer racer, through launch on Android and iOS and 8 App Store releases, with clans, chat, a garage and cosmetics.",
        "Delivered a .NET dedicated game server over UDP (LiteNetLib) using AI-assisted coding: server-run bots, finish-order and spell validation, and basic speed and teleport checks. Connected it to the Unity client, tested it, and deployed sandbox and production on DigitalOcean.",
        "Built Firebase features: Google, Apple and guest sign-in, Firestore, Realtime Database lobbies and matchmaking, Cloud Functions, App Check, FCM notifications and Crashlytics.",
        "Built the original clans and social system with Socket.IO and Node.js, on both the Unity and server sides.",
        "Integrated in-app purchases on Android and iOS, AdMob ads, shop offers and crate rewards.",
        "Reduced overheating and frame drops on phones: cut draw calls from about 900 to 300-500, added LODs, skipped distant and off-screen objects, replaced heavy particles, and warmed up shaders during loading to stop spell hitches.",
        "Developed car physics, bot racing AI, the spell system, VFX and custom shaders, plus baked lighting and collision work on race maps in URP.",
        "Fixed launch crashes using Crashlytics and device logs, including an iOS-only crash and a 40-second iOS login hang.",
        "Built game UI from Figma designs with DOTween, and custom Unity Editor tools for map and content work."
      ]
    },
    {
      company: "Abhiwan Technology Pvt Ltd",
      role: "Unity Developer, promoted to Team Lead",
      timeline: "Oct 2022 – Mar 2025",
      bullets: [
        "Led a team of 6 developers for about 6 months on client Unity projects across mobile and PC.",
        "Teen Patti: built the Unity client and game logic for a real-time card game using Socket.IO with a Node.js backend; tested 10 rooms of 6 players at the same time and delivered it to the client.",
        "Multiplayer virtual classroom: students and teachers join one shared room, built with Photon PUN2 and Agora voice chat.",
        "Adventure Trip: World Wonders (Google Play, 1K+ downloads): built solo for a client, with 20 locations, 7 mini-puzzles, Firebase cloud save and FCM notifications."
      ]
    }
  ],

  skills: [
    {
      category: "Unity",
      icon: "🎮",
      color: "#9d7cd8",
      items: ["Unity 6", "2D/3D", "C#", "URP", "Shader Graph", "VFX", "Addressables", "Unity Profiler", "Editor scripting", "WebGL"]
    },
    {
      category: "Multiplayer",
      icon: "🌐",
      color: "#38bdf8",
      items: ["UDP (LiteNetLib)", "Photon PUN2", "Socket.IO", "Agora Voice SDK"]
    },
    {
      category: "Backend",
      icon: "☁️",
      color: "#fb923c",
      items: ["Firebase Auth", "Firestore", "Realtime Database", "Cloud Functions", "FCM", "App Check", "Crashlytics", ".NET", "Node.js", "REST APIs", "DigitalOcean", "Postman"]
    },
    {
      category: "Mobile",
      icon: "📱",
      color: "#a78bfa",
      items: ["Android", "iOS", "In-App Purchases", "AdMob", "Google Play Console", "App Store Connect", "Android Studio", "Xcode"]
    },
    {
      category: "Tools",
      icon: "🛠️",
      color: "#34d399",
      items: ["Git", "Figma", "DOTween", "Claude Code", "OpenAI Codex", "Unity MCP"]
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
