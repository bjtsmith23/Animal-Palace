import React from "react";
// import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
export default function DropdownComponent({
  animalType,
  handleFilterDropdown,
}) {
  return (
    // <Dropdown>
    //   <Dropdown.Toggle variant="success" id="dropdown-basic">
    //     Filter By
    //   </Dropdown.Toggle>

    //   <Dropdown.Menu>
    //     <Dropdown.Item data-filter-type={animal.type} href="#/action-1">
    //       Dog
    //     </Dropdown.Item>
    //     <Dropdown.Item href="#/action-2">Cat</Dropdown.Item>
    //     <Dropdown.Item href="#/action-3">Bird</Dropdown.Item>
    //   </Dropdown.Menu>
    // </Dropdown>
    <Button data-animal-type={animalType.type} onClick={handleFilterDropdown}>
      {animalType.type}
    </Button>
  );
}
