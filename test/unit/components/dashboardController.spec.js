'use strict';

describe('Controller: Dashboard controller test suite', function(){
    var scope,
    controller;

    beforeEach(function() {
        module('dashboard');

        inject(function($rootScope, $componentController){
            scope = $rootScope.$new();
            controller = $componentController('dashboard', {$scope: scope});
            controller.$onInit();
        })
    });

    it('should expose the companyId', function() {
        expect(controller.companyId).toBeDefined();
    });

    it('should expose the array of services', function() {
        expect(controller.services).toBeDefined();
    });
});