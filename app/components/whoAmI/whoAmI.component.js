angular.
    module('whoAmI').
    component('whoAmI', {
        templateUrl: 'components/whoAmI/view/who_am_i.html',
        controller: ['User',
            function WhoAmIController(User) {
                var self = this;
                self.user = User.getUser(3);
            }
        ]
    });