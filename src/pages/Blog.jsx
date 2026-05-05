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
            <p>Welcome to my blog! Here, I share my thoughts on my personal life and experiences.</p>

            <article className="blog-post">
                <h3>Spring Break 2026</h3>
                <p>This year’s Spring Break was packed with a wide range of activities. 
                    I built a carwash, traveled to Sequoia, and competed in the USAPL Collegiate Nationals in New Orleans. 
                    It was a busy and productive break filled with both hands-on projects and memorable experiences.
 </p>

                <h3> Car Wash </h3>
                <p> So once upon a time, my friend hit me up and was like "You wanna build a carwash? Pays $1,500." 
                    He had me at $1,500, so you know I took my ass up to Tulare for a week and built a carwash for a week.</p>
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
                <p> Since we were in the area we also decided to hit up seqouia. I have to say it was genuinley one of the most beautiful places I've ever been to.
                    I plan on visiting all 9 National Parks in California and I can't wait to come back to Seqouia since we only got to drive through it. 
                    I'm planning to hit up Yosmite next, so stay tuned for that blog post!
                </p>
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
                <p> Finally, we made it to the USAPL Collegiate Nationals in New Orleans. I had hella food and hit all time platform pr's! We brought home 2 #1 titles for CSUSM, and I myself am ranked #22 in the nation among college students!
                    This was my last competition in my collegiate career, so it was a bittersweet moment. I'm grateful for the experience and the memories I made with my teammates. Truly a family outside of home. 
                    I'm looking forward to competing in the USAPL Open division next year and seeing how I stack up against the best lifters in the country!
                </p>

                <p>The food was amazing, as you can see from the images below. 
                    We had a little of everything, I tried gator for the first time (it just tastes like chicken), 
                    definitely had to go to Waffle House- when in Rome am I right? Finally finished up with some bignets from Cafe Du Monde, the oldest cafe in the world selling bignets.
                </p>
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