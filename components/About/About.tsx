import styles from "./About.module.css"

const About = () => {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.header}>
              <h3 className={styles.greeting}>Hello, I'm Saad Rehman</h3>
              <div className={styles.decorativeLine}></div>
            </div>
            
            <div className={styles.bioContainer}>
              <p className={styles.bio}>
                I am a Senior Full Stack Developer at Softevate and a freelancer with expertise spanning MERN, MEAN,
                AI/ML, web scraping, bots, and R&D-based projects. Currently in my final year at FAST-National University
                of Computer and Emerging Sciences, I'm focusing on data science, machine learning, deep learning, and
                artificial intelligence.
              </p>
              <p className={styles.bio}>
                With proficiency in frameworks like Next.js, Laravel, Flutter, and languages including Python, Java, C++,
                and Go, I am well-equipped to handle both development and data-driven tasks. I have over four years of
                experience in freelancing, where I've collaborated with professors and students on projects, assignments,
                research, and journal papers.
              </p>
            </div>

            <div className={styles.details}>
              <div className={styles.detail}>
                <span className={styles.label}>Name:</span>
                <span className={styles.value}>Saad Rehman</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.label}>Email:</span>
                <span className={styles.value}>saadrehman17100@gmail.com</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.label}>Location:</span>
                <span className={styles.value}>Karachi, Pakistan</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.label}>Education:</span>
                <span className={styles.value}>B.S. Computer Science, FAST-NUCES</span>
              </div>
            </div>

            <div className={styles.timeline}>
              <h4 className={styles.timelineTitle}>My Journey</h4>

              <div className={styles.timelineItems}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>Senior Full Stack Developer at Softevate</h5>
                    <p className={styles.timelinePeriod}>June 2022 - Present</p>
                    <p>Leading the development of scalable web applications using the MERN stack.</p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>Freelance Developer</h5>
                    <p className={styles.timelinePeriod}>October 2023 - Present</p>
                    <p>
                      Working on diverse projects covering MERN stack development, machine learning, and data science.
                    </p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h5>B.S. Computer Science</h5>
                    <p className={styles.timelinePeriod}>September 2021 - May 2025</p>
                    <p>FAST-National University of Computer and Emerging Sciences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
