import React from "react";

import Button from "react-bootstrap/Button";
export default function FilterButton({ animalType, handleFilterButton }) {
  return (
    <Button data-animal-type={animalType.type} onClick={handleFilterButton}>
      {animalType.type}
    </Button>
  );
}
