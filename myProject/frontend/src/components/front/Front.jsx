import './front.css'

const Front = () => (
    <>
        <div className="fMain-1">
            <div className="frontpage">
                <div className="frontpageTittle">
                    <span className="frontTittle">Empowering Creativity,
                        Connecting Dreams!!</span>
                </div>
                <div className="frontpageimage">
                    <img src="assests/p2.png" alt="" className="fImage" />
                </div>
            </div>

            <div className="frontpaheTry">
                <span className="tryTittle">"Give our website a try today! Experience innovative project management tools, collaborative workspaces, and certification
                    opportunities that can enhance your skills and advance your career. Join us now!!!"</span>

                <button className="trybtn">Try for free</button>

            </div>
            <hr />
        </div>

        <div className="main-0">
            <span className="main-0-tittle">we offer two distinct sections:</span>
            <div className="main-submain-1">
                <div className="main-1">
                    <span className="main-1-text">
                        "Feeds" on our platform is your window to a world of project
                        accomplishments. It's where completed projects are
                        showcased like newspaper articles. Stay updated on the
                        latest achievements, draw inspiration, and celebrate the
                        successes of fellow creators. <span className="seemore-1">Read more..</span>
                    </span>
                </div>
                <div className="main-1">
                    <img src="assests/p6.png" alt="" className="main-1-image" />
                </div>
            </div>
            <div className="main-submain-1 main-submain-2">
                <div className="main-1">
                    <img src="assests/p6.png" alt="" className="main-1-image" />
                </div>
                <div className="main-1">
                    <span className="main-1-text">"Workspace" is your creative haven, equipped
                        with a comprehensive set of tools. Here, you
                        have the freedom to edit, refine, and craft your
                        projects. Collaborate seamlessly with your
                        team, bringing your ideas to life with efficiency
                        and precision. Your workspace, your
                        masterpiece.  <span className="seemore-1">Read more..</span></span>
                </div>
            </div>
        </div>
        <div className="main-2">
            <div className="submain-1">
                <span className="submain-2-text">
                    we believe in celebrating creativity and fostering collaboration and offer a public feed where finished projects are showcased to inspire and engage our community. <span className='j-1'>Join us</span>  in celebrating the accomplishments of our talented members and be part of this exciting journey in project management and innovation."
                </span>
            </div>
        </div>

        <div className="main-4">
            
        </div>

        <div className="main-3">
            <div className="submain-3 submain-5">
                <span className="submain-3-tittle">Certification</span>
                <span className="submain-3-text">
                    Project Mela provides certificates to
                    recognize and celebrate your team's
                    achievements, further enhancing
                    engagement and motivation <br />
                    <br />
                    <span className="learnmore-1">Learn more <span className='tagp'>>> </span></span>
                </span>
            </div>
            <div className="submain-3 submain-4">
                <img src="assests/p7.png" alt="" className="submain-3Image" />
            </div>

        </div>
    </>
)

export default Front
