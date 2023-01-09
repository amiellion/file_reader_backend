import React from 'react';

// import { ArcsButton } from './Button';
import ChooseDepositMethod from '@/app/widgets/cards/ChooseDepositMethod';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Cards/Choose Deposit Method',
    component: ChooseDepositMethod,
    args: {
        type: "direct_to_coop",
    }
};

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ChooseDepositMethod {...args} />;
// const Template = (args) => <ArcsButton {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Direct = Template.bind({});
Direct.args = {
    type: "direct_to_coop",
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const ViaArcs = Template.bind({});
ViaArcs.args = {
    type: "send_via_arcs",
};