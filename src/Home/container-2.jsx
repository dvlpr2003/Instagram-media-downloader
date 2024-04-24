
import "./container2.css"


export default function Section2Main(){
    return(
        <section id="section2-main">
            <Section2Heading/>
            <Section2Body/>
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

function Section2Body(){
    return(
        <div className="section-2-body-main">
            <div className="w4-c7-s-b-main">
                <div className="w4-c7-s-b-txt">
                    <a href="#" className="w4-c7-s-b-txt-a">
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
                    <a href="#" className="w4-c7-s-b-txt-a">
                    Instagram Reels Downloader
                    </a>
                    <p className="w4-c7-s-b-txt-p">
                    Effortlessly access and download Instagram photos anonymously, preserving their original resolution or opting for reduced sizes, all free of charge. With our service, downloaded images are conveniently stored for easy access whenever you need them.
                    </p>


                </div>
            </div>
            <div className="w4-c7-s-b-main">
                <div className="w4-c7-s-b-txt">
                    <a href="#" className="w4-c7-s-b-txt-a">
                    Instagram Video Downloader
                    </a>
                    <p className="w4-c7-s-b-txt-p">
                    Effortlessly access and download Instagram photos anonymously, preserving their original resolution or opting for reduced sizes, all free of charge. With our service, downloaded images are conveniently stored for easy access whenever you need them.
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
                <div className="w4-c7-s-b-txt">
                    <a href="#" className="w4-c7-s-b-txt-a">
                    Carousel / Album Downloader
                    </a>
                    <p className="w4-c7-s-b-txt-p">
                    Effortlessly access and download Instagram photos anonymously, preserving their original resolution or opting for reduced sizes, all free of charge. With our service, downloaded images are conveniently stored for easy access whenever you need them.
                    </p>


                </div>
            </div>

        </div>
    )
}