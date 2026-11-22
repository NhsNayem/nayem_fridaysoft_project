import ArrowUpRightIcon from './icons/ArrowUpRightIcon.jsx'
import JamieAvatar from '../assets/images/professional-man-avatar-with-beard-and-glasses-loo.jpg'
import TeammateAvatar from '../assets/images/professional-person-avatar-with-curly-hair-and-war.jpg'
import TeammateWomanAvatar from '../assets/images/professional-woman-avatar-with-short-brown-hair-an.jpg'

const teamAvatars = [
  { src: JamieAvatar, alt: 'Team member with glasses' },
  { src: TeammateAvatar, alt: 'Team member with curly hair' },
  { src: TeammateWomanAvatar, alt: 'Team member' },
]

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[610px] flex-col items-center overflow-hidden px-5 pb-12 pt-32 text-center sm:min-h-[690px] sm:pt-40 md:min-h-[760px] md:pt-[205px]">
      <div className="pointer-events-none absolute inset-x-0 top-[165px] -z-0 flex justify-center overflow-hidden sm:top-[205px] md:top-[260px]">
        <div className="hero-orbit h-[360px] w-[760px] rounded-[50%] border border-[#d6d1cc]/70 sm:h-[480px] sm:w-[1050px] md:h-[550px] md:w-[1450px]" />
      </div>
      <div className="relative z-10 flex w-full max-w-[800px] flex-col items-center">
        <h1 className="font-editorial text-[clamp(2.5rem,7vw,5rem)] font-normal leading-[1.04] tracking-[-0.035em] text-[#37322f]">
          Effortless custom contract
          <br className="hidden sm:block" /> billing by Brillance
        </h1>
        <p className="mt-5 max-w-[520px] text-sm font-medium leading-6 text-[#37322f]/80 sm:mt-6 sm:text-lg sm:leading-7">
          Streamline your billing process with seamless automation for every custom contract, tailored by Brillance.
        </p>
        <a
          href="#pricing"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#37322f] px-7 py-3 text-sm font-medium text-white shadow-[inset_0_0_0_2px_rgba(255,255,255,0.08)] transition-all hover:-translate-y-0.5 hover:bg-[#24211f] sm:mt-10 sm:px-9 sm:py-3.5"
        >
          Start for free
          <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <div className="mt-8 flex items-center gap-2 text-xs font-medium text-[#605a57] sm:mt-10">
          <div className="flex -space-x-2">
            {teamAvatars.map((avatar) => (
              <img
                key={avatar.src}
                src={avatar.src}
                alt={avatar.alt}
                className="h-7 w-7 rounded-full border-2 border-[#f7f5f3] object-cover"
              />
            ))}
          </div>
          <span>Loved by teams who value clarity</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
