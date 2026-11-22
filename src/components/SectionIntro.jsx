function SectionIntro({ badge, title, description, icon: Icon, className = '' }) {
  return (
    <div className={`flex w-full flex-col items-center text-center ${className}`}>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-900/[0.08] bg-white px-3.5 py-1.5 text-xs font-medium leading-3 text-[#37322f] shadow-[0_0_0_4px_rgba(55,50,47,0.04)]">
        {Icon && <Icon className="h-3 w-3" />}
        {badge}
      </div>
      <h2 className="max-w-[620px] text-balance text-[30px] font-semibold leading-[1.12] tracking-[-0.055em] text-[#49423d] sm:text-4xl md:text-[48px] md:leading-[1.2]">
        {title}
      </h2>
      <p className="mt-4 max-w-[530px] text-pretty text-sm leading-6 text-[#605a57] sm:text-base sm:leading-7">
        {description}
      </p>
    </div>
  )
}

export default SectionIntro
