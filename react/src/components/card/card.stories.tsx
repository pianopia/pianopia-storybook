import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@/components/card/card';

const meta = {
	title: 'Components/Card',
	component: Card,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		img: {
			src: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
			alt: '靴',
		},
		title: 'タイトル',
		body: <div>カードコンポーネントのボディ</div>,
		statusBadges: [
			{
				name: 'NEW',
				variant: 'default',
			},
		],
		categoryBadges: [
			{
				name: 'Fashion',
			},
			{
				name: 'Shoes',
			},
		],
	},
};
