'use strict';

angular.module('apiService', ['constant'])
.service('apiService', ['$http', '$log','constants', function ($http, $log, constants) {
    
    this.getServicesByCompanyId = getServicesByCompanyId;

    function getServicesByCompanyId(companyId) {
        return $http({
            method: 'GET',
            url: 'https://uk.bookingbug.com/api/v1/' + companyId + '/services?page=1&per_page=7', //41285
            headers: {
                'App-Id': constants.API_ID,
                'App-Key': constants.API_KEY
            },
            cache: true
        
        }).then(function success(res) {
            return res.data._embedded.services;

        }).catch(function err(res) {
            $log.log(res)
        });
    }
}]);