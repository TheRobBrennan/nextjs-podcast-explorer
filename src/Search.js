import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default () => {
  const [searchText, setSearchText] = useState()
  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(`onSubmit received data: ${JSON.stringify(data, null, 2)}`);
    setSearchText(data.search)
  }

  return (
    <>
      <h1>Search</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name='search' placeholder='Search...' ref={register} />
        <input type='submit' />
      </form>
      {searchText && (<pre>{JSON.stringify(searchText, null, 2)}</pre>)}
    </>
  )
}