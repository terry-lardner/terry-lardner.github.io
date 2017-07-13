// describe('Component: Dashboard test suite', function () {
//     var scope,
//     element;

//     beforeEach(function() {
//         module('dashboard');

//         inject(function($rootScope, $compile){
//             scope = $rootScope.$new();
            
//             scope.services = [
//                 {
//                     name: "Service name 1",
//                     description: "Service name 1 description",
//                     prices: [10000]
//                 }, 
//                 {
//                     name: "Service name 2",
//                     description: "Service name 2 description",
//                     prices: [35000]
//                 }
//                 , 
//                 {
//                     name: "Service name 2",
//                     prices: [45000]
//                 }
//             ]
//             element = angular.element('<dashboard></dashboard>');
//             element = $compile(element)(scope);
//             scope.$digest();
//         })
//     });
 
//     it('should render the text', function() {
//             console.log(element);
        
//         var h2 = element.find('h2');
//         console.log(h2)
//         expect(h2.text()).toBe('Booking Bug code test');
//     });
// });