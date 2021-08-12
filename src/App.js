import './App.css';
import myImage from "./burning-sun.jpg"
function App() {
  return (
    <div >
      <div className="App" style={{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 className="title red">your name here</h1>
        <br />
        <img src="/OIP.jpg" alt="sun pic" />
        <br />
        <img src={myImage} alt="imageofthesun" />
      </div>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="/y2mate.com - Sasha Lopez  Diotic  Sun feat Tobi Ibitoye_v240P.mp4" ></source>
      </video>
    </div>
    
  );
  
  }
export default App;
