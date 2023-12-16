'use client';
import { useState, useEffect } from 'react';

/* const SearchComponent = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch data from the server only if data is not available
    if (allData.length === 0) {
      fetchData();
    }
  }, [allData]); // Re-run the effect when allData changes

  const fetchData = async () => {
    try {
      setLoading(true); // Set loading to true when fetching data
      const response = await fetch(`/api/scrape?sitemapUrl=https://www.laedx.com/sitemap.xml`);
      const result = await response.json();
      setAllData(result);
      setLoading(false); // Reset loading to false when fetching is complete (regardless of success or error)
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Reset loading to false on error
    }
  };

  useEffect(() => {
    // Filter data based on the search term whenever searchTerm changes
    const filterData = () => {
      if (searchTerm !== "") {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        const filtered = allData.filter(item =>
          (item.title && item.title.toLowerCase().includes(lowercasedSearchTerm)) ||
          (item.content && item.content.toLowerCase().includes(lowercasedSearchTerm)) ||
          (item.url && item.url.toLowerCase().includes(lowercasedSearchTerm))
        );
        setFilteredData(filtered);
      } else {
        // If search term is empty, show all data
        setFilteredData(allData);
      }
    };

    filterData();
  }, [searchTerm, allData]); // Re-run the effect when searchTerm or allData changes

  const handleSearch = () => {
    // Trigger the filtering directly without updating searchTerm
    filterData();
  };

  const filterData = () => {
    if (searchTerm !== "") {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const filtered = allData.filter(item =>
        (item.title && item.title.toLowerCase().includes(lowercasedSearchTerm)) ||
        (item.content && item.content.toLowerCase().includes(lowercasedSearchTerm)) ||
        (item.url && item.url.toLowerCase().includes(lowercasedSearchTerm))
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <div className="flex w-50 pl-10 pr-10 mt-10">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className='m-5 border p-2'>Search</button>
      </div>
      <ul>
        {loading && (
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
              stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
              d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
              stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-900">
            </path>
            </svg>
          </div>
        )}
        <div className='absolute bg-white ml-10'>
          {filteredData.map(item => (
            <li key={item.url}>
              <h3 className='hover:bg-slate-100'><a href={item.url} >{item.title}</a></h3>
              <h3>{item.url}</h3>
              
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default SearchComponent; */

  
const SearchComponent = () => {
  return (<p>hello</p>);
}

export default SearchComponent;








/* v3.1 */
// Update SearchComponent.js
/* import React, { useState, useEffect } from 'react';

const SearchComponent = () => {
  const [search, setSearch] = useState('that go beyond');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      // Set loading to true when starting to fetch data
      setLoading(true);

      const response = await fetch(`/api/scrape?sitemapUrl=https://www.laedx.com/sitemap.xml}`);
      const data = await response.json();

      // Ensure that data is an array before setting it to searchResults
      if (Array.isArray(data)) {
        // Store the fetched data in local storage
        localStorage.setItem('searchResults', JSON.stringify(data));
        setSearchResults(data);
      } else {
        console.error('Invalid data structure received from the API');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      // Set loading to false when data fetching is complete (either success or error)
      setLoading(false);
    }
  };

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('searchResults');
    if (storedData) {
      setSearchResults(JSON.parse(storedData));
    }
  }, []);

  const handleSearch = () => {
    // Filter the stored data based on the search term
    const filteredResults = searchResults.filter(result =>
      result.content.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const load = (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path
          d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
          stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"
        ></path>
        <path
          d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
          stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="text-gray-900">
        </path>
      </svg>
    </div>
  );

  return (
    <div>
      <label>
        Search Term:
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <button onClick={fetchData} disabled={loading}>
        {loading ? load : 'Fetch Data'}
      </button>
      <button onClick={handleSearch}>Search</button>
      <div>
        {Array.isArray(searchResults) ? (
          searchResults.map((result, index) => (
            <div key={index}>
              <p>URL: {result.url}</p>
              <p>Title: <a href={result.url}>{result.title}</a></p>
            </div>
          ))
        ) : (
          <p>No results to display</p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent; */





// Update pages/api/scrape.js
// The API remains unchanged




/* v3 */
/* import React, { useState } from 'react';
import Link from 'next/link';

const SearchComponent = () => {
  const [search, setSearch] = useState('that go beyond');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      // Set loading to true when starting to fetch data
      setLoading(true);

      const response = await fetch(`/api/scrape?sitemapUrl=https://www.laedx.com/sitemap.xml&search=${search}`);
      const data = await response.json();

      // Ensure that data is an array before setting it to searchResults
      if (Array.isArray(data)) {
        setSearchResults(data);
      } else {
        console.error('Invalid data structure received from the API');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      // Set loading to false when data fetching is complete (either success or error)
      setLoading(false);
    }
  };
  const load=<div class="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible"><svg class="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"   width="24" height="24">    <path      d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"      stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>    <path      d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"      stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-900">    </path>  </svg></div>;
  return (
    <div>
      <label>
        Search Term:
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <button onClick={fetchData} disabled={loading}>
        {loading ? load : 'Fetch Data'}
      </button>
      <div>
        {Array.isArray(searchResults) ? (
          searchResults.map((result, index) => (
            <div key={index}>
              <p>URL: {result.url}</p>
              <p>Title: <a href={result.url} > {result.title}</a></p>
              
            </div>
          ))
        ) : (
          <p>No results to display</p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent; */
