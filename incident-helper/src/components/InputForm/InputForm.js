import React, { useState } from 'react';

const InputForm = () => {
    const [problem, setProblem] = useState('');
    const [fix, setFix] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the user input to the server
        console.log('Submitting:', problem, fix);
        // Reset the form
        setProblem('');
        setFix('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>What was the problem?</legend>
                <input
                    type="text"
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                />
            </fieldset>
            <fieldset>
                <legend>What was fixed?</legend>
                <input
                    type="text"
                    value={fix}
                    onChange={(e) => setFix(e.target.value)}
                />
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    );
};

export default InputForm;
