import logo from "../img/RoundLogo.png";
import logo2 from "../img/SquareLogo.jpg";
export let Navig = () => {

    const [tab, setTab] = ("");

    return (
        <div className="container-fluid bg-warning shadow-sm">
            <div className="container bg-warning">
                <nav className="navbar navbar-expand-lg bg-warning">
                    <div>
                        <img src={logo} alt="Food-For-All" width={"75px"}></img>&emsp;&emsp;
                        <img src={logo2} alt="Food-For-All" width={"235px"}></img>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="home" className="nav-item nav-link"><strong>Home</strong></a>
                            <a href="donorlogin" className="nav-item nav-link"><strong>Hotel Login</strong></a>
                            <a href="customerlogin" className="nav-item nav-link"><strong>Customer Login</strong></a>
                            {/* <a href="companylogin" className="nav-item nav-link"><strong>Company Login</strong></a> */}
                            <a href="ngologin" className="nav-item nav-link"><strong>NGO Login</strong></a>
                            <a href="adminlogin" className="nav-item nav-link"><strong>Admin</strong></a>
                            <a href="aboutus" className="nav-item nav-link"><strong>About Us</strong></a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}



