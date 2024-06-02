import pic from "../img/company.jpg";
import { CompanySignInForm } from "./CompanySIgnInForm";
import Footer from "./Footer";

export let CompanySignIn = () => {
    return (
        <div>

            <div style={{ backgroundImage: `url(${pic})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 1 }}>
                <CompanySignInForm></CompanySignInForm>
            </div>
            <Footer></Footer>
        </div>
    );
} 