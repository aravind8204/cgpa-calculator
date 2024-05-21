import React, { useState } from 'react'


const CourseList=({courses,onDelete,calc})=> {
  return (
    <>
    <div>
      <div>
        <h2 className='pl-2 font-semibold'>Couse List</h2>
        <span className='flex flex-row justify-around border-b-2'>
          <p>Course</p>
          <p>Credits</p>
          <p>Grade</p>
          <p>Action</p>
        </span>
        {courses?.map((course,index)=>{
            return <div className='flex justify-around'>
            <p>{course.name}</p>
            <p>{course.credit}</p>
            <p>{course.grade}</p>
            <button className='bg-red-500 h-8 w-14 rounded-md text-white' onClick={()=>{onDelete(index)}}>Delete</button>
            </div>
        })}
      </div>
      <div className='font-semibold mt-5 text-center'>
        <span>GPA&nbsp;:&nbsp;&nbsp;{calc().toFixed(2)}</span>
        </div>
      </div>

    </>
  )
}

export default CourseList;
