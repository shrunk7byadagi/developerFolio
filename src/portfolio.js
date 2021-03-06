/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Shreyank Byadagi",
  title: "Hi all, I'm Shreyank",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with Java / Spring-Boot / JavaScript / Angularjs / Angular and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shrunk7byadagi",
  linkedin: "https://www.linkedin.com/in/shreyank-byadagi-26080aa0",
  gmail: "shrunk7byadagi@gmail.com",
  medium: "https://medium.com/@shrunk7byadagi",
  stackoverflow: "https://stackoverflow.com/users/6892893/shreyank-byadagi",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive User Interfaces and implement REST APIs "
    ),
    emoji(
      "⚡ Integration of third party services For underlying application"
    ),
    emoji(
      "⚡ Create CI/CD pipelines using Jenkins and Docker"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Acharya Institute of Technology",
      logo: require("./assets/images/acharya.jpeg"),
      subHeader: "Master of Technology in Computer Science",
      duration: "2014 - 2016"
    },
    {
      schoolName: "Dr.P G H College of Engineering",
      logo: require("./assets/images/bldea.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "2010 - 2014"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java",
      progressPercentage: "85%"
    },
    {
      Stack: "Spring-Boot",
      progressPercentage: "80%"
    },
    {
      Stack: "Angular-Js", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Angular-11", //Insert stack or technology you have experience in
      progressPercentage: "45%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Finflux",
      companylogo: require("./assets/images/finflux-one.png"),
      date: "Dec 2019 – Present",
      desc: "Customized Loan Management System",
      descBullets: [
        "Designed and Developed Notification Framework",
        "Integrated CRIF highmark sync based credit bureau enquiry API",
        "Integrated AADHAAR datavault with underlying loan origination system",
        "Created a custom CI/CD pipeline using Jenkins and Docker",
        "Implemented Knowlarity IVR outbound call integration"
      ]
    },
    {
      role: "Solution Integrator",
      company: "Ericsson",
      companylogo: require("./assets/images/eric.png"),
      date: "Sep 2018 - Nov 2019",
      desc: "Developed IoT platform for T-Mobile USA",
      descBullets: [
        "Involved in developing REST API for multiple components (Micro-services)",
        "Managed 2 interns and 3 Junior software professionals during the tenure of this project",
        "Involved in requirement gathering and Documented API specs for the same",
        "Created Automated deployment system for daily builds"
      ]
    },
    {
      role: "Java Developer",
      company: "Hp",
      companylogo: require("./assets/images/hp.jpeg"),
      date: "Nov 2017 - May 2018",
      desc: "Developed Predictive Press Care Solution for HP presses",
      descBullets: [
        "A robust, flexible technology platform PWP HP presses which are located across the globe to make sure they are up and running for 24/7. This application will predict and report the issues before it causes damage to the presses."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Mentor",
      subtitle: "Served as google code-in mentor for Mifos Organisation during 2016",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1wVScxV7HKHUiZtvUPpe68ENHTm0XHfvO/view?usp=sharing"
        }
      ]
    },
    {
      title: "Ericsson Spot Award",
      subtitle: "Implemented 20 APIs and resolved more than 25+ production issues in 3 weeks",
      image: require("./assets/images/ericsson.jpeg"),
      footerLink: [
        {
          name: "Award",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@shrunk7byadagi/automatically-start-tomcat-on-instance-startup-reboot-in-amazon-ec2-ubuntu-instance-33849a9d9090",
      title: "Automatically start Tomcat on instance startup/reboot in Amazon EC2-Instance",
      description: "Start you tomcat automatically on instance re-boot"
    },
    {
      url: "https://medium.com/the-angular-dark-secrets/lazy-loading-in-angular-7-vs-angular-8-62e3a6d5cbc1",
      title: "Lazy Loading in Angular 7 Vs Angular 8"
    },
    {
      url: "https://medium.com/@shrunk7byadagi/what-is-credit-report-what-is-its-importance-af016dc7a2d1",
      title: "What is Credit Report & What is its Importance ?"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9972423247",
  email_address: "shrunk7byadagi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
