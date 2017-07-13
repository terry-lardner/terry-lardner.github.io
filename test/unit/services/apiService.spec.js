'use strict';

describe('ApiServices test suite', function(){
    beforeEach(function() {
        angular.mock.module('apiService')
    });

    it('Should test something', function() {
        var list = [1,2,3];
        expect(list.length).toEqual(3);
    });
});