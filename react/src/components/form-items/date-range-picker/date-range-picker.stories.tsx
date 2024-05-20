import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '@/components/form-items/date-range-picker/date-range-picker';

const meta = {
	title: 'Components/FormItems/DateRangePicker',
	component: DateRangePicker,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DateRangePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
