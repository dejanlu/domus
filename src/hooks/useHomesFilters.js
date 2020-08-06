/*
    get objects array
    get filters array

    process object based on filter

    return objects
*/

import { useState, useEffect } from "react";

const useHomesFilters = (objects) => {
  const [filteredHomes, setFilteredHomes] = useState(objects);
  const [filters, setFilters] = useState({});

  const filterHomes = (homes, filterName, filter) => {
    return homes.filter((home) => {
      if (filterName === "sobe" || filterName === "tip")
        return filter.includes(home[filterName].toString());
      else if (filterName === "kvadratura" || filterName === "cijena") {
        return home[filterName] >= filter[0] && home[filterName] <= filter[1];
      } else return home[filterName] === filter;
    });
  };

  useEffect(() => {
    // get filters names in array
    const filtersNames = Object.keys(filters) || [];

    const reduced = filtersNames.reduce((acc, filterName, index) => {
      if (index === 0) {
        const filtered = filterHomes(objects, filterName, filters[filterName]);
        return filtered;
      } else {
        const filtered = filterHomes(acc, filterName, filters[filterName]);
        return filtered;
      }
    }, []);

    setFilteredHomes(reduced);
    // set filtered state only if there are any filters
    //if (filtersNames.length > 0) setFilteredHomes(selectedObjects);
    if (filtersNames.length === 0) setFilteredHomes(objects);
  }, [filters]);

  return [filteredHomes, setFilters];
};

export default useHomesFilters;
