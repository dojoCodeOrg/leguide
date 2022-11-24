import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import "./landing.css"
import "../assets/style.css"

import Header from "../header/Header";
import Footer from "../footer/Footer";

function Home() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    function switchToSign() {
        window.location = "/sign";
    }


    useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
    });

    return (
        <div>            

            <Header/>

            <main>
                <section class="bg-container py-6 lg:py-20">
                    <div class="max-w-screen-xl mx-auto px-4 pt-4 lg:py-5">
                        <div class="md:flex justify-between items-center">
                            <div class="text-center md:text-left lg:w-5/12">
                                <h1 class="text-4xl lg:text-7xl tracking-tight font-medium text-primary">
                                    Guide 
                                    <span class="md:block font-light text-gray-800">Du transport en commun d'Abidjan</span>
                                </h1>                        
                                <a id="register-teaser" href="https://kol.jumia.com/register" class="mt-4 lg:mt-8 px-5 lg:px-11 py-2 lg:py-3 inline-block text-xs lg:text-lg leading-4 lg:leading-6 font-medium rounded text-white bg-primary hover:bg-primary-dark">
                                Ouvrire
                            </a>
                            </div>
                            <div class="sm:text-center pt-6 md:pt-0">
                                <img class="inline-block" src="assets/images/jumia-kol-program.svg" alt="Jumia KOL">
                            </div>
                        </div>
                    </div>
                </section>
            
                <section class="bg-primary px-4 py-8 lg:py-20 text-center">
                    <h2 class="text-3xl lg:text-5xl font-medium text-white">Qu'est-ce que vous attendez?</h2>
                    <a id="register-bottom-teaser" href="https://kol.jumia.com/register" class="mt-6 lg:mt-12 px-5 lg:px-11 py-2 lg:py-3 inline-block text-xs lg:text-lg leading-4 lg:leading-6 font-medium rounded text-primary hover:text-secondary bg-white">
                    Essayer maintenat
                </a>
                </section>
            </main>

            <Footer/>
        
        </div>
    )
}

export default Home;