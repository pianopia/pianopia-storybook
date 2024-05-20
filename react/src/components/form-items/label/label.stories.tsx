import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/form-items/label/label';

const meta = {
	title: 'Components/FormItems/Label',
	component: Label,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {children: 'Label'},
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
