/*import SectionReveal from "../animations/SectionReveal";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-40 px-6 lg:px-16"
    >
      <SectionReveal>

        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-6">
            About
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
            Engineering immersive full-stack products with
            premium user experiences and scalable architectures.
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-10">

            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold mb-4">
                Product Engineering
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Building scalable MERN applications with
                authentication systems, APIs, analytics,
                deployment pipelines, and premium frontend experiences.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold mb-4">
                UI/UX Engineering
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Crafting futuristic interfaces using Framer Motion,
                GSAP, Tailwind CSS, cinematic interactions,
                immersive animations, and modern design systems.
              </p>
            </div>

          </div>

        </div>

      </SectionReveal>
    </section>
  );
};

export default About;*/
import SectionReveal from "../animations/SectionReveal";

const stats = [
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "100%",
    label: "Product Focus",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 px-6 lg:px-16"
    >
      <SectionReveal>
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-cyan-400 mb-6">
            About Me
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
            <div>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Full Stack Developer
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Building Digital Products
                </span>
              </h2>

              <p className="mt-8 text-gray-400 leading-relaxed text-lg">
                I'm Makrand Gurjar, a Full Stack MERN Developer focused on
                building scalable web applications, premium user experiences,
                and production-ready digital products.
              </p>

              <p className="mt-6 text-gray-400 leading-relaxed">
                My interests span frontend engineering, backend systems,
                authentication architecture, API development,
                performance optimization, deployment workflows,
                and modern UI/UX design.
              </p>

            </div>

            {/* RIGHT */}
            <div className="space-y-6">

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Product Engineering
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Building real-world products using React,
                  Node.js, Express.js, MongoDB, authentication systems,
                  analytics dashboards, deployment pipelines,
                  and scalable architectures.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">

                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center"
                  >
                    <h3 className="text-3xl font-bold text-cyan-400">
                      {item.value}
                    </h3>

                    <p className="text-sm text-gray-400 mt-2">
                      {item.label}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </SectionReveal>
    </section>
  );
};

export default About;