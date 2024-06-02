import { Navig } from "./Navig";
import hotel from "../img/hotel.jpg";
import { HorecaLoginForm } from "./Donorloginform";
import Footer from "./Footer";

export let HorecaLogIn = (props) => {
    const context = props.logInType;
    return (
        <div>
            <div style={{ backgroundImage: `url(${hotel})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.9 }}>
                <HorecaLoginForm context={context}></HorecaLoginForm>
            </div>
            <Footer></Footer>
        </div>
    );
}