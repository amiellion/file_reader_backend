import React, { } from 'react';
import { capitalize } from 'lodash';
import { Row, Col, Divider } from 'antd';

//constants
import { duo } from '@/constants/grid';

//style
import style from '../style.module.scss';

//widgets
import InputGroup from '@/components/app/widgets/form_fields/antdesign/InputGroup';



const OtherEarnings = ({ otherEarningsState, setOtherEarningsState, earnings_deductions }) => (
    <>
        <Divider className={style["__divider-details"]} />
        <div className={style["detail"]}>Other Earnings </div>
        <Row gutter={[20, 5]}>
            {
                Object.keys(otherEarningsState).map((i, n) =>
                    <Col {...duo}>
                        <InputGroup
                            label={capitalize(earnings_deductions?.otherEarnings[n])}
                            id={`${i}`}
                            onChangeCustom={
                                (e) => {
                                    setOtherEarningsState(state => ({
                                        ...state,
                                        [e.target.id]: Number(e.target.value)
                                    }));
                                }
                            }
                        />
                    </Col>
                )
            }
        </Row>
    </>
);


export default OtherEarnings;