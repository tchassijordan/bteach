
class Service{
	id
	isVisible
	isCertified
	documentToCertify
	minPrise
	currentGradeLevel
	teachingUnit
	levelsUnit
	coursesType
	coursesLocation
	description

	constructor(data){
		this.initialization(data)
		this.isVisible = 1
		this.isCertified = 0
	}

	get getServiceData(){
		return this
	}

	get getId() {
		return this.id
	}

	/**
	 * @returns boolean
	 */
	 get getIsVisible(){
	 	return this.isVisible
	 }

	 /**
	 * @returns boolean
	 */
	 get getIsCertified(){
	 	return this.isCertified
	 }

	 /**
	 * @returns file
	 */
	 get getDocumentToCertify(){
	 	return this.documentToCertify
	 }

	/**
	 * @returns Number
	 */
	 get getMinPrice(){
	 	return this.minPrice
	 }

	 /**
	 * @returns string
	 */
	 get getCurrentGradeLevel(){
	 	return this.currentGradeLevel
	 }

	 /**
	 * @returns Array of unit
	 */
	 get getTeachingUnit(){
	 	return this.teachingUnit
	 }

	 /**
	 * @returns Array to the levels of unit
	 */
	 get getLevelsUnit(){
	 	return this.levelsUnit
	 }

	 /**
	 * @returns Array of type of courses
	 */
	 get getCoursesType(){
	 	return this.coursesType
	 }

	 /**
	 * @returns Array of locations of the courses
	 */
	 get getCoursesLocation(){
	 	return this.coursesLocation
	 }

	 get getDescription(){
	 	return this.description
	 }

	initialization(data){
		if(data){

			const{
				id,
				minPrise,
				documentToCertify,
				currentGradeLevel,
				teachingUnit,
				levelsUnit,
				coursesType,
				coursesLocation,
				description
			} = data

			this.id = id
			this.documentToCertify = documentToCertify ? documentToCertify : null
			this.minPrise = minPrise
			this.currentGradeLevel = currentGradeLevel
			this.teachingUnit = [...teachingUnit]
			this.levelsUnit = [...levelsUnit]
			this.coursesType = [...coursesType]
			this.coursesLocation = [...coursesLocation]
			this.description = description
		}
		
	}

	updateService(data){
		if(data){
			const{
				id,
				minPrise,
				documentToCertify,
				currentGradeLevel,
				teachingUnit,
				levelsUnit,
				coursesType,
				coursesLocation,
				description
			} = data

			this.id = id ? id : this.id
			this.documentToCertify = documentToCertify ? documentToCertify : this.documentToCertify
			this.minPrise = minPrise ? minPrise : this.minPrise
			this.currentGradeLevel = currentGradeLevel ? currentGradeLevel : this.currentGradeLevel
			this.teachingUnit = teachingUnit ? [...teachingUnit] : [...this.teachingUnit]
			this.levelsUnit = levelsUnit ? [...levelsUnit] : [...this.levelsUnit]
			this.coursesType = coursesType ? [...coursesType] : [...this.coursesType]
			this.coursesLocation = coursesLocation ? [...coursesLocation] : [...this.coursesLocation]
			this.description = description ? description : this.description
		}
	}

	setIsVisible(info){ // change visibility of the service
		this.isVisible = info
	}

	setIsCertified(info){
		if(info){
			if(this.documentToCertify){
				this.isCertified = info
			}else{
				throw new Error(
			        "ERROR: This repeater did not provide the document(diploma) to certify his service"
			      );
			}
		}else{
			this.documentToCertify = info
		}
	}

	setDocumentToCertify(document){
		this.documentToCertify = document
	}
}

export default Service