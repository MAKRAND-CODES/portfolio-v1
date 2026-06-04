import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const contactCards = [
    {
        title: "EMAIL",
        value: "makrandsanghvi124@gmail.com",
        status: "ACTIVE",
    },

    {
        title: "LINKEDIN",
        value: "linkedin.com/in/makrand-gurjar005",
        status: "NETWORKING",
    },

    {
        title: "GITHUB",
        value: "github.com/MAKRAND-CODES",
        status: "OPEN SOURCE",
    },

    {
        title: "RESUME",
        value: "Download Resume",
        status: "READY",
    },
];

const logs = [
    "INITIALIZING COMMUNICATION PROTOCOL...",
    1500,
    "SCANNING NETWORK...",
    1500,
    "ESTABLISHING SECURE CONNECTION...",
    1500,
    "LOADING DEVELOPER PROFILE...",
    1500,
    "READY FOR NEW OPPORTUNITIES...",
    1500,
];

const ContactTerminal = () => {
    const [copied, setCopied] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleCopy = async (text, title) => {
        if (title === "RESUME") {
            window.open("/resume.pdf", "_blank");
            return;
        }

        try {
            await navigator.clipboard.writeText(text);

            setCopied(title);

            setTimeout(() => {
                setCopied("");
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !message) return;

        try {
            setLoading(true);

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: name,
                    from_email: email,
                    message: message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSent(true);

            setName("");
            setEmail("");
            setMessage("");

            setTimeout(() => {
                setSent(false);
            }, 4000);

        } catch (error) {
            console.error(error);
            alert("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <section
            id="contact"
            className="relative py-40 px-6 lg:px-16 overflow-hidden"
        >
            {/* Background Glow */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]" />

            <div className="relative z-10 max-w-7xl mx-auto">

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
                    <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm mb-6">
                        CONTACT TERMINAL
                    </p>

                    <h2 className="text-4xl md:text-7xl font-black leading-tight">
                        Let's Build

                        <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Something Amazing
                        </span>

                    </h2>

                    <p className="mt-8 text-gray-400 max-w-2xl mx-auto">
                        Open to internships, freelance projects,
                        startup collaborations and product engineering roles.
                    </p>
                </motion.div>

                {/* Main Grid */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Left Side */}

                    <div className="space-y-6">

                        {/* Live Status */}

                        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-8 shadow-[0_0_50px_rgba(34,211,238,0.08)]">

                            <div className="flex items-center gap-3 mb-4">

                                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                                <p className="text-green-400 font-medium">
                                    ONLINE
                                </p>

                            </div>

                            <div className="space-y-3 text-gray-400">

                                <div className="flex justify-between">
                                    <span>Status</span>
                                    <span>Available</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Response Time</span>
                                    <span>{"<"} 24 Hours</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Location</span>
                                    <span>India</span>
                                </div>

                            </div>

                        </div>

                        {/* Cards */}

                        {contactCards.map((card) => (
                            <motion.div
                                key={card.title}
                                whileHover={{
                                    scale: 1.03,
                                }}
                                onClick={() =>
                                    handleCopy(card.value, card.title)
                                }
                                className="
cursor-pointer
rounded-3xl
border
border-white/10
bg-gradient-to-br
from-white/10
to-white/5
backdrop-blur-xl
p-8
shadow-[0_0_40px_rgba(34,211,238,0.05)]
hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
hover:border-cyan-400/30
transition-all
duration-300
"
                            >
                                <div className="flex justify-between items-center">

                                    <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
                                        {card.title}
                                    </p>

                                    <span className="text-green-400 text-xs">
                                        {card.status}
                                    </span>

                                </div>

                                <h3 className="mt-4 text-lg font-semibold">
                                    {card.value}
                                </h3>

                                {copied === card.title && (
                                    <p className="mt-3 text-green-400 text-sm">
                                        ✓ Copied
                                    </p>
                                )}

                            </motion.div>
                        ))}

                    </div>

                    {/* Right Side */}

                    <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-10 shadow-[0_0_50px_rgba(34,211,238,0.08)]">

                        <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs mb-6">
                            SYSTEM ACTIVITY
                        </p>

                        <div className="rounded-2xl bg-black/30 border border-white/10 p-6 min-h-[120px] flex items-center">

                            <TypeAnimation
                                sequence={logs}
                                speed={65}
                                repeat={Infinity}
                                className="text-green-400 font-mono"
                            />

                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5 mt-8"
                        >
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="
  w-full
  rounded-2xl
  bg-black/20
  border
  border-white/10
  p-5
  outline-none
  transition-all
  duration-300
  focus:border-cyan-400/50
  focus:bg-white/10
"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="
  w-full
  rounded-2xl
  bg-black/20
  border
  border-white/10
  p-5
  outline-none
  transition-all
  duration-300
  focus:border-cyan-400/50
  focus:bg-white/10
"
                            />

                            <textarea
                                rows="6"
                                placeholder="Tell me about your project..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="
  w-full
  rounded-2xl
  bg-black/20
  border
  border-white/10
  p-5
  outline-none
  transition-all
  duration-300
  focus:border-cyan-400/50
  focus:bg-white/10
"
                            />


                            {sent ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="
      w-full
      py-5
      rounded-2xl
      text-center
      bg-green-500/20
      border
      border-green-500/30
      text-green-400
      font-medium
    "
                                >
                                    ✓ Message Sent Successfully
                                </motion.div>
                            ) : (
                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="
  w-full
  py-5
  rounded-2xl
  bg-gradient-to-r
  from-cyan-500
  to-blue-600
  font-semibold
  shadow-[0_0_30px_rgba(34,211,238,0.3)]
"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </motion.button>
                            )}

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ContactTerminal;