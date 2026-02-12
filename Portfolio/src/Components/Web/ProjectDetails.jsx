import { useParams, Link } from 'react-router-dom'

const projects = {
  'health-hub': {
    title: 'Health Hub',
    description: `Health Hub is a full-stack AI-powered fitness application that provides:\n\n- Real-time posture detection using TensorFlow\n- Personalized goal setting based on fitness metrics\n- BMR calculator and workout suggestions\n\nThis app helps users track their health effectively while leveraging AI.\n\nTech Stack: Flutter, TensorFlow, MongoDB Atlas, Spring Boot, Tailwind CSS`,
    github: 'https://github.com/PiyushGupta-45/New_Health_hub',
    demo: 'https://github.com/PiyushGupta-45/New_Health_hub/releases/download/1.0.3/app-debug.apk',
    type: 'app',
  },
  'share-bites': {
    title: 'Share Bites',
    description: `Share Bites is a mobile application developed in Flutter to combat food waste and hunger.\n\nKey Features:\n- Food Donation: Users/Restaurants can list excess food.\n- Geo-Location: Find nearby food donations on a map.\n- Real-Time Alerts: Notifications for new available food items nearby.\n- Volunteer Coordination: Connects volunteers with donors and NGOs.\n\nThis app aims to bridge the gap between food abundance and food scarcity through technology.\n\nTech Stack: Flutter, Firebase, Google Maps API`,
    github: 'https://github.com/PiyushGupta-45/ShareBite',
    demo: 'https://github.com/PiyushGupta-45/ShareBite/releases/download/1.0.0/app-release.apk',
    type: 'app',
  },
  'budget-tracker-flutter': {
    title: 'Budget Tracker',
    description: `A comprehensive customized expense tracking mobile application built with Flutter.\n\nKey Features:\n- Expense Logging: Easily add and categorize daily expenses.\n- Monthly Analysis: Visual charts to track spending vs budget.\n- Custom Categories: Personalize expense categories.\n- Offline Mode: Works seamlessly without internet connection (Hive DB).\n\nNote: This is the mobile version of the expense tracker, offering on-the-go financial management.\n\nTech Stack: Flutter, Hive (Local DB), Provider (State Management)`,
    github: 'https://github.com/PiyushGupta-45/Budget_Tracker_App',
    demo: 'https://github.com/PiyushGupta-45/Budget_Tracker_App/releases/download/1.0.0/app-release.apk',
    type: 'app',
  },
  'health-hub-react': {
    title: 'Health Hub - React Version',
    description: `A comprehensive web-based Health Hub solution built with the MERN stack.\n\nKey Features:\n- Dashboard: Visual overview of health stats and daily progress.\n- Workout Tracking: Log and manage daily exercise routines.\n- Diet Planning: AI-driven meal suggestions based on caloric needs.\n- Appointment Scheduling: Book appointments with nutritionists or trainers.\n- Community Forum: Discuss health tips and share progress with others.\n\nThis project demonstrates a scalable full-stack architecture with a responsive React frontend and a robust Node/Express backend.\n\nTech Stack: React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Redux Toolkit`,
    github: 'https://github.com/PiyushGupta-45/New_Health_hub_web',
    demo: 'https://new-health-hub-web.vercel.app/',
    type: 'web',
  },
  'life-saver': {
    title: 'Life Saver',
    description: `Life Saver is a real-time emergency response application designed to:\n\n- Alert emergency contacts with live location\n- Share medical information for immediate response\n- Enable SOS activation via quick tap or voice command\n\nIt is built for quick and reliable help in critical situations.\n\nTech Stack: Flutter, Firebase, Google Maps API, Spring Boot`,
    github: 'https://github.com/PiyushGupta-45/Life-Saver',
    demo: '#',
    type: 'app',
  },
  'women-safety': {
    title: 'Women Safety',
    description: `Women Safety is a mobile application focused on women's personal security:\n\n- Voice-activated SOS system\n- Real-time location tracking\n- Emergency contact notification with location and timestamp\n\nThe app is optimized for quick access and ease of use.\n\nTech Stack: React Native, Google Maps API, Spring Boot`,
    github: 'https://github.com/PiyushGupta-45/WomenSafety',
    demo: 'https://women-safety-phi.vercel.app/',
    type: 'web',
  },
  'advance-to-do-list': {
    title: 'Advance To Do List',
    description: `An advanced To-Do List application that supports:\n\n- Task filtering by status (Completed/Pending)\n- Priority tags and deadlines\n- Local storage persistence for offline access\n\nGreat for boosting productivity and organizing daily tasks.\n\nTech Stack: React.js, LocalStorage, Tailwind CSS`,
    github: 'https://github.com/PiyushGupta-45/Advance_To_Do_List',
    demo: 'https://advance-to-do-list-phi.vercel.app/',
    type: 'web',
  },
  'expense-tracker': {
    title: 'Expense Tracker',
    description: `A modern Expense Tracker application to help you manage your personal finances. Key features include:\n\n- Categorize expenses (e.g., Groceries, Utilities, Entertainment)\n- Daily and monthly spending analysis\n- Visualization of spending habits with charts and graphs\n\nPerfect for monitoring your budget and gaining financial insights.\n\nTech Stack: HTML, Chart.js, LocalStorage, Tailwind CSS`,
    github: 'https://github.com/PiyushGupta-45/expense-tracker',
    demo: 'https://expense-tracker-rho-sand-60.vercel.app/',
    type: 'web',
  },
  Ecommerce: {
    title: 'Ecommerce Website',
    description: `A fully functional E-commerce platform designed for a seamless shopping experience.\n\nKey Features:\n- User Authentication: Secure login and signup with JWT\n- Product Management: Browse, search, and filter products\n- Shopping Cart: Add/remove items and adjust quantities dynamically\n- Payment Gateway: Integrated payment processing flow\n- Admin Panel: Manage products, orders, and users\n\nThis project showcases a complete commercial application flow from product discovery to checkout.\n\nTech Stack: React.js, Node.js, Express.js, MongoDB, Redux, Stripe API`,
    github: 'https://github.com/PiyushGupta-45/Ecommerce',
    demo: 'https://ecommerce-umber-pi.vercel.app/',
    type: 'web',
  },
}

const btnBase = 'rounded-[10px] px-5 py-3 text-center text-[0.96rem] font-bold transition hover:-translate-y-px'

const ProjectDetails = () => {
  const { title } = useParams()
  const project = projects[title]

  if (!project) {
    return (
      <section className='relative min-h-screen bg-[#020409] px-4 pt-[8.2rem] pb-4 text-[#f3f5fb]'>
        <div className='mx-auto w-full max-w-[960px] rounded-[20px] border border-[#24314e] bg-[linear-gradient(160deg,rgba(9,14,28,0.86)_0%,rgba(7,11,22,0.92)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_50px_rgba(0,0,0,0.45)]'>
          <h1 className='m-0 font-[Cormorant_Garamond] text-[clamp(2rem,5vw,3.8rem)] text-[#f1f4fc]'>Project not found</h1>
          <Link to='/work' className={`${btnBase} mt-4 inline-block border border-[#324b7a] bg-[rgba(10,16,31,0.92)] text-[#ecf2ff] hover:border-[#4e74bc]`}>Go back to work</Link>
        </div>
      </section>
    )
  }

  return (
    <section className='relative min-h-screen bg-[#020409] px-4 pt-[8.2rem] pb-4 text-[#f3f5fb]'>
      <article className='mx-auto w-full max-w-[960px] rounded-[20px] border border-[#24314e] bg-[linear-gradient(160deg,rgba(9,14,28,0.86)_0%,rgba(7,11,22,0.92)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_50px_rgba(0,0,0,0.45)]'>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#8f9bb7]'>Project Details</p>
        <h1 className='m-0 font-[Cormorant_Garamond] text-[clamp(2rem,5vw,3.8rem)] text-[#f1f4fc]'>{project.title}</h1>

        <p className='mt-4 whitespace-pre-line rounded-xl border border-[#27395f] bg-[rgba(8,13,26,0.78)] p-4 leading-[1.6] text-[#b2bad0]'>{project.description}</p>

        <div className='mt-4 flex flex-wrap gap-3 max-[720px]:flex-col'>
          <a href={project.github} target='_blank' rel='noreferrer' className={`${btnBase} border border-[#324b7a] bg-[rgba(10,16,31,0.92)] text-[#ecf2ff] hover:border-[#4e74bc]`}>
            View Source Code
          </a>

          {project.demo && project.demo !== '#' && (
            <a href={project.demo} target='_blank' rel='noreferrer' className={`${btnBase} border border-transparent bg-[#2f72ff] text-white shadow-[0_10px_20px_rgba(47,114,255,0.28)] hover:bg-[#2864e1]`}>
              {project.type === 'app' ? 'Download App' : 'Visit Live Site'}
            </a>
          )}

          <Link to='/work' className={`${btnBase} border border-[#2a3d63] bg-[rgba(7,12,24,0.8)] text-[#b8c2d8] hover:border-[#3d5c95] hover:text-white`}>
            Back to Work
          </Link>
        </div>
      </article>
    </section>
  )
}

export default ProjectDetails
