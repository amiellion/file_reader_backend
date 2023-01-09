import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form } from 'antd';

import CustomModal from '@/app/widgets/modals/CustomModal';
import Primary, { DangerOutlined } from '@/app/widgets/buttons/arcs_buttons';
import { UploadOutlined } from '@ant-design/icons';

import formatFileSize from '@/utils/formatFileSize';

import styles from './style.module.scss';

import * as COOP_SLICE from '@/store/cooperative_service/coopSlice';
import { FILE_SIZE_3MB } from '@/constants/images';
import { notif_error } from '@/utils/notifications';

const mapStateToProps = ({ dispatch, auth }) => ({ dispatch, auth });

const UpdateCoopImage = ({
    isOpen,
    closeModal,
    dispatch,
    type = "chart",
    auth,
    onSubmit,
    loadingID,
    isLoading
}) => {



    const [image, setImage] = useState("");
    const [fileSize, setFileSize] = useState("");
    const [FormHookUpdateImage] = Form.useForm();
    const fileLimitExceeded = useCallback(() => fileSize > FILE_SIZE_3MB, [fileSize]);
    const fileLimitExceeded2 = fileSize > FILE_SIZE_3MB;

    const isTypeUpdateLogo = type?.toLowerCase() === "logo";
    const isTypeUpdateCoverPhoto = type?.toLowerCase() === "coverphoto";


    const onFinish = () => {
        let formData = new FormData();
        formData.append('files', image);

        if (isTypeUpdateLogo) {
            return dispatch(COOP_SLICE.UPLOAD_COOP_INFO_LOGO({
                coop_id: auth.current_coop_id,
                data: formData
            }));
        }
        if (isTypeUpdateCoverPhoto) {
            return dispatch(COOP_SLICE.UPLOAD_COOP_INFO_BANNER({
                coop_id: auth.current_coop_id,
                data: formData
            }));
        }
        dispatch(COOP_SLICE.UPLOAD_COOP_INFO_CHART({
            coop_id: auth.current_coop_id,
            data: formData
        }));
    };
    const onFinishFailed = (err) => {
        console.log(err);
    };



    useEffect(() => {
        if (fileLimitExceeded()) notif_error({
            title: "File Limit Exceeded!",
            description: "The file exceeded 3MB."
        });
    }, [fileSize]);


    const getTitle = () => {
        if (isTypeUpdateLogo) return "Change Coop Profile Picture";
        if (isTypeUpdateCoverPhoto) return "Change Coop Cover Photo";
        return "Change Coop Org. Chart";
    };
    const getSubtitle = () => {
        if (isTypeUpdateLogo) return "Upload Profile Picture";
        if (isTypeUpdateCoverPhoto) return "Upload Cover Photo";
        return "Upload Chart";
    };

    return (
        <>
            <CustomModal width={'max-content'} visible={isOpen} footer={() => null}>
                <Form
                    name="coop-chart"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={FormHookUpdateImage}
                >
                    <div className={styles["upload_image_container"]}>
                        <div className={styles["container"]}>
                            <h2 className={styles["text__header"]}> {getTitle()}</h2>
                            <p className={styles["txt_upload_image"]}>{getSubtitle()}</p>
                            <p className={styles["txt_upload_image"]}>Recommended image size: 3 Mb</p>
                            <label htmlFor='chart'>
                                {
                                    image !== "" ? (
                                        <div>
                                            <img className={styles["upload__image"]} src={URL.createObjectURL(image)} alt={image} />
                                            <div>
                                                <pre>Image size: {formatFileSize(fileSize)}</pre>
                                                {
                                                    fileLimitExceeded() && <pre style={{ color: 'red' }}>Please select image size less than 3 MB</pre>
                                                }
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={styles["upload__image"]}>
                                            <div style={{ fontSize: "2em" }}>
                                                <UploadOutlined className={styles["announce__icon"]} />
                                            </div>
                                            <p>Select Image (.jpg, .png, .tff)</p>
                                        </div>
                                    )
                                }
                                <input
                                    style={{
                                        display: 'none'
                                    }}
                                    id={'chart'}
                                    type="file"
                                    onChange={async (e) => {
                                        const FILE_SIZE = e?.target?.files[0]?.size;
                                        const IMAGE_FILE = e.target.files[0];
                                        setFileSize(() => FILE_SIZE);



                                        if (FILE_SIZE > FILE_SIZE_3MB) {
                                            setImage(() => IMAGE_FILE);
                                            return;
                                        };



                                        setImage(() => IMAGE_FILE);
                                    }}
                                    accept="image/png, image/jpg, image/jpeg, image/tff"
                                />
                            </label>
                        </div>
                        <Row gutter={[8, 8]}>
                            <div className={styles["button_upload_profile"]}>
                                <Col>
                                    {
                                        !image || fileLimitExceeded2 ?
                                            <></> :
                                            <Primary
                                                type="primary"
                                                htmlType="submit"
                                                onClick={closeModal}
                                            >
                                                Upload
                                            </Primary>
                                    }
                                </Col>
                                <Col>
                                    <DangerOutlined
                                        type="reset"
                                        id='chart'
                                        onClick={() => {
                                            setImage("");
                                            closeModal();
                                        }}
                                    >
                                        Cancel
                                    </DangerOutlined>
                                </Col>
                            </div>
                        </Row>
                    </div>
                </Form>
            </CustomModal>
        </>
    );
};



export default connect(mapStateToProps)(UpdateCoopImage);