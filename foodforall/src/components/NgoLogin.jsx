import pic from "../img/NGO.jpg";
import Footer from "./Footer";
import { NgoLoginForm } from "./NgoLoginForm";

export let NGOLogin = () => {
    return (
        <div>

            <div style={{ backgroundImage: `url(${pic})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 1 }}>
                <NgoLoginForm></NgoLoginForm>
            </div>
            <Footer></Footer>
        </div>
    );
} 