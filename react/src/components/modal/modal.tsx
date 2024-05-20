import { Button } from '@/components/button/button';
import { useRef } from 'react';

export type ModalProps = {
	title: string;
	body: React.ReactNode;
};

export function Modal({ title, body }: ModalProps) {
	const modalRef = useRef<HTMLDialogElement>(null);

	return (
		<div>
			<Button onClick={() => modalRef.current?.showModal()}>
				モーダルを開く
			</Button>
			<dialog ref={modalRef} className="modal">
				<div className="modal-box bg-white">
					<h3 className="font-bold text-lg">{title}</h3>
					<div className='p-2'>{body}</div>
					<div className="modal-action">
							<Button onClick={() => modalRef.current?.close()}>閉じる</Button>
					</div>
				</div>
			</dialog>
		</div>
	);
}
