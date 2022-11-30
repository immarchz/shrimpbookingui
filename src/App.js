import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from "./Pages/homepage/home";
import List from "./Pages/list/List";
import SignIn from './Pages/login/login';
import Hotel from './Pages/SingleHotelPage/Hotel';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'


library.add(fas, faTwitter, faFontAwesome,)

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/hotel" element={<List/>} />
          <Route path="/singlehotel/:id" element={<Hotel/>} />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
