// Write all the code here
import React from "react";
import ReactDOM from "react-dom";
import searchicon from "../../assets/search_icon.png";
import nelson from "../../assets/skj.jpg";


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
                    <a><a href="/menu"><img src={searchicon} alt="search icon"></img></a></a>
                </article>
                
                <div>
                    <h2>founder</h2>
                    <article>
                    <div> 
                    <img src={nelson} alt="photo of the owner Nelson" />
                    <h3>Nelson</h3>
                    </div>
                    <p>I am Nelson, the founder of the Burder Shop. Affiliated to God's taste</p> 
                    
                    </article>
                </div> 

        </main>


    </section>
 )

}

export default About;