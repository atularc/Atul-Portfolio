// Portfolio Content Database - Atul Kumar Pandey
// Configured to strictly match Atul_Pandey_CV.pdf
window.portfolioData = {
  profile: {
    name: "Atul Kumar Pandey",
    title: "Unity Developer",
    tagline: "Unity Developer | Mobile Multiplayer Games | C#, Android, iOS",
    location: "Ghaziabad, India",
    bioTitle: "About Me",
    bioParagraphs: [
      "Unity Developer with 4+ years building and shipping mobile games in C#. Primary developer on Mystic Motors, a live real-time multiplayer racing game on Google Play and the App Store with 10K+ downloads, working across gameplay, networking, Firebase, monetisation and mobile performance. Former Team Lead of 6 developers. Uses AI coding tools daily to deliver faster, and checks the results on real devices."
    ],
    avatarFront: "/images/dp/20251118_210825.png",
    avatarBack: "/images/dp/20251118_210825.png",
    resumeUrl: "Atul_Pandey_CV.pdf",
    typedStrings: ["Atul Kumar Pandey", "a Unity Developer"],
    heroTags: ["Unity Developer", "4+ Years Experience", "Mobile Multiplayer Games", "C#, Android, iOS"]
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
      subtitle: "Android & iOS · TEC Ventures",
      description: "Live 8-player spell-based racing game built in Unity 6 with URP, Firebase and a .NET dedicated server. 10K+ downloads on Google Play.",
      highlights: [
        "Primary developer: car physics, bot racing AI, spell system, clans and socials",
        "Event-based .NET dedicated game server over UDP (LiteNetLib) on DigitalOcean: 90 Hz snapshot relay, checkpoint, finish and spell validation, speed and teleport checks, and bot-host failover",
        "Clans, social and chat systems; Firebase sign-in, matchmaking, Cloud Functions and push notifications",
        "Cut draw calls from about 900 to 300-500 to stop overheating and frame drops on phones"
      ],
      video: { id: "ZtlB-7UuvMg", duration: "4:56" },
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
      engine: "Unity 6",
      engineIcon: "/images/unity_logo.png",
      tags: ["Multiplayer", ".NET Server", "UDP", "Firebase", "URP", "Unity 6"],
      playStore: "https://play.google.com/store/apps/details?id=com.tecventures.mysticmotors",
      appStore: "https://apps.apple.com/app/id6612030544",
      link: "https://play.google.com/store/apps/details?id=com.tecventures.mysticmotors",
      featured: true
    },
    {
      title: "Classroom Metaverse",
      subtitle: "Client project · Abhiwan",
      description: "3D virtual campus where one teacher and up to 30 students log in, share a classroom, read and watch material in a library, and talk in brainstorming rooms by voice and video.",
      highlights: [
        "Separate teacher and student logins; the teacher joins the classroom directly",
        "Library room with in-app PDF reader and video player",
        "Brainstorming rooms where avatars sit on chairs and talk together",
        "Avatar movement and room state synced with Photon PUN2; voice and video calls with the Agora SDK"
      ],
      video: { id: "U4OOi_pec1I", duration: "1:52" },
      images: [],
      engine: "Unity 3D",
      engineIcon: "/images/unity_logo.png",
      tags: ["Photon PUN2", "Agora Voice & Video", "Multiplayer", "3D"]
    },
    {
      title: "Police Virtual HQ (UAE)",
      subtitle: "Government client · Abhiwan",
      description: "Multiplayer 3D virtual headquarters for a UAE police client: users walk through the lobby, corridors and meeting rooms, watch media walls and meet by voice and video.",
      highlights: [
        "Shared 3D office with lobby, corridors, media walls and meeting rooms",
        "Real-time avatar sync with Photon PUN2",
        "Voice chat and video calling in meeting rooms with the Agora SDK"
      ],
      video: { id: "VeuD3rnbnzc", duration: "1:15" },
      images: [],
      engine: "Unity 3D",
      engineIcon: "/images/unity_logo.png",
      tags: ["Photon PUN2", "Agora Voice & Video", "Multiplayer", "3D"]
    },
    {
      title: "3D Kitchen Configurator",
      subtitle: "Client project · Abhiwan",
      description: "Browser 3D kitchen designer for a client's website: shoppers customise cabinets, hardware, countertops, sinks, faucets and appliances in real time, then order the kitchen they designed.",
      highlights: [
        "Kitchen layout and every catalogue item loaded at runtime from the cloud with Addressables",
        "Swaps 3D models and textures/materials live from a category menu",
        "Built to be embedded on the client's website so customers can design and order"
      ],
      video: { id: "L8ccAegHyjM", duration: "3:37" },
      images: [],
      engine: "Unity WebGL",
      engineIcon: "/images/unity_logo.png",
      tags: ["Remote Addressables", "WebGL", "Runtime Model Swap", "3D"]
    },
    {
      title: "Adventure Trip: World Wonders",
      subtitle: "Google Play · Client project",
      description: "Hidden-object adventure across 20 world wonders with mini-games that unlock as levels are cleared. Main developer (about 80% of the game). 1K+ downloads on Google Play.",
      highlights: [
        "Core hidden-object gameplay and level progression",
        "7 mini-games that unlock as the player clears levels",
        "Firebase cloud save and FCM push notifications",
        "AppsFlyer SDK events for install and gameplay analytics"
      ],
      video: { id: "kDJyUJ4aeWo", duration: "3:10" },
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
      tags: ["Hidden Object", "Firebase", "FCM", "AppsFlyer"],
      playStore: "https://play.google.com/store/apps/details?id=com.Point8Games.AdventureTripWondersoftheWorld",
      link: "https://play.google.com/store/apps/details?id=com.Point8Games.AdventureTripWondersoftheWorld"
    },
    {
      title: "Flappy Adventure Tournaments",
      subtitle: "Client project · Abhiwan",
      description: "Flappy-style game with online seasonal and regular tournaments: players register, compete for the top score and climb a live leaderboard.",
      highlights: [
        "Wrote the whole Unity client and game logic",
        "Sign-up, login and forgot-password flows over REST APIs (Node.js backend)",
        "Seasonal and regular tournaments with ranked leaderboards and player profiles",
        "Optimistic UI and leaderboard updates so players rarely wait on loading screens"
      ],
      video: { id: "I6x2PGQuNn8", duration: "1:23", portrait: true },
      images: [],
      engine: "Unity 2D",
      engineIcon: "/images/unity_logo.png",
      tags: ["REST APIs", "Tournaments", "Leaderboards", "Auth"]
    },
    {
      title: "Kitty Dash",
      subtitle: "Google Play · Personal",
      description: "My own endless runner, built and published solo, with local Addressables for content and AdMob ads.",
      highlights: [
        "Endless track generation with object pooling",
        "Content packed in local Addressables groups, loaded and released at runtime",
        "AdMob rewarded and interstitial ads"
      ],
      video: { id: "8v7r8rBtu0Q", duration: "1:54" },
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
      tags: ["Addressables", "AdMob", "Object Pooling"],
      isPortrait: true,
      playStore: "https://play.google.com/store/apps/details?id=com.saturagames.kittydash&hl=en_IN",
      link: "https://play.google.com/store/apps/details?id=com.saturagames.kittydash&hl=en_IN"
    },
    {
      title: "Slot Game",
      subtitle: "Live WebGL · Personal",
      description: "Browser slot game with my own reel, symbol-matching, payline and win-probability logic, UI from Figma, optimised to run smoothly in WebGL.",
      highlights: [
        "Reel spin, symbol matching and payout logic in C#",
        "Weighted symbol probabilities to control the win rate",
        "WebGL build size and performance optimisation"
      ],
      video: { id: "4g2W9pB3suA", duration: "2:36" },
      images: [
        "/images/slot game/1.png",
        "/images/slot game/2.png",
        "/images/slot game/3.png",
        "/images/slot game/4.png",
        "/images/slot game/5.png"
      ],
      engine: "Unity WebGL",
      engineIcon: "/images/unity_logo.png",
      tags: ["WebGL", "C#", "DOTween", "Figma"],
      webglLink: "https://slotgameunityweb.netlify.app/",
      link: "https://slotgameunityweb.netlify.app/"
    },
    {
      title: "Rainbow Rush",
      subtitle: "Personal project",
      description: "Casual colour game with two modes: Merge & Grow, a physics merge game where matching colour drops combine into new colours, and Color Quest, a quiz on mixing and naming colours.",
      highlights: [
        "Physics-based drop-and-merge gameplay with score and personal best",
        "Swap and Shake boosters, earned through the quiz mode",
        "Colour-mixing and colour-name quiz with multiple-choice answers"
      ],
      video: { id: "0RL4MmYeqsM", duration: "2:10", portrait: true },
      images: [],
      engine: "Unity 2D",
      engineIcon: "/images/unity_logo.png",
      tags: ["Merge Game", "2D Physics", "Quiz", "Casual"]
    }
  ],

  unreleased: [],

  experience: [
    {
      company: "TEC Ventures Pty Ltd, Australia (Remote)",
      role: "Unity Developer",
      timeline: "Mar 2025 – Present",
      bullets: [
        "Took Mystic Motors, a spell-based 8-car multiplayer racer, through launch on Android and iOS and 8 App Store releases, with clans, chat, a garage and cosmetics.",
        "Delivered a .NET dedicated game server over UDP (LiteNetLib) using AI-assisted coding: 90 Hz world-snapshot relay, checkpoint, finish-order and spell validation, basic speed and teleport checks, and bots run on a host device with server failover. Connected it to the Unity client, tested it, and deployed sandbox and production on DigitalOcean.",
        "Built Firebase features: Google, Apple and guest sign-in, Firestore, Realtime Database lobbies and matchmaking, Cloud Functions, App Check, FCM notifications and Crashlytics.",
        "Built the original clans and social system with Socket.IO and Node.js, on both the Unity and server sides.",
        "Integrated in-app purchases on Android and iOS, AdMob ads, shop offers and crate rewards.",
        "Reduced overheating and frame drops on phones: cut draw calls from about 900 to 300-500, added LODs, skipped distant and off-screen objects, replaced heavy particles, and warmed up shaders during loading to stop spell hitches.",
        "Developed car physics, bot racing AI, the spell system, plus baked lighting and collision work on race maps in URP.",
        "Fixed launch crashes using Crashlytics and device logs, including an iOS-only crash and a 40-second iOS login hang.",
        "Built game UI from Figma designs with DOTween, and custom Unity Editor tools for map and content work."
      ]
    },
    {
      company: "Abhiwan Technology Pvt Ltd",
      role: "Unity Developer, promoted to Team Lead",
      timeline: "Oct 2022 – Mar 2025",
      bullets: [
        "Led a team of 6 developers for about 6 months on client Unity projects across mobile, PC and web.",
        "Classroom Metaverse: 3D virtual campus for one teacher and up to 30 students, with a library (PDFs and videos), brainstorming rooms and voice and video calls, built with Photon PUN2 and the Agora SDK.",
        "Police Virtual HQ for a UAE government client: multiplayer 3D office with meeting rooms, Photon PUN2 avatar sync and Agora voice and video.",
        "3D Kitchen Configurator (WebGL) for a client website: kitchens and catalogue items loaded at runtime from the cloud with Addressables; users swap models and finishes live, then order.",
        "Flappy Adventure Tournaments: Unity client with sign-up, login and password reset over REST APIs, seasonal tournaments and an optimistic-UI leaderboard.",
        "Teen Patti: built the Unity client and game logic for a real-time card game using Socket.IO with a Node.js backend; tested 10 rooms of 6 players at the same time and delivered it to the client.",
        "Adventure Trip: World Wonders (Google Play, 1K+ downloads): main developer of the hidden-object gameplay and mini-games, with Firebase cloud save, FCM notifications and AppsFlyer events."
      ]
    }
  ],

  skills: [
    {
      category: "Unity",
      icon: "🎮",
      color: "#9d7cd8",
      items: ["Unity 6", "2D/3D", "C#", "URP", "Addressables (local & remote)", "Unity Profiler", "Editor scripting", "WebGL"]
    },
    {
      category: "Multiplayer",
      icon: "🌐",
      color: "#38bdf8",
      items: ["UDP (LiteNetLib)", "Photon PUN2", "Socket.IO", "Agora Voice & Video SDK"]
    },
    {
      category: "Backend",
      icon: "☁️",
      color: "#fb923c",
      items: ["Firebase Auth", "Firestore", "Realtime Database", "Cloud Functions", "FCM", "App Check", "Crashlytics", "AppsFlyer", ".NET", "Node.js", "REST APIs", "DigitalOcean", "Postman"]
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
