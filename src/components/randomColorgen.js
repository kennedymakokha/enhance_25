// Filename - App.js

import useGenerateRandomColor from "../helpers/useGenerateRandomColor";

// import useGenerateRandomColor from "./useGenerateRandomColor";

function RandomColorGenerator() {
    const { color, generateColor } =
        useGenerateRandomColor();
    const names = [
        "kennedy makokha ",
        "James  makokha ",
        "kennedy Otteba ",
        "kennedy Marion "
    ]
    let newcolor = ["#" + color]
    let elementStyle = "bg-[#" + color + "]"
    // console.log(elementStyle)
    return (
        <div
            className={elementStyle}
        // style={{
        //     height: "100vh",
        //     width: "100vw",
        //     // backgroundColor: "#" + color,
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        // }}
        >
            <button
                style={{
                    padding: "10px",
                    borderRadius: "10px",
                    backgroundImage:
                        "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
                    fontSize: "larger",
                }}
                onClick={generateColor}
            >
                Generate random color
            </button>
            {names.map((name, i) => (
                <ul>
                    <li>
                        <div className={`text-[${newcolor}]`}><span className={`text-[${newcolor}]`}>{i}</span> {name}</div>
                    </li>
                </ul>

            ))}
        </div>
    );
}

export default RandomColorGenerator;
