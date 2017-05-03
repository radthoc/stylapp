angular.
    module('service.ajax').
    factory('AjaxService', ['$resource',
        function($resource) {
            return $resource('fixtures/:param.json', {}, {
                get: {
                    method: 'GET',
                    params: { param: '@param' },
                    isArray: false
                },
                query: {
                    method: 'GET',
                    params: { param: '@param' },
                    isArray: true
                },
                create: {
                    method: "POST",
                    isArray: true
                }
            });
        }
    ]);