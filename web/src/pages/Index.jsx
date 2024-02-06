import Logo from "../components/Logo"
import "./Index.scss"

import analysisImg from "../assets/undraw_analysis_dq08.svg";
import Accordion from "../components/Accordion";

import { IconSquareCheck, IconTilde, IconX } from "@tabler/icons-react"

const statusInfo = {
    "scealai": {
        "api": {

        }
    }
}

const NoIssues = () => (
    <div className="issues-subtitle">
        <IconSquareCheck
            color="#006D77"
            style={{ verticalAlign: 'middle' }}
            size="1.4rem"

        />
        <p className="issues-subtitle-text">No Known Issues.</p>
    </div>
);

const SomeIssues = () => (
    <div className="issues-subtitle">
        <div>
        <IconTilde
            color="#f26419"
            style={{ verticalAlign: 'middle' }}
            size="1rem"
        />
        </div>
        <p className="issues-subtitle-text">Partial Outage.</p>
    </div>
);

const AllIssues = () => (
    <div className="issues-subtitle">
        <IconX
            color="#ff6884"
            style={{ verticalAlign: 'middle' }}
            size="1.4rem"

        />
        <p className="issues-subtitle-text">Full Outage.</p>
    </div>
);

export default function Index() {

    return (
        <div className="index">
            <nav className="index-nav">
                <Logo />
            </nav>

            <main>
                {/* <h1>Service Status</h1> */}
                <img src={analysisImg} />
                <Accordion
                    title="Scéalaí"
                    Subtitle={<NoIssues />}
                >
                    <p> This is a test to see if accordions are working as expected. </p>
                </Accordion>
                <Accordion
                    title="API"
                    Subtitle={<SomeIssues />}
                >
                    <p> This is a test to see if accordions are working as expected. </p>
                </Accordion>
                <Accordion
                    title="Mol an Óige"
                    Subtitle={<AllIssues/>}
                >
                    <p> This is a test to see if accordions are working as expected. </p>
                </Accordion>
            </main>

            <footer>
                <p>serv<strong>us</strong> developed by <a href="https://paradaux.io"><strong>paradaux</strong>.<strong>io</strong></a></p>
            </footer>
        </div>
    )
}