import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';

import "./Icons.css";


interface FilterIconProps {
	color: string,
	selected: boolean,
	addContainerClassName?: string,
	addClassName?: string,
	onClick?: () => void
}

export function FilterIcon(props: FilterIconProps) {
	return (
		<div className={ `icon-container ${ props.addContainerClassName }` }>
			<div 
				className={ `icon ${ props.addClassName }` } 
				onClick={ props.onClick }
			>
				{ props.selected
					? <SearchOffIcon fontSize="medium" sx={{ color: props.color }}/>
					: <SearchIcon fontSize="medium" sx={{ color: props.color }}/>
				}
			</div>
		</div>
	)
}
