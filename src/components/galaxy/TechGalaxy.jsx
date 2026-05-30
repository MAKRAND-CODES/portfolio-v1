import {
    SiReact,
    SiVite,
    SiJavascript,
    SiHtml5,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiGithub,
    SiGit,
    SiPostman,
    SiVercel,
    SiNpm,
} from "react-icons/si";

import {
    FaCss3Alt,
    FaServer,
    FaMobileAlt,
    FaCode,
    FaCloud,
    FaDatabase,
} from "react-icons/fa";

import {
    TbBrandVscode,
    TbBinaryTree,
} from "react-icons/tb";


const technologies = [
    { name: "React", icon: SiReact },
    { name: "Vite", icon: SiVite },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Tailwind CSS", icon: SiTailwindcss },

    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },

    { name: "REST APIs", icon: FaServer },
    { name: "JWT Auth", icon: FaCode },

    { name: "MongoDB", icon: SiMongodb },
    { name: "Firebase", icon: SiFirebase },

    { name: "Database Design", icon: FaDatabase },
    { name: "Cloudinary", icon: FaCloud },

    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },

    { name: "VS Code", icon: TbBrandVscode },
    { name: "Postman", icon: SiPostman },
    { name: "NPM", icon: SiNpm },

    { name: "Vercel", icon: SiVercel },
    { name: "Render", icon: FaCloud },

    { name: "OOP", icon: TbBinaryTree },
    { name: "DSA", icon: TbBinaryTree },

    { name: "Responsive UI", icon: FaMobileAlt },
    { name: "Performance", icon: FaServer },

    { name: "GSAP", icon: FaCode },
    { name: "Framer Motion", icon: FaCode },
    { name: "Three.js", icon: FaCode },
    { name: "React Three Fiber", icon: FaCode },
];

const TechGalaxy = () => {
    return (
        <section
            id="skills"
            className="relative py-32 px-6 lg:px-16 bg-[#020617] overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_60%)]" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-24">

                    <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm mb-6">
                        TECHNOLOGY ECOSYSTEM
                    </p>

                    <h2 className="text-5xl md:text-7xl font-black leading-tight">
                        Skill

                        <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Matrix
                        </span>
                    </h2>

                    <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg leading-relaxed">
                        Building modern full-stack applications using scalable
                        backend systems, immersive frontend experiences,
                        cloud deployments, and production-grade architectures.
                    </p>

                </div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-3 gap-10 items-center">

                    {/* LEFT */}
                    <div className="space-y-6">

                        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

                            <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs mb-4">
                                CORE EXPERTISE
                            </p>

                            <h3 className="text-3xl font-bold mb-4">
                                Full Stack Engineering
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                Building scalable MERN applications with
                                authentication systems, API integrations,
                                cloud deployments and premium user experiences.
                            </p>

                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

                            <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs mb-4">
                                CURRENT FOCUS
                            </p>

                            <h3 className="text-3xl font-bold mb-4">
                                Product Engineering
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                Designing production-ready software products with
                                modern architecture, performance optimization,
                                and world-class UI systems.
                            </p>

                        </div>

                    </div>

                    {/* CENTER PANEL */}

                    <div className="flex items-center justify-center">

                        <div
                            className="
      relative
      w-full
      max-w-md
      rounded-[32px]
      border
      border-cyan-500/20
      bg-white/5
      backdrop-blur-2xl
      p-10
      overflow-hidden
    "
                        >

                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />

                            <div className="relative z-10">

                                <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs mb-6">
                                    DEVELOPER STATS
                                </p>

                                <div className="grid grid-cols-2 gap-5">

                                    <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                                        <h4 className="text-4xl font-black text-cyan-400">
                                            15+
                                        </h4>
                                        <p className="text-gray-400 mt-2">
                                            Projects Built
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                                        <h4 className="text-4xl font-black text-cyan-400">
                                            25+
                                        </h4>
                                        <p className="text-gray-400 mt-2">
                                            Technologies
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                                        <h4 className="text-4xl font-black text-cyan-400">
                                            500+
                                        </h4>
                                        <p className="text-gray-400 mt-2">
                                            Git Commits
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                                        <h4 className="text-4xl font-black text-cyan-400">
                                            100%
                                        </h4>
                                        <p className="text-gray-400 mt-2">
                                            Responsive
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                    {/* RIGHT */}
                    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

                        <h3 className="text-3xl font-bold mb-2">
                            Engineering Stack
                        </h3>

                        <p className="text-gray-400 mb-8">
                            Technologies, tools and systems used to build
                            modern production-grade applications.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                            {technologies.map((tech) => {
                                const Icon = tech.icon;

                                return (
                                    <div
                                        key={tech.name}
                                        className="
        h-24
        rounded-2xl
        bg-white/5
        border
        border-white/10
        flex
        flex-col
        items-center
        justify-center
        gap-2
        hover:border-cyan-400/50
        hover:bg-cyan-500/10
        hover:scale-105
        transition-all
        duration-300
      "
                                    >
                                        <Icon
                                            size={28}
                                            className="text-cyan-400"
                                        />

                                        <span className="text-sm text-center px-1">
                                            {tech.name}
                                        </span>
                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </div>

            </div>
            {/* TECH MARQUEE */}

            <div className="mt-24 overflow-hidden border-y border-white/10 py-6">

                <div className="flex gap-16 whitespace-nowrap animate-marquee">

                    {[...technologies, ...technologies].map((tech, index) => (
                        <span
                            key={index}
                            className="
          text-gray-400
          uppercase
          tracking-[0.25em]
          text-sm
        "
                        >
                            {tech.name}
                        </span>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default TechGalaxy;