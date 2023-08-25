import React, { useState } from "react";

export default function Hero(){
    const [active, setActive] = useState(false);
    const handleMouseOver = () => {
        setActive(true);
    }
    return (
        <>
    <div className="concept-concept-four">
            <h1
            className="Dev">Software Developer
            <br></br>
            <h1 onMouseOver={handleMouseOver}
            className={active ? ".Me" : "Me"}>
            Isa Tekinkaya</h1>
            </h1>
    </div>
        </>
    )
}