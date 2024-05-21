import React, { useState } from 'react'
import CourseForm from './CourseForm';
import CourseList from './CourseList';

const GpaCalc = () => {
    const gradepoints={
        'O':10,'A+':9,'A':8,'B+':7,'B':6,'C':5
    }

    const [courses,setCourses]=useState([]);
    const handleAdd=(newcourse)=>{
        setCourses([...courses,newcourse]);
    }
    const deletecourse=(index)=>{
        const updated=courses.filter((course,i)=>i!==index);
        setCourses(updated);
    }

    const calc=()=>{
        let totalgp=0;
        let totalcredit=0;
console.log(courses)
        courses.forEach((course)=>{
            totalgp+=gradepoints[course.grade]*course.credit;
            totalcredit+=parseInt(course.credit);
            console.log(totalcredit)
            console.log(totalgp)
        })
        return totalcredit===0?0:totalgp/totalcredit;
    }
  return (
    <div>
      <CourseForm onAdd={handleAdd} />
      <CourseList courses={courses} onDelete={deletecourse} calc={calc} />
    </div>
  )
}

export default GpaCalc
