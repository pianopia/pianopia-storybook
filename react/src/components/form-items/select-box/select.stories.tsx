import type { Meta, StoryObj } from '@storybook/react';
import { SelectBoxSample } from '@/components/form-items/select-box/sample';

const meta = {
	title: 'Components/FormItems/SelectBox',
	component: SelectBoxSample,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SelectBoxSample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		options: [
			{ value: 'option1', label: '選択肢1' },
			{ value: 'option2', label: '選択肢2' },
			{ value: 'option3', label: '選択肢3' },
		],
	},
};
