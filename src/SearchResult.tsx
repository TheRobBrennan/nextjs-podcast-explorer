interface SearchResultProps {
  searchText: string
}

export default ({ searchText }: SearchResultProps) => {
  const results = searchText ? (
    <pre>{JSON.stringify(searchText, null, 2)}</pre>
  ) : (
    <p>No result(s) found.</p>
  )

  return <>{results}</>
}
