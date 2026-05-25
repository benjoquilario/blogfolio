import React, { Suspense } from "react"
import { Metadata } from "next"
import Image from "next/image"

import { REPOS_URL } from "@/config/config"
import { siteConfig } from "@/config/site"
import { Repository } from "@/components/shared/repositories"
import RepositoriesItem from "@/components/shared/repositories-item"
import RepositorySkeleton from "@/components/skeleton/repositories-skeleton"
import { TypographyH2 } from "@/components/typography"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Benjo M. Quilario - A passionate 23-year-old Frontend Developer from the Philippines specializing in React, Next.js, and modern web development.",
  keywords: [
    "projects",
    "benjo quilario",
    "frontend developer",
    "philippines",
    "react developer",
    "nextjs developer",
    "web developer",
    "software engineer",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects - Benjo M. Quilario",
    description:
      "Learn more about Benjo M. Quilario, a Frontend Developer from the Philippines.",
    url: `${siteConfig.url}/projects`,
  },
}

const Projects = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex max-w-fit flex-col gap-2">
        <TypographyH2 className="text-3xl">
          <span className="text-4xl">P</span>rojects
        </TypographyH2>
        <p className="text-muted-foreground/80">
          Some of my projects public and private
        </p>
      </div>
      <div className="flex items-center gap-2 py-3">
        <div>
          <div className="border-primary relative h-16 w-16 overflow-hidden rounded-full border-2 shadow-lg">
            <Image
              alt="Benjo Quilario avatar"
              fill
              src="https://avatars.githubusercontent.com/u/82529126?v=4"
              className="object-cover"
              sizes="64px"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-foreground">Benjo Quilario</div>
          <div className="text-foreground/80 text-sm">
            <a
              className="text-muted-foreground hover:text-foreground"
              href="https://github.com/benjoquilario"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/benjoquilario
            </a>
          </div>
        </div>
      </div>
      <ul className="mx-0 mt-3 grid w-full grid-cols-1 gap-2.5 md:-mx-4">
        <Repository
          name="Sure-Win"
          isPrivate
          topics={["react-native", "expo", "social-work", "education"]}
          description="A React Native and Expo mobile reviewer that helps social work students prepare for board exams with guided practice, progress tracking, community, and subscriptions."
        />
        <Repository
          name="PNGOSWA"
          isPrivate
          topics={["association", "membership", "social-work", "dashboard"]}
          description="A website and membership review platform for the Philippine NGO Social Workers Association, built to onboard members and help officers review applications."
        />
        <Repository
          name="api.animehi"
          isPrivate
          topics={["anime", "api", "restful"]}
          description="A RESTful API for anime data, providing information about anime series, episodes, characters, and more."
        />

        {REPOS_URL.map((repo) => (
          <Suspense key={repo} fallback={<RepositorySkeleton />}>
            <RepositoriesItem key={repo} repoName={repo} />
          </Suspense>
        ))}
      </ul>
    </div>
  )
}

export default Projects
