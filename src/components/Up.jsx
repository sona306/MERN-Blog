import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Up = () => {

    const [signup,setData]=useState(
        {
            "name":"",
            "emailid":"",
            "password":""
        }
    )
    const inputHandler=(event)=>{
        setData({...signup,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(signup)
        axios.post("http://localhost:8088/signup",signup).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") 
                    {
                    alert("Sucessfully added")
                    } 
                else 
                {
                    alert("Failed")
                }
            }
        ).catch()  
    }
  return (
    <div>
        <Nav/>
        <container>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <row>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={signup.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" name='emailid' value={signup.emailid} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="text" className="form-control" name='password' value={signup.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                            <button className="btn btn-primary" onClick={readValue} >Register</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>

                        <button className="btn btn-warning">Back signIN</button>
                        </div>
                    </row>
                </div>
            </div>
        </container>
    </div>
  )
}

export default Up