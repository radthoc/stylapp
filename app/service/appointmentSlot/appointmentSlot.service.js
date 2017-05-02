angular.
    module('service.appointmentSlot').
    factory('AppointmentSlot', ['$resource',
        function($resource) {
            return $resource('fixtures/appointment_slot:param.json', {}, {
                findBy: {
                    method: 'GET',
                    params: { param: '@param' },
                    isArray: false
                },
                findOne: {
                    method: 'GET',
                    params: { param: '@param' },
                    isArray: false
                }
            });
        }
    ]);