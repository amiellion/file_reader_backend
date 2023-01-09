import React from 'react';

import ActiveLoans from '@/app/widgets/cards/ActiveLoans'

export default {
    title: 'Cards/Active Loans',
    component: 'ActiveLoans'
}

const Template = (args) => <ActiveLoans {...args} />

export const ActiveLoansCard = Template.bind({})

ActiveLoansCard.args = {
    title: 'Title',
    subtitle: 'subtitle',
    value: 100,
    width: '400px',
    height: '200px'
}