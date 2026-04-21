import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects=[
 {title:'Startup Budget Estimator',desc:'Professional calculator with PDF reports.',stack:['JS','Bootstrap','html2pdf']},
 {title:'Laravel Chat System',desc:'Dynamic sidebar users and messaging.',stack:['Laravel','MySQL','AJAX']},
 {title:'E-Commerce App',desc:'Cart, checkout, Razorpay integration.',stack:['Laravel','PHP','MySQL']},
 {title:'Portfolio Website',desc:'Modern animated responsive portfolio.',stack:['React','Framer Motion']}
];

export default function App(){
 const [dark,setDark]=useState(true)
 return <div className={dark?'dark bg-slate-950 text-white min-h-screen':'bg-white text-slate-900 min-h-screen'}>
 <header className='sticky top-0 backdrop-blur border-b border-slate-800'>
 <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
 <h1 className='font-bold text-xl'>Monu Kumar</h1>
 <button onClick={()=>setDark(!dark)} className='px-4 py-2 rounded-xl bg-blue-600 text-white'>Toggle</button>
 </div></header>
 <section className='max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center'>
 <div className='absolute inset-0 pointer-events-none opacity-20 blur-3xl bg-gradient-to-r from-blue-500 to-cyan-400'></div>
 <div>
 <p className='uppercase tracking-[0.3em] text-sm text-blue-400'>Laravel Developer</p>
 <h2 className='text-5xl font-bold mt-4 leading-tight'>I build secure & modern web apps with Laravel, React & MySQL.</h2>
 <p className='mt-6 text-slate-400'>Self-taught full-stack developer focused on real business solutions, dashboards, APIs and performance.</p>
 <div className='mt-8 flex gap-4 flex-wrap'>
 <span className='px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm'>Available for Hire</span>
 <a className='px-6 py-3 rounded-2xl bg-blue-600' href='#projects'>View Projects</a>
 <a className='px-6 py-3 rounded-2xl border border-slate-700' href='#contact'>Hire Me</a>
 </div>
 </div>
 <div className='rounded-3xl p-8 bg-gradient-to-br from-blue-600/30 to-cyan-400/20 border border-slate-800'>
 <div className='grid grid-cols-2 gap-4'>
 <Card n='10+' t='Projects Completed'/>
 <Card n='1+' t='Years Experience'/>
 <Card n='24h' t='Response Time'/>
 <Card n='100%' t='Remote Ready'/>
 </div></div></section>
 <section id='projects' className='max-w-6xl mx-auto px-6 py-16'>
 <div className='mb-6 grid sm:grid-cols-3 gap-4'>
 <div className='p-4 rounded-2xl bg-slate-900 border border-slate-800'><div className='text-xl font-bold'>Fast Delivery</div><div className='text-slate-400 text-sm'>Production-ready solutions</div></div>
 <div className='p-4 rounded-2xl bg-slate-900 border border-slate-800'><div className='text-xl font-bold'>Clean Code</div><div className='text-slate-400 text-sm'>Readable scalable architecture</div></div>
 <div className='p-4 rounded-2xl bg-slate-900 border border-slate-800'><div className='text-xl font-bold'>Business Focus</div><div className='text-slate-400 text-sm'>Real results & usability</div></div>
 </div>
 <h3 className='text-4xl font-bold mb-10'>Featured Projects</h3>
 <div className='grid md:grid-cols-2 gap-6'>
 {projects.map((p,i)=><motion.div key={i} whileHover={{y:-6}} className='p-6 rounded-3xl border border-slate-800 bg-slate-900'>
 <h4 className='text-2xl font-semibold'>{p.title}</h4>
 <p className='mt-3 text-slate-400'>{p.desc}</p>
 <div className='flex flex-wrap gap-2 mt-4'>{p.stack.map(s=><span key={s} className='px-3 py-1 rounded-full bg-slate-800 text-sm'>{s}</span>)}</div>
 <div className='mt-5 flex gap-3'><button className='px-4 py-2 rounded-xl bg-blue-600'>Live Demo</button><button className='px-4 py-2 rounded-xl border border-slate-700'>GitHub</button></div>
 </motion.div>)}
 </div></section>
 <section id='testimonials' className='max-w-6xl mx-auto px-6 py-8'>
 <h3 className='text-4xl font-bold mb-8'>Client Feedback</h3>
 <div className='grid md:grid-cols-3 gap-6'>
 <div className='p-6 rounded-3xl border border-slate-800 bg-slate-900'>Great communication and strong Laravel skills.</div>
 <div className='p-6 rounded-3xl border border-slate-800 bg-slate-900'>Delivered clean dashboard before deadline.</div>
 <div className='p-6 rounded-3xl border border-slate-800 bg-slate-900'>Highly recommended for web app projects.</div>
 </div>
 </section>
 <section id='contact' className='max-w-4xl mx-auto px-6 py-16'>
 <div className='p-8 rounded-3xl border border-slate-800 bg-slate-900'>
 <h3 className='text-3xl font-bold'>Let’s Work Together</h3>
 <p className='mt-3 text-slate-400'>Available for freelance and remote opportunities.</p>
 <div className='grid gap-4 mt-6'>
 <input className='p-3 rounded-xl bg-slate-800' placeholder='Your Name'/>
 <input className='p-3 rounded-xl bg-slate-800' placeholder='Email'/>
 <textarea className='p-3 rounded-xl bg-slate-800' rows='5' placeholder='Project details'></textarea>
 <button className='px-6 py-3 rounded-2xl bg-blue-600'>Send Message</button>
 </div></div></section>
 <footer className='text-center py-10 text-slate-500'>© 2026 Monu Kumar • Built with React • Recruiter Edition</footer>
 </div>
}
function Card({n,t}){return <div className='p-5 rounded-2xl bg-slate-900 border border-slate-800'><div className='text-3xl font-bold'>{n}</div><div className='text-slate-400 text-sm mt-1'>{t}</div></div>}
