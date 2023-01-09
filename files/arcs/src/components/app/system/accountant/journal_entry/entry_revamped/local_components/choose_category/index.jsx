import React from 'react';
import { Col, Row } from 'antd';



//components
import { ContextJournalEntry } from '../../MainJournalEntry';

//constants
import { trio } from '@/constants/grid';

//hooks

//images

//local components

//store

//style
import styles from './styles.module.scss';

//utils

//widgets

const onClickChooseCategoryButton = ({ id, stateSetter, formHook, setMainState }) => {


    const setTransaction = (transaction) => setMainState((state) => {
        let FINAL_STATE = [...state];
        FINAL_STATE[0]["values"]["transaction"] = transaction;
        return FINAL_STATE;
    });
    switch (id) {
        case 'member_related':
            stateSetter(state => ({
                ...state,

                selected: id,
                isFixedCredit: false,
                isFixedDebit: false,
                isFixedMember: true,
            }));

            break;
        case 'cash_receipts':
            formHook.setFieldsValue({ 'account_name.0': '', 'transaction.0': 'Debit' });
            setTransaction('Debit')
            stateSetter(state => ({
                ...state,
                selected: id,
                isFixedCredit: false,
                isFixedDebit: true,
                isFixedMember: false,
            }));

            break;
        case 'cash_disbursement':
            formHook.setFieldsValue({ 'account_name.0': '', 'transaction.0': 'Debit' });
            setTransaction('Debit')
            stateSetter(state => ({
                ...state,
                selected: id,
                isFixedCredit: false,
                isFixedDebit: true,
                isFixedMember: false,
            }));
            break;
        case 'revenue':
            formHook.setFieldsValue({ 'account_name.0': '', 'transaction.0': 'Credit' });
            setTransaction('Credit')
            stateSetter(state => ({
                ...state,
                selected: id,
                isFixedCredit: true,
                isFixedDebit: false,
                isFixedMember: false,
            }));
            break;
        case 'purchase':
            formHook.setFieldsValue({ 'account_name.0': '', 'transaction.0': 'Debit' });
            setTransaction('Debit')
            stateSetter(state => ({
                ...state,
                selected: id,
                isFixedCredit: false,
                isFixedDebit: true,
                isFixedMember: false,
            }));
            break;
        case 'general_journal':
            stateSetter(state => ({
                ...state,
                selected: id,
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
};

const TemplateButtons = ({ title, id, stateSetter, formHook, entry_configs, setMainState }) => {
    return (
        <div
            onClick={() => onClickChooseCategoryButton({ id, stateSetter, formHook, setMainState })}
            className={`${entry_configs.selected === id ? styles["__template_button-migrate-tb--active"] : styles["__template_button-migrate-tb"]} `}
        >
            {title || "buttonTitle"}
        </div>
    );
};

const BUTTON_TITLES_LIST = [
    'Member Related',
    'Cash Receipts',
    'Cash Disbursement',
    'Revenue',
    'Purchase',
    'General Journal',
];

const BUTTONS_LIST = [
    'member_related',
    'cash_receipts',
    'cash_disbursement',
    'revenue',
    'purchase',
    'general_journal',
];
const SectionChooseCategory = () => {
    const {
        formHook,
        entry_configs,
        setEntryConfigs,
        setMainState
    } = React.useContext(ContextJournalEntry);
    return (
        <Row className={styles["__container--choose-category"]} gutter={[10, 10]}>
            <Col sm={24} xs={24} xxs={24} md={24} lg={24} xl={6} xxl={6} className={styles["__container--select-category--title"]}>
                <p className={styles["__text--title-category"]}>Category</p>
                <p className={styles["__text--title-subtext"]}>What is this transaction for?</p>
            </Col>
            <Col sm={24} xs={24} xxs={24} md={24} lg={24} xl={18} xxl={18}>
                <Row gutter={[25, 25]}>
                    {BUTTONS_LIST.map((item, index) => (
                        <Col {...trio} md={8} sm={8} key={`${item}_tempalte_button_migrate_tb`} className={styles["__container--template-btn"]}>
                            <TemplateButtons
                                id={item}
                                title={BUTTON_TITLES_LIST[index]}
                                stateSetter={setEntryConfigs}
                                entry_configs={entry_configs}
                                formHook={formHook}
                                setMainState={setMainState}
                            />
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
};

export default SectionChooseCategory;