import { TypographyH3 } from "@/components/typography"

import { WORK_EXPERIENCE } from "./constants"
import ExperienceItem from "./experience-item"

const WorkExperienceSection = () => {
  return (
    <div>
      <TypographyH3 className="mb-6 text-2xl font-bold">
        <span className="text-4xl">W</span>ork Experience.
      </TypographyH3>

      <div className="space-y-4">
        {WORK_EXPERIENCE.map((experience) => (
          <ExperienceItem
            key={`${experience.company}-${experience.position}`}
            title={experience.company}
            subtitle={experience.position}
            duration={experience.duration}
            logoSrc={experience.logo}
            logoAlt={experience.company}
          />
        ))}
      </div>
    </div>
  )
}

export default WorkExperienceSection
