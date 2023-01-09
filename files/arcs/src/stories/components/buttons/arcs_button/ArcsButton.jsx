import React from 'react';
import { Row, Col, Button } from 'antd';

import style from './style.module.scss';

export const ArcsButton = ({ set, type }) => {
    return (
        <>
            <Row 
                style={{
                    display: 'flex',
                    alignItems: 'center', 
                    width: '500px' 
                }}>
                <Col span={12}>
                    <Button
                        className={style[`${set}`]}
                    >{type}</Button>
                </Col>
            </Row>
        </>
    );
}

ArcsButton.defaultProps = {
    set: 'Primary',
    type: 'Click!'
} 

