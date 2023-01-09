import React, { } from 'react';
import { connect } from 'react-redux';
// widgets

// constants

// store

// utils

// style
import styles from '../style.module.scss';
import InputGroup from '@/components/app/widgets/form_fields/antdesign/InputGroup';




const SectionCoopInfo = ({ dispatch, auth, cooperative, formHook }) => {
    const placeholder = `
        A design system for enterprise-level products. 
        Create on efficient and enjoyable work experiences.
    `;


    return (
        <>
            <br />
            <p className={styles["title__space"]}>Cooperative Name</p>
            <InputGroup
                id={'coopname'}
                placeholder={'Cooperative Name'} />

            <p className={styles["title"]}>Date Established (MM/DD/YYYY)</p>
            <InputGroup
                id={'dateofcooperation'}
                placeholder={'Date Established'} />

            <p className={styles["title"]}>About Cooperative</p>
            <InputGroup
                id={'about'}
                type={'textArea'}
                placeholder={placeholder}
                rows={6}
            />
            <p className={styles["title"]}>Vision</p>
            <InputGroup
                id={'vision'}
                type={'textArea'}
                placeholder={placeholder}
                rows={6}
            />
            <p className={styles["title"]}>Mission</p>
            <InputGroup
                id={'mission'}
                type={'textArea'}
                placeholder={placeholder}
                rows={6}
            />

        </>
    );
};

export default SectionCoopInfo;

