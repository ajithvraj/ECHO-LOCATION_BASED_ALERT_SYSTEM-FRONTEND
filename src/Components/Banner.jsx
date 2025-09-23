import iBanner from "../assets/FinalBadge.png"
function Banner() { 



    return ( 
        <> 

    <section className=" relative bg-blue-200 text-white py-0 overflow-hidden flex justify-end rounded-3xl mx-auto max-w-6xl overflow-hidden">
        <div className=" flex justify-between items-center">
            <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2">hi hello</h1>
                <p className="text-lg">your app</p>


            </div>
            </div> 


            <div className="flex-shrink-0">
       
        <img src = {iBanner} alt="banner" className="relative   inset-0 h-96 w-auto object-contain mix-blend px-10" /> 
        </div>
         </section> 
         
         
         <div>
            <section className=" relative bg-red-200 text-white py-20">


            </section>
            

         </div>
        </>



    );


} 

export default Banner;