
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
                <a href="#" style={{border:"none"}}>
                    <img src="photo.svg" alt="photo" />
                    <span>Photo</span>
                </a>
                <a href="#">

                    <img src="reels.svg" alt="reels"  />
                    <span>Reels</span>
                </a>
                <a href="#">
                    <img src="video.svg" alt="video" />
                    <span>Video</span>
                </a>
                <a href="#">
                    <img src="story.svg" alt="story" />
                    <span>Story</span>
                </a>
                <a href="#">
                    <img src="highlights.svg" alt="Highlights" />
                    <span>Highlights</span>
                </a>
            </div>

        </div>
    )
}