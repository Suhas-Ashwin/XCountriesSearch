import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((dta) => setData(dta))
      .catch((error) => console.log("Error in fetching data", error));
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      setFilterData(
        data.filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        )
      );
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, [search]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder={"Search for countries"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {isSearch ? (
        <div className="search-container">
          {filterData.map((country) => {
            return (
              <div className="countryCard" key={country.ccn3} >
                <img
                  src={country.flags.png}
                  alt={`Flag of ${country.name.common}`}
                  className="flag-img"
                />
                <h2> {country.name.common} </h2>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="container">
          {data.map((country) => {
            return (
              <div className="countryCard" key={country.ccn3} >
                <img
                  src={country.flags.png}
                  alt={`Flag of ${country.name.common}`}
                  className="flag-img"
                />
                <h2> {country.name.common} </h2>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
