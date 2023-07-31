import React, { useState } from 'react'

//import react-router
import { useNavigate } from 'react-router-dom'

//import componenet
import FormField from './formField'

//import axios
import axios from 'axios'

//import toast
import { toast } from 'react-toastify';

function Auth() {
  //navigate
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const inputs = [
    {
      id: 1,
      className: "col-lg-4  col-sm-8 input-text  form-control-lg mt-4 p-4",
      type: "email",
      placeholder: "Email",
      aria_label: "default input example",
      name: "email",
      errorMsg: "It should be valid email address",
      required: true,
    },
    {
      id: 2,
      className: "col-lg-4 col-sm-8 input-text  form-control-lg mt-5 p-4",
      type: "password",
      placeholder: "Password",
      aria_label: "default input example",
      name: "password",
      errorMsg: "Enter valid password",
      pattern: "^{0-3}$",
      required: true,
    },
  ]

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let passData = {
      email: data.email,
      password: data.password
    }
    axios({
      method: 'post',
      url: `https://reqres.in/api/login`,
      data: passData,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
      .then((data) => {
        if (data.data.token) {
          localStorage.setItem('userToken', data?.data?.token)
          toast.success("user login successfully !!")
          navigate('/userlist')
        }
      })
      .catch((err) => {
        console.log(err)
        toast.error("please enter valid credential");
      });
  }



  return (
    <div >
      <div className='main-auth-div'>
        <div className='left-div'>
          <div style={{ width: "66%" }}>
            <h1 style={{
              fontSize: "75px", color: "#FFFFFF", margin: 0
            }}>your space to  be social</h1>
            <p style={{ color: "#FFFFFF", fontSize: "28px", fontWeight: 700 }}>Lorem ipsum dolor sit amet, consectetur adip scing elit</p>
            <div className='btn-div'>
              <button className='lear-btn'>Learn more</button>
              <button className='feature-btn'>Our features</button>
            </div>
          </div>
        </div>
        <div className='right-div'>
          <div>
            <h1 style={{ color: "#794393" }}>Welcome back!</h1>
            <form onSubmit={handleSubmit}>
              {inputs.map((input, id) => {
                return (
                  <>
                    <div key={id}>
                      <FormField key={input.id} {...input} value={data[input.name]} onChange={onChange} />
                    </div>
                  </>
                )
              })}
              <div className="form-group">
                {/* <button
                  type='submit'
                >
                  <span>Login</span>
                </button> */}
                <button type='submit' className='login-btn'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="col-md-12">
        <div className="card card-container">
          
        </div>
      </div> */}
      {/* <ToastContainer /> */}
    </div >
  )
}

export default Auth