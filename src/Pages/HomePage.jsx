import FooterApp from "../Components/Footer";
import Navbar from "../Components/Navbar"; 
import Banner from "../Components/Banner";  




function HomePage() { 


    return ( 

        <div className=" flex flex-col min-h-screen">  
        <Navbar/> 
        <Banner/>
        <FooterApp/>



        </div>



    );

} 

export default HomePage;