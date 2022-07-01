import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

const cardInfo = [
    {
      image:
        "s1.png",
      name: "Mike",
      gpa: 3.8
    },
    {
      image:
        "s2.png",
        name: "Manal",
        gpa: 3.6
    },
    {
      image:
        "s3.png",
        name: "Moe",
        gpa: 3.2
    },
    {
      image:
        "s4.png",
        name: "Mary",
        gpa: 2.6
    }
  ];


class studentCards extends Component {

    constructor(){
        super();
    }
    cardInfo(){
        
    }
    render() { 
        return (
            <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </div>
        );
    }
}
 
export default studentCards;