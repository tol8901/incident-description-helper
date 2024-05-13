import React, { useState } from 'react';

function OutputForm() {
    const [suggestedText, setSuggestedText] = useState('');

    const handleCopy = () => {
        navigator.clipboard.writeText(suggestedText);
    };

    const handleRegenerate = () => {
        // Send request to the server to regenerate the suggested text
        // Update the 'suggestedText' state with the new value
    };

    const handleDelete = () => {
        setSuggestedText('');
    };

    return (
        <div>
            <h2>Suggested text</h2>
            <form>
                <input
                    type="text"
                    value={suggestedText}
                    onChange={(e) => setSuggestedText(e.target.value)}
                />
            </form>
            <button onClick={handleCopy}>Copy</button>
            <button onClick={handleRegenerate}>Regenerate</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default OutputForm;
