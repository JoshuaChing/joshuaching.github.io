import * as React from "react"

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
                    {gitHubTitle}
                </button>
                <button className={styles.profileButton} role="link" type="button" onClick={() => openInNewTab(linkedInUrl)}>
                    {linkedInTitle}
                </button>
            </div>
        )
    }
}

const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noreferrer')
}

export default ProfileButtons