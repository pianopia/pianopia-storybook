import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/form-items/input/input';

const meta = {
	title: 'Components/FormItems/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
