const contactLinks = [
  {
    label: 'Email',
    value: 'pgupta3883@gmail.com',
    href: 'mailto:pgupta3883@gmail.com',
    note: 'Best for project discussions and collaboration.',
  },
  {
    label: 'Phone',
    value: '+91 9992493816',
    href: 'tel:+919992493816',
    note: 'For quick conversations and urgent requirements.',
  },
  {
    label: 'LinkedIn',
    value: 'piyush-gupta-68b048388',
    href: 'https://www.linkedin.com/in/piyush-gupta-68b048388/',
    note: 'Professional profile, updates, and networking.',
  },
  {
    label: 'GitHub',
    value: 'PiyushGupta-45',
    href: 'https://github.com/PiyushGupta-45',
    note: 'Code samples, repositories, and project work.',
  },
]

const Contact = () => {
  return (
    <main className='relative min-h-screen overflow-hidden bg-[#020409] px-4 pb-10 pt-[7.6rem] text-[#f3f5fb] sm:px-8 lg:px-12 xl:px-16'>
      <div className='pointer-events-none fixed inset-0'>
        <div className='absolute -left-20 top-24 h-96 w-96 rounded-full bg-[rgba(41,98,225,0.34)] blur-[95px]' />
        <div className='absolute -right-12 top-64 h-80 w-80 rounded-full bg-[rgba(47,114,255,0.29)] blur-[90px]' />
        <div className='absolute bottom-[-6rem] left-1/2 h-56 w-[32rem] -translate-x-1/2 rounded-full bg-[rgba(47,114,255,0.14)] blur-[100px]' />
      </div>

      <section className='relative z-10 mx-auto grid w-full max-w-[1380px] gap-6 lg:grid-cols-[0.95fr_1.05fr]'>
        <div className='anim-fade-left rounded-[26px] border border-[#24314e] bg-[linear-gradient(160deg,rgba(10,15,28,0.86)_0%,rgba(7,11,22,0.9)_100%)] px-6 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_50px_rgba(0,0,0,0.45)] sm:px-8 sm:py-9'>
          <p className='mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#8f9bb7]'>Contact</p>
          <h1 className='m-0 font-[Cormorant_Garamond] text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.92] text-[#f1f4fc]'>
            Let&apos;s talk
            <br />
            about your
            <br />
            next build
          </h1>

          <p className='mt-5 max-w-[34rem] text-[clamp(1rem,1.35vw,1.15rem)] leading-8 text-[#aeb6cb]'>
            The contact form is removed, so the page now focuses on direct ways to reach me. If you have a project, internship, freelance role, or collaboration idea, use any of the options here.
          </p>

          <div className='anim-fade-up anim-delay-2 mt-6 flex flex-wrap gap-3'>
            <a
              href='mailto:pgupta3883@gmail.com'
              className='anim-glow rounded-[12px] border border-transparent bg-[#2f72ff] px-5 py-3 text-[0.96rem] font-bold text-white shadow-[0_10px_20px_rgba(47,114,255,0.28)] transition hover:-translate-y-px hover:bg-[#2864e1]'
            >
              Email Me
            </a>
            <a
              href='https://www.linkedin.com/in/piyush-gupta4321/'
              target='_blank'
              rel='noreferrer'
              className='rounded-[12px] border border-[#324b7a] bg-[rgba(10,16,31,0.92)] px-5 py-3 text-[0.96rem] font-bold text-[#ecf2ff] transition hover:-translate-y-px hover:border-[#4e74bc]'
            >
              Open LinkedIn
            </a>
          </div>
        </div>

        <div className='grid gap-4'>
          {contactLinks.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className='anim-fade-right rounded-[22px] border border-[#27395f] bg-[rgba(8,13,26,0.76)] p-5 no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_16px_38px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:border-[#4a6fb6] hover:shadow-[0_18px_36px_rgba(0,0,0,0.34)]'
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <p className='text-xs font-semibold uppercase tracking-[0.18em] text-[#8f9bb7]'>{item.label}</p>
                  <h2 className='mt-2 text-[clamp(1.2rem,2.2vw,1.7rem)] font-semibold text-[#eef4ff]'>{item.value}</h2>
                </div>
                <span className='rounded-full border border-[#314a7a] bg-[rgba(10,16,31,0.82)] px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.14em] text-[#cdd9f2]'>
                  Reach Out
                </span>
              </div>

              <p className='mt-3 text-[0.98rem] leading-7 text-[#aeb6cb]'>{item.note}</p>
            </a>
          ))}

          <div className='anim-fade-up anim-delay-4 rounded-[22px] border border-[#2b3f68] bg-[rgba(8,13,25,0.8)] p-5'>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-[#8f9bb7]'>Availability</p>
            <p className='mt-3 text-[1.05rem] leading-8 text-[#b3bdd4]'>
              Open to internships, freelance projects, web app builds, Flutter apps, and full-stack product work.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
