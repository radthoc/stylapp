angular.
    module('service.appointmentSlot').
    factory('AppointmentSlot', ['AjaxService',
        function(AjaxService) {
            return {
                getSlotsBy: function(stylistId) {
                    return AjaxService.get({ param: 'appointment_slots_user_' + stylistId });
                },
                getSlot: function(slotId) {
                    return AjaxService.get({ param: 'appointment_slot_' + slotId });
                }
            };
        }
    ]);