import { useEffect, useState } from "react"
import FacebookIcon from "../components/Icons/FacebookIcon"
import InstagramIcon from "../components/Icons/InstagramIcon"
import LinkedinIcon from "../components/Icons/LinkedinIcon"
import TwitterIcon from "../components/Icons/TwitterIcon"
import SunIcon from "../components/Icons/SunIcon"
import MoonIcon from "../components/Icons/MoonIcon"
import LaptopIcon from "../components/Icons/LaptopIcon"
import styles from "../styles/page.module.css"

const year = new Date().getFullYear()

const THEME = {
  DARK: "dark-mode",
  LIGTH: "ligth-mode",
  SYSTEM: "system",
}
export default function Home() {
  const [theme, setTheme] = useState(null)

  const handleSetTheme = (theme) => {
    localStorage.setItem("theme", theme)
    setTheme(theme)
  }

  useEffect(() => {
    const body = document.querySelector("body")
    const currentTheme = !theme
      ? localStorage.getItem("theme") || "dark-mode"
      : theme
    body.setAttribute("theme", currentTheme)
    setTheme(currentTheme)
  }, [theme])

  const selectedButton = (scheme) => (scheme === theme ? styles.selected : "")

  return (
    <div className={styles.app}>
      <div className={styles.buttons}>
        <button
          className={selectedButton(THEME.DARK)}
          onClick={() => handleSetTheme(THEME.DARK)}
        >
          <MoonIcon />
        </button>
        <button
          className={selectedButton(THEME.LIGTH)}
          onClick={() => handleSetTheme(THEME.LIGTH)}
        >
          <SunIcon />
        </button>
        <button
          className={selectedButton(THEME.SYSTEM)}
          onClick={() => handleSetTheme(THEME.SYSTEM)}
        >
          <LaptopIcon />
        </button>
      </div>
      <div className={styles.container}>
        <section className={styles.introduction}>
          <figure className={styles.picture}>
            <img src="/profile.jpg" />
          </figure>
          <p className={styles.presentation}>
            Hello! I Am{" "}
            <strong className={styles.name}>Diego Contreras.</strong>
          </p>
          <div className={styles.socialNetworks}>
            <a
              className={`${styles.socialLink} ${styles.facebook}`}
              target="blank"
              href="https://www.facebook.com/diego.contreras.94801116/"
            >
              <FacebookIcon />
            </a>
            <a
              className={`${styles.socialLink} ${styles.instagram}`}
              target="blank"
              href="https://www.instagram.com/diegocondev/"
            >
              <InstagramIcon />
            </a>
            <a
              className={`${styles.socialLink} ${styles.twitter}`}
              target="blank"
              href="https://twitter.com/DiegoCo48990707"
            >
              <TwitterIcon />
            </a>
            <a
              className={`${styles.socialLink} ${styles.linkedin}`}
              target="blank"
              href="https://www.linkedin.com/in/diego-armando-contreras-a91070177/"
            >
              <LinkedinIcon />
            </a>
          </div>
          <p className={styles.paragraph}>
            Developer and web technology enthusiast.
          </p>
          <a
            className={styles.button}
            target="blank"
            href="https://drive.google.com/file/d/15IcfAOyKs7-UHOoZovnoLrOckSzO6l_W/view?usp=sharing"
          >
            Download Resume
          </a>
        </section>
        <section className={styles.aboutMe}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.skills}>
            Frontend and Mobile developer (React / React native)
          </p>
          <p className={styles.paragraph}>
            Software developer and passionate about technology, especially the
            web. He is currently improving his skills in backend technologies to
            have a better complement in his career.
          </p>
          <p className={styles.paragraph}>
            During his last years, he has dabbled in different frontend
            technologies being his preference React and Next.js with which he
            has found the perfect tools to provide amazing experiences to both
            the client and the teams he has worked with.
          </p>
          <p className={styles.paragraph}>
            Passionate about soccer, running, and the gym, he also enjoys being
            enthusiastic and being in a continuous learning process and believes
            that motivation does not exist if a person has passion for things.
          </p>
          <p className={styles.paragraph}>
            The phrase that most identifies him
            <strong className={styles.phrase}>
              {" "}
              &ldquo;Keep It Simple Stupid&rdquo;
            </strong>
          </p>
          <footer className={styles.footer}>
            Fabricated by Diego C © {year}
          </footer>
        </section>
      </div>
    </div>
  )
}
