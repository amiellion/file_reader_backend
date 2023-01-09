import React from 'react';
import { Row, Col, Card } from 'antd';

// widgets
import MyBadge from '@/app/widgets/badge';
import Primary from '@/app/widgets/buttons/arcs_buttons';

// styles
import styles from './vouchers.module.scss';

const VoucherCards = () => {
    return (
        <>
            <Card id={styles["voucher-card"]}>

                <div className={styles["container__main"]}>
                    <div className={styles["container__top"]}>
                        <div className={styles["container__inner"]}>
                            
                            <p className={styles["text__subtitle"]}>Payee</p>
                            <p className={styles["text__value"]}>Juan</p>
                            <p className={styles["text__value"]}>Dela Cruz</p>
                        </div>
                        <div className={styles["container__inner"]}>
                            <p className={styles["text__subtitle"]}>Date</p>
                            <p className={styles["text__value"]}>December 21, 2021</p>
                        </div>
                    </div>

                    <div className={styles["outer_container__body"]}>
                        
                        <div className={styles["container__body"]}>
                            <div className={styles["container__inner"]} >
                                <p className={styles["text__subtitle"]} >Account Title</p>
                                <p className={styles["text__value"]}>account1</p>
                                <p className={styles["text__value"]}>account2</p>
                            </div>
                            <div className={styles["container__inner"]}>
                                <p className={styles["text__subtitle"]}>Type</p>
                                <p className={styles["text__value"]}>transaction1</p>
                                <p className={styles["text__value"]}>transaction2</p>
                            </div>
                            <div className={styles["container__inner"]}>
                                <p className={styles["text__subtitle"]}>Amount</p>
                                <p className={styles["text__value"]}>----</p>
                                <p className={styles["text__value"]}>----</p>
                            </div>
                        </div>
                    </div>
                    <p className={styles["text__more_entries"]}>Entries</p>
                    <Primary className={styles["btn-complete__entry"]}>View Complete Entry</Primary>
                </div >
                
            </Card>
        </>
    )
}

export default VoucherCards;