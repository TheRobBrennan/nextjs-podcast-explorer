import { useState, SFC } from "react"
import { useForm } from "react-hook-form"
import SearchResult from "./SearchResult"

interface SearchInput {
  search: string
}

const Search: SFC = () => {
  const [searchText, setSearchText] = useState<string>()
  const { register, handleSubmit } = useForm()
  const onSearch = ({ search }: SearchInput) => {
    setSearchText(search)
  }

  return (
    <>
      <h1>Search</h1>
      <form onSubmit={handleSubmit(onSearch)}>
        <input name="search" placeholder="Search..." ref={register} />
        <input type="submit" value="Search" />
        <input type="reset" />
      </form>
      <SearchResult searchText={searchText} />
    </>
  )
}
export default Search
