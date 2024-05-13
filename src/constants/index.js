import {
    mobile,
    frontend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    angular,
    tailwind,
    swift,
    git,
    ionic,
    cabinremote,
    inflight,
    passwordmanager,
    java
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Application Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Swift",
      icon: swift,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Ionic",
      icon: ionic,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "Engineer",
      company_name: "eInfochips - An Arrow Company",
      icon: "",
      iconBg: "#383E56",
      date: "June 2019 - Mar 2023",
      points: [
        "Developing and maintaining hybrid applications using Angular and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Senior Engineer (Level 1)",
      company_name: "eInfochips - An Arrow Company",
      icon: "",
      iconBg: "#E6DEDD",
      date: "Apr 2023 - Nov 2023",
      points: [
        "Spearheaded the development of a native mobile app for controlling venue cabin systems in diverse aircrafts, ensuring precision and adaptability to varying configurations.",
        "Engaging in daily stand-up meetings, sprint planning sessions, and retrospective meetings, I collaborated closely with cross-functional teams to ensure timely delivery of features and enhancements.",
        "Acknowledged for mentoring fellow developers, fostering skill enhancement, and contributing to the overall effectiveness of the team",
        "Received commendations on two occasions for delivering high-quality code and demonstrating efficient problem-solving skills throughout the project.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Cabin Remote",
      description:
        "Native mobile app for controlling venue cabin systems in diverse aircrafts, ensuring precision and adaptability to varying configurations.",
      tags: [
        {
          name: "Android",
          color: "blue-text-gradient",
        },
        {
          name: "iOS",
          color: "green-text-gradient",
        },
      ],
      image: cabinremote,
      source_code_link: "https://github.com/",
    },
    {
      name: "In-Flight Entertainment",
      description:
        "Hybrid Application in-flight entertainment app tailored for private aircraft, enhancing the passenger experience, satisfaction, and comfort during air travel.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Ionic",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
      ],
      image: inflight,
      source_code_link: "https://github.com/",
    },
    {
      name: "Password Manager",
      description:
        "React app that securely stores and manages user passwords, providing easy access while ensuring encryption and protection against unauthorized access.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
      ],
      image: passwordmanager,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };