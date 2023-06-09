import React, { useState } from 'react';
import Select from 'react-select';


const CountrySelect = ({ handleCountryChange }) => {
  const [countryOptions, setCountryOptions] = useState([]);

  const loadCountryOptions = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();

      const options = data.map((country) => ({
        value: country.name.common,
        label: country.name.common,
      }));

      setCountryOptions(options);
    } catch (error) {
      console.log('Error loading country data:', error);
    }
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: 'none',
      boxShadow: state.isFocused ? 'none' : provided.boxShadow,
    }),
  };

  return (
   
        
     
        <Select className='grid grid-cols-2'
          options={countryOptions}
          onMenuOpen={loadCountryOptions}
          onChange={handleCountryChange}
          placeholder='Country'
          styles={customStyles}
        />
      
    
  );
};

export default CountrySelect;
