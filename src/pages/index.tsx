import * as React from "react"
import type { HeadFC } from "gatsby"
import Profile from "../components/profile/profile"

const IndexPage = () => {
  return (
    <main>
      <Profile></Profile>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>joshuaching.github.io</title>