import React, { useEffect, useState, createContext } from 'react';
import { connect } from 'react-redux';
import { Row, Col, DatePicker, Select, Input } from 'antd';
import useModal from '@/hooks/useModal';
import Primary, { } from '@/app/widgets/buttons/arcs_buttons';

// local components
import Container from '@/components/app/widgets/container_w_coopname';
import Requests from '@/components/app/system/hr/requests/requestTabpage';
import { duo } from '@/constants/grid';
import SelectLeaves from '@/components/app/widgets/form_fields/async_select/SelectLeaves';
import SelectEmployees from '@/components/app/widgets/form_fields/async_select/SelectEmployees';



//modals for hr admin
import ModalApproveRequest from '../modals/requests/Approve_request';

//modals for employee
import ModalRequestLeave from '../modals/employee/Request_leave';
import ModalRequestSubmitted from '../modals/employee/Request_submitted';


import style from './index.module.scss';

//store
import * as HR_SLICE from '@/store/hr/slice';
import FilterGroupRequests from './FilterGroupRequests';


const { RangePicker } = DatePicker;
const { Option } = Select;

const SortSelector = () => (
    <Select defaultValue="ascending" style={{ width: '100%' }}
        onChange={(e) => {
            const sortValue = e;
            console.log("🚀 ~ file: index.js ~ line 168 ~ sortValue", sortValue);
            // setSortLeave(setSortLeave);
        }
        }>
        <Option value="ascending" >Ascending</Option>
        <Option value="descending">Descending</Option>
    </Select>
);


const StatusSelector = () => (
    <Select defaultValue="pending" style={{ width: '50%' }}>
        <Option value="pending">Pending</Option>
        <Option value="approved">Approved</Option>
        <Option value="declined">Declined</Option>
    </Select>
);

const { Search } = Input;

export const RequestLeaveContext = createContext();

const mapStateToProps = ({ auth, dispatch }) => ({ auth, dispatch });

const Request = ({ auth, dispatch }) => {
    const { selectedRole } = auth;
    const [employeeState, setEmployee] = useState({});
    const [requestLeaveState, setRequestLeave] = useState({ employeeName: '', sortLeave: '', leaveTypes: '' });
    const [sortLeaveState, setSortLeave] = useState('');
    const [leaveTypeState, setLeaveTypeState] = useState('');
    const [isOpenApproveRequest, { closeModal: closeApproveRequest, openModal: openApproveRequest }] = useModal();
    const [isOpenRequestLeave, { closeModal: closeRequestLeave, openModal: openRequestLeave }] = useModal();
    const [isOpenRequestSubmitted, { closeModal: closeRequestSubmitted, openModal: openRequestSubmitted }] = useModal();

    return (
        <>
            <ModalApproveRequest
                isOpen={isOpenApproveRequest}
                closeModal={closeApproveRequest}
                warning
            />

            <ModalRequestLeave
                isOpen={isOpenRequestLeave}
                closeModal={closeRequestLeave}
                warning
            />

            <ModalRequestSubmitted
                isOpen={isOpenRequestSubmitted}
                closeModal={closeRequestSubmitted}
                warning
            />

            <Container title="Requests">
                <FilterGroupRequests
                    {...{
                        openRequestLeave,
                        setEmployee,
                        setLeaveTypeState,
                        setRequestLeave,
                        setSortLeave,
                    }}
                />

                <RequestLeaveContext.Provider
                    value={{ sortLeaveState, leaveTypeState, ...requestLeaveState, ...employeeState }}>
                    <Requests employeeState={employeeState} />
                </RequestLeaveContext.Provider>
            </Container >
        </>
    );
};

export default connect(mapStateToProps)(Request);
