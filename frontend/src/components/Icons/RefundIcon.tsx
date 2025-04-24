import UndoIcon from '@mui/icons-material/Undo';

import "./Icons.css";


interface RefundIconProps {
	color: string,
	addContainerClassName?: string,
	addClassName?: string,
	onClick?: () => void
}

export function RefundIcon(props: RefundIconProps) {
	return (
		<div className={ `icon-container ${props.addContainerClassName}` }>
			<div
				className={ `icon ${props.addClassName}` }
				onClick={ props.onClick }
			>
				<UndoIcon fontSize="medium" sx={{ color: props.color }}/>
			</div>
		</div>
	)
}
