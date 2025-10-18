import AboutSection from "../components/home/AboutSection";

export default function Home() {
  return (
    <div
      style={{
        width: "60%",
        margin: "3rem auto 0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AboutSection />
      {/* Other sections will go here */}
    </div>
  );
}
