import styles from "./Experience.module.css"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
}

interface EducationItem {
  degree: string
  institution: string
  period: string
  description: string
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Full Stack Developer",
      company: "Softevate",
      period: "June 2022 - Present",
      description: [
        "Lead the development of scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Implement best practices in code quality, security, and performance optimization.",
        "Collaborate with cross-functional teams to deliver high-quality software solutions.",
      ],
    },
    {
      title: "Freelance Developer",
      company: "Self-employed",
      period: "October 2023 - Present",
      description: [
        "Develop diverse projects covering MERN stack development, machine learning, and data science.",
        "Create web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Implement AI models using TensorFlow and other machine learning frameworks.",
      ],
    },
    {
      title: "Data Science Intern",
      company: "GrowIntern",
      period: "February 2024",
      description: [
        "Developed a movie recommendation system providing personalized suggestions based on user preferences.",
        "Created a gender and age detection system capable of analyzing photographs to determine gender and age.",
        "Applied machine learning algorithms to solve real-world problems.",
      ],
    },
    {
      title: "Data Science Intern",
      company: "CodSoft",
      period: "November 2023",
      description: [
        "Worked on predictive modeling and machine learning projects including Titanic Survival Prediction.",
        "Implemented Movie Rating Prediction and Iris Flower Classification using Python.",
        "Developed Sales Prediction and Credit Card Fraud Detection systems.",
      ],
    },
  ]

  const education: EducationItem[] = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "FAST-National University of Computer and Emerging Sciences",
      period: "September 2021 - May 2025",
      description:
        "Developing strong skills in programming, algorithms, and data structures, alongside improving teamwork and communication abilities.",
    },
    {
      degree: "Intermediate - Pre Engineering",
      institution: "Adam Jee Govt. Science College",
      period: "August 2019 - April 2021",
      description:
        "Gained a strong foundation in science and mathematics, laying the groundwork for academic journey in computer science.",
    },
  ]

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>

        <div className={styles.content}>
          <div className={styles.experienceSection}>
            <h3 className={styles.sectionTitle}>Work Experience</h3>

            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.itemTitle}>{exp.title}</h4>
                    <div className={styles.itemMeta}>
                      <span className={styles.company}>{exp.company}</span>
                      <span className={styles.period}>{exp.period}</span>
                    </div>
                    <ul className={styles.description}>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.educationSection}>
            <h3 className={styles.sectionTitle}>Education</h3>

            <div className={styles.timeline}>
              {education.map((edu, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.itemTitle}>{edu.degree}</h4>
                    <div className={styles.itemMeta}>
                      <span className={styles.company}>{edu.institution}</span>
                      <span className={styles.period}>{edu.period}</span>
                    </div>
                    <p className={styles.eduDescription}>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
