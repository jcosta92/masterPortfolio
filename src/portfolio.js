/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "José's Résumé",
  description: "An experienced Sales Engineer, passionate about Data and AI.",
  og: {
    title: "José Costa Résumé",
    type: "website",
    url: "https://github.com/jcosta92/",
  },
};

//Home Page
const greeting = {
  title: "José Costa",
  logo_name: "JoséCosta",
  //nickname: "handyman",
  subTitle: "An experienced Sales Engineer, passionate about AI and Data.",
  resumeLink: "https://www.linkedin.com/in/josecosta1992/",
  portfolio_repository: "https://github.com/jcosta92/",
  githubProfile: "https://github.com/jcosta92/",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/jcosta92/",
  // linkedin: "https://www.linkedin.com/in/josecosta1992/",
  // hotmail: "josep.q.g.costa@hotmail.com",

  {
    name: "Github",
    link: "https://github.com/jcosta92/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/josecosta1992/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Hotmail",
    link: "mailto:josep.q.g.costa@hotmail.com",
    fontAwesomeIcon: "fa-microsoft", // Reference https://fontawesome.com/icons/microsoft?f=brands&s=solid
    backgroundColor: "#365fd1", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Sales Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Led and developed B2B offers with a total value of over €10M in the logistics sector for +6 years",
        "⚡ Requirements Management by importing tenders with ReqMan, attributing and classifying technical requirements",
        "⚡ Coordination with Engineering teams to develop solutions that meet customer needs and align with company capabilities",
        "⚡ Main point of contact for all national customers",
        "⚡ Responsible for the entire sales cycle, from prospecting to closing, including RFPs, internal approvals, bid calculation and documentation",
      ],
      softwareSkills: [
        {
          skillName: "Sales Engineering",
          fontAwesomeClassname: "mdi:account-tie",
          style: {
            color: "#0A66C2",
          },
        },
        {
          skillName: "Bid Management",
          fontAwesomeClassname: "mdi:file-document-edit-outline",
          style: {
            color: "#2E7D32",
          },
        },
        {
          skillName: "Requirements",
          fontAwesomeClassname: "mdi:clipboard-check-outline",
          style: {
            color: "#6A1B9A",
          },
        },
        {
          skillName: "Key Accounts",
          fontAwesomeClassname: "mdi:handshake-outline",
          style: {
            color: "#EF6C00",
          },
        },
      ],
    },
    {
      title: "Data Analytics & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Excel facilitator for Sales and Management teams, developing tools for automation and KPI analysis",
        "⚡ Developed a prediction model in Big Data and data visualization projects using Tableau",
        "⚡ Data analysis and cleaning with Python and SQL",
        "⚡ Experience of working with NLP projects and Web Scrapping",
        "⚡ GenAI and Cloud enthusiastic learner and practitioner",
      ],
      softwareSkills: [
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "carbon:sql",
          style: {
            backgroundColor: "transparent",
            color: "#00758F",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
      ],
    },
    {
      title: "Procurement Management",
      fileName: "LogisticsImg",
      skills: [
        "⚡ Main resposible for purchasing requisitions in our unit",
        "⚡ Managing SAP processes from requisition to reception of material",
        "⚡ Contact with all the suppliers",
        "⚡ Logististics management with transportation companies",
      ],
      softwareSkills: [
        {
          skillName: "SAP",
          fontAwesomeClassname: "simple-icons:sap",
          style: { color: "#0FAAFF" },
        },
        {
          skillName: "Procurement",
          fontAwesomeClassname: "fa-solid:file-invoice-dollar",
          style: { color: "#F59E0B" },
        },
        {
          skillName: "Supplier Management",
          fontAwesomeClassname: "fa-solid:handshake",
          style: { color: "#2563EB" },
        },
        {
          skillName: "Logistics",
          fontAwesomeClassname: "fa-solid:truck",
          style: { color: "#EA580C" },
        },
      ],
    },
    {
      title: "Project Management",
      fileName: "PMImg",
      skills: [
        "⚡ Managed a contract maintenance project with a team of 2 technicians, ensuring timely resolution of incidents and supply of spare parts",
        "⚡ Responsible for project management of an IT Retrofit project",
        "⚡ Currently managing Customer Service incidents",
      ],
      softwareSkills: [
        {
          skillName: "MS Project",
          imageSrc: "MSProject.png",
        },
        {
          skillName: "Team Leadership",
          fontAwesomeClassname: "fa-solid:users",
          style: {
            color: "#1D4ED8",
          },
        },
        {
          skillName: "Maintenance",
          fontAwesomeClassname: "fa-solid:wrench",
          style: {
            color: "#64748B",
          },
        },
        {
          skillName: "Customer Service",
          fontAwesomeClassname: "fa-solid:headset",
          style: {
            color: "#F59E0B",
          },
        },
        {
          skillName: "SharePoint",
          imageSrc: "Sharepoint.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Ironhack",
      subtitle: "Data Analytics - Intensive Bootcamp",
      logo_path: "ironhack.svg",
      alt_name: "Ironhack",
      duration: "2023",
      descriptions: [
        "⚡ Completed a Data Analytics Bootcamp, learning how to use Python, SQL, Pandas, NumPy, Statistics, Probability, Hypothesis Testing, and Relational Database Basics.",
        "⚡ Applied ETL, Data Scrubbing and ETL workflows, Data Cleaning and Preprocessing, Feature Engineering, JOINs, Aggregations, Query Performance optimization and Exploratory Data Analysis.",
        "⚡ Created dynamic Tableau BI dashboards and reports.",
        "⚡ Explored machine learning fundamentals, including Regression Analysis, Classification Analysis, Clustering Analysis, NLP, Model Assessment techniques and Predictive Analytics Processes.",
        "⚡ Developed practical applications through working with API's, Web Scraping tools, automated script menus.",
      ],
      website_link: "https://www.ironhack.com/",
    },
    {
      title: "University of Ljubljana",
      subtitle: "Erasmus+ Program | MSc in Mechanical Engineering",
      logo_path: "ljubljana.png",
      alt_name: "University of Ljubljana",
      duration: "2015 - 2016",
      descriptions: [
        "⚡ Studied and did projects on subjects such as Renewable Energy Sources, Production Planning and Control, Refrigeration, Investment Engineering and Energy Systems.",
        "⚡ Developed social intelligence and intercultural communication skills.",
        "⚡ Improved language skills.",
        "⚡ Traveled and explored new cultures through Eastern europe.",
      ],
      website_link: "https://www.uni-lj.si/en",
    },
    {
      title: "Universidade de Coimbra",
      subtitle: "MSc in Mechanical Engineering",
      logo_path: "coimbra.png",
      alt_name: "Universidade de Coimbra",
      duration: "2010 - 2017",
      descriptions: [
        "⚡ Studied several subjects such as Physics, Mathematics, Thermodynamics, Fluid Mechanics, Heat Transfer, Programming, Probability and Statistics.",
        "⚡ Developed social skills and teamwork through group projects and assignments.",
        "⚡ Master thesis on the topic of Forest Fire Propagation in Double Canyons.",
      ],
      website_link: "https://www.uc.pt/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Azure Cloud Foundamentals",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/?practice-assessment-type=certification",
      alt_name: "Microsoft",
      color_code: "#4285F499",
    },
    {
      title: "GenAI with LLMs",
      subtitle: "- DeepLearning.AI & AWS",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/learn/generative-ai-with-llms?utm_medium=sem&utm_source=gg&utm_campaign=b2c_emea_x_multi_ftcof_career-academy_cx_dr_bau_gg_pmax_gc_s1_en_m_hyb_23-12_desktop&campaignid=20858198824&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&creativeid=&assetgroupid=6490027433&targetid=&extensionid=&placement=&gad_source=1&gad_campaignid=20854471652&gbraid=0AAAAADdKX6Y22_gUYMTOyubXBd_LDDsBw&gclid=CjwKCAjwtcHPBhADEiwAWo3sJgoHev9CHCIutsfpsAq9ARhF6MzQp_yURSAp6ZGNXhW4clqs7CSE8xoCi4YQAvD_BwE",
      alt_name: "deeplearning.ai",
      color_code: "#D83B0199",
    },
    {
      title: "LEAN Business",
      subtitle: "- Siemens",
      logo_path: "siemens.png",
      certificate_link: "https://www.siemens.com/en-us/",
      alt_name: "Siemens",
      color_code: "#0C9D5899",
    },
    {
      title: "Safety at Work Superior Technician",
      subtitle: "- ACT",
      logo_path: "act.png",
      certificate_link: "https://portal.act.gov.pt/Pages/CertTec.aspx",
      alt_name: "ACT",
      color_code: "#9ea5a199",
    },
    {
      title: "First Aid Training",
      subtitle: "- Cruz Vermelha Portuguesa",
      logo_path: "cruz.png",
      certificate_link:
        "https://www.cruzvermelha.pt/o-que-fazemos/ensino-formacao/",
      alt_name: "Cruz Vermelha Portuguesa",
      color_code: "#ffffff99",
    },
    {
      title: "Emmotional Intelligence",
      subtitle: "- Paulo Moreira",
      logo_path: "ei.png",
      certificate_link: "https://ciie.paulojmoreira.com/ciie",
      alt_name: "Paulo Moreira",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  //subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked in big corporate environments within the Energy and Logistics sectors. I have experience in working with cross-functional teams and management, allowing me to contribute to the company's business development.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Sales Engineer",
          company: "Körber Supply Chain ",
          company_url: "https://koerber-supplychain.com/",
          logo_path: "korber.png",
          duration: "July 2022 - Present",
          location: "Lisbon, Portugal",
          description: [
            "Leading all national offers and supporting international offers, totalizing an involvement in more than 300 offers since 2019 in the logistics business.",
            "Won B2B bids summing a total value above 10 million euros.",
            "Main responsible in Portugal for Requirements Management.",
            "Spearheaded logistics and procurement for 2 complete parcel logistics projects. Main point of contact with suppliers.",
            "Key Account Manager for the main national customers.",
            "SAP manager for creating project purchase requisitions.",
          ],
          color: "#000000",
        },
        {
          title: "Sales Engineer",
          company: "Siemens Logistics",
          company_url: "https://www.siemens.com/en-us/",
          logo_path: "siemens.png",
          duration: "Sep 2019 - June 2022",
          location: "Lisbon, Portugal",
          description: [
            "Created high-quality B2B bids, in communication with the 7 departments in the company.",
            "Managed Requirements using ReqMan in +10 offers.",
            "Developed Excel tools with VBA for the Sales team, streamlining processes and improving productivity.",
            "Assumed 1 Project Manager role for a Maintenance Contract.",
          ],
          color: "#0879bf",
        },
        {
          title: "KPI Analyst",
          company: "EDP S.A.",
          company_url: "https://www.edp.pt/",
          logo_path: "edp.png",
          duration: "Sep 2018 - May 2019",
          location: "Lisbon, Portugal",
          description: [
            "Analyzed +100 KPIs comparing with energy industry standards.",
            "Developed Excel tools with VBA for report automation.",
          ],
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of technology tools, including Python, SQL, Tableau, Excel, and web programming.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
}; // add if having

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "zeca2.png",
    description:
      "Feel free to contact me for any reason. I am open to discussing new opportuinities and collaborations.",
  },

  addressSection: {
    title: "Location",
    subtitle: "Oeiras, Lisbon, Portugal",
    locality: "Oeiras",
    country: "Portugal",
    region: "Oeiras",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/qDySWk9Wk5dAJF4J6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
