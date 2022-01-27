import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterButton from "../components/FilterButton";
import MainCard from "../components/MainCard";
import MainCardModal from "../components/MainCardModal";
import "../assets/css/Main.css";

import { useQuery } from "@apollo/client";
import { QUERY_ALL_ANIMALS } from "../utils/queries";

export default function Main() {
  const { loading, data } = useQuery(QUERY_ALL_ANIMALS);
  const animals = data?.animals || [];

  const [selectedAnimal, setSelectedAnimal] = useState();
  const [modalShow, setModalShow] = useState(false);
  const handleModalShow = (e) => {
    setModalShow(!modalShow);
    const id = e.target.getAttribute("data-modal-id");
    const matchingContent = animals.filter((animal) => animal._id === id)[0];
    setSelectedAnimal(matchingContent);
  };

  const animalTypes = animals.filter(
    (val, index, array) => array.findIndex((t) => t.type === val.type) === index
  );

  const [selectedType, setSelectedType] = useState();
  const handleFilterButton = (e) => {
    const type = e.target.getAttribute("data-animal-type");
    setSelectedType(type);
  };

  const renderAnimalCards = () => {
    let filteredAnimals = animals;
    if (selectedType) {
      filteredAnimals = filteredAnimals.filter(
        (animal) => animal.type === selectedType
      );
    }
    return filteredAnimals
      ? filteredAnimals.map((animal, index) => (
          <div className="card-container m-5 border-0 " key={index}>
            <MainCard animal={animal} handleModalShow={handleModalShow} />
          </div>
        ))
      : null;
  };

  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="main-content text-center">
        <h3>ADOPT</h3>
        {loading ? <div>Loading...</div> : null}
        <div>
          {animalTypes
            ? animalTypes.map((animalType, index) => (
                <div className="mt-3 px-2 d-inline-block" key={index}>
                  <FilterButton
                    animalType={animalType}
                    handleFilterButton={handleFilterButton}
                  />
                </div>
              ))
            : null}
        </div>

        {renderAnimalCards()}

        <MainCardModal
          show={modalShow}
          animalinfo={selectedAnimal}
          onHide={() => setModalShow(false)}
        />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
