import './App.css';
import { MynePage } from './сomponents/MynePage';
import { Header } from './сomponents/features/Header/blocks/Header/Header';

function App() {
  return (
    <div className='root'>
     <Header/>
     <MynePage/>
    </div>
  );
}

export default App;
