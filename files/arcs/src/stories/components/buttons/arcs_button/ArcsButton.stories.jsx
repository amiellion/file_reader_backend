import React from 'react';

import { ArcsButton } from './ArcsButton';

export default {
    title: 'Buttons/Arcs Button',
    component: 'ArcsButton',
    argTypes: {}
}

const Template = (args) => <ArcsButton {...args} />

export const Primary = Template.bind({})

Primary.args = {
    title: 'Primary',
    set: 'primary',
    type: 'Primary' 
}

export const PrimaryDashed = Template.bind({})

PrimaryDashed.args = {
    title: 'Primary Dashed',
    set: 'primary_dashed',
    type: 'Primary Dashed' 
}

export const PrimaryOutlined = Template.bind({})

PrimaryOutlined.args = {
    title: 'Primary Outlined',
    set: 'primary_outlined',
    type: 'Primary Outlined' 
}

export const Transparent = Template.bind({})

Transparent.args = {
    title: 'Transparent',
    set: 'transparent_bg',
    type: 'Trasparent' 
}

export const DangerOutlined = Template.bind({})

DangerOutlined.args = {
    title: 'Danger Outlined',
    set: 'danger_outlined',
    type: 'Danger Outlined' 
}

export const DangerPrimary = Template.bind({})

DangerPrimary.args = {
    title: 'Danger Primary',
    set: 'danger_primary',
    type: 'Danger Primary' 
}

export const DangerLink = Template.bind({})

DangerLink.args = {
    title: 'Danger Link',
    set: 'danger_link',
    type: 'Danger Link' 
}
