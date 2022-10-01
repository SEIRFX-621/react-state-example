import React from "react";

// Destructuring props in the function arguments.
const ChildMood = ({ moodScore, updateMoodFn }) => {
    const moodDivStyle = {
        margin: '0 auto',
        color: 'red',
        border: '5px solid green',
        width: '1000px',
        height: '100px'
    };
    const decreaseMood = () => {
        const newMoodScore = moodScore > 10 ? moodScore -= 10 : 0;
        updateMoodFn(newMoodScore);
    };

    return (
        <div style={moodDivStyle} onClick={decreaseMood}>
        Reduce Mood Score({moodScore})
        </div>
    );
};

export default ChildMood;