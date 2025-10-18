// ✅ type-only import to satisfy verbatimModuleSyntax
import type { PropsWithChildren } from "react";
import styles from "../pages/css/about-page.module.css";

export default function CardShell({ children }: PropsWithChildren) {
  return <section className={styles.card}>{children}</section>;
}
