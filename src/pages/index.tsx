import * as React from "react"
import type { HeadFC } from "gatsby"
import Profile from "../components/profile/profile"
import ProfileButtons from "../components/profileButtons/profileButtons"

// snippet to fix flashing resizing font awesome icons
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

require('../common/app.module.scss')
const styles = require('../common/common.module.scss')

const IndexPage = () => {
  return (
    <main>
      <div className={styles.fullScreenContainer}>
        <div className={styles.center}>
          <Profile></Profile>
          <ProfileButtons></ProfileButtons>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>joshuaching.github.io</title>