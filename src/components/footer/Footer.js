import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./footer.css"

function Footer() {
    const [user, loading] = useAuthState(auth);

    return (
        <>
     
        </>
    )
}

export default Footer;