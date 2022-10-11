module.exports = {
  email: "babalolaife@yahoo.com",

  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/TemiAfikode",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/temi-afikode",
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Projects",
      url: "/#projects",
    },
    {
      name: "Experience",
      url: "/#jobs",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],

  colors: {
    green: "#64ffda",
    navy: "#0a192f",
    darkNavy: "#020c1b",
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),

  seo: {
    title: "Temitope Babalola's Portfolio",
    description:
      "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
    og: {
      title: "Temitope Babalola Portfolio",
      type: "website",
      url: "http://temibabalola.com/",
      image: "http://temibabalola.com/images/temi-img.jpg",
    },
    image: "http://temibabalola.com/images/temi-img.jpg",
    twitter: "temibabalola",
  },

  projects: [
    {
      name: "Day Planner App",
      description:
        "A daily task management application to help people achieve their daily goals",
      stacks: "Mongodb,Express,React,Node.js",
      link: "https://github.com/TemiAfikode/Temi-day-planner.git",
      external: "https://temi-day-planner.herokuapp.com",
    },
    {
      name: "Flappy Bird",
      description:
        "A game of Flappy Bird made in pure JavaScript, HTML and CSS",
      stacks: "Javascript,HTML,CSS",
      link: "https://github.com/TemiAfikode/flappy-bird.git",
    },
    {
      name: "Skincare App",
      description: "A small skincare business application",
      stacks: "Node.js,express,pug,mongodb",
      link: "https://github.com/TemiAfikode/SKINCARE-APP.git",
    },
    {
      name: "Cats App",
      description:
        "Cats App is a system that manages information about different cat breeds. Cats APP has various functionalities including: creating, updating and deleting cats.",
      stacks: "Node.js,express,pug,mongodb",
      link: "https://github.com/TemiAfikode/CATS-APP.git",
    },
    {
      name: "Nutrition App",
      description:
        "Nutrition-app is a system that provides recipes based on a search input alongside additional information about each ingredient list as well as the total number of recipe calories.",
      stacks: "Node.js,express",
      link: "https://github.com/TemiAfikode/NUTRITION-APP.git",
    },
  ],

  jobs: [
    {
      title: "Human Resource Intern",
      employer: "@Ismile Technologies, Illinois, Chicago",
      description:
        "Post job openings on LinkedIn, review applications, screen resumes and select candidates for interview. Assist with maintenance of digital and electronic records of employees and ensure accuracy of information stored in the database.",
      duration: "Jun. 2020 - Jan. 2021",
    },
    {
      title: "Human Resource Coordinator",
      employer: "@Smartwatt Technologies, Lagos, Nigeria",
      description:
        "Fostered positive employee relations through proactive employee communications and the prompt resolution of employee inquiries and issues. Maintained the confidentiality of personal employee information, company information, records, and related issues in accordance with all the applicable laws.",
      duration: "Jul. 2015 - Sept. 2018",
    },
    {
      title: "Branch Customer Service Assistant Manager",
      employer: "@Guaranty Trust Bank Plc",
      description:
        "Trained customer service representatives and managers in five struggling branches, and contributed to significant improvements in the branches’ CSI. Elevated the branch’s customer-satisfaction index (CSI) from 64% to 83% within twelve months by ensuring swift resolution of customer issues to preserve customer loyalty.",
      duration: "Nov. 2013 - Feb. 2015",
    },
  ],
};
