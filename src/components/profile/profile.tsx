import * as React from "react"

const styles = require('./profile.module.scss')

const headerText = "Joshua Ching"
const subheaderText = "Software Engineer"
const picture = "👨‍💻"
const description = "Currently working at Microsoft. Grateful for my past experiences at Yelp and Shopify."

class Profile extends React.PureComponent {
    render() {
        return (
            <div className={styles.profileContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerText}>{headerText}</div>
                    <div className={styles.subheaderText}>{subheaderText}</div>
                </div>
                <div className={styles.pictureContainer}>
                    <div className={styles.picture}>{picture}</div>
                </div>
                {/* <div>{description}</div> */}
            </div>
        )
    }
}

export default Profile