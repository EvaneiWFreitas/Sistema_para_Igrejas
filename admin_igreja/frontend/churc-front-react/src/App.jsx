import './App.css'
import ListChurchComponent from './components/Churches/ListChurchComponent'
import HeaderComponent from './components/HeaderComponent'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import IndexComponent from './components/IndexComponent'
import ChurchComponent from './components/Churches/ChurchComponent'


function App() {
 
  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/** http://localhost:5173/ */}
          <Route path="/" element={<IndexComponent/>}></Route>
          {/** http://localhost:5173/churches */}
          <Route path="/churches" element={<ListChurchComponent/>}></Route>
          {/** http://localhost:5173/add-churches */}
          <Route path="/add-churches" element={<ChurchComponent/>}></Route>

        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App
