import './App.css';
import { LeftMenu } from './componentes/LeftMenu';
import {MainContainer} from './componentes/MainContainer'
import {RightMenu} from './componentes/RightMenu';
function App() {
  return (
    <div className="App">
      <LeftMenu />
    <MainContainer />
    <RightMenu />
  <div className='background'>
    
  </div>
    </div>
  );
}

export default App;
