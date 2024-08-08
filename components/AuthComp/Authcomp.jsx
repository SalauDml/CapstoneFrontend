"use client";
import React from "react";
import styles from "./authcomp.module.css";
import { useState } from "react";
import { redirect } from "next/dist/server/api-utils";

function Authcomp() {
  const [signup, setSignup] = useState("");
  const [login, setLogin] = useState("selected");
  const[formdata,setFormdata] = useState({firstname:'',lastname:'',password:'',email:'',username:''})

  let signupcn = "";
  let logincn = "selected";

  async function handleSubmit(event) {
    event.preventDefault();
    try{
      const response =  await fetch(`http://127.0.0.1:8000/user/register`,{
        method : 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)

      });
      if(response.ok){
        console.log("Form submitted successfully")

      }
      else{
        console.log("form submittted unsuccessfully")
      }
    }
    catch(error){
      console.error("Error submitting form",error);
      
    }
    console.log(formdata);

  }


  
  function onChange(e){
    const {name,value} = e.target;
    setFormdata(
      {
        ...formdata,
        [name]:value
      }
    )


  }

  function onCLick(event) {
    if (event.target.innerHTML == "Sign Up") {
      signupcn = "selected";
      setSignup(`${signupcn}`);
      logincn = "";
      setLogin(`${logincn}`);
      // console.log(signupcn)
    } else {
      if (login == "selected") return;
      logincn = "selected";
      signupcn = "";
      setSignup(`${signupcn}`);
      setLogin(`${logincn}`);

      return;
    }
  }

  if (signup == "selected") {
    return (
      <div className={styles.compCtn}>
        <div className={styles.headingCtn}>
          <h2 onClick={onCLick} className={styles[signup]}>
            Sign Up
          </h2>
          <h2 onClick={onCLick} className={styles[login]}>
            Log in
          </h2>
        </div>
        <div className={styles.signupFormCtn}>
          <form className={styles.signupform} action="" method="post" onSubmit={handleSubmit}>
            <div className={styles.signupforminputctn}>
              <label htmlFor="firstname"> First Name</label>
              <input type="text" name="firstname" onChange={onChange}/>
            </div>
            <div className={styles.signupforminputctn}>
              <label htmlFor="lastname"> Last Name</label>
              <input type="text" name="lastname" onChange={onChange} />
            </div>
            <div className={styles.signupforminputctn}>
              <label htmlFor="username"> Username</label>
              <input type="text" name="username" onChange={onChange} />
            </div>
            <div className={styles.signupforminputctn}>
              <label htmlFor="password"> Password</label>
              <input
                type="text"
                name="password"
                onChange={onChange}
                
                // placeholder="Username"
              />
            </div>
            <div className={styles.signupforminputctn}>
            <label htmlFor="email"> Email</label>
            <input type="email" name="email" id="signupemailfield"  onChange={onChange}/>

            </div>
            

            <button id={styles.signupBtn} type="submit" >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.compCtn}>
      <div className={styles.headingCtn}>
        <h2 onClick={onCLick} className={styles[signup]}>
          Sign Up
        </h2>
        <h2 onClick={onCLick} className={styles[login]}>
          Log in
        </h2>
      </div>
      <div className={styles.loginFormCtn}>
        <form className={styles.loginform} action="" method="post">
          <label htmlFor="username"> Username</label>
          <input
            type="text"
            name="username"
            id="loginUsernameField"
            // placeholder="Username"
          />
          <label htmlFor="password"> Password</label>
          <input
            type="text"
            name="password"
            id="loginPasswordField"
            // placeholder="Username"
          />
          <button id={styles.loginBtn} type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Authcomp;
