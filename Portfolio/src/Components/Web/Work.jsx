import React from 'react'
import { Link } from 'react-router-dom'
import logo from './HealthHub.png'
import todo from './todo.jpg'
import life from './life-saver.png'
import expense from './Expense_Tracker.png'
import womensafety from './womensafety.jpg'
import ecom from './Ecommerce.png'
import sharebites from './ShareBites.png'
import budget from './BudgetTracker.png'

const projects = [
  { title: 'Health Hub', description: 'A full-stack AI-powered fitness tracker...', image: logo, slug: 'health-hub', category: 'Flutter Apps' },
  { title: 'Budget Tracker', description: 'A perfect daily use expense tra...', image: budget, slug: 'budget-tracker-flutter', category: 'Flutter Apps' },
  { title: 'Share Bites', description: 'A feature-rich food sharing app...', image: sharebites, slug: 'share-bites', category: 'Flutter Apps' },
  { title: 'Life Saver', description: 'A real-time emergency assistance app...', image: life, slug: 'life-saver', category: 'Flutter Apps' },
  { title: 'Health Hub', description: 'A Complete Solution for Health...', image: logo, slug: 'health-hub-react', category: 'React Projects' },
  { title: 'Expense Tracker', description: 'A perfect daily use expense tra...', image: expense, slug: 'expense-tracker', category: 'React Projects' },
  { title: 'Ecommerce Website', description: 'A Complete Ecommerce Website...', image: ecom, slug: 'Ecommerce', category: 'React Projects' },
  { title: 'Advance To Do List', description: 'A feature-rich task manager...', image: todo, slug: 'advance-to-do-list', category: 'React Projects' },
  { title: 'Women Safety', description: 'A safety-focused app for women...', image: womensafety, slug: 'women-safety', category: 'React Projects' },
]

const categoryMeta = {
  'React Projects': {
    eyebrow: 'Web Builds',
    description: 'Responsive React products with polished interfaces, real user flows, and production-style architecture.',
    accent: 'from-[rgba(47,114,255,0.24)] to-[rgba(47,114,255,0.05)]',
    border: 'border-[#35538a]',
    badge: 'bg-[rgba(47,114,255,0.14)] text-[#dbe8ff] border-[#4d74bc]',
  },
  'Flutter Apps': {
    eyebrow: 'Mobile Builds',
    description: 'Cross-platform Flutter apps focused on speed, utility, and strong real-world problem solving.',
    accent: 'from-[rgba(108,143,255,0.2)] to-[rgba(108,143,255,0.04)]',
    border: 'border-[#31486f]',
    badge: 'bg-[rgba(108,143,255,0.12)] text-[#dce4ff] border-[#526ea9]',
  },
}

const categoryOrder = ['React Projects', 'Flutter Apps']

const Work = () => {
  const flutterSectionRef = React.useRef(null)
  const [showFlutterShortcut, setShowFlutterShortcut] = React.useState(true)

  const groupedProjects = categoryOrder
    .map((category) => [category, projects.filter((project) => project.category === category)])
    .filter(([, items]) => items.length > 0)

  React.useEffect(() => {
    const section = flutterSectionRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFlutterShortcut(!entry.isIntersecting)
      },
      {
        threshold: 0.2,
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId)
    if (!target) return

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <main className='relative min-h-screen overflow-hidden bg-[#020409] px-4 pb-10 pt-[7.6rem] text-[#f3f5fb] sm:px-8 lg:px-12 xl:px-16'>
      <div className='pointer-events-none fixed inset-0'>
        <div className='absolute -left-20 top-24 h-96 w-96 rounded-full bg-[rgba(41,98,225,0.34)] blur-[95px]' />
        <div className='absolute right-[-4rem] top-[22rem] h-80 w-80 rounded-full bg-[rgba(47,114,255,0.26)] blur-[92px]' />
        <div className='absolute bottom-[-7rem] left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-[rgba(47,114,255,0.15)] blur-[110px]' />
      </div>

      <section className='anim-fade-up relative z-10 mx-auto w-full max-w-[1380px] rounded-[28px] border border-[#24314e] bg-[linear-gradient(160deg,rgba(10,15,28,0.86)_0%,rgba(7,11,22,0.92)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_50px_rgba(0,0,0,0.45)] sm:p-7'>
        <div className='grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-end'>
          <div>
            <p className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8f9bb7]'>Projects</p>
            <h1 className='m-0 font-[Cormorant_Garamond] text-[clamp(2.4rem,6vw,5.2rem)] leading-[0.92] text-[#f1f4fc]'>
              All my work,
              <br />
              one clean showcase
            </h1>
          </div>

          <div className='anim-fade-right anim-delay-1 rounded-[22px] border border-[#2b3f68] bg-[rgba(8,13,25,0.78)] p-5'>
            <p className='m-0 text-[1rem] leading-7 text-[#b3bdd4]'>
              Every project now stays on the same page, but React and Flutter are still clearly separated so the section feels organized instead of crowded.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <button
                type='button'
                onClick={() => scrollToSection('react-projects')}
                className='rounded-full border border-[#314a7a] bg-[rgba(10,16,31,0.82)] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[#cdd9f2] transition hover:-translate-y-px hover:border-[#4e74bc] hover:text-white'
              >
                React Projects
              </button>
              <button
                type='button'
                onClick={() => scrollToSection('flutter-apps')}
                className='rounded-full border border-[#314a7a] bg-[rgba(10,16,31,0.82)] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[#cdd9f2] transition hover:-translate-y-px hover:border-[#4e74bc] hover:text-white'
              >
                Flutter Apps
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='relative z-10 mx-auto mt-6 flex w-full max-w-[1380px] flex-col gap-6'>
        {groupedProjects.map(([category, items], sectionIndex) => {
          const meta = categoryMeta[category]
          const sectionId = category === 'React Projects' ? 'react-projects' : 'flutter-apps'
          const sectionRef = category === 'Flutter Apps' ? flutterSectionRef : undefined

          return (
            <div
              key={category}
              id={sectionId}
              ref={sectionRef}
              className={`anim-fade-up overflow-hidden rounded-[26px] border bg-[linear-gradient(160deg,rgba(9,14,27,0.82)_0%,rgba(7,11,22,0.92)_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_16px_38px_rgba(0,0,0,0.38)] sm:p-6 ${meta?.border || 'border-[#24314e]'}`}
              style={{ animationDelay: `${0.12 * (sectionIndex + 1)}s` }}
            >
              <div className='grid gap-5 border-b border-[rgba(95,118,168,0.22)] pb-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end'>
                <div>
                  <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#8f9bb7]'>{meta?.eyebrow || 'Projects'}</p>
                  <h2 className='mt-2 font-[Cormorant_Garamond] text-[clamp(1.9rem,4vw,3.35rem)] leading-[0.96] text-[#f3f6ff]'>{category}</h2>
                </div>

                <div className={`rounded-[20px] border border-[rgba(88,117,180,0.22)] bg-gradient-to-r p-[1px] ${meta?.accent || 'from-[rgba(47,114,255,0.2)] to-transparent'}`}>
                  <div className='rounded-[19px] bg-[rgba(8,13,25,0.9)] px-4 py-4 text-[0.98rem] leading-7 text-[#b2bdd4]'>
                    {meta?.description}
                  </div>
                </div>
              </div>

              <div className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
                {items.map((project, index) => (
                  <Link to={`/work/${project.slug}`} key={project.slug} className='no-underline'>
                    <article
                      className='group anim-fade-up flex h-full flex-col rounded-[22px] border border-[#27395f] bg-[rgba(8,13,26,0.76)] p-3.5 transition duration-300 hover:-translate-y-1.5 hover:border-[#4a6fb6] hover:shadow-[0_16px_34px_rgba(0,0,0,0.36)]'
                      style={{ animationDelay: `${0.08 * (index + 1)}s` }}
                    >
                      <div className='aspect-[16/10] overflow-hidden rounded-[16px] border border-[#2a3d63] bg-[rgba(7,12,24,0.88)]'>
                        <img src={project.image} alt={project.title} className='h-full w-full object-cover transition duration-500 group-hover:scale-105' />
                      </div>

                      <div className='mt-4 flex flex-1 flex-col'>
                        <span className={`w-fit rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${meta?.badge || 'border-[#4d74bc] bg-[rgba(47,114,255,0.14)] text-[#dbe8ff]'}`}>
                          {category}
                        </span>
                        <h3 className='mt-3 text-[1.26rem] leading-tight text-[#f2f6ff]'>{project.title}</h3>
                        <p className='mt-2 flex-1 text-[0.95rem] leading-6 text-[#aeb6cb]'>{project.description}</p>
                        <span className='mt-4 inline-block text-[0.84rem] font-bold uppercase tracking-[0.08em] text-[#79adff]'>Open Project Details -&gt;</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      {showFlutterShortcut && (
        <button
          type='button'
          onClick={() => scrollToSection('flutter-apps')}
          className='anim-fade-up fixed bottom-6 right-6 z-20 rounded-full border border-[#4d74bc] bg-[rgba(10,16,31,0.9)] px-4 py-3 text-sm font-semibold text-[#edf3ff] shadow-[0_14px_32px_rgba(0,0,0,0.38)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#6a90d8] hover:bg-[rgba(14,21,40,0.96)]'
        >
          Flutter Projects
        </button>
      )}
    </main>
  )
}

export default Work
