
import "./container.css"

export default function Section1({Heading,setHeading}){
    return(
        <div id="app">
        <section id="instagram-downloader-home-1">
            {/* <Section1Elements Heading={Heading} setHeading={setHeading}/> */}
            <Result/>

        </section>
        </div>
    )
}

function Section1Elements({Heading,setHeading}){
    return(
        <div id="section-elements">
            <div id="section-elements-nav-main">
            <div id="section-elements-nav-option" >
                <a href="#" className="w3-c7 justify" style={{border:"none"}} onClick={()=>setHeading(()=>"Instagram Photo Downloader")}>
                    <img src="photo.svg" alt="photo"  className="insta-svg-img"/>
                    <span className="name-w3-c7">Photo</span>
                </a>
                <a href="#" className="w3-c7 justify" onClick={()=>setHeading(()=>"Instagram Reels Downloader")}>

                    <img src="reels.svg" alt="reels"  className="insta-svg-img" />
                    <span className="name-w3-c7">Reels</span>
                </a>
                <a href="#" className="w3-c7 justify" onClick={()=>setHeading(()=>"Instagram Video Downloader")}>
                    <img src="video.svg" alt="video" className="insta-svg-img"/>
                    <span className="name-w3-c7">Video</span>
                </a>
                <a href="#" className="w3-c7 justify" onClick={()=>setHeading(()=>"Instagram Story Downloader")}>
                    <img src="story.svg" alt="story" className="insta-svg-img" />
                    <span className="name-w3-c7">Story</span>
                </a>
                <a href="#" className="w3-c7 justify" onClick={()=>setHeading(()=>"Instagram Highlights Downloader")}>
                    <img src="highlights.svg" alt="Highlights"  className="insta-svg-img"/>
                    <span className="name-w3-c7">Highlights</span>
                </a>
            </div>
            </div>
            <div id="h1-w3-c7">
                <Section1H1 Heading={Heading}/>
            </div>
            <div id="p-w3-c7">
                <Section1P/>
            </div>
            <form id="input-w3-c7-form">
                <Section1Input/>

            </form>
        </div>
    )
}
function Section1H1({Heading}){
    return(
        <h1>{Heading}</h1>
    )
}
function Section1P(){
    return(
        <p>Paste the URL of the Instagram post, reel, or story and press to download in HD</p>
    )
}
function Section1Input(){
    return(
        <div id="input-w3-c7-main">
            <div id="input-w3-c7-main-element">
                <input type="text" className="input-w3-c7" placeholder="https.//"/>
                <button type="submit" className="input-w3-c7-btn">
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </button>
            </div>

        </div>
    )
}












function Result(){
    return(
        <div className="result">
            <div className="result-sub img">
                <img src="test.jpg" alt="" />
                <div className="svg-container-w3-c7">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>


<p>Download.mp4</p>

                </div>
            </div>


            <div className="result-sub img">
                <img src="test.jpg" alt="" />
                <div className="svg-container-w3-c7">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>


<p>Download.mp4</p>

                </div>
            </div>









            <div className="result-sub img">
                <img src="test.jpg" alt="" />
                <div className="svg-container-w3-c7">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>


<p>Download.mp4</p>

                </div>
            </div>
            <div className="result-sub img">
                <img src="test.jpg" alt="" />
                <div className="svg-container-w3-c7">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg> */}
<div class="loader"></div>

                </div>
            </div>
        </div>
    )
}