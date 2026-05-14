export const NAV_LINKS = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Contacto", href: "#contacto" },
];


export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "SiHtml5", textClass: "text-orange-400" },
      { name: "CSS", icon: "SiCss", textClass: "text-sky-400" },
      { name: "JavaScript", icon: "SiJavascript", textClass: "text-yellow-400" },
      { name: "React", icon: "SiReact", textClass: "text-sky-400" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", textClass: "text-teal-400" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", icon: "SiPython", textClass: "text-emerald-400" },
      { name: "Django", icon: "SiDjango", textClass: "text-green-400" },
      { name: "Node.js", icon: "SiNodedotjs", textClass: "text-lime-400" },
      { name: "Express", icon: "SiExpress", textClass: "text-indigo-400" },
    ],
  },
  {
    category: "Bases de Datos",
    items: [
      { name: "MySQL", icon: "SiMysql", textClass: "text-cyan-400" },
      { name: "PostgreSQL", icon: "SiPostgresql", textClass: "text-slate-400" },
      { name: "MongoDB", icon: "SiMongodb", textClass: "text-emerald-400" },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", icon: "SiGit", textClass: "text-slate-400" },
      { name: "GitHub", icon: "SiGithub", textClass: "text-slate-400" },
      { name: "Linux", icon: "SiLinux", textClass: "text-amber-400" },
      { name: "VS Code", icon: "Code2", textClass: "text-violet-400" },
      { name: "Docker", icon: "SiDocker", textClass: "text-blue-400" },
    ],
  },
  {
    category: "Metodologías",
    items: [
      { name: "Scrum", icon: "SiScrumalliance", textClass: "text-fuchsia-400" },
      { name: "Agile", icon: "SiJira", textClass: "text-violet-400" },
      { name: "APIs REST", icon: "SiPostman", textClass: "text-cyan-400" },
      { name: "CI/CD", icon: "SiCircleci", textClass: "text-rose-400" },
    ],
  },
];

export type ProjectStatus = "Activo" | "En Desarrollo" | "Privado";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  architecture: string;
  challenges: string;
  learnings: string;
  technologies: string[];
  status: ProjectStatus;
  demoUrl?: string;
  githubUrl?: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: "pablo-atuan",
    title: "Pablo Atuan — Ilusionista",
    shortDescription:
      "Portfolio profesional para un ilusionista chileno. Sitio web one-page con diseño elegante, animaciones fluidas y orientado a conversión de clientes.",
    fullDescription:
      "Sitio web tipo landing page / portfolio profesional desarrollado para Pablo Atuan, un ilusionista chileno con más de 500 eventos realizados. El sitio presenta sus servicios de magia para eventos infantiles, matrimonios y corporativos, además de cursos personalizados de ilusionismo. Incluye formulario de contacto para cotizaciones, SEO completo con Open Graph y Twitter Cards, y soporte PWA.",
    problem:
      "El artista necesitaba presencia digital profesional para captar clientes en múltiples segmentos (infantil, bodas, empresas), mostrando su trayectoria, testimonios y servicios de forma atractiva y con llamado a la acción claro.",
    architecture:
      "SPA construida con React 19 y Vite. Estilizado con Tailwind CSS v4, animaciones declarativas con Framer Motion. Componentes modulares: Hero, About, Services, Testimonials, Courses, Contact. SEO mediante react-helmet-async. Preparado para despliegue en Vercel.",
    challenges:
      "Lograr un diseño que transmita elegancia y misterio sin sacrificar rendimiento. Optimizar las animaciones para que no compitan con el LCP ni generen layout shifts. Implementar formulario de contacto funcional sin backend serverless.",
    learnings:
      "Integración de Framer Motion con Tailwind para micro-interacciones refinadas. Configuración de SEO técnico (OG, Twitter Cards, structured data). PWA con manifest e íconos para experiencia móvil completa.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "PWA"],
    status: "En Desarrollo",
    image: "/project-pablo-atuan.jpg",
  },
  {
    id: "carmen-patisserie",
    title: "Carmen Pâtisserie",
    shortDescription:
      "E-commerce para una pastelería artesanal. Diseño bilingüe, con sistema de carrito de compras y optimización de conversiones.",
    fullDescription:
      "E-commerce web moderno desarrollado para una pastelería artesanal de alta gama. El proyecto integró un sistema de navegación bilingüe y un manejo de carrito de compras completamente reactivo, enfocado en brindar una experiencia de usuario del más alto nivel con animaciones fluidas.",
    problem:
      "La pastelería necesitaba digitalizar sus ventas mediante una plataforma elegante, rápida e internacional, sin comprometer el rendimiento visual de sus productos.",
    architecture:
      "Frontend escalable implementado como SPA. Utiliza React y Tailwind CSS, y Zustand para la gestión de estado global del carrito y preferencias.",
    challenges:
      "El reto principal consistió en mantener animaciones fluidas y tiempos de carga instantáneos, sincronizando el estado global localmente sin comprometer el rendimiento general (LCP, CLS).",
    learnings:
      "Perfeccioné la implementación de Zustand para gestión de estado sin prop drilling y re-renders innecesarios, además de pulir la arquitectura CSS con Tailwind.",
    technologies: ["React", "Tailwind CSS", "Zustand", "TypeScript"],
    status: "Activo",
    demoUrl: "https://carmen-p-tisserie.vercel.app/",
    githubUrl: "https://github.com/FixZzT/carmen-p-tisserie",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sistema-rest-api",
    title: "Sistema REST API",
    shortDescription:
      "Proyecto fullstack para la gestión integral de datos y usuarios.",
    fullDescription:
      "Un robusto sistema de gestión back-office construido para ser consumido por múltiples clientes (web y móvil). Incluye autenticación con JWT, roles de usuario, paginación, filtros avanzados y exportación de reportes.",
    problem:
      "Necesidad de un backend estructurado, seguro y escalable que permitiera operaciones CRUD complejas de forma eficiente.",
    architecture:
      "Backend desacoplado creado con Django REST Framework y base de datos relacional. Frontend independiente hecho en React.",
    challenges:
      "Implementar el sistema de permisos basados en roles (RBAC) asegurando que ninguna ruta o dato sensible fuera expuesto incorrectamente.",
    learnings:
      "Consolidación de best practices en diseño de APIs RESTful, seguridad con JWT y optimización de ORB queries en Django.",
    technologies: ["Django REST Framework", "React", "MySQL", "JWT", "Docker"],
    status: "Privado",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    title: "Estudiante de Ingeniería Informática",
    organization: "Universidad",
    period: "Actual",
    description:
      "Cursando la carrera de Ingeniería Informática, formándome en sólidas bases de desarrollo de software, algoritmos, arquitectura de sistemas y gestión de proyectos tecnológicos.",
  },
  {
    id: 2,
    title: "Desarrollo de Proyectos Académicos",
    organization: "Entorno de Aprendizaje",
    period: "Continuo",
    description:
      "Diseño e implementación de soluciones de software desde la concepción hasta el despliegue, combinando tecnologías frontend y backend en entornos controlados.",
  },
  {
    id: 3,
    title: "Trabajo en Equipo y Metodologías Ágiles",
    organization: "Proyectos Colaborativos",
    period: "Continuo",
    description:
      "Aplicación de metodologías como Scrum y Agile en el ciclo de vida del software. Experiencia colaborando en repositorios con Git y comunicación técnica dentro de equipos multidisciplinares.",
  },
  {
    id: 4,
    title: "Desarrollo Orientado a Soluciones",
    organization: "Mentalidad de Ingeniería",
    period: "Siempre",
    description:
      "Enfoque analítico para desglosar problemas complejos en componentes más pequeños y manejables, aplicando patrones de diseño y buenas prácticas de codificación.",
  },
];
