import SectionIntro from './SectionIntro.jsx'
import QuoteIcon from './icons/QuoteIcon.jsx'
import JamieAvatar from '../assets/images/professional-man-avatar-with-beard-and-glasses-loo.jpg'

const testimonials = [
  {
    quote: '“In just a few minutes, we transformed our data into actionable insights. The process was seamless and incredibly efficient!”',
    name: 'Jamie Marshall',
    role: 'Co-founder, Exponent',
    initials: 'JM',
    image: JamieAvatar,
  },
]

function TestimonialCard({ quote, name, role, image }) {
  return (
    <figure className="mx-auto grid w-full max-w-[800px] grid-cols-1 items-stretch gap-4 px-5 py-10 sm:grid-cols-[180px_1fr] sm:gap-5 sm:px-8 sm:py-14 md:px-12">
      <img src={image} alt={name} loading="lazy" className="h-48 w-full rounded-lg object-cover object-top sm:h-full sm:min-h-[190px]" />
      <blockquote className="flex flex-col justify-between border border-[#37322f]/10 bg-white/40 p-5 sm:p-7">
        <div>
          <QuoteIcon className="mb-3 h-5 w-5 text-[#9c8e81]" />
          <p className="text-xl font-medium leading-[1.4] tracking-[-0.035em] text-[#49423d] sm:text-[25px] md:text-[30px]">{quote}</p>
        </div>
        <figcaption className="mt-7">
          <p className="text-sm font-medium text-[#49423d]">{name}</p>
          <p className="mt-1 text-sm text-[#605a57]/80">{role}</p>
        </figcaption>
      </blockquote>
    </figure>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-[#37322f]/10">
      <div className="border-b border-[#37322f]/10 px-4 py-12 sm:py-16">
        <SectionIntro
          badge="Testimonials"
          icon={QuoteIcon}
          title="Confidence backed by results"
          description="Our customers achieve more each day because their tools are simple, powerful, and clear."
          className="mx-auto max-w-[600px]"
        />
      </div>
      {testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} {...testimonial} />)}
    </section>
  )
}

export default Testimonials
