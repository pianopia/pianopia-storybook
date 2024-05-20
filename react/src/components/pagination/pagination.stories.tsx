import type { Meta, StoryObj } from '@storybook/react';
import { PaginationSample } from '@/components/pagination/sample';

const meta = {
	title: 'Components/Pagination',
	component: PaginationSample,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof PaginationSample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		currentPage: 1,
		total: 100,
		itemsPerPage: 10,
	},
};
