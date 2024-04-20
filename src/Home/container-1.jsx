
import "./container.css"

export default function Section1(){
    return(
        <section id="instagram-downloader-home-1">
            <Section1Elements/>

        </section>
    )
}

function Section1Elements(){
    return(
        <div id="section-elements">
            <div id="section-elements-nav-option" >
                <a href="#" className="w3-c7 justify" style={{border:"none"}}>
                    <img src="photo.svg" alt="photo"  className="insta-svg-img"/>
                    <span>Photo</span>
                </a>
                <a href="#" className="w3-c7 justify">

                    <img src="reels.svg" alt="reels"  className="insta-svg-img" />
                    <span>Reels</span>
                </a>
                <a href="#" className="w3-c7 justify">
                    <img src="video.svg" alt="video" className="insta-svg-img"/>
                    <span>Video</span>
                </a>
                <a href="#" className="w3-c7 justify">
                    <img src="story.svg" alt="story" className="insta-svg-img" />
                    <span>Story</span>
                </a>
                <a href="#" className="w3-c7 justify">
                    <img src="highlights.svg" alt="Highlights"  className="insta-svg-img"/>
                    <span>Highlights</span>
                </a>
            </div>

        </div>
    )
}