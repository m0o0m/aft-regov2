﻿// Generated by IcedCoffeeScript 108.0.9
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var AddViewModel, addBankAccountModel, baseModel, i18n, nav, picker;
    nav = require("nav");
    i18n = require("i18next");
    picker = require("dateTimePicker");
    baseModel = require("base/base-view-model");
    addBankAccountModel = require("payments/bank-accounts/models/add-bank-account-model");
    return AddViewModel = (function(_super) {
      __extends(AddViewModel, _super);

      function AddViewModel() {
        AddViewModel.__super__.constructor.apply(this, arguments);
        this.SavePath = "/BankAccounts/Add";
        this.message = ko.observable();
        this.messageClass = ko.observable();
        this.Model = new addBankAccountModel();
      }

      AddViewModel.prototype.compositionComplete = function() {
        $('input#' + this.Model.uploadId1FieldId()).ace_file_input(this.Model.makeFileInputSettings(this.Model.idFrontImage()));
        $('input#' + this.Model.uploadId2FieldId()).ace_file_input(this.Model.makeFileInputSettings(this.Model.idBackImage()));
        return $('input#' + this.Model.uploadId3FieldId()).ace_file_input(this.Model.makeFileInputSettings(this.Model.atmCardImage()));
      };

      AddViewModel.prototype.handleSaveFailure = function(response) {
        var error, field, fields, _i, _len, _results;
        alert("failure");
        fields = response != null ? response.fields : void 0;
        if (fields != null) {
          _results = [];
          for (_i = 0, _len = fields.length; _i < _len; _i++) {
            field = fields[_i];
            error = field.errors[0];
            _results.push(this.showError(this.Model[field.name], i18n.t("app:banks.validation." + error)));
          }
          return _results;
        }
      };

      AddViewModel.prototype.save = function() {
        var bankAccount, fd;
        this.clearMessage();
        if (this.Model.validate()) {
          bankAccount = {
            bank: this.Model.bankId(),
            brandId: this.Model.brandId(),
            licenseeId: this.Model.licenseeId(),
            currency: this.Model.currencyCode(),
            accountId: this.Model.bankAccountId(),
            accountName: this.Model.bankAccountName(),
            accountNumber: this.Model.bankAccountNumber(),
            accountType: this.Model.bankAccountAccountTypeId(),
            province: this.Model.bankAccountProvince(),
            branch: this.Model.bankAccountBranch(),
            remarks: this.Model.remarks(),
            supplierName: this.Model.supplierName(),
            contactNumber: this.Model.contactNumber(),
            uSBCode: this.Model.usbCode(),
            purchasedDate: this.Model.purchasedDate(),
            utilizationDate: this.Model.utilizationDate(),
            expirationDate: this.Model.expirationDate()
          };
          fd = new FormData();
          fd.append('uploadId1', $('input#' + this.Model.uploadId1FieldId())[0].files[0]);
          fd.append('uploadId2', $('input#' + this.Model.uploadId2FieldId())[0].files[0]);
          fd.append('uploadId3', $('input#' + this.Model.uploadId3FieldId())[0].files[0]);
          fd.append('bankAccount', JSON.stringify(bankAccount));
          return $.ajax({
            type: "POST",
            url: this.SavePath,
            data: fd,
            processData: false,
            contentType: false,
            xhr: (function(_this) {
              return function() {
                var req;
                req = new XMLHttpRequest();
                req.onreadystatechange = function(e) {
                  var response;
                  if (4 === req.readyState) {
                    response = JSON.parse(req.responseText);
                    if (response.result === "failed") {
                      return _this.showError(response.data);
                    } else {
                      nav.close();
                      nav.open({
                        path: "payments/bank-accounts/view",
                        title: i18n.t("app:banks.viewAccount"),
                        key: response.data.id,
                        data: {
                          id: response.data.id,
                          message: i18n.t("app:bankAccounts.created")
                        }
                      });
                      return $("#bank-accounts-list").trigger("reloadGrid");
                    }
                  }
                };
                return req;
              };
            })(this)
          });
        } else {
          return this.showError("notValid");
        }
      };

      AddViewModel.prototype.showError = function(msg) {
        this.message(i18n.t("app:bankAccounts." + msg));
        return this.messageClass('alert alert-danger');
      };

      AddViewModel.prototype.showMessage = function(msg) {
        this.message(msg);
        return this.messageClass('alert alert-success');
      };

      AddViewModel.prototype.clearMessage = function() {
        this.message('');
        return this.messageClass('');
      };

      AddViewModel.prototype.cancel = function() {
        return nav.close();
      };

      return AddViewModel;

    })(baseModel);
  });

}).call(this);
