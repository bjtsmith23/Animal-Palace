import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function DropdownComponent() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Dog</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Cat</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Bird</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
