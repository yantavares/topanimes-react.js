const anime = (props) => {
  const { title, author, image, getAnime, id, number } = props;
  // console.log(title, author);
  return (
    <article className="anime">
      <span className="number"> # {number + 1} </span>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <img src={image} alt="test" />
      <button className="btn" onClick={() => getAnime(id)}>
        {" "}
        Click me{" "}
      </button>
    </article>
  );
};

export default anime;
