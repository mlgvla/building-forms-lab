import React from 'react';

const Bands = props => {

    const renderedBands = props.bands.map((band, index) => {
        return <li key={index}>{band.name}</li>
    } )
    return (
        <div>
            {renderedBands}
        </div>
    );
}

export default Bands;
