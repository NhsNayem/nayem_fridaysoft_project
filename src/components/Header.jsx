import { useState } from 'react'
import ArrowUpRightIcon from './icons/ArrowUpRightIcon.jsx'
import MenuIcon from './icons/MenuIcon.jsx'

const links = [
  { label: 'Products', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#features' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30 flex justify-center px-4 pt-4 sm:pt-5">
      <nav className="relative flex min-h-11 w-full max-w-[700px] items-center justify-between rounded-full bg-[#f7f5f3]/95 px-4 py-1.5 shadow-[0_0_0_2px_white,0_5px_20px_rgba(55,50,47,0.06)] backdrop-blur-md sm:min-h-12 sm:px-5">
        <div className="flex items-center gap-6">
          <a href="#top" className="text-[17px] font-semibold tracking-[-0.04em] text-[#2f3037] sm:text-lg">
            Brillance
          </a>
          <div className="hidden items-center gap-5 sm:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-[#49423d]/80 transition-colors hover:text-[#37322f]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#pricing"
            className="rounded-full bg-white px-3 py-1.5 text-xs font-medium leading-5 shadow-[0_1px_2px_rgba(55,50,47,0.12)] transition-transform hover:-translate-y-0.5 sm:px-3.5 sm:text-[13px]"
          >
            Log in
          </a>
          <a
            href="#pricing"
            aria-label="Get started"
            className="hidden items-center gap-1 rounded-full bg-[#37322f] px-3.5 py-1.5 text-xs font-medium text-white sm:flex"
          >
            Get started <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#37322f] sm:hidden"
          >
            <MenuIcon className="h-4 w-4" />
          </button>
        </div>
        {menuOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+10px)] flex flex-col gap-1 rounded-2xl border border-[#37322f]/10 bg-[#f7f5f3] p-2 shadow-lg sm:hidden">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
