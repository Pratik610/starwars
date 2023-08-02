import React from "react"
import { X } from "lucide-react"
import { links } from "../links"

const CharCard = ({
	info,
	charslength,
	index,
	setChars,
	chars,
}) => {
	const getImage = (name) => {
		for (
			let index = 0;
			index < links.length;
			index++
		) {
			if (links[index].includes(name)) {
				return index
			}
		}
	}

	const backgroundColorPicker = () => {
		const colors = [
			"#5cd84c",
			"#7e67ff",
			"#ed0037",
			"#5cd84c",
			"#7e67ff",
			"#ed0037",
			"#5cd84c",
			"#7e67ff",
			"#ed0037",
			"#5cd84c",
			"#7e67ff",
			"#ed0037",
		]

		return colors[Math.floor(Math.random() * 12)]
	}

	const removeChar = (index) => {
		const data = chars.filter(
			(item) => item.name !== chars[index].name,
		)
		setChars(data)
	}

	return (
		<div className='char-card '>
			<div
				className='card-background'
				style={{
					backgroundColor:
						backgroundColorPicker(),
				}}>
				<img
					src='https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png'
					alt=''
				/>
			</div>
			<div className='card-info'>
				{charslength > 2 && (
					<div
						className='close-btn'
						onClick={() => removeChar(index)}>
						<X
							size={25}
							style={{
								background: "#ed0037",
								margin: "0px",
								paddingLeft: "8px",
								paddingRight: "8px",
								borderBottomLeftRadius: "5px",
							}}
							color='#fff
  '
							strokeWidth={0.75}
						/>
					</div>
				)}

				<div className='info'>
					<p>
						<span style={{ color: "grey" }}>
							Name:
						</span>{" "}
						<span>{info.name}</span>
					</p>
					<p>
						<span style={{ color: "grey" }}>
							Height:
						</span>{" "}
						<span>{info.height} cm</span>
					</p>
					<p>
						<span style={{ color: "grey" }}>
							Featured in:
						</span>{" "}
						<span>172 cm</span>
					</p>
				</div>
			</div>
			<img
				src={
					links[
						getImage(
							info.name
								.replace(" ", "-")
								?.toLowerCase(),
						) > 0
							? getImage(
									info.name
										.replace(" ", "-")
										?.toLowerCase(),
							  )
							: getImage(
									info.name
										.split(" ")[0]
										?.toLowerCase(),
							  ) > 0 &&
							  getImage(
									info.name
										.split(" ")[0]
										?.toLowerCase(),
							  )
					]
						? links[
								getImage(
									info.name
										.replace(" ", "-")
										?.toLowerCase(),
								) > 0
									? getImage(
											info.name
												.replace(" ", "-")
												?.toLowerCase(),
									  )
									: getImage(
											info.name
												.split(" ")[0]
												?.toLowerCase(),
									  ) > 0 &&
									  getImage(
											info.name
												.split(" ")[0]
												?.toLowerCase(),
									  )
						  ]
						: "https://pbs.twimg.com/media/DpA1qojXUAAukgt.jpg"
				}
				alt=''
				className='char-img'
			/>
		</div>
	)
}

export default CharCard
