import React from 'react';

import { Card } from './Card';

export default {
    title: 'Components/Card',
    component: 'Card',
};

const Template = (args) => <Card {...args} />;

export const ArcsCard = Template.bind({})
ArcsCard.args = {
    title: '',
    width: '700px',
    height: '600px'
}