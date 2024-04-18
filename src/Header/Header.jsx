
import "./Header.css"
export default function Header(){
    return(
        <header>
            <div id="Header-main">
                <div id="header-logo-container">
                    <img src='ing.svg' alt="instagram video downloader logo" />
                </div>
                <div id="insta-options">
                    <span>Video Downloader</span>
                    <span>Photo Downloader</span>
                    <span>Reels Downloader</span>
                    <span>Story Saver</span>
                    <span>Story Viewer</span>
                </div>
                <div id="container-3">
                    <span>FAQ</span>
                    <button id="language-btn">
                        <span>ENG</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" id="arrow-svg">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

                    </button>

                </div>
            </div>
        </header>
    )
}