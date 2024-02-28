import React, { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { ToggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { ChangeLanguage } from "../utils/langSlice";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {

  const user = useSelector((store) => store.user);
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const showGptSearch=useSelector(store=>store.gpt.showGpt)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(()=>{
    
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate("/browse");
      } else {
        dispatch(removeUser())
        navigate("/");
      }
    });
    return ()=>unsubscribe();
  },[])

  const handleGptButton=()=>{
    dispatch(ToggleGptSearchView());
  }

  const handleLangChange=(e)=>{
    dispatch(ChangeLanguage(e.target.value))
    // console.log(e.target.value)
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2 justify-center md:mx-0">
          {showGptSearch && <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLangChange}>
            {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
          <button className="bg-purple-800 text-white px-4 mx-4 my-2
           rounded-lg" onClick={handleGptButton}>{showGptSearch ? "Home" : "GPT sreach"}</button>
          <button className="font-bold text-white" onClick={handleSignOut}>
          <FaSignOutAlt className="mr-8 ml-8 "/>Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
