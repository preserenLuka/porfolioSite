import AboutCard from "./AboutCard";
import ProjectsCard from "./ProjectsCard";

export default function Home() {
  return (
    <div
      style={{
        width: "80%",
        margin: "3rem auto 0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "1.5rem",
      }}
    >
      <AboutCard variant="compact" href="/about" />
      <ProjectsCard variant="compact" href="/projects" />
    </div>
  );
}
