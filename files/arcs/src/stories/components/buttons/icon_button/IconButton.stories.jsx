import React from 'react';

import { IconButton } from './IconButton';

export default {
    title: 'Buttons/Icon Buttons',
    component: IconButton,
    argTypes: {}
}

const Template = (args) => <IconButton {...args} />

export const AddBtn = Template.bind({})

AddBtn.args = {
    icon: "fe fe-plus d-flex align-items-center py-1",
    color: "success",
    type: 'align-items-center'
}

export const DeleteBtn = Template.bind({})

DeleteBtn.args = {
    icon: "fe fe-trash d-flex align-items-center py-1",
    color: "danger",
}

export const EditBtn = Template.bind({})

EditBtn.args = {
    icon: "fe fe-edit d-flex align-items-center py-1",
    color: "success",
}

export const CloseBtn = Template.bind({})

CloseBtn.args = {
    icon: "fe fe-x d-flex align-items-center py-1",
    color: "secondary",
}

export const SubmitBtn = Template.bind({})

SubmitBtn.args = {
    icon: "fe fe-check d-flex align-items-center py-1",
    color: "primary",
}