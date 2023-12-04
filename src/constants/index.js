import {
    mobile,
    backend,
    creator,
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
    meta,
    kingsoft,
    tesla,
    shopify,
    threejs,
    bird,
    app,
    shopping
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Player",
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "DATA ANALYST",
      company_name: "KINGSOFT OFFICE",
      icon: kingsoft,
      iconBg: "#383E56",
      date: "Jan. 2023‐Aug.2023",
      points: [
        "Created models and data visualizations in response to data‐driven needs, and crafted insightful reports to enhance decision‐ making within the organization.",
        "Utilized SQL extensively for data extraction, manipulation, and aggregation. Created informative cost allocation reports that played a role in reducing unnecessary costs by 18%.",
        "Leads the team in organizing,summarizing,and tracking business data,captured valuable trends and patterns to facilitate timely and informed decision‐making across various departments.",

      ],
    },
    // {
    //   title: "Food Menu Web App",
    //   company_name: "PERSONAL PROJECT",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Aug. 2022‐Dec. 2022",
    //   points: [
    //    "Developed a Food Menu Web Application using Python and the Django web framework.",
    //    "Utilized Django’s integrated admin panel to streamline the management of menu content,simplifying tasks like adding,updating, and deleting menu items.",
    //    "Employed Django’s templating system to design dynamic and visually engaging menu item pages including crucial such as images, descriptions, and pricing.",
    //    "Constructed RESTful APIs to facilitate seamless interaction with the web application, ensuring efficient data retrieval and exchange.",
    //    "Designed and created MySQL database with entity relationship diagram, optimized to BCNF normal form to eliminate data redundancy and improve data integrity.",
    //   ],
    // },
    // {
    //   title: "Flappy Bird Remaster",
    //   company_name: "PERSONAL PROJECT ",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jun. 2023 ‐ Apr. 2023",
    //   points: [
    //     "Developing and maintaining web applicationsLed the development of the renowned ”Flappy Bird Game” using Java Swing framework and following Object‐Oriented Pro‐ gramming principles (OOP).",
    //     "Followed Agile development process,continually improved the project based on user feedback through iterative cycles.",
    //     "Implemented an interactive user interface using Java Swing,introducing animations and elevating the overall user experience.",
    //     "Implemented test‐driven development with JUnit testing,achieving comprehensive code coverage of 100%.",
    //     "Serialized complex data structures intoJSON format for light weight data storage.",
    //   ]
    // },
    
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Shopping Platform",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "NODE.JS",
          color: "pink-text-gradient",
        },
        {
          name: "EXPRESS",
          color: "pink-text-gradient",
        },
        {
          name: "JAVASCRiPT",
          color: "pink-text-gradient",
        },
        {
          name: "REST API",
          color: "pink-text-gradient",
        }
      ],
      image: shopping,
      source_code_link: "https://github.com/",
    },
    {
      name: "Food Menu Web App",
      description:
        "Embark on a gastronomic journey with FoodExplorer, the ultimate food menu app designed to tantalize your taste buds and simplify your dining experience. Whether you're a seasoned foodie or on a quest for your next culinary adventure, our app brings a world of flavors right to your fingertips.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "Dijango",
          color: "green-text-gradient",
        },
        {
          name: "RESTAPI",
          color: "pink-text-gradient",
        },
      ],
      image: app,
      source_code_link: "https://github.com/",
    },
    {
      name: "Flappy Bird Remaster",
      description:
        "Prepare for the ultimate nostalgic journey as Flappy Bird takes flight once again, reimagined and remastered for a new generation of gamers! ",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "SWiNG",
          color: "green-text-gradient",
        },
        {
          name: "AGiLE DEVELOPMENT",
          color: "pink-text-gradient",
        },
        {
          name: "OOP",
          color: "pink-text-gradient",
        },
      ],
      image: bird,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };