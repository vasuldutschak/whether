import {Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import {lazy} from "react";
const PokemonsPage=lazy(()=>import('./pages/PokemonsPage'))
const HomePage=lazy(()=>import('./pages/HomePage'))
function App() {
  return (
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path='pokemons' element={<PokemonsPage/>}/>
              <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Route>
      </Routes>
  );
}

export default App;
