import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
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

  // for (var i = 0; i < animalTypes.length; i++) {
  //   console.log(animalTypes[i].type);
  // }

  const handleFilterDropdown = (e) => {
    const type = e.target.getAttribute("data-animal-type");
    const matchingTypeAnimal = animals.filter((animal) => animal.type === type);
    setSelectedAnimal(matchingTypeAnimal);
    return matchingTypeAnimal;
  };

  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="main-content text-center">
        <div>ADOPT</div>
        {loading ? <div>Loading...</div> : null}
        {animalTypes
          ? animalTypes.map((animalType, index) => (
              <div key={index}>
                <Dropdown
                  animalType={animalType}
                  handleFilterDropdown={handleFilterDropdown}
                />
              </div>
            ))
          : null}

        {animals
          ? animals.map((animal, index) => (
              <div className="card-container m-5 border-0 " key={index}>
                <MainCard animal={animal} handleModalShow={handleModalShow} />
              </div>
            ))
          : null}

        {/* {matchingTypeAnimal
          ? matchingTypeAnimal.map((animal, index) => (
              <div className="card-container m-5 border-0 " key={index}>
                <MainCard
                  animal={animal}
                  handleFilterDropdown={handleFilterDropdown}
                />
              </div>
            ))
          : null} */}

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
