import {Home} from './pages/home.js';
import {Auth} from './pages/auth.js';
import {SavedRecipes} from './pages/saved-recipe.js';
import {CreateRecipe} from './pages/create-recipe.js';
import './App.css';
import {Navbar} from "./componenets/navbar.js"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/auth" element={<Auth></Auth>}/>
        <Route path="/saved-receipe" element={<SavedRecipes></SavedRecipes>}/>
        <Route path="/create-receipe" element={<CreateRecipe></CreateRecipe>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
