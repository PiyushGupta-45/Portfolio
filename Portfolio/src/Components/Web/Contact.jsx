import { useState } from 'react'

const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL || '').trim()
const FORM_ENDPOINT = CONTACT_EMAIL ? `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}` : ''

const inputClass =
  'w-full rounded-[10px] border border-[#2d426d] bg-[rgba(8,13,26,0.86)] px-4 py-3 text-base text-[#eff4ff] outline-none transition focus:border-[#4f78c2] focus:shadow-[0_0_0_3px_rgba(47,114,255,0.16)]'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', contact: '', email: '' })
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    const sanitizedValue = name === 'contact' ? value.replace(/\D/g, '') : value

    setMessage('')
    setIsError(false)
    setFormData({ ...formData, [name]: sanitizedValue })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!FORM_ENDPOINT) {
      setMessage('Contact form is not configured. Set VITE_CONTACT_EMAIL in frontend env.')
      setIsError(true)
      return
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          email: formData.email,
          _subject: 'New Portfolio Contact Submission',
          _template: 'table',
        }),
      })
      const data = await res.json().catch(() => ({}))

      if (res.ok) {
        setMessage(data.message || 'Message sent successfully!')
        setIsError(false)
        setFormData({ name: '', contact: '', email: '' })
      } else {
        setMessage(data.message || 'Failed to send. Please try again later.')
        setIsError(true)
      }
    } catch (error) {
      console.error('Error:', error)
      setMessage('Network error. Please try again.')
      setIsError(true)
    }
  }

  return (
    <section className='relative min-h-screen bg-[#020409] px-4 pt-[8.2rem] pb-4 text-[#f3f5fb]'>
      <div className='mx-auto w-full max-w-[760px] rounded-[20px] border border-[#24314e] bg-[linear-gradient(160deg,rgba(9,14,28,0.86)_0%,rgba(7,11,22,0.92)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_50px_rgba(0,0,0,0.45)]'>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#8f9bb7]'>Contact</p>
        <h1 className='m-0 font-[Cormorant_Garamond] text-[clamp(2rem,5vw,3.8rem)] leading-[1.02] text-[#f1f4fc]'>Let&apos;s build something great</h1>
        <p className='mt-3 text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.65] text-[#aeb6cb]'>Enter your details and I will get back to you as soon as possible.</p>

        <form onSubmit={handleSubmit} className='mt-5 grid gap-2'>
          <label htmlFor='name' className='text-xs font-semibold uppercase tracking-[0.04em] text-[#c9d3e7]'>Full Name</label>
          <input id='name' name='name' value={formData.name} onChange={handleChange} type='text' placeholder='e.g. John Doe' className={inputClass} required />

          <label htmlFor='contact' className='text-xs font-semibold uppercase tracking-[0.04em] text-[#c9d3e7]'>Contact Number</label>
          <input id='contact' name='contact' value={formData.contact} onChange={handleChange} type='text' inputMode='numeric' placeholder='e.g. 9876543210' className={inputClass} required />

          <label htmlFor='email' className='text-xs font-semibold uppercase tracking-[0.04em] text-[#c9d3e7]'>Email Address</label>
          <input id='email' name='email' value={formData.email} onChange={handleChange} type='email' placeholder='e.g. john@example.com' className={inputClass} required />

          <button type='submit' className='mt-2 rounded-[10px] border border-transparent bg-[#2f72ff] px-5 py-3 text-[0.96rem] font-bold text-white shadow-[0_10px_20px_rgba(47,114,255,0.28)] transition hover:-translate-y-px hover:bg-[#2864e1]'>Send Message</button>
        </form>

        {message && (
          <div
            className={`mt-4 rounded-[10px] border px-4 py-3 text-[0.95rem] ${
              isError ? 'border-[rgba(255,102,131,0.3)] bg-[rgba(125,26,45,0.2)] text-[#ff9ca7]' : 'border-[rgba(98,230,156,0.3)] bg-[rgba(27,90,52,0.2)] text-[#72f7ad]'
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
