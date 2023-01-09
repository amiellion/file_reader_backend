import React, { } from 'react';
import { Row, Col, Space } from 'antd';

//constants
import { duo } from '@/constants/grid';

//style
import style from '../style.module.scss';



const BasicPay = ({ id, name, hours, rate, plan, days, pay }) => (
    <>
        <div className={style["container"]}>
            <div style={{ marginRight: '20px' }}>
                <Row style={{ marginBottom: 25 }}>
                    <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                        <Col span={24}><div className={style["detail"]}>Employee ID </div></Col>
                        <Col span={24}>< div className={style["value"]}>{id ? id : '----'}</div></Col>

                        <Col span={24}><div className={style["detail"]}>Employee Name </div></Col>
                        <Col span={24}><div className={style["value"]}>{name ? name : '----'}</div></Col>
                    </Space>
                </Row>

                <Row gutter={[20, 5]}>
                    {/* <Col {...duo}><div className={style["detail"]}>Credit Hours: </div></Col> */}
                    <Col {...duo}><div className={style["value"]}>{hours ? hours : '----'}</div></Col>

                    {/* <Col {...duo}><div className={style["detail"]}>Rate: </div></Col> */}
                    <Col {...duo}><div className={style["value"]}>{rate ? rate : '----'}</div></Col>

                    {/* <Col {...duo}><div className={style["detail"]}>Compensation Plan: </div></Col> */}
                    <Col {...duo}><div className={style["value"]}>{plan ? plan : '----'}</div></Col>

                    {/* <Col {...duo}><div className={style["detail"]}>Working Days: </div></Col> */}
                    <Col {...duo}><div className={style["value"]}>{days ? days : '----'}</div></Col>

                    {/* <Col {...duo}><div className={style["detail"]}>Basic Pay: </div></Col> */}
                    <Col {...duo}><div className={style["value"]}>{pay ? pay : '----'}</div></Col>
                </Row>
            </div>
        </div>
    </>
);


export default BasicPay;