import * as React from "react"
import type { HeadFC } from "gatsby"
import Profile from "../components/profile/profile"
import ProfileButtons from "../components/profileButtons/profileButtons"

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