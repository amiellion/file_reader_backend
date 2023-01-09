import React from 'react';

import NextPayment from '@/app/widgets/cards/NextPayment';

export default {
    title: 'Cards/Next Payment',
    component: 'Next Payment'
}

const Template = (args) => <NextPayment {...args} />

export const Plan = Template.bind({});

Plan.args = {
    current_plan: 'Current Plan'
}