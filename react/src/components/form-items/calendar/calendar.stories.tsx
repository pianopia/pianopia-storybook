import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@/components/form-items/calendar/calendar';

const meta = {
	title: 'Components/FormItems/Calendar',
	component: Calendar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
