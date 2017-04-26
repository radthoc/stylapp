angular.
    module('whoAmI').
    component('whoAmI', {
        templateUrl: 'whoAmI/view/who_am_i.html',
        controller: ['$http', 'User',
            function WhoAmIController($http, User) {
                var self = this;
                self.user = User.findOne({ param: 3 });
            }
        ]
    });