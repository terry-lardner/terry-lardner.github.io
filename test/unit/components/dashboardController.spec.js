'use strict';

describe('Controller: Dashboard controller test suite', function(){
    var scope,
    controller;

    beforeEach(function() {
        module('dashboard');

        inject(function($rootScope, $componentController){
            scope = $rootScope.$new();
            scope.companyId = 1;
            scope.services = [
                {
                    name: "Service name 1",
                    description: "Service name 1 description",
                    prices: [10000]
                }, 
                {
                    name: "Service name 2",
                    description: "Service name 2 description",
                    prices: [35000]
                }
                , 
                {
                    name: "Service name 2",
                    prices: [45000]
                }
            ]
            
            controller = $componentController('dashboard', {scope: scope});
            
            controller.$onInit();
            console.log(controller)
        })
    });

    it('should expose the companyId', function() {
        expect(controller.companyId).toBeDefined();
    });

    it('should expose the array of services', function() {
        expect(controller.services).toBeDefined();
    });

    it('price should be formatted to 2 decimal places', function() {
        var price = 2000;
        expect(controller.formatPrice(price)).toEqual('20.00');
    });
});