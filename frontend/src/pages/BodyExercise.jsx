import React from "react";
import './BodyExercise.css'; // Import custom CSS for styling
import FrontVideo from '../assets/videos/male-dumbbell-incline-bench-press-front_q2q0T12.mp4';
import SideVideo from '../assets/videos/male-dumbbell-incline-bench-press-side_2HBfFN3.mp4';

function BodyExercise() {
    return (
        <>
            <h1 className="BodyPart">Chest</h1>
            <div className="container">
                <h3 className="exerciseName">Incline Press</h3>
                <div className="video-container">
                    <video
                        src={FrontVideo}
                        className="exercise-video"
                       
                        autoPlay
                        loop
                        muted
                        alt="Incline Press Front View"
                    />
                    <video
                        src={SideVideo}
                        className="exercise-video"
                        
                        autoPlay
                        loop
                        muted
                        alt="Incline Press Side View"
                    />
                </div>
                <div className="steps">
                    <div className="step-row">
                        <div className="notation">1</div>
                        <p className="step-text">
                            Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.
                        </p>
                    </div>
                    <div className="step-row">
                        <div className="notation">2</div>
                        <p className="step-text">Lower the dumbbells to your mid chest.</p>
                    </div>
                    <div className="step-row">
                        <div className="notation">3</div>
                        <p className="step-text">Raise the dumbbells until you've locked your elbows.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BodyExercise;