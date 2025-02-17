import React, {useState, useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom'
import Header from './components/WebHeaderAndFooter/Header'
import Footer from './components/WebHeaderAndFooter/Footer'
import { NavLink } from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import Analytics from './components/UserData/Analytics'
import Connect from "./components/UserData/Connect";
import Account from "./components/UserData/Account";
import MyProduct from "./components/UserData/MyProduct";
import Spacer from './components/Spacer'
import css from './css/styles.css'

//-----------------------------------------------------------------------
//           SIDEBAR COMPONENT
//-----------------------------------------------------------------------

const Sidebar = ({ setIsDashboard, setIsAnalytics, setIsAccount, setIsProduct, setIsConnect}) => {

    function LoadAnalytics(){
            setIsDashboard(false);
            setIsAccount(false);
            setIsConnect(false);
            setIsProduct(false);
            setIsAnalytics(true);
    }
    function LoadDashboard(){
            setIsAnalytics(false);
            setIsAccount(false);
            setIsConnect(false);
            setIsProduct(false);
            setIsDashboard(true);
    }
    function LoadAccount(){
        setIsDashboard(false);
        setIsAnalytics(false);
        setIsConnect(false);
        setIsProduct(false);
        setIsAccount(true);
    }

    function LoadProduct(){
        setIsDashboard(false);
        setIsAnalytics(false);
        setIsAccount(false);
        setIsConnect(false);
        setIsProduct(true);
    }

    function LoadConnect(){
        setIsDashboard(false);
        setIsAnalytics(false);
        setIsAccount(false);
        setIsProduct(false);
        setIsConnect(true);
    }

    return (
        <div style={{ display: 'flex', overflow: 'scroll initial' }}>
            
            <CDBSidebar textColor="#fff" backgroundColor="#333">

                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <div style={{marginLeft: "5px", marginTop: "23px"}}>Menu</div>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                {/* ------- Dashboard -------- */}
                    <NavLink exact to="" activeClassName="activeClicked">
                        <div onClick={()=> LoadDashboard()}><CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem></div>
                    </NavLink>

                {/* ------- My Account -------- */}
                    <NavLink exact to="" activeClassName="activeClicked">
                        <div onClick={()=> LoadAccount()}><CDBSidebarMenuItem icon="database">My Account</CDBSidebarMenuItem></div>
                    </NavLink>

                {/* ------- My Product -------- */}
                    <NavLink exact to="" activeClassName="activeClicked">
                        <CDBSidebarMenuItem onClick={()=> LoadProduct()} icon="shop" style={{marginLeft: "9px"}}>
                            <span style={{marginLeft: "8px"}}>My Products</span></CDBSidebarMenuItem>
                    </NavLink>

                {/* ------- Profile -------- */}
                    <NavLink exact to="/profile" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                    </NavLink>

                {/* ------- Analytics -------- */}
                    <NavLink exact to="" activeClassName="activeClicked">
                        <div onClick={()=> LoadAnalytics()}><CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem></div>
                    </NavLink>
                    <NavLink exact to="" activeClassName="activeClicked">
                        <div onClick={()=> LoadConnect()}><CDBSidebarMenuItem style={{marginLeft: "9px"}} icon="comments"><span style={{marginLeft: "8px"}}>Connect</span></CDBSidebarMenuItem></div>
                    </NavLink>
                    <br></br>
                {/* ------- Upload Product -------- */}
                    <NavLink exact to="/post" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="cloud-upload"> &nbsp; <strong>Upload Product</strong></CDBSidebarMenuItem>
                    </NavLink>

                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    )
}


const DashHome = () => {
    //Initialize user
    const user = JSON.parse(localStorage.getItem('currentUser'));

    return(
        <div>
            <h1 style={{textAlign: "center", marginBottom : "40px"}}> <strong>Welcome back, {user.name}! </strong></h1>
            <p style={{textAlign: "center", marginBottom: "35px", paddingBottom:"30px", margin:"25px"}}>
                Our mission is to help entrepreneurs and businesses grow with confidence.
                We do this with a simple and friendly platform, expert support from real
                people when it’s needed, and access to corporate-level benefits that
                ensure people feel secure and valued.
            </p>

                <iframe width="634" height="357" frameBorder="0" align="center"
                        src="https://www.youtube.com/embed/3RHm_69c_4M"
                        title="Using Justworks: A Quick Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="d-flex mx-auto"
                ></iframe>


            <div className="container-tips" style={{paddingTop:"20px"}}>
                <div className="row">
                    <div className="col-sm">
                <i className="fa-solid fa-tag" id="iconz"></i>
                    </div>
                    <div className="col-sm">
                <i className="fa-solid fa-calculator" id="iconz"></i>
                    </div>
                    <div className="col-sm">
                <i className="fa-solid fa-regular fa-book" id="iconz"></i>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm" id="boldDash"> Great Value </div>
                    <div className="col-sm" id="boldDash"> Powerful Tools </div>
                    <div className="col-sm" id="boldDash"> Support and Education </div>
                </div>

                <div className="row">
                    <div className="col-sm" id="itemDash">
                        List your first item for just $1.00—you only pay transaction,
                        payment processing, and offsite advertising fees when you make a sale.</div>
                    <div className="col-sm" id="itemDash">
                        Our tools and services make it easy to manage,
                        promote and grow your business.</div>
                    <div className="col-sm" id="itemDash">
                        Reach out to Justwork support specialists anytime
                        you need a hand, and get tips on running a successful
                        shop in our Seller Handbook.</div>
                </div>
            </div>



            <i ></i>
            <i ></i>
            <i ></i>
        </div>
    )
}
function Dashboard(){

    //-----------------------------------------------------------------------
    //           VARIABLES
    //-----------------------------------------------------------------------

    //Initialize user data
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [name, setName] = useState();

    // Load Different tabs
    const [isDashboard, setIsDashboard] = useState(true);
    const [isAnalytics, setIsAnalytics] = useState(false);
    const [isAccount, setIsAccount] = useState(false);
    const [isProduct, setIsProduct] = useState(false)
    const [isConnect, setIsConnect] = useState(false);


    // Redirect back to LOGIN Page
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    };

    //-----------------------------------------------------------------------
    //           EXECUTIONS
    //-----------------------------------------------------------------------
    
    // Redirect back to LOGIN if not logged in
    useEffect(() => {
        if(!(user) || user === -1){
            navigateToLogin();}    
    }, []);

      //Retrieve info from userdata
      useEffect(() => {
        setName(user.name);
    }, []);
    
    //-----------------------------------------------------------------------
    //           RETURN
    //-----------------------------------------------------------------------
    
    return(
        <>
            <Header />
            <div className="container-default w-100" >
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "20px"}} className="font">
                    <Sidebar setIsDashboard={setIsDashboard} setIsAnalytics={setIsAnalytics} setIsAccount={setIsAccount} setIsProduct={setIsProduct} setIsConnect={setIsConnect}/>
             <div className="w-100 mx-5">
                        <Spacer />
                        {isDashboard && <DashHome/>}
                        {isAnalytics && <Analytics/>}
                        {isAccount && <Account/>}
                        {isProduct && <MyProduct />}
                        {isConnect && <Connect />}
                        <Spacer />
                        <Spacer />
                    </div>
            </div>
            </div>          
            <Footer />
        </>
    )
    
}
export default Dashboard