import React from 'react'
import brackets from '../assets/svg/Brackets'

interface TaglineProps {
	className?: string
	children?: string | React.ReactNode | React.ReactNode[]
}

const Tagline = ({ className, children }: TaglineProps) => {
	return (
		<div className={`tagline flex items-center ${className ?? ''}`}>
			{brackets('left')}
			<div className='mx-3 text-n-3'>{children}</div>
			{brackets('right')}
		</div>
	)
}

export default Tagline
