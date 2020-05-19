import React, { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/logo.png";

import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function Header(props) {
  const [name, setName] = useState("");
  return (
    <Navbar id="nav-bar" bg="dark" variant="dark" expand="lg">
      <Nav className="mr-auto">
        <Nav.Link href="#home">
          <img className="logo" src={Logo} alt="logo" />
        </Nav.Link>
      </Nav>
      <Form
        inline
        onSubmit={() => {
          props.onchange({ name });
        }}
      >
        <FormControl
          onChange={e => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button type="submit" variant="outline-success">
          Search
        </Button>
      </Form>
    </Navbar>
  );
}
