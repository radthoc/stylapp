angular.
    module('service.user').
    factory('User', ['AjaxService',
        function(AjaxService) {
            return {
                getUser: function(userId) {
                    return AjaxService.get({ param: 'user_' + userId });
                },
                getUsersBy: function(param) {
                    return AjaxService.query({ param: 'users_' + param });
                }
            };
        }
    ]);