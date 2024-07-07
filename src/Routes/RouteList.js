import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../components/Home";
import PokeDetail from "../components/PokeDetail";


function RouteList({ pokemon }) {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            
            <Route path="/pokemon/:name"
                   element={<PokeDetail pokemon={pokemon}/>}
            />

            

            <Route path="/*"
                   element={<Navigate to="/" />}
            />
        </Routes>
    )
}

export default RouteList;