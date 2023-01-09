import React, { } from 'react';
// widgets

// constants

// store

// utils

// style
import styles from '../style.module.scss';
import InputGroup from '@/components/app/widgets/form_fields/antdesign/InputGroup';




const SectionContactDetails = ({ dispatch, auth, cooperative, formHook }) => {



    return (
        <>
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
        </>
    );
};

export default SectionContactDetails;

