import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";

const Error = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.style.setProperty("--bg-color", theme === "dark" ? "#050505" : "#fff");
        document.documentElement.style.setProperty("--text-color", theme === "dark" ? "#fff" : "#000");
    }, [theme]);

    return (
        <main className="error-page">
            <div className="containerwwew">
                <div className="eyes">
                    <div className="eye">
                        <div className="eye__pupil"></div>
                    </div>
                    <div className="eye">
                        <div className="eye__pupil"></div>
                    </div>
                </div>

                <div className="error-page__heading">
                    <h1 className="error-page__heading-title">Looks like you're lost</h1>
                    <p className="error-page__heading-description">404 error</p>
                </div>
                <Link className="error-page__button" to='/'>
                    Back to Home
                </Link>

            </div>



        </main>
    );
};

export default Error;
