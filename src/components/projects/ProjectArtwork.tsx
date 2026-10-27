import type { Project } from '../../types/portfolio';

const labels: Record<Project['visual'], string> = { forge: 'JOB / MATCH / APPLY', trade: 'DOCUMENT / ROUTE / TRACK', nlp: 'TEXT TO STRUCTURE', medical: 'IMAGE / PIXEL / SIGNAL', quiz: 'QUESTION / RESPONSE', recipe: 'TASTE / PROFILE / MATCH', research: 'ABSTRACT / SDG / CLASSIFY' };

export function ProjectArtwork({ project, compact = false }: { project: Project; compact?: boolean }) {
  return <div className={`project-art art-${project.visual} ${compact ? 'art-compact' : ''}`} aria-hidden="true">
    <div className="art-topline"><span>{project.visual.toUpperCase()} / 0{['forge','trade','nlp','medical','quiz','recipe','research'].indexOf(project.visual) + 1}</span><span>AS—SYSTEMS</span></div>
    <div className="art-graphic">
      {project.visual === 'forge' && <><div className="forge-orbit orbit-a"/><div className="forge-orbit orbit-b"/><div className="forge-core">J<span>F</span></div><div className="forge-node node-a">CV</div><div className="forge-node node-b">ROLE</div><div className="forge-node node-c">FIT</div><div className="forge-label">EVIDENCE<br/>TO MATCH</div></>}
      {project.visual === 'trade' && <><div className="trade-sheet"><i/><i/><i/><b>UBL</b><span>INVOICE / 2048</span></div><div className="trade-route"><i/><i/><i/><i/></div><div className="trade-parcel">TRACKING<br/>IN MOTION</div></>}
      {project.visual === 'nlp' && <><div className="text-block">salary<br/>experience<br/>education<br/><em>requirements</em></div><div className="extract-bracket"/><div className="json-block">{`{\n  "role": true,\n  "salary": …\n}`}</div></>}
      {project.visual === 'medical' && <><div className="scan-ring ring-a"/><div className="scan-ring ring-b"/><div className="scan-center"/><div className="scan-label">US / 01<br/>PIXEL STUDY</div><div className="scan-cross">+</div></>}
      {project.visual === 'quiz' && <><div className="quiz-panel"><span>Q. 04</span><b>READY<br/>PLAYER?</b><i/><i/><i/></div><div className="quiz-signal signal-a"/><div className="quiz-signal signal-b"/><div className="quiz-live">LIVE / 04</div></>}
      {project.visual === 'recipe' && <><div className="recipe-circles"><i/><i/><i/><i/><i/></div><div className="recipe-link link-a"/><div className="recipe-link link-b"/><div className="recipe-copy">CONTENT<br/>AND SIGNAL</div></>}
      {project.visual === 'research' && <><div className="research-globe"><i/><i/><i/><i/><b>17</b></div><div className="research-tag tag-a">SDG / 03</div><div className="research-tag tag-b">SDG / 11</div><div className="research-orbit"/></>}
    </div>
    <div className="art-baseline"><span>{labels[project.visual]}</span><span>FIG. {String(['forge','trade','nlp','medical','quiz','recipe','research'].indexOf(project.visual) + 1).padStart(2, '0')}</span></div>
  </div>;
}
