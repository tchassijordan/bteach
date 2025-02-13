
class Note{
	id;
	stars;
	messages;
	isVisible;

	constructor(data){
		const { id, stars, message } = data

		this.id = id
		this.stars = stars
		this.message = message
		this.isVisible = 1
	}


	 get getId(){
	 	return this.id
	 }

	/**
	 * @returns number
	 */
	 get getStars(){
	 	return this.stars
	 }

	 /**
	 * @returns string
	 */
	 get getMessage(){
	 	return this.message
	 }

	 /**
	 * @returns boolean
	 */
	 get getIsVisible(){
	 	return this.isVisible
	 }

	 updateNote(data){
	 	const { stars, message } = data
	 	this.stars = stars
	 	this.message = message
	 }

	 setIsVisible(info){
	 	this.isVisible = info
	 }
}

export default Note