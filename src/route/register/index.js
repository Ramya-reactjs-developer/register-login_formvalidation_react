
  import "../../assets/css/style.css"
  import { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  
// import "../../assets/js/script.js";
function Register() {
  const initialValues = { username: "", email:"" ,gender:"",dob:"" ,password: "" ,cpassword:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    //name
    if (!values.username) {
      errors.username = "Username is required!*";
    }
    //mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
        errors.email = "Email is required!*";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
     //dob
      if (!values.dob) {
        errors.dob = "DoB is required!*";
      }
      //gender

      if (!values.gender) {
        errors.gender = "Gender is required!*";
      } 
      //password

    if (!values.password) {
      errors.password = "Password is required*";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
       //cpassword
    if (!values.cpassword) {
      errors.cpassword = " Conform Password is required*";
    } else if (values.password.length < 4) {
      errors.cpassword = " Conform Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.cpassword = "Conform Password cannot exceed more than 10 characters";
    }
    //password mismatch
    if(values.password!==values.cpassword)
    {
    alert("password mismatch");
    }
     console.log(formValues)
    return errors;
  };


  let navigate = useNavigate();

  function router() {
    console.log("need to go login");
    navigate("/");
  }

  return (

    <>
     <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
            {/*Register Form*/}
          <form action="#" className="sign-in-form" onSubmit={handleSubmit}>
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text"          
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
              
              />
            </div>
            <p>{formErrors.username}</p>
           
            <div className="input-field">
            <i className="fas fa-lock"></i>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>

          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={formValues.dob}
              onChange={handleChange}
            />
          </div>


          <p>{formErrors.dob}</p>


          <div >
            <label>Female
              <input 
                type="radio"
                name="gender"
                value="Female" 
                onChange={handleChange}
      
              />
            </label>
   
            <label>Male
              <input 
                type="radio"
                name="gender"
                value="Male" 
                onChange={handleChange}
              
              />
            </label>
            
          </div>
          
          <p>{formErrors.gender}</p>


           <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password"
              name="password"
               placeholder="Password"
               value={formValues.password}
               onChange={handleChange}
              
              />
            </div>
            <p>{formErrors.password}</p>


            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password"
              name="cpassword"
               placeholder="Conform Password"
               value={formValues.cpassword}
               onChange={handleChange}
              
              />
            </div>
            <p>{formErrors.cpassword}</p>

            <input type="submit" value="Register"   className="btn solid" />
         </form>

         <b>{JSON.stringify(formValues)}</b>

        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
       
            <button className="btn transparent" id="sign-up-btn" onClick={router} >
              Sign in
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>

   
      </div>


   
   </div>

</>
  );
}

export default Register;