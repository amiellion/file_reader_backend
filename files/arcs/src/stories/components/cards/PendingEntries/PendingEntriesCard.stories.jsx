import React from 'react';

import PendingEntriesCard from '@/app/widgets/cards/PendingEntriesCard';

export default {
    title: 'Cards/Pending Entries Card',
    component: 'PendingEntriesCard'
}

const Template = (args) => <PendingEntriesCard {...args} />

export const PendingEntries = Template.bind({});

// PendingEntries.args = {

// }