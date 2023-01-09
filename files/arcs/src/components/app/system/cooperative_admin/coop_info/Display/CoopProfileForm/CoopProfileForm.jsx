import React, { useState, useEffect, createContext } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Input } from 'antd';
import { useParams } from 'react-router-dom';
import useModal from '@/hooks/useModal';
import { UploadOutlined } from '@ant-design/icons';
// widgets
import InputGroup from '@/components/app/widgets/form_fields/antdesign/InputGroup';
import Primary, { PrimaryOutline, DangerOutlined, PrimaryDashed } from '@/components/app/widgets/buttons/arcs_buttons';
import Container from '@/components/app/widgets/container_w_coopname';
// import InputDetails from '@/components/app/widgets/forms/SocialMediaLinks';
import CoopProfilePicture from '../UpdateCoopImage';
import CoopChart from '../UpdateCoopImage';
import CoopCoverPhoto from '../UpdateCoopImage';

// constants
import { LOADING_ID_COOP_DATA } from '@/constants/index';

// store
import { history } from '@/store/configureStore';
import * as COOP_SLICE from '@/store/cooperative_service/coopSlice';

// utils
import { notif_error } from '@/utils/notifications';

// style
import styles from '../style.module.scss';
import DisplayJSON from '@/components/app/widgets/general/no_entries/DisplayJSON';
import UploadDisplayImage from '../UploadDisplayImage/UploadDisplayImage';
import { usePromiseTracker } from 'react-promise-tracker';
import SocialMediaInput from '../SocialMediaInput';
import SectionLinks from '../SectionLinks/SectionLinks';
import SectionBankAccountDetails from '../SectionBankAccountDetails/SectionBankAccountDetails';
import SectionContactDetails from '../SectionContactDetails/SectionContactDetails';
import SectionCoopInfo from '../SectionCoopInfo/SectionCoopInfo';
import moment from 'moment/moment';


export const ContextCooperativeProfile = createContext();
export const PLATFORMS_BASE_ID_NAME = "cooperative_platforms.name";
export const PLATFORMS_BASE_ID_ADDRESS = "cooperative_platforms.address";
const mapStateToProps = ({ dispatch, auth, cooperative }) => ({ dispatch, auth, cooperative });
const CoopProfileForm = ({ dispatch, auth, cooperative }) => {

    const { selectedCoopData } = auth;


    const params = useParams();
    // const [profile, setProfile] = useState("");
    // const [compliance, setCompliance] = useState("");
    const [platforms, setPlatforms] = useState([]);
    const ref = React.useRef(0);
    const [inputValuesPlatforms, setInputValuesPlatforms] = useState([]);
    const [FormHookPostNewUpdate] = Form.useForm();

    const validate_before_submit = () => {
        const coopname = FormHookPostNewUpdate.getFieldValue('coopname');
        const about = FormHookPostNewUpdate.getFieldValue('about');
        const vision = FormHookPostNewUpdate.getFieldValue('vision');
        const mission = FormHookPostNewUpdate.getFieldValue('mission');

        const errorDescription = [];

        if (!coopname) errorDescription.push("coop name");
        if (!about) errorDescription.push(" coop description");
        if (!vision) errorDescription.push(" coop vision");
        if (!mission) errorDescription.push(" coop mission");

        if (!coopname || !about || !vision || !mission) {
            notif_error({
                title: "Missing required fields!",
                // description: `Please enter: ${!vision ? "Please enter Coop Vision" : ""} ${!mission ? "Please enter Coop Mission" : ""}`,
                description: `Please enter ${errorDescription.toString()}`,
            });
        }
    };

    const onFinish = ({ services, ...values }) => {

        const {
            about,
            accountname,
            accountnumber,
            bank,
            contactno,
            coopname,
            dateofcooperation,
            email,
            mission,
            vision,
            website,
        } = values;
        const finalPlatforms = platforms?.map(item => item?.values);
        finalPlatforms.push({
            name: 'website',
            address: website,
        });
        dispatch(COOP_SLICE.UPLOAD_COOP_DETAILS({
            coop_id: auth.current_coop_id,
            PK: selectedCoopData.PK,
            data: {
                about,
                accountname,
                accountnumber,
                bank,
                contactno,
                coopname,
                dateofcooperation,
                email,
                mission,
                platforms: finalPlatforms,
                vision,
            }
        }));
    };

    const onFinishFailed = (err) => {
        console.log(err);
    };

    useEffect(() => {
        if (params.id) {
            FormHookPostNewUpdate.setFieldsValue({
                ...cooperative.coop_details,
                dateofcooperation: cooperative.coop_details?.dateofcooperation ? moment(cooperative.coop_details?.dateofcooperation).format("MM/DD/YYYY") : ""

            });
        }
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (selectedCoopData) {
            FormHookPostNewUpdate.setFieldsValue({
                ...selectedCoopData,
                dateofcooperation: selectedCoopData?.dateofcooperation ? moment(selectedCoopData?.dateofcooperation).format("MM/DD/YYYY") : ""
            });
        }

        // eslint-disable-next-line
    }, [selectedCoopData]);
    const [isOpenUploadProfilePicture, { closeModal: closeModalUploadProfilePicture, openModal: openModalUploadProfilePicture }] = useModal();
    const [isOpenUploadChart, { closeModal: closeModalUploadChart, openModal: openModalUploadChart }] = useModal();
    const [isOpenUploadCoverPhoto, { closeModal: closeModalUploadCoverPhoto, openModal: openModalUploadCoverPhoto }] = useModal();
    const { promiseInProgress: PROMISE_IN_PROGRESS_COOP_DATA } = usePromiseTracker({ area: LOADING_ID_COOP_DATA }); // Track async requests if still in progress or done

    return (
        <ContextCooperativeProfile.Provider
            value={{
                platforms,
                setPlatforms,
                ref,
                formHook: FormHookPostNewUpdate,
            }}
        >
            <CoopProfilePicture
                isOpen={isOpenUploadProfilePicture}
                closeModal={closeModalUploadProfilePicture}
                type="logo"
            />
            <CoopChart
                isOpen={isOpenUploadChart}
                closeModal={closeModalUploadChart}
                type="chart"
            />
            <CoopCoverPhoto
                isOpen={isOpenUploadCoverPhoto}
                closeModal={closeModalUploadCoverPhoto}
                type="coverphoto"
            />




            <Container title="Cooperative Profile">
                <DisplayJSON
                    data={auth?.selectedCoopData}
                />
                <Form
                    name="coop-info"
                    hideRequiredMark
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={FormHookPostNewUpdate}
                    className={styles["about__coop"]}
                    scrollToFirstError
                >

                    <p className={styles["title"]}>Cover Photo</p>
                    <UploadDisplayImage
                        onClick={openModalUploadCoverPhoto}
                        image={selectedCoopData?.bannerbase64}
                        isLoading={PROMISE_IN_PROGRESS_COOP_DATA}
                    />
                    <br></br>
                    <br></br>
                    <p className={styles["title"]}>Profile Picture</p>
                    <UploadDisplayImage
                        onClick={openModalUploadProfilePicture}
                        image={selectedCoopData?.logobase64}
                        isLoading={PROMISE_IN_PROGRESS_COOP_DATA}
                    />

                    <SectionCoopInfo />

                    <p className={styles["title"]}>Organization Chart</p>
                    <UploadDisplayImage
                        onClick={openModalUploadChart}
                        image={selectedCoopData?.organizationbase64}
                        isLoading={PROMISE_IN_PROGRESS_COOP_DATA}
                    />
                    <br />
                    <SectionBankAccountDetails />

                    <SectionContactDetails />

                    <SectionLinks formHook={FormHookPostNewUpdate} state={platforms} setState={setPlatforms} />

                    {/* </ul> */}

                    <br />
                    <Row gutter={[16, 16]}>
                        <Col xl={12} xs={24}>
                            <Primary
                                type="primary"
                                htmlType="submit"
                                // loading={auth.loading}
                                onClick={validate_before_submit}
                            >
                                Save Changes
                            </Primary>
                        </Col>
                        <Col xl={12} xs={24}>
                            <PrimaryOutline onClick={() => history.push('/general/settings')}>Cancel</PrimaryOutline>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </ ContextCooperativeProfile.Provider>
    );
};

export default connect(mapStateToProps)(CoopProfileForm);


{/* <p className={styles["title"]}>Website</p>
                    <Input
                        id={'website'}
                        addonBefore={'https://'}
                        placeholder={'www.coop.com'}
                    />
                    <br />
                    <h5 className={styles["title__space"]}>Social Media</h5>
                    {
                        inputsPlatforms && inputsPlatforms.map((input, index) => (
                            <Row gutter={[12, 12]} style={{ display: 'flex' }} key={`inputPlatforms.${index}`}>
                                <Col span={24}>{input}</Col>
                            </Row>
                        ))
                    }
                    <Row gutter={[12, 12]}>
                        <Col span={24}>
                            <DangerOutlined onClick={() => onClickDeleteInput()}>
                                Delete Link
                            </DangerOutlined>
                        </Col>
                        <Col span={24}>
                            <PrimaryDashed onClick={() => onClickAddInput()}>
                                Add More Link
                            </PrimaryDashed>
                        </Col>
                    </Row> */}


{/* <h5>Services</h5>
                    <InputGroup
                        id={'services'}
                        type={'textArea'}
                        placeholder={placeholder}
                        required={false} /> */}
{/* <p className={styles["title__space"]}>Upload Compliance Certificate(CDA)</p>

                    <input
                        className={styles["upload__image"]}
                        type="file"
                        onChange={async (e) => {
                            const compliance = await e.target.files[0]
                            // console.log({file_upload_image:imageeeee})
                            // console.log({file_upload_form_data:formData})
                            // setCompliance(() => e.target.files[0]);
                            // setImage(() => imageeeee);
                            // uploader(e);
                        }
                        } /> 
                        */}
