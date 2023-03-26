const Book = (props) => {
  const { titulo, autor, image, getBook, id } = props;
  // console.log(titulo, autor);
  return (
    <article className="book">
      <h3>{titulo}</h3>
      <h2>{autor}</h2>
      <img src={image} alt="test" />
      <button onClick={() => getBook(id)}> Click me </button>
    </article>
  );
};

export default Book;
