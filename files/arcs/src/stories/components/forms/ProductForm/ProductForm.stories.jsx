import React from 'react';

import ProductForm from './ProductForm';

export default {
    title: 'Forms/Product Form',
    component: 'ProductForm'
}

const Template = (args) => <ProductForm {...args} />

export const Product = Template.bind({});