import BookInfo from "./BookInfo"
import PropTypes from "prop-types"

const Shelf = ({ bookList, changeBookShelf }) => {
  return (
    <ol className="books-grid">
      {bookList.map((item) => (
        <BookInfo book={item} key={item.id} changeBookShelf={changeBookShelf} />
      ))}
    </ol>
  )
}

export default Shelf

Shelf.propTypes = {
  bookList: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
}
