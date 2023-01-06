
  import "../assets/css/style.css"
  import { useState } from "react";
  import {useEffect} from "react";
  import { useNavigate } from "react-router-dom";
  
// import "../../assets/js/script.js";
function Login() {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    
    if (!values.username) {
      errors.username = "Username is required!*";
    }

    if (!values.password ) {
      errors.password = "Password is required*";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };


  let navigate = useNavigate();

  function router() {
    console.log("need to go register");
    navigate("/register");
  }

  return (

    <>
     <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
            {/*Login Form*/}
          <form action="#" className="sign-in-form" onSubmit={handleSubmit}  >
            <h2 className="title">Login</h2>
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
              <input type="password"
              name="password"
               placeholder="Password"
               value={formValues.password}
               onChange={handleChange}
              
              />
            </div>
            <p>{formErrors.password}</p>

            <input type="submit" value="Login"   className="btn solid" />
         </form>

        

        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
       
            <button className="btn transparent" id="sign-up-btn" onClick={router} >
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>

   
      </div>
    </div>
    </>
  );
}

export default Login;