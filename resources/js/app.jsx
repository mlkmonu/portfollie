
import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
import '../css/app.css';

const navigation = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

const stats = [
    { value: '1+', label: 'Years of hands-on Laravel experience' },
    { value: '5+', label: 'Projects completed successfully' },
    { value: 'Learning', label: 'Continuously improving skills' },
];

const skills = [
    { name: 'Laravel', level: 80, detail: 'MVC, CRUD, Authentication, REST APIs' },
    { name: 'PHP', level: 75, detail: 'Core PHP, OOP, Backend Logic' },
    { name: 'MySQL', level: 75, detail: 'Database design, joins, optimization' },
    { name: 'React JS', level: 70, detail: 'Components, Hooks, Dynamic UI' },
    { name: 'JavaScript', level: 75, detail: 'DOM, AJAX, ES6' },
    { name: 'Bootstrap', level: 85, detail: 'Responsive layouts and design' },
    { name: 'WordPress', level: 70, detail: 'Themes, Elementor, CMS setup' },
];

const projects = [
    {
        title: 'Startup Budget Estimator',
        description:
            'Created a smart web app using Bootstrap and JavaScript to estimate startup budgets dynamically with PDF report generation using html2pdf.js.',
        stack: ['HTML', 'Bootstrap', 'JavaScript', 'html2pdf.js'],
        live: '#',
        source: '#',
    },
    {
        title: 'Laravel Breeze Chat System',
        description:
            'Built a Laravel Breeze based chat system with user sidebar, dynamic message loading and modern messaging interface.',
        stack: ['Laravel', 'PHP', 'MySQL', 'AJAX'],
        live: '#',
        source: '#',
    },
    {
        title: 'Portfolio Website',
        description:
            'Designed a premium animated portfolio using React JS, Framer Motion, dark mode and responsive modern UI.',
        stack: ['React', 'CSS', 'JavaScript', 'Framer Motion'],
        live: '#',
        source: '#',
    },
    {
        title: 'E-Commerce Website',
        description:
            'Laravel eCommerce website with cart, checkout, products and payment integration.',
        stack: ['Laravel', 'PHP', 'MySQL', 'Razorpay'],
        live: '#',
        source: '#',
    },
    {
        title: 'Admin Dashboard',
        description:
            'Created admin dashboard with charts, users management and reports.',
        stack: ['Laravel', 'Sanctum', 'JavaScript'],
        live: '#',
        source: '#',
    },
];

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const yearLabel = useMemo(() => new Date().getFullYear(), []);

    return (
        <div className="relative overflow-x-hidden">
            <BackgroundGlow />

            <Header
                theme={theme}
                onToggleTheme={() =>
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                }
            />

            <main className="container-shell pb-16 pt-10">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Footer year={yearLabel} />
            </main>
        </div>
    );
}

function Header({ theme, onToggleTheme }) {
    return (
        <header className="sticky top-0 z-30 p-4">
            <div className="section-card rounded-full px-6 py-4 flex justify-between">
                <h2 className="font-bold text-xl">Monu Portfolio</h2>

                <div className="flex gap-6">
                    {navigation.map((item) => (
                        <a key={item.href} href={item.href}>
                            {item.label}
                        </a>
                    ))}
                </div>

                <button onClick={onToggleTheme}>
                    {theme === 'dark' ? 'Light' : 'Dark'}
                </button>
            </div>
        </header>
    );
}

function Hero() {
    return (
        <section id="hero" className="py-20 text-center">
            <h1 className="text-6xl font-bold">
                Laravel & React Developer
            </h1>

            <p className="mt-5 text-xl text-gray-500">
                I build modern websites and full-stack web applications.
            </p>
        </section>
    );
}

function About() {
    return (
        <section id="about" className="py-20">
            <h2 className="text-4xl font-bold">About Me</h2>

            <p className="mt-4 text-gray-600 leading-8">
                I am a passionate developer working with Laravel,
                PHP, MySQL, React JS and modern frontend tools.
                I enjoy building real world projects.
            </p>
        </section>
    );
}

function Skills() {
    return (
        <section id="skills" className="py-20">
            <h2 className="text-4xl font-bold mb-10">Skills</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill) => (
                    <div key={skill.name} className="section-card p-5 rounded-xl">
                        <h3 className="text-2xl font-bold">{skill.name}</h3>
                        <p className="mt-2">{skill.detail}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Projects() {
    return (
        <section id="projects" className="py-20">
            <h2 className="text-4xl font-bold mb-10">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div key={project.title} className="section-card p-6 rounded-2xl">
                        <h3 className="text-2xl font-bold">
                            {project.title}
                        </h3>

                        <p className="mt-4 text-gray-600">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.stack.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="mt-5 flex gap-3">
                            <a href={project.live}>Live Demo</a>
                            <a href={project.source}>GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Footer({ year }) {
    return (
        <footer className="py-10 text-center">
            © {year} Monu Portfolio
        </footer>
    );
}

function BackgroundGlow() {
    return (
        <AnimatePresence>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ x: [0, 30, 0] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                    }}
                    className="absolute left-0 top-0 w-72 h-72 bg-blue-300 blur-3xl opacity-20 rounded-full"
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
        </React.StrictMode>
    );
}
