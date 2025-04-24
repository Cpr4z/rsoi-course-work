import { Box, Typography } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import { Link } from 'react-router-dom';

import "./Buttons.css";


interface NavBarButtonProps {
	text: string
	link: string
}

export function NavBarButton({ text, link }: NavBarButtonProps) {
	return (
		<Link to="/" style={{ textDecoration: 'none' }}>
			<Box display="flex" alignItems="center" ml={2}>
				<FlightIcon sx={{ color: 'white', fontSize: 28, mr: 1 }} />
				<Typography
					variant="h6"
					sx={{
						fontWeight: 'bold',
						background: 'linear-gradient(to right, #42a5f5, #478ed1)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						fontSize: '1.5rem',
					}}
				>
					SkyReserve
				</Typography>
			</Box>
		</Link>
	);
}
}
