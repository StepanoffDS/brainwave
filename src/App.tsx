import React from 'react'
import ButtonGradient from './assets/svg/ButtonGradient'

import {
	Header,
	Hero,
	Benefits,
	Collaboration,
	Services,
	Pricing,
	Roadmap,
	Footer,
} from './components'

const App = () => {
	return (
		<>
			<div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
				<Header />
				<Hero />
				<Benefits />
				<Collaboration />
				<Services />
				<Pricing />
				<Roadmap />
				<Footer />
			</div>
			<ButtonGradient />
		</>
	)
}

export default App
