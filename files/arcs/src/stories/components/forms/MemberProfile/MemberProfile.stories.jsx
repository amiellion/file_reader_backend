import React from 'react';

import MemberProfile from './MemberProfile';

export default {
    title: 'Forms/Member Profile',
    component: 'MemberProfile'
}

const Template = (args) => <MemberProfile {...args} />

export const MemberProfileForm = Template.bind({});

