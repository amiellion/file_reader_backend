import React from 'react';
import { Button, Row } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

import styles from './style.module.scss';

const FormComponent = () => {
    return (
        <>
            <div className={styles["container__button"]}>
                <Button className={styles["form_button__delete"]}>
                    <MinusCircleOutlined />
                    <span className={styles["text__button"]}>Remove Entry</span>
                </Button>
                <Button className={styles["form_button__add"]}>
                    <PlusCircleOutlined />
                    <span className={styles["text__button"]}>Add Entry</span>
                </Button>
            </div>
            <Row gutter={[50, 50]}>
                {/* {forms} */}
            </Row>
        </>
    );
}

export default FormComponent;