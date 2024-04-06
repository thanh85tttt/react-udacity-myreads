import { Link } from "react-router-dom"
import Shelf from "./Shelf"
import { useListBookContent } from "../hooks/useListBookContent"
import { CONTENT_TYPES } from "../const"

const ListBookContent = () => {
  const { bookList, handleChangeShelf } = useListBookContent()

  const renderBookshelf = (contentType, index) => {
    const contentTypeBookList = bookList.filter(
      (book) => book.shelf === contentType.type
    )
    return (
      <div className="bookshelf" key={index}>
        <h2 className="bookshelf-title">{contentType.title}</h2>
        <div className="bookshelf-books">
          <Shelf
            bookList={contentTypeBookList}
            changeBookShelf={handleChangeShelf}
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="list-books-content">
        {bookList.length > 0 && <div>{CONTENT_TYPES.map(renderBookshelf)}</div>}
      </div>
      <div className="open-search">
        <Link
          to={{
            pathname: "/search",
            state: { currentBookList: bookList },
          }}
        />
      </div>
    </div>
  )
}

export default ListBookContent
