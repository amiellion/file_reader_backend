import React, { } from 'react';
import { LoadingOutlined, UploadOutlined } from '@ant-design/icons';


// utils
import { convertToBase64 } from '@/utils/string';

// style
import styles from '../style.module.scss';
import NoImage from '../NoImage/NoImage';
import { Spin } from 'antd';




const UploadDisplayImage = ({ image, onClick, isLoading = true }) => {
    return (
        <div>
            <div className={styles["__upload-coop-image"]}>
                {
                    image ? (
                        <img className={styles["__image"]} src={convertToBase64(image)} alt="coop-logo" />
                    ) : (
                        <NoImage key={"Upload Logo"} />
                    )
                }

                {
                    isLoading ? (
                        <div className={styles["__container-loader"]}>
                            <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />} />
                        </div>
                    ) : (
                        <div className={styles["__text"]} onClick={onClick}>
                            <UploadOutlined style={{ fontSize: '40px' }} />
                            <div>Upload Logo</div>
                        </div>
                    )
                }


            </div>
        </div >
    );
};

export default UploadDisplayImage;

