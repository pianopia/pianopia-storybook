import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@/components/modal/modal';

const meta = {
	title: 'Components/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'タイトル',
		body: <p>本文</p>,
	},
};
