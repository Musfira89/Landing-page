
import './App.css'
import Header from './Components/Header/Header';
import Services from './Components/Services Cards/Services';
import Faq from './Components/FAQ/Faq';
import Footer from './Components/Footer/Footer';
import Activity from './Components/Activity/Activity';
import ChooseUs from './Components/WhyChooseUs/ChooseUs';

function App() {

  return (
    <>
      <Header/>
      <Activity/>
      <Services/>
      <ChooseUs/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App
