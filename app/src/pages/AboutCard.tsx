import { PiMapPinFill } from "react-icons/pi";
import CardShell from "./CardShell";
import { profile } from "../data/profile";
import styles from "../pages/css/about-page.module.css";

type Variant = "full" | "compact";

interface AboutCardProps {
  variant?: Variant;
  href?: string;
}

export default function AboutCard({ variant = "full", href }: AboutCardProps) {
  const bio =
    variant === "full"
      ? profile.bio
      : profile.bio.split(". ").slice(0, 1).join(". ") + "…";

  const skills =
    variant === "full" ? profile.skills : [...profile.skills.slice(0, 3), "…"];

  const content = (
    <CardShell>
      <div className={styles.left}>
        <div className={styles.avatar}>{profile.initials}</div>
        <h2 className={styles.name}>{profile.name}</h2>
        <a
          className={styles.location}
          href={profile.locationHref}
          target="_blank"
          rel="noreferrer"
        >
          <PiMapPinFill className={styles.pin} />
          {profile.locationLabel}
        </a>
      </div>

      <div className={styles.right}>
        <h3>About</h3>
        <p className={styles.bio}>{bio}</p>

        <h4>Skills</h4>
        <ul className={styles.skills}>
          {skills.map((s: string) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </CardShell>
  );

  return href ? (
    <a href={href} style={{ textDecoration: "none", color: "inherit" }}>
      {content}
    </a>
  ) : (
    content
  );
}
