import type { Meta, StoryObj } from '@storybook/react';
import { AvatarSample } from '@/components/avatar-icon/sample';

const meta = {
	title: 'Components/Avatar',
	component: AvatarSample,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		src: 'https://github.com/shadcn.png',
		fallbackText: '#',
	},
} satisfies Meta<typeof AvatarSample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
