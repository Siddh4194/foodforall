import { UserloginForm } from "./CustomerloginForm";
import pic from "../img/pet.jpg";
import Footer from "./Footer";

export let UserLogin = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${pic})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 0.8 }}>
                <UserloginForm></UserloginForm>
            </div>
            <Footer></Footer>
        </div>
    );
}