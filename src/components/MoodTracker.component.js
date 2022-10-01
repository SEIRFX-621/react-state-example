import React, {useState, useTransition} from 'react';

const MoodTracker = props => {
    const mouseDivStyle = {
        margin: '0 auto',
        color: 'red',
        border: '5px solid black',
        width: '100px',
        height: '100px'
      };

    const [state, setState] = useState({
        moodPoints: 0,
        updates: 0,
        submitText: '',
        mouseOverCount: 0
    });
    const increaseMood = () => {
        let newMoodPoints;
        if (state.moodPoints +10 >= 100) { // Check to see if current state is greater than or equal to 10
            newMoodPoints = 0; // If true, set newMoodPoints variable to 0.
        } else {
            newMoodPoints = state.moodPoints +10; // If false, set newMoodPoints to current moodPoints plus 1
        }
        setState({
            ...state,
            moodPoints: newMoodPoints
        })
    }
    const onChangeMoodUpdate = (e) => {
        let newMoodPoints = e.target.value && e.target.value !== '' ? parseInt(e.target.value) : 0;
        let newUpdates = state.updates +1;
        setState({
            ...state,
            moodPoints: newMoodPoints,
            updates: newUpdates
        })
    }
    const onChangeSubmitTextUpdate = (e) => {
        let newSubmitText = e.target.value;
        setState({
            ...state,
            submitText: newSubmitText
        })
    }
    const onMouseOverUpdate = () => {
        console.log('hit on mouse over');
        let newMouseOverCount = state.mouseOverCount +1;
        setState({
            ...state,
            mouseOverCount: newMouseOverCount
        })
    }
    const onSubmitAction = (e) => {
        e.preventDefault();
        const newSubmitText = e.target.submitText.value;
        console.log('New text was submitted to state: ' + newSubmitText);
        setState({
            ...state,
            submitText: newSubmitText
        })
    }
    return (
        <div>
            <p>On a scale of 1-10</p>
            <p>You are this happy: {state.moodPoints}</p>
            <label>Edit mood points directly</label>
            <input value={state.moodPoints} onChange={onChangeMoodUpdate}></input>
            <p>Total mood update actions = {state.updates}</p>
            <button onClick={increaseMood}>Cheer up!</button>
            <p>Submit Text value = {state.submitText}</p>
            <form onSubmit={onSubmitAction}>
                <label>On submit text</label>
                <input name="submitText" value={state.submitText} onChange={onChangeSubmitTextUpdate} required/>
                <button type="submit">Submit</button>
            </form>
            <p>on mouse over this vallue will increase <strong>{state.mouseOverCount}</strong></p>
            <div style={mouseDivStyle} onMouseOver={onMouseOverUpdate}>mouse over to count</div>
        </div>
    )
}

export default MoodTracker;