
import React from 'react'
import StudentCards from './studentCards';
import s1 from "../s1.png"
import s2 from "../s2.png"
import s3 from "../s3.png"
import s4 from "../s4.png"
  function StudentInfo() {
  
    const cardInfo = [
        {
          image:
          s1,
          name: "Mike",
          gpa: 3.8
        },
        {
          image:
            s2,
            name: "Manal",
            gpa: 3.6
        },
        {
          image:
            s3,
            name: "Moe",
            gpa: 3.2
        },
        {
          image:
            s4,
            name: "Mary",
            gpa: 2.6
        }
      ];
    
      const personList = cardInfo.map(student => <StudentCards student = {student}/>)
      return <div>{personList}</div>
   
    
  }
  
  export default StudentInfo