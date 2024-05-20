import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/form-items/checkbox/checkbox';

const meta = {
	title: 'Components/FormItems/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
