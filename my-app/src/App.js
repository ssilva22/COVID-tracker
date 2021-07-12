import React, { useState ,useEffect } from 'react';
import {MenuItem,FormControl,Select,Card,CardContent} from '@material-ui/core'
import './App.css';

  //STATE = How to write a variable in React
  // https://disease.sh/v3/covid-19/countries

   //UseEffect= Runs a piece of code 
  //based on a given condition
  //The code inside a UseEffect  will run only once
  //when the component loads and not again

function App() {

  const [countries,setCountries]= useState([]);
  const [country, setCountry] = useState('worldwide');
 

  useEffect(()=>{
  const getCountriesData = async () => {
    await fetch("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .then((data) => {
      const countries = data.map((country) => (
        {
          name: country.country,
          value: country.countryInfo.iso2
        }));
        setCountries(countries)
    });
  }

  getCountriesData();
  },[])

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
  }


  return (
    <div className="app__header">
    <h1>COVID-19 TRACKER</h1>
    <FormControl className="app__dropdown">
      <Select variant= "outlined"value={country}>
      <MenuItem value="worldwide">Worldwide</MenuItem>
      {
        countries.map(country => (
          <MenuItem value={country.value}>{country.name}</MenuItem>
        ))
      }
      </Select>
    </FormControl>
     {/*Header */}
     {/*Title + Select input dropdown field*/}

     {/* InfoBox */}
     {/* InfoBox */}
     {/* InfoBox */}

     {/* Map */}
    </div>
  );
}

export default App;
