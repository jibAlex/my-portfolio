import carwash from "../assets/IMG_8762.webp";
import catwash from "../assets/IMG_8778.webp";
import seqouiapizza from "../assets/IMG_8810.webp";
import seqouiatree from "../assets/IMG_8821.webp";
import seqouiavideo from "../assets/Untitled design.mp4";
import deadlift from "../assets/IMG_9077.webp";
import bench from "../assets/IMG_9073.webp";
import nolafood from "../assets/IMG_9035.webp";
import begneits from "../assets/IMG_8933.webp";
import waffleHouse from "../assets/IMG_8910.webp";
import groupPicture from "../assets/238C1842-B043-492B-AE46-B76FBC288852-76426-00000E1E452C6C8F.webp"
import waffleHouselogo from "../assets/IMG_8915.webp";

function Blog() {
    return (
        <main className="section">
            <h2>My blog</h2>
            <p>Welcome to my blog! Here, I share my thoughts on web development, programming, and technology. Stay tuned for updates and insights!</p>

            <article className="blog-post">
                <h3>Spring Break 2026</h3>
                <p>This years Spring Break was jam packed with so many activities, from building a carwash, to going to Seqouia, and competing in the USAPL Collegiate Nationals in New Orleans. I did a lot. </p>

                <h3> Car Wash </h3>
                <p> So once upon a time, my friend hit me up and was like "You wanna build a carwash? Pays $1,500." He had me at $1,500, so you know I took my ass up to Tulare for a week and built a carwash for a week.</p>
                <div className="image-grid">
                    <img src={carwash} 
                    alt="Car Wash" 
                    loading="lazy" 
                    decoding="async" 
                    onLoad={(e) => e.target.classList.add("loaded")}/>
                    <img src={catwash} 
                    alt="Cat from the area" 
                    loading="lazy" 
                    decoding="async" 
                    onLoad={(e) => e.target.classList.add("loaded")}/>
                </div>

                <h3>Seqouia</h3>
                <p> Since we were in the area we also decided to hit up seqouia.</p>
                <div className="image-grid">
                    <img src={seqouiapizza} 
                    alt="Seqouia Pizza" 
                    loading="lazy" 
                    decoding="async" 
                    onLoad={(e) => e.target.classList.add("loaded")}/>
                    <video className="blog-video" controls preload="metadata">
                        <source src={seqouiavideo} type="video/mp4" loading="lazy" />
                    </video>
                    <img src={seqouiatree} 
                    alt="Seqouia Tree" 
                    loading="lazy" 
                    decoding="async" 
                    onLoad={(e) => e.target.classList.add("loaded")}/>
                </div>

                <h3>USAPL Collegiate Nationals</h3>
                <p> Finally, we made it to the USAPL Collegiate Nationals in New Orleans. I had hella food and hit all time platform pr's! We brought home 2 #1 titles for CSUSM, and I myself am ranked #22 in the nation among college students!</p>
                <div className="image-grid">
                    <img src={groupPicture} 
                    alt="Group Picture" 
                    loading="lazy" 
                    decoding="async" 
                    onLoad={(e) => e.target.classList.add("loaded")}/>
                </div>
                <div className="image-grid">
                    <img src={deadlift} alt="Deadlift" 
                    loading="lazy" 
                    decoding="async" 
                    onLoad={(e) => e.target.classList.add("loaded")}/>
                    <img src={bench} 
                    alt="Bench Press" 
                    loading="lazy" 
                    decoding="async" 
                    onLoad={(e) => e.target.classList.add("loaded")}/>
                    <img src={nolafood} 
                    alt="New Orleans Food" 
                    loading="lazy" 
                    decoding="async" 
                    onLoad={(e) => e.target.classList.add("loaded")}/>
                    <img src={begneits} alt="Begneits" 
                    loading="lazy" 
                    decoding="async" 
                    onLoad={(e) => e.target.classList.add("loaded")}/>
                    <img src={waffleHouse} alt="Waffle House" 
                    loading="lazy" 
                    decoding="async" 
                    onLoad={(e) => e.target.classList.add("loaded")}/>
                    <img src={waffleHouselogo} alt="Waffle House Logo" 
                    loading="lazy" 
                    decoding="async" 
                    onLoad={(e) => e.target.classList.add("loaded")}/>
                </div>    
            </article>
        </main>
    );
}

export default Blog;