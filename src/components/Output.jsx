import "./Output.css"

function Output({ text }) {
    const formatWord = (word) => {
        // Remove punctuation for processing but keep it for display
        const punctuation = word.match(/[\W_]+$/)?.[0] || ""; // Extract punctuation
        const cleanWord = word.replace(/[\W_]+$/, ""); // Remove punctuation

        const length = cleanWord.length;
        let highlightLength = 1; // Default to 1 character

        if (length <= 3) {
            highlightLength = 1; // Highlight the whole word for short words
        } else if (length >= 4) {
            highlightLength = Math.round(length/2); // Highlight 2 characters for long words
        }

        const highlightPart = cleanWord.slice(0, highlightLength);
        const restPart = cleanWord.slice(highlightLength);

        return (
            <span key={word}>
                <strong>{highlightPart}</strong>
                {restPart}
                {punctuation}{" "}
            </span>
        );
    };

    const formatText = (text) => {
        return text.split(" ").map((word) => formatWord(word));
    };
    return <section id="output">
         <p className="title">Output</p>
        <p id="formatted-text" style={{flexWrap: "wrap"}}>{formatText(text)}</p>
    </section>
}


export default Output