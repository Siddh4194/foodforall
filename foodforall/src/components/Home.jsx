import homepet from "../img/homepet.jpg";
import logo2 from "../img/homelogo.jpg";
import homefood from "../img/Food.jpg";
import homekids from "../img/kids.jpg";
import bg from "../img/background.jpg"
import Footer from "./Footer";
export let Home = () => {
    return (

        <div>

            <div style={{ backgroundImage: `url(${bg})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 1 }}>
                <div className="container">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">

                            </div>
                            <div className="col-6 mt-4">
                                <img src={logo2} alt="food-for-all" width="600px" />
                            </div>
                            <div className="col-3">

                            </div>

                        </div>
                    </div>
                    <div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="card mt-3">
                                <img className="card-img-top" src={homepet} alt="Pet Image" width="10px" />
                                <div className="card-body">
                                    <h4 className="card-title">What Is Eco-Pet Food?</h4>
                                    <p className="card-text">Three Ways Pet Food Industry Is Going Green</p>
                                    <a href="https://worldbiomarketinsights.com/three-ways-the-pet-food-industry-is-going-green/#:~:text=We%20review%20three%20ways%20the,largest%20sales%20segment%20(38%25).s"
                                        className="card-link">Click Here To Know More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card mt-3">
                                <img className="card-img-top" src={homefood} alt="Food Waste" width="10px" />
                                <div className="card-body">
                                    <h4 className="card-title">Reduce Food Wastage</h4>
                                    <p className="card-text">15 Tips For Reducing Food Wastage!</p>
                                    <a href="https://www.fao.org/fao-stories/article/en/c/1309609/"
                                        className="card-link">Click Here To Know More</a>
                                </div>
                            </div>

                        </div>
                        <div className="col-4">
                            <div className="card mt-3">
                                <img className="card-img-top" src={homekids} alt="Food Waste" width="10px" />
                                <div className="card-body">
                                    <h4 className="card-title">Sad Reality of Food Wastage</h4>
                                    <p className="card-text">Shocking Facts About Food Wastage!!</p>
                                    <a href="https://www.trvst.world/waste-recycling/food-waste/food-waste-facts-statistics/"
                                        className="card-link">Click Here To Know More</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>

    );
}