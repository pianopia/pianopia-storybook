import type { Meta, StoryObj } from '@storybook/react';
import { CardList } from '@/containers/card-list/card-list';

const meta = {
	title: 'Containers/CardList',
	component: CardList,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
