import React from "react"

import { REPOS } from "@/config/config"
import RepositoriesItem from "@/components/shared/repositories-item"
import RepositorySkeleton from "@/components/skeleton/repositories-skeleton"
import { TypographyH2 } from "@/components/typography"

import { Repository } from "../shared/repositories"

const Repositories = () => {
  return (
    <section className="mb-12 flex flex-col items-start justify-start">
      <TypographyH2>
        <span className="text-4xl">F</span>
        eatured <span className="text-4xl">R</span>epositories
      </TypographyH2>
      <p className="text-muted-foreground/80 text-xs">
        Click a project to view more detailed information.
      </p>
      <ul className="mx-0 mt-6 grid w-full grid-cols-1 gap-2.5 md:-mx-4 md:grid-cols-2">
        <Repository
          name="Sure-Win"
          description="A React Native and Expo mobile reviewer for social work board exam preparation with quiz modes, progress tracking, community, and subscriptions."
          topics={["react-native", "expo", "social-work", "education"]}
          language="TypeScript"
          isPrivate={true}
          hasExternalLink={true}
        />
        <Repository
          name="PNGOSWA"
          description="A website and membership review platform for the Philippine NGO Social Workers Association, helping officers manage applications and support social workers nationwide."
          topics={["association", "membership", "social-work", "dashboard"]}
          language="TypeScript"
          isPrivate={true}
          hasExternalLink={true}
        />
        <Repository
          name="Horfi"
          description="A web-based management system designed to streamline operations and improve efficiency for the House of Refuge Foundation Inc."
          topics={["non-profit", "charity", "children", "shelter"]}
          language="TypeScript"
          isPrivate={true}
          hasExternalLink={true}
        />
        {REPOS.map((repo) => (
          <React.Suspense key={repo} fallback={<RepositorySkeleton />}>
            <RepositoriesItem key={repo} repoName={repo} />
          </React.Suspense>
        ))}
      </ul>
    </section>
  )
}

export default Repositories
