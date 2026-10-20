

export default function Featured() {
    const books = [
        {
            title: "Book 1",
            author: "Edmond",
            description: "The first book of his series."
        },
        {
            title: "Book 2",
            author: "Reeves",
            description: "The second book."
        },
        {
            title: "Book 3",
            author: "Montell",
            description: "This is the third book."
        },
    ]
  return (
    <section>
        {books.map(book => <div className="book-card"><p>{book.title}</p><p>{book.author}</p><p>{book.description}</p></div>)}
    </section>
  )
}
