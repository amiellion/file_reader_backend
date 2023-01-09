import React, { } from 'react';
import { connect } from 'react-redux';
// widgets

// constants

// store

// utils

// style
import styles from '../style.module.scss';
import InputGroup from '@/components/app/widgets/form_fields/antdesign/InputGroup';



const mapStateToProps = ({ dispatch, auth, cooperative }) => ({ dispatch, auth, cooperative });

const SectionBankAccountDetails = ({ dispatch, auth, cooperative, formHook }) => {



    return (
        <>
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

        </>
    );
};

export default connect(mapStateToProps)(SectionBankAccountDetails);

