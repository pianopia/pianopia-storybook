import {
	RadioGroup,
	RadioGroupItem,
} from '@/components/form-items/radio-group/radio-group';

type RadioGroupItems = {
	values: string[];
};

export function RadioGroupSample({ values }: RadioGroupItems) {
	return (
		<RadioGroup>
			{values.map((value, index) => (
				<RadioGroupItem key={index} value={value} />
			))}
		</RadioGroup>
	);
}
