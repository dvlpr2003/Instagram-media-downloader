
import axios from "axios"
import "./container.css"
import { useState } from "react";
import { extractUsername } from "./Username";

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
export default function Section1({Heading,setHeading}){
    const [Link,setLink]=useState("")
    const [isLoading,setLoading]=useState(false)
    const [ExtractedData,setExtractedData]=useState(null)
    const [ProfileInfo,setProfileInfo] = useState(null)
    // console.log(ExtractedData)
    async function getDada(){
        const regex = /\/reel\/([^/]+)\//;
        const regex2 = /\/p\/([^/]+)\//;
        const match = Link.match(regex) || Link.match(regex2);
      
        let uniqueIdentifier = "";
        if (match && match[1]) {
          uniqueIdentifier = match[1];
          try{
            setLoading(true)
            const response = await axios.get(`http://127.0.0.1:8000/api/download-instagram-post/${uniqueIdentifier}`);
            // console.log(response.data)
            setExtractedData(response.data)

            setLoading(false)
        }catch(error){
            console.log(error)
            setLoading(false)
        }
        }
        else{
            const extractname = extractUsername(Link)
            try{
                setLoading(true)

                const response = await axios.get(`http://127.0.0.1:8000/api/get-profile-info/${extractname}/`)
                console.log(response.data)
                setProfileInfo(response.data)
                setLoading(false)

            }
            catch(error){
                console.log(error)
                setLoading(false)

            }
        }


    }


    function ClickEvent(){
        getDada()

    }
    return(
        <div id="app">
        <section id="instagram-downloader-home-1">
            {
         (ExtractedData === null )&& (ProfileInfo === null)?<Section1Elements Heading={Heading} setHeading={setHeading} ClickEvent={ClickEvent} setLink={setLink} isLoading={isLoading}/>:''}
            {ExtractedData &&<Result ExtractedData={ExtractedData}/>}
            {ProfileInfo&& <ProfileResult ProfileInfo={ProfileInfo}/>}
         {/* {(ProfileInfo === null)?<Section1Elements Heading={Heading} setHeading={setHeading} ClickEvent={ClickEvent} setLink={setLink} isLoading={isLoading}/>:''} */}
            

        </section>

        {ExtractedData &&<DownloadAgain setExtractedData={setExtractedData}/>}
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
        <>
   
        <div className="result">
            
            {ExtractedData.map((e,i)=><ResultOutput data ={e} index ={i} key = {i}/>)}
            
        </div>
        {/* <ProfileResult/> */}
       
        
        </>
    )
}

function ResultOutput({data,index}){
    return(
        <div className="result-sub img">
            {

                data.url.video ?<img src={`${data.url.video_img}`} alt="Instagram Image" /> :<img src={data.url.img_c5} alt="Instagram Image" />
            }
        <div className="svg-container-w3-c7">
            <div className="svg-container-w3-c7-child">
        {data.url.video ?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

}



{data.url.video ?<a href={data.url.video_c5} download={true} target="new" className="w3-c7-download-btn">Download video</a>:<a href={data.url.img_c5} className="w3-c7-download-btn" download={true}>Download image</a>}
</div>

        </div>
  
    </div>


    )
}

function DownloadAgain({setExtractedData}){

    return(
        <a href='#app'className="Download-again-btn" onClick={()=>setExtractedData(null)}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 j-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>

Download more
        </a>
    )
}



function ProfileResult({ProfileInfo}){
    const [text, setText] = useState('');
    const copyToClipboard = () => {
        setText(ProfileInfo.bio)
        navigator.clipboard.writeText(text).then(() => {
          alert('Text copied to clipboard!');
        }).catch(err => {
          console.error('Could not copy text: ', err);
        });
      };
    return(
        <div className="profile-result-w3-c4">
            <div className="profile-result-w3-c4-image">
                <img src={ProfileInfo.profile_pic_url} alt="" />
                <div className="profile-result-w3-c4-image-dwn">
                    <a href={ProfileInfo.profile_pic_url} download={`${ProfileInfo.username}.jpeg`} className="w3-c7-download-btn">Download Profile Image</a>
                </div>
            </div>
            <div className="profile-result-w3-c4-username">
                <span>{ProfileInfo.username}</span>

            </div>
            <div className="profile-result-w3-c4-follow" >
                <div>{ProfileInfo.followers}followers</div>
                <div>{ProfileInfo.following}following</div>
                <div>{ProfileInfo.posts}post</div>
            </div>
            <div className="profile-result-w3-c4-txt-clip">
                <div className="profile-result-w3-c4-txt">{ProfileInfo.bio}
                <div className="profile-result-w3-c4-svg-container" onClick={copyToClipboard}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 c7-clip">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
</svg>
</div>

                </div>
            </div>



        </div>
    )
}