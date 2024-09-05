// import './App.css'
import SideBar from './Component/sideBar.jsx'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import DemandList from './Component/Demand/DemandList.jsx'
import NavBar from './Component/NavBar.jsx'
import Upload from './Component/Demand/Upload.jsx'
import Demandold from './Component/Demand/Demandold.jsx'
import Demand from './Component/Demand/DemandT.jsx'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/demand-list/*" element={<DemandList />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/demandT" element={<Demand />} />
        <Route path="/demandold" element={<Demandold />} />
        {/* <Route path="/demand-List" element={<DemandList />} /> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App
