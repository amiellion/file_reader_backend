import React from 'react';

import CoopCard from './CoopCard';

export default {
    title: 'Cards/ Coop Card',
    component: 'CoopCard'
}

const Template = (args) => <CoopCard {...args} />

export const CooperativeCard = Template.bind({});