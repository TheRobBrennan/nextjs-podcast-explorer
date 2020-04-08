// Core layout and Next.js
import { NextPage } from "next"
import Link from "next/link"

// Components
import Search from "../src/Search"

const IndexPage: NextPage = () => {
  return (
    <>
      <Search />
      <Link href="/test">
        <a>Test</a>
      </Link>
    </>
  )
}
export default IndexPage
