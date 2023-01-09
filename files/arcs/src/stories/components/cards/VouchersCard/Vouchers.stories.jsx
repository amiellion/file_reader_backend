import React from 'react';

import VouchersCard from './Vouchers';

export default {
    title: 'Cards/Vouchers Card',
    component: 'VouchersCard'
}

const Template = (args) => <VouchersCard {...args} />

export const Vouchers = Template.bind({});