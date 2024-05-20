import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/breadcrumb/breadcrumb';

type BreadCrumbs = { breadcrumbs: { name: string; href: string }[] };

export function BreadCrumbSample({ breadcrumbs }: BreadCrumbs) {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				{breadcrumbs.map((item, index) => (
					<>
						<BreadcrumbItem key={index}>
							{index === breadcrumbs.length - 1 ? (
								<BreadcrumbPage>{item.name}</BreadcrumbPage>
							) : (
								<BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
							)}
						</BreadcrumbItem>
						{index === breadcrumbs.length - 1 ? null : <BreadcrumbSeparator />}
					</>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
