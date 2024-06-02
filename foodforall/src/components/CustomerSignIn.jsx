import { UserSignInForm } from "./CustomerSignInForm";
import pic from "../img/pet.jpg";
import Footer from "./Footer";

export let UserSignin = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${pic})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.8 }}>
                <UserSignInForm></UserSignInForm>
            </div>
            <Footer></Footer>
        </div>


    );
}