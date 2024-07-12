import {
    mobile,
    backend,
    cyber_security,
    coding,
    data_science,
    tent,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    skyvin,
    jobit,
    tripguide,
    threejs,
    cow,
    c_sharp,
    c_pp,
    linux,
    python,
    r,
    ubuntu,
    java,
    CEOSky

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
      title: "Cyber Security ",
      icon: cyber_security,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Scientist",
      icon: data_science,
    },
    {
      title: "Machine Learning",
      icon: coding,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C++",
      icon: c_pp,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
  
    
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "R",
      icon: r,
    },
    {
      name: "Ubuntu",
      icon: ubuntu,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Skyvin Logistics LTD",
      icon: tent,
      iconBg: "#383E56",
      date: "August 2022 - December 2022",
      points: [
        "Developed and maintained Skyvin's website, improving user experience and brand image",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to ensure website functionality aligned with business goals.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "IT assistant ",
      company_name: "Limuru Dairy Farmers Co-operative Society LTD",
      icon: cow,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Oct 2023",
      points: [
        "Tamed tech troubles. Ensured smooth network flow (reduced downtime by 20%).",
        "Empowered users with new technology (revamped company website).",
        
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I never thought a website could match the beauty of our product, but Chris proved me wrong.",
      name: "Hellen Wairimu",
      designation: "CEO",
      company: "Skyvin Logistics LTD",
      image: CEOSky,
    },
    
  ];
  
  const projects = [
    {
      name: "Event Service provider",
      description:
        "Web-based platform that allows users to explore event images, contact service providers, and learn about services offered, providing a convenient and comprehensive solution for event planning.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: skyvin,
      source_code_link: "https://github.com/CMukiri/Skyvin-Service-Ltd.",
    },
    
    
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };