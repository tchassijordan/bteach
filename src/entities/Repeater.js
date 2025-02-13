import ActiveUser from './ActiveUser'
import Service from './Service'

class Repeater extends ActiveUser {

	service

	constructor(data){
		super(data)
		this.role = 1
		this.service = data.service ? new Service(data.service) : null
	}

	/**
	 * @returns {Service}
	 */
	get getService(){
	 	return this.service 
	}

	get getRepeaterData(){
		return this
	}

	createService(data){
	 	this.service = (new Service(data)).getServiceData
	}

	updateService(data){
	 	this.service.updateService(data)
	}

	changeServiceVisibility(info){ //To show and hide the visibility of the service
	 	this.service.setIsVisible(info)
	}
}

export default Repeater