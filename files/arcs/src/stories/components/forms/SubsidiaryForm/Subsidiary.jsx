import React from 'react';
import { Form, Row, Col } from 'antd';
import PlusCircleOutlined from '@ant-design/icons/PlusCircleOutlined'

import InputGroup from '@/app/widgets/form_fields/antdesign/InputGroup';
import Primary from '@/app/widgets/buttons/arcs_buttons';

import styles from './styles.module.scss';

const SubsidiaryForm = () => {

    const SectionTitle = ({ children }) => <p className={styles["section__title"]}>{children}</p>
    
    const customDuo = {
        xs: 24,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12
    }

    return (
        <>
            <Form>
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
                            id={'tax'}
                            label={'TIN'}
                            type="tin"
                        />
                    </Col>
                    <Col>
                        <InputGroup 
                            id={'account'}
                            label={'Linked Account'}
                            select
                            async
                        />
                    </Col>
                </Row>
                <div className={styles["button_container"]}>
                    <Primary><PlusCircleOutlined />ADD</Primary>
                </div>
            </Form>
        </>
    );
}

export default SubsidiaryForm;