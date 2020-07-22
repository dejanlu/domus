/*
    get objects array
    get filters array

    process object based on filter

    return objects
*/

import { useState, useEffect } from "react";

const useHomesFilters = (objects) => {
  const [filteredObjects, setFilteredObjects] = useState(objects);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // get filters names in array
    const filtersNames = Object.keys(filters);

    // loop trough objects array
    const selectedObjects = filteredObjects.filter((obj) => {
      // if obj prop with name same as filter key and filter value with that key hold same value, return that obj
      for (const el of filtersNames) {
        if (filters[el] === obj[el]) return obj;
      }
    });
    // set filtered state only if there are any filters
    if (filtersNames.length > 0) setFilteredObjects(selectedObjects);
    else setFilteredObjects(objects);
  }, [filters]);

  return [filteredObjects, setFilters];
};

export default useHomesFilters;