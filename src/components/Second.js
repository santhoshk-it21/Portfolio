import backpic from "../assets/backpic.jpg";
const Second = () => {
  return (
    <div className="" id="second">
      <img src={backpic} alt="Manikandan" />
      <div className="hidden md:block">
        <h1 className="backtext font-hero text-8xl ">Mani Kandan</h1>
        <p className="backpra font-hero hover:text-white"> scroll down</p>
      </div>
    </div>
  );
};
export default Second;
