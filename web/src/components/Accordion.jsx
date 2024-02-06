import { useState } from "react";
import "./Accordion.scss";

export default function Accordion({ title, children }) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="accordion" onClick={() => setIsShown(prev => !prev)}>
            <div className="accordion-title">
                <h2>{title}</h2>
                <h2>{isShown ? "-" : "+"}</h2>
            </div>
            <div className={"accordion-content" + (isShown ? "" : " hidden")}>
                {children}
            </div>
        </div>
    );
}