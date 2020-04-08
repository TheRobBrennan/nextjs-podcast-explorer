// Core layout and Next.js
import { NextPage } from "next"
import Link from "next/link"

// Components
import Placeholder from "../src/Placeholder"

const IndexPage: NextPage = () => {
  return (
    <>
      <Placeholder />
      <Link href="/test">
        <a>Test</a>
      </Link>
    </>
  )
}
export default IndexPage
