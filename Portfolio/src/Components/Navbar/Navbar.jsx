import { useEffect, useState } from 'react'
import logo from './logo.jpg'
import { Link, NavLink } from 'react-router-dom'

const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL || 'your@email.com').trim()

const navClass = ({ isActive }) =>
  `rounded-full border px-3 py-1.5 text-sm uppercase tracking-[0.05em] transition ${
    isActive
      ? 'border-[#2d436d] bg-[rgba(47,114,255,0.14)] text-white'
      : 'border-transparent text-[#b0b8cb] hover:-translate-y-px hover:border-[#2d436d] hover:bg-[rgba(47,114,255,0.14)] hover:text-white'
  }`

const Navbar = () => {
  const rotatingMeta = ['Gurugram, IND', 'Full Stack Developer']
  const [metaIndex, setMetaIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setMetaIndex((prev) => (prev + 1) % rotatingMeta.length)
    }, 2500)

    return () => clearInterval(timer)
  }, [rotatingMeta.length])

  return (
    <header className='anim-fade-in fixed top-0 z-50 w-full bg-[rgba(3,5,10,0.7)] px-4 pt-3 pb-2 backdrop-blur-md'>
      <nav className='anim-scale-in mx-auto flex h-[5.3rem] w-full max-w-[1600px] items-center justify-between rounded-[14px] border border-[#24314e] bg-[rgba(8,13,25,0.8)] px-4'>
        <Link to='/' className='anim-fade-left flex min-w-0 items-center gap-3 no-underline'>
          <img src={logo} className='anim-float h-[2.9rem] w-[2.9rem] rounded-[10px] border border-[#355080] object-cover' alt='logo' />
          <div className='w-[19ch] min-w-0 max-sm:hidden'>
            <p className='m-0 text-[1.02rem] font-bold tracking-[0.01em] text-[#f3f5fb]'>Piyush Gupta</p>
            <p className='relative m-0 mt-0.5 h-[1.25em] overflow-hidden text-[0.9rem]' aria-live='polite'>
              {rotatingMeta.map((item, index) => (
                <span
                  key={item}
                  className={`absolute left-0 top-0 whitespace-nowrap transition-all duration-300 ${
                    metaIndex === index ? 'translate-y-0 text-[#b5c5e6] opacity-100' : 'translate-y-1.5 text-[#8d97b0] opacity-0'
                  }`}
                >
                  {item}
                </span>
              ))}
            </p>
          </div>
        </Link>

        <div className='anim-fade-up anim-delay-2 flex items-center gap-4 max-[1100px]:hidden'>
          <NavLink className={navClass} to='/about'>About</NavLink>
          <NavLink className={navClass} to='/work'>Projects</NavLink>
          <NavLink className={navClass} to='/contact'>Contact</NavLink>
        </div>

        <div className='anim-fade-right anim-delay-3 flex items-center gap-2.5'>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className='rounded-[9px] border border-[#30446d] px-3 py-2 text-[0.93rem] text-[#d8deec] no-underline transition-colors hover:border-[#45639f] hover:text-white max-[1100px]:hidden'
          >
            {CONTACT_EMAIL}
          </a>
          <span className='anim-glow inline-flex items-center gap-2 rounded-[9px] border border-[#30446d] bg-[rgba(11,18,33,0.9)] px-3 py-2 text-[0.82rem] font-semibold tracking-[0.02em] text-[#eaf0ff]'>
            <span className='h-2 w-2 rounded-full bg-[#5bffab] shadow-[0_0_0_6px_rgba(91,255,171,0.12)]' />
            Available
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
