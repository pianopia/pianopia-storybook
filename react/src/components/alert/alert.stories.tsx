import type { Meta, StoryObj } from '@storybook/react';
import { AlertSample } from '@/components/alert/sample';

const meta = {
	title: 'Components/Alert',
	component: AlertSample,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof AlertSample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'default',
		title: 'タイトル',
		description: '本文本文本文本文本文本文本文',
	},
};

export const Destructive: Story = {
	args: {
		variant: 'destructive',
		title: 'エラータイトル',
		description: '本文本文本文本文本文本文本文',
	},
};
