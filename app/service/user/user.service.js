angular.
    module('service.user').
    factory('User', ['$resource',
        function($resource) {
            return $resource('fixtures/user_:param.json', {}, {
                findOne: {
                    method: 'GET',
                    params: {param: '@param'},
                    isArray: false
                },
                findBy: {
                    method: 'GET',
                    params: {param: 'stylists'},
                    isArray: true
                }
            });
        }
    ]);