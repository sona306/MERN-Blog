import axios from 'axios'
import React, { useState } from 'react'

const Sign = () => {
    const [signin,setData]=useState(
        {
            "emailid":"",
            "password":""
        }
    )
    const inputHandler=(event)=>{
        setData({...signin,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(signin)
    }
  return (
    <div>
                <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">EmailId</label>
                            <input type="text" className="form-control" name='emailid' value={signin.emailid} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name='password' value={signin.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                            <button className="btn btn-success" onClick={readValue}>SignIn</button>
                        </div>
                        <div className="col col-12 col-sm-12 md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                        <button className="btn btn-primary">SignUp</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sign