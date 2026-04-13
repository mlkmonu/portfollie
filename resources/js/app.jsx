import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion } from 'framer-motion';
import '../css/app.css';

const navigation = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

const stats = [
    { value: '1+', label: 'Years designing polished web interfaces' },
    { value: '4', label: 'Showcase project concepts' },
    { value: '100%', label: 'Responsive and mobile-first sections' },
];

const skills = [
    { name: 'React', level: 90, detail: 'Component architecture, reusable UI sections, SPA interactions, modern state flows' },
    { name: 'JavaScript', level: 86, detail: 'Interactive experiences, DOM logic, accessible UI behavior, clean frontend structure' },
    { name: 'Tailwind CSS', level: 88, detail: 'Responsive design systems, component styling, animations, dark mode support' },
    { name: 'HTML5', level: 92, detail: 'Semantic layouts, SEO-friendly structure, accessible content hierarchy' },
    { name: 'UI Motion', level: 78, detail: 'Framer Motion transitions, section reveals, polished page feel' },
    { name: 'GitHub Deployment', level: 80, detail: 'Static build workflows, Vite production builds, GitHub-ready deployment setup' },
];

const projects = [
    {
        title: 'InventoryFlow',
        description:
            'A clean inventory dashboard concept for small businesses with sharp cards, responsive layouts, and fast navigation patterns.',
        stack: ['React', 'JavaScript', 'Tailwind', 'Vite'],
        live: '#',
        source: '#',
    },
    {
        title: 'HireTrack',
        description:
            'Recruitment portal interface with job posting flows, candidate cards, and recruiter-friendly screens built for everyday speed.',
        stack: ['React', 'HTML', 'Tailwind', 'Motion'],
        live: '#',
        source: '#',
    },
    {
        title: 'ClientPortal Pro',
        description:
            'Service business portal UI for invoices, support tickets, and project updates with a polished customer-facing experience.',
        stack: ['React', 'JavaScript', 'Tailwind', 'Responsive UI'],
        live: '#',
        source: '#',
    },
    {
        title: 'CourseNest',
        description:
            'Learning platform concept featuring course browsing, structured lessons, progress tracking, and reusable landing-page modules.',
        stack: ['React', 'Vite', 'Tailwind', 'UI Design'],
        live: '#',
        source: '#',
    },
];

const experience = [
    {
        role: 'Frontend Developer',
        company: 'Freelance / Portfolio Work',
        period: '2025 - Present',
        summary:
            'Built and refined responsive frontend interfaces with modern React workflows, reusable sections, and client-focused visual delivery.',
        points: [
            'Designed landing pages, dashboards, forms, and portfolio sections that stay polished across devices.',
            'Focused on smooth interactions, clean spacing systems, and reusable component-based structures.',
            'Prepared static frontend builds that are easy to host on GitHub Pages or other simple deploy targets.',
        ],
    },
];

const contactLinks = [
    { label: 'Email', value: 'hello@frontendfolio.dev', href: 'mailto:hello@frontendfolio.dev' },
    { label: 'GitHub', value: 'github.com/frontendfolio', href: 'https://github.com/frontendfolio' },
    { label: 'LinkedIn', value: 'linkedin.com/in/frontendfolio', href: 'https://linkedin.com/in/frontendfolio' },
];

const heroImage =
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80';

function App() {
    const [theme, setTheme] = useState(() => {
        const stored = window.localStorage.getItem('portfolio-theme');
        if (stored === 'light' || stored === 'dark') {
            return stored;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark');
        document.documentElement.classList.toggle('dark', theme === 'dark');
        window.localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    const yearLabel = useMemo(() => new Date().getFullYear(), []);

    return (
        <div className="relative overflow-x-hidden">
            <BackgroundGlow />
            <Header theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            <main className="container-shell relative z-10 pb-16 pt-12 sm:pb-24 sm:pt-16">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer year={yearLabel} />
        </div>
    );
}

function Header({ theme, onToggleTheme }) {
    return (
        <motion.header
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-0 z-30 px-3 pt-3 sm:px-5"
        >
            <div className="container-shell section-card rounded-full px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                    <a href="#hero" className="display-font text-sm font-bold uppercase tracking-[0.24em] text-slate-700 dark:text-slate-200">
                        Frontend Dev
                    </a>

                    <nav className="hidden items-center gap-6 md:flex">
                        {navigation.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-slate-600 transition hover:text-brand-500 dark:text-slate-300 dark:hover:text-brand-300"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <button
                        type="button"
                        onClick={onToggleTheme}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
                    >
                        <span className="h-2.5 w-2.5 rounded-full bg-brand-500 dark:bg-teal-300" />
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </div>
        </motion.header>
    );
}

function Hero() {
    const [imageReady, setImageReady] = useState(true);

    return (
        <section id="hero" className="grid gap-6 pt-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-start lg:pt-8">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="section-card relative z-10 rounded-[2rem] p-6 sm:p-8 lg:p-12"
            >
                <div className="mb-6 inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-200">
                    Frontend Developer | React Portfolio
                </div>
                <h1 className="display-font max-w-3xl text-4xl font-bold leading-[1.08] text-slate-900 sm:text-5xl lg:text-6xl xl:text-[4.5rem] dark:text-white">
                    Building clean digital products with <span className="text-gradient">modern frontend experiences.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
                    I&apos;m a frontend developer focused on responsive interfaces, smooth user journeys, and portfolio-ready
                    experiences. I enjoy turning visual ideas into fast, maintainable web apps.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-600 dark:bg-white dark:text-slate-950 dark:hover:bg-brand-200"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-brand-400 dark:hover:text-brand-300"
                    >
                        Hire Me
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="section-card rounded-[2rem] p-5 sm:p-6"
            >
                <div className="rounded-[1.5rem] border border-white/40 bg-[linear-gradient(135deg,rgba(29,99,242,0.16),rgba(124,224,211,0.22),rgba(255,255,255,0.58))] p-4 sm:p-5 dark:border-slate-700/60 dark:bg-[linear-gradient(135deg,rgba(29,99,242,0.18),rgba(124,224,211,0.16),rgba(12,18,34,0.72))]">
                    <div className="overflow-hidden rounded-[1.35rem] border border-white/50 bg-slate-100 dark:border-slate-700/70 dark:bg-slate-900">
                        {imageReady ? (
                            <img
                                src={heroImage}
                                alt="Developer workspace demo"
                                className="h-64 w-full object-cover object-center sm:h-72"
                                onError={() => setImageReady(false)}
                            />
                        ) : (
                            <div className="flex h-64 w-full flex-col justify-between bg-[linear-gradient(135deg,#0f172a,#173db8,#18a0ae)] p-6 text-white sm:h-72">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/70">Demo Preview</p>
                                    <h3 className="display-font mt-3 max-w-xs text-2xl font-semibold leading-tight">
                                        Developer workspace showcase without any blank image area.
                                    </h3>
                                </div>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                                        <p className="text-xs uppercase tracking-[0.2em] text-white/70">Stack</p>
                                        <p className="mt-2 text-sm font-medium">React, HTML, Tailwind, JavaScript</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                                        <p className="text-xs uppercase tracking-[0.2em] text-white/70">Focus</p>
                                        <p className="mt-2 text-sm font-medium">Clean UI, fast pages, clear structure</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                        <div className="flex gap-2" aria-hidden="true">
                            <span className="h-3 w-3 rounded-full bg-rose-400" />
                            <span className="h-3 w-3 rounded-full bg-amber-400" />
                            <span className="h-3 w-3 rounded-full bg-emerald-400" />
                        </div>
                        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300">
                            Current Focus
                        </p>
                    </div>

                    <div className="mt-5 space-y-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, x: 18 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.16 + index * 0.1 }}
                                className="rounded-[1.25rem] border border-white/60 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-950/50"
                            >
                                <div className="display-font text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                                <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

function About() {
    return (
        <Section id="about" eyebrow="About" title="A developer who cares about clarity, speed, and maintainable interfaces.">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
                    Over the last year, I&apos;ve been building frontend interfaces with a strong focus on responsive layouts,
                    clean section flows, and UI that feels polished across devices. I enjoy shipping practical experiences,
                    improving visual structure, and using patterns that make products easier to extend.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                    <MiniCard title="Design mindset" text="Layout clarity, balanced hierarchy, responsive spacing, and user-first polish." />
                    <MiniCard title="Frontend delivery" text="React + Tailwind interfaces that are smooth, fast, and mobile-ready." />
                </div>
            </div>
        </Section>
    );
}

function Skills() {
    return (
        <Section id="skills" eyebrow="Skills" title="Balanced across visual design thinking and modern interface delivery.">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {skills.map((skill, index) => (
                    <motion.article
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, delay: index * 0.05 }}
                        className="section-card rounded-[1.5rem] p-5"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="display-font text-xl font-semibold text-slate-900 dark:text-white">{skill.name}</h3>
                            <span className="text-sm font-semibold text-brand-600 dark:text-brand-300">{skill.level}%</span>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{skill.detail}</p>
                        <div className="mt-5 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.15 }}
                                className="h-full rounded-full bg-[linear-gradient(90deg,#1d63f2,#7ce0d3)]"
                            />
                        </div>
                    </motion.article>
                ))}
            </div>
        </Section>
    );
}

function Projects() {
    return (
        <Section id="projects" eyebrow="Projects" title="Selected concepts that show frontend problem-solving with modern product thinking.">
            <div className="grid gap-5 lg:grid-cols-2">
                {projects.map((project, index) => (
                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.06 }}
                        className="section-card group rounded-[1.75rem] p-6"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                                    Featured Project
                                </p>
                                <h3 className="display-font mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
                                    {project.title}
                                </h3>
                            </div>
                            <div className="rounded-full border border-slate-300/80 px-3 py-1 text-xs font-medium text-slate-600 transition group-hover:border-brand-400 group-hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:group-hover:border-brand-400 dark:group-hover:text-brand-300">
                                Case Study
                            </div>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-slate-300/80 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6 flex gap-3">
                            <a
                                href={project.live}
                                className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600 dark:bg-white dark:text-slate-950 dark:hover:bg-brand-200"
                            >
                                Live Demo
                            </a>
                            <a
                                href={project.source}
                                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
                            >
                                GitHub
                            </a>
                        </div>
                    </motion.article>
                ))}
            </div>
        </Section>
    );
}

function Experience() {
    return (
        <Section id="experience" eyebrow="Experience" title="One focused year of real frontend design and development experience.">
            <div className="grid gap-5">
                {experience.map((item, index) => (
                    <motion.article
                        key={item.role}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        className="section-card rounded-[1.75rem] p-6 sm:p-8"
                    >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <p className="display-font text-2xl font-semibold text-slate-900 dark:text-white">{item.role}</p>
                                <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-300">{item.company}</p>
                            </div>
                            <div className="rounded-full border border-slate-300/80 px-4 py-2 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
                                {item.period}
                            </div>
                        </div>
                        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">{item.summary}</p>
                        <div className="mt-6 grid gap-3 md:grid-cols-3">
                            {item.points.map((point) => (
                                <div
                                    key={point}
                                    className="rounded-[1.25rem] border border-slate-200/80 bg-white/75 p-4 text-sm leading-7 text-slate-600 dark:border-slate-800 dark:bg-slate-950/45 dark:text-slate-300"
                                >
                                    {point}
                                </div>
                            ))}
                        </div>
                    </motion.article>
                ))}
            </div>
        </Section>
    );
}

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [projectType, setProjectType] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio enquiry: ${projectType || 'New project'}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}`,
        );

        window.location.href = `mailto:hello@frontendfolio.dev?subject=${subject}&body=${body}`;
    };

    return (
        <Section id="contact" eyebrow="Contact" title="Let's build something practical.">
            <div className="section-card rounded-[1.75rem] p-6">
                
                <form className="grid gap-4" onSubmit={handleSubmit}>

                    <FormField
                        label="Your Name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <FormField
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <FormField
                        label="Project Type"
                        placeholder="Web app, dashboard..."
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                    />

                    <label className="grid gap-2">
                        <span className="text-sm font-semibold">Message</span>
                        <textarea
                            rows="5"
                            placeholder="Tell me about your idea..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="rounded-[1.2rem] border px-4 py-3"
                        />
                    </label>

                    <button
                        type="submit"
                        className="rounded-full bg-black text-white py-3"
                    >
                        Send Message
                    </button>

                </form>
            </div>
        </Section>
    );
}

function Footer({ year }) {
    return (
        <footer className="container-shell relative z-10 border-t border-slate-200/70 py-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p>&copy; {year} Frontend Developer Portfolio. Crafted with React and Tailwind CSS.</p>
                <div className="flex gap-4">
                    <a href="https://github.com/frontendfolio" className="transition hover:text-brand-500 dark:hover:text-brand-300">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/frontendfolio" className="transition hover:text-brand-500 dark:hover:text-brand-300">
                        LinkedIn
                    </a>
                    <a href="mailto:hello@frontendfolio.dev" className="transition hover:text-brand-500 dark:hover:text-brand-300">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}

function Section({ id, eyebrow, title, children }) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.55 }}
            className="mt-18 scroll-mt-28 pt-18"
        >
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">{eyebrow}</p>
                <h2 className="display-font mt-3 max-w-3xl text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
                    {title}
                </h2>
            </div>
            {children}
        </motion.section>
    );
}

function MiniCard({ title, text }) {
    return (
        <div className="section-card rounded-[1.35rem] p-5">
            <h3 className="display-font text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
        </div>
    );
}

function FormField({ label, type = 'text', placeholder, value, onChange }) {
    return (
        <label className="grid gap-2">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{label}</span>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="rounded-[1.2rem] border border-slate-300/80 bg-white/80 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-brand-400 dark:border-slate-700 dark:bg-slate-950/55 dark:text-slate-100"
            />
        </label>
    );
}

function BackgroundGlow() {
    return (
        <AnimatePresence>
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, 24, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-[-8rem] top-12 h-64 w-64 rounded-full bg-brand-300/20 blur-3xl dark:bg-brand-500/15"
                />
                <motion.div
                    animate={{ x: [0, -28, 0], y: [0, -20, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute right-[-4rem] top-80 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-300/12"
                />
            </div>
        </AnimatePresence>
    );
}

const rootElement = document.getElementById('app');

if (rootElement) {
    createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
}
