import InputGroup from '@/components/app/widgets/form_fields/antdesign/InputGroup';
import { JOURNAL_ENTRY_TEMPLATE_OPTIONS } from '@/constants/selectOptions';
import React from 'react';
import { ContextJournalEntry } from '../../MainJournalEntry';

const TemplateDropdown = ({
    state,
    stateSetter,
}) => {

    const { formHook } = React.useContext(ContextJournalEntry);
    return (
        <InputGroup
            label="Choose a Template"
            select
            onChangeCustom={(e) => {
                switch (e) {
                    case 'member_related':
                        stateSetter(state => ({
                            ...state,
                            selected: '',
                            isFixedCredit: false,
                            isFixedDebit: false,
                            isFixedMember: true,
                        }));

                        break;
                    case 'cash_receipts':
                        formHook.setFieldsValue({ 'account_name.0': '', 'transaction.0': 'Debit' });
                        stateSetter(state => ({
                            ...state,
                            selected: e,
                            isFixedCredit: false,
                            isFixedDebit: true,
                            isFixedMember: false,
                        }));

                        break;
                    case 'cash_disbursement':
                        formHook.setFieldsValue({ 'account_name.0': '', 'transaction.0': 'Debit' });
                        stateSetter(state => ({
                            ...state,
                            selected: e,
                            isFixedCredit: false,
                            isFixedDebit: true,
                            isFixedMember: false,
                        }));
                        break;
                    case 'revenue':
                        formHook.setFieldsValue({ 'account_name.0': '', 'transaction.0': 'Credit' });
                        stateSetter(state => ({
                            ...state,
                            selected: e,
                            isFixedCredit: true,
                            isFixedDebit: false,
                            isFixedMember: false,
                        }));
                        break;
                    case 'purchase':
                        formHook.setFieldsValue({ 'account_name.0': '', 'transaction.0': 'Debit' });
                        stateSetter(state => ({
                            ...state,
                            selected: e,
                            isFixedCredit: false,
                            isFixedDebit: true,
                            isFixedMember: false,
                        }));
                        break;
                    case 'general_journal':
                        stateSetter(state => ({
                            ...state,
                            selected: '',
                            isFixedCredit: false,
                            isFixedDebit: false,
                            isFixedMember: false,
                        }));
                        break;

                    default:
                        stateSetter(state => ({
                            ...state,
                            selected: '',
                            isFixedCredit: false,
                            isFixedDebit: false,
                            isFixedMember: false,
                        }));
                        break;
                }
            }}
            options={JOURNAL_ENTRY_TEMPLATE_OPTIONS}
        />
    );
};

export default TemplateDropdown;