import schedulesImage from '../assets/images/plan-your-schedules.jpeg'
import analyticsImage from '../assets/images/analytics-dashboard-with-charts-graphs-and-data-vi.jpg'
import teamworkImage from '../assets/images/data-visualization-dashboard-with-interactive-char.jpg'
import clarityImage from '../assets/images/work-order.png'
import syncImage from '../assets/images/work-sync.png'
import integrationsImage from '../assets/images/integration.png'
import metricsImage from '../assets/images/speak.png'

const previews = {
  schedules: {
    src: schedulesImage,
    alt: 'Brillance customer subscription schedules dashboard',
    className: 'h-40 object-cover',
  },
  analytics: {
    src: analyticsImage,
    alt: 'Analytics dashboard with charts and business insights',
    className: 'h-40 object-cover',
  },
  teamwork: {
    src: teamworkImage,
    alt: 'Data visualization dashboard for team collaboration',
    className: 'h-40 object-cover',
  },
  clarity: {
    src: clarityImage,
    alt: 'Illustration of an organized schedule and completed checklist',
    className: 'h-[200px] object-contain p-4 sm:h-[250px] md:h-[300px]',
  },
  sync: {
    src: syncImage,
    alt: 'Team workflow cards representing synchronized work',
    className: 'h-[200px] object-contain p-3 sm:h-[250px] md:h-[300px]',
  },
  integrations: {
    src: integrationsImage,
    alt: 'Connected tools for video calls, scheduling, and collaboration',
    className: 'h-[200px] object-contain p-3 sm:h-[250px] md:h-[300px]',
  },
  metrics: {
    src: metricsImage,
    alt: 'Illustration of data sources and connected business insights',
    className: 'h-[200px] object-contain p-3 sm:h-[250px] md:h-[300px]',
  },
}

function DashboardPreview({ variant }) {
  const { src, alt, className } = previews[variant]

  return (
    <div className="flex w-full items-center justify-center overflow-hidden rounded-lg border border-[#37322f]/10 bg-[#f3f0ec]">
      <img src={src} alt={alt} loading="lazy" className={`w-full ${className}`} />
    </div>
  )
}

export default DashboardPreview
