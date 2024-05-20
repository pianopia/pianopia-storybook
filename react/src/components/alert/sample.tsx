import {
	Alert,
	AlertDescription,
	AlertTitle,
	alertVariants,
} from '@/components/alert/alert';
import { VariantProps } from 'class-variance-authority';

type AlertProps = {
	variant: VariantProps<typeof alertVariants>['variant'];
	title: string;
	description: string;
};

export function AlertSample({ variant, title, description }: AlertProps) {
	return (
		<Alert variant={variant}>
			<AlertTitle>{title}</AlertTitle>
			<AlertDescription>{description}</AlertDescription>
		</Alert>
	);
}
