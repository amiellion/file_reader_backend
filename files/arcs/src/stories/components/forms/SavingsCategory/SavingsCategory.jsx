import React from 'react';
import { Row, Col, Form } from 'antd';

import InputGroup from '@/app/widgets/form_fields/antdesign/InputGroup';
import Primary, { PrimaryOutline } from '@/app/widgets/buttons/arcs_buttons';
import Products from '@/components/app/widgets/form_fields/async_select/Products';

import styles from './styles.module.scss';

const CreateSavingsCategory = () => {
    return (
        <>
            <div className={styles["title"]}>New Savings Category</div>
            <Form>
                <Row gutter={[8,8]}>
                    <Col span={8}>
                        <div className={styles["head"]}>
                            Name of Product
                        </div>
                        <div className={styles["name"]}>
                            <InputGroup 
                                id="title"
                                className={styles["inputs"]}
                                placeholder={'Name of Product'}
                                normalize={false}
                            />
                        </div>
                        <div className={styles["head"]}>
                            Select Savings Product
                        </div>
                        <div className={styles["name"]}>
                            {/* <Products id="exclude_select" label={null} filter="savings" /> */}
                        </div>
                    </Col>
                    <Col span={20}>
                        <div className={styles["head-description"]}>
                            Description
                        </div>
                        <br />
                        <div className={styles["description"]}>
                            <InputGroup 
                                id="description"
                                type={'textArea'}
                                placeholder={'Lorem ipsum dolor...'}
                                rows={10}
                            />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className={styles["min-deposit"]}>
                            Minimum Deposit
                        </div>
                        <div className={styles["value"]}>
                            <InputGroup 
                                id="min_amount"
                                placeholder={'1000.00'}
                            />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className={styles["interest"]}>
                            Interest
                        </div>
                        <Row gutter={[8,8]}>
                            <Col>
                                <span className={styles["head"]}>Interest Term</span>
                            </Col>
                            <Col span={8}>
                                <span className={styles["value"]}>
                                    <InputGroup 
                                        id={'term'}
                                        //options={}
                                        select
                                        horizontal
                                    />
                                </span>
                            </Col>
                        </Row>
                        <Row gutter={[8,8]}>
                            <Col>
                                <span className={styles["head"]}>% Interest</span>
                            </Col>
                            <Col span={2}>
                                <span className={styles["value"]}>
                                    <InputGroup 
                                        id="pct"
                                        placeholder={'1'}
                                    />
                                </span>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Primary>
                            Add New Savings
                        </Primary>
                    </Col>
                    <Col>
                        <PrimaryOutline>
                            Go Back
                        </PrimaryOutline>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default CreateSavingsCategory;