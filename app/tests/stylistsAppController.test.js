describe('StylistsAppController', function () {
    var ctrl, whoAmI, $controller;

    beforeEach(module('stylApp'));

    beforeEach(function () {
        whoAmI = {};

        module(function ($provide) {
            $provide.value('whoAmI', whoAmI);
        });
    });

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    beforeEach(inject(function ($controller) {
        var appointmentSlot = {},
            user = {
                getUsersBy: function () {}
            },
            appointment = {
                create: function () {}
            };

        spyOn(appointment, 'create').and.returnValue(true);

        ctrl = $controller('StylistsAppController', {
            User: user,
            AppointmentSlot: appointmentSlot,
            Appointment: appointment
        });
    }));

    it('should create and send an appointment request', function () {
        ctrl.customerId = 3;
        ctrl.stylistId = 2;
        ctrl.selectedSlots = ["14", "15"];

        ctrl.sendAppointmentRequest();

        expect(ctrl.formSubmitted).toBe(true);
        expect(ctrl.confirmationMsq).toBe("Appointment request sent succesfully. You'll be contacted shortly by our staff");
    });
});