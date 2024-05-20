import { Card, CardProps } from '@/components/card/card';

/**
 * Note: 実際に使う際はこのコンポーネント内でカードのデータ取得ロジックを組む
 */
export function CardList() {
	return (
		<div className="flex flex-wrap gap-4">
			{CardListMock.map((card, index) => (
				<Card {...card} key={index} />
			))}
		</div>
	);
}

const CardListMock: CardProps[] = [
	{
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
	{
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
	{
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
	{
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
	{
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
	{
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
];
