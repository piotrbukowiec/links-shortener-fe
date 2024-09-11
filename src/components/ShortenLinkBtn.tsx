import { MouseEvent } from 'react';

interface Props {
	isTextUrl: boolean;
	onBtnClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
export const ShortenLinkBtn = ({ isTextUrl, onBtnClick }: Props) => {
	return (
		<>
			<button
				className='trigger-url-shorting-btn'
				disabled={!isTextUrl}
				onClick={onBtnClick} // Użycie funkcji handleClick
			>
				Skróć link
			</button>
		</>
	);
};
