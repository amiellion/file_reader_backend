import React, { } from 'react';
import { capitalize } from 'lodash';
import { Row, Col, Divider } from 'antd';

//constants
import { duo } from '@/constants/grid';

//style
import style from '../style.module.scss';

//widgets
import InputGroup from '@/components/app/widgets/form_fields/antdesign/InputGroup';




const OtherDeductions = ({ otherDeductionsState, setOtherDeductionsState, earnings_deductions }) => {
    console.log("🚀 ~ file: line 15 ", otherDeductionsState);
    return (
        <>
            <Divider className={style["__divider-details"]} />
            <div className={style["detail"]}>Other Deductions </div>
            <Row className={style["container"]} gutter={[20, 20]}>
                {
                    Object.keys(otherDeductionsState).map((i, n) =>
                        <Col {...duo}>
                            <div className={style["value"]}>
                                <InputGroup
                                    label={capitalize(earnings_deductions?.otherDeductions[n])}
                                    id={`${i}`}
                                    onChangeCustom={(e) => {
                                        setOtherDeductionsState(state => ({
                                            ...state,
                                            [e.target.id]: Number(e.target.value)
                                        }));
                                    }} />
                            </div>
                        </Col>
                    )
                }
            </Row>
        </>
    );
};


export default OtherDeductions;