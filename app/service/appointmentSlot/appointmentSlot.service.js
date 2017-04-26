angular.
    module('service.appointmentSlot').
    factory('AppointmentSlot', ['$resource',
        function($resource) {
            return $resource('fixtures/appointment_slots_user_:stylistId.json', {}, {
                find: {
                    method: 'GET',
                    params: { stylistId: '@stylistId' },
                    isArray: false
                }
            });
        }
    ]);