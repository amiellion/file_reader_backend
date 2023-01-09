import React from 'react';

import SavingsCard from '@/app/widgets/cards/SavingsCard';

export default {
    title: 'Cards/Savings Card',
    component: SavingsCard,
}

const Template = (args) => <SavingsCard {...args} />
export const View = Template.bind({});
View.args = {
    title: "Ipon Ko",
    type: "Time Deposit",
    min_deposit: 3000,
    percent_interest: 2,
}