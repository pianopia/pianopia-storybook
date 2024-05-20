import type { Meta, StoryObj } from '@storybook/react';
import { BreadCrumbSample } from '@/components/breadcrumb/sample';

const meta = {
	title: 'Components/Breadcrumb',
	component: BreadCrumbSample,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		breadcrumbs: [
			{ name: 'Home', href: '#' },
			{ name: 'Previous', href: '#' },
			{ name: 'Current', href: '#' },
		],
	},
} satisfies Meta<typeof BreadCrumbSample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
