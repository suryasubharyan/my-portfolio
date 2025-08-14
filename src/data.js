import profilePic from "./assets/profile.jpg";

export const resumeData = {
  name: "Shubham Kumar Thakur",
  title: "Full Stack Developer",
  location: "Bihar, India",
  email: "suryasubharyan@gmail.com",
  profileImage: profilePic,
  
  intro: `I'm a software engineer from Bihar. I love building open-source projects and writing about what I learn.
          This portfolio is my digital garden — a compendium of the things I've created and explored.`,

  // Social Links for Hero.js
  social: {
    linkedin: "https://linkedin.com/in/shubham-thakur-6504b7229",
    github: "https://github.com/SHUBHAMTHAKUR9",
    leetcode: "https://leetcode.com/u/6207015637/",
    gfg: "https://www.geeksforgeeks.org/user/shubham_thakur009/",
    // codechef: "https://www.codechef.com/users/your-username"
  },

  projects: [
    { name: "Blog App", date: "Jan 2025", link: "https://one-last-option.onrender.com" },
    { name: "Newsletter Landing Page", date: "Jul 2024", link: "https://github.com/SHUBHAMTHAKUR9/newsletter" }
  ],

  articles: [
    { title: "Creating a Schema-Based Form System", date: "Jan 31", link: "#" },
    { title: "2021 into 2022", date: "Jan 01", link: "#" }
  ],

  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    database: ["MongoDB", "MySQL", "PostgreSQL"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "AWS"],
    fundamentals: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"]
  },

  education: [
    {
      degree: "B.Tech in Computer Science and engineering",
      institution: "Indian Institute of Information Technology, Agartala",
      year: "2021 - 2025",
      details: "Graduated with a strong foundation in software engineering, specializing in full-stack development."
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "XYZ Senior Secondary School, Bihar",
      year: "2018 - 2020",
      details: "Focused on PCM with Computer Science."
    }
  ],

  internships: [
    {
    role: "Junior Software Engineer Intern",
    company: "EPAM Systems",
    year: "jan 2025 - June 2025",
    details: "Worked on production-level tech stack including JavaScript, React, Node.js, Express, and MongoDB. Collaborated in an Agile cross-functional team, participated in code reviews, and contributed to developing scalable, maintainable features."
  },
  {
    role: "software engineer intern",
    company: "Onlinejaoo",
    year: "may 2024 - july 2024",
    details: "Developed and optimized user interfaces using React.js and inline styling, improving load performance and user experience.optimized sql, implemented jwt."
  }
  ],
  
  about: `I am a passionate developer who enjoys solving problems and building scalable, maintainable, and user-friendly applications.
           With experience in MERN stack and cloud deployments, I aim to deliver impactful solutions.`,

  contact: {
    email: "suryasubharyan@gmail.com",
    github: "https://github.com/SHUBHAMTHAKUR9",
    linkedin: "https://linkedin.com/in/shubham-thakur-6504b7229"
  }
};
