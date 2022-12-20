import './App.css';
import Content from './components/Layouts/Content';
import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
      {/* {show ? <div className='w-screen h-screen background'></div> : <></>} */}
    </div>
  );
}

export default App;
