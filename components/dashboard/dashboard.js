'use strict';

angular.module('dashboard',['apiService'])
.component('dashboard', {
  templateUrl: "components/dashboard/dashboard.html",
	controller: ['$http', 'apiService', '$log', DashboardController]
}); 

function DashboardController($http, apiService, $log) {
  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.companyId = 41285;
    ctrl.services = [];
    ctrl.getServices = getServices;
    ctrl.formatPrice = formatPrice;
    ctrl.normalizeData = normalizeData;

    getServices(ctrl.companyId);
    
    function getServices(companyId) {
      var normalizedData;
      apiService.getServicesByCompanyId(companyId).then(function(res) {
        if (res.status != 200) {
          ctrl.services = [];
          return;
        }
        ctrl.services = normalizeData(res.data._embedded.services);
      });
    }

    function normalizeData(data) {
      var serviceList = JSON.parse(JSON.stringify(data));

      for (var i=0; i<serviceList.length; i++) {
        if (serviceList[i].prices.length <= 0) {
          serviceList[i].prices.push(0);
        }
      
        for(var j=0; j<serviceList[i].prices.length;j++) {
          serviceList[i].prices[j] = formatPrice(serviceList[i].prices[j]);
        }
      }

      return serviceList;
    }

    function formatPrice(price) {
      return Number(price/100).toFixed(2);
    }
  }
}