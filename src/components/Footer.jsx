import GithubIcon from './icons/GithubIcon.jsx'
import LinkedInIcon from './icons/LinkedInIcon.jsx'
import XIcon from './icons/XIcon.jsx'

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Integrations', 'Real-time Previews', 'Multi-Agent Coding'],
  },
  {
    title: 'Company',
    links: ['About us', 'Our team', 'Careers', 'Brand', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Terms of use', 'API Reference', 'Documentation', 'Community', 'Support'],
  },
]

function FooterColumn({ title, links }) {
  return (
    <div className="min-w-[120px] flex-1">
      <h3 className="mb-3 text-sm font-medium text-[#49423d]/50">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link}>
            <a href={link === 'Pricing' ? '#pricing' : link === 'Features' ? '#features' : '#top'} className="text-sm text-[#49423d] transition-colors hover:text-[#37322f]">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#37322f]/10 pt-8">
      <div className="grid grid-cols-1 gap-8 px-5 pb-9 sm:grid-cols-[1fr_2fr] sm:px-8 md:px-10">
        <div className="flex flex-col items-start">
          <a href="#top" className="text-xl font-semibold leading-5 text-[#49423d]">Brillance</a>
          <p className="mt-3 text-sm font-medium text-[#49423d]/90">Coding made effortless</p>
          <div className="mt-4 flex items-center gap-3">
            <a href="https://x.com" aria-label="X" className="text-[#49423d] transition hover:-translate-y-0.5"><XIcon className="h-4 w-4" /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-[#49423d] transition hover:-translate-y-0.5"><LinkedInIcon className="h-4 w-4" /></a>
            <a href="https://github.com" aria-label="GitHub" className="text-[#49423d] transition hover:-translate-y-0.5"><GithubIcon className="h-4 w-4" /></a>
          </div>
          <p className="mt-6 text-xs text-[#605a57]/70">© Brillance</p>
        </div>
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-4">
          {columns.map((column) => <FooterColumn key={column.title} {...column} />)}
        </nav>
      </div>
      <div className="h-10 border-y border-[#37322f]/10 bg-[repeating-linear-gradient(135deg,transparent,transparent_10px,rgba(55,50,47,0.035)_10px,rgba(55,50,47,0.035)_11px)]" />
    </footer>
  )
}

export default Footer
