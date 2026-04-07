import React, { useEffect, useState } from "react";
import axios from "axios";

function Dropdown() {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // Fetch states
  useEffect(() => {
    axios.get("http://localhost:5000/states")
      .then(res => {
        console.log("States:", res.data); // DEBUG
        setStates(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);

    axios.get(`http://localhost:5000/districts/${state}`)
      .then(res => {
        setDistricts(res.data);
        setVillages([]);
      })
      .catch(err => console.log(err));
  };

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);

    axios.get(`http://localhost:5000/villages/${district}`)
      .then(res => setVillages(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Select Location</h2>

      {/* STATE */}
      <select onChange={handleStateChange}>
        <option>Select State</option>
        {states.map((s, index) => (
          <option key={index} value={s.name || s.state}>
            {s.name || s.state}
          </option>
        ))}
      </select>

      <br /><br />

      {/* DISTRICT */}
      <select onChange={handleDistrictChange}>
        <option>Select District</option>
        {districts.map((d, index) => (
          <option key={index} value={d.name || d.district}>
            {d.name || d.district}
          </option>
        ))}
      </select>

      <br /><br />

      {/* VILLAGE */}
      <select>
        <option>Select Village</option>
        {villages.map((v, index) => (
          <option key={index} value={v.village || v.name}>
            {v.village || v.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;