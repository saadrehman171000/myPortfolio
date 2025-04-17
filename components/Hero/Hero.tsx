"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Hero.module.css"
import { ArrowDown, Download, Github, Linkedin, ExternalLink } from "lucide-react"

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const title = titleRef.current
    if (!title) return

    const text = title.innerText
    title.innerHTML = ""
    ;[...text].forEach((char, i) => {
      const span = document.createElement("span")
      span.innerText = char
      span.style.animationDelay = `${i * 0.05}s`
      span.className = styles.char
      title.appendChild(span)
    })

    // Set loaded state after a short delay to trigger animations
    setTimeout(() => {
      setIsLoaded(true)
    }, 100)
  }, [])

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isLoaded ? styles.loaded : ""}`}>
          <div className={styles.textContent}>
            <p className={styles.greeting}>Hi there, I'm</p>
            <h1 ref={titleRef} className={styles.title}>
              Saad Rehman
            </h1>
            <h2 className={styles.subtitle}>
              <span className={styles.typingText}>
                Full Stack Developer <span className={styles.separator}>|</span> Data Scientist{" "}
                <span className={styles.separator}>|</span> AI Enthusiast
              </span>
            </h2>
            <p className={styles.description}>
              I build exceptional digital experiences that combine beautiful design with powerful functionality.
              Specializing in MERN stack development and data science solutions to solve complex problems.
            </p>

            <div className={styles.buttons}>
              <Link href="#projects" className={styles.primaryBtn}>
                View Projects
              </Link>
              <Link href="/resume.pdf" className={styles.secondaryBtn} download>
                <Download size={16} />
                Download Resume
              </Link>
            </div>

            <div className={styles.social}>
              <Link
                href="https://github.com/saadrehman171000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={styles.socialLink}
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/saadrehman17100/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialLink}
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://saadrehman.dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio"
                className={styles.socialLink}
              >
                <ExternalLink size={20} />
              </Link>
            </div>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBorder}></div>
              <Image
                src="/image/MyPic.png"
                alt="Saad Rehman"
                width={500}
                height={500}
                className={styles.image}
                priority
              />
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <Link href="#stats" className={styles.scrollDown} aria-label="Scroll down">
          <ArrowDown size={20} />
        </Link>
      </div>

      <div className={styles.heroGlow}></div>
    </section>
  )
}

export default Hero
