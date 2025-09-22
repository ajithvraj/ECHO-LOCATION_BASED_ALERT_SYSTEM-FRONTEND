import iBanner from "../assets/FinalBadge.png"
function Banner() { 



    return ( 
        <> 

    <section className=" relative bg-blue-200 text-white py-0 overflow-hidden flex justify-end rounded-3xl mx-auto max-w-6xl">
        <img src = {iBanner} alt="banner" className="relative   inset-0 h-96 w-auto object-contain mix-blend px-10" /> 
         </section> 
         <div>
            <section className=" relative bg-red-200 text-white py-20">


            </section>

         </div>
        </>



    );


} 

export default Banner;