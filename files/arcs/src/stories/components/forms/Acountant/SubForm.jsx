import React from 'react';
import { Col, Switch } from 'antd';
import CustomCard from '@/app/widgets/cards/CustomCard';
import useToggle from '@/hooks/useToggle';
import InputGroup from '@/app/widgets/form_fields/antdesign/InputGroup';

import styles from './style.module.scss';

const SubForm = () => {

    const [isToggled, setToggled] = useToggle(true);

    const breakpoints = {
        xs: 24,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12
    }

    return (
        <>
            <Col {...breakpoints} >
                <CustomCard className={styles["form_card"]}>
                    <div className="my-3 w-100 d-flex align-items-center justify-content-center flex-column text-center"
                         style={{ gap: 5 }}
                    >
                        <Switch />
                    </div>
                    <InputGroup 
                        select
                        async
                    />
                    <InputGroup 
                        select
                        async
                    />
                    <InputGroup 
                        label={'Credit or Debit'}
                        type="radio"
                        inlineOptions
                        radioOptions={[
                            {
                                title: 'Debit',
                                value: 'Debit'
                            },
                            {
                                title: 'Credit',
                                value: 'Credit'
                            }
                        ]}
                    />
                    <InputGroup 
                        label={'Amount'}
                        type="number"
                        minNum={0}
                    /> 
                </CustomCard>
            </Col>
        </>
    );
}


export default SubForm;