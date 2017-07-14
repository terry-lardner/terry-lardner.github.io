'use strict';

describe('ApiServices test suite', function(){
    var ApiService, 
    $q, 
    $httpBackend;

    // Add Pokeapi endpoint
    var API = 'https://uk.bookingbug.com/api/v1/';

    // Add mocked Pokéapi response
    var RESPONSE_SUCCESS = {
        "total_entries": 1,
        "_embedded": {
            "services": [{
                "id": 65472,
                "name": "IT Security Courses",
                "description": "All IT Related Courses ",
                "durations": [60],
                "prices": [0],
                "detail_group_id": 22972,
                "listed_durations": [],
                "booking_time_step": 60,
                "is_event_group": true,
                "type": "service",
                "deleted": false,
                "queuing_disabled": true,
                "company_id": 41256,
                "duration_unit": "minute",
                "min_advance_period": 0,
                "max_advance_period": 5184000,
                "min_cancel_period": 86400,
                "booking_type_public": "booking",
                "min_bookings": 1,
                "max_bookings": 1,
                "groups": [],
                "order": 65472,
                "child_level_service": true,
                "_links": {
                    "self": {
                        "href": "https://uk.bookingbug.com/api/v1/41256/services/65472"
                    },
                    "items": {
                        "href": "https://uk.bookingbug.com/api/v1/41256/items?service_id=65472"
                    },
                    "questions": {
                        "href": "https://uk.bookingbug.com/api/v1/41256/questions?detail_group_id=22972"
                    },
                    "days": {
                        "href": "https://uk.bookingbug.com/api/v1/41256/day_data?service_id=65472{&month,week,date,edate,location,event_id,person_id,resource_id,people_ids,resource_ids,person_group_id}",
                        "templated": true
                    },
                    "times": {
                        "href": "https://uk.bookingbug.com/api/v1/41256/time_data?service_id=65472{&event_id,date,end_date,location,person_id,resource_id,duration,single,num_resources,group_id,resource_ids,time_zone,ignore_booking,person_group_id}",
                        "templated": true
                    },
                    "book": {
                        "href": "https://uk.bookingbug.com/api/v1/41256/basket/add_item?service_id=65472{&event_id,member_id,event_chain_id,product_id,attachment_id,deal_id,package_id,bulk_purchase_id}",
                        "templated": true
                    },
                    "all_children": {
                        "href": "https://uk.bookingbug.com/api/v1/41256/services/65472/all_children"
                    },
                    "company": {
                        "href": "https://uk.bookingbug.com/api/v1/company/41256"
                    }
                }
            }]
        },
        "_links": {
            "self": {
                "href": "https://uk.bookingbug.com/api/v1/41256/services"
            }
        }
    }

    beforeEach(module('apiService'));

    beforeEach(inject(function(apiService, _$q_, _$httpBackend_) {
        ApiService = apiService;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
    }));

    it('should exist a function getServicesByCompanyId', function() {
        expect(ApiService.getServicesByCompanyId).toBeDefined();
    });

    describe('when searching for services by company Id', function() {
        var result;

        beforeEach(function() {
            result = {};
        });

        it('should return an array of service objects', function() {
            var companyId = 41256;

            $httpBackend.whenGET(API + search + '/services').respond(200, $q.when(RESPONSE_SUCCESS));
        });
    });
});