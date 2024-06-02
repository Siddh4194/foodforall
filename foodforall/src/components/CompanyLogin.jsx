import pic from "../img/company.jpg";
import { CompanyLoginForm } from "./CompanyLoginForm";
import Footer from "./Footer";

export let CompanyLogin = () => {
    return (
        <div>

            <div style={{ backgroundImage: `url(${pic})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 1 }}>
                <CompanyLoginForm></CompanyLoginForm>
            </div>
            <Footer></Footer>
        </div>
    );
} 