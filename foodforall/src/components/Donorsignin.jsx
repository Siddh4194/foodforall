import { useParams } from "react-router-dom";
import hotel from "../img/hotel.jpg";
import { HorecaSignInForm } from "./Donorsigninform";
import Footer from "./Footer";

export let HorecaSignIn = () => {
    const {type} = useParams(); 
    console.log(type);
    return (
        <div>
            <div style={{ backgroundImage: `url(${hotel})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9 }}>
                <HorecaSignInForm context={type === 'Customer' ? true : false }></HorecaSignInForm>
            </div>
            <Footer></Footer>
        </div>
    );
}   