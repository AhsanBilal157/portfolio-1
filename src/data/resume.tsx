import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ahsan Bilal",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "AI Engineer with a passion for innovation, machine learning, and problem-solving. I love building intelligent systems and exploring the frontiers of AI technology.",
  summary:
    "I’m an AI Engineer with hands-on experience in AI, machine learning, and data science. My journey started as a Power Platforms Developer, and I quickly transitioned to AI, driven by my passion for large language models (LLMs) and NLP. I enjoy working on cutting-edge projects, pushing the boundaries of technology, and continuously learning new skills.\n \n \n With a strong foundation in AI and a keen interest in emerging technologies, I have led various projects in NLP, OCR, and RAG systems. I hold a degree in Computer Science and have received recognition for my contributions to tech innovation.",
  avatarUrl: "/me.png",
  skills: [
    "TensorFlow",
    "Scikit Learn",
    "Python",
    "SQL",
    "Langchain",
    "Azure",
    "Azure AI",
    "AWS",
    "Matplotlib",
    "power BI",
    "GIT & GitHub",
    "React",
    "Flask",
    "Typescript",
    "Postgres"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/resume", icon: ResumeIcon, label: "Blog" },
  ],
  contact: {
    email: "ahsanbilalaziz@gmail.com",
    tel: "+923219056039",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AhsanBilal157",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahsan-bilal-khan-14235b212/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@khanbilal6172",
        icon: NotebookIcon,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ahsanbilalaziz@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/Ahsan Bilal - 2 page CV_compressed (1).pdf",
        icon: Icons.ResumeIcon,
        navbar: true,
      }
    },
  },

  work: [
    {
      company: "Technupur",
      href: "https://technupur.com",
      badges: [],
      location: "Faisalabad,Pakistan",
      title: "Jr AI Engineer",
      logoUrl: "/tpimg.png",
      start: "January 2024",
      end: "Present",
      description:
        "Led projects in OCR and LLMs GenAI, creating advanced NLP solutions.\n\n Developed an insurance RAG chatbot in Azure AI Studio with an admin panel for automated model retraining.\n\n Implemented Pythonic AWS solutions for ETL processes, including calculating CO2 emissions.",
    },
    {
      company: "Technupur",
      badges: [],
      href: "https://technupur.com",
      location: "Faisalabad,Pakistan",
      title: "Power Platforms Developer",
      logoUrl: "/tpimg.png",
      start: "June 2023",
      end: "December 2023",
      description:
        "Built intranet systems using Power Apps, Power Automate, and SharePoint. Developed OCR systems and automated workflows with AI Builder. Created custom SharePoint solutions for various clients using SPFx and React.",
    },
    {
      company: "The Sparks Foundation",
      href: "https://thesparksfoundationsingapore.org/",
      badges: [],
      location: "Remote",
      title: "Data Analyst Intern",
      logoUrl: "/logo_small.png",
      start: "Feburary 2023",
      end: "March 2023",
      description:
        "Focused on data cleaning, validation, and Python-based visualization. Analyzed datasets from Kaggle and participated in Kaggle competitions to improve model-building skills.",
    },
    
  ],
  education: [
    {
      school: "The University of Faisalabad",
      href: "https://tuf.edu.pk/",
      degree: "Bachelor's Degree of Computer Science (BSCS)",
      logoUrl: "/tuf.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "Presidential Initiative for Artificail intelligence & Computing",
      href: "https://www.piaic.org/",
      degree: "Diploma in Artificial Intelligence and Computing",
      logoUrl: "/piaic.png",
      start: "2020",
      end: "2023",
    },
      ],
  projects: [
    {
      title: "Personal ATS",
      href: "https://personal-ats.streamlit.app",
      dates: "Sep 2024 ",
      active: true,
      description:
        "Developed and open-sourced a personal ATS where users can upload their job description and CV. The system analyzes how well the CV matches the job description, provides a match score, and gives actionable suggestions to improve the CV for the desired role.",
      technologies: [
        "Streamlit",
        "Gemini",
        "Langchian",
        "Python",
      ],
      links: [
        {
          type: "ATS System",
          href: "https://personal-ats.streamlit.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AhsanBilal157/Personal-ATS-system/tree/streamlit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:"/Screencast from 16-09-2024 02:53:18.webm"
    },
    {
      title: "AGFOW, Plant Disease Detector",
      href: "https://magicui.design",
      dates: "June 2022 - August 2023",
      active: true,
      description:
        "Developed a full-stack system combining Django for user authentication and Flask for api development and combine it with frontend of React and Flutter with machine learning-based disease detection.",
      technologies: [
        "Django",
        "React",
        "Flask",
        "Flutter",
        "Machine Learning",
        "Oject Detection",
        "Sqlite"
      ],
      links: [
        {
          type: "Website",
          href: "https://agfow.surge.sh",
          icon: <Icons.globe className="size-3" />,
        }
        
      ],
      image: "",
      video: "/Screencast from 20-05-2023 10:43:40.webm",
    },
    {
      title: "Insurance RAG Chatbot",
      href: "https://llm.report",
      dates: "June 2024 -  Present",
      active: true,
      description:
        "Built an RAG chatbot in Azure AI Studio for the insurance industry, allowing users to interact with insurance data. The chatbot provides insights and information based on user-uploaded data and automatically retrains its model to improve accuracy over time.",
      technologies: [
        "Python",
        "Langchian",
        "Azure AI",
        "Azure Open AI",
        "Azure AI Search",
        "React",
        "Postgres"
      ],
      links: [],
      image: "/Screenshot from 2024-09-16 02-55-02.png",
      video: "",
    },
    {
      title: "MedRag Chat",
      href: "https://automatic.chat",
      dates: "August 2024",
      active: true,
      description:
        "Built an RAG chatbot for the medical industry using Azure AI Studio, allowing users to upload reports for comparison and providing insights based on historical data.",
      technologies: [
        "Python",
        "Langchian",
        "Azure AI",
        "Azure Open AI",
        "Azure AI Search",
        "React",
        "Postgres"
      ],
      links: [],
      image: "/Screenshot from 2024-09-16 02-58-37.png",
      video:
        "",
    },
  ],
  Achievements: [
    {
      title: "Grand prize winner in the China-Asean International IoT Competition 2023.",
      dates: "December 2022",
      location: "Remote",
      description:
        "won the Grand Prize at 2022 China-ASEAN and Education Cooperation Week 2 International Invitational Contest oflnternet of Things Technology.",
      image:
        "/china-asean-logo.jpeg",
      mlh: "",
      links: [],
    },
    {
      title: "Prime Minsiter Innovation Award Shortlisting",
      dates: "July 19th - 25th, 2023",
      location: "Islambabad, Pakistan",
      description:
        "Selected for the Prime Minister's Innovation Program, ranking in the top 100 out of 12,000 projects by NUST.",
      image:
        "/logo-2.png",
      mlh: "",
      links: [],
    },
    {
      title: "Lyallpur Innovative",
      dates: "June 2023",
      location: "Faisalabad, Pakistan",
      description:
        "Top 10 participant in the Lyallpur Innovation Competition.",
      icon: "public",
      image:
        "/tuf.png",
      links: [],
    }
  ],
} as const;
