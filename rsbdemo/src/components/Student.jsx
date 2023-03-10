import React, {useState} from 'react'
import { useEffect } from 'react'



function Student() {

  const [name,setName] = useState('')
  const [address,setAddress] = useState('')
  const [students,setStudents]=useState([])
  const handleClick=(e)=> {
    e.preventDefault()
    const student={name,address}
    console.log(student)
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type" : "application/json"},
      body:JSON.stringify(student)
    }).then(()=> {
      console.log("New Student added")
    })
  }

  useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    }
    )
  },[])

  return (
    <div>
      <h1>Add Student</h1>
      <div className="container" style={{"width": "400px"}} >
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Address</label>
            <input type="text" className="form-control" id="exampleInputPassword1" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
        </form>
      
      </div>
      <h1 className='mt-3'>Enrolled Students</h1>
      {students.map(student=>(
        <div key={student.id}>
          Id:{student.id}
          Name:{student.name}
          Address:{student.address}
        </div>
      ))}
    </div>
  )
}

export default Student