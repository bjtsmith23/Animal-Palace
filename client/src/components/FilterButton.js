import React from "react";

import Button from "react-bootstrap/Button";
export default function FilterButton({ animalType, handleFilterButton }) {
  return (
    <Button
      size="sm"
      variant="info"
      data-animal-type={animalType.type}
      onClick={handleFilterButton}
    >
      {animalType.type}
    </Button>
  );
}
