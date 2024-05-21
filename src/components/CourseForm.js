import React, { useState } from 'react'

const CourseForm = ({onAdd}) => {
    const [name,setName]=useState('');
    const [credit,setCredit]=useState(0);
    const [grade,setGrade]=useState('');

    const handleAdd=()=>{
        if(name && credit >0 && grade){
            const newcourse={name,credit,grade};
            onAdd(newcourse);
            setName('');
            setCredit(0);
            setGrade('');
        }
        else{
            alert("please enter valid course details");
        }
    }
  return (
    <div className='flex flex-col items-center'>
      <div className='flex gap-2'>
        <p>Course</p>
        <input className='border-2' type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      </div>
      <div  className='flex gap-2'>
        <p>Credit</p>
        <input  className='border-2'  type='number' value={credit} onChange={(e)=>{setCredit(e.target.value)}}/>
      </div>
      <div  className='flex gap-2'>
        <p>Grade</p>
        <select  className='border-2'  value={grade} onChange={(e)=>{setGrade(e.target.value)}}>
            <option value={''}>select</option>
            <option value={'O'}>O</option>
            <option value={'A+'}>A+</option>
            <option value={'A'}>A</option>
            <option value={'B+'}>B+</option>
            <option value={'B'}>B</option>
            <option value={'C'}>C</option>
        </select>
      </div>
      <div>
        <button className='h-8 bg-green-400 w-10 text-white rounded-md' onClick={handleAdd}>Add</button>
      </div>
    </div>
  )
}

export default CourseForm
