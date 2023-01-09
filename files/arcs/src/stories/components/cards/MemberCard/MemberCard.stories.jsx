import React from 'react';

import MemberCard from './MemberCard';

export default {
    title: 'Cards/ Member Card',
    component: 'MemberCard'
}

const Template = (args) => <MemberCard {...args} />

export const Pending = Template.bind({});

Pending.args = {
    status: 'pending'
}

export const Reject = Template.bind({});

Reject.args = {
    status: 'reject'
}