import lfitCover from '../assets/images/lfitCover.png';
import unstrayCover from  '../assets/images/unstrayCover.png';
import expenseCover from  '../assets/images/expenseCover.png';
import lfitClubCover from '../assets/images/lfitClubCover.png';
import farmiCover from '../assets/images/farmiCover.png'; // Add this and the rest accordingly
import furnitureCover from '../assets/images/furnitureAppCover.png';
import newsAppCover from '../assets/images/exploreGithub.jpg';
import youtubeSummarizerCover from '../assets/images/exploreGithub.jpg';
import flocCover from '../assets/images/flocCover.png';

export const portfolioData = {
  name: "Ankit Khyalia",
  title: "Software Engineer",
  email: "10ankitkhyalia@gmail.com",
  phone: "8503873310",
  location: "Sikar, India",
  social: {
      github: "https://github.com/AnkitKhyalia", // Placeholder, replace with actual link
      linkedin: "https://www.linkedin.com/in/ankitkhyalia/", // Placeholder
      leetcode: "https://leetcode.com/u/Khyalia/",
  },
  introduction: "A passionate and driven Software Engineer with experience in building robust and scalable web applications. Proficient in the MERN stack, Next.js, and cloud technologies, with a strong foundation in data structures and algorithms. Eager to contribute to innovative projects and grow as a developer.",
  experience: [
    {
      role: "Junior Software Engineer",
      company: "ENTNT",
      period: "Jan 2024 - Present",
      description: [
        "Developed a Downtown Apartment Scheduling system using React and Node.js, improving user scheduling experience by 40%.",
        "Designed and maintained the company's Recruitment Portal using React, Tailwind CSS, MySQL, and Azure, streamlining candidate management and reducing hiring cycle time by 30%.",
        "Created an internal Employee Portal with a comprehensive leave management system integrated with Microsoft Graph API, enhancing HR workflows and leave approvals by 35%.",
        "Built a high-accuracy Shipping OCR tool using React and C# (.NET), automating data extraction with 95%+ precision.",
        "Executed 5+ client projects using React, .NET, and Azure, consistently meeting business requirements."
      ]
    },
    {
      role: "Intern Front End Developer",
      company: "A2it Private Limited",
      period: "May 2023 - Jul 2023",
      description: [
        "Actively contributed to Android app development, gaining practical experience in app creation.",
        "Helped design and roll out a user-facing feature that enhanced engagement metrics by 15%.",
        "Attained expertise in key Android development tools and technologies, including Kotlin, XML, and Android SDK."
      ]
    }
  ],
 projects: [
  {
    title: "Lfit",
    shortDescription: "Mobile fitness app with workout tracking, custom meals, and detailed analytics.",
    detailedDescription: "Deployed Lfit mobile application on the Play Store, utilising React Native for the frontend and Node.js, Express, and MongoDB for the backend. Implemented features enabling users to log diets, log workouts, save custom meals, and create personalised workout routines. Includes analytics tracking progress trends and workout streaks. Built a database of 800+ exercises and 8,000+ meals.",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
    link: "https://weblfit.vercel.app/",
    image: lfitCover
  },
  {
    title: "Lfit Club",
    shortDescription: "Gym owner portal for member management and expense tracking.",
    detailedDescription: "Enables gym owners to create profiles, add members, manage expenses, and assign workout templates. Integrated 20+ workout templates and a scalable user management system. Supports owner-side analytics, gym-specific workout programming, and user tracking features.",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
    link: "https://weblfit.vercel.app/",
    image: lfitClubCover
  },
  {
    title: "Unstray",
    shortDescription: "Full-stack platform for stray animal adoption with real-time messaging.",
    detailedDescription: "Built with Next.js for SSR performance and integrated backend APIs using Node.js. Allows users to upload stray animal profiles, authenticate via Google using NextAuth.js, and message in real-time using Socket.IO to coordinate adoptions. Focuses on community-driven animal rescue and transparent interaction.",
    tech: ["Next.js", "Node.js", "NextAuth.js", "Socket.IO"],
    link: "https://unstray-wrh4.vercel.app/",
    image: unstrayCover
  },
  {
    title: "Expense Tracker",
    shortDescription: "Budgeting web app with JWT authentication and responsive UI.",
    detailedDescription: "Crafted a personal budgeting and expense management app using the MERN stack. Features secure JWT-based auth, responsive multi-budget UI, financial goal tracking, and dynamic expense visualisation. Helps users gain control over personal finances.",
    tech: ["MERN Stack", "JWT", "React"],
    link: "https://expense-navy-three.vercel.app/",
    image: expenseCover
  },
  {
    title: "FLOC – Mock Location Provider",
    shortDescription: "Android mock location app with Razorpay integration and CRUD features.",
    detailedDescription: "Android app to spoof GPS location. Users can save, edit, and delete favorite mock locations. Razorpay integration handles secure transactions. Built using Jetpack Compose and XML for sleek UI with smooth animations. Full-featured location spoofing with CRUD and payment support.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Razorpay"],
    link: "https://github.com/AnkitKhyalia/Floc.git",
    image: flocCover
  },
  {
    title: "Farmi App",
    shortDescription: "Marketplace app for farmers and buyers with AI chatbot and mandi prices.",
    detailedDescription: "Android app allowing farmers to list products and customers to filter by location, attach images in reviews, and check mandi prices. Integrated AI chatbot for assistance. Utilized MVVM architecture with Kotlin and Firebase for real-time updates and secure authentication.",
    tech: ["Kotlin", "MVVM", "Firebase"],
    link: "https://github.com/AnkitKhyalia/Floc.git",
    image: farmiCover
  },
  {
    title: "Furniture E-Commerce App",
    shortDescription: "Android e-commerce app with admin panel, animations, and real-time data.",
    detailedDescription: "User-friendly furniture shopping app with secure cart system, product browsing, and admin panel. Firebase powers real-time updates and user auth. Jetpack Compose and XML used for UI, enhanced with smooth animations. MVVM architecture ensures maintainability and a 25% reduction in code complexity.",
    tech: ["Kotlin", "Firebase", "Jetpack Compose", "MVVM"],
    link: "https://github.com/AnkitKhyalia/E_Commerece_App_Furniture_App",
    image: furnitureCover
  },
  {
    title: "News App",
    shortDescription: "Android app to view top country news using real-time News API.",
    detailedDescription: "Responsive Android news app built using Kotlin and Jetpack Compose. Integrated News API for real-time news delivery. MVVM architecture improved reliability and testing efficiency by 20%. Designed for scalability with minimal coding challenges.",
    tech: ["Kotlin", "Jetpack Compose", "News API", "MVVM"],
    link: "https://github.com/AnkitKhyalia/NewsApp",
    image: newsAppCover
  },
  {
    title: "YouTube Video Summarizer",
    shortDescription: "Desktop app that summarizes YouTube videos in English or Hindi.",
    detailedDescription: "Desktop software that takes a YouTube URL and outputs summarized content in Hindi or English. Reduces consumption time by 50% and delivers 90%+ precision. Ideal for quickly understanding long videos. UI built for ease of use with minimal friction.",
    tech: ["Desktop App", "YouTube API", "Speech-to-Text", "AI/NLP"],
    link: "https://github.com/AnkitKhyalia/YouTube_Video_Summarizer",
    image: youtubeSummarizerCover
  }
  
],
  skills: [
    "C/C++", "JavaScript", "TypeScript", "HTML/CSS", "React.js", "React Native",
    "Next.js", "Node.js", "Express", "Tailwind CSS", "SQL", "MongoDB", "Rest APIs"
  ],
  education: {
    degree: "BTech, Computer Science and Engineering",
    institution: "NIT Jalandhar",
    period: "2020 - 2024",
    cgpa: "7.89"
  },
  accomplishments: [
      {
          title: "700+ DSA Problems Solved",
          source: "LeetCode, GFG",
          description: "Solved over 700 coding problems, strengthening algorithmic and problem-solving skills."
      }
  ]
};