import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");  
  const [industry, setIndustry] = useState("");

  return (
    <>
      <Header search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        industry={industry}
        setIndustry={setIndustry}></Header>
      <hr />
      <Main search={search}
        location={location}
        industry={industry} ></Main>
    </>
  )
}

export default App
