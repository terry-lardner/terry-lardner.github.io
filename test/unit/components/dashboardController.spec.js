'use strict';

describe('Controller: DashboardController test suite', function(){
    beforeEach(module('dashboard'));
    var scope,
    controller;

    beforeEach(inject(function($rootScope, $componentController){
        scope = $rootScope.$new();
        controller = $componentController('dashboard', {scope: scope});
        controller.$onInit();
    }));

    it('should expose the companyId', function() {
        expect(controller.companyId).toBeDefined();
    });

    it('should expose the array of services', function() {
        expect(controller.services).toBeDefined();
    });

    it('should format a given price to 2 decimal places', function() {
        var price = 2000;
        expect(controller.formatPrice(price)).toEqual('20.00');
    });

    it('should format the prices array given an array of services to 2 decimal places', function() {
        var servicesMockArr = 
        [
            { name: "Service name 1", description: "Service name 1 description", prices: [10000] },
            { name: "Service name 2", description: "Service name 2 description", prices: [4500, 5000] }
        ]

        var expectedArr = 
        [
            { name: "Service name 1", description: "Service name 1 description", prices: ['100.00'] },
            { name: "Service name 2", description: "Service name 2 description", prices: ['45.00', '50.00'] }
        ]

        expect(controller.normalizeData(servicesMockArr)).toEqual(expectedArr);
    });

    it('should return an array with 1 formatted price given an empty array of prices', function() {
        var servicesMockArr = 
        [
            { name: "Service name 1", description: "Service name 1 description", prices: [] }
        ]

        var expectedArr = 
        [
            { name: "Service name 1", description: "Service name 1 description", prices: ['0.00'] }
        ]

        expect(controller.normalizeData(servicesMockArr)).toEqual(expectedArr);
    });

    
});