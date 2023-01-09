import React from 'react';

import { SupportCard }  from './SupportCard';

export default {
    title: 'Cards/Support Card',
    component: 'SupportCard'
}

const Template = (args) => <SupportCard {...args} />

export const Support_01 = Template.bind({})

Support_01.args = {
    name: 'Sample User 1',
    date: '11/11/22',
    issue: 'Lorem ipsum dolor...',
    status: 'pending'   
}

export const Support_02 = Template.bind({})

Support_02.args = {
    name: 'Sample User 2',
    date: '11/12/22',
    issue: 'Lorem ipsum dolor...',
    status: 'completed'   
}