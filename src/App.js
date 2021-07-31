
import { Route } from 'react-router-dom';
import './App.css';

import { MainHeader } from "./MyComponents/MainHeader";
import { Product } from './Pages/Product';
import { Productdetails } from './Pages/Productdetails';
import { Welcome } from './Pages/Welcome';




function App() {
   return(
            <div className="container">
                  <MainHeader/>
                  <Route path="/welcome">
                     <Welcome/>
                     </Route>

                     <Route path="/product">
                   <Product/>
                     </Route>
                     <Route path="/productdetails">
                    <Productdetails/>
                     </Route>
            </div>
   );





}

export default App;
