'use client';

import { useMemo, useState } from 'react';
import type { Project } from '../../types/portfolio';
import { ProjectRow } from './ProjectRow';

const filters = ['All', 'Software engineering', 'Machine learning', 'Research'] as const;
type Filter = typeof filters[number];

export function ProjectCatalogue({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>('All');
  const visible = useMemo(() => active === 'All' ? projects : projects.filter((project) => project.category === active), [active, projects]);
  return <><div className="filter-bar" role="group" aria-label="Filter projects by discipline">{filters.map((filter) => <button type="button" key={filter} onClick={() => setActive(filter)} aria-pressed={active === filter}>{filter}<span>{filter === 'All' ? projects.length : projects.filter((project) => project.category === filter).length}</span></button>)}</div><div className="project-list catalogue-list">{visible.map((project, index) => <ProjectRow key={project.slug} project={project} index={projects.indexOf(project)} />)}</div></>;
}
