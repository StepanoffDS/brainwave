import ButtonSvg from '../assets/svg/ButtonSvg'

interface ButtonProps {
	className?: string
	href?: string
	onClick?: () => void
	children?: string | JSX.Element
	px?: string | number
	white?: boolean | undefined
}

const Button = ({
	className,
	href,
	onClick,
	children,
	px,
	white,
}: ButtonProps) => {
	const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
		px || 'px-7'
	} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`

	const spanClasses = 'relative z-10'

	if (href) {
		return (
			<a href={href} className={classes}>
				<span className={spanClasses}>{children}</span>
				{ButtonSvg(white)}
			</a>
		)
	} else {
		return (
			<button className={classes} onClick={onClick}>
				<span className={spanClasses}>{children}</span>
				{ButtonSvg(white)}
			</button>
		)
	}
}

export default Button
