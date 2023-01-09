import React from 'react';
import { Form, Row, Col } from 'antd';
import PlusCircleOutlined from '@ant-design/icons/PlusCircleOutlined'

import InputGroup from '@/app/widgets/form_fields/antdesign/InputGroup';
import Primary from '@/app/widgets/buttons/arcs_buttons';

import styles from './styles.module.scss';

const ProductForm = () => {

    const SectionTitle = ({ children }) => <p className={styles["section__title"]}></p>
    
    return (
        <>
            <Form>
                <SectionTitle>Add Products</SectionTitle>
                <Row gutter={[15,0]}>
                    <Col span={24}>
                        <InputGroup 
                            id={'product'}
                            label={'Product Name'}
                        />
                    </Col>
                    <Col span={24}>
                        <InputGroup 
                            id="account_dropdown"
                            label={'Linked Account'}
                            select
                            //options
                            async
                        />
                    </Col>
                    <Col span={24}>
                        <InputGroup 
                            id={'category'}
                            label={'Category'}
                        />
                    </Col>
                    <Col span={24}>
                        <InputGroup 
                            id={'category'}
                            label={'Category'}
                        />
                    </Col>
                    <Col span={24}>
                        <div className={styles["button_container"]}>
                            <Primary><PlusCircleOutlined />ADD</Primary>
                        </div>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default ProductForm;