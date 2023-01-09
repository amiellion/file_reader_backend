import React from 'react';

// import { RoleCard } from '@/app/widgets/cards/RoleCard';
import { RoleCard } from './RoleCard';

export default {
    title: 'Cards/Role Management/Role Card',
    component: 'RoleCard'
};

const Template = (args) => <RoleCard {...args} />

export const Role = Template.bind({});

Role.args = {
    name: 'Membership Role',
    description: 'Lorem ipsum'
}