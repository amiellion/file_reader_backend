import React, { useState, createContext } from 'react';
import { connect } from 'react-redux';
import { Row, Col, DatePicker, Select, Input } from 'antd';
import useModal from '@/hooks/useModal';
import Primary, { } from '@/app/widgets/buttons/arcs_buttons';

// local components
import Container from '@/components/app/widgets/container_w_coopname';
import { duo } from '@/constants/grid';
import SelectLeaves from '@/components/app/widgets/form_fields/async_select/SelectLeaves';
import SelectEmployees from '@/components/app/widgets/form_fields/async_select/SelectEmployees';



//modals for hr admin

//modals for employee


import style from '../index.module.scss';
import InputGroup from '@/components/app/widgets/form_fields/antdesign/InputGroup';
import { filterAscDesc } from '@/constants/options';

//store


const { Option } = Select;


export const RequestLeaveContext = createContext();

const mapStateToProps = ({ auth, dispatch, }) => ({ auth, dispatch });

const FilterGroupRequests = ({
    auth,
    dispatch,
    openRequestLeave,

    setEmployee,
    setRequestLeave,
    setSortLeave,
    setLeaveTypeState,
}) => {
    const { selectedRole } = auth;
    return (
        <>
            <Row gutter={[12, 12]}>

                <Col {...duo} style={{ display: 'flex', flexDirection: 'row' }}>
                    {selectedRole === 'hr_admin' ?
                        <div>
                            <h2 className={style["date_title"]}>Search Employee</h2>
                            <div style={{ width: '22rem' }}>
                                <SelectEmployees onChangeCustom={(e) => {
                                    if (e) {
                                        const employeeData = JSON.parse(e);
                                        setRequestLeave((state) => {
                                            return {
                                                ...state,
                                                employeeName: `${employeeData.fname} ${employeeData.lname}`
                                            };
                                        });
                                        setEmployee(JSON.parse(e));
                                    } else {
                                        setRequestLeave((state) => {
                                            return {
                                                ...state,
                                                employeeName: ""
                                            };
                                        });
                                        setEmployee("");

                                    }
                                }} />
                            </div>
                        </div>
                        : null
                    }
                    <div className={style["request_container"]}>

                        {/* temporarily disabled */}
                        {/* <div style={{display:'flex', gap:'2rem'}}>
                                    <h2 className={style["date_title"]}>Date Range</h2>
                                    <div>
                                        <RangePicker />
                                    </div>
                                </div> */}

                        {selectedRole === 'employee' ?
                            <div style={{ width: '25rem' }}>
                                <Primary onClick={openRequestLeave}>Request Leave</Primary>
                            </div> : null
                        }

                    </div>
                </Col>

                <Col {...duo}>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '1rem'
                    }}>
                        <div className={style["title_container"]}>
                            <p className={style["txt_title"]}>{'Filter'}</p>
                        </div>
                        <Col style={{
                            width: '100%',
                            padding: 0
                        }}>
                            <InputGroup
                                type="select"
                                options={filterAscDesc}
                                onChangeCustom={(e) => {
                                    const sortValue = e;
                                    console.log("🚀 ~ file: index.js ~ line 168 ~ sortValue", sortValue);
                                    setSortLeave(sortValue);
                                }}
                            />
                        </Col>

                        {/* <Select defaultValue="ascending" style={{ width: '100%' }}
                            onChange={(e) => {
                                const sortValue = e;
                                console.log("🚀 ~ file: index.js ~ line 168 ~ sortValue", sortValue);
                                setSortLeave(sortValue);
                            }
                            }>
                            <Option value="asc" >Ascending</Option>
                            <Option value="desc">Descending</Option>
                        </Select> */}

                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '1rem'
                    }}>

                        <div className={style["title_container"]}>
                            <p className={style["txt_title"]}>{'Type'}</p>
                        </div>

                        <div style={{ width: '40rem' }}>
                            <SelectLeaves onChangeCustom={(e) => {
                                if (e) return setLeaveTypeState(JSON.parse(e).name);
                                setLeaveTypeState('');
                            }} />
                        </div>
                    </div>

                </Col>

            </Row>
        </>
    );
};

export default connect(mapStateToProps)(FilterGroupRequests);
