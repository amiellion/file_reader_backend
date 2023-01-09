import React from 'react';
import { Row, Col, Avatar } from 'antd';

import CustomCard from '@/app/widgets/cards/CustomCard';
import Primary, { DangerOutlined } from '@/app/widgets/buttons/arcs_buttons';
import MyBadge from '@/app/widgets/badge';

import styles from './coopcard.module.scss';

const CoopCard = ({
    coopstatus
}) => {

    const fullWidth = {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
    }

    return (
        <>
            <CustomCard width={314} height={634}>
                <div className={styles["conts"]}>
                    <MyBadge className={styles["badge"]}>{coopstatus}</MyBadge>
                    <Avatar size={194} className={styles['coop_avatar']} />
                    <div className={styles["coop_name"] + " text-center"}>Coop Name</div>
                    <div className={styles["details_container"]}>
                        <div className={styles["details"]}>Date Applied</div>
                        <div className={styles["details"]}>2021/01/01</div>
                        <div className={styles["details"]}>Beta Tester</div>
                    </div>
                    <Row gutter={[15, 15]} className={styles["button_container"]}>
                        <Col {...fullWidth}>
                            <Primary >
                                View Profile
                            </Primary>
                        </Col>
                        {
                            coopstatus === 'pending' && (
                                <Col {...fullWidth}>
                                    <DangerOutlined
                                    >
                                        Reject
                                    </DangerOutlined>
                                </Col>
                            )
                        }
                    </Row>
                </div >
            </CustomCard >
        </>
    )
}

export default CoopCard;