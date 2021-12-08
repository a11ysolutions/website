import "./BicolorTitledText.css";


function BicolorTitledText({ color1, color2, color1Text, color2Text, children, className, breakLine }) {

    return (
        <div className={"bicolor-titled-container " + className}>
            <h1 style={{ color: color2 }}>
                <span style={{ color: color1 }}>
                    {color1Text}
                </span>
                {breakLine ? <br /> : " "}
                {color2Text}
            </h1>
            <div>
                {children}
            </div>
        </div>
    )
}

export default BicolorTitledText;
