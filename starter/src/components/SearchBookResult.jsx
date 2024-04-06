import Shelf from "./Shelf"

const SearchBookResult = (props) => {
  const { searchList, handleChangeBookShelf } = props

  return (
    <div className="search-books-results">
      <Shelf bookList={searchList} changeBookShelf={handleChangeBookShelf} />
    </div>
  )
}

export default SearchBookResult
