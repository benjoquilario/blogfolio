import { Fragment } from "react"

import { TypographyH3, TypographyP } from "@/components/typography"

import CodeSpan from "./code-span"
import {
  HOBBIES,
  LEARNING_FOCUS,
  MEETUP_ACTIVITIES,
  PERSONAL_INFO,
} from "./constants"

const AboutMeSection: React.FC = () => {
  return (
    <div>
      <TypographyH3 className="mb-6 text-3xl">
        <span className="text-4xl">A</span>bout me.
      </TypographyH3>

      <div className="space-y-5 text-sm leading-7 md:text-[15px]">
        <TypographyP>
          I'm a passionate frontend developer based in {PERSONAL_INFO.location}.
        </TypographyP>

        <TypographyP>
          My journey into web development began in Grade 10, when curiosity
          about how websites worked led me to discover <CodeSpan>HTML</CodeSpan>{" "}
          and <CodeSpan>CSS</CodeSpan>. The first time I used the browser's
          "Inspect Element" tool, I was amazed to see the code behind the
          scenes. During the pandemic, with more time at home and a laptop in
          hand, I started learning web development seriously, diving into HTML,
          CSS, and JavaScript. That curiosity quickly grew into a passion and
          set me on the path toward a career in tech.
        </TypographyP>

        <TypographyP>
          What started as teenage curiosity has evolved into over{" "}
          {PERSONAL_INFO.experience} of coding and building frontend
          applications. I've completed several freelance projects, each one
          teaching me something new about creating digital experiences that are
          useful, thoughtful, and user-friendly. I'm currently a{" "}
          {PERSONAL_INFO.yearLevel} at {PERSONAL_INFO.university}, where I
          continue to deepen my understanding of software engineering, product
          development, and modern web technologies.
        </TypographyP>

        <TypographyP>
          My passion lies in frontend development and creating polished user
          experiences. Over time, I've also expanded my skills into backend API
          development, mobile development, and UX/UI thinking as I work toward
          becoming a well-rounded software developer.
        </TypographyP>

        <TypographyP>
          I'm currently focused on learning{" "}
          {LEARNING_FOCUS.map((item, index) => (
            <Fragment key={item}>
              <CodeSpan>{item}</CodeSpan>
              {index < LEARNING_FOCUS.length - 1 &&
                (index === LEARNING_FOCUS.length - 2 ? " and " : ", ")}
            </Fragment>
          ))}
          .
        </TypographyP>

        <TypographyP>
          Since technology evolves rapidly, I'm committed to continuous learning
          and staying current with the latest tools, patterns, and best
          practices in the field.
        </TypographyP>

        <TypographyP>
          When I'm not coding, I enjoy a variety of hobbies:
        </TypographyP>

        <ul className="my-6 ml-6 list-disc space-y-2">
          {HOBBIES.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>

        <TypographyP>
          If you're in the {PERSONAL_INFO.meetupLocation} area, I'd love to
          connect! We could:
        </TypographyP>

        <ul className="my-6 ml-6 list-disc space-y-2">
          {MEETUP_ACTIVITIES.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>

        <TypographyP>
          I thrive in both independent and collaborative environments, and I'm
          always eager to take on new challenges and learn from different
          perspectives.
        </TypographyP>

        <TypographyP>
          I believe in the power of connection and knowledge sharing within the
          developer community. Let's build something amazing together!
        </TypographyP>
      </div>
    </div>
  )
}

export default AboutMeSection
