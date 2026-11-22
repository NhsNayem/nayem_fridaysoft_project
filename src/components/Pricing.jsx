import SectionIntro from './SectionIntro.jsx'
import DollarIcon from './icons/DollarIcon.jsx'

function Pricing() {
  return (
    <section id="pricing" className="border-b border-[#37322f]/10 px-5 py-14 sm:px-10 sm:py-20">
      <SectionIntro
        badge="Plans & Pricing"
        icon={DollarIcon}
        title="Choose the perfect plan for your business"
        description="Scale your operations with flexible pricing that grows with your team. Start free, upgrade when you're ready."
        className="mx-auto max-w-[590px]"
      />
    </section>
  )
}

export default Pricing
