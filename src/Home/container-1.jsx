
import axios from "axios"
import "./container.css"
import { useEffect, useRef, useState } from "react";
import { extractUsername } from "./Username";

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
export default function Section1({Heading,setHeading}){
    const [Link,setLink]=useState("")
    const [isLoading,setLoading]=useState(false)
    const [ExtractedData,setExtractedData]=useState(null)
    const [ProfileInfo,setProfileInfo] = useState(null)
    const [Sstory,setSstory]=useState(null)
    // console.log(ExtractedData)
    async function getDada(){
        const regex = /\/reel\/([^/]+)\//;
        const regex2 = /\/p\/([^/]+)\//;
        const regex3 = /\/stories\/[^/]+\/([^/?]+)[/?]/;
        const match = Link.match(regex) || Link.match(regex2);
        const match2 =Link.match(regex3)
      
        let uniqueIdentifier = "";
        let storyId = '';
        let usrnm ='';
        if (match && match[1]) {
          uniqueIdentifier = match[1];
          try{
            setLoading(true)
            const response = await axios.get(`http://127.0.0.1:8000/api/download-instagram-post/${uniqueIdentifier}`);
            console.log(response.data)
            setExtractedData(response.data)

            setLoading(false)
        }catch(error){
            console.log(error)
            setLoading(false)
        }
        }else if (match2){
            
            storyId = match2[1]
            usrnm = match2[0].split("/")[2]
            try{
                setLoading(true)
                const response = await axios.get(`http://127.0.0.1:8000/api/get-story/${usrnm}/${storyId}/`)
                setLoading(false)
                console.log(response)
                setSstory(response.data)
            }catch(error){
                console.log(error)
                setLoading(false)
            }

        }
        else{
            const extractname = extractUsername(Link)
            // console.log(extractname)
            console.log(extractname)
            if (extractname === null) return alert("Url field is empty")
            
            try{
                setLoading(true)

                const response = await axios.get(`http://127.0.0.1:8000/api/get-profile-info/${extractname}/`)
                console.log(response.data)
                setProfileInfo(response.data)
                setLoading(false)

            }
            catch(error){
                // console.log(error)
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
         (ExtractedData === null )&& (ProfileInfo === null) && (Sstory==null)?<Section1Elements Heading={Heading} setHeading={setHeading} ClickEvent={ClickEvent} setLink={setLink} isLoading={isLoading}/>:''}
            {ExtractedData &&<Result ExtractedData={ExtractedData}/>}
            {ProfileInfo&& <ProfileResult ProfileInfo={ProfileInfo}/>}
            {Sstory && <SingleStory Sstory={Sstory}/>}
            

        </section>

        {(ExtractedData || ProfileInfo || Sstory) &&<DownloadAgain setExtractedData={setExtractedData} setProfileInfo={setProfileInfo} setSstory={setSstory}/>}
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
            {
                isLoading?<p>Please wait . . .</p>:""
                
            }
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
    const Fcs = useRef(null)
    useEffect(()=>{
        Fcs.current.focus()

    },[])
    return(
        <div id="input-w3-c7-main">
            <div id="input-w3-c7-main-element">
                <input type="text" className="input-w3-c7" placeholder="https://" onChange={(e)=>setLink(e.target.value)} ref={Fcs}/>
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
function DownloadAgain({setExtractedData,setProfileInfo,setSstory}){
    return(
        <a href='#app'className="Download-again-btn" onClick={()=>{setExtractedData(null); setProfileInfo(null); setSstory(null)}}>
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
                    <a href={ProfileInfo.profile_pic_url} download={`${ProfileInfo.username}_profile_img.jpeg`} className="w3-c7-download-btn">Download Profile Image</a>
                </div>
            </div>
            <div className="profile-result-w3-c4-username">
                <span>{ProfileInfo.username}</span>

            </div>
            <div className="profile-result-w3-c4-follow" >
                <div className="b-bold"><span className="bold">{ProfileInfo.followers}</span><span>followers</span></div>
                <div className="b-bold"><span className="bold">{ProfileInfo.following}</span><span>following</span></div>
                <div className="b-bold"><span className="bold">{ProfileInfo.posts}</span><span>post</span></div>
            </div>
            <div className="profile-result-w3-c4-txt-clip">
                <div className="profile-result-w3-c4-txt">{ProfileInfo.bio}
                <div className="profile-result-w3-c4-svg-container" onClick={copyToClipboard}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 c7-clip">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                </svg>
            </div>


                </div>
            <div className="profile-story-result-43-c4-story">
                {
                    ProfileInfo.story.map((e,i)=><StoryResult storyCover = {e.story_cover} storyVideo = {e.story_video} key={i} name ={ProfileInfo.username}/>)
                }
            </div>
            </div>
        </div>
    )
}



function StoryResult({storyCover,storyVideo,name}){
    return(
        <div className="result-sub img">
            <img src={storyCover} alt="" />
            <a href ={storyVideo} target="new"className="svg-container-w3-c7" download={name}>
            <svg width="21" height="21" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.99097 6.74137C2.42921 5.50195 3.20203 4.40806 4.22383 3.58092" stroke="black" strokeWidth="1.06667"
        strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.57776 9.11173C1.57776 9.94453 1.72788 10.7394 1.99099 11.482" stroke="black" strokeWidth="1.06667"
        strokeLinecap="round" strokeLinejoin="round"/>
  <path
    d="M14.6613 3.11243C14.7851 3.23632 14.8833 3.38338 14.9503 3.54523C15.0174 3.70708 15.0519 3.88054 15.0518 4.05571C15.0518 4.23088 15.0172 4.40432 14.9502 4.56614C14.8831 4.72796 14.7848 4.87499 14.6609 4.99882C14.537 5.12266 14.39 5.22088 14.2281 5.28788C14.0663 5.35488 13.8928 5.38935 13.7176 5.38931C13.5424 5.38928 13.369 5.35473 13.2071 5.28767C13.0454 5.2206 12.8983 5.12232 12.7745 4.99843C12.5244 4.74823 12.3839 4.40892 12.384 4.05515C12.3841 3.70138 12.5247 3.36213 12.7749 3.11203C13.0251 2.86193 13.3644 2.72147 13.7182 2.72154C14.0719 2.72162 14.4112 2.86223 14.6613 3.11243Z"
    stroke="black" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round"/>
  <path
    d="M12.6813 3.22758C11.8035 2.63142 10.8034 2.23944 9.75429 2.08042C8.70514 1.92141 7.63379 1.9994 6.61877 2.30868"
    stroke="black" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round"/>
  <path
    d="M7.85193 6.78681L10.9192 8.60092C11.0078 8.65333 11.0812 8.72794 11.1321 8.81737C11.1832 8.9068 11.21 9.00798 11.21 9.11093C11.21 9.21388 11.1832 9.31504 11.1321 9.40446C11.0812 9.49388 11.0078 9.56855 10.9192 9.62091L7.85193 11.435C7.76191 11.4883 7.6594 11.5168 7.55479 11.5176C7.4502 11.5185 7.34724 11.4916 7.25639 11.4398C7.16554 11.3879 7.09004 11.3129 7.03754 11.2225C6.98505 11.132 6.95744 11.0293 6.95752 10.9246V7.29723C6.95744 7.19262 6.98505 7.08987 7.03754 6.99939C7.09004 6.90892 7.16554 6.83395 7.25639 6.7821C7.34724 6.73025 7.4502 6.70338 7.55479 6.7042C7.6594 6.70503 7.76191 6.73354 7.85193 6.78681Z"
    stroke="black" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.22394 14.6208C3.88415 14.3519 3.56993 14.0522 3.28528 13.7256" stroke="black" strokeWidth="1.06667"
        strokeLinecap="round" strokeLinejoin="round"/>
  <path
    d="M6.61877 15.9142C7.68157 16.2377 8.80532 16.3075 9.89998 16.1183C10.9947 15.9291 12.0298 15.4861 12.9224 14.8247C13.8149 14.1634 14.5402 13.302 15.0399 12.3099C15.5395 11.3177 15.7999 10.2223 15.7999 9.11137C15.7999 8.68234 15.7556 8.26437 15.6829 7.85667"
    stroke="black" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<span>Download Story</span>
            </a>

        </div>
    )
}




function SingleStory({Sstory}){
    return(
        <div className="profile-result-w3-c7-story">
        <div className="result-sub img">
        <img src={Sstory['story_cover']} alt="" />
        <a href ={Sstory['story_video']} target="new"className="svg-container-w3-c7" download={true}>
                <svg width="21" height="21" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99097 6.74137C2.42921 5.50195 3.20203 4.40806 4.22383 3.58092" stroke="black" strokeWidth="1.06667"
                        strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.57776 9.11173C1.57776 9.94453 1.72788 10.7394 1.99099 11.482" stroke="black" strokeWidth="1.06667"
                        strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M14.6613 3.11243C14.7851 3.23632 14.8833 3.38338 14.9503 3.54523C15.0174 3.70708 15.0519 3.88054 15.0518 4.05571C15.0518 4.23088 15.0172 4.40432 14.9502 4.56614C14.8831 4.72796 14.7848 4.87499 14.6609 4.99882C14.537 5.12266 14.39 5.22088 14.2281 5.28788C14.0663 5.35488 13.8928 5.38935 13.7176 5.38931C13.5424 5.38928 13.369 5.35473 13.2071 5.28767C13.0454 5.2206 12.8983 5.12232 12.7745 4.99843C12.5244 4.74823 12.3839 4.40892 12.384 4.05515C12.3841 3.70138 12.5247 3.36213 12.7749 3.11203C13.0251 2.86193 13.3644 2.72147 13.7182 2.72154C14.0719 2.72162 14.4112 2.86223 14.6613 3.11243Z"
                    stroke="black" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M12.6813 3.22758C11.8035 2.63142 10.8034 2.23944 9.75429 2.08042C8.70514 1.92141 7.63379 1.9994 6.61877 2.30868"
                    stroke="black" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M7.85193 6.78681L10.9192 8.60092C11.0078 8.65333 11.0812 8.72794 11.1321 8.81737C11.1832 8.9068 11.21 9.00798 11.21 9.11093C11.21 9.21388 11.1832 9.31504 11.1321 9.40446C11.0812 9.49388 11.0078 9.56855 10.9192 9.62091L7.85193 11.435C7.76191 11.4883 7.6594 11.5168 7.55479 11.5176C7.4502 11.5185 7.34724 11.4916 7.25639 11.4398C7.16554 11.3879 7.09004 11.3129 7.03754 11.2225C6.98505 11.132 6.95744 11.0293 6.95752 10.9246V7.29723C6.95744 7.19262 6.98505 7.08987 7.03754 6.99939C7.09004 6.90892 7.16554 6.83395 7.25639 6.7821C7.34724 6.73025 7.4502 6.70338 7.55479 6.7042C7.6594 6.70503 7.76191 6.73354 7.85193 6.78681Z"
                    stroke="black" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.22394 14.6208C3.88415 14.3519 3.56993 14.0522 3.28528 13.7256" stroke="black" strokeWidth="1.06667"
                        strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M6.61877 15.9142C7.68157 16.2377 8.80532 16.3075 9.89998 16.1183C10.9947 15.9291 12.0298 15.4861 12.9224 14.8247C13.8149 14.1634 14.5402 13.302 15.0399 12.3099C15.5395 11.3177 15.7999 10.2223 15.7999 9.11137C15.7999 8.68234 15.7556 8.26437 15.6829 7.85667"
                    stroke="black" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            <span>Download Story</span>
            </a>

        </div>

        </div>   
    )
}