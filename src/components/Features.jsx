import DashboardPreview from './DashboardPreview.jsx'
import SectionIntro from './SectionIntro.jsx'
import GridIcon from './icons/GridIcon.jsx'

const features = [
  {
    title: 'Smart. Simple. Brilliant.',
    description: 'Your data is beautifully organized so you see everything clearly without the clutter.',
    preview: 'clarity',
  },
  {
    title: 'Work in perfect sync',
    description: 'Keep every project moving forward with updates that bring your whole team together.',
    preview: 'sync',
  },
  {
    title: 'Effortless integration',
    description: 'All your favorite tools connect in one place and work together seamlessly by design.',
    preview: 'integrations',
  },
  {
    title: 'Numbers that speak',
    description: 'Track growth with precision and turn raw data into confident decisions you can trust.',
    preview: 'metrics',
  },
]

function FeatureCard({ title, description, preview, index }) {
  return (
    <article className={`flex min-w-0 flex-col gap-4 p-5 sm:gap-6 sm:p-7 md:p-8 lg:p-10 ${index % 2 === 0 ? 'md:border-r' : ''} ${index < 2 ? 'border-b' : ''} border-[#37322f]/10`}>
      <div>
        <h3 className="text-lg font-semibold leading-tight text-[#37322f] sm:text-xl">{title}</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-[#605a57] sm:text-base">{description}</p>
      </div>
      <DashboardPreview variant={preview} />
    </article>
  )
}

function Features() {
  return (
    <section id="features" className="border-b border-[#37322f]/10">
      <div className="border-b border-[#37322f]/10 px-4 py-12 sm:py-16">
        <SectionIntro
          badge="Features"
          icon={GridIcon}
          title="Everything you need to do your best work"
          description="A thoughtful toolkit for bringing your contracts, projects, and business insights together."
          className="mx-auto max-w-[650px]"
        />
      </div>
      <div className="grid grid-cols-1 border-x border-[#37322f]/10 md:grid-cols-2">
        {features.map((feature, index) => <FeatureCard key={feature.title} {...feature} index={index} />)}
      </div>
    </section>
  )
}

export default Features
