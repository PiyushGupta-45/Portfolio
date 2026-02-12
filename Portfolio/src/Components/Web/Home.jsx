import { Link } from 'react-router-dom'
import logo from '../Navbar/logo.jpg'
import healthHub from './HealthHub.png'

const Home = () => {
  return (
    <main className='relative min-h-screen overflow-hidden bg-[#020409] px-4 pb-10 pt-[7.6rem] text-[#f3f5fb] sm:px-8 lg:px-12 xl:px-16'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -left-20 top-28 h-96 w-96 rounded-full bg-[rgba(41,98,225,0.34)] blur-[95px]' />
        <div className='absolute -right-12 top-64 h-80 w-80 rounded-full bg-[rgba(47,114,255,0.29)] blur-[90px]' />
        <div className='absolute bottom-[-6rem] left-1/2 h-56 w-[32rem] -translate-x-1/2 rounded-full bg-[rgba(47,114,255,0.14)] blur-[100px]' />
      </div>

      <section className='relative z-10 mx-auto mb-6 grid w-full max-w-[1380px] grid-cols-[1.35fr_0.95fr] items-stretch gap-5 max-[1180px]:grid-cols-1'>
        <div className='flex min-h-[31rem] flex-col justify-center rounded-[24px] border border-[#24314e] bg-[linear-gradient(160deg,rgba(10,15,28,0.86)_0%,rgba(7,11,22,0.9)_100%)] px-8 py-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_50px_rgba(0,0,0,0.45)] max-sm:min-h-[22rem] max-sm:px-5 max-sm:py-7'>
          <p className='mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#8f9bb7]'>Portfolio</p>
          <h1 className='m-0 font-[Cormorant_Garamond] text-[clamp(2.5rem,6.7vw,6.6rem)] leading-[0.9] tracking-[-0.012em] max-sm:leading-[0.92]'>
            Hi, I&apos;m Piyush
            <br />
            <span className='text-[#cfd6e8]'>building</span>{' '}
            <span className='bg-[linear-gradient(90deg,#79adff_0%,#2f72ff_55%,#2459d9_100%)] bg-clip-text font-[Teko] font-semibold uppercase tracking-[0.04em] text-transparent'>
              Web Products
            </span>
          </h1>
        </div>

        <aside className='grid h-full grid-rows-[1fr_1.15fr_1fr_0.75fr] gap-2.5'>
          <div className='flex h-full min-h-[6.8rem] items-center gap-3 rounded-2xl border border-[#293d66] bg-[rgba(8,13,25,0.82)] px-3 py-2.5'>
            <img src={logo} alt='profile' className='h-[4.3rem] w-[4.3rem] rounded-[10px] border border-[#3a5488] object-cover' />
            <p className='m-0 text-[1.9rem] font-semibold uppercase leading-none tracking-[0.045em] text-[#cfdbf3] font-[Teko]'>Full Stack Developer</p>
          </div>

          <p className='m-0 h-full rounded-xl border border-[#23324f] bg-[rgba(8,14,27,0.78)] px-4 py-3 text-[clamp(1rem,1.32vw,1.85rem)] leading-[1.35] text-[#aeb6cb]'>
            A full-stack developer from India, passionate about building scalable web applications and crafting intuitive user experiences.
          </p>

          <div className='flex h-full items-center justify-center gap-2 rounded-[10px] border border-[#2a3d63] bg-[rgba(7,12,24,0.88)] p-1.5 max-sm:flex-col'>
            <Link
              to='/contact'
              className='flex h-16 min-w-[15rem] items-center justify-center rounded-lg border border-transparent bg-[#2f72ff] px-5 text-center text-[1.05rem] font-bold text-white shadow-[0_10px_20px_rgba(47,114,255,0.3)] transition hover:-translate-y-px hover:bg-[#2864e1] max-sm:h-14 max-sm:min-w-0'
            >
              Contact Me
            </Link>
            <Link
              to='/work'
              className='flex h-16 min-w-[15rem] items-center justify-center rounded-lg border border-[#324b7a] bg-[rgba(10,16,31,0.92)] px-6 text-center text-[1.05rem] font-bold text-[#ecf2ff] transition hover:-translate-y-px hover:border-[#4e74bc] max-sm:h-14 max-sm:min-w-0'
            >
              View Work
            </Link>
          </div>

          <div className='flex h-full items-center gap-3 rounded-xl border border-[#27395f] bg-[rgba(7,12,24,0.75)] p-1.5'>
            <div className='flex flex-wrap gap-1'>
              <a
                href='https://www.linkedin.com/in/piyush-gupta4321/'
                target='_blank'
                rel='noreferrer'
                className='rounded-full border border-[#27395f] bg-[rgba(8,13,26,0.74)] px-2.5 py-1.5 text-xs uppercase tracking-[0.16em] text-[#bcc5da] transition hover:-translate-y-px hover:border-[#3d5c95] hover:text-white'
              >
                Linkedin
              </a>
              <a
                href='https://github.com/PiyushGupta-45'
                target='_blank'
                rel='noreferrer'
                className='rounded-full border border-[#27395f] bg-[rgba(8,13,26,0.74)] px-2.5 py-1.5 text-xs uppercase tracking-[0.16em] text-[#bcc5da] transition hover:-translate-y-px hover:border-[#3d5c95] hover:text-white'
              >
                GitHub
              </a>
            </div>
            <span className='ml-auto rounded-full border border-[#27395f] bg-[rgba(8,13,26,0.74)] px-2.5 py-1.5 text-xs uppercase tracking-[0.16em] text-[#bcc5da] max-sm:hidden'>
              Scroll -&gt;
            </span>
          </div>
        </aside>
      </section>

      <section className='relative z-10 mx-auto w-full max-w-[1380px] rounded-[22px] border border-[#24314e] bg-[linear-gradient(160deg,rgba(10,15,28,0.85)_0%,rgba(7,11,22,0.9)_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_44px_rgba(0,0,0,0.45)] sm:p-5'>
        <div className='mb-3 flex items-end justify-between gap-4'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#8f9bb7]'>Showcase</p>
            <h2 className='mt-1 font-[Cormorant_Garamond] text-[clamp(1.9rem,3.2vw,3rem)] leading-none text-[#f2f6ff]'>Favorite Project</h2>
          </div>
          <Link to='/work/health-hub-react' className='rounded-full border border-[#324b7a] bg-[rgba(10,16,31,0.92)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#dbe7ff] transition hover:-translate-y-px hover:border-[#4e74bc]'>
            View Details
          </Link>
        </div>

        <article className='grid grid-cols-[1fr_1.1fr] items-stretch gap-3 rounded-2xl border border-[#27395f] bg-[rgba(8,13,26,0.75)] p-3 max-[900px]:grid-cols-1'>
          <div className='h-[220px] overflow-hidden rounded-xl border border-[#2f4470] bg-[rgba(7,12,24,0.88)] sm:h-[260px] lg:h-[300px]'>
            <img src={healthHub} alt='Health Hub project' className='h-full w-full object-cover transition duration-500 hover:scale-105' />
          </div>

          <div className='flex h-full flex-col justify-between'>
            <div>
              <h3 className='text-[clamp(1.25rem,2.4vw,2rem)] font-semibold text-[#eff5ff]'>Health Hub</h3>
              <p className='mt-2 text-[clamp(0.9rem,1.2vw,1.04rem)] leading-relaxed text-[#b5c0d8]'>
                A complete health and wellness platform with workout tracking, nutrition planning, and progress analytics designed for daily consistency and long-term goals.
              </p>
            </div>

            <div className='mt-3 flex flex-wrap gap-2'>
              <span className='rounded-full border border-[#314a7a] bg-[rgba(10,16,31,0.82)] px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-[#cdd9f2]'>React</span>
              <span className='rounded-full border border-[#314a7a] bg-[rgba(10,16,31,0.82)] px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-[#cdd9f2]'>Node.js</span>
              <span className='rounded-full border border-[#314a7a] bg-[rgba(10,16,31,0.82)] px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-[#cdd9f2]'>MongoDB</span>
              <span className='rounded-full border border-[#314a7a] bg-[rgba(10,16,31,0.82)] px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-[#cdd9f2]'>AI Features</span>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Home
