import iBanner from "../assets/FinalBadge.png";

function Banner() {
  return (
    <>
      {/* Banner Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Card */}
          <div className="bg-blue-200 rounded-3xl shadow-md flex flex-col md:flex-row items-center gap-x-12 px-8 py-12">
            
            {/* Left Text */}
            <div className="flex-1 text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black leading-tight">
                ECHO – Your Voice of Safety
              </h1>
              <p className="text-lg md:text-xl text-black mb-6">
                Raise alerts instantly, connect with nearby users,
                and verify genuinity together in real time.
              </p>

              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md">
                Learn More
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={iBanner}
                alt="banner"
                className="h-72 md:h-96 w-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
