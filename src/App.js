import './App.css';
import NavBar from './containers/navBar';
import FirstPart from './containers/firstPart';
import SecondPart from './containers/secondPart';
import Projects from './containers/projects';
import Contact from './containers/contact';
import LastPart from './containers/lastPart';
function App() {
  return (
    <div className = "app">
      <NavBar/>
      <div className = "container grid grid-row-5 max-w-max mx-auto" id = "about" >
        <div className='mb-[4.5rem]'>
          <FirstPart/>
        </div>
        <div className="bg-[url('./images/wave.svg')] bg-cover bg-center bg-no-repeat p-4 pb-24 mb-[5.0rem]" id = "skills">
          <SecondPart className="" />
        </div>
        <div className=" mb-[7.0rem]" id = "projects">
          <Projects/>
        </div>
        <div className='bg-white' id = "contacts">
          <Contact/>
        </div>
        <div className='bg-blue'>
          <LastPart/>
        </div>
      </div>
    </div> 
  );
}

export default App;
