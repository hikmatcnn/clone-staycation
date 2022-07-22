import 'assets/scss/style.scss';
import LandingPages from 'pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (  
      <Routes>
        <Route path="/" element={LandingPages} />
      </Routes>     
  );
}

export default App;
