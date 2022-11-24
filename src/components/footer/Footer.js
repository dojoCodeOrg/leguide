import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./footer.css"
import "../assets/style.css"


function Footer() {
    const [user, loading] = useAuthState(auth);

    return (
        <>
            <footer>
                <div class="max-w-screen-xl mx-auto px-4 py-6 lg:py-12">
                    <div class="flex flex-col md:flex-row justify-between">
                        <a href="/" target="_blank">LeGuide</a>
                        <div class="flex justify-between md:gap-20 mt-4 md:mt-0">
                            <div>
                                <p class="lg:text-xl font-medium mb-4">Nous contacter</p>
                                <a href="mailto: hamedcuenca5@gmail.com" class="text-gray-400 font-roboto">Email</a>
                            </div>                   
                            <div>
                                <p class="lg:text-xl font-medium mb-4">Nous suivre</p>
                                <a href="https://www.youtube.com/@yayahc" target="_blank">
                            <span class="hidden lg:inline text-gray-400">Youtube</span>
                            </a>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-400 font-roboto text-xs mt-4 md:-mt-8">Copyright © 2021 - DojoCode</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;