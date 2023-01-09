import React from 'react';
import { Row, Col, Form, Input } from 'antd';

import InputGroup from '@/components/app/widgets/form_fields/antdesign/InputGroup';
import Primary, { PrimaryOutline } from '@/components/app/widgets/buttons/arcs_buttons';
import styles from './coop_profile.module.scss';

const CoopProfile = () => {
    return (
        <>
            <Form
                className={styles["about_coop"]}
            >
                <p className={styles["title"]}>Logo</p>
                <input
                    id={'logo'}
                    className={styles["upload__image"]}
                    type="file"
                />
                <br />
                <p className={styles["title"]}>Profile Picture</p>
                <input
                    id={'#'}
                    className={styles["upload__image"]}
                    type="file"
                />
                <p className={styles["title_space"]}>Cooperative Name</p>
                <InputGroup
                    id={'coopname'}
                    placeholder={'Cooperative Name'}
                />
                <p className={styles["title"]}>Date Established (MM/DD/YYYY)</p>
                <InputGroup
                    id={'dateofcooperation'}
                    placeholder={'Date Established'}
                />
                <p className={styles["title"]}>About Cooperative</p>
                <InputGroup
                    id={'about'}
                    type={'textArea'}
                    placeholder={'Lorem ipsum...'}
                    row={6}
                />
                <p className={styles["title"]}>Vision</p>
                <InputGroup
                    id={'vision'}
                    type={'textArea'}
                    placeholder={'Lorem ipsum...'}
                    row={6}
                />
                <p className={styles["title"]}>Mission</p>
                <InputGroup
                    id={'mission'}
                    type={'textArea'}
                    placeholder={'Lorem ipsum'}
                    row={6}
                />
                <p className={styles["title"]}>Organization Chart</p>
                <input
                    className={styles["upload__image"]}
                    type="file"
                />
                <br />
                <h3 className={styles["contact__details"]}>Bank Account Details</h3>
                <p className={styles["title"]}>Account Name</p>
                <InputGroup
                    id={'accountname'}
                    placeholder={'Account Name'}
                />
                <p className={styles["title"]}>Account Number</p>
                <InputGroup
                    id={'accountnumber'}
                    placeholder={'Account Number'}
                />
                <p className={styles["title"]}>Bank</p>
                <InputGroup
                    id={'bank'}
                    placeholder={'Bank'}
                />
                <h3 className={styles["contact__details"]}>Contact Details</h3>
                <p className={styles["title"]}>Email Address</p>
                <InputGroup
                    id={'email'}
                    placeholder={'Email Address'}
                />
                <p className={styles["title"]}>Landline/Number</p>
                <InputGroup
                    id={'contactno'}
                    placeholder={'Landline / Number'}
                />
                <p className={styles["title"]}>Website</p>
                <Input
                    id={'website'}
                    addonBefore={'https://'}
                    placeholder={'www.coop.com'}
                />
                <br />
                <h5 className={styles["title__space"]}>Social Media</h5>
                {/* <SocialMedia platforms={[{name: "instagram", address: "https://instagram.com/cooperative_1ea"}]}/> */}
                <br />
                <Row gutter={[16, 16]}>
                    <Col xl={12} xs={24}>
                        <Primary
                            htmlType="submit"
                        >Save Changes</Primary>
                    </Col>
                    <Col xl={12} xs={24}>
                        <PrimaryOutline>Cancel</PrimaryOutline>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default CoopProfile;