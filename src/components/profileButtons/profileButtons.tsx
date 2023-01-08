import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const styles = require('./profileButtons.module.scss')

const gitHubTitle = "GitHub"
const gitHubUrl = "https://github.com/joshuaching"
const linkedInTitle = "LinkedIn"
const linkedInUrl = "https://www.linkedin.com/in/joshuaching"

class ProfileButtons extends React.PureComponent {
    render() {
        return (
            <div className={styles.profileButtonsContainer}>
                <button className={styles.firstProfileButton} role="link" type="button" onClick={() => openInNewTab(gitHubUrl)}>
                    <FontAwesomeIcon icon={faGithub}/> {gitHubTitle}
                </button>
                <button className={styles.profileButton} role="link" type="button" onClick={() => openInNewTab(linkedInUrl)}>
                    <FontAwesomeIcon icon={faLinkedin}/> {linkedInTitle}
                </button>
            </div>
        )
    }
}

const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noreferrer')
}

export default ProfileButtons