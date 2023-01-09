import React from 'react';

import { CreateRoleCard } from './RoleCard';

export default {
    title: 'Cards/Role Management/Create Role',
    component: 'CreateRoleCard'
}

const Template = (args) => <CreateRoleCard {...args} />

export const CreateRole = Template.bind({});

CreateRole.args = {
    name: 'Create Role'
}