'use strict';

angular.module('adagios.table.cell_service_check', ['adagios.table'])

    .controller('CellServiceCheckCtrl', ['$scope', function ($scope) {
        if ($scope.entry.state === 0) {
            $scope.state = 'state--ok';
        } else if ($scope.entry.state === 1) {
            $scope.state = 'state--warning';
        } else {
            $scope.state = 'state--error';
        }
    }])

    .run(['tableGlobalConfig', function (tableGlobalConfig) {
        tableGlobalConfig.cellToFieldsMap.service_check = ['state', 'description', 'plugin_output'];
    }]);
