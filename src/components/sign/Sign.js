import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithGoogle,auth } from "../../firebase";
import "./sign.css";
import "../assets/style.css"


function Sign() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    
    useEffect(() => {
      if (loading) return;
      if (user) navigate("/");
    }, [user, loading]);


    return (
        <>
          <div class="sign">
            <section class="px-4 py-8 lg:py-20 text-center">
              <h2 class="text-3xl lg:text-5xl font-medium text-white">Qu'est-ce que vous attendez?</h2>
              <a id="register-bottom-teaser" onClick={signInWithGoogle} class="mt-6 lg:mt-12 px-5 lg:px-11 py-2 lg:py-3 inline-block 		text-xs lg:text-lg leading-4 lg:leading-6 font-medium rounded text-white bg-primary border border-primary hover:bg-primary-light">
              	S'inscrire avec Google
        	    </a>
            </section>
          </div>
        </>    
    )
}

export default Sign;