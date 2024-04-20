
import "./container.css"

export default function Section1(){
    return(
        <div id="app">
        <section id="instagram-downloader-home-1">
            <Section1Elements/>

        </section>
        </div>
    )
}

function Section1Elements(){
    return(
        <div id="section-elements">
            <div id="section-elements-nav-main">
            <div id="section-elements-nav-option" >
                <a href="#" className="w3-c7 justify" style={{border:"none"}}>
                    <img src="photo.svg" alt="photo"  className="insta-svg-img"/>
                    <span className="name-w3-c7">Photo</span>
                </a>
                <a href="#" className="w3-c7 justify">

                    <img src="reels.svg" alt="reels"  className="insta-svg-img" />
                    <span className="name-w3-c7">Reels</span>
                </a>
                <a href="#" className="w3-c7 justify">
                    <img src="video.svg" alt="video" className="insta-svg-img"/>
                    <span className="name-w3-c7">Video</span>
                </a>
                <a href="#" className="w3-c7 justify">
                    <img src="story.svg" alt="story" className="insta-svg-img" />
                    <span className="name-w3-c7">Story</span>
                </a>
                <a href="#" className="w3-c7 justify">
                    <img src="highlights.svg" alt="Highlights"  className="insta-svg-img"/>
                    <span className="name-w3-c7">Highlights</span>
                </a>
            </div>
            </div>
            <div id="h1-w3-c7">
                <Section1H1/>
            </div>
            <div id="p-w3-c7">
                <SectionP/>
            </div>
        </div>
    )
}
function Section1H1(){
    return(
        <h1>Download Instagram Videos</h1>
    )
}
function SectionP(){
    return(
        <p>Paste the URL of the Instagram post, reel, or story and press to download in HD</p>
    )
}