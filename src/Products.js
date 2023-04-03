export const Products = () => {
  return (
    <div className="products-container w-screen h-[200vh] flex items-center justify-center bg-slate-200 pt-4">
      <div className="products grid grid-cols-1 gap-10 w-[85%] h-[95%]">
        <div className="product-1 rounded-2xl bg-white flex flex-col items-center justify-around">
          <div className="products-text text-center">
            <p className="text-[6rem] font-bold max-md:text-[4rem]">AirPods</p>
            <p className="text-[2rem] font-semibold">3rd generation</p>
            <p className="text-[1.5rem]">From RM 829</p>
          </div>
          <div className="products-button flex items-center justify-center gap-4">
            <button className="w-[6rem] h-[3rem] bg-blue-600 text-white rounded-full">
              Buy
            </button>
            <a className="text-blue-600" href="#">
              Learn more
            </a>
          </div>
        </div>
        <div className="product-2 rounded-2xl bg-white flex flex-col items-center justify-around">
          <div className="products-text text-center">
            <p className="text-[6rem] font-bold max-md:text-[4rem]">AirPods</p>
            <p className="text-[2rem] font-semibold">2nd generation</p>
            <p className="text-[1.5rem]">From RM 629</p>
          </div>
          <div className="products-button flex items-center justify-center gap-4">
            <button className="w-[6rem] h-[3rem] bg-blue-600 text-white rounded-full">
              Buy
            </button>
            <a className="text-blue-600" href="#">
              Learn more
            </a>
          </div>
        </div>
        <div className="product-3 rounded-2xl bg-white flex flex-col items-center justify-around">
          <div className="products-text text-center">
            <p className="text-[6rem] font-bold max-md:text-[4rem]">
              AirPods Max
            </p>
            <p className="text-[2rem] font-semibold">2nd generation</p>
            <p className="text-[1.5rem]">From RM 2,499</p>
          </div>
          <div className="products-button flex items-center justify-center gap-4">
            <button className="w-[6rem] h-[3rem] bg-blue-600 text-white rounded-full">
              Buy
            </button>
            <a className="text-blue-600" href="#">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
