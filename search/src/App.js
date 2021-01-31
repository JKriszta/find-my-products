import React, {useState} from "react";
import './App.css';
import Search from "./components/search";
import Box from "./components/box";

function App() {

  const[search, setSearch] = useState("");

  return (
    <div className="App">
      <h1 className="head">Find my products</h1>
    <Search search={search} setSearch={setSearch}/>
    <Box search={search} setSearch={setSearch}/>
    </div>
  );
}

export default App;