import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Musicas from "./pages/musicas/Musicas";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Adicionar from "./pages/adicionar/Adicionar";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/musicas" element={<Musicas />} />
                    <Route path="/adicionar" element={<Adicionar />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;