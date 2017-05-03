describe('controller: stylAppController', function () {

    //beforeEach(module('stylApp'));

    beforeEach(function () {
        angular.mock.module('whoAmI', []);
        angular.mock.module('service.user', []);
        angular.mock.module('service.appointment', []);
        angular.mock.module('service.appointmentSlot', []);
        angular.module('stylApp', [ 'whoAmI', 'service.user', 'service.appointment', 'service.appointmentSlot' ]);
    });

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    beforeEach(inject(function ($controller) {
        var user = {};
        var appointmentSlot = {};
        var appointment = {
            create: function () {
            }
        };

        spyOn(appointment, 'create').and.returnValue(true);

        ctrl = $controller('stylAppController', {
            User: user,
            AppointmentSlot: appointmentSlot,
            Appointment: appointment
        });
    }));

    it('should create and send an appointment request', function () {
        var expectedAppointment = {
            "customerId": 3,
            "stylistId": 2,
            "appointmentSlots": ["14", "15"]
        };

        ctrl.customerId = 3;
        ctrl.stylistId = 2;
        ctrl.selectedSlots = ["14", "15"];

        ctrl.sendAppointmentRequest();

        expect(appointment).toBe(expectedAppointment);
        expect(ctrl.formSubmitted).toBe(true);
        expect(ctrl.confirmationMsq).toBe("Appointment request sent succesfully. You'll be contacted shortly by our staff");
    });
});