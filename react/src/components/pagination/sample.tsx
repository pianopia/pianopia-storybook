import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/pagination/pagination';
import { useState } from 'react';

// Note: 使うときはコメントアウトをはずしてページネーションのためのロジックを組む
type PaginationProps = {
	// baseUrl: string;
	currentPage: number;
	total: number;
	itemsPerPage: number;
};

export function PaginationSample({
	// baseUrl,
	currentPage,
	total,
	itemsPerPage,
}: PaginationProps) {
	const [page, setPage] = useState(currentPage);
	const totalPages = Math.ceil(total / itemsPerPage);

	const decrementPage = () => {
		setPage((prev) => Math.max(1, prev - 1));
	}

	const incrementPage = () => {
		setPage((prev) => Math.min(totalPages, prev + 1));
	}

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" onClick={decrementPage} />
				</PaginationItem>
				{page > 2 && (<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>)}
				{page > 1 && (
					<PaginationItem>
						<PaginationLink href="#" onClick={decrementPage}>
							{page - 1}
						</PaginationLink>
					</PaginationItem>
				)}
				<PaginationItem>
					<PaginationLink href="#" isActive>
						{page}
					</PaginationLink>
				</PaginationItem>
				{page < totalPages && (<PaginationItem>
					<PaginationLink href="#" onClick={incrementPage}>
						{page + 1}
					</PaginationLink>
				</PaginationItem>)}
				{page + 1 < totalPages && (<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>)}
				<PaginationItem>
					<PaginationNext href="#" onClick={incrementPage} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
