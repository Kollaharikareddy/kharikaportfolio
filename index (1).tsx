import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Download, Mail, Phone, Send, MapPin, GraduationCap, Code2, Cpu,
  Users, MessageCircle, Globe, Monitor, Brain, Award, FileCode2,
  Lightbulb, Home as HomeIcon, Github, Linkedin, Instagram,
} from "lucide-react";
import { useState } from "react";
import profileImg from "@/assets/harika-profile.jpg";
import { Navbar } from "@/components/Navbar";
import { Particles } from "@/components/Particles";
import { TypingText } from "@/components/TypingText";
import { SocialSidebar } from "@/components/SocialSidebar";
import { ScrollTop } from "@/components/ScrollTop";
import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "K. Harika Reddy — B.Tech ECE Student & C Programmer" },
      { name: "description", content: "Portfolio of K. Harika Reddy, B.Tech 1st Year ECE student at Nalla Mallareddy Engineering College. C programmer passionate about technology and innovation." },
      { property: "og:title", content: "K. Harika Reddy — Future Engineer" },
      { property: "og:description", content: "Future Engineer · Tech Enthusiast · C Programmer" },
    ],
  }),
});

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="mb-12 text-center"
    >
      <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[color:var(--glow-pink)]">{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold sm:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[color:var(--glow-purple)] to-transparent" />
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <p className="mb-4 inline-block rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Hello, I'm
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            K. Harika <br />
            <span className="text-gradient">Reddy</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            B.Tech 1st Year · ECE Student · C Programmer
          </p>
          <div className="mt-3 text-2xl font-display font-semibold sm:text-3xl">
            I'm a <TypingText words={["Future Engineer", "Tech Enthusiast", "C Programmer"]} />
          </div>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Passionate about technology, programming, and innovation. Continuously learning
            and building technical skills to become a successful engineer.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/K_Harika_Reddy_Resume.docx" download className="btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white">
              <Download size={16} /> Download Resume
            </a>
            <a href="#contact" className="btn-outline-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground">
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[color:var(--glow-purple)] via-[color:var(--glow-pink)] to-[color:var(--glow-blue)] opacity-40 blur-2xl" />
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="ring-glow relative h-64 w-64 overflow-hidden rounded-full sm:h-80 sm:w-80"
            >
              <img src={profileImg} alt="K. Harika Reddy" width={768} height={768} className="h-full w-full object-cover" />
            </motion.div>
            <div className="absolute -bottom-2 -right-2 glass-strong rounded-2xl px-3 py-2 text-xs">
              <span className="text-gradient font-semibold">ECE '29</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="About me" title="Who I Am" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass-strong card-hover grid items-center gap-8 rounded-3xl p-8 md:grid-cols-[260px_1fr] md:p-12"
        >
          <div className="relative mx-auto">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[color:var(--glow-purple)] to-[color:var(--glow-pink)] opacity-30 blur-xl" />
            <img
              src={profileImg}
              alt="K. Harika Reddy"
              width={768}
              height={768}
              loading="lazy"
              className="relative h-56 w-56 rounded-2xl object-cover shadow-[0_20px_60px_-10px_rgba(139,92,246,0.5)]"
            />
          </div>
          <div>
            <h3 className="mb-3 font-display text-2xl font-bold">
              First-year ECE student. <span className="text-gradient">Lifelong learner.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I am K. Harika Reddy, a first-year B.Tech student from the Electronics and
              Communication Engineering department at Nalla Mallareddy Engineering College.
              I am passionate about coding, problem-solving, and emerging technologies. Skilled
              in C programming and eager to learn modern technologies while building
              innovative projects.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { icon: GraduationCap, label: "B.Tech ECE" },
                { icon: Code2, label: "C Programmer" },
                { icon: Cpu, label: "Tech Explorer" },
              ].map((it) => (
                <div key={it.label} className="glass flex items-center gap-2 rounded-xl px-3 py-2 text-sm">
                  <it.icon size={16} className="text-[color:var(--glow-pink)]" />
                  {it.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const education = [
  { title: "B.Tech — Electronics & Communication Engineering", place: "Nalla Mallareddy Engineering College", years: "2025 – 2029", note: "1st Year · Current CGPA: 7.8" },
  { title: "Intermediate (MPC)", place: "TSWRS JC Girls, Peddamandadi", years: "2023 – 2025", note: "Marks: 955" },
  { title: "SSC", place: "TSWRS JC Girls, Peddamandadi", years: "2023", note: "GPA: 8.7" },
];

function Education() {
  return (
    <section id="education" className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="My journey" title="Education" />
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[color:var(--glow-purple)] via-[color:var(--glow-pink)] to-[color:var(--glow-blue)] md:left-1/2" />
          {education.map((e, idx) => (
            <motion.div
              key={e.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className={`relative mb-10 grid gap-4 md:grid-cols-2 ${idx % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
            >
              <div className="absolute left-4 top-3 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-[color:var(--glow-pink)] shadow-[0_0_20px_rgba(236,72,153,0.8)] md:left-1/2" />
              <div className={`pl-12 md:pl-0 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-strong card-hover rounded-2xl p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--glow-pink)]">{e.years}</p>
                  <h3 className="mt-2 font-display text-lg font-bold">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
                  <p className="mt-2 text-sm text-gradient font-semibold">{e.note}</p>
                </div>
              </div>
              <div />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const skills = [
  { name: "C Programming", icon: FileCode2 },
  { name: "Problem Solving", icon: Brain },
  { name: "Communication", icon: MessageCircle },
  { name: "Team Collaboration", icon: Users },
  { name: "Web Technologies", icon: Globe },
  { name: "Computer Fundamentals", icon: Monitor },
];

function Skills() {
  return (
    <section id="skills" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="What I know" title="Skills" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05 }}
              className="glass card-hover group flex flex-col items-center gap-3 rounded-2xl p-5 text-center"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-tr from-[color:var(--glow-purple)]/30 to-[color:var(--glow-pink)]/30 text-[color:var(--glow-pink)] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all">
                <s.icon size={22} />
              </div>
              <p className="text-sm font-medium">{s.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  { title: "Student Management System", desc: "Console-based system to manage student records with file-based persistence.", icon: Users, stack: ["C", "File Handling"] },
  { title: "Calculator", desc: "Functional calculator implementing arithmetic operations with clean logic.", icon: Code2, stack: ["C", "Logic Design"] },
  { title: "Smart Home Automation Concept", desc: "Conceptual IoT-driven home automation blending ECE fundamentals and software.", icon: HomeIcon, stack: ["IoT Basics", "ECE Concept"] },
  { title: "Mini ECE Project", desc: "Hands-on exploration of circuits and core electronics hardware fundamentals.", icon: Cpu, stack: ["Hardware", "Electronics"] },
];

function Projects() {
  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="My work" title="Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08 }}
              className="glass-strong card-hover rounded-2xl p-6"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-tr from-[color:var(--glow-purple)] to-[color:var(--glow-pink)] text-white shadow-[0_0_24px_rgba(139,92,246,0.5)]">
                  <p.icon size={22} />
                </div>
                <Lightbulb className="text-muted-foreground" size={18} />
              </div>
              <h3 className="font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-full border border-[color:var(--glow-purple)]/40 bg-[color:var(--glow-purple)]/10 px-3 py-1 text-xs text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

const certs = [
  "C Programming Certification",
  "Technical Workshop",
  "Seminar Participation",
  "Coding Event Participation",
];

function Certifications() {
  return (
    <section id="certifications" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Achievements" title="Certifications" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c, i) => (
            <motion.div
              key={c}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08 }}
              className="glass card-hover rounded-2xl p-6 text-center"
            >
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-tr from-[color:var(--glow-blue)] via-[color:var(--glow-purple)] to-[color:var(--glow-pink)] text-white shadow-[0_0_30px_rgba(236,72,153,0.4)]">
                <Award size={24} />
              </div>
              <h3 className="font-display text-base font-semibold">{c}</h3>
              <p className="mt-2 text-xs text-muted-foreground">Awarded</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Get in touch" title="Let's Connect" />
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="glass-strong rounded-3xl p-8"
          >
            <h3 className="font-display text-2xl font-bold">Reach out</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Open to internships, collaborations, and learning opportunities. Drop a message
              or connect via any channel below.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--glow-purple)]/20 text-[color:var(--glow-purple)]"><Mail size={18}/></span>
                <a href="mailto:kollaharika46@gmail.com" className="text-sm hover:text-gradient">kollaharika46@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--glow-pink)]/20 text-[color:var(--glow-pink)]"><Phone size={18}/></span>
                <a href="tel:+919959254458" className="text-sm hover:text-gradient">+91 99592 54458</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--glow-blue)]/20 text-[color:var(--glow-blue)]"><MapPin size={18}/></span>
                <span className="text-sm">Hyderabad, India</span>
              </li>
            </ul>
            <div className="mt-8 flex gap-3">
              {[
                { href: "https://www.linkedin.com/in/harika-reddy-87a2133ba", icon: Linkedin },
                { href: "https://github.com/", icon: Github },
                { href: "https://instagram.com/", icon: Instagram },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="glass card-hover grid h-11 w-11 place-items-center rounded-xl text-foreground">
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
            className="glass-strong space-y-4 rounded-3xl p-8"
          >
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Name</label>
              <input required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-[color:var(--glow-purple)] focus:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</label>
              <input required type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-[color:var(--glow-pink)] focus:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
              <textarea required rows={5} className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-[color:var(--glow-blue)] focus:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition" placeholder="Tell me about your idea..." />
            </div>
            <button type="submit" className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white">
              {sent ? "Message Sent ✓" : (<>Send Message <Send size={16} /></>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-8 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} K. Harika Reddy · Crafted with passion and curiosity.
    </footer>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Loader />
      <Particles />
      <Navbar />
      <SocialSidebar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
