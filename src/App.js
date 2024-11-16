import './App.css';

function App() {
  return (
    <div className="App ml-144 mr-144">
      <div className="starterInfo mt-40">
      <header className = " text-black font-bold text-2xl">
        Bhavik Patel
      </header>
      <p className="text-black">
        Software Engineer from Houston
      </p>
      </div>
      <div className="aboutMe mt-20 flex gap-96">
        <p className="text-black flex-shrink-0">
          About Me 
        </p>
        <p className="">
          Hi! My name is Bhavik Patel. I am a recent Computer Science graduate from the University of Houston with a Minor in Mathematics. I am extremely passionate about leveraging technology to build scalable applications, ranging from full-stack web solutions to emulators.
        </p>
      </div>
      <div className="education mt-12 flex gap-96">
        <p className="text-black flex-shrink-0">
          Education 
        </p>
        <p className="">
          University of Houston
        </p>
      </div>
    </div>
  );
}

export default App;
