import React from 'react';

import Badge from '@/app/widgets/badge';

export default {
    title: 'Components/Badge',
    component: 'Badge'
}

const Template = (args) => <Badge {...args} />

export const Approved = Template.bind({})

Approved.args = {
    type: 'approved',
    children: 'Approved'
}

export const Active = Template.bind({})

Active.args = {
    type: 'active',
    children: 'Active'
}

export const Declined = Template.bind({})

Declined.args = {
    type: 'declined',
    children: 'Declined'
}

export const Pending = Template.bind({})

Pending.args = {
    type: 'pending',
    children: 'Pending'
}