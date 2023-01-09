import React from 'react';
import { Row, Col, Avatar } from 'antd';

import { solo } from '@/constants/grid';

import CustomCard from '@/app/widgets/cards/CustomCard';
import Primary, { DangerOutlined } from '@/app/widgets/buttons/arcs_buttons';

import { IMG_AVATAR_MINI1 } from 'images';
import styles from './member.module.scss';

const MemberCard = ({ status }) => {
    return (
        <>
            <CustomCard width={314} height={530} >
                <div className={styles["conts"]}>

                    <Avatar size={194} src={IMG_AVATAR_MINI1} className={styles['coop_avatar']} />

                    <div className={styles["coop_name"]}>Coop Name</div>
                    <div className={styles["details_container"]}>
                        <p className={styles["details"]}>Member since December 21, 2021</p>
                        <p className={styles["details"]}>details</p>
                    </div>

                    <Row gutter={[15, 15]} className={styles["button_container"]}>
                        <Col {...solo}>
                            <Primary>
                                View Profile
                            </Primary>
                        </Col>
                        {
                            status === 'pending' && (
                                <Col {...solo}>
                                    <DangerOutlined>Reject</DangerOutlined>
                                </Col>
                            )
                        }
                    </Row>
                </div >
            </CustomCard >
        </>
    );
}

export default MemberCard;