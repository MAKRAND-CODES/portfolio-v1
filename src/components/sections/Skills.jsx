import SectionReveal from "../animations/SectionReveal";
import SkillCard from "../ui/SkillCard";

const skillsData = [
  {
    title: "Frontend Engineering",
    description:
      "Building immersive, animated, scalable frontend experiences using modern UI architectures and motion systems.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Vite",
    ],
  },

  {
    title: "Backend Engineering",
    description:
      "Designing secure backend systems with scalable REST APIs, authentication flows, and database architectures.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],
  },

  {
    title: "Product Engineering",
    description:
      "Crafting complete full-stack products from architecture to deployment with premium user experiences.",
    technologies: [
      "Vercel",
      "Render",
      "GitHub",
      "Deployment",
      "PWA",
    ],
  },

  {
    title: "Interactive Experiences",
    description:
      "Developing cinematic interfaces with immersive interactions, motion systems, and futuristic design aesthetics.",
    technologies: [
      "Three.js",
      "React Three Fiber",
      "Glassmorphism",
      "Animations",
      "UX Systems",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-40 px-6 lg:px-16"
    >
      <SectionReveal>

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-6">
              Tech Ecosystem
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Engineering scalable digital products with
              modern full-stack technologies.
            </h2>

          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-8">

            {skillsData.map((skill) => (
              <SkillCard
                key={skill.title}
                title={skill.title}
                description={skill.description}
                technologies={skill.technologies}
              />
            ))}

          </div>

        </div>

      </SectionReveal>
    </section>
  );
};

export default Skills;