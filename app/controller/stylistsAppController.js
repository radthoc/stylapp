stylistsApp.controller('StylistsAppController', function StylistsAppController(User, AppointmentSlot, Appointment) {
    StylistsAppController.$inject = ['User', 'AppointmentSlot', 'Appointment'];

    var self = this;
    self.formSubmitted = false;
    self.customerId = 3;

    self.orderProp = 'name';
    self.stylists = User.getUsersBy('stylists');

    self.showSlots = function(stylistId) {
        self.stylistId = stylistId;
        self.stylistSlotsData = AppointmentSlot.getSlotsBy(stylistId);
    };

    self.appointmentRequestForm = function() {
        self.selectedslotslabels = self.getSelectedSlotsLabels();
    };

    self.getSelectedSlotsLabels = function() {
        var selectedSlotsLabels = [];

        angular.forEach(self.selectedSlots, function(slotId, key) {
            this.push(AppointmentSlot.getSlot(slotId));
        }, selectedSlotsLabels);

        return selectedSlotsLabels;
    };

    self.sendAppointmentRequest = function() {
        var appointment = {
            "customerId": self.customerId,
            "stylistId": self.stylistId,
            "appointmentSlots": self.selectedSlots,
        };

        if (Appointment.create(appointment)) {
            self.formSubmitted = true;
            self.confirmationMsq = "Appointment request sent succesfully. You'll be contacted shortly by our staff";
        };

        /*
            in a real world app the appointment service would return a promise that we could listen in order to monitor the result of the request
            appointmentRequest.$promise.then(function() {
                ...
            });
        */
    }
});