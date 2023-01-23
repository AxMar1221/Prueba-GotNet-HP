import favorite2 from '../../assets/favorite-2.png';
import { useScreenSize } from '../../helpers/hooks/useScreenSize';

export const Card = (props) => {
  const {
    character,
    status,
    degree,
    image,
    name,
    dateOfBirth,
    gender,
    eyeColour,
    hairColour,
    handleSaveFavorite,
    house,
  } = props;

  const width = useScreenSize();

  const isMobile = width <= 700;

  const changeBackgroundColorCard = (house) => {
    let background;
    if (house === 'Gryffindor') {
      background = 'linear-gradient(135deg, #FF0000 0%, #FED482 100%)';
    }
    if (house === 'Slytherin') {
      background = 'linear-gradient(135deg, #1C792B 0%, #82E95E 100%)';
    }
    if (house === 'Hufflepuff') {
      background = 'linear-gradient(135deg, #FFC700 0%, #FFF388 100%)';
    }
    if (house === 'Ravenclaw') {
      background = 'linear-gradient(135deg, #0597B7 0%, #66D1FF 100%)';
    }
    if (house === '') {
      background = 'linear-gradient(135deg,#6B63B5 0%, #FFFFFF 100%)';
    }
    return background;
  };

  const changeBackgroundColorStatus = (status) => {
    let backgroundStatus;
    if (status === 'vivo') {
      backgroundStatus = '#FFFFFF';
    }
    if (status === 'muerto') {
      backgroundStatus = '#CCCCCC';
    }
    return backgroundStatus;
  };

  return (
    <>
      {isMobile ? (
        <div className="card-mobile-content">
          <div
            className="card-mobile-content-top"
            style={{ background: `${changeBackgroundColorCard(house)}` }}
          >
            <img src={image} alt={name} />
          </div>
          <div
            className="card-mobile-content-down"
            style={{
              backgroundColor: `${changeBackgroundColorStatus(status)}`,
            }}
          >
            <div className="card-mobile-title">
              <p>{name}</p>
            </div>
            <div className="card-mobile-button">
              <p>
                {status}/{degree}
              </p>
              <button onClick={() => handleSaveFavorite(character)}>
                <img src={favorite2} alt="addIcon" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-content">
          <div
            className="card-content-left"
            style={{ background: `${changeBackgroundColorCard(house)}` }}
          >
            <img src={image} alt={name} />
          </div>
          <div
            className="card-content-right"
            style={{
              backgroundColor: `${changeBackgroundColorStatus(status)}`,
            }}
          >
            <div className="header-card">
              <p>
                {status}/{degree}
              </p>
              <button onClick={() => handleSaveFavorite(character)}>
                <img src={favorite2} alt="addIcon" />
              </button>
            </div>
            <h3>{name}</h3>
            <p>Cumpleaños: {dateOfBirth}</p>
            <p>Género: {gender}</p>
            <p>Color de ojos: {eyeColour}</p>
            <p>Color de cabello: {hairColour}</p>
          </div>
        </div>
      )}
    </>
  );
};
