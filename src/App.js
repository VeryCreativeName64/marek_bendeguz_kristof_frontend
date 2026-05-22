import React from "react";
import { ApiProvider } from "./contexts/ApiContext";
import Esemenyek from "./components/Esemenyek";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <ApiProvider>
      <div className="container">
        
          <main>
            <section>
              <Esemenyek/>
            </section>
          </main>
        
      </div>
    </ApiProvider>
  );
}

export default App;
