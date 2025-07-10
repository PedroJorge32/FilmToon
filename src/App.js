import RoutesApp from './services/routes';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
       <ToastContainer autoClose={2800}/>
       <RoutesApp/>
    </div>
  );
}

export default App;
