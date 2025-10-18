import AboutCard from "./AboutCard";

export default function About() {
  return (
    <div
      style={{
        width: "60%",
        margin: "3rem auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AboutCard variant="full" />
    </div>
  );
}
