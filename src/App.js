/*import "./styles.css";
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

  /*useEffect(() => {
    if (search.length > 0) {
      setFilterData(
        data.filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        )
      ) ;
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, [search]);

  useEffect(() => {
    if (search.length > 0) {
      setFilterData(
        data.filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        )
      ) ;
    } else {
      setFilterData([]);
    }
  }, [search,data]);


  const container = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const card = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "200px",
  };
  const flagStyle = {
    width: "100px",
    height: "100px",
  };
  const searchContainer = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder={"Search for countries"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {isSearch ? (
        <div style={searchContainer} className="countryCard">
          {filterData.map((country) => {
            return (
              <div key={country.ccn3} style={card} className="countryCard">
                <img
                  src={country.flags.png}
                  alt={`Flag of ${country.name.common}`}
                  style={flagStyle}
                  className="flag-img"
                />
                <h3> {country.name.common} </h3>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={container} className="countryCard">
          {data.map((country) => {
            return (
              <div key={country.ccn3} style={card} className="countryCard">
                <img
                  src={country.flags.png}
                  alt={`Flag of ${country.name.common}`}
                  style={flagStyle}
                  className="flag-img"
                />
                <h3> {country.name.common} </h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

return (
  <div className="App">
      <input
        type="text"
        placeholder={"Search for countries"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="countryCard">
        {filterData.length > 0 ? (
          {filterData.map((country) => {
            return (
              <div key={country.ccn3} style={card} className="countryCard">
                <img
                  src={country.flags.png}
                  alt={`Flag of ${country.name.common}`}
                  style={flagStyle}
                  className="flag-img"
                />
                <h3> {country.name.common} </h3>
              </div>
            )})
            }) : (
          <p> No matching countries</p>
        )}
      </div>
  </div>

)

}*/

/*import "./styles.css";
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

  const container = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const card = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "200px",
  };
  const flagStyle = {
    width: "100px",
    height: "100px",
  };
  const searchContainer = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder={"Search for countries"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {isSearch ? (
        <div style={searchContainer} className="countryCard">
          {filterData.map((country) => {
            return (
              <div key={country.ccn3} style={card} className="countryCard">
                <img
                  src={country.flags.png}
                  alt={`Flag of ${country.name.common}`}
                  style={flagStyle}
                  className="flag-img"
                />
                <h3> {country.name.common} </h3>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={container} className="countryCard">
          {data.map((country) => {
            return (
              <div key={country.ccn3} style={card} className="countryCard">
                <img
                  src={country.flags.png}
                  alt={`Flag of ${country.name.common}`}
                  style={flagStyle}
                  className="flag-img"
                />
                <h3> {country.name.common} </h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
*/

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
    } else {
      setFilterData([]);
    }
  }, [search, data]);

  const container = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const card = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "200px",
  };
  const flagStyle = {
    width: "100px",
    height: "100px",
  };
  const searchContainer = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder={"Search for countries"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="countryCard" style={container}>
        {search.length > 0 ? (
          filterData.length > 0 ? (
            filterData.map((country) => {
              return (
                <div key={country.ccn3} style={card} className="countryCard">
                  <img
                    src={country.flags.png}
                    alt={`Flag of ${country.name.common}`}
                    style={flagStyle}
                    className="flag-img"
                  />
                  <h3> {country.name.common} </h3>
                </div>
              );
            })
          ) : (
            null
          )
        ) : (
          data.map((country) => {
            return (
              <div key={country.ccn3} style={card} className="countryCard">
                <img
                  src={country.flags.png}
                  alt={`Flag of ${country.name.common}`}
                  style={flagStyle}
                  className="flag-img"
                />
                <h3> {country.name.common} </h3>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}


