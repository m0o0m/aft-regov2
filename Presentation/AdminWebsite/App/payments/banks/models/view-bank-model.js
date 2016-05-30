﻿// Generated by IcedCoffeeScript 108.0.9
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var ViewTemplateModel, baseModel;
    baseModel = require("base/base-model");
    return ViewTemplateModel = (function(_super) {
      __extends(ViewTemplateModel, _super);

      function ViewTemplateModel() {
        ViewTemplateModel.__super__.constructor.apply(this, arguments);
        this.message = this.makeField();
        this.licenseeName = this.makeField();
        this.brandName = this.makeField();
        this.bankId = this.makeField();
        this.name = this.makeField();
        this.country = this.makeField();
        this.remarks = this.makeField();
      }

      return ViewTemplateModel;

    })(baseModel);
  });

}).call(this);