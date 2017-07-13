'use strict';
describe('Component: dashboard test suite', function () { 
    beforeEach(module('dashboard'));
    beforeEach(module('templates'));
    var scope, 
    element;

    beforeEach(inject(function ($rootScope, $compile) {         
        scope = $rootScope.$new(); 
        
        element = angular.element('<dashboard></dashboard>'); 
        element = $compile(element)(scope);
        scope.$apply();   
    }));

    it('should render page title', function () {
        var title = element.find('h2');
        expect(title.text()).toBe('Booking Bug code test');
    });

    it('should render 0 results shown in total if there is no data', function () {
        var displayedServices = element[0].querySelector('.services-total');
        expect(displayedServices.innerText).toBe('Showing 0 services');
    });
});