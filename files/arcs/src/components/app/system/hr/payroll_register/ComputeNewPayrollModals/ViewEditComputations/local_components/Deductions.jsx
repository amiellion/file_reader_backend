import React, { } from 'react';
import { Row, Col, Divider } from 'antd';

//constants
import { duo } from '@/constants/grid';

//style
import style from '../style.module.scss';



const Deductions = ({ deductions_data }) => (
    <>
        <Divider className={style["__divider-details"]} />
        <div className={style["detail"]}>Deductions</div>
        <div className={style["container"]}>
            {/* <div style={{ marginRight: '20px' }}> */}
            <Row style={{ marginRight: '20px' }} gutter={[20, 5]}>
                <Col {...duo}>
                    <div className={style["value"]}>{deductions_data.totalDeductions ? deductions_data.totalDeductions : '----'}</div>
                </Col>
                <Col {...duo}>
                    <div className={style["value"]}>{deductions_data.pagibig ? deductions_data.pagibig : '----'}</div>
                </Col>
                <Col {...duo}>
                    <div className={style["value"]}>{deductions_data.sss ? deductions_data.sss : '----'}</div>
                </Col>
                <Col {...duo}>
                    <div className={style["value"]}>{deductions_data.philhealth ? deductions_data.philhealth : '----'}</div>
                </Col>
                <Col {...duo}>
                    <div className={style["value"]}>{deductions_data.withholdingtax ? deductions_data.withholdingtax : '----'}</div>
                </Col>
            </Row>
        </div>
    </>
);


export default Deductions;