import './App.css'
import ListChurchComponent from './components/Churches/ListChurchComponent'
import HeaderComponent from './components/HeaderComponent'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import IndexComponent from './components/IndexComponent'
import ChurchComponent from './components/Churches/ChurchComponent'
import ListMemberComponent from './components/Members/ListMemberComponent'
import MemberComponent from './components/Members/MemberComponent'


function App() {
 
  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/** ROTAS PARA AS IGREJAS */}

          {/** http://localhost:5173/ */}
          <Route path="/" element={<IndexComponent/>}></Route>
          {/** http://localhost:5173/churches */}
          <Route path="/churches" element={<ListChurchComponent/>}></Route>
          {/** http://localhost:5173/add-churches */}
          <Route path="/add-churches" element={<ChurchComponent/>}></Route>
          {/** http://localhost:5173/edit-church/1 */}
          <Route path='/edit-church/:id' element={<ChurchComponent/>}></Route>

          {/** ROTAS PARA OS MEMBROS */}

          {/** "http://localhost:5173/members" */}
          <Route path='/members' element={<ListMemberComponent/>}></Route>
          {/** http://localhost:5173/add-member */}
          <Route path="/add-member" element={<MemberComponent/>}></Route>

        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App
