import { loading } from '../assets'

const Generating = ({ className }: { className?: string }) => {
	return (
		<div
			className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
				className ?? ''
			} text-base`}
		>
			<img src={loading} alt='Loading' className='w-5 h-5 mr-4' />
			<p>AI is generating</p>
		</div>
	)
}

export default Generating
