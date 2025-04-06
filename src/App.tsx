import { useEffect, useState } from 'react'
import './App.css'
import { getUsers, addUser } from './api/axios'
import { user } from './types/user'
function App() {
  const [users, setUsers] = useState <user[]> ([]);

  const [newUser, setNewUser] = useState<user>({
    userid: "",
    name: "",
    age: 0,
    class: ""
  });

  useEffect(() => {
    
    getUsersFromDB();

  }, [])

  const getUsersFromDB = async()=>{
    const response : any = await getUsers();
    console.log("response: ", response);
    setUsers(response);
  }

  const changeHandler = (e: any) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  }

  const submitData = async (e: any) => {
    e.preventDefault();
    console.log("newUser: ", newUser);
    const response : any = await addUser(newUser);

    console.log("response: ", response);
    getUsersFromDB();
  
  }


  return (
    <>
      <div className="container"></div>
        <h1>Save and View Student Data</h1>
        <label htmlFor="studentid">Student ID:</label><br/>
        <input type="text" name="userid" id="studentid" onChange={changeHandler} /><br/>
        
        <label htmlFor="name">Name:</label><br/>
        <input type="text" name="name" id="name" onChange={changeHandler}/><br/>
        
        <label htmlFor="age">Age:</label><br/>
        <input type="text" name="age" id="age" onChange={changeHandler}/><br/>
        
        <label htmlFor="class">Class:</label><br/>
        <input type="text" name="class" id="age" onChange={changeHandler}/><br/>
        


        <br/>
        <input type="submit" id="savestudent" onClick={submitData} value="Save Student Data"/>
        <p id="studentSaved"></p>
        
        <br/>
        <input type="submit" id="getstudents" value="View all Students"/>
        <br/><br/>
        <div id="showStudents">
            <table id="studentTable">
                
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>

                  {users.map((user: any, index) => (
                    <tr key={index}>
                      <td>{user.userid}</td>
                      <td>{user.name}</td>
                      <td>{user.class}</td>
                      <td>{user.age}</td>
                    </tr>
                  ))
                  }
                
                  
                </tbody>
            </table>
        </div>
    </>
    
  )
}

export default App
