import { Badge, badgeVariants } from '@/components/badge/badge';
import { VariantProps } from 'class-variance-authority';
import React from 'react';

export type CardProps = {
	img: {
		src: string;
		alt: string;
	};
	title: string;
	body: React.ReactNode;
	statusBadges: {
		name: string;
		variant: VariantProps<typeof badgeVariants>['variant'];
	}[];
	categoryBadges: {
		name: string;
	}[];
};

export function Card({
	img,
	title,
	body,
	statusBadges,
	categoryBadges,
}: CardProps) {
	return (
		<div className="card w-96 shadow-xl">
			<figure>
				{/* Next.jsで使う場合はnext/imageを利用する */}
				<img src={img.src} alt={img.alt} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{title}
					{statusBadges.map(({ name, variant }) => (
						<Badge variant={variant}>{name}</Badge>
					))}
				</h2>
				{body}
				<div className="card-actions justify-end">
					{categoryBadges.map(({ name }) => (
						<Badge variant="outline">{name}</Badge>
					))}
				</div>
			</div>
		</div>
	);
}
