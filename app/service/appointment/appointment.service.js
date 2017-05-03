angular.
    module('service.appointment').
    factory('Appointment', ['AjaxService',
        function(AjaxService) {
            return {
                create: function(appointment) {
                    return  true; //AjaxService.create({ param: 'appointment', data: appointment });
                }
            };
        }
    ]);