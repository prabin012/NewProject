import Mblnav from '../../mblnav/Mblnav'
import Mobile from '../../mobile/Mobile'
import '../features/upcomming.css'
import './features.css'

const Upcomming = () => {
    return (
        <div>
            <Mblnav/>
            <div className="main-faeture-cont-1">
                <div className="featurebody featurebody-1">
                    <div className="feat-1">
                        <p>16</p> 
                        <h4>DEC</h4>
                    </div>
                    <div className="feat-2">
                        <div className="feat-3">
                            <h4>Tittle</h4>
                        </div>
                        <div className="feat-4">
                            <a href="">Register...</a><br />
                            <a href="">About..</a>
                        </div>
                        <div className="feat-5">
                            <p>Date | Country</p>
                        </div>
                    </div>
                </div>
                <div className="featurebody featurebody-1">
                    <div className="feat-1">
                        <p>16</p> 
                        <h4>DEC</h4>
                    </div>
                    <div className="feat-2">
                        <div className="feat-3">
                            <h4>Tittle</h4>
                        </div>
                        <div className="feat-4">
                        <a href="">Register...</a><br />
                            <a href="">About...</a>
                        </div>
                        <div className="feat-5">
                            <p>Date | Country</p>
                        </div>
                    </div>
                </div>
                <div className="featurebody featurebody-1">
                    <div className="feat-1">
                        <p>16</p> 
                        <h4>DEC</h4>
                    </div>
                    <div className="feat-2">
                        <div className="feat-3">
                            <h4>Tittle</h4>
                        </div>
                        <div className="feat-4">
                        <a href="">Register...</a><br />
                            <a href="">About...</a>
                        </div>
                        <div className="feat-5">
                            <p>Date | Country</p>
                        </div>
                    </div>
                </div>
            </div>
<Mobile/>
        </div>
    )
}

export default Upcomming
