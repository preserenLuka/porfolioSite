import styles from "./css/projects.module.css";
import { projects } from "../data/projects";

type Variant = "full" | "compact";

interface ProjectsCardProps {
  variant?: Variant;
  href?: string; // for wrapping in link on Home page
}

export default function ProjectsCard({
  variant = "full",
  href,
}: ProjectsCardProps) {
  const renderProjects = variant === "full" ? projects : projects.slice(0, 2); // shorter list for home

  const content = (
    <div
      style={{
        width: variant === "full" ? "60%" : "100%",
        margin: "3rem auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 className={styles.pageTitle}>Projects</h1>
      <div className={styles.grid}>
        {renderProjects.map((p) => (
          <article key={p.id} className={styles.card}>
            <div className={styles.thumb} aria-hidden />
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>
                {variant === "full" ? p.desc : p.desc.slice(0, 60) + "…"}
              </p>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                className={styles.viewLink}
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                View →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  return href ? (
    <a href={href} style={{ textDecoration: "none", color: "inherit" }}>
      {content}
    </a>
  ) : (
    content
  );
}
