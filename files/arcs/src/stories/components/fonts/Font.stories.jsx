import React from 'react';

import { Font } from './Font';

export default {
    title: 'Typography/Arcs Font',
    component: 'Font',
    argTypes: {}
}

const Template = (args) => <Font {...args} />

// export const Typography = Template.bind({})
// Typography.args = {
//     title: 'Font'
// }

export const Display1 = Template.bind({})
Display1.args = {
    font: 'display1',
    name: 'Display 1'
} 

export const Display2 = Template.bind({})
Display2.args = {
    font: 'display2',
    name: 'Display 2'
} 

export const Heading1 = Template.bind({})
Heading1.args = {
    font: 'heading1',
    name: 'Heading 1'
} 

export const Heading1small = Template.bind({})
Heading1small.args = {
    font: 'heading1small',
    name: 'Heading 1 small'
}

export const Heading2 = Template.bind({})
Heading2.args = {
    font: 'heading2',
    name: 'Heading 2'
}

export const Heading2small = Template.bind({})
Heading2small.args = {
    font: 'heading2small',
    name: 'Heading 2 small'
} 

export const Heading3 = Template.bind({})
Heading3.args = {
    font: 'heading3',
    name: 'Hediing 3'
}

export const Heading3small = Template.bind({})
Heading3small.args = {
    font: 'heading3small',
    name: 'Heading 3 small'
}

export const Heading4 = Template.bind({})
Heading4.args = {
    font: 'heading4',
    name: 'Heading 4'
}

export const Heading4small = Template.bind({})
Heading4small.args = {
    font: 'heading4small',
    name: 'Heading 4 small'
}

export const Heading5 = Template.bind({})
Heading5.args = {
    font: 'heading5',
    name: 'Heading 5'
} 

export const Heading5small = Template.bind({})
Heading5small.args = {
    font: 'heading5small',
    name: 'Heading 5 small'
} 

export const Heading6 = Template.bind({})
Heading6.args = {
    font: 'heading6',
    name: 'Heading 6'
}

export const Heading6small = Template.bind({})
Heading6small.args = {
    font: 'heading6small',
    name: 'Heading 6 small'
} 