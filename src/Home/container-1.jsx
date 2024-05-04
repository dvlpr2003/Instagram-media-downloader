
import "./container.css"

export default function Section1({Heading,setHeading}){
    return(
        <div id="app">
        <section id="instagram-downloader-home-1">
            <Section1Elements Heading={Heading} setHeading={setHeading}/>

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
                <button type="submit" className="input-w3-c7-btn"><div class="loader"></div></button>
            </div>

        </div>
    )
}