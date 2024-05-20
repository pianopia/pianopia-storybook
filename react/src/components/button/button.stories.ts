import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/button/button';

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn(), children: 'Button' },
	argTypes: {
		variant: {
			options: [
				'default',
				'destructive',
				'outline',
				'secondary',
				'ghost',
				'link',
			],
			control: { type: 'select' },
		},
		size: {
			options: ['default', 'sm', 'lg', 'icon'],
			control: { type: 'select' },
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'default',
	},
};

export const Destructive: Story = {
	args: {
		variant: 'destructive',
	},
};

export const Outline: Story = {
	args: {
		variant: 'outline',
	},
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
	},
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
	},
};

export const Link: Story = {
	args: {
		variant: 'link',
	},
};

export const Large: Story = {
	args: {
		size: 'lg',
	},
};

export const Small: Story = {
	args: {
		size: 'sm',
	},
};

export const Icon: Story = {
	args: {
		children: '🚀',
		size: 'icon',
	},
};
