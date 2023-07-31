import Link from 'next/link';
import { Book, GitFork, Star, GithubIcon, ExternalLink } from 'lucide-react';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { TypographyH3 } from '../typography';

async function getRepos(repo: string) {
  const res = await fetch(
    `https://api.github.com/repos/benjoquilario/${repo}`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
      },
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function RepositoriesItem({
  repoName,
}: {
  repoName: string;
}) {
  const repositories = await getRepos(repoName);

  return (
    <li className="relative -mx-4 md:-mx-0">
      <Link
        href={repositories.html_url}
        className="flex px-4 py-4 hover:bg-accent transition-colors rounded-sm"
        target="_blank"
      >
        <article className="flex gap-2 flex-col rounded-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Book className="h-6 w-6 shrink-0" aria-hidden="true" />
              <TypographyH3 className="lowercase text-base">
                {repositories.name}
              </TypographyH3>
            </div>
          </div>

          <p className="text-muted-foreground text-sm line-clamp-2">
            {repositories.description}
          </p>
          <div className="flex gap-1">
            {repositories.topics.slice(0, 3).map((topic: string) => (
              <Badge key={topic} variant="outline">
                {topic}
              </Badge>
            ))}
          </div>
          <div className="mt-auto flex items-center gap-4 pt-1 text-xs font-1 text-2">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 shrink-0 rounded-full bg-current"></div>
              <span>{repositories.language}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{repositories.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-2">
              <GitFork className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{repositories.forks_count}</span>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
}