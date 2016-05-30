﻿// Generated by IcedCoffeeScript 108.0.9
(function() {
  define(['plugins/dialog'], function(dialog) {
    var WithdrawalLogDialogViewModel;
    return WithdrawalLogDialogViewModel = (function() {
      function WithdrawalLogDialogViewModel(id, url) {
        this.url = url;
        this.id = ko.observable(id);
        this.statuses = ko.observableArray();
        this.playerName = ko.observable();
        this.brandName = ko.observable();
        this.licenseeName = ko.observable();
        this.statusSuccess = ko.observable();
        this.avcVerificationType = ko.observable();
        this.loadStatus(id);
      }

      WithdrawalLogDialogViewModel.prototype.loadStatus = function(id) {
        return $.post(this.url, {
          id: this.id()
        }).done((function(_this) {
          return function(data) {
            _this.statuses(data.statuses);
            _this.playerName(data.PlayerName);
            _this.brandName(data.BrandName);
            _this.licenseeName(data.LicenseeName);
            _this.statusSuccess(data.StatusSuccess);
            return _this.avcVerificationType(_this.url === "/OfflineWithdraw/AutoVerificationStatus");
          };
        })(this));
      };

      WithdrawalLogDialogViewModel.prototype.close = function() {
        return dialog.close(this);
      };

      WithdrawalLogDialogViewModel.prototype.show = function() {
        return dialog.show(this);
      };

      return WithdrawalLogDialogViewModel;

    })();
  });

}).call(this);
