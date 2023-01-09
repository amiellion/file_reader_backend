import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Input } from 'antd';
// widgets
import { DangerOutlined, PrimaryDashed } from '@/components/app/widgets/buttons/arcs_buttons';

// constants

// store

// utils

// style
import styles from '../style.module.scss';
import SocialMediaInput from '../SocialMediaInput';
import { SET_STATE } from '@/store/cooperative_service/coopSlice';
import { ContextCooperativeProfile, PLATFORMS_BASE_ID_ADDRESS, PLATFORMS_BASE_ID_NAME } from '../CoopProfileForm/CoopProfileForm';
import DisplayJSON from '@/components/app/widgets/general/no_entries/DisplayJSON';
import InputGroup from '@/components/app/widgets/form_fields/antdesign/InputGroup';

const INITIAL_VALUES = {
    "name": "",
    "address": ""
};

const mapStateToProps = ({ dispatch, auth, cooperative }) => ({ dispatch, auth, cooperative });

const SectionLinks = ({
    dispatch,
    auth,
    cooperative,

}) => {
    const { selectedCoopData } = auth;
    const {
        platforms,
        setPlatforms,
        ref,
        formHook,
    } = useContext(ContextCooperativeProfile);


    const onChangeCustom = ({ field_id, value, array_id }) => {
        setPlatforms((state) => {
            const copiedState = state.slice(0);
            const FINAL_INDEX = state.findIndex(item => item.id === parseInt(array_id));
            if (FINAL_INDEX >= 0) {
                copiedState[FINAL_INDEX]["values"][field_id] = value;
                return copiedState;
            }
            return state;
        });
    };

    const RemoveForm = (id) => {
        setPlatforms(state => {
            const FINAL_STATE = state.filter((item) => item.id !== id);
            return FINAL_STATE;
        });
    };

    const AddEntry = () => {
        setPlatforms(state => {
            const FINAL_STATE = state.slice(0);
            FINAL_STATE.push({
                id: ref.current,
                content: (
                    // <BaseEntryForm
                    //     remove={RemoveForm}
                    //     id={ref.current}
                    //     onChangeCustom={onChangeCustom}
                    // />
                    <SocialMediaInput
                        {...{
                            key: ref.current,
                            id: ref.current,
                            onChange: onChangeCustom,
                            remove: RemoveForm
                        }}
                    />
                ),
                /*
                    bug where all state values are the same , 
                    root cause: set the key equal to an initial object value, so all object element in array points to the same reference. 
                    instead of spreading the object, the object was directly equated?

                    * summary, spread the data so when changing values, the change is not directly pointing to the same reference
                */
                values: { ...INITIAL_VALUES },
            });
            ref.current += 1;
            return FINAL_STATE;
        });
    };

    const [inputValuesPlatforms, setInputValuesPlatforms] = useState([]);
    /*
        state shape: 
         id,
         content,
         value
    */
    const [inputsPlatforms, setInputsPlatforms] = useState([]);





    const onChangePlatforms = ({ target }, index) => {
        const split_id = target.id.split('.');
        console.log("🚀 ~ file: SectionLinks.jsx ~ line 29 ~ onChangePlatforms ~ split_id", split_id);
        const value = target.value.toLowerCase();

        const integer_index = parseInt(split_id[3]);
        setInputValuesPlatforms((state) => {
            const copiedState = [...state];
            copiedState[integer_index][split_id[2]] = value.toLowerCase();
            console.log({ setInputValuesPlatforms_copiedState: copiedState[integer_index] });
            return copiedState;
        });
    };


    useEffect(() => {

        if (selectedCoopData.platforms && selectedCoopData.platforms.length > 0 && platforms.length === 0) {
            selectedCoopData.platforms.forEach((i, index) => {
                if (i?.name === "website") {
                    formHook.setFieldsValue({
                        website: i?.address
                    });
                } else {
                    setPlatforms((state) => {
                        const copiedState = [...state];
                        formHook.setFieldsValue({
                            [`${PLATFORMS_BASE_ID_NAME}.${ref.current}`]: i.name,
                            [`${PLATFORMS_BASE_ID_ADDRESS}.${ref.current}`]: i.address,
                        });
                        copiedState.push(({
                            id: ref.current,
                            content: <SocialMediaInput
                                {...{
                                    key: ref.current,
                                    id: ref.current,
                                    onChange: onChangeCustom,
                                    remove: RemoveForm
                                }}
                            />,
                            values: {
                                ...i
                            }
                        }));
                        formHook.setFieldsValue({
                            [`selectedCoopData.platforms.name.${index}`]: i.name,
                            [`selectedCoopData.platforms.address.${index}`]: i.address
                        });
                        ref.current += 1;
                        return copiedState;
                    });
                }
            });
        }
        // eslint-disable-next-line
    }, [selectedCoopData]);



    return (
        <>
            <DisplayJSON prefix={"Platforms State: "} data={platforms?.map(item => ({ id: item?.id, values: item?.values }))} />

            <p className={styles["title"]}>Website</p>
            <InputGroup
                addonBefore={'https://'}
                type="website"
                id={'website'}
                placeholder={'www.coop.com'}
                normalize={false}
            />
            <br />
            <h5 className={styles["title__space"]}>Social Media</h5>
            {platforms?.map(item => item.content)}
            <Row gutter={[12, 12]}>
                <Col span={24}>
                    <DangerOutlined onClick={() => RemoveForm(platforms[platforms?.length - 1]?.id)}>
                        Delete Link
                    </DangerOutlined>
                </Col>
                <Col span={24}>
                    <PrimaryDashed onClick={AddEntry}>
                        Add More Link
                    </PrimaryDashed>
                </Col>
            </Row>

            <br />

        </>
    );
};

export default connect(mapStateToProps)(SectionLinks);

