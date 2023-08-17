import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoAPIOptions } from '../../Api';


const Searchbar = ({ onSearchChange }) => {

    const [searchCity, SetSearchCity] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
            geoAPIOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    const handleOnChange = (searchData) => {
        SetSearchCity(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={searchCity}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Searchbar;