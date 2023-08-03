import { useState, useEffect } from 'react'
import CharCard from './Components/CharCard'
import axios from 'axios'
import { UserPlus2 } from 'lucide-react'

function App() {
	const [allChars, setAllChars] = useState()
	const [movies, setMovies] = useState([])
	const [chars, setChars] = useState()

	useEffect(() => {
		const getAllChar = async () => {
			const { data } = await axios.get('https://swapi.dev/api/people')
			if (data) {
				setAllChars(data.results)
				setChars(data.results.slice(0, 2))
			}
		}
		getAllChar()
	}, [])

	useEffect(() => {
		const getMovies = async () => {
			const { data } = await axios.get('https://swapi.dev/api/films/')
			if (data) {
				setMovies(data.results)
			}
		}
		getMovies()
	}, [])

	const addChar = () => {
		if (allChars.length > chars.length) {
			setChars([...chars, allChars[chars.length]])
			window.scrollTo({
				bottom: 0,
				behavior: 'smooth',
			})
		}
	}

	return (
		<div className='App'>
			<div className='nav'>
				<img
					src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254'
					alt=''
					className='logo'
				/>
			</div>
			<hr></hr>
			{chars ? (
				<>
					{' '}
					<div className='container'>
						{chars.map((item, i) => (
							<CharCard
								info={item}
								index={i}
								charslength={chars.length}
								chars={chars}
								setChars={setChars}
								movies={item.films.map(
									(it) => movies.find((i) => i.url === it)?.title
								)}
							/>
						))}
					</div>{' '}
					<div className=' add-char '>
						<button onClick={addChar}>
							<UserPlus2
								size={28}
								color='#fff'
								strokeWidth={1.75}
							/>
						</button>
					</div>
				</>
			) : (
				<div class='loader'></div>
			)}
		</div>
	)
}

export default App
