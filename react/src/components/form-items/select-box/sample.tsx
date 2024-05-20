import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/form-items/select-box/select';

type SelectBoxItems = {
	options: {
		value: string;
		label: string;
	}[];
};

export function SelectBoxSample({ options }: SelectBoxItems) {
	return (
		<Select>
			<SelectTrigger className="w-full">
				<SelectValue placeholder="選択する" />
			</SelectTrigger>
			<SelectContent>
			{options.map(({value, label}, index) => (
				<SelectItem value={value} key={index}>{label}</SelectItem>
			))}
			</SelectContent>
		</Select>
	);
}
