import ARCS_COLORS from '@/constants/colors';
import { convertToBase64 } from '@/utils/string';
import { UploadOutlined } from '@ant-design/icons';
import React from 'react';

//constants 

//hooks



//utils

//widgets

import styles from './NoImage.module.scss';

const NoImage = ({ text = "Upload Logo" }) => {
    return (
        <div className={styles["__container-no-image"]} >
            <UploadOutlined />
            <div>{text}</div>
        </div>
    );
};

export default NoImage;