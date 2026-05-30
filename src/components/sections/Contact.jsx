import { motion } from "framer-motion";

const contactCards = [
  {
    title: "Email",
    value: "yourmail@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
  },
  {
    title: "GitHub",
    value: "github.com/yourprofile",
  },
  {
    title: "Resume",
    value: "Download CV",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-40 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm mb-6">
            CONTACT TERMINAL
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            Let's Build
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>

          <p className="mt-8 text-gray-400 max-w-2xl mx-auto">
            Open to internships, freelance opportunities,
            startup collaborations and product engineering roles.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div className="space-y-6">

            {contactCards.map((card) => (
              <motion.div
                key={card.title}
                whileHover={{
                  scale: 1.03,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  transition-all
                "
              >
                <p className="text-cyan-400 text-sm uppercase tracking-[0.25em]">
                  {card.title}
                </p>

                <h3 className="mt-4 text-xl font-semibold group-hover:text-cyan-400 transition">
                  {card.value}
                </h3>
              </motion.div>
            ))}

          </div>

          {/* Right */}

          <motion.div
            whileHover={{
              scale: 1.01,
            }}
            className="
              rounded-[40px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-2xl
              p-10
            "
          >
            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  bg-black/20
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  outline-none
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  bg-black/20
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  outline-none
                "
              />

              <textarea
                rows="6"
                placeholder="Tell me about your project..."
                className="
                  w-full
                  bg-black/20
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  outline-none
                "
              />

              <button
                className="
                  w-full
                  rounded-2xl
                  py-5
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  font-semibold
                  hover:scale-[1.02]
                  transition
                "
              >
                Send Message
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;