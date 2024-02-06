import { useState } from "react";
import "./Accordion.scss";

/**
 * @param title The title of the accordion
 * @param subtitle A component which is optionally displayed next to the plus/minus icon.
 * @param children The content displayed while the accordion is open.
 * @author Rían Errity
 * Represents an accordion component, which "expands" when clicked to show hidden content.
 */
export default function Accordion({ title, Subtitle, children }) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="accordion" onClick={() => setIsShown(prev => !prev)}>
            <div className="accordion-title">
                <h2>{title}</h2>
                <div>
                    {Subtitle && <Subtitle/>}
                    <h2>{isShown ? "-" : "+"}</h2>
                </div>
                
            </div>
            <div className={"accordion-content" + (isShown ? "" : " hidden")}>
                {children}
            </div>
        </div>
    );
}