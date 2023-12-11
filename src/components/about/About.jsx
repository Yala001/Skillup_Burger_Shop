// Write all the code here
import React from "react";


const About = () => {
 return (
    <section className="about">
        <main>
            <h1>About us</h1>
                <article>
                    <h4>burger shop </h4>
                    <p>This is Burger Shop. The place for most tasty burgers on the entire Earth</p>
                    <br />
                    <br />
                    <p>Explore the various types of food and burgers. Click below to see the menu</p>
                </article>
                <a href="/menu"><img src="../assets/search-icon.png" alt="search icon"></img></a>
                <div>
                    <h2>founder</h2>
                    <article>
                    <div> 
                    <img src="../assets/skj.jpg" alt="photo of the owner Nelson" />
                    <h3>Nelson</h3>
                    <p>I am Nelson, the founder of the Burder Shop. Affiliated to God's taste</p> 
                    </div>
                    </article>
                </div> 

        </main>


    </section>
 )

}

export default About;