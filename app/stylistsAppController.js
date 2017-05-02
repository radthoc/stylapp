stylistsApp.controller('StylistsAppController', function StylistsAppController(User, AppointmentSlot) {
    StylistsAppController.$inject = ['User', 'AppointmentSlot'];

    var self = this;
    self.formSubmitted = false;
    self.customerId = 3;

    self.orderProp = 'name';
    self.stylists = User.findBy('stylists');

    self.showSlots = function(stylistId) {
        self.stylistId = stylistId;
        self.stylistSlotsData = AppointmentSlot.findBy({ param: 's_user_' + stylistId });
    };

    self.appointmentRequestForm = function() {
        self.selectedslotslabels = self.getSelectedSlotsLabels();
    };

    self.getSelectedSlotsLabels = function() {
        var selectedSlotsLabels = [];
        var slot = '';

        angular.forEach(self.selectedSlots, function(slotId, key) {
            this.push(AppointmentSlot.findOne({ param: '_' + slotId }));
        }, selectedSlotsLabels);

        return selectedSlotsLabels;
    };

    self.sendAppointmentRequest = function() {
        self.formSubmitted = true;

        var request = {
            "customerId": self.customerId,
            "stylistId": self.stylistId,
            "appointmentSlots": self.selectedSlots,
        };

        self.confirmationMsq = "Appointment request sent succesfully. You'll be contacted shortly by our staff";
        console.log(request);
    }
});