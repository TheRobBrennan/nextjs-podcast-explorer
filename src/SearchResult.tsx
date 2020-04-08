import { SFC } from "react"

interface SearchResultProps {
  searchText: string
}

const SearchResult: SFC<SearchResultProps> = ({ searchText }) => {
  const results = searchText ? (
    <pre>{JSON.stringify(searchText, null, 2)}</pre>
  ) : (
    <p>No result(s) found.</p>
  )

  return <>{results}</>
}
export default SearchResult
