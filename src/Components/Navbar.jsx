import { Link } from "react-router-dom"; 
import LOGO from "../assets/LOGO.png"
import ArrowDownIcon from "../Icons/ArrowdownIcon";
import FooterApp from "./Footer";
import { useState,useEffect,useRef } from "react";

function Navbar() { 

    const[isOpen ,setIsOpen] = useState(false); 
    const dropdownRef = useRef(null); 

    //To close the dropdown when clicks outside the dropdown menu 
    useEffect(() => {

        function handleClickOutside(e) {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
                setIsOpen(false);
            }

        }
        document.addEventListener("mousedown",handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);

    },[]);

    //End of the dropdownfunction//



    return (  
  
        <nav className="bg-white text-black py-4 shadow-lg sticky top-0 z-50">  
        <div className="max-w-1xl mx-auto flex justify-between items-center px-10"> 
            <div className=" flex items-center space-x-2">
                <img src={LOGO} alt="Logo" className="h-12 w-auto object-cover"/>
                 


            </div>


            <div className=" flex items-center space-x-20">   

                <div className="relative" ref={dropdownRef}>  
                    <p onClick={() => setIsOpen(!isOpen)} 
                    className="flex items-center cursor-pointer hover:text-gray-600 font-semibold"> Services   <ArrowDownIcon className = "w-6 h-6 ml-2 text-gray-800"/>
                        
                        
                        
                    </p>  

                    {isOpen && (  

                        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200"> 
                        <Link to = "/service" className="block px-4 py-2 hover:bg-gray-100">service1</Link>
                        <Link to = "/service" className="block px-4 py-2 hover:bg-gray-100">service2</Link>
                        <Link to = "/service" className="block px-4 py-2 hover:bg-gray-100">service3</Link>
                        <Link to = "/service" className="block px-4 py-2 hover:bg-gray-100">service4</Link>
                        
                        




                        </div>


                        


                    )}

                    





                </div>
                <Link to = "/" className="hover:text-gray-600 font-semibold">About Us</Link>
                <Link to = "/" className="hover:text-gray-600 font-semibold">Contact Us</Link>

          <div className=" flex items-center space-x-4">
           
              

                <button className="px-4 py-2 bg-white text-black-600 font-semibold rounded-lg hover:bg-green-200 border-2 border-green-600 " onClick={() => console.log("login clicked")}>Login</button> 

                <button className="px-4 py-2 bg-green-400 text-white font-semibold rounded-lg hover:bg-green-300 ">Register</button> 
               
                </div>



         
              

       


        </div>
        </div>









        </nav>
       



        




    ); 




} 

export default Navbar;