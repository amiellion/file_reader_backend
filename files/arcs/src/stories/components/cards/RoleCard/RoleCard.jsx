import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Primary from '@/app/widgets/buttons/arcs_buttons';
import CustomCard from '@/app/widgets/cards/CustomCard';
import { solo } from '@/constants/grid';

import styles from './role.module.scss';

const RoleCard = ({
    name,
    description
}) => {
    return (
        <>
            <CustomCard>
                <div className={styles["conts"]}>
                    <div className={styles["coop_name"]}>{name}</div>
                    <div className={styles["details_container"]}>
                        <Row gutter={[8, 8]}>
                            <Col span={12}><div className={["details"]}>{description}</div></Col>
                            <Col span={12}><div className={["details"]}>Loan Payment, Loan Approval</div></Col>
                        </Row>
                    </div>
                    <Row gutter={[8, 8]}className={styles["button_container"]}>
                        <Col {...solo}>
                            <Primary>
                                Edit
                                {/* <Link to="#">
                                    Edit
                                </Link> */}
                            </Primary>
                        </Col>
                    </Row>
                </div>
            </CustomCard>
        </>
    );
}

const CreateRoleCard = ({
    name
}) => {
    return (
        <>
            <CustomCard>
                <div className={styles["conts"]}>
                    <div className={styles["coop_name"]}>{name}</div>
                    <Row gutter={[8, 8]} className={styles["button_container"]}>
                        <Col {...solo}>
                            <Primary>
                                Create
                                {/* <Link to="#">
                                    Create
                                </Link> */}
                            </Primary>
                        </Col>
                    </Row>
                </div>
            </CustomCard>
        </>
    );
}

export { CreateRoleCard, RoleCard };