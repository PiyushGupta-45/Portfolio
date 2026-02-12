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

const Work = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null)
  const filteredProjects = projects.filter((project) => project.category === selectedCategory)

  return (
    <section className='relative min-h-screen bg-[#020409] px-4 pt-[8.2rem] pb-4 text-[#f3f5fb]'>
      <div className='anim-fade-up mx-auto w-full max-w-[1220px] rounded-[20px] border border-[#24314e] bg-[linear-gradient(160deg,rgba(9,14,28,0.86)_0%,rgba(7,11,22,0.92)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_50px_rgba(0,0,0,0.45)]'>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#8f9bb7]'>Projects</p>
        <h1 className='m-0 font-[Cormorant_Garamond] text-[clamp(2rem,5vw,3.8rem)] leading-[1.02] text-[#f1f4fc]'>View My Work</h1>

        {!selectedCategory ? (
          <div className='mt-5 grid grid-cols-2 gap-3 max-[720px]:grid-cols-1'>
            <button type='button' onClick={() => setSelectedCategory('React Projects')} className='anim-fade-up anim-delay-1 rounded-2xl border border-[#2d426d] bg-[rgba(7,12,24,0.88)] p-5 text-left text-[#edf3ff] transition hover:-translate-y-1 hover:border-[#4b71ba] hover:shadow-[0_10px_24px_rgba(47,114,255,0.22)]'>
              <h3 className='m-0 text-[1.35rem]'>React Projects</h3>
              <p className='mt-2 text-[#aeb6cb]'>Web applications built with React.js</p>
            </button>
            <button type='button' onClick={() => setSelectedCategory('Flutter Apps')} className='anim-fade-up anim-delay-2 rounded-2xl border border-[#2d426d] bg-[rgba(7,12,24,0.88)] p-5 text-left text-[#edf3ff] transition hover:-translate-y-1 hover:border-[#4b71ba] hover:shadow-[0_10px_24px_rgba(47,114,255,0.22)]'>
              <h3 className='m-0 text-[1.35rem]'>Flutter Apps</h3>
              <p className='mt-2 text-[#aeb6cb]'>Mobile applications built with Flutter</p>
            </button>
          </div>
        ) : (
          <>
            <button type='button' onClick={() => setSelectedCategory(null)} className='anim-fade-up mt-5 rounded-[10px] border border-[#324b7a] bg-[rgba(10,16,31,0.92)] px-4 py-2.5 font-semibold text-[#ecf2ff] transition hover:-translate-y-px hover:border-[#4e74bc]'>Back to categories</button>
            <div className='mt-4 grid grid-cols-3 gap-3 max-[1100px]:grid-cols-2 max-[720px]:grid-cols-1'>
              {filteredProjects.map((project, index) => (
                <Link to={`/work/${project.slug}`} key={project.slug} className='no-underline'>
                  <article
                    className='anim-fade-up h-full rounded-2xl border border-[#27395f] bg-[rgba(8,13,26,0.78)] p-3 transition hover:-translate-y-1 hover:border-[#3d5c95] hover:shadow-[0_12px_26px_rgba(0,0,0,0.35)]'
                    style={{ animationDelay: `${0.08 * (index + 1)}s` }}
                  >
                    <div className='aspect-video overflow-hidden rounded-xl bg-[rgba(7,12,24,0.88)]'>
                      <img src={project.image} alt={project.title} className='h-full w-full object-cover transition duration-300 hover:scale-105' />
                    </div>
                    <h3 className='mt-3 text-[1.15rem] text-[#f2f6ff]'>{project.title}</h3>
                    <p className='mt-2 text-[0.95rem] leading-6 text-[#aeb6cb]'>{project.description}</p>
                    <span className='mt-3 inline-block text-[0.84rem] font-bold uppercase tracking-[0.08em] text-[#79adff]'>View Details -&gt;</span>
                  </article>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Work
