
import "./container2.css"


export default function Section2Main({Heading,setHeading}){
    return(
        <section id="section2-main">
            <Section2Heading/>
            <Section2Body Heading={Heading} setHeading={setHeading}/>
        </section>
    )
}
function Section2Heading(){
    return(
        <div className="section-2-heading">
            <h2 className="section-2-heading w4-c7">Instagram Downloader <span className="w4-c7-span-head">Features</span></h2>
            <p className="w4-c7-p">Below, discover the key functionalities of our Instagram Downloader service. Among them, the following stand out</p>
            
        </div>
    )
}
function Section2Body({Heading,setHeading}){
    return(
        <div className="section-2-body-main">
            <div className="w4-c7-s-b-main">
                <div className="w4-c7-s-b-txt">
                    <a href="#" className="w4-c7-s-b-txt-a" onClick={()=>setHeading(()=>"Instagram Photo Downloader")}>
                    Instagram Photo Downloader
                    </a>
                    <p className="w4-c7-s-b-txt-p">
                    Effortlessly access and download Instagram photos anonymously, preserving their original resolution or opting for reduced sizes, all free of charge. With our service, downloaded images are conveniently stored for easy access whenever you need them.
                    </p>
                </div>
                <div className="w4-c7-s-b-img-container" >
                    <img src="img/insta-img.png" alt="instagram-photo-downloader" className="w4-c7-s-b-img"/>
                </div>
            </div>
            <div className="w4-c7-s-b-main">
                <div className="w4-c7-s-b-img-container order" >
                    <img src="img/reels-img1.png" alt="instagram-photo-downloader" className="w4-c7-s-b-img"/>
                </div>
                <div className="w4-c7-s-b-txt ">
                    <a href="#" className="w4-c7-s-b-txt-a" onClick={()=>setHeading(()=>"Instagram Reels Downloader")}>
                    Instagram Reels Downloader
                    </a>
                    <p className="w4-c7-s-b-txt-p">
                    
                    Easily access and download Instagram videos and Reels anonymously, maintaining their original resolution or selecting reduced sizes, all at no cost. Our service ensures your downloaded videos and Reels are stored securely, making them readily available whenever you need them.
                    </p>
                </div>
            </div>
            <div className="w4-c7-s-b-main">
                <div className="w4-c7-s-b-txt">
                    <a href="#" className="w4-c7-s-b-txt-a" onClick={()=>setHeading(()=>"Instagram Video Downloader")}>
                    Instagram Video Downloader
                    </a>
                    <p className="w4-c7-s-b-txt-p">
                    Seamlessly download Instagram videos and Reels anonymously, retaining their original resolution or opting for smaller sizes, all for free. Our service guarantees that your downloaded content is stored safely, ensuring easy access whenever you need it.
                    </p>
                </div>
                <div className="w4-c7-s-b-img-container" >
                    <img src="img/video.png" alt="instagram-photo-downloader" className="w4-c7-s-b-img"/>
                </div>
            </div>
            <div className="w4-c7-s-b-main">
                <div className="w4-c7-s-b-img-container order" >
                    <img src="img/carousel.png" alt="instagram-photo-downloader" className="w4-c7-s-b-img"/>
                </div>
                <div className="w4-c7-s-b-txt" onClick={()=>setHeading(()=>"Instagram Carousel & Album Downloader")}>
                    <a href="#" className="w4-c7-s-b-txt-a">
                    Carousel / Album Downloader
                    </a>
                    <p className="w4-c7-s-b-txt-p">
                    Easily download Instagram videos, Reels, and Carousel/Album posts anonymously, preserving their original resolution or selecting smaller sizes, all for free. Our service ensures your downloaded content is securely stored and readily accessible whenever you need it.
                    </p>
                </div>
            </div>
            

        </div>
    )
}