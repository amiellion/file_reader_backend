import React from 'react';

import LoanCategories from './LoanCategories';

export default {
    title: 'Cards/ Loan Categories',
    component: 'LoanCategories'
}

const Template = (args) => <LoanCategories {...args} />

export const LoanCategoryCard = Template.bind({});
