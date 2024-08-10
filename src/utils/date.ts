export const formatDate = (date: string) => {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	]
	try {
		const d = new Date(date)
		if (!isValidDate(d)) throw new Error("Invalid Date")
		let day = String(d.getUTCDate())
		let month = months[d.getUTCMonth()]
		let year = String(d.getUTCFullYear().toString())
		let hours = String(d.getUTCHours())
		let minutes = String(d.getUTCMinutes())
		if (+day < 10) day = "0" + day
		if (+hours < 10) hours = "0" + hours
		if (+minutes < 10) minutes = "0" + minutes
		return `${month}, ${day} ${year} ${hours}:${minutes}`
	} catch (err) {
		return null
	}
}

export const isValidDate = (date: Date) => {
	return date instanceof Date && !isNaN(date.getTime())
}
