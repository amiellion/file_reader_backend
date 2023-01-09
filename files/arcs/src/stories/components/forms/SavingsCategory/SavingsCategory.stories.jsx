import React from 'react';

import CreateSavingsCategory from './SavingsCategory';

export default {
    title: 'Forms/Savings Category',
    component: 'CreateSavingsCategory'
}

const Template = (args) => <CreateSavingsCategory {...args} />

export const SavingsCategoryForm = Template.bind({});