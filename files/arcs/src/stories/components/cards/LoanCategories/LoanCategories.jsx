import React from 'react';

import PrimaryButton from '@/app/widgets/buttons/arcs_buttons';

import CustomCard from '@/app/widgets/cards/CustomCard';

import styles from './loan.module.scss';

const LoanCategories = () => {

    const TitleValuePair = ({ title, value }) => (
        <div className={styles["container__title_value"]}>
            <p className={styles["text__title"]}>{title}</p>
            <p className={styles["text__value"]}>{value}</p>
        </div>
    );

    return (
        <>
            <CustomCard width={'100%'} className={styles["card__loan_category"]}>
                <p className={styles["title"]}>Placeholder Title</p>
                <TitleValuePair title="Amount" value={`${'Min amount value'} up to ${'Max amount value'} `} />
                <TitleValuePair title="Service Fee" value={`starts at ${'service_fee_percent / service_fee_amount'}% or  whichever is higher`} />
                <PrimaryButton size="large">Edit Loan</PrimaryButton>
            </CustomCard >
        </>
    )
}

export default LoanCategories;