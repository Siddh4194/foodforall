import './App.css';
import { UserLogin } from './components/CustomerLogin';
import { UserSignin } from './components/CustomerSignIn';
import { HorecaSignIn } from './components/Donorsignin';
import { HorecaLogIn } from './components/Donorlogin';
import { CompanySignIn } from './components/CompanySignIn';
import { CompanyLogin } from './components/CompanyLogin';
import { NGOLogin } from './components/NgoLogin';
import { NgoSignIn } from './components/NgoSignIn';
import { Navig } from './components/Navig';
import { Home } from './components/Home';
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import User from './pages/Customer/Customer';
import Company from './pages/Company/Company';
import AddFoodproduct from './CRUD/FoodProduct/AddFoodproduct';
import EditFoodproduct from './CRUD/FoodProduct/EditFoodproduct';
import Ngo from './pages/NGO/Ngo';
import Donor from './pages/Donor/Donor';
import UserPayment from './pages/Customer/CustomerPayment';
import CompanyRequestTable from './pages/Company/CompanyReqTable';
import DonorCompany from './pages/Donor/DonorCompany';
import AmdinLogin from './components/AmdinLogin';
import Adminpage from './pages/Admin/Adminpage';
import Admindonor from './pages/Admin/Admindonor';
import Adminngo from './pages/Admin/Adminngo';
import Admincustomer from './pages/Admin/Admincustomer';
import Admincompanies from './pages/Admin/Admincompanies';
import UserCard from './pages/Customer/CustomerCard';
import ViewCart from './CRUD/Cart/ViewCart';
import Aboutus from './components/Aboutus';
import MyOrders from './pages/Customer/CustomerOrders';
import NgoHotel from './pages/NGO/NgoHotel';
import CompanyHotel from './pages/Company/CompanyHotel';
import { UserProvider } from './Context/userContext';



function App() {
  return (
    <div className="App">
      <Navig></Navig>
      

      {/* <User></User> */}



    {/* <UserSignin></UserSignin> */}
    {/* <HorecaSignIn></HorecaSignIn> */}
    {/* <HorecaLogIn></HorecaLogIn> */}
    {/* <CompanySignIn></CompanySignIn> */}
    {/* <CompanyLogin></CompanyLogin> */}
    {/* <NGOLogin></NGOLogin> */}
    {/* <NgoSignIn></NgoSignIn> */}
<UserProvider>
<Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='home' element={<Home></Home>}></Route>
      <Route path='companylogin' element={<CompanyLogin></CompanyLogin>}></Route>
      <Route path='companysignin' element={<CompanySignIn></CompanySignIn>}></Route>
      <Route path='donorlogin' element={<HorecaLogIn logInType={false}></HorecaLogIn>}></Route>
      <Route path='donorsignin/:type' element={<HorecaSignIn></HorecaSignIn>}></Route>
      <Route path='userlogin' element={<UserLogin></UserLogin>}></Route>
      <Route path='usersignin' element={<UserSignin></UserSignin>}></Route>
      <Route path='ngologin' element={<NGOLogin></NGOLogin>}></Route>
      <Route path='ngosignin' element={<NgoSignIn></NgoSignIn>}></Route>
      <Route path='customerlogin' element={<HorecaLogIn logInType={true}></HorecaLogIn>}></Route>
      <Route path='addfoodproduct' element={<AddFoodproduct></AddFoodproduct>}></Route>
      <Route path='/companypage' element={<Company></Company>}></Route>
      <Route path='editfoodproduct/:fpid/:coid/:coname/:coemail/:cophone/:coaddress/:cityname' element={<EditFoodproduct></EditFoodproduct>}></Route>
      <Route path='userpage' element={<User></User>}></Route>
      <Route path='/ngo' element={<Ngo></Ngo>}></Route>
      <Route path='donor/:type' element={<Donor></Donor>}></Route>
      <Route path='userpayment/:fpid/:cid/:cname/:cphone/:cemail/:cityname' element={<UserPayment></UserPayment>}></Route>
      <Route path='companyrequesttable/:coid/:coname/:coemail/:cophone/:coaddress/:cityname' element={<CompanyRequestTable></CompanyRequestTable>}></Route>
      <Route path='donorcompany' element={<DonorCompany></DonorCompany>}></Route>
      <Route path='adminlogin' element={<AmdinLogin></AmdinLogin>}></Route>
      <Route path='adminpage/:aid/:fname/:aemail/:aphone' element={<Adminpage></Adminpage>}></Route>
      <Route path='adminngo/:aid/:fname/:aemail/:aphone' element={<Adminngo></Adminngo>}></Route>
      <Route path='admindonor/:aid/:fname/:aemail/:aphone' element={<Admindonor></Admindonor>}></Route>
      <Route path='admincompany/:aid/:fname/:aemail/:aphone' element={<Admincompanies></Admincompanies>}></Route>
      <Route path='admincustomer/:aid/:fname/:aemail/:aphone' element={<Admincustomer></Admincustomer>}></Route>
      <Route path='usercard/:fpid/:cid/:cname/:cphone/:cemail/:cityname' element={<UserCard></UserCard>}></Route>
      <Route path='viewcart/:cid/:cname/:cphone/:cemail/:cityname' element={<ViewCart></ViewCart>}></Route>
      <Route path='aboutus' element={<Aboutus></Aboutus>}></Route>
      <Route path='myorders/:cid/:cname/:cphone/:cemail/:cityname' element={<MyOrders></MyOrders>}></Route>
      <Route path='ngohotel/:donorID' element={<NgoHotel></NgoHotel>}></Route>
      <Route path='companyhotel/:rname/:remail/:rphone/:raddr/:coid/:coname/:coemail/:cophone/:coaddress/:cityname' element={<CompanyHotel></CompanyHotel>}></Route>
    </Routes>
</UserProvider>
    </div>
  );
}

export default App;
