import { site, type LiveProject, type EducationItem, type Certification } from "@/content/site";
import { CertificationsSection } from "@/app/components/CertificationsSection";
import { RecognitionSection } from "@/app/components/RecognitionSection";

const deployedOn = new Date().toISOString().slice(0, 10);
const external = { target: "_blank", rel: "noopener noreferrer" } as const;

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
    </div>
  );
}

async function getGithubRepos() {
  const res = await fetch('https://api.github.com/users/FatimaEz-zahraaAIT-HSSAIN/repos?sort=updated&per_page=3', {
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) return [];
  const repos = await res.json();

  // Fetch recent commits for each repository concurrently
  const reposWithCommits = await Promise.all(
    repos.map(async (repo: any) => {
      try {
        const commitRes = await fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits?per_page=3`, {
          next: { revalidate: 3600 }
        });
        const commits = commitRes.ok ? await commitRes.json() : [];
        return { ...repo, recentCommits: commits };
      } catch (e) {
        return { ...repo, recentCommits: [] };
      }
    })
  );

  return reposWithCommits;
}

function LiveCard({ p }: { p: LiveProject }) {
  return (
    <a className="card live" href={p.url} {...external}>
      <span className="pill pill-live"><span className="dot" />live</span>
      <h3>{p.name}</h3>
      <p className="desc grow">{p.desc}</p>
      <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
      <div className="card-foot">
        <span className="metric">{p.metric}</span>
        <span className="domain">{p.domain} ↗</span>
      </div>
    </a>
  );
}

function RecentCommits({ commits }: { commits: any[] }) {
  return (
    <div className="roadmap">
      <div className="comment">// recent commits</div>
      {commits && commits.length > 0 ? (
        commits.map((c: any) => {
          const message = c.commit.message.split("\n")[0]; // Takes only the first line of the commit message
          const shortSha = c.sha.slice(0, 7);
          return (
            <a 
              key={c.sha} 
              href={c.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="step done"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="mark" style={{ fontFamily: 'var(--mono)' }}>{shortSha}</span>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{message}</span>
            </a>
          );
        })
      ) : (
        <div className="step todo">
          <span className="mark">[i]</span>
          <span>No recent commits found</span>
        </div>
      )}
    </div>
  );
}


export default async function Page() {
  const repos = await getGithubRepos();
  const stackEntries = Object.entries(site.stack);
  return (
    <div className="page">
      <nav className="nav">
        <div className="nav-in">
          <a href="#top" className="brand"><span>~/</span>{site.handle}</a>
          <div className="nav-links">
            <a href="#about">about</a>
            <a href="#projects">projects</a>
            <a href="#building">building</a>
            <a href="#timeline">timeline</a>
            <a href="#education">education</a>
            <a href="#certifications">certifications</a>
            <a href="#recognition">recognition</a>
            <a href="#contact" className="accent">contact →</a>
          </div>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="prompt">
              <span className="green">{site.promptUser}</span><span>:</span><span className="blue">~</span><span>$ whoami</span>
            </div>
            <h1>{site.headline}<span className="period">.</span></h1>
            <p className="lede">{site.lede}</p>
            <div className="cta">
              <a href="#projects" className="btn-primary">./see-projects</a>
              <a href="#contact" className="btn-secondary">say hello</a>
            </div>
            <div className="status">
              <div className="status-item"><span className="pulse" />{site.status}</div>
              <div>{site.live.length} live · 3 in progress</div>
              <div className="status-item">last deploy {deployedOn}<span className="cursor" /></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit-container">
              <div className="orbit-ring" aria-hidden="true">
                <span className="orbit-dot" style={{ "--i": "0deg" } as any} />
                <span className="orbit-dot" style={{ "--i": "45deg" } as any} />
                <span className="orbit-dot" style={{ "--i": "90deg" } as any} />
                <span className="orbit-dot" style={{ "--i": "135deg" } as any} />
                <span className="orbit-dot" style={{ "--i": "180deg" } as any} />
                <span className="orbit-dot" style={{ "--i": "225deg" } as any} />
                <span className="orbit-dot" style={{ "--i": "270deg" } as any} />
                <span className="orbit-dot" style={{ "--i": "315deg" } as any} />
              </div>
              <div className="orbit-ring orbit-ring-2" aria-hidden="true">
                <span className="orbit-badge" style={{ "--i": "0deg" } as any} />
                <span className="orbit-badge" style={{ "--i": "90deg" } as any} />
                <span className="orbit-badge" style={{ "--i": "180deg" } as any} />
                <span className="orbit-badge" style={{ "--i": "270deg" } as any} />
              </div>
              <div className="hero-image-circle">
                <img
                  src="https://avatars.githubusercontent.com/u/124906725"
                  alt="Fatima portrait"
                  className="hero-image-inner"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <div className="wrap split">
          <SectionHead eyebrow="01 / about" title="A bit about me" />
          <div className="span2 about">
            {site.about.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            <div className="code">
              <div className="comment">// stack.json</div>
              {stackEntries.map(([key, values], i) => (
                <div key={key}>
                  <span className="key">&quot;{key}&quot;</span>: <span>[{values.map((v) => `"${v}"`).join(", ")}]</span>
                  {i < stackEntries.length - 1 ? "," : ""}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="wrap">
          <div className="head-row">
            <SectionHead eyebrow="02 / live" title="Shipped & running" />
            <p>Products in production. Click through and try them.</p>
          </div>
          <div className="live-grid">{site.live.map((p) => <LiveCard key={p.name} p={p} />)}</div>
        </div>
      </section>

      <section id="building" className="section">
        <div className="wrap">
          <div className="head-row">
            <SectionHead eyebrow="03 / in progress" title="On the workbench" />
            <p>Active repositories and recent commits from GitHub.</p>
          </div>
          <div className="building-list">
            {repos.map((repo: any) => (
              <div key={repo.id} className="card building">
                <div className="building-main">
                  <div className="building-top">
                    <span className="pill pill-wip"><span className="dot" />{repo.language || 'Code'}</span>
                    <span className="eta">Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                    <a className="domain-link" href={repo.html_url} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                  </div>
                  <h3>{repo.name}</h3>
                  <p className="desc">{repo.description || "No description provided."}</p>
                </div>
                <RecentCommits commits={repo.recentCommits} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="section">
        <div className="wrap split">
          <SectionHead eyebrow="04 / timeline" title="Where I've been" />
          <div className="span2 timeline">
            {site.timeline.map((e) => (
              <div className="tl-row" key={e.role + e.org}>
                <div className="tl-when">{e.when}</div>
                <div className="tl-body">
                  <div className="tl-role">{e.role} <span>@ {e.org}</span></div>
                  <div className="tl-desc">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="wrap split">
          <SectionHead eyebrow="05 / education" title="My Education" />
          <div className="span2 education">
            {site.education.map((e) => (
              <div className="tl-row" key={e.degree + e.institution}>
                <div className="tl-when">{e.when}</div>
                <div className="tl-body">
                  <div className="tl-role">{e.degree} <span>@ {e.institution}</span></div>
                  <div className="tl-desc">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CertificationsSection certs={site.certifications} />
      <RecognitionSection recognitions={site.recognition} />

      <section id="contact" className="section">
        <div className="wrap contact">
          <div className="eyebrow">06 / contact</div>
          <h2 className="contact-h">{site.contact.headline}</h2>
          <a className="email" href={`mailto:${site.contact.email}`}>{site.contact.email} →</a>
          <div className="socials">
            {site.contact.socials.map((s) => <a key={s.label} href={s.url} {...external}>{s.label} ↗</a>)}
          </div>
        </div>
        <footer className="foot">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{site.footerRight}</span>
        </footer>
      </section>
    </div>
  );
}
