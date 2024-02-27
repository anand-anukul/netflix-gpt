import React, { useRef, useState } from "react";
import Header from "./Header";
import Validate from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [isSigninForm, setSignInForm] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState();
 

  const toggleSignInForm = () => {
    setSignInForm(!isSigninForm);
  };

  const HandleButtonClick = () => {
    const message = Validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSigninForm) {
      //sign up logic here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //already sign in user

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover md:w-screen" src={BG_URL} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[60%] md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75"
      >
        <h1 className="py-4 font-bold text-3xl">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700 rounded-lg"
            ref={name}
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Id or Phone Number"
          className="p-2 my-4 w-full bg-gray-700 rounded-lg"
          ref={email}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700 rounded-lg"
          ref={password}
        ></input>
        <p className="text-red-500 px-2 font-bold">{ErrorMessage}</p>
        <button
          className="my-6 p-3 w-full bg-red-600 rounded-lg"
          onClick={HandleButtonClick}
        >
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSigninForm ? "New User ? sign up now" : "Already a User ? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
