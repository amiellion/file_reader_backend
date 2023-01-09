import React from 'react';

import CoopProfile from './CoopProfile';

export default {
    title: 'Forms/Coop Profile',
    component: 'CoopProfile'
}

const Template = (args) => <CoopProfile {...args} />

export const CoopProfileForm = Template.bind({});
