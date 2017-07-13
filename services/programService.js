/*
 * This is a template for creating a service using angular module method. 
 * Use the example below to create services 
 *
 */

angular.module('programService', ['constant'])
.service('programs', ['$http', '$log','constants', function ($http, $log, constants) {
    
	this.sorted_programs = [];

    /*
     * Get list of all programs and sort them based on display_order
     * @return Promise object  
     */
    this.getAll = function(){ 

    	return $http.get('URL HERE').then(function(res){
    		return res.data;
    	});
    }

    this.getServicesByCompanyId = function(companyId) {
        return $http({
        method: 'GET',
        url: 'https://uk.bookingbug.com/api/v1/' + companyId + '/services?page=1&per_page=7', //41285
        headers: {
          'App-Id': constants.API_ID,
          'App-Key': constants.API_KEY
        },
        cache: true
        
        }).then(function success(res) {
            return res.data;

        }, function err(res) {
            $log.log(res)
		});
    }

}]);