import SectionIntro from './SectionIntro.jsx'
import DashboardPreview from './DashboardPreview.jsx'
import CalendarIcon from './icons/CalendarIcon.jsx'
import ChartIcon from './icons/ChartIcon.jsx'
import LayersIcon from './icons/LayersIcon.jsx'
import ArrowUpRightIcon from './icons/ArrowUpRightIcon.jsx'

const services = [
  {
    title: 'Plan your schedules',
    description: 'Streamline customer subscriptions and billing with automated scheduling tools.',
    preview: 'schedules',
    icon: CalendarIcon,
  },
  {
    title: 'Analytics & insights',
    description: 'Transform your business data into actionable insights with real-time analytics.',
    preview: 'analytics',
    icon: ChartIcon,
  },
  {
    title: 'Collaborate seamlessly',
    description: 'Keep your team aligned with shared dashboards and collaborative workflows.',
    preview: 'teamwork',
    icon: LayersIcon,
  },
]

function ServiceCard({ title, description, preview, icon: Icon, index }) {
  return (
    <article className={`group flex min-w-0 flex-col border-[#e0dedb]/80 px-5 py-5 transition-colors hover:bg-white/50 sm:px-6 ${index > 0 ? 'border-t md:border-l md:border-t-0' : ''}`}>
      <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg border border-[#37322f]/10 bg-white text-[#49423d] shadow-sm">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="text-sm font-semibold leading-6 text-[#49423d]">{title}</h3>
      <p className="mt-1 min-h-11 text-[13px] leading-[22px] text-[#605a57]">{description}</p>
      <div className="mt-4 overflow-hidden rounded-md"><DashboardPreview variant={preview} /></div>
      <a href="#features" className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[#49423d]">
        Explore feature <ArrowUpRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </article>
  )
}

function Services() {
  return (
    <section id="services" className="relative border-y border-[#e0dedb]">
      <div className="py-12 sm:py-16 md:py-20">
        <SectionIntro
          badge="Services"
          icon={LayersIcon}
          title="Built for absolute clarity and focused work"
          description="Stay focused with tools that organize, connect and turn information into confident decisions."
          className="mx-auto max-w-[700px] px-5"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((service, index) => <ServiceCard key={service.title} {...service} index={index} />)}
      </div>
    </section>
  )
}

export default Services
