import React from 'react';

import PropTypes from 'prop-types';

import { Button as ButtonBS } from 'reactstrap';

export const IconButton = ({ type, icon, color }) => {
    return (
        <>
            <ButtonBS color={color} className={type}>
                <span className={icon} />
            </ButtonBS>
        </>
    )
}

IconButton.propTypes = {
    type: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string
}

IconButton.defaultProps = {
    type: 'align-items-center',
    color: 'primary',
    icon: 'fe fe-plus d-flex align-items-center py-1'
}