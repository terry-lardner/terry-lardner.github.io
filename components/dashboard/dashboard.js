angular.module('dashboard',['programService'])
.component('dashboard', {
	templateUrl: "components/dashboard/dashboard.html",
	bindings: {
		companyId: '<'
	},
	controller: ['$http', 'programs', '$log', function($http, programs, $log){
		var ctrl = this;
		//self.programs = [];
		ctrl.companyId = 41285;
		$http({
        method: 'GET',
        url: 'https://uk.bookingbug.com/api/v1/' + ctrl.companyId + '/services?page=1&per_page=7', //41285
        headers: {
          'App-Id':'5a3d8b8d',
          'App-Key': '738e9aca62e7465446b7be8fe4219ffa' 
        }
        
        }).then(function success(res) {
			
            ctrl.services = res.data._embedded.services;
  
            for (var i=0; i<ctrl.services.length; i++) {
              if (ctrl.services[i].prices.length <= 0) {
                ctrl.services[i].prices.push(0);
              }
              
              if (typeof ctrl.services[i].description === 'undefined') {
                ctrl.services[i].description = '';
              }
              
              for(var j=0; j<ctrl.services[i].prices.length;j++) {
                ctrl.services[i].prices[j] = formatPrice(ctrl.services[i].prices[j]);
              }
			}
            
        }, function err(res) {
            $log.log(res)
		});
		

	}]
}); 

function formatPrice(price) {
    return Number(price/100).toFixed(2);
}
