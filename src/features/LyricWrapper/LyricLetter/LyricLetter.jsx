import React from 'react';

import './LyricLetter.scss'

const LyricLetter = props => {
    return (
        <div className="lyricLetter">
            <pre>{props.songLetter}</pre>
            <button onClick={props.handleBackButton} className="-btngoback">
                Voltar
            </button>
        </div>
    );
}

export default LyricLetter;