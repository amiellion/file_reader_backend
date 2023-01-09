import React from 'react';
import { Row, Col } from 'antd';

import style from './font.module.scss';

export const Font = ({ font, name }) => {
    return (
        <>
            <Row gutter={[8,8]}>
                <Col span={12}>
                    <div className={font}>
                        {name}
                    </div>
                </Col>
            </Row>
        </>
    );
}