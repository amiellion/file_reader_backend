import React from 'react';
import { Row, Col, Form, Avatar, Divider } from 'antd';

import UploadProfile from '@/components/app/widgets/modals/Profile';
import InputGroup from '@/components/app/widgets/form_fields/antdesign/InputGroup';
import Primary, { PrimaryOutline } from '@/app/widgets/buttons/arcs_buttons'
import Breadcrumbs from '@/components/cleanui/layout/Breadcrumbs';
import { SettingOutlined } from '@ant-design/icons';
import Badge from '@/app/widgets/badge';

import styles from './memberprofile.module.scss';

const MemberProfile = () => {
    return (
        <>
            {/* <UploadProfile 

            /> */}
            <div>
                {/* <Breadcrumbs /> */}
                <Row gutter={[16, 16]} className={styles["profile_container"]}>
                    <Col>
                        <div className={styles["image_profile_container"]}>
                            <Avatar 
                                size={200}
                                src={'resources/images/avatars/avatar-2.png'}
                                className={styles["profile_avatar"]}
                            />
                            <span className={styles["img_upload_floater"]}>
                                <div style={{ fontSize: "2em" }}>
                                    <SettingOutlined />
                                </div>
                                <div>
                                    Change Profile Picture
                                </div>
                            </span>
                        </div>
                    </Col>
                    <Col span={18}>
                        <Row xl={18} sm={12} xs={12}>
                            <div>
                                <Badge type={"approved"} className={styles["badge_manage_role"]}>{'Member'}</Badge>
                            </div>
                            <div className={styles["profile_details"]}>
                                <p className={styles["prof_par_col"]}>Approved on December 12, 2021</p>
                                <p className={styles["prof_par_col"]}>broard reso...</p>
                            </div>
                        </Row>
                        <div className={styles["margin_profile_bottom"]}><strong>Sample User</strong></div>
                    </Col>
                </Row>
            </div>
            <Divider />
            <Col span={12}>
                <Form>
                    <Row gutter={[8,8]}>
                        <Col span={6}>
                            First name
                            <InputGroup 
                                id={'firstname'}
                                placeholder={'First Name'}
                            />
                        </Col>
                        <Col span={8}>
                            Last name
                            <InputGroup 
                                id={'lastname'}
                                placeholder={'Last Name'}
                            />
                        </Col>
                        <Col span={7}>
                            Middle name
                            <InputGroup 
                                id={'middlename'}
                                placeholder={'Middle Name'}
                            />
                        </Col>
                        <Col>
                            Suffix
                            <InputGroup 
                                id={'suffix'}
                                placeholder={'Suffix'}
                                required={false}
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8,8]}>
                        <Col span={6}>
                            Age
                            <InputGroup 
                                id={'age'}
                                placeholder={'Age'}
                            />
                        </Col>
                        <Col span={6}>
                            Sex
                            <InputGroup 
                                id={'sex'}
                                placeholder={'Sex'}
                            />
                        </Col>
                        <Col span={9}>
                            Birthdate
                            <InputGroup 
                                id={'dateofbirth_pre'}
                                datePicker
                                placeholder={'Select Date'}
                                readOnly
                                disabled="disabled"
                            />
                        </Col>
                        <Col span={12}>
                            Place of Birth
                            <InputGroup 
                                id={'placeofbirth'}
                                placeholder={'Place of Birth'}
                            />
                        </Col>
                        <Col span={12}>
                            Citizenship
                            <InputGroup 
                                id={'citizenship'}
                                placeholder={'Citizenship'}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Civil Status
                            <InputGroup 
                                id={'civilstatus'}
                                type={'radio'}
                                radioOptions={[
                                    {
                                        title: 'Single',
                                        value: 'Single'
                                    },
                                    {
                                        title: 'Married',
                                        value: 'Married'
                                    },
                                    {
                                        title: 'Legally Separated',
                                        value: 'Legally Separated'
                                    },
                                    {
                                        title: 'Widowed',
                                        value: 'Widowed'
                                    },
                                    {
                                        title: 'Divorced',
                                        value: 'Divorced'
                                    }
                                ]}
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8,8]}>
                        <Col span={9}>
                            Mobile Number
                            <InputGroup 
                                id={'contactno'}
                                placeholder={'+639123456789'}
                                readOnly
                            />
                        </Col>
                        <Col span={15}>
                            Email Address
                            <InputGroup 
                                id={'email'}
                                placeholder={'example@email.com'}
                                readOnly
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8,8]}>
                        <Col>
                            Father
                            <InputGroup 
                                id={'father'}
                                placeholder={'First & Last name'}
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8,8]}>
                        <Col>
                            Mother
                            <InputGroup 
                                id={'mother'}
                                placeholder={'First & Last name'}
                            />
                        </Col>
                    </Row>

                    <div >Current Address</div>
                    <Row gutter={[8, 8]}>
                        <Col span={12}>
                            <InputGroup
                                id={'residence_block'}
                                placeholder={'House/Lot/Blk.#/Street'}
                                value={'Juan Street'}
                                readOnly
                            />
                        </Col>
                        <Col span={12}>
                            <InputGroup
                                id={'residence_barangay'} 
                                placeholder={'Barangay'}
                                readOnly
                            />
                        </Col>
                        <Col span={12}>
                            <InputGroup
                                id={'residence_municipality'}
                                placeholder={'City or Municipality'}
                                readOnly
                                
                            />
                        </Col>
                        <Col span={12}>
                            <InputGroup
                                id={'residence_province'}
                                placeholder={'Province'}
                                readOnly
                                
                            />
                        </Col>
                        <Col span={12}>
                            <InputGroup
                                id={'residence_region'}
                                placeholder={'Region'}
                                readOnly
                            
                            />
                        </Col>
                        <Col span={12}>
                            <InputGroup
                                id={'residence_country'}
                                placeholder={'Country'}
                                readOnly
                         
                            />
                        </Col>
                        <Col span={12}>
                            <InputGroup
                                id={'residence_zip'}
                                placeholder={'Zip Code'}
                                readOnly
                               
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        Employer
                        <Col span={24}>
                            <InputGroup
                                id={'occupation'}
                                placeholder={'Occupation'} />
                        </Col>
                        <Col span={24}>
                            <InputGroup
                                id={'employer'}
                                placeholder={'Company'} />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        TIN 
                        <Col span={24}>
                            <InputGroup
                                id={'tin'}
                                placeholder={'TIN'} />
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col>
                            <Primary
                                type="primary"
                                htmlType="submit"
                            >Save Changes</Primary>
                        </Col>
                        <Col>
                            <PrimaryOutline
                            >
                                Go Back
                            </PrimaryOutline>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </>
    );
}

export default MemberProfile;