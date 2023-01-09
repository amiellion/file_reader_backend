import React from 'react'
import { Row, Col, Avatar, Badge } from 'antd';

import PrimaryButton, { DangerOutlined } from '@/app/widgets/buttons/arcs_buttons';
import CustomCard from '@/app/widgets/cards/CustomCard';

import styles from './accountrequest.module.scss';

const AccountRequest = ({
    status,
    className,

}) => {

    const colors = {
        pending_treasurer: "#ffaa2c",
        pending: "#ffaa2c",
        active: "#30e46c",
        approved: "#30e46c",
        declined: "#b21e37",
    }

    return (
        <>
            <CustomCard width={"100%"} className={className}>
                <div className={styles["conts"]}>
                    <div className={styles['top']}>
                        <Badge
                            dot
                            conut={1}
                            size={"large"}
                            style={{
                                backgroundColor: colors[status?.toLowerCase()],
                                width: 22,
                                height: 22
                            }}
                            offset={[-13, 10]}
                        >
                            <Avatar size={90} />
                        </Badge>
                        <div className={styles["statusContainer"]}>
                            {/*  */}
                            <div className={styles["text_status"]} style={{ color: colors[status?.toLowerCase()] }}>{status}</div>
                            <div className={styles["text__transaction_type"]}>transaction type</div>
                            <div className={styles["text_name"]}>name</div>
                        </div>
                    </div>

                    <Row gutter={[15, 15]} className={styles['mid_container']}>
                        <Col key="amountSection" flex="auto" className={styles['title_value_container']}>
                            <span className={styles['mid_title']}>Loan Amount </span>
                            <span className={styles['mid_value']}>Loan amount</span>
                        </Col>
                        {/* if approved -> label === Opend On, value === date */}
                        {
                            (status.toLowerCase() === 'approved') &&
                            <Col key="amountSection" flex="auto" className={styles['title_value_container']}>
                                <span className={styles['mid_title']}>Opened On</span>
                                <span className={styles['mid_value']}>Loan terms</span>
                            </Col>
                        }

                        {
                            (status.toLowerCase() === 'pending' || status.toLowerCase() === 'declined') &&
                            <Col key="amountSection" flex="auto" className={styles['title_value_container']}>
                                <span className={styles['mid_title']}>Mode of Payment</span>
                                <span className={styles['mid_value']}>Loan Terms</span>
                            </Col>
                        }
                    </Row>

                    <Row gutter={[10, 10]} className={styles["button_container"]}>
                        <Col flex="auto" >
                            <PrimaryButton
                                size="large"
                            >
                                More Info
                            </PrimaryButton>
                        </Col>
                        {
                            status.toLowerCase() === 'declined' && (
                                <Col flex="auto">
                                    <DangerOutlined
                                        size="large"

                                    >Delete</DangerOutlined>
                                </Col>
                            )
                        }
                    </Row>
                </div >
            </CustomCard >
        </>
    );
}

export default AccountRequest;