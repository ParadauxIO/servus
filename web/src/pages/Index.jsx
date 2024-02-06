import Logo from "../components/Logo"
import "./Index.scss"

import analysisImg from "../assets/undraw_analysis_dq08.svg";
import Accordion from "../components/Accordion";

const statusInfo = {
    "scealai": {
        "api": {

        }
    }
}


export default function Index() {

    return (
        <div className="index">
            <nav className="index-nav">
                <Logo/>
            </nav>

            <main>
                {/* <h1>Service Status</h1> */}
                <img src={analysisImg}/>
                <Accordion title="Scéalaí">
                    <p> This is a test to see if accordions are working as expected. </p>
                </Accordion>
            </main>

            <footer>
                <p>serv<strong>us</strong> developed by <a href="https://paradaux.io"><strong>paradaux</strong>.<strong>io</strong></a></p>
            </footer>
        </div>
    )
}