import React from 'react';

import { Row, Col, Card, Badge, Button, Avatar, } from 'antd';
import Primary, { PrimaryOutline, DangerOutlined } from '@/app/widgets/buttons/arcs_buttons';
import style from './support.module.scss';

export const SupportCard = ({ name, date, issue, status }) => (

    <>
        <Card className={style['support_card']} >
            <Row xl={24}> 
                <Avatar size={102} src="resources/images/placeholder-support.png" className={style['coop_avatar']} />
            </Row>
            <Row xl={24}> 
                <div className={style["support_name"]}>{name}</div>
            </Row>
            <Row>
                <Col xl={4} sm={12}><div className={style["detailsb"]}>Date</div></Col>
                <Col xl={20} sm={12}><div className={style["details"]}>{date}</div></Col> 
            </Row>
            <Row>
                <Col xl={4} sm={12}><div className={style["detailsb"]}>Issue</div></Col>
                <Col xl={20} sm={12}><div className={style["details"]}>{issue}</div></Col> 
            </Row>
            <Row>
                {
                    status === "pending" ?
                    (<Primary className={style["btn_solved"]} block>Solve</Primary>):
                    <><Col xl={4} sm={12}><div className={style["detailsb"]}>Status</div></Col><Col xl={20} sm={12}><div className={style["details"]}>Solved (11/20/2021)</div></Col></>
                }
            </Row>
        </Card>

    </>
);