import React from 'react';

import AccountLedger from './AccountLedger';

export default {
    title: 'Forms/Account Ledger',
    component: 'AccountLedger'
}

const Template = (args) => <AccountLedger {...args} />

export const LedgerForm = Template.bind({});
