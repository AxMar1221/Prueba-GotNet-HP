import trash from "../../assets/trash.png";
export const Favorite = (props) => {
  const { image, name, handleDeleteFavoriteCharacters } = props;
  return (
    <div className="list-container">
      <div className="container">
        <img src={image} alt={name} />
        <p>{name}</p>
        <button onClick={() => handleDeleteFavoriteCharacters(name)}>
          <img src={trash} alt="trash" />
        </button>
      </div>
    </div>
  );
};
