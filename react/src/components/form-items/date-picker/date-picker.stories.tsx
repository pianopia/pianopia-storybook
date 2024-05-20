import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@/components/form-items/date-picker/date-picker';

const meta = {
	title: 'Components/FormItems/DatePicker',
	component: DatePicker,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
