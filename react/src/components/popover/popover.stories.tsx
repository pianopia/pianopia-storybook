import type { Meta, StoryObj } from '@storybook/react';
import { PopoverSample } from '@/components/popover/sample';

const meta = {
	title: 'Components/Popover',
	component: PopoverSample,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof PopoverSample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'ここを押すとポップオーバーが表示されます',
		children: <div>コンテンツ</div>,
	},
};
