import React from "react";
import ProfilePic from "../components/images/dev-profile.png"

const Home = () => {
    return (
        <main className="vh">
                {/* image */}
                <section>
                    <img src={ProfilePic} alt="profile pic" />
                </section>
                {/* bio */}
                <section className="bio">
                    <h2>Hello, I'm Dev.</h2>
                    <p>
                        I’m a web developer and graphic designer based in Dallas, Texas. 
                        I’ve been exploring graphic design and web development since Tom 
                        was in my Top 8. After a number of years in a industry I found was not 
                        meant for me,  I took a step into the unknown as a creative designer.  
                    </p>
                    <p>
                        Most of my time is spent writing music, playing or attending shows 
                        around town, walking my dog Nugget, or mowing my lawn.
                    </p>
                    <h3>
                        Technologies
                    </h3>
                    <p>
                        Full Stack MERN,  Bootstrap, Chakra, Parallax,
                        MySQL Procreate, Photoshop, Illustrator, 
                        and Adobe XD.
                    </p>
                </section>
        </main>
    )
}

export default Home;