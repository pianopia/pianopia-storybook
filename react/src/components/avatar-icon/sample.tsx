import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@/components/avatar-icon/avatar';

type AvatarProps = {
	src: string;
	fallbackText: string;
};

export function AvatarSample({ src, fallbackText }: AvatarProps) {
	return (
		<Avatar>
			<AvatarImage src={src} />
			<AvatarFallback>{fallbackText}</AvatarFallback>
		</Avatar>
	);
}

