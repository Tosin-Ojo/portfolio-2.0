import { useEffect } from "react";

import { HeroInfoType } from "../data/hero";

import styles from "../styles/Hero.module.css";

interface Props {
  heroInfo: HeroInfoType;
  name: string;
}

const Hero: React.FC<Props> = ({ heroInfo, name }) => {
  useEffect(() => {
    const fades = document.querySelectorAll(".fade-hero-down") as NodeList;
    fades &&
      setTimeout(() => {
        document.querySelectorAll(".fade-hero-down").forEach((doc) => {
          (doc as HTMLElement).style.opacity = "1";
          (doc as HTMLElement).style.transform = "translateY(0px)";
        });
      }, 1000);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <img src="/walking-code.gif" alt="Walking Code" />
      </div>
      <div
        className={`${styles.intro} fade-hero-down`}
        style={{ transitionDuration: "100ms" }}
      >
        <h1>Hi, my name is</h1>
      </div>
      <div
        className={`${styles.name} fade-hero-down`}
        style={{ transitionDuration: "300ms" }}
      >
        <h2>{name}</h2>
      </div>
      <div
        className={`${styles.description} fade-hero-down`}
        style={{ transitionDuration: "500ms" }}
      >
        <h3>
          {heroInfo.expertise.split("").map((letter, i) => (
            <span key={`${letter}${i}`}>
              {letter === " " ? (
                <>&nbsp;</>
              ) : (
                <span
                  key={`${letter}${i}`}
                  className="glow"
                  style={{ animationDelay: `${2100 + 100 * i}ms` }}
                >
                  {letter}
                </span>
              )}
            </span>
          ))}
        </h3>
      </div>
      <div
        className={`${styles.bio} fade-hero-down`}
        style={{ transitionDuration: "700ms" }}
      >
        <p>{heroInfo.introduction}</p>
      </div>
      <div
        className={`${styles.button} fade-hero-down`}
        style={{ transitionDuration: "900ms" }}
      >
        <a href="#contact">Let's talk!</a>
      </div>
    </section>
  );
};

export default Hero;