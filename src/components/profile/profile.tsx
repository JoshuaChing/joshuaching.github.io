import * as React from "react"

const styles = require('./profile.module.scss')

class Profile extends React.PureComponent {
    render() {
        return (
            <div>
                <div className={styles.headerContainer}>
                    <div className={styles.headerText}>Joshua Ching</div>
                    <div className={styles.subheaderText}>Software Engineer</div>
                </div>
                <div className={styles.pictureContainer}>
                    <div className={styles.picture}>👨‍💻</div>
                </div>
            </div>
        )
    }
}

export default Profile