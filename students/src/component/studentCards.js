import React from 'react'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap';

function StudentCards({student}) {
  return (
<td >
  <Card style={{ width: '28rem', padding: "20%", background:"beige"}} >
    <Card.Img  src={student.image} alt="dsad"/>
    <Card.Body>
      <Card.Text>
        {student.name}<br></br><br></br>
        {student.gpa}<br></br><br></br>
        <Button>Grade</Button>
      </Card.Text>
    </Card.Body>
  </Card>
</td>
  )
}

export default StudentCards