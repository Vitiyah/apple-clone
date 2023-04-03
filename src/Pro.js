export const Pro = () => {
  return (
    <div className="pro-container w-full h-screen bg-slate-200 flex items-center justify-center">
      <div className="w-[80%] h-[75%] rounded-3xl relative flex items-center justify-center">
        <video autoPlay loop muted className="rounded-3xl">
          <source
            src="https://www.apple.com/105/media/us/airpods/2022/dc1310af-8cb9-4218-8d40-26bbe6a1d307/anim/hero/medium_2x.mp4"
            type="video/mp4"
          />
        </video>
        <div className="pro-text absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-white text-[6rem] font-bold max-xl:text-[4rem] max-md:text-[2rem]">
            AirPods Pro
          </h2>
          <p className="text-white text-[1.5rem]">RM 1,099</p>
          <div className="pro-button-section mt-24 flex items-center gap-4 pb-8 max-sm:mt-12">
            <button className="w-[5rem] h-[3rem] bg-white text-black rounded-full">
              Buy
            </button>
            <a href="#" className="text-white">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
