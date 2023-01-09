import React from 'react';

import AccountantForm from './Accountant';

export default {
    title: 'Forms/Accountant Form',
    component: 'AccountantForm'
}

const Template = (args) => <AccountantForm {...args} />;

export const Accountant = Template.bind({});