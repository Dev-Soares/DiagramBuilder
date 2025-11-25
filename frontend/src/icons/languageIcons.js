import {
  // --- Languages ---
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus, // Corrigido (C++)
  SiPhp,
  SiRuby,
  SiGo,
  SiRust,
  SiSwift,
  SiKotlin,
  SiLua,

  // --- Web Technologies ---
  SiHtml5,
  SiCss3,
  SiSass,
  SiLess,
  SiStylus,

  // --- Frameworks & Libraries ---
  SiReact,        // Use este também para React Native
  SiVuedotjs,     // Nome correto (Vue.js)
  SiAngular,
  SiSvelte,
  SiSolid,
  SiNextdotjs,    // Nome correto (Next.js)
  SiNuxtdotjs,    // Nome correto (Nuxt.js)
  SiGatsby,

  // --- Backend ---
  SiNodedotjs,    // Nome correto (Node.js)
  SiExpress,
  SiNestjs,
  SiFastify,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiSpringboot,   // Verifique se sua versão suporta, senão use SiSpring
  SiRubyonrails,  // Às vezes é SiRubyonrails, às vezes SiRails. Tente SiRubyonrails.
  SiLaravel,

  // --- Databases ---
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSqlite,
  SiGraphql,

  // --- DevOps & Tools ---
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGithubactions,

  // --- Cloud ---
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiDigitalocean,

  // --- Testing ---
  SiJest,
  SiCypress,
  SiSelenium,
  SiPytest,

  // --- Game Development ---
  SiUnity,

  // --- Mobile Development ---
  SiFlutter,
  SiIonic,
  
} from 'react-icons/si';

// IMPORT EXTRA: Para substituir os que faltam na Simple Icons
import { FaJava } from "react-icons/fa";

const languageIcons = [
  {
    category: "Popular Languages",
    icons: [
      { component: SiJavascript, id: "javascript", label: "JavaScript", type: "CustomNode", color: "#ffffff" },
      { component: SiTypescript, id: "typescript", label: "TypeScript", type: "CustomNode", color: "#ffffff" },
      { component: SiPython, id: "python", label: "Python", type: "CustomNode", color: "#ffffff" },
      { component: FaJava, id: "java", label: "Java", type: "CustomNode", color: "#ffffff" },
      { component: SiCplusplus, id: "cpp", label: "C++", type: "CustomNode", color: "#ffffff" },
      { component: SiPhp, id: "php", label: "PHP", type: "CustomNode", color: "#ffffff" },
      { component: SiRuby, id: "ruby", label: "Ruby", type: "CustomNode", color: "#ffffff" },
      { component: SiGo, id: "go", label: "Go", type: "CustomNode", color: "#ffffff" },
    ],
  },
  {
    category: "Modern Languages",
    icons: [
      { component: SiRust, id: "rust", label: "Rust", type: "CustomNode", color: "#ffffff" },
      { component: SiSwift, id: "swift", label: "Swift", type: "CustomNode", color: "#ffffff" },
      { component: SiKotlin, id: "kotlin", label: "Kotlin", type: "CustomNode", color: "#ffffff" },
    ],
  },
  {
    category: "Scripting & Shell",
    icons: [
      { component: SiLua, id: "lua", label: "Lua", type: "CustomNode", color: "#ffffff" },
    ],
  },
  {
    category: "Web Frontend",
    icons: [
      { component: SiHtml5, id: "html5", label: "HTML5", type: "CustomNode", color: "#ffffff" },
      { component: SiCss3, id: "css3", label: "CSS3", type: "CustomNode", color: "#ffffff" },
      { component: SiReact, id: "react", label: "React", type: "CustomNode", color: "#ffffff" },
      { component: SiVuedotjs, id: "vue", label: "Vue.js", type: "CustomNode", color: "#ffffff" },
      { component: SiAngular, id: "angular", label: "Angular", type: "CustomNode", color: "#ffffff" },
      { component: SiSvelte, id: "svelte", label: "Svelte", type: "CustomNode", color: "#ffffff" },
      { component: SiSolid, id: "solidjs", label: "Solid.js", type: "CustomNode", color: "#ffffff" },
      { component: SiNextdotjs, id: "nextjs", label: "Next.js", type: "CustomNode", color: "#ffffff" },
      { component: SiNuxtdotjs, id: "nuxtjs", label: "Nuxt.js", type: "CustomNode", color: "#ffffff" },
      { component: SiGatsby, id: "gatsby", label: "Gatsby", type: "CustomNode", color: "#ffffff" },
    ],
  },
  {
    category: "CSS Preprocessors",
    icons: [
      { component: SiSass, id: "sass", label: "Sass", type: "CustomNode", color: "#ffffff" },
      { component: SiLess, id: "less", label: "Less", type: "CustomNode", color: "#ffffff" },
      { component: SiStylus, id: "stylus", label: "Stylus", type: "CustomNode", color: "#ffffff" },
    ],
  },
  {
    category: "Backend Frameworks",
    icons: [
      { component: SiNodedotjs, id: "nodejs", label: "Node.js", type: "CustomNode", color: "#ffffff" },
      { component: SiExpress, id: "express", label: "Express", type: "CustomNode", color: "#ffffff" },
      { component: SiNestjs, id: "nestjs", label: "NestJS", type: "CustomNode", color: "#ffffff" },
      { component: SiFastify, id: "fastify", label: "Fastify", type: "CustomNode", color: "#ffffff" },
      { component: SiDjango, id: "django", label: "Django", type: "CustomNode", color: "#ffffff" },
      { component: SiFlask, id: "flask", label: "Flask", type: "CustomNode", color: "#ffffff" },
      { component: SiFastapi, id: "fastapi", label: "FastAPI", type: "CustomNode", color: "#ffffff" },
      { component: SiSpringboot, id: "springboot", label: "Spring Boot", type: "CustomNode", color: "#ffffff" },
      { component: SiRubyonrails, id: "rails", label: "Ruby on Rails", type: "CustomNode", color: "#ffffff" },
      { component: SiLaravel, id: "laravel", label: "Laravel", type: "CustomNode", color: "#ffffff" },
    ],
  },
  {
    category: "Databases",
    icons: [
      { component: SiMysql, id: "mysql", label: "MySQL", type: "CustomNode", color: "#ffffff" },
      { component: SiPostgresql, id: "postgresql", label: "PostgreSQL", type: "CustomNode", color: "#ffffff" },
      { component: SiMongodb, id: "mongodb", label: "MongoDB", type: "CustomNode", color: "#ffffff" },
      { component: SiRedis, id: "redis", label: "Redis", type: "CustomNode", color: "#ffffff" },
      { component: SiSqlite, id: "sqlite", label: "SQLite", type: "CustomNode", color: "#ffffff" },
    ],
  },
  {
    category: "Mobile Development", 
    icons: [
      { component: SiReact, id: "reactnative", label: "React Native", type: "CustomNode", color: "#ffffff" },
    ],
  },
  {
    category: "Game Development",
    icons: [
      { component: SiUnity, id: "unity", label: "Unity", type: "CustomNode", color: "#ffffff" },
    ],
  },
  {
    category: "DevOps & Tools",
    icons: [
      { component: SiDocker, id: "docker", label: "Docker", type: "CustomNode", color: "#ffffff" },
      { component: SiKubernetes, id: "kubernetes", label: "Kubernetes", type: "CustomNode", color: "#ffffff" },
      { component: SiTerraform, id: "terraform", label: "Terraform", type: "CustomNode", color: "#ffffff" },
      { component: SiJenkins, id: "jenkins", label: "Jenkins", type: "CustomNode", color: "#ffffff" },
      { component: SiGithubactions, id: "githubactions", label: "GitHub Actions", type: "CustomNode", color: "#ffffff" },
    ],
  },
  {
    category: "Cloud Platforms",
    icons: [
      { component: SiHeroku, id: "heroku", label: "Heroku", type: "CustomNode", color: "#ffffff" },
      { component: SiVercel, id: "vercel", label: "Vercel", type: "CustomNode", color: "#ffffff" },
      { component: SiNetlify, id: "netlify", label: "Netlify", type: "CustomNode", color: "#ffffff" },
      { component: SiDigitalocean, id: "digitalocean", label: "DigitalOcean", type: "CustomNode", color: "#ffffff" },
    ],
  },
  {
    category: "Testing",
    icons: [
      { component: SiJest, id: "jest", label: "Jest", type: "CustomNode", color: "#ffffff" },
      { component: SiCypress, id: "cypress", label: "Cypress", type: "CustomNode", color: "#ffffff" },
      { component: SiSelenium, id: "selenium", label: "Selenium", type: "CustomNode", color: "#ffffff" },
      { component: SiPytest, id: "pytest", label: "Pytest", type: "CustomNode", color: "#ffffff" },
    ],
  },
  {
    category: "Specialized",
    icons: [
      { component: SiGraphql, id: "graphql", label: "GraphQL", type: "CustomNode", color: "#ffffff" },
    ],
  },
];

export default languageIcons;