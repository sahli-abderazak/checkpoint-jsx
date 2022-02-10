import Photo1 from './Photo1.webp'
import './style.css';

function App() {
  return (
    <div className="App">
     <div style={{border:"solid 1px black",maxWidth:"100vw"}}>


 <h1 className="title red">aberazak</h1>

 <br />

 <img src={Photo1} alt="photo1"/>

 <br />

 <img src="/Photo2.jpg" alt="photo2"/>

</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
