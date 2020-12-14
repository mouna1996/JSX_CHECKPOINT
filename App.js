import React from 'react';
import './App.css';
import image2 from "./Img/Image2.jpg"
import video1 from "./Video/Video1.mp4"

function App() {
    return (
        <div>
            <div style={{border:'solid 1px black',maxWidth :'100vw'}}>  
                <h1 className="title red">mouna</h1><br/>
                <img src={"/image1.jpg"}/> <br/>
                <img src={image2}/>  
            </div>
            <video src={video1} style={{width:320, height:240}} type="video/mp4" controls/>  
        </div>
    );
}

export default App;
