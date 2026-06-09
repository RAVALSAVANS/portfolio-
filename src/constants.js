// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import PsdLogo from './assets/tech_logo/PSD.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import WordpressLogo from './assets/tech_logo/WordPress.png';
import LessLogo from './assets/tech_logo/less.png';
import MagetoLogo from './assets/tech_logo/magento2.jpg';
// Experience Section Logo's
import excelptpLogo from './assets/company_logo/excel_ptp.jpg';
import cwsLogo from './assets/company_logo/capacity_web_solution.jpg';
import DALogo from './assets/education_logo/Da_logo.png';
import KDLogo from  './assets/education_logo/KD_Polytechnic_Logo.png';

// Project logos (kept)
import bikestore from './assets/work_logo/bike.jpg';
import aspirefinance from './assets/work_logo/aspire.jpg';
import footwear from './assets/work_logo/footwear.jpg';
import gethoot from './assets/work_logo/gethoot.png';
import advancedprofessional from './assets/work_logo/advancedprofessional.png';
import CWS from './assets/work_logo/cws.png';
import E3roofing from './assets/work_logo/E3roofing.png';
import nexora from './assets/work_logo/nexora.png';
import intercall from './assets/work_logo/intercall.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Wordpress', logo: WordpressLogo },
      { name: 'Magento2', logo: MagetoLogo },
       { name: 'Less', logo: LessLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'PSD', logo: PsdLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: excelptpLogo,
      role: "frontend developer",
      company: "ExcelPTP",
      date: "03/2024 - 08/2024",
      desc: "Developed responsive websites using HTML, CSS, and Bootstrap. Built interactive components and dynamic UIs using JavaScript and React js. Integrated APIs to fetch and display data in projects.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
      ],
    },
    {
      id: 1,
      img: cwsLogo,
      role: "frontend developer",
      company: "capacity web solutions",
      date: "09/2024 - PRESENT",
      desc: "Designed and developed a fully functional e-commerce website for showcasing products online. Implemented product listings, a shopping cart, and a checkout system. Performed SEO checking and website speed optimization. Used HTML, CSS, JavaScript, and jQuery for interactivity and responsive Design.",
      skills: [
        "JavaScript",
        "HTML",
        "CSS",
        "Less",
        "Sass",
        "SQL",
      ],
    },
  ];
  export const education = [
  {
    id: 0,
    img: DALogo,
    school: "DA Degree College, Mehmdabad gujrat",
    date: "Sept 2021 - Aug 2024",
    grade: "79.4%",
    desc: "I completed my Bachelor's degree in Computer Engineering from DA Degree College  Of Management Mehmdabad gujrat. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology.",
    degree: "Bachelor in Computer Engineering - BE",
  },
  {
    id: 1,
    img: KDLogo,
    school: "KD Polytechnic",
    date: "Apr 2017 - March 2021",
    grade: "67%",
    desc: "I completed my Diploma in Computer Engineering from KD Polytechnic where I gained strong fundamentals in programming, software development, and core computer engineering concepts.",
    degree: "Diploma in Computer Engineering",
  },
];
  
  export const projects = [
   {
    id: 0,
    title: "magento 2 Bike store",
    description:
      "A fully responsive e-commerce bike store built with Magento 2, HTML5, and LESS. The project includes product listing pages, dynamic components, and optimized UI/UX for a seamless shopping experience.",
    image: bikestore,
    tags: ["HTML5","Less","Php","javascript","jQuery"],
    webapp: "https://phpstack-1456659-5534715.cloudwaysapps.com/bike/bike_v1/",
  },
  {
    id: 1,
    title: "Aspire finance",
    description:
     "A custom WordPress landing page for Aspire Finance - quick personal loans & financing. Features: loan calculator tool, eligibility checker form, trust badges/testimonials, FAQ accordion, application CTA. Built with HTML5, CSS, ACF Pro, JavaScript/jQuery for interactive elements. Responsive, speed-optimized (<2s), conversion-focused design.",
    image: aspirefinance,
    tags: ["HTML5","wordpress","Php","ACF pro","javascript","jQuery" ],
     github: "https://github.com/RAVALSAVANS/aspire_finance",
    webapp: "https://phpstack-1456659-5541754.cloudwaysapps.com/",
  },
    {
    id: 2,
    title: "E3roofing",
    description:
     "A custom WordPress landing page for E3 Roofing - professional roof repair & installation services. Features: dynamic service sections (metal roofing, shingles), free quote request form with ACF, before/after project gallery slider, customer testimonials, Google Maps integration, and CTA buttons. Developed with HTML5, CSS3, ACF Pro, JavaScript/jQuery. Fully responsive across devices, optimized for local SEO and fast loading.",
    image: E3roofing,
    tags: ["HTML5"  ,"wordpress","Php","ACF pro","javascript","jQuery" ],
     github: "https://github.com/RAVALSAVANS/E3roofing",
    webapp: "https://phpstack-1456659-5541769.cloudwaysapps.com/",
  },
    {
    id: 3,
    title: "gethoot",
    description:
      "A full-featured WordPress website for Hoot audio collaboration platform. Built with HTML5, CSS3, ACF Pro for custom fields, and vanilla JavaScript for interactivity. Key features: fully responsive design (mobile-first), page speed optimization (under 2s load), dynamic content management, contact forms, and SEO-optimized structure.",
    image: gethoot,
    tags: ["HTML5","CSS3","Javascript"],
     github: "https://github.com/RAVALSAVANS/gethoot",
    webapp: "https://gethoot.com/",
  },
     {
    id: 4,
    title: "advancedprofessional",
    description:
      "A comprehensive WordPress website for AdvancedProfessional.com - premium professional services platform. Key features: service portfolios with ACF custom fields, client testimonial carousel, appointment booking system, blog for industry insights, multi-location Google Maps, secure contact forms. Mobile-responsive, SEO-ready, optimized for 90+ Lighthouse score.",
    image: advancedprofessional,
    tags: ["HTML5","CSS3","Javascript"],
     github: "https://github.com/RAVALSAVANS/advancedprofessional",
    webapp: "https://advancedprofessional.com/",
  },
  {
    id: 5,
    title: "Capacity web solutions",
    description: "Custom WordPress site for Capacity Web Solutions - web development agency. Added: portfolio showcase (ACF gallery), case studies, client logos slider, service inquiry form, blog/team pages, performance optimized. Tech: HTML5, CSS3, PHP, ACF Pro, JavaScript/jQuery. Mobile-first, SEO-ready, fast loading on Cloudways.",
    image: CWS,
    tags: ["HTML5","CSS3","Javascript"],
     github: "",
    webapp: "https://wordpress-1456659-6274190.cloudwaysapps.com/",
  },
  {
    id: 6,
    title: "footwear simple demo",
    description:
      "A clean and responsive footwear brand landing page created using HTML5, CSS3, and JavaScript. Features modern UI components, smooth animations, and mobile-friendly layouts.",
    image: footwear,
    tags: ["HTML5","CSS3","Javascript"],
     github: "https://github.com/RAVALSAVANS/footwear-",
    webapp: "https://phpstack-1456659-5533839.cloudwaysapps.com/stella-footwear/",
  },
   {
  id: 7,
  title: "intercall Systems",
  description: "Custom WordPress website redesign for Intercall Systems. Developed a fully responsive and SEO-friendly website with dynamic content management using ACF Pro. Implemented custom sections, client logo slider, service inquiry and contact forms using Contact Form 7, blog and team pages, and interactive UI elements with JavaScript/jQuery. Focused on performance optimization, mobile-first design, and fast loading for an enhanced user experience. Tech: WordPress, PHP, HTML5, CSS3, JavaScript/jQuery, ACF Pro, Contact Form 7.",
  image: intercall,
  tags: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "ACF Pro"],
  github: "https://github.com/RAVALSAVANS/intercall-system-",
  webapp: "http://bboosters.com/bbexmarketing/Intercall-Systems/CMS/",
},
   {
    id: 8,
    title: "Nexora ai",
    description:
      "A clean and responsive Nexora ai landing page created using react js ,Tailwind CSS . Features modern UI components, smooth animations, and mobile-friendly layouts.",
    image: nexora,
    tags: ["React js ","Tailwind CSS","vite"],
    webapp: "https://nexora-ai2.netlify.app/",
  },
  ];  
