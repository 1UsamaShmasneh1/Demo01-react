import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import OtherComponent from './MyOtherComponent';
import ComponentAsClass from './ComponentAsClass';
import Countries from './Countries';


function Countries1(){
  const countries = ["Israel", "USA", "Brazil", "France"]

  return(
    <ul>
      {
        countries.map((country) => 
          <li>{country}</li>
        )
      }
    </ul>
  )
}

function GetCountries(){
  let countriesObjArray = [{countryCode:213456, countryName:"jaljulia",capital:"paris"},
                            {countryCode:2143256, countryName:"jjsh",capital:"psads"}];
  return countriesObjArray;
}

function CountriesList(){
  const countries = GetCountries()

  return(
    <ul>
      {
        countries.map((country) => 
          <li>{`[${country.countryCode}] - ${country.countryName}(${country.capital})`}</li>
        )
      }
    </ul>
  )
}


function MyComponent(){
  // return <div>
  //         <h1>My First Component</h1>
  //         <br/>
  //         <OtherComponent></OtherComponent>
  //        </div>

  return <React.Fragment>
          <h1>My First Component</h1>
         </React.Fragment>
}

//Create the root div for react
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<MyComponent></MyComponent>
  //<MyComponent />
  //<OtherComponent />
  //<ComponentAsClass />
  //<Countries />
  //<Countries1 />
  <CountriesList />
);

