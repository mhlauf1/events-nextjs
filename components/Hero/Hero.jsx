import styles from "./Hero.module.css";


export const Hero = () => {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.heroHeading}>
                <h2>Revenue Innovators 2022</h2>
            </div>
            <div className={styles.heroSideHeading}>
                <h2>Women in Sales Summit</h2>
                <p>SEP. 19-21 -- Napa, CA.</p>
                <button>Register Now</button>
            </div>
        </section>
    )
}