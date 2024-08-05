import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchAppBar from "./components/app.drawer";
import AppSample from "./components/card.component";
import { useState } from 'react';


const App = ()=>{
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return(
    <>
    <SearchAppBar  onSearch={handleSearch}/>
    <AppSample  searchQuery={searchQuery}/>
    </>
  );
}


export default App;