var comics;
(function (comics) {
    var Controllers;
    (function (Controllers) {
        var LoginController = (function () {
            function LoginController(userService, $window) {
                this.userService = userService;
                this.$window = $window;
            }
            LoginController.prototype.login = function () {
                var _this = this;
                this.userService.loginUser(this.userInfo).then(function (data) {
                    _this.$window.localStorage.setItem("token", JSON.stringify(data.token));
                    alert('login successful');
                });
            };
            return LoginController;
        }());
        Controllers.LoginController = LoginController;
        var RegisterController = (function () {
            function RegisterController(userService) {
                this.userService = userService;
            }
            RegisterController.prototype.signup = function () {
                this.userService.registerUser(this.user).then(function () {
                    alert('signup successful, please login');
                });
            };
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
    })(Controllers = comics.Controllers || (comics.Controllers = {}));
})(comics || (comics = {}));
