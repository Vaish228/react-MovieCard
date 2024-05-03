/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello World</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */


import MovieCard from "./components/moviecard";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div>
        <Navbar />

        <main className ="p-3">
          <div className="row">
            <div className="col-4">
               <MovieCard title="Ghilli - (2004)" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKydinhyAKBUSfgcHickisRYTGeXUKAsHzIj4FqODEg&s" desc="Velu, an aspiring Kabaddi player, is in Madurai to participate in one of the regional matches when he rescues Dhanalakshmi from Muthupandi, a powerful man keen on marrying the girl against her wishes." />
            </div>
            <div className="col-4">
               <MovieCard title="Ghilli - (2004)" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYpAFVV8sPpgB2Rgn4IgF-BnuJFv-si0uIRSZ0vRA7w&s" desc="Velu, an aspiring Kabaddi player, is in Madurai to participate in one of the regional matches when he rescues Dhanalakshmi from Muthupandi, a powerful man keen on marrying the girl against her wishes." />
            </div>
            <div className="col-4">
               <MovieCard title="Ghilli - (2004)" image="https://m.media-amazon.com/images/M/MV5BZGFiYTlmMDMtN2UyZi00YzNmLWExZmQtMDNlNWE2ZWM0YmIwXkEyXkFqcGdeQXVyOTA3MTM0MTM@._V1_.jpg" desc="Velu, an aspiring Kabaddi player, is in Madurai to participate in one of the regional matches when he rescues Dhanalakshmi from Muthupandi, a powerful man keen on marrying the girl against her wishes." />
            </div>
          </div>
        </main>
    </div>
  )
}
export default App;
