import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/badge/badge';

const meta = {
	title: 'Components/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn(), children: 'Badge' },
	argTypes: {
		variant: {
			options: ['default', 'destructive', 'outline', 'secondary'],
			control: { type: 'select' },
		},
	},
} satisfies Meta<typeof Badge>;

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
