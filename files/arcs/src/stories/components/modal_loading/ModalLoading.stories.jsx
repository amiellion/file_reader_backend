import React from 'react';

// import { ArcsButton } from './Button';
import ModalLoading from '@/app/widgets/modals/Generic/Loading';

export default {
    title: 'MODALS/Loading',
    component: ModalLoading,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        isOpen: true,
    },
};

const Template = (args) => <ModalLoading {...args} />;
export const Open = Template.bind({});
Open.args = {
    isOpen: true,
};

// export const Manual = Template.bind({});
// Manual.args = {
//     type: "manual",
// };


// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
