import { useFormik } from 'formik';
import { useState } from 'react';
import './App.css';

function App() {
  const [inputFields, setInputFields] = useState([
    {firstName: "", lastName: "", email: "", password: "", confirmPassword: ""}
  ])
  const formik = useFormik({
    initialValues:{
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values))
    }
  })

  const handleFormChange = (index, event) => {
    let data = [...inputFields]
    data[index][event.target.name] = event.target.value
    setInputFields(data)
  }
  const addFields = () => {
    let newfield = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
    setInputFields([...inputFields, newfield])
  }
  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields)
  }
  const removeFields = (index) => {
    let data = [...inputFields]
    data.splice(index, 1)
    setInputFields(data)
  }
 
  return (
    <>
    <div className='container d-flex flex-wrap'>
      {inputFields.map((input, index) => (
        <div className='form'>
          <p>
              <label htmlFor="firstName">First Name</label><br/>
              <input
                  className="input"
                  type="text"
                  name="firstName"
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName || input.firstName}
                  onChange={event => handleFormChange(index, event)}
              />
          </p>
          <p>
              <label htmlFor="lastName">Last Name</label><br/>
              <input
                  className="input"
                  type="text"
                  name="lastName"
                  onChange={event => handleFormChange(index, event)}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName || input.lastName}
              />
          </p>
          <p>
              <label htmlFor="email">Email</label><br/>
              <input
                  className="input"
                  type="email"
                  name="email"
                  onChange={event => handleFormChange(index, event)}
                  onBlur={formik.handleBlur}
                  value={formik.values.email || input.email}
              />
          </p>
          <p>
              <label htmlFor="password">Password</label><br/>
              <input
                  className="input"
                  type="password"
                  name="password"
                  onChange={event => handleFormChange(index, event)}
                  onBlur={formik.handleBlur}
                  value={formik.values.password || input.password}
              />
          </p>
          <p>
              <label htmlFor="confirmPassword">Confirm Password</label><br/>
              <input
                  className="input"
                  type="password"
                  name="confirmPassword"
                  onChange={event => handleFormChange(index, event)}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword || input.confirmPassword}
              />
          </p>
          <button onClick={() => removeFields(index)} className="delete">Remove</button>
        </div>
      ))}
    </div>
    <div className='container mb-5 mt-5'>
      <button onClick={addFields} className="add">Add more...</button>
      <button
        onClick={submit}
        type="submit"
        className='submit'
      >Submit</button>
    </div>
    </>
  );
}

export default App;
