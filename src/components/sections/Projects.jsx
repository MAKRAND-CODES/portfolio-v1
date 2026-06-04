import FeaturedProject from "../projects/FeaturedProject";
import ProjectCard from "../projects/ProjectCard";
import ProjectStats from "../projects/ProjectStats";

const projects = [
  {
    title: "BUY4U",
    tag: "E-Commerce Platform",
    description:
      "Full-stack MERN e-commerce platform featuring authentication, product management, cart system, checkout workflow and scalable architecture.",
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "JWT",
      "Tailwind",
    ],
    live: "#",
    github: "#",
  },

  {
    title: "Expense Tracker",
    tag: "Finance Application",
    description:
      "Expense management platform with analytics, budgeting workflows, visual reports and responsive dashboard experiences.",
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "Charts",
    ],
    live: "#",
    github: "#",
  },

  {
    title: "Portfolio Website",
    tag: "Personal Brand",
    description:
      "Premium developer portfolio featuring animations, modern UI systems, smooth interactions and responsive design.",
    stack: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Vite",
    ],
    live: "#",
    github: "#",
  },

  {
    title: "Future AI SaaS",
    tag: "Coming Soon",
    description:
      "Upcoming AI-powered SaaS platform focused on automation, productivity and intelligent workflows.",
    stack: [
      "AI",
      "React",
      "Node.js",
    ],
    live: "#",
    github: "#",
  },
{
  title: "Kisan Setu",
  tag: "AgriBased Platform",
  description:
    "Full-stack farmer support platform with authentication, farmer dashboard, complaints system, weather data, market prices, insurance, schemes, and officer/admin workflows.",
  stack: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "REST APIs",
    "Tailwind",
  ],
  live: "https://kisan-setu-c6yf.vercel.app/",
  github: "https://github.com/MAKRAND-CODES/KisanSetu",
},
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative
        py-32
        px-6
        lg:px-16
        overflow-hidden
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_65%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center mb-24">

          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm mb-6">
            PROJECT SHOWCASE
          </p>

          <h2 className="text-5xl md:text-7xl font-black">

            Featured

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>

          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg leading-relaxed">
            A collection of full-stack products,
            scalable architectures and immersive
            user experiences engineered using modern
            technologies and production-grade systems.
          </p>

        </div>

        {/* Featured Project */}

        <FeaturedProject />

        {/* Project Grid */}

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              tag={project.tag}
              description={project.description}
              stack={project.stack}
              live={project.live}
              github={project.github}
            />
          ))}

        </div>

        {/* Stats */}

        <ProjectStats />

      </div>

    </section>
  );
};

export default Projects;
