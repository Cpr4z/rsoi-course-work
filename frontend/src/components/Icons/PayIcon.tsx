import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "./Icons.css";


interface PayIconProps {
	color: string,
	addContainerClassName?: string,
	addClassName?: string,
	onClick?: () => void
}

export function PayIcon(props: PayIconProps) {
	return (
		<div className={ `icon-container ${props.addContainerClassName}` }>
			<div
				className={ `pay-icon ${props.addClassName}` }
				onClick={ props.onClick }
			>
				<ShoppingCartIcon fontSize="medium" sx={{ color: props.color }}/>
			</div>
		</div>
	)
}
