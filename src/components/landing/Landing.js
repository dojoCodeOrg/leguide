import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import "./landing.css"

function Home() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();


    useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
    });

    return (
        <>
            <section id="hero-baner">
                
            </section>
        </>
    )
}

export default Home;