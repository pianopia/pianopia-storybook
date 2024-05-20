import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/popover/popover';

type PopoverProps = {
	title: string;
	children: React.ReactNode;
};

export function PopoverSample({ title, children }: PopoverProps) {
	return (
		<Popover>
			<PopoverTrigger>{title}</PopoverTrigger>
			<PopoverContent>{children}</PopoverContent>
		</Popover>
	);
}
