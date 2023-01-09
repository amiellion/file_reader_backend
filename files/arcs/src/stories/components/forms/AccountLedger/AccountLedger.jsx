import React from 'react';
import { Form, Row, Col } from 'antd'; 

import InputGroup from '@/app/widgets/form_fields/antdesign/InputGroup';
import Primary from '@/app/widgets/buttons/arcs_buttons';

import styles from './styles.module.scss';

const SectionTitle = ({ children }) => <p className={styles["section__title"]}>{children}</p>

const AccountLedger = () => {
    
    const customDuo = {
        xs: 24,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
    }

    return (
        <>
            <Form
                className={styles["container__form"]}
            >
                <SectionTitle>Add Subsidiary Account</SectionTitle>
                <Row gutter={[15, 0]}>
                    <Col {...customDuo}>
                        <InputGroup 
                            id={'subsidiaryName'}
                            label={'Subsidiary Name'}
                        />
                    </Col>
                    <Col {...customDuo}>
                        <InputGroup 
                            id={'address'}
                            label={'Address'}
                        />
                    </Col>
                    <Col {...customDuo}>
                        <InputGroup 
                            id={'contactinfo'}
                            label={'Contact Info'}
                        />
                    </Col>
                    <Col {...customDuo}>
                        <InputGroup 
                            id={'tax'}
                            label={'TIN'}
                            type="tin"
                        />
                    </Col>
                    <Col {...customDuo}>
                        <InputGroup 
                            id={'remarks'}
                            label={'Remarks Info'}
                        />
                    </Col>
                    <Col {...customDuo}>
                        <InputGroup 
                            id={'account'}
                            label={'Account Name'}
                            select
                            options={[
                                {
                                    title: 'account_1',
                                    value: 'account_1'
                                },
                                {
                                    title: 'account_2',
                                    value: 'account_2'
                                }
                            ]}
                            async
                        />
                    </Col>
                </Row>
                <div className={styles["button_container"]}>
                    <Primary>
                        ADD
                    </Primary>
                </div>
            </Form>
        </>
    );
}

export default AccountLedger;