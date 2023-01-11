import Header from './components/Header'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom' //used in parent route elements to render their child route elements. 

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
