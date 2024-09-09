// import './App.css'
import SideBar from './Component/sideBar.jsx'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import DemandList from './Component/Demand/DemandList.jsx'
import NavBar from './Component/NavBar.jsx'
import Upload from './Component/Demand/Upload.jsx'
import Demandold from './Component/Demand/Demandold.jsx'
import Demand from './Component/Demand/DemandT.jsx'
import ConsignmentHome from './Component/Consignment/ConsignmentHome.jsx'
import Consinav from './Component/Consignment/Consinav.jsx'
import PickingNav from './Component/Picking/Pickingnav.jsx'
import Createconsignment from './Component/Consignment/Createconsignment.jsx'
import ConsiTable from './Component/Consignment/ConsiTable.jsx'
import Pickinghome from './Component/Picking/Pickinghome.jsx'
import Pickingselect from './Component/Picking/Pickingselect.jsx'
import FrontScreen from './TabletScreen/Replinish/FrontScreen.jsx'
import { Item } from './TabletScreen/Replinish/Item.jsx'
import Nav from './TabletScreen/Replinish/Nav.jsx'

function App() {
  return (
    <BrowserRouter>
       <NavBar /> 
       <Routes>
        <Route path="/demand-list/*" element={<DemandList />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/demandT" element={<Demand />} />
        <Route path="/demandold" element={<Demandold />} />
        <Route path="/consignment/*" element={<ConsignmentHome />} />
        <Route path="/consitable" element={<ConsiTable />} />
        <Route path="/createconsignment" element={<Createconsignment />} />
        <Route path="/consinav" element={<Consinav />} />
        <Route path="/picking-task/*" element={<PickingNav />} />
        <Route path="/pickinghome" element={<Pickinghome/>} />
        <Route path="/pickingselect" element={<Pickingselect />} />
       
      </Routes> 
        {/* <Nav/>
      <Routes>
      <Route path="/" element={<FrontScreen />} />
      <Route path="/item" element={<Item />} />ssssssssssssssssrs
      </Routes> */}
  
    </BrowserRouter>
  )
}

export default App
