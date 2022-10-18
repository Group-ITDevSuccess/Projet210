import Navbar from "./Navbar"
import Enseignant from "./pages/Enseignant"
import Dashboard from "./pages/Dashboard"
import {Route, Routes} from "react-router-dom"
import Agenda from "./pages/Agenda";
import Etudiant from "./pages/Etudiant";
import Module from "./pages/Module";
import Salle from "./pages/Salle";
import Cahier from "./pages/Cahier";

function App(){
    /*console.log(window.location)*/
    /*
    let component

    switch (window.location.pathname){
        case "/":
            component = <Home />
            break
        case "/pricing":
            component = <Pricing />
            break
        case "/about":
            component = <About />
            break
        case "/contact":
            component  = <Contact />
            break
    }*/

    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/agenda" element={<Agenda />}/>
                    <Route path="/enseignant" element={<Enseignant />}/>
                    <Route path="/etudiant" element={<Etudiant />}/>
                    <Route path="/module" element={<Module />}/>
                    <Route path="/salle" element={<Salle />}/>
                    <Route path="/cahier" element={<Cahier />}/>
                </Routes>
            </div>
        </>
    )
}

export default App