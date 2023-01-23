import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { addFavoriteCharacter, deleteFavoriteCharacters } from '../../Store/slices/characters/characters';
import { Card } from '../Card/Card';
import { Favorite } from '../favorite/Favorites';
import { http } from '../../helpers/http';
import { Modal } from '../Modal/Modal';

import add from '../../assets/add.png';
import favorite1 from '../../assets/favorite-1.png';
import logo from '../../assets/logo-hp.png';

export const Dashboard = () => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [db, setDb] = useState([]);
  const [filter, setFilter] = useState([]);
  const [open, setOpen] = useState(false);

  const filterCharacter = (category) => {
    if (category === 'students') {
      setFilter(db.filter((item) => item.hogwartsStudent === true));
    }
    if (category === 'staff') {
      setFilter(db.filter((item) => item.hogwartsStudent === false));
    }
  };
  let api = http();
  let url = 'http://localhost:5000/characters';

  useEffect(() => {
    api.get(url).then((res) => setDb(res));
  }, []);

  const { favoriteCharacters } = useSelector(
    (state) => state.favoriteCharacters
  );

  const dispatch = useDispatch();

  const saveFavorite = (personaje) => {
    dispatch(addFavoriteCharacter(personaje));
  };

  const deleteCharacters = (name) => {
    dispatch(deleteFavoriteCharacters(name));
  };

  const hideModal = () => {
    console.log('Modal closed');
    setOpen(false);
  };

  const showModal = () => {
    setOpen(true);
  };

  return (
    <div className="background">
      <div className="header-content">
        <div className="header-buttons">
          <button onClick={() => setIsOpenList(true)}>
            Favoritos <img src={favorite1} alt="favoriteIcon" />
          </button>
          <button onClick={() => showModal()}>
            Agregar <img src={add} alt="addIcon" />
          </button>
        </div>
        {isOpenList && (
          <div className="favorite-charaters-list-container">
            {favoriteCharacters.map((item) => (
              <div className="favorite-characters-list" key={item.name}>
                <Favorite
                  name={item.name}
                  image={item.image}
                  deleteCharacters={
                    deleteCharacters
                  }
                />
              </div>
            ))}
          </div>
        )}
        <Modal onClose={hideModal} open={open} />
        <div className="dashboards-button-content">
          <div className="logohp-img">
            <img className="logo-hp" src={logo} alt="logoHp" />
            <p>Selecciona tu filtro</p>
          </div>
          <div className="filter-characters-buttons">
            <button onClick={() => filterCharacter("students")}>
              Estudiantes
            </button>
            <div className="space-button"></div>
            <button onClick={() => filterCharacter("staff")}>Profesores</button>
          </div>
        </div>
      </div>
      <div className="dashboard-cards-content">
        {filter.map((item) => (
          <Card
            key={item.name}
            status={item.alive ? "Vivo" : "Muerto"}
            degree={item.hogwartsStudent ? "Estudiante" : "Profesor"}
            image={item.image}
            name={item.name}
            dateOfBirth={item.dateOfBirth}
            gender={item.gender}
            eyeColour={item.eyeColour}
            hairColour={item.hairColour}
            handleSaveFavorite={saveFavorite}
            character={item}
            house={item.house}
          />
        ))}
        {db.map((item) => (
          <Card
            key={item.name}
            status={item.alive ? "Vivo" : "Muerto"}
            degree={item.hogwartsStudent ? "Estudiante" : "Profesor"}
            image={item.image}
            name={item.name}
            dateOfBirth={item.dateOfBirth}
            gender={item.gender}
            eyeColour={item.eyeColour}
            hairColour={item.hairColour}
            handleSaveFavorite={saveFavorite}
            character={item}
            house={item.house}
          />
        ))}
      </div>
    </div>
  );
};
