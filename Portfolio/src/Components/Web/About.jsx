import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='relative min-h-screen bg-[#020409] px-4 pt-[8.2rem] pb-4 text-[#f3f5fb]'>
      <div className='mx-auto w-full max-w-[960px] rounded-[20px] border border-[#24314e] bg-[linear-gradient(160deg,rgba(9,14,28,0.86)_0%,rgba(7,11,22,0.92)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_50px_rgba(0,0,0,0.45)]'>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#8f9bb7]'>About</p>
        <h1 className='m-0 font-[Cormorant_Garamond] text-[clamp(2rem,5vw,3.8rem)] leading-[1.02] text-[#f1f4fc]'>Crafting robust full-stack products</h1>
        <p className='mt-4 text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.65] text-[#aeb6cb]'>
          Hi! I&apos;m <span className='font-bold text-[#79adff]'>Piyush Gupta</span>, a passionate Full Stack Developer. I love building modern applications that solve real-world problems with practical architecture and clean user experiences.
        </p>
        <p className='mt-4 text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.65] text-[#aeb6cb]'>
          I work across React, Flutter, Node.js, and backend systems while continuously learning new tools and patterns. I enjoy collaborating on challenging products and shipping features that create measurable impact.
        </p>
        <div className='mt-5 flex flex-wrap gap-3 max-[720px]:flex-col'>
          <Link to='/work' className='rounded-[10px] border border-transparent bg-[#2f72ff] px-5 py-3 text-center text-[0.96rem] font-bold text-white shadow-[0_10px_20px_rgba(47,114,255,0.28)] transition hover:-translate-y-px hover:bg-[#2864e1]'>View My Work</Link>
          <Link to='/contact' className='rounded-[10px] border border-[#324b7a] bg-[rgba(10,16,31,0.92)] px-5 py-3 text-center text-[0.96rem] font-bold text-[#ecf2ff] transition hover:-translate-y-px hover:border-[#4e74bc]'>Work With Me</Link>
        </div>
      </div>
    </section>
  )
}

export default About
