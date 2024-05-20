import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroupSample } from '@/components/form-items/radio-group/sample';

const meta = {
	title: 'Components/FormItems/RadioGroup',
	component: RadioGroupSample,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof RadioGroupSample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { values: ['option1', 'option2', 'option3'] },
};
