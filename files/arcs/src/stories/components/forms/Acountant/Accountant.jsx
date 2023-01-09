import React, { useState, useEffect } from 'react';
import { Form } from 'antd';

import InputGroup from '@/app/widgets/form_fields/antdesign/InputGroup';
import Primary, { PrimaryOutline } from '@/app/widgets/buttons/arcs_buttons';
import Title from '@/app/widgets/title';

import SubForm from './SubForm';
import ManageSubForms from './ManageSubForms';

import styles from './style.module.scss';

const AccountantForm = () => {

    const [forms, setForms] = useState([]);

    const onClickAddForm = () => {
        setForms((state) => {
            const copiedState = [...state];
            copiedState.push(
                <SubForm 
                    // {...{
                    //     cumulativeFormState,
                    //     form_field_onChange,
                    //     formHook,
                    //     index,
                    //     nonMember_options,
                    //     account_options,
                    //     member_options
                    // }}
                />
            )
            return copiedState;
        })
    }

    const onClickRemoveForm = () => {
        setForms(state => {
            const copiedState = [...state];
            const newState = copiedState.pop();
            return copiedState;
        });

        // setCumulativeFormState((state) => {
        //     const copied_cumulative_state = [...state];
        //     copied_cumulative_state.pop();
        //     return copied_cumulative_state
        // });
    }

    return (
        <>
            <Form
                className={`mb-4 ${styles["form"]}`}
                style={{ width: '50%'}}
            >
                <InputGroup 
                    id="referencenumber"
                    label="ID (Reference Number)"
                    placeholder="00001"
                />
                <InputGroup 
                    id="dateoftransaction"
                    label="Date of Transaction"
                    readOnly
                />
                <InputGroup 
                    id="remarks"
                    label="Remarks"
                    placeholder="Share Capital Contribution"
                />
                <InputGroup 
                    id="total_credit"
                    label="Total Credit"
                    readOnly
                    required={false}
                />
                <InputGroup 
                    id="total_debit"
                    label="Total Debit"
                    readOnly
                    required={false}
                />
                <Title className={`${styles.divider}`} />
                <ManageSubForms />
                <div className='d-flex align-items-center justify-content-center m-auto'
                     style={{
                         maxWidth: 250,
                         gap: 25
                     }}
                >
                <Primary htmlType="submit">
                    Submit
                </Primary>
                <PrimaryOutline>
                    Cancel
                </PrimaryOutline>
                </div>
            </Form>
        </>
    );
}

export default AccountantForm;