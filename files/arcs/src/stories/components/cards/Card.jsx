import React from 'react';
import PropTypes from 'prop-types';

import style from './card.module.scss';

export const Card = ({ title, height, width }) => {
    
    // inline styles
    const dimensions = {
        height: height,
        width: width
    }
    
    return (
        <>
            <div className={style["card_container"]}
                 style={dimensions}
            >
                <div>
                    { title }
                </div>
            </div>
        </>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string
}

Card.defaultProps = {
    title: 'Arcs Card',
    height: '450px',
    width: '450px'
}