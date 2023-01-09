import * as React from "react"

const styles = require('./profile.module.scss')

const headerText = "Joshua Ching"
const subheaderText = "Software Engineer"
const picture = "👨🏻‍💻"
const experience = "Currently working at Microsoft. Grateful for my past experiences at Yelp, Shopify, and Zynga."
const skillset = "I have experience in iOS, front-end, and back-end development."

class Profile extends React.PureComponent {
    render() {
        return (
            <div>
                <div className={styles.profileContainer}>
                    <div className={styles.headerContainer}>
                        <div className={styles.headerText}>{headerText}</div>
                        <div className={styles.subheaderText}>{subheaderText}</div>
                    </div>
                    <div className={styles.pictureContainer}>
                        <div className={styles.picture}>{picture}</div>
                    </div>
                </div>
                <div className={styles.descriptionContainer}>
                    <p>{experience}</p>
                    <p>{skillset}</p>
                </div>
            </div>
        )
    }
}

export default Profile