import pic from "../img/NGO.jpg";
import Footer from "./Footer";
import { NgoSignInForm } from "./NgoSignInForm";


export let NgoSignIn = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${pic})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 1 }}>
                <NgoSignInForm></NgoSignInForm>
            </div>
            <Footer></Footer>
        </div>

    );
}



