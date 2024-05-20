
import axios from "axios"
import "./container.css"
import { useState } from "react";

export default function Section1({Heading,setHeading}){
    const [Link,setLink]=useState("")
    const [isLoading,setLoading]=useState(false)
    const [ExtractedData,setExtractedData]=useState(null)
    async function getDada(){
        const regex = /\/reel\/([^/]+)\//;
        const regex2 = /\/p\/([^/]+)\//;
        const match = Link.match(regex) || Link.match(regex2);
      
        let uniqueIdentifier = "";
        if (match && match[1]) {
          uniqueIdentifier = match[1];
        }
        console.log(uniqueIdentifier)
        try{
            setLoading(true)
            const response = await axios.get(`http://127.0.0.1:8000/api/download-instagram-post/${uniqueIdentifier}`);
            console.log(response.data[0])
            setExtractedData(response.data)

            setLoading(false)
        }catch(error){
            console.log(error)
            setLoading(false)
        }
    }


    function ClickEvent(){
        getDada()

    }
    return(
        <div id="app">
        <section id="instagram-downloader-home-1">
            {
         (ExtractedData === null)?<Section1Elements Heading={Heading} setHeading={setHeading} ClickEvent={ClickEvent} setLink={setLink} isLoading={isLoading}/>:""}
            {ExtractedData && <Result ExtractedData={ExtractedData}/>}

        </section>
        </div>
    )
}

function Section1Elements({Heading,setHeading,ClickEvent,setLink,isLoading}){
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
                <Section1Input ClickEvent={ClickEvent} setLink={setLink} isLoading={isLoading}/>

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
function Section1Input({ClickEvent,setLink,isLoading}){
    return(
        <div id="input-w3-c7-main">
            <div id="input-w3-c7-main-element">
                <input type="text" className="input-w3-c7" placeholder="https://" onChange={(e)=>setLink(e.target.value)}/>
                <span type="submit" className="input-w3-c7-btn" onClick={ClickEvent}>
                {isLoading?<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>:"Donwload"}
                    </span>
            </div>

        </div>
    )
}












function Result({ExtractedData}){
    return(
        <div className="result">
            <ResultOutput img_src = {ExtractedData[0].url.video_img_1} video_src = {ExtractedData[0].url.video_1}/>
            {/* <ResultOutput/> */}
        </div>
    )
}
{/* <div class="loader"></div> */}

function ResultOutput({img_src,video_src}){
    return(
        <div className="result-sub img">
<img src={img_src} alt="Instagram Image" />
        <div className="svg-container-w3-c7">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>


<a href={video_src} download={true} target="new">Download.mp4</a>

        </div>
    </div>
    )
}