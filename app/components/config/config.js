'use strict';


function AdagiosConfig(data) {
    this.data = data;
}

angular.module('adagios.config', [])

    .provider('readConfig', function ReadConfigProvider() {

        var data = {};

        this.loadJSON = function (value) {
            data = value;
        };

        this.$get = [function () {
            return new AdagiosConfig(data);
        }];
    });
