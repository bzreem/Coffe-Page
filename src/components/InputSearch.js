import inputSearch from "../assets/logos/input-search.svg";
const InputSearch = () => {
  return (
    <>
      <div className="div-container-input-search">
        <input type="search" placeholder="search here..." />
        <label htmlFor="">
          <img src={inputSearch} alt="" />
        </label>
      </div>
    </>
  );
};

export default InputSearch;
