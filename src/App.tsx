import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MynePage } from './сomponents/MynePage';
import { Header } from './сomponents/features/Header/blocks/Header/Header';
import { Ads } from './сomponents/features/Pages/Announcement/Ads';

function App() {
  return (
    <div className='root'>
     <Header/>
     <Routes>
       <Route path="/" element = { <Ads />}/> 
       <Route path="MynePage" element = { <MynePage/>}/> 
     </Routes>
    </div>
  );
}

export default App;
