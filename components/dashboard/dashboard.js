'use strict';

angular.module('dashboard',['apiService'])
.component('dashboard', {
  templateUrl: "components/dashboard/dashboard.html",
  // template: '<section class="container">' +
  //             '<h2>Booking Bug code test</h2>' +
  //             '<div class="row">' +
  //                 '<article ng-repeat="service in $ctrl.services" class="col-12 col-md-6 col-lg-3 service-item" >' +
  //                     '<h4 class="service-name">{{service.name}}</h5>' +
  //                     '<p class="service-description">{{service.description}}</p>' +
  //                     '<div class="service-price-container">' +
  //                         '<span ng-repeat="price in service.prices" class="service-price">{{price | currency : "£"}}{{$last ? "" : ", "}}</span>' +
  //                     '</div>' +
  //                 '</article>' +
  //           '</div>' +
  //           '<p class="services-total">Showing {{$ctrl.services.length || 0}} services</p>' +
  //         '</section>',
	bindings: {
		companyId: '<'
	},
	controller: ['$http', 'apiService', '$log', DashboardController]
}); 

function DashboardController($http, apiService, $log) {
  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.companyId = 41285; //41285
    ctrl.services = [];
    ctrl.formatPrice = function(price) {
      return Number(price/100).toFixed(2);
    }

    //self.programs = [];
    apiService.getServicesByCompanyId(ctrl.companyId).then(function(data) {
      if (!data) return;

      ctrl.services = data;

      for (var i=0; i<ctrl.services.length; i++) {
        if (ctrl.services[i].prices.length <= 0) {
          ctrl.services[i].prices.push(0);
        }
      
        if (typeof ctrl.services[i].description === 'undefined') {
          ctrl.services[i].description = '';
        }
      
        for(var j=0; j<ctrl.services[i].prices.length;j++) {
          ctrl.services[i].prices[j] = ctrl.formatPrice(ctrl.services[i].prices[j]);
        }
      }
    });


    
  }
		
}
