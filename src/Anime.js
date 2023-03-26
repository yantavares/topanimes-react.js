const anime = (props) => {
  const { title, author, image, getAnime, id, number } = props;
  // console.log(title, author);
  return (
    <article className="anime">
      <span className="number"> # {number + 1} </span>
      <h3>{title}</h3>
      <h2>{author}</h2>
      <img src={image} alt="test" />
      <button className="btn" onClick={() => getAnime(id)}>
        {" "}
        Click me{" "}
      </button>
    </article>
  );
};

export default anime;
