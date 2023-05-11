import React from 'react'
import { useGlobalContext } from './Context'

const SearchForm = () => {
  const { setSearchTerm} = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
    console.log(searchValue)
  }
  return (
    <section>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input search-input'
          name='search'
          placeholder='Eagle'
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  )
}

export default SearchForm