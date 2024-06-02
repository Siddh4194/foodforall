import React from 'react';
import pic from "../img/aboutus2.png";
import bg from "../img/aboutusbg.jpg";
import Prashant from "../img/Prashant.jpg";
import Omkar from "../img/Omkar.jpg";
import Atharv from "../img/Atharv.jpg";
import Pradip from "../img/Pradip.jpg";
import Rushikesh from "../img/Rushikesh.jpg";
import kid from "../img/happypoorkids.jpeg";
import Footer from './Footer';

export default function Aboutus() {
    return (
        <div>
            {/* <div style={{ backgroundImage: `url(${pic})`, height: "36vh", backgroundRepeat: "no-repeat", backgroundSize: "contain", opacity: 1 }}></div>

            <div style={{ backgroundImage: `url(${bg})`, height: "350vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", opacity: 1 }}>

                <div>
                    <div>
                        <div className="container ">
                            <div className="row">
                                <div className="col-0">

                                </div>
                                <div className="col-12 mt-4">
                                    <h1 className="text-warning bg-dark" style={{ fontFamily: "cursive" }}>Our Idea</h1>
                                </div>
                                <div className="col-0">

                                </div>

                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="card">
                            <div className="card-body">
                                <div className='row'>

                                    <div className='col-6'>
                                        <div style={{ backgroundImage: `url(${kid})`, height: "42vh", backgroundRepeat: "no-repeat", backgroundSize: "contain", opacity: 1 }}></div>
                                    </div>
                                    <div className='col-6'>
                                        <p className="card-text" style={{ fontFamily: "cursive", textAlign: "left", fontSize: "20px" }}>In today's date there are several NGO's that are helping poor and needy people by providing them foods.
                                            But it becomes quite hard for a NGO to find for the source of food, which is HOERCA (Hotel, Restaurent, Cafe)!<br></br>
                                            So we came up with the technology that helps NGO to easily connect with many restaurents, hotels and cafes with
                                            just one single click!! Apart from this, our technology also helps pet-food companies to connect with the restaurents
                                            so that they can collect food wastes that can be converted into fresh pet foods!! This technology not only
                                            helps NGO's and Pet Food Companies but also helps hotels, restaurents and cafes to manage the food
                                            waste in a very eco-friendly manner!</p>
                                    </div>
                                    <div className='col-2'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-0">

                                </div>
                                <div className="col-12 mt-3 text-warning" style={{ fontFamily: "cursive" }}>
                                    <h1 className="bg-dark">Team Members</h1>
                                </div>
                                <div className="col-0">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 mt-4">
                                    <div className="card">
                                        <div>
                                            <div className="container">
                                                <div className="row mt-1">
                                                    <div className="col-12">
                                                        <img className="card-img-top" src={Prashant} alt="" style={{ width: "250px" }} />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <h6 className="card-title">PRASHANT RAGHURAM PUJARI</h6>
                                            <p className="card-text" >prashantpujari258@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 mt-4" >
                                    <div className="card" >
                                        <div>
                                            <div className="container">
                                                <div className="row mt-1">
                                                    <div className="col-12">
                                                        <img className="card-img-top" src={Omkar} alt="" style={{ width: "250px" }} />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <h6 className="card-title">OMKAR SUNIL MORE</h6>
                                            <p className="card-text">moreomkar815@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <div className="col-12 mt-4">
                                        <div className="card">
                                            <div>
                                                <div className="container">
                                                    <div className="row mt-1">
                                                        <div className="col-12">
                                                            <img className="card-img-top" src={Pradip} alt="" style={{ width: "250px" }} />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                <h6 className="card-title">MUNDHE PRADIP GOVIND</h6>
                                                <p className="card-text" >Pradipmundhe97@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="col-12 mt-4">
                                        <div className="card">
                                            <div>
                                                <div className="container">
                                                    <div className="row mt-1">
                                                        <div className="col-12">
                                                            <img className="card-img-top" src={Atharv} alt="" style={{ width: "250px" }} />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                <h6 className="card-title">ATHARV APPASAHEB MORE</h6>
                                                <p className="card-text" >moreat136@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="col-12 mt-4">
                                        <div className="card">
                                            <div>
                                                <div className="container">
                                                    <div className="row mt-1">
                                                        <div className="col-12">
                                                            <img className="card-img-top" src={Rushikesh} alt="" style={{ width: "250px" }} />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                <h6 className="card-title">RUSHIKESH KIRAN PAWAR</h6>
                                                <p className="card-text" >rushikeshp302@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div>
                        <div className="container mt-4">
                            <div className="row">
                                <div className="col-12 bg-dark text-warning" style={{ fontFamily: "cursive" }}>
                                    <h1>Our Guide</h1>
                                </div>

                            </div>
                        </div>
                        <div className="mt-3">
                        <div className="row">
                            <div className="col-4">
                            </div>
                            <div className="col-4">
                                <div className="card border-primary rounded">
                                    <div className="card-body">
                                        <h4 className="card-title">Ms. Surabhi Dwivedi</h4>
                                        <p className="card-text">surabhi@cdac.in</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-4">

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row mt-4">
                                <div className="col-12 bg-dark text-warning" style={{fontFamily:"cursive"}} >
                                    <h1>Special Thanks To</h1>
                                </div>
                                <div className="mt-3 bg-light text-dark p-2">
                                    <p style={{fontFamily:"cursive", fontSize:"19px"}}>
                                        A project of such comprehensive coverage cannot be prepared without help from
                                        numerous sources. We gratefully acknowledge the generous help of <b>Ms Surabhi Dwivedi </b>
                                        for her inspiration, guidance and assistance at all stages of this project work. We
                                        owe her a great debt of gratitude as without her support this work would not have
                                        been completed, indeed. Also we feel privileged to have <b>Dr. Mohammed Misbahuddin </b> as head of 
                                        <b> C-DAC Electronic City, Bangalore. </b> His enthusiasm and motivation were invaluable for us.
                                        We are equally indebted to all the staff members of PG-DAC Department <b>C-DAC Electronic
                                        City, Bangalore. </b> Last but not the least we are very thankful to our <b>Parents </b> for their
                                        financial and moral support. Finally, we would also like to gratify to our friends and 
                                        family for their constant support and motivation. 
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 ">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-warning bg-dark" style={{fontFamily:"cursive"}}>
                                <h1>Future Scope</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">BIG DATA</h4>
                                            <p className="card-text" style={{fontFamily:"cursive"}}>We have all heared the term "big data" and what it can do for 
                                            Food Waste Management System. As technology advances, big data and its application in
                                            everyday life will also be used.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">USER DONATION INVOLVEMENT</h4>
                                            <p className="card-text" style={{fontFamily:"cursive"}}>
                                                What if we even let the individual user to take advantage of this food waste
                                                management system! In future we may add the technology for individual user to
                                                donate food via which user can also get great discounts through his/her donations. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">INTERNET OF THINGS</h4>
                                            <p className="card-text" style={{fontFamily:"cursive"}}>With the Internet of Things, our technology will 
                                            manage it's User, NGO, Donor and Companies more conveniently and effectively,
                                            with increased safety and better service </p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-12 bg-dark text-warning" style={{fontFamily:"cursive"}}>
                                    <h1>What Will Be The Future of Food Waste Management Technology</h1>
                                </div>
                                
                            </div>
                        </div>
                        <div className="container mt-4">
                            <div className="row">
                                <div className="col-12 bg-light text-dark" style={{fontFamily:"cursive", fontSize:"25px"}}>
                                    <p>
                                        The web based food waste management system will soon be able to streamline the
                                        administrative process of food sharing! Instead of physically going and asking 
                                        for food requests, this software technology will allow NGO and 
                                        companies to directly connect with donors with just one click! This technology
                                        will not only save food but will also save much amount of time and money of its user.                                    
                                    </p>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer> */}

        </div>
    )
}
