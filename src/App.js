import './App.css';
import TopNav from './Components/Nav/TopNav';
import MainDesktop from './Components/Banner/MainDesktop'
import StartedCompo from './Components/Started/StartedCompo';
import FavCompo from './Components/Favourite/FavCompo';
import ExtraCompo from './Components/EndlessExtra/ExtraCompo';
import CashCardCompo from './Components/CashCard/CashCardCompo';
import QueCompo from './Components/Question/QueCompo';
import TCCompo from './Components/T&C/TCCompo';
import FooterCompo from './Components/Footer/FooterCompo';
import RewardCompo from './Components/Reward/RewardCompo';

function App() {
  return (
    <div className="App">
      <TopNav />

      <div className=' mb-12 md:mb-32' style={{ marginBottom: "100px" }}>
        <MainDesktop />
      </div>
      <StartedCompo />
      <FavCompo />
      <ExtraCompo />
      <CashCardCompo />
      <RewardCompo />
      <QueCompo />
      <TCCompo />
      <FooterCompo />
    </div>
  );
}

export default App;
