stylistsApp.controller('StylistsAppController', function StylistsAppController(User, AppointmentSlot) {
    StylistsAppController.$inject = ['User', 'AppointmentSlot'];

    var self = this;

    self.orderProp = 'name';
    self.stylists = User.findBy('stylists');

    self.showSlots = function (stylistId) {
        self.stylistSlotsData = AppointmentSlot.find({ stylistId: stylistId });
    };

});