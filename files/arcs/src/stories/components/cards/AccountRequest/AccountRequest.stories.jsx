import React from 'react';

import AccountRequest from './AccountRequest';

export default {
    title: 'Cards/Account Request',
    component: 'AccountRequest'
}

const Template = (args) => <AccountRequest {...args} />

export const Pending = Template.bind({});

Pending.args = {
    status: 'pending'
}

export const Declined = Template.bind({});

Declined.args = {
    status: 'declined'
}

export const Approved = Template.bind({});

Approved.args = {
    status: 'approved'
}

export const Active = Template.bind({});

Active.args = {
    status: 'active'
}