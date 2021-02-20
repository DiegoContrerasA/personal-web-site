import { useEffect, useState } from "react"
import FacebookIcon from "../components/Svg/FacebookIcon"
import InstagramIcon from "../components/Svg/InstagramIcon"
import LinkedinIcon from "../components/Svg/LinkedinIcon"
import TwitterIcon from "../components/Svg/TwitterIcon"
import SunIcon from "../components/Svg/SunIcon"
import MoonIcon from "../components/Svg/MoonIcon"
import LaptopIcon from "../components/Svg/LaptopIcon"
const year = new Date().getFullYear()

const THEME = {
  DARK: "dark-mode",
  LIGTH: "ligth-mode",
  SYSTEM: null,
}
export default function Home() {
  const [theme, setTheme] = useState()

  const handleSetTheme = (theme) => {
    localStorage.setItem("theme", theme)
    setTheme(theme)
  }

  useEffect(() => {
    const body = document.querySelector("body")
    const currentTheme =
      theme === undefined ? localStorage.getItem("theme") || "dark-mode" : theme
    body.setAttribute("theme", currentTheme)
    setTheme(currentTheme)
  }, [theme])

  const selectedButton = (scheme) => (scheme === theme ? "selected" : "")

  return (
    <div className="app">
      <div className="buttons">
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
      <div className="container">
        <section className="introduction">
          <figure className="picture">
            <img src="/profile.jpg" />
          </figure>
          <p className="presentation">
            Hello! I Am <strong className="name">Diego Contreras.</strong>
          </p>
          <div className="social-networks">
            <a
              className="social-link facebook"
              target="blank"
              href="https://www.facebook.com/diego.contreras.94801116/"
            >
              <FacebookIcon />
            </a>
            <a
              className="social-link instagram"
              target="blank"
              href="https://www.instagram.com/diegocondev/"
            >
              <InstagramIcon />
            </a>
            <a
              className="social-link twitter"
              target="blank"
              href="https://twitter.com/DiegoCo48990707"
            >
              <TwitterIcon />
            </a>
            <a
              className="social-link linkedin"
              target="blank"
              href="https://www.linkedin.com/in/diego-armando-contreras-a91070177/"
            >
              <LinkedinIcon />
            </a>
          </div>
          <p className="paragraph">Developer and web technology enthusiast.</p>
          <a
            className="button"
            target="blank"
            href="https://drive.google.com/file/d/1kO-i4YjS7QbKlIQ4pUjSZ1_YGTP0O5iT/view?usp=sharing"
          >
            Download Resume
          </a>
        </section>
        <section className="about-me">
          <h1 className="title">About Me</h1>
          <p className="skills">
            Frontend and Mobile developer (React / React native)
          </p>
          <p className="paragraph">
            Software developer and passionate about technology, especially the
            web. He is currently improving his skills in backend technologies to
            have a better complement in his career.
          </p>
          <p className="paragraph">
            During his last years he has dabbled in different frontend
            technologies being his preference React and Next.js with which he
            has found the perfect complement to provide incredible experiences
            for both the client and the teams he has worked with.
          </p>
          <p className="paragraph">
            Passionate about soccer, running and the gym, he also enjoys being
            enthusiastic and being in a continuous learning process and believes
            that motivation does not exist if you have passion for things.
          </p>
          <p className="paragraph">
            The phrase that most identifies me
            <strong className="phrase">
              {" "}
              &ldquo;Keep It Simple Stupid&rdquo;
            </strong>
          </p>
          <footer className="footer">Fabricated by Diego C © {year}</footer>
        </section>
      </div>
    </div>
  )
}
