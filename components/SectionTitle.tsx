interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="flex items-center gap-6 mb-4">
        <div className="hidden md:block h-[1px] w-40 bg-gradient-to-r from-transparent to-gray-400 dark:to-gray-600"></div>
        <div className="px-6 py-3 bg-black dark:bg-white/10 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <h2 className="text-lg text-white">{title}</h2>
        </div>
        <div className="hidden md:block h-[1px] w-40 bg-gradient-to-l from-transparent to-gray-400 dark:to-gray-600"></div>
      </div>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 text-sm">{subtitle}</p>
      )}
    </div>
  )
}

