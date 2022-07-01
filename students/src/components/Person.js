import React from 'react'
import { Card } from 'react-bootstrap'
import { Image } from "react-bootstrap";
import logo from "../logo.svg";
import s1 from "../s1.png"
function Person({person}) {
  return (
<>
  <Card>
    <Card.Img  src={person.image} alt="dsad"/>
    <Card.Body>
      <Card.Text>
        {person.name}
      </Card.Text>
    </Card.Body>
  </Card>
</>
  )
}

export default Person