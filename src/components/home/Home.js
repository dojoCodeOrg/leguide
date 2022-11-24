import React, { useEffect, useState } from "react";
import { auth,db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "./home.css"
import "../assets/style.css"


import Header from "../header/Header";
import Footer from "../footer/Footer";


function Home() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const [photo, setPhoto] = useState();
    const [name, setName] = useState("");



    // Fetch username by uid
    const fetchUserInfo = async () => {
        try {
            setName(user.displayName);
            setPhoto(user.photoURL);
        } catch (err) {
            console.error(err);
        }
    }; 


    useEffect(() => {
        if (loading) return;
        if (!user) navigate("/landing");

        fetchUserInfo();
        fetchUsersQuestions();
    }, [user, loading]);

    return (
        <>
            <Header />      

            <Footer />
        </>
    )
}

export default Home;