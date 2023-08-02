import { useState, useEffect } from "react"
import CharCard from "./Components/CharCard"
import axios, { all } from "axios"
import { UserPlus2 } from "lucide-react"

function App() {
	const [allChars, setAllChars] = useState()

	const [chars, setChars] = useState()

	useEffect(() => {
		const getAllChar = async () => {
			const { data } = await axios.get(
				"https://swapi.dev/api/people",
			)
			if (data) {
				setAllChars(data.results)
			}
		}
		getAllChar()
	}, [])

	useEffect(() => {
		if (allChars) {
			setChars(allChars.slice(0, 2))
		}
	}, [allChars])

	const addChar = () => {
		if (allChars.length > chars.length) {
			if (
				!chars.find(
					(item) =>
						item.name ==
						allChars[chars.length].name,
				)
			) {
				setChars([
					...chars,
					allChars[chars.length],
				])
			} else {
				for (
					let index = 0;
					index < chars.length;
					index++
				) {
					for (
						let i = 0;
						i < allChars.length;
						i++
					) {
						if (
							chars[index].name !==
							allChars[i].name
						) {
							setChars([...chars, allChars[i]])
						}
					}
				}
			}
		}
	}

	return (
		<div className='App'>
			<div className='nav'>
				<img
					src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254'
					alt=''
					style={{ width: "150px" }}
				/>
			</div>
			<div
				style={{
					display: "grid",
					padding: "2em",
					gridTemplateColumns: "auto auto auto",
				}}>
				{chars &&
					chars.map((item, i) => (
						<CharCard
							info={item}
							index={i}
							charslength={chars.length}
							chars={chars}
							setChars={setChars}
						/>
					))}
			</div>
			{chars && (
				<div className=' add-char '>
					<button onClick={addChar}>
						<UserPlus2
							size={28}
							color='#fff'
							strokeWidth={1.75}
						/>
					</button>
					<h3 className=' '>Add New Character</h3>
				</div>
			)}
		</div>
	)
}

export default App
