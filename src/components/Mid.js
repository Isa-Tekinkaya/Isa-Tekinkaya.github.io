import Lottie from "lottie-react";
import animation_robot from "../animations/animation_robot.json";

export default function Mid(){
    
    return (
    <> 
    <div className="robot">
        <Lottie animationData={animation_robot} />
    </div>
    
    </>
    )
}