(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../api/dist/api.esm.js":
/*!******************************!*\
  !*** ../api/dist/api.esm.js ***!
  \******************************/
/*! exports provided: Copy, Create, Delete, Directory, DirectoryContents, File, FileSystemEntry, PricingPlan, Upload, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Copy", function() { return Copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Create", function() { return Create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directory", function() { return Directory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryContents", function() { return DirectoryContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSystemEntry", function() { return FileSystemEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingPlan", function() { return PricingPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return Upload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var FileSystemEntry = function FileSystemEntry() {
  this.name = '';
  this.location = '';
  this.size = 0;
  this.exists = false;
  this.type = '';
};
var Directory =
/*#__PURE__*/
function (_FileSystemEntry) {
  _inheritsLoose(Directory, _FileSystemEntry);

  function Directory() {
    var _this;

    _this = _FileSystemEntry.call(this) || this;
    _this.mediaType = 'directory';
    _this.subDirectories = 0;
    _this.files = 0;
    _this.contents = new DirectoryContents();
    return _this;
  }

  return Directory;
}(FileSystemEntry);
var File =
/*#__PURE__*/
function (_FileSystemEntry2) {
  _inheritsLoose(File, _FileSystemEntry2);

  function File() {
    var _this2;

    _this2 = _FileSystemEntry2.call(this) || this;
    _this2.mediaType = '';
    _this2.extension = '';
    return _this2;
  }

  return File;
}(FileSystemEntry);
var DirectoryContents = function DirectoryContents() {
  this.files = [];
  this.directories = [];
};
var Create = function Create() {
  this.directory = new Directory();
};
var Copy = function Copy() {
  this.from = new FileSystemEntry();
  this.to = new FileSystemEntry();
  this.recursive = false;
  this.keep = false;
};
var Delete = function Delete() {
  this.entry = new FileSystemEntry();
  this.recursive = false;
};
var Upload = function Upload() {
  this.file = null;
  this.target = new FileSystemEntry();
};
var PricingPlan = function PricingPlan() {
  this.title = '';
  this.price = 0;
  this.size = 0;
  this.period = '';
};
var User = function User() {
  this.firstName = '';
  this.secondName = '';
  this.email = '';
  this.password = '';
  this.pricingPlan = new PricingPlan();
};


//# sourceMappingURL=api.esm.js.map


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-directory/create-directory.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-directory/create-directory.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"createDirectory\">\r\n  <div class=\"d-flex flex-row-reverse p-1\">\r\n    <button class=\"btn btn-sm\">\r\n      <fa-icon [icon]=\"faWindowClose\"\r\n        (click)=\"closeModel()\"></fa-icon>\r\n    </button>\r\n    <button class=\"btn btn-sm\">\r\n      <fa-icon [icon]=\"faInfo\"\r\n        (click)=\"toggleHelp()\"></fa-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"m-1\">\r\n    <h4>Create New Directories</h4>\r\n  </div>\r\n\r\n  <div *ngIf=\"!help\">\r\n    <form (ngSubmit)=\"createDirectories()\" #form=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"directory\">Enter names for directories</label>\r\n        <input type=\"text\" name=\"directory\" class=\"form-control\" maxlength=\"128\"\r\n          [(ngModel)]=\"model\" #directory=\"ngModel\"\r\n          (keypress)=\"checkInputCharacter($event)\"\r\n          required>\r\n\r\n        <div *ngIf=\"!directory.dirty || !directory.touched\" class=\"text-muted\">\r\n          Allowed characters are 'a to z', 'A-Z', ., - and _\r\n        </div>\r\n\r\n        <div *ngIf=\"directory.invalid && !que.length && (directory.dirty || directory.touched)\"\r\n            class=\"text-muted\">\r\n          <div *ngIf=\"directory.errors.required\">\r\n            Directory name is required\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary\"\r\n        (click)=\"addDirectory()\" [disabled]=\"!form.valid\">\r\n        Add Directory</button>\r\n\r\n      <input [disabled]=\"form.invalid && !que\" type=\"submit\"\r\n        value=\"Create Directories\" class=\"btn btn-sm btn-success m-2 p-1\">\r\n    </form>\r\n\r\n    <div>\r\n      <h6>Directories List</h6>\r\n    </div>\r\n    <div id=\"directoryQue\" [class.hidden]=\"!que.length\"\r\n      class=\"alert alert-primary m-1 d-flex flex-row flex-wrap\">\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"help\" class=\"p-2\">\r\n    <ul>\r\n      <li>Create Directory option let you create one or more directories</li>\r\n      <li>To create a directory, use Directory Name input field</li>\r\n      <li>Click 'Add Next' to add typed directory.</li>\r\n      <li>Click 'Create Directories' to create directories in\r\n        Directories list.</li>\r\n      <li>Selected directories are always there at bottom,\r\n        so you may remove one if you wish to cancel.</li>\r\n    </ul>\r\n    <div class=\"alert alert-warning p-2\">\r\n      Click 'Info' button at top again to close this help.\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"login\">\r\n  <h4 class=\"title\">Login</h4>\r\n\r\n  <div *ngIf=\"otherError\" class=\"text-muted\">\r\n    Some kind of error occured, please try again\r\n  </div>\r\n\r\n  <div *ngIf=\"loginFailed\" class=\"text-muted\">\r\n    Failed: Invalid email or password!\r\n  </div>\r\n\r\n  <form (ngSubmit)=\"createSession()\" #loginForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"email\" name=\"email\" class=\"form-control\"\r\n        [(ngModel)]=\"model.email\" #email=\"ngModel\" required>\r\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\r\n        <div *ngIf=\"email.errors.required\" class=\"text-muted\">\r\n          Email is required\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" name=\"password\" class=\"form-control\"\r\n        minlength=8 maxlength=64 [(ngModel)]=\"model.password\"\r\n        #password=\"ngModel\" required>\r\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\">\r\n        <div *ngIf=\"password.errors.required\" class=\"text-muted\">\r\n          Password is required\r\n        </div>\r\n        <div *ngIf=\"password.errors.minlength\" class=\"text-muted\">\r\n          Password must be atleast 8 character long\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div>\r\n      <button type=\"submit\" class=\"btn btn-success\"\r\n        [disabled]=\"!loginForm.valid\">Login</button>\r\n    </div>\r\n  </form>\r\n  <div class=\"text-muted\">\r\n    Not yet registered? <a routerLink=\"/register\">Signup</a> now\r\n  </div>\r\n\r\n  <div *ngIf=\"loginSuccess\" class=\"text-muted\">\r\n    You have been logined successfully, Redirecting...!\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/open-media/open-media.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/open-media/open-media.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"media\">\r\n  <div class=\"controls d-flex flex-row-reverse p-1 px-3\">\r\n    <button class=\"btn btn-sm btn-secondary\" (click)=\"closeMedia()\">\r\n      <fa-icon [icon]=\"faWindowClose\"></fa-icon>\r\n    </button>\r\n  </div>\r\n  <div id=\"mediaWindow\">\r\n    <div *ngIf=\"notSupported\" class=\"p-2\">\r\n      <h4>Not Supported</h4>\r\n      <p>Sorry, but viewing/playing this file is not supported.\r\n          But you should not worry, you may download file and view it\r\n          in an application on your device that support it.\r\n      </p>\r\n    </div>\r\n    <p [class.hidden]=\"!notSupported\" class=\"p-2\">\r\n      Click <a id=\"download\">here</a> to download file</p>\r\n  </div>\r\n  <div id=\"mediaInfo\" class=\"p-1\">\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div id=\"register\">\r\n  <h4 class=\"title\">Signup</h4>\r\n\r\n  <div id=\"failed\" [class.hidden]=\"!registerFailed\" class=\"alert alert-danger\">\r\n    Error while registering!\r\n  </div>\r\n  <div id=\"success\" [class.hidden]=\"!registerSuccess\" class=\"alert alert-success\">\r\n    You've been registered successfully! <a routerLink=\"/login\">Login</a> now.\r\n  </div>\r\n\r\n  <form (ngSubmit)=\"save()\" #registerForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"firstName\">First Name</label>\r\n      <input [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" type=\"text\" name=\"firstName\" class=\"form-control\"\r\n        maxlength=\"128\" required>\r\n      <div *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\" class=\"text-muted\">\r\n        <div *ngIf=\"firstName.errors.required\">\r\n          First Name is required.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"secondName\">Second Name</label>\r\n      <input type=\"text\" name=\"secondName\" class=\"form-control\" maxlength=\"128\" [(ngModel)]=\"model.secondName\"\r\n        #secondName=\"ngModel\">\r\n      <div *ngIf=\"secondName.invalid && (secondName.dirty || secondName.touched)\" class=\"text-muted\">\r\n        <div *ngIf=\"secondName.errors.required\">\r\n          Second Name is required.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email</label>\r\n      <input id=\"email\" type=\"email\" name=\"email\" class=\"form-control\" maxlength=\"256\" [(ngModel)]=\"model.email\" #email=\"ngModel\"\r\n        required>\r\n      <div *ngIf=\"(!validateEmail(email.value) && (email.dirty || email.touched)) || userExist\" class=\"text-muted\">\r\n        <div *ngIf=\"!validateEmail(email.value)\">\r\n          Email is invalid.\r\n        </div>\r\n        <div *ngIf=\"userExist\">\r\n          Email is already registered, try another one\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" name=\"password\" class=\"form-control\" minlength=8 maxlength=\"64\"\r\n        [(ngModel)]=\"model.password\" #password=\"ngModel\">\r\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"text-muted\">\r\n        <div *ngIf=\"password.errors.required\">\r\n          Password is required.\r\n        </div>\r\n        <div *ngIf=\"password.errors.minlength\">\r\n          Password must be atleast 8 character long\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"repeatPassword\">Repeat Password</label>\r\n      <input type=\"password\" name=\"repeatPassword\" class=\"form-control\" maxlength=\"64\" [(ngModel)]=\"passwordRepeat\"\r\n        #repeatPassword=\"ngModel\" required>\r\n      <div *ngIf=\"repeatPassword.invalid && (repeatPassword.dirty || repeatPassword.touched)\" class=\"text-muted\">\r\n        <div *ngIf=\"repeatPassword.errors.required\">\r\n          Reapeat Password is required\r\n        </div>\r\n        <div *ngIf=\"repeatPassword.errors.minlength\">\r\n          Password must be atleast 8 character long\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"(repeatPassword.dirty || repeatPassword.touched)\" class=\"text-muted\">\r\n        <div *ngIf=\"(password.value != repeatPassword.value)\">\r\n          Passwords do not match\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <label for=\"pricingPlans\">Pricing Plans</label>\r\n      <select name=\"pricingPlan\" class=\"form-control\"\r\n        [(ngModel)]=\"model.pricingPlan\" #pricingPlan=\"ngModel\" required>\r\n        <option *ngFor=\"let p of pricingPlans\" [ngValue]=\"p\">{{p.title}}</option>\r\n      </select>\r\n      <div *ngIf=\"pricingPlan.invalid && (pricingPlan.dirty || pricingPlan.touched)\">\r\n        <div *ngIf=\"pricingPlan.errors.required\" class=\"text-muted\">\r\n          You must select a pricing plan\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"p-2\">\r\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!registerForm.valid\">Register</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-file/upload-file.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-file/upload-file.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"uploadFile\">\r\n\r\n  <div *ngIf=\"uploading\" class=\"m-5\">\r\n    <h3 class=\"text-primary\">Uploading {{progress}}</h3>\r\n    <p>Please wait while files are being uploaded</p>\r\n  </div>\r\n\r\n  <div id=\"main\">\r\n    <div class=\"d-flex flex-row-reverse p-1\">\r\n      <button class=\"btn btn-sm btn-secondary ml-1\"\r\n        (click)=\"closeModel()\">\r\n        <fa-icon [icon]=\"faWindowClose\"></fa-icon>\r\n      </button>\r\n      <button class=\"btn btn-sm btn-secondary ml-1\"\r\n        (click)=\"toggleHelp()\">\r\n        <fa-icon [icon]=\"faInfo\"></fa-icon>\r\n      </button>\r\n    </div>\r\n\r\n    <div *ngIf=\"!help\">\r\n      <div id=\"error\" [class.hidden]=\"!errorMessage\" class=\"alert alert-danger\">\r\n        {{errorMessage}}\r\n      </div>\r\n\r\n      <h4>Upload a new file</h4>\r\n      <form (ngSumbit)=\"upload()\" #form=\"ngForm\" id=\"uploadForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"file\">File</label>\r\n          <input type=\"file\" name=\"file\" id=\"file\" class=\"form-control\"\r\n            [(ngModel)]=\"file\" (change)=\"fileName = ''\"\r\n            #fileModel=\"ngModel\" required>\r\n          <div *ngIf=\"fileModel.invalid && (fileModel.dirty && fileModel.touched)\"\r\n            class=\"text-muted\">\r\n            <div *ngIf=\"fileModel.errors.required\">\r\n                Please choose a file\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"targetName\">Target Name</label>\r\n          <input type=\"text\" name=\"targetName\" class=\"form-control\"\r\n            [(ngModel)]=\"fileName\" #filename=\"ngModel\">\r\n          <div *ngIf=\"!(filename.dirty || filename.touched)\">\r\n            Please enter a name to save as a new name\r\n          </div>\r\n          <div *ngIf=\"!validateFileName() && (filename.dirty || filename.touched)\"\r\n            class=\"alert alert-danger\">\r\n            <div *ngIf=\"!validateFileName()\">\r\n              File name is not valid, try another\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-sm btn-primary ml-1\"\r\n          (click)=\"addSelectedFile()\" [disabled]=\"!fileModel.valid\">\r\n          Add File</button>\r\n        <input (click)=\"upload()\" type=\"submit\" class=\"btn btn-sm btn-success ml-1\"\r\n          [disabled]=\"!this.selectedFiles.length\"\r\n          value=\"Upload Selected\">\r\n      </form>\r\n      <h4>Selected Files: </h4>\r\n      <div *ngIf=\"selectedFiles.length\"\r\n        class=\"alert alert-primary m-1 p-1 d-flex flex-row flex-wrap\">\r\n        <div *ngFor=\"let s of selectedFiles\"\r\n          class=\"alert alert-sm alert-light m-1\">\r\n          <span>{{s.newName}}</span>\r\n          <button class=\"btn btn-sm btn-outline-secondary m-1\"\r\n            (click)=\"removeFile(s)\">X</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"help\" class=\"p-2\">\r\n      <ul>\r\n        <li>Upload file window let you upload one or more files.</li>\r\n        <li>To upload a file, use 'Select File' input box.</li>\r\n        <li>Now type an appropriate name for file and click 'Add file'</li>\r\n        <li>To add another file, repeat above two.</li>\r\n        <li>Selected files are always there at bottom, so you may remove one\r\n          or more of them, if you wish to cancel them.\r\n        </li>\r\n        <li>Click 'Upload Selected' to upload selected files</li>\r\n      </ul>\r\n      <p class=\"alert-warning p-2\">Click on info button again to close help.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-entry/user-entry.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-entry/user-entry.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-auto\">\r\n  <ngb-tabset>\r\n    <ngb-tab title=\"Login\">\r\n      <ng-template ngbTabContent>\r\n        <app-login></app-login>\r\n        <div class=\"alert alert-primary m-1\">\r\n          If you've not yet register, head over to Register tab and register.\r\n        </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"Register\">\r\n      <ng-template ngbTabContent>\r\n        <app-register></app-register>\r\n        <div class=\"alert alert-primary m-1\">\r\n          If you've already register, head over to Login tab and login.\r\n        </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/user-panel.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/user-panel.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div *ngIf=\"triggers.createDirectory\">\r\n  <app-create-directory (directory)=\"createDirectory($event)\"\r\n    [currentDirectory]=\"currentDirectory\" [existingNames]=\"getExistingNames()\">\r\n  </app-create-directory>\r\n</div>\r\n\r\n<div *ngIf=\"triggers.uploadFile\">\r\n  <app-upload-file (fileEvent)=\"uploadFile($event)\"\r\n    [location]=\"currentDirectory.location\" [existingNames]=\"getExistingNames()\">\r\n  </app-upload-file>\r\n</div>\r\n\r\n<div *ngIf=\"mediaOpened\">\r\n  <app-open-media [media]=\"media\" (mediaClose)=\"closeFile()\">\r\n  </app-open-media>\r\n</div>\r\n\r\n<!-- File Manager Header -->\r\n<div class=\"item alert alert-sm alert-success\">\r\n  <div class=\"item-header\">\r\n    <input class=\"btn btn-sm btn-light m-1\" title=\"Select All\"\r\n      type=\"checkbox\" id=\"selectAll\" (change)=\"select(null, $event)\">\r\n  </div>\r\n  <div class=\"item-content\">\r\n    <b>Current Location: </b> {{ currentDirectory.location | minifyPath:40 }}\r\n    <b class=\"ml-2\">Usage: </b> {{ usagePercent | to4Precision }}%\r\n    <ngb-progressbar [value]=\"usagePercent\"\r\n      class=\"getUsageClass()\"></ngb-progressbar>\r\n  </div>\r\n  <div class=\"item-actions\">\r\n    <div class=\"d-flex flex-row\">\r\n      <button class=\"btn btn-sm btn-light m-1\" title=\"Go Back\"\r\n        [disabled]=\"!backwardStack.length\"\r\n        (click)=\"previousDirectory()\">\r\n        <fa-icon [icon]=\"faArrowCircleLeft\"></fa-icon>\r\n      </button>\r\n      <button class=\"btn btn-sm btn-light m-1\" title=\"Go Forward\"\r\n        [disabled]=\"!forwardStack.length\"\r\n        (click)=\"reopenDirectory()\">\r\n        <fa-icon [icon]=\"faArrowCircleRight\"></fa-icon>\r\n      </button>\r\n      <button class=\"btn btn-sm btn-light m-1\"\r\n        (click)=\"trigger('createDirectory')\" title=\"Create Directory\">\r\n        <fa-icon [icon]=\"faFolderPlus\"></fa-icon>\r\n      </button>\r\n      <button class=\"btn btn-sm btn-light m-1\" title=\"Upload File\"\r\n        (click)=\"trigger('uploadFile')\">\r\n        <fa-icon [icon]=\"faFileUpload\"></fa-icon>\r\n      </button>\r\n      <button [class]=\"!clipboard.length || !keep ? 'btn btn-sm btn-light m-1' :\r\n        'btn btn-sm btn-secondary m-1'\"\r\n        title=\"Copy\" (click)=\"copyEntries()\" [disabled]=\"!selected.length\">\r\n        <fa-icon [icon]=\"faCopy\"></fa-icon>\r\n      </button>\r\n      <button [class]=\"!clipboard.length || keep ? 'btn btn-sm btn-light m-1' :\r\n        'btn btn-sm btn-secondary m-1'\"\r\n        title=\"Cut\" (click)=\"cutEntries()\" [disabled]=\"!selected.length\">\r\n        <fa-icon [icon]=\"faCut\"></fa-icon>\r\n      </button>\r\n      <button class=\"btn btn-sm btn-light m-1\" title=\"Paste\"\r\n        (click)=\"pasteEntries()\" [disabled]=\"!clipboard.length ||\r\n          (!this.backwardStack.length && !this.forwardStack.length)\">\r\n        <fa-icon [icon]=\"faPaste\"></fa-icon>\r\n      </button>\r\n      <button class=\"btn btn-sm btn-light m-1\" title=\"Delete\"\r\n        (click)=\"deleteEntries()\" [disabled]=\"!selected.length\">\r\n        <fa-icon [icon]=\"faTrash\"></fa-icon>\r\n      </button>\r\n      <button class=\"btn btn-sm btn-light m-1\" title=\"Logout\"\r\n        (click)=\"logout()\">\r\n        <fa-icon [icon]=\"faPowerOff\"></fa-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- No files or directories are there -->\r\n<div *ngIf=\"!currentDirectory.contents.files.length &&\r\n  !currentDirectory.contents.directories.length\" class=\"p-5\">\r\n  <h3 class=\"text-muted\">\r\n    There is nothing here\r\n  </h3>\r\n</div>\r\n\r\n<!-- There is/are one/some files/directories -->\r\n<div *ngIf=\"currentDirectory.contents.files.length ||\r\n  currentDirectory.contents.directories.length\">\r\n  <div *ngIf=\"message\" class=\"alert alert-sm alert-primary\">\r\n    {{message}}\r\n  </div>\r\n  <div *ngIf=\"errorMessage\" class=\"alert alert-sm alert-danger\">\r\n    {{errorMessage}}\r\n  </div>\r\n\r\n  <div *ngFor=\"let e of currentDirectory.contents.directories\"\r\n    class=\"alert item\" [class.alert-light]=\"isSelected(e)\"\r\n    [class.alert-warning]=\"isCopied(e)\" [class.alert-danger]=\"isCut(e)\"\r\n    (click)=\"openDirectory(e)\">\r\n    <div class=\"item-header\">\r\n      <input type=\"checkbox\" (change)=\"select(e, $event)\"\r\n        (click)=\"$event.stopPropagation();\">\r\n      <a (click)=\"openDirectory(e)\">\r\n        <img src=\"/images/folder.png\">\r\n      </a>\r\n    </div>\r\n    <div class=\"item-content\">\r\n      <span class=\"item-name\" contenteditable=\"true\" spellcheck=\"false\"\r\n        (click)=\"$event.stopPropagation();\"\r\n        (blur)=\"renameEntry(e, $event.target.innerText)\"\r\n        (keypress)=\"checkInputCharacter($event)\">{{e.name}}</span>\r\n    </div>\r\n    <div class=\"item-actions\">\r\n      <div>\r\n        <button (click)=\"deleteEntry(e); stopEventPropagation($event)\"\r\n          class=\"btn btn-sm btn-light m-1\">\r\n          <fa-icon [icon]=\"faTrash\"></fa-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngFor=\"let e of currentDirectory.contents.files\" class=\"alert item\"\r\n    [class.alert-light]=\"isSelected(e)\" [class.alert-warning]=\"isCopied(e)\"\r\n    [class.alert-danger]=\"isCut(e)\" (click)=\"openFile(e)\">\r\n\r\n    <div class=\"item-header\">\r\n      <input type=\"checkbox\" (change)=\"select(e, $event)\"\r\n        (click)=\"$event.stopPropagation();\">\r\n      <a href=\"#\">\r\n        <img src=\"/images/file.png\">\r\n      </a>\r\n    </div>\r\n\r\n    <div [class.hidden]=\"playingAudio === e.id\" class=\"item-content\">\r\n      <span class=\"item-name\" contenteditable=\"true\" spellcheck=\"false\"\r\n        (blur)=\"renameEntry(e, $event.target.innerText)\"\r\n        (click)=\"stopEventPropagation()\">{{e.name}}</span>\r\n      <span>{{e.extension}}</span>\r\n    </div>\r\n    <div [id]=\"e.id\" [class.hidden]=\"!playingAudio\"\r\n      class=\"item-content d-flex\"></div>\r\n\r\n    <div class=\"item-actions\">\r\n      <div>\r\n        <button (click)=\"deleteEntry(e); stopEventPropagation($event)\"\r\n          class=\"btn btn-sm btn-light mr-1\">\r\n          <fa-icon [icon]=\"faTrash\"></fa-icon>\r\n        </button>\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-sm btn-light mr-1\"\r\n          (click)=\"downloadFile(e.name, e.location);\r\n            stopEventPropagation($event)\">\r\n          <fa-icon [icon]=\"faDownload\"></fa-icon>\r\n        </button>\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-sm btn-primary mr-1\"\r\n          (click)=\"stopEventPropagation($event)\" disabled>\r\n          {{e.mediaType}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-panel/user-panel.component */ "./src/app/user-panel/user-panel.component.ts");






const routes = [
    {
        path: 'user-panel',
        component: _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_5__["UserPanelComponent"],
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(cookieSerivce, router) {
        this.cookieSerivce = cookieSerivce;
        this.router = router;
        this.title = 'online-storage-client';
    }
    ngOnInit() {
        if (this.cookieSerivce.get('login')) {
            this.router.navigateByUrl('/user-panel');
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-panel/user-panel.component */ "./src/app/user-panel/user-panel.component.ts");
/* harmony import */ var _user_entry_user_entry_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-entry/user-entry.component */ "./src/app/user-entry/user-entry.component.ts");
/* harmony import */ var _create_directory_create_directory_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-directory/create-directory.component */ "./src/app/create-directory/create-directory.component.ts");
/* harmony import */ var _to4_precision_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./to4-precision.pipe */ "./src/app/to4-precision.pipe.ts");
/* harmony import */ var _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./upload-file/upload-file.component */ "./src/app/upload-file/upload-file.component.ts");
/* harmony import */ var _minify_path_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./minify-path.pipe */ "./src/app/minify-path.pipe.ts");
/* harmony import */ var _open_media_open_media_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./open-media/open-media.component */ "./src/app/open-media/open-media.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_12__["UserPanelComponent"],
            _user_entry_user_entry_component__WEBPACK_IMPORTED_MODULE_13__["UserEntryComponent"],
            _create_directory_create_directory_component__WEBPACK_IMPORTED_MODULE_14__["CreateDirectoryComponent"],
            _to4_precision_pipe__WEBPACK_IMPORTED_MODULE_15__["To4PrecisionPipe"],
            _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_16__["UploadFileComponent"],
            _minify_path_pipe__WEBPACK_IMPORTED_MODULE_17__["MinifyPathPipe"],
            _open_media_open_media_component__WEBPACK_IMPORTED_MODULE_18__["OpenMediaComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/create-directory/create-directory.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/create-directory/create-directory.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".createDirectory {\n  position: absolute;\n  background: white;\n  top: 2vh;\n  left: 20vw;\n  width: 60vw;\n  height: 75vh;\n  padding: 1vh 1vw;\n  border: 0.1px solid grey;\n  border-radius: 10px;\n  z-index: 100;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWRpcmVjdG9yeS9EOlxccHJvamVjdHNcXG9ubGluZS1zdG9yYWdlXFxvbmxpbmUtc3RvcmFnZS1jbGllbnQvc3JjXFxhcHBcXGNyZWF0ZS1kaXJlY3RvcnlcXGNyZWF0ZS1kaXJlY3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NyZWF0ZS1kaXJlY3RvcnkvY3JlYXRlLWRpcmVjdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1kaXJlY3RvcnkvY3JlYXRlLWRpcmVjdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGVEaXJlY3Rvcnkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB0b3A6IDJ2aDtcclxuICBsZWZ0OiAyMHZ3O1xyXG4gIHdpZHRoOiA2MHZ3O1xyXG4gIGhlaWdodDogNzV2aDtcclxuICBwYWRkaW5nOiAxdmggMXZ3O1xyXG4gIGJvcmRlcjogMC4xcHggc29saWQgZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iLCIuY3JlYXRlRGlyZWN0b3J5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdG9wOiAydmg7XG4gIGxlZnQ6IDIwdnc7XG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IDc1dmg7XG4gIHBhZGRpbmc6IDF2aCAxdnc7XG4gIGJvcmRlcjogMC4xcHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgei1pbmRleDogMTAwO1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/create-directory/create-directory.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/create-directory/create-directory.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateDirectoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDirectoryComponent", function() { return CreateDirectoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _file_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../file-system.service */ "./src/app/file-system.service.ts");
/* harmony import */ var _extended_directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../extended-directory */ "./src/app/extended-directory.ts");






let CreateDirectoryComponent = class CreateDirectoryComponent {
    constructor(http, fs) {
        this.http = http;
        this.fs = fs;
        this.faWindowClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faWindowClose"];
        this.faInfo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInfo"];
        this.model = '';
        this.directory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.help = false;
        this.que = [];
    }
    ngOnInit() {
    }
    addDirectory() {
        const index = this.existingNames.findIndex(e => {
            return e.name === this.model;
        });
        if (index > 0) {
            this.errorMessage = 'A file or directory exist in current direcory' +
                ' with same name as you choosen. Please use another name.';
            return;
        }
        this.errorMessage = '';
        this.que.push(this.model);
        const divElement = document.createElement('div');
        const buttonElement = document.createElement('button');
        buttonElement.setAttribute('class', 'btn btn-sm btn-secondary ml-1');
        buttonElement.setAttribute('directoryName', this.model);
        buttonElement.innerText = 'x';
        buttonElement.onclick = ((event) => {
            const target = event.target;
            document.getElementById('directoryQue').removeChild(target.parentElement);
            const index = this.que.findIndex(i => {
                return i === target.getAttribute('directoryName');
            });
            this.que.splice(index, 1);
        }).bind(this);
        divElement.setAttribute('class', 'alert alert-sm alert-light mr-1');
        divElement.innerText = this.model;
        divElement.appendChild(buttonElement);
        document.getElementById('directoryQue').appendChild(divElement);
        this.model = '';
    }
    checkInputCharacter(event) {
        const str = String.fromCharCode(event.charCode);
        if (!str.match(/[\.a-zA-Z0-9_-]/)) {
            return false;
        }
    }
    closeModel() {
        this.directory.emit(null);
    }
    createDirectories() {
        const directories = []; // directory objects holding name and location
        const locations = []; // locations to be created
        for (const q of this.que) {
            const object = {
                location: this.currentDirectory.location === '/' ?
                    this.currentDirectory.location + q :
                    this.currentDirectory.location + '/' + q,
                name: q
            };
            directories.push(object);
            locations.push(object.location);
        }
        this.fs.createDirectory({
            locations
        }).subscribe((responceLocations) => {
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < responceLocations.length; i++) {
                const newDirectory = new _extended_directory__WEBPACK_IMPORTED_MODULE_5__["ExtendedDirectory"]();
                newDirectory.location = responceLocations[i];
                newDirectory.name = directories.find((d) => {
                    return d.location === responceLocations[i];
                }).name;
                newDirectory.size = 4096;
                newDirectory.files = 0;
                newDirectory.subDirectories = 0;
                newDirectory.contents = {
                    files: [],
                    directories: []
                };
                this.directory.emit(newDirectory);
            }
        }, (err) => {
            this.errorMessage = 'Some kind of error occured while creating directory.';
        });
    }
    toggleHelp() {
        if (this.help) {
            this.help = false;
        }
        else {
            this.help = true;
        }
    }
};
CreateDirectoryComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _file_system_service__WEBPACK_IMPORTED_MODULE_4__["FileSystemService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CreateDirectoryComponent.prototype, "directory", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreateDirectoryComponent.prototype, "currentDirectory", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreateDirectoryComponent.prototype, "existingNames", void 0);
CreateDirectoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-directory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-directory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-directory/create-directory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-directory.component.scss */ "./src/app/create-directory/create-directory.component.scss")).default]
    })
], CreateDirectoryComponent);



/***/ }),

/***/ "./src/app/extended-directory.ts":
/*!***************************************!*\
  !*** ./src/app/extended-directory.ts ***!
  \***************************************/
/*! exports provided: ExtendedDirectory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedDirectory", function() { return ExtendedDirectory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api */ "../api/dist/api.esm.js");


class ExtendedDirectory extends api__WEBPACK_IMPORTED_MODULE_1__["Directory"] {
}


/***/ }),

/***/ "./src/app/file-system.service.ts":
/*!****************************************!*\
  !*** ./src/app/file-system.service.ts ***!
  \****************************************/
/*! exports provided: FileSystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSystemService", function() { return FileSystemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_4__);





let FileSystemService = class FileSystemService {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.auth = 'Basic ' +
            buffer__WEBPACK_IMPORTED_MODULE_4__["Buffer"].from(this.cookieService.get('login')).toString('base64');
    }
    /************************************************************************** */
    // ENTRY LEVEL OPERATIONS
    getEntries(location = null) {
        if (!location) {
            return this.http.get('/fileSystem', {
                headers: {
                    Authorization: this.auth
                }
            });
        }
        else {
            return this.http.get('/fileSystem', {
                headers: {
                    Authorization: this.auth,
                    'Directory-Location': location
                }
            });
        }
    }
    deleteEntries(locations) {
        // tslint:disable-next-line: deprecation
        return this.http.delete('/fileSystem', {
            headers: {
                Authorization: this.auth,
                locations
            }
        });
    }
    copy(body) {
        return this.http.put('/fileSystem', body, {
            headers: {
                Authorization: this.auth
            }
        });
    }
    /************************************************************************** */
    // DIRECTORY LEVEL OPERATIONS
    createDirectory(body) {
        return this.http.post('/fileSystem', body, {
            headers: {
                Authorization: this.auth,
                'Create-Directory': 'true'
            }
        });
    }
    /************************************************************************** */
    // FILE LEVEL OPERATIONS
    downloadFile(location) {
        return this.http.get('/fileSystem', {
            headers: {
                Authorization: this.auth,
                'File-Location': location
            },
            responseType: 'blob'
        });
    }
    uploadFiles(formData) {
        return this.http.post('/fileSystem', formData, {
            headers: {
                Authorization: this.auth
            }
        });
    }
};
FileSystemService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }
];
FileSystemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], FileSystemService);



/***/ }),

/***/ "./src/app/hru.ts":
/*!************************!*\
  !*** ./src/app/hru.ts ***!
  \************************/
/*! exports provided: hru */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hru", function() { return hru; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function hru(num) {
    let unit;
    const units = ['TB', 'GB', 'MB', 'KB', 'Bytes'];
    for (unit = units.pop(); units.length && num >= 1024; unit = units.pop()) {
        num /= 1024;
    }
    return [num, unit];
}


/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#login {\n  position: absolute;\n  top: 25%;\n  left: 33.33vw;\n  background: white;\n  width: 33vw;\n  height: 50vh;\n  padding: 10px;\n  border: 1px solid #e6e6e6;\n  border-radius: 10px;\n  box-shadow: 1px 1px 5px 1px black;\n  overflow: auto;\n}\n\n.title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXHByb2plY3RzXFxvbmxpbmUtc3RvcmFnZVxcb25saW5lLXN0b3JhZ2UtY2xpZW50L3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyNSU7XHJcbiAgbGVmdDogMzMuMzN2dztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB3aWR0aDogMzN2dztcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzMCwgMjMwLCAyMzAsIDEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IGJsYWNrO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCIjbG9naW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiAzMy4zM3Z3O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDMzdnc7XG4gIGhlaWdodDogNTB2aDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IGJsYWNrO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api */ "../api/dist/api.esm.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let LoginComponent = class LoginComponent {
    constructor(http, cookieSerivce, router) {
        this.http = http;
        this.cookieSerivce = cookieSerivce;
        this.router = router;
        this.model = new api__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.loginSuccess = false;
        this.loginFailed = false;
        this.otherError = false;
    }
    ngOnInit() {
    }
    createSession() {
        const auth = buffer__WEBPACK_IMPORTED_MODULE_4__["Buffer"].from(this.model.email + ':' +
            this.model.password).toString('base64');
        this.http.get('/user', {
            headers: {
                Authorization: 'Basic ' + auth
            }
        }).subscribe((user) => {
            this.loginSuccess = true;
            this.cookieSerivce.set('firstName', user.firstName);
            this.cookieSerivce.set('secondName', user.secondName);
            this.cookieSerivce.set('login', user.email);
            this.cookieSerivce.set('maxStorage', String(user.pricingPlan.size));
            this.router.navigateByUrl('/user-panel');
        }, (error) => {
            if (error.status === 403) {
                this.loginFailed = true;
            }
            else {
                this.otherError = true;
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/mime-types.service.ts":
/*!***************************************!*\
  !*** ./src/app/mime-types.service.ts ***!
  \***************************************/
/*! exports provided: MimeTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeTypesService", function() { return MimeTypesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MimeTypesService = class MimeTypesService {
    constructor() {
        this.audio = [
            'audio/1d-interleaved-parityfec',
            'audio/32kadpcm',
            'audio/3gpp',
            'audio/3gpp2',
            'audio/aac',
            'audio/ac3',
            'audio/AMR',
            'audio/AMR-WB',
            'audio/amr-wb+',
            'audio/aptx',
            'audio/asc',
            'audio/ATRAC-ADVANCED-LOSSLESS',
            'audio/ATRAC-X',
            'audio/ATRAC3',
            'audio/basic',
            'audio/BV16',
            'audio/BV32',
            'audio/clearmode',
            'audio/CN',
            'audio/DAT12',
            'audio/dls',
            'audio/dsr-es201108',
            'audio/dsr-es202050',
            'audio/dsr-es202211',
            'audio/dsr-es202212',
            'audio/DV',
            'audio/DVI4',
            'audio/eac3',
            'audio/encaprtp',
            'audio/EVRC',
            'audio/EVRC-QCP',
            'audio/EVRC0',
            'audio/EVRC1',
            'audio/EVRCB',
            'audio/EVRCB0',
            'audio/EVRCB1',
            'audio/EVRCNW',
            'audio/EVRCNW0',
            'audio/EVRCNW1',
            'audio/EVRCWB',
            'audio/EVRCWB0',
            'audio/EVRCWB1',
            'audio/EVS',
            'audio/example',
            'audio/flexfec',
            'audio/fwdred',
            'audio/G711-0',
            'audio/G719',
            'audio/G7221',
            'audio/G722',
            'audio/G723',
            'audio/G726-16',
            'audio/G726-24',
            'audio/G726-32',
            'audio/G726-40',
            'audio/G728',
            'audio/G729',
            'audio/G729D',
            'audio/G729E',
            'audio/GSM',
            'audio/GSM-EFR',
            'audio/GSM-HR-08',
            'audio/iLBC',
            'audio/ip-mr_v2.5',
            'audio/L8',
            'audio/L16',
            'audio/L20',
            'audio/L24',
            'audio/LPC',
            'audio/MELP',
            'audio/MELP600',
            'audio/MELP1200',
            'audio/MELP2400',
            'audio/mobile-xmf',
            'audio/MPA',
            'audio/mp4',
            'audio/MP4A-LATM',
            'audio/mpa-robust',
            'audio/mpeg',
            'audio/mpeg4-generic',
            'audio/ogg',
            'audio/opus',
            'audio/PCMA',
            'audio/PCMA-WB',
            'audio/PCMU',
            'audio/PCMU-WB',
            'audio/prs.sid',
            'audio/raptorfec',
            'audio/RED',
            'audio/rtp-enc-aescm128',
            'audio/rtploopback',
            'audio/rtp-midi',
            'audio/rtx',
            'audio/SMV',
            'audio/SMV0',
            'audio/SMV-QCP',
            'audio/sp-midi',
            'audio/speex',
            'audio/t140c',
            'audio/t38',
            'audio/telephone-event',
            'audio/TETRA_ACELP',
            'audio/tone',
            'audio/UEMCLIP',
            'audio/ulpfec',
            'audio/usac',
            'audio/VDVI',
            'audio/VMR-WB',
            'audio/vnd.3gpp.iufp',
            'audio/vnd.4SB',
            'audio/vnd.audiokoz',
            'audio/vnd.CELP',
            'audio/vnd.cisco.nse',
            'audio/vnd.cmles.radio-events',
            'audio/vnd.cns.anp1',
            'audio/vnd.cns.inf1',
            'audio/vnd.dece.audio',
            'audio/vnd.digital-winds',
            'audio/vnd.dlna.adts',
            'audio/vnd.dolby.heaac.1',
            'audio/vnd.dolby.heaac.2',
            'audio/vnd.dolby.mlp',
            'audio/vnd.dolby.mps',
            'audio/vnd.dolby.pl2',
            'audio/vnd.dolby.pl2x',
            'audio/vnd.dolby.pl2z',
            'audio/vnd.dolby.pulse.1',
            'audio/vnd.dra',
            'audio/vnd.dts',
            'audio/vnd.dts.hd',
            'audio/vnd.dts.uhd',
            'audio/vnd.dvb.file',
            'audio/vnd.everad.plj',
            'audio/vnd.hns.audio',
            'audio/vnd.lucent.voice',
            'audio/vnd.ms-playready.media.pya',
            'audio/vnd.nokia.mobile-xmf',
            'audio/vnd.nortel.vbk',
            'audio/vnd.nuera.ecelp4800',
            'audio/vnd.nuera.ecelp7470',
            'audio/vnd.nuera.ecelp9600',
            'audio/vnd.octel.sbc',
            'audio/vnd.presonus.multitrack',
            'audio/vnd.qcelp',
            'audio/vnd.rhetorex.32kadpcm',
            'audio/vnd.rip',
            'audio/vnd.sealedmedia.softseal.mpeg',
            'audio/vnd.vmx.cvsd',
            'audio/vorbis',
            'audio/vorbis-config'
        ];
        this.video = [
            'video/1d-interleaved-parityfec',
            'video/3gpp',
            'video/3gpp2',
            'video/3gpp-tt',
            'video/BMPEG',
            'video/BT656',
            'video/CelB',
            'video/DV',
            'video/encaprtp',
            'video/example',
            'video/flexfec',
            'video/H261',
            'video/H263',
            'video/H263-1998',
            'video/H263-2000',
            'video/H264',
            'video/H264-RCDO',
            'video/H264-SVC',
            'video/H265',
            'video/iso.segment',
            'video/JPEG',
            'video/jpeg2000',
            'video/mj2',
            'video/MP1S',
            'video/MP2P',
            'video/MP2T',
            'video/mp4',
            'video/MP4V-ES',
            'video/MPV', ,
            'video/mpeg4-generic',
            'video/nv',
            'video/ogg', ,
            'video/pointer',
            'video/quicktime',
            'video/raptorfec', ,
            'video/rtp-enc-aescm128',
            'video/rtploopback',
            'video/rtx',
            'video/smpte291',
            'video/SMPTE292M',
            'video/ulpfec',
            'video/vc1',
            'video/vc2',
            'video/vnd.CCTV',
            'video/vnd.dece.hd',
            'video/vnd.dece.mobile',
            'video/vnd.dece.mp4',
            'video/vnd.dece.pd',
            'video/vnd.dece.sd',
            'video/vnd.dece.video',
            'video/vnd.directv.mpeg',
            'video/vnd.directv.mpeg-tts',
            'video/vnd.dlna.mpeg-tts',
            'video/vnd.dvb.file',
            'video/vnd.fvt',
            'video/vnd.hns.video',
            'video/vnd.iptvforum.1dparityfec-1010',
            'video/vnd.iptvforum.1dparityfec-2005',
            'video/vnd.iptvforum.2dparityfec-1010',
            'video/vnd.iptvforum.2dparityfec-2005',
            'video/vnd.iptvforum.ttsavc',
            'video/vnd.iptvforum.ttsmpeg2',
            'video/vnd.motorola.video',
            'video/vnd.motorola.videop',
            'video/vnd.mpegurl',
            'video/vnd.ms-playready.media.pyv',
            'video/vnd.nokia.interleaved-multimedia',
            'video/vnd.nokia.mp4vr',
            'video/vnd.nokia.videovoip',
            'video/vnd.objectvideo',
            'video/vnd.radgamettools.bink',
            'video/vnd.radgamettools.smacker',
            'video/vnd.sealed.mpeg1',
            'video/vnd.sealed.mpeg4',
            'video/vnd.sealed.swf',
            'video/vnd.sealedmedia.softseal.mov',
            'video/vnd.uvvu.mp4',
            'video/vnd.youtube.yt',
            'video/vnd.vivo',
            'video/VP8',
            'video/x-matroska'
        ];
        this.image = [
            'image/aces',
            'image/avci',
            'image/avcs',
            'image/bmp',
            'image/cgm',
            'image/dicom-rle',
            'image/emf',
            'image/example',
            'image/fits',
            'image/g3fax',
            'image/heic',
            'image/heic-sequence',
            'image/heif',
            'image/heif-sequence',
            'image/hej2k',
            'image/hsj2',
            'image/jls',
            'image/jp2',
            'image/jpg',
            'image/jpeg',
            'image/jph',
            'image/jphc',
            'image/jpm',
            'image/jpx',
            'image/jxr',
            'image/jxrA',
            'image/jxrS',
            'image/jxs',
            'image/jxsc',
            'image/jxsi',
            'image/jxss',
            'image/naplps',
            'image/png',
            'image/prs.btif',
            'image/prs.pti',
            'image/pwg-raster',
            'image/t38',
            'image/tiff',
            'image/tiff-fx',
            'image/vnd.adobe.photoshop',
            'image/vnd.airzip.accelerator.azv',
            'image/vnd.cns.inf2',
            'image/vnd.dece.graphic',
            'image/vnd.djvu',
            'image/vnd.dwg',
            'image/vnd.dxf',
            'image/vnd.dvb.subtitle',
            'image/vnd.fastbidsheet',
            'image/vnd.fpx',
            'image/vnd.fst',
            'image/vnd.fujixerox.edmics-mmr',
            'image/vnd.fujixerox.edmics-rlc',
            'image/vnd.globalgraphics.pgb',
            'image/vnd.microsoft.icon',
            'image/vnd.mix',
            'image/vnd.ms-modi',
            'image/vnd.mozilla.apng',
            'image/vnd.net-fpx',
            'image/vnd.radiance',
            'image/vnd.sealed.png',
            'image/vnd.sealedmedia.softseal.gif',
            'image/vnd.sealedmedia.softseal.jpg',
            'image/vnd.svf',
            'image/vnd.tencent.tap',
            'image/vnd.valve.source.texture',
            'image/vnd.wap.wbmp',
            'image/vnd.xiff',
            'image/vnd.zbrush.pcx',
            'image/wmf',
            'image/emf',
            'image/wmf'
        ];
        this.application = [
            'application/pdf'
        ];
        this.text = [
            'text/1d-interleaved-parityfec',
            'text/cache-manifest',
            'text/calendar',
            'text/css',
            'text/csv',
            'text/csv-schema',
            'text/directory',
            'text/dns',
            'text/ecmascript',
            'text/encaprtp',
            'text/example',
            'text/flexfec',
            'text/fwdred',
            'text/grammar-ref-list',
            'text/html',
            'text/javascript',
            'text/jcr-cnd',
            'text/markdown',
            'text/mizar',
            'text/n3',
            'text/parameters',
            'text/provenance-notation',
            'text/prs.fallenstein.rst',
            'text/prs.lines.tag',
            'text/prs.prop.logic',
            'text/raptorfec',
            'text/RED',
            'text/rfc822-headers',
            'text/rtf',
            'text/rtp-enc-aescm128',
            'text/rtploopback',
            'text/rtx',
            'text/sgml',
            'text/strings',
            'text/t140',
            'text/tab-separated-values',
            'text/troff',
            'text/turtle',
            'text/ulpfec',
            'text/uri-list',
            'text/vcard',
            'text/vnd.a',
            'text/vnd.abc',
            'text/vnd.ascii-art',
            'text/vnd.curl',
            'text/vnd.debian.copyright',
            'text/vnd.DMClientScript',
            'text/vnd.dvb.subtitle',
            'text/vnd.esmertec.theme-descriptor',
            'text/vnd.ficlab.flt',
            'text/vnd.fly',
            'text/vnd.fmi.flexstor',
            'text/vnd.gml',
            'text/vnd.graphviz',
            'text/vnd.hgl',
            'text/vnd.in3d.3dml',
            'text/vnd.in3d.spot',
            'text/vnd.IPTC.NewsML',
            'text/vnd.IPTC.NITF',
            'text/vnd.latex-z',
            'text/vnd.motorola.reflex',
            'text/vnd.ms-mediapackage',
            'text/vnd.net2phone.commcenter.command',
            'text/vnd.radisys.msml-basic-layout',
            'text/vnd.senx.warpscript',
            'text/vnd.si.uricatalogue',
            'text/vnd.sun.j2me.app-descriptor',
            'text/vnd.sosi',
            'text/vnd.trolltech.linguist',
            'text/vnd.wap.si',
            'text/vnd.wap.sl',
            'text/vnd.wap.wml',
            'text/vnd.wap.wmlscript',
            'text/vtt',
            'text/xml',
            'text/xml-external-parsed-entity'
        ];
    }
};
MimeTypesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MimeTypesService);



/***/ }),

/***/ "./src/app/minify-path.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/minify-path.pipe.ts ***!
  \*************************************/
/*! exports provided: MinifyPathPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinifyPathPipe", function() { return MinifyPathPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MinifyPathPipe = class MinifyPathPipe {
    transform(value, maxlength) {
        let path;
        const pathParts = value.split('/');
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < pathParts.length; i++) {
            if (pathParts.join('/').length < maxlength) {
                break;
            }
            pathParts[i] = '..';
        }
        path = pathParts.join('/');
        if (path.length > maxlength) {
            path = path.slice(0, maxlength - 3) + '...';
        }
        return path;
    }
};
MinifyPathPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'minifyPath'
    })
], MinifyPathPipe);



/***/ }),

/***/ "./src/app/open-media/open-media.component.scss":
/*!******************************************************!*\
  !*** ./src/app/open-media/open-media.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#media {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vw;\n  background-color: white;\n  z-index: 100;\n}\n\n.controls {\n  max-height: 10vh;\n  z-index: 101;\n}\n\n#mediaWindow {\n  max-height: 80vh;\n  max-width: 100vw;\n  z-index: 101;\n}\n\n#mediaInfo {\n  z-index: 101;\n}\n\n.textReader {\n  border: 0.5 solid black;\n  border-radius: 3px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blbi1tZWRpYS9EOlxccHJvamVjdHNcXG9ubGluZS1zdG9yYWdlXFxvbmxpbmUtc3RvcmFnZS1jbGllbnQvc3JjXFxhcHBcXG9wZW4tbWVkaWFcXG9wZW4tbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29wZW4tbWVkaWEvb3Blbi1tZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL29wZW4tbWVkaWEvb3Blbi1tZWRpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtZWRpYSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmNvbnRyb2xzIHtcclxuICBtYXgtaGVpZ2h0OiAxMHZoO1xyXG4gIHotaW5kZXg6IDEwMTtcclxufVxyXG5cclxuI21lZGlhV2luZG93IHtcclxuICBtYXgtaGVpZ2h0OiA4MHZoO1xyXG4gIG1heC13aWR0aDogMTAwdnc7XHJcbiAgei1pbmRleDogMTAxO1xyXG59XHJcblxyXG4jbWVkaWFJbmZvIHtcclxuICB6LWluZGV4OiAxMDE7XHJcbn1cclxuXHJcbi50ZXh0UmVhZGVyIHtcclxuICBib3JkZXI6IDAuNSBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIiwiI21lZGlhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgbWF4LWhlaWdodDogMTB2aDtcbiAgei1pbmRleDogMTAxO1xufVxuXG4jbWVkaWFXaW5kb3cge1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICB6LWluZGV4OiAxMDE7XG59XG5cbiNtZWRpYUluZm8ge1xuICB6LWluZGV4OiAxMDE7XG59XG5cbi50ZXh0UmVhZGVyIHtcbiAgYm9yZGVyOiAwLjUgc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/open-media/open-media.component.ts":
/*!****************************************************!*\
  !*** ./src/app/open-media/open-media.component.ts ***!
  \****************************************************/
/*! exports provided: OpenMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenMediaComponent", function() { return OpenMediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mime_types_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mime-types.service */ "./src/app/mime-types.service.ts");
/* harmony import */ var _file_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../file-system.service */ "./src/app/file-system.service.ts");





let OpenMediaComponent = class OpenMediaComponent {
    constructor(ms, fs) {
        this.ms = ms;
        this.fs = fs;
        this.faWindowClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faWindowClose"];
        this.mediaClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.notSupported = false;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.fs.downloadFile(this.media.location)
            .subscribe(res => {
            const file = res;
            const mediaWindow = document.getElementById('mediaWindow');
            const mediaInfo = document.getElementById('mediaInfo');
            mediaInfo.setAttribute('style', 'text-align: center');
            let documentView;
            let documentSource;
            if (this.ms.image.includes(this.media.mediaType)) {
                documentView = document.createElement('img');
                documentView.setAttribute('style', 'max-width: 98vw; max-height: 78vh; padding: 1vh 1vw;');
                documentSource = URL.createObjectURL(file);
                documentView.src = documentSource;
                mediaWindow.appendChild(documentView);
                mediaInfo.innerHTML = `<b>Viewing File</b>: ${this.media.name}`;
                mediaWindow.appendChild(mediaInfo);
            }
            else if (this.ms.text.includes(this.media.mediaType)) {
                const reader = document.createElement('pre');
                reader.setAttribute('style', 'width: 96vw; height: 76vh; padding: 1vh 1vw; margin: 1vh 1vw;' +
                    'border: 1px solid black; border-radius: 10px;' +
                    'overflow: auto;');
                reader.setAttribute('class', 'textReader');
                reader.setAttribute('contentEditable', 'true');
                reader.setAttribute('spellCheck', 'false');
                file.text().then((text) => {
                    reader.innerText = text;
                    mediaWindow.appendChild(reader);
                    mediaInfo.innerHTML = `<b>Viewing File</b>: ${this.media.name}`;
                    mediaWindow.appendChild(mediaInfo);
                });
            }
            else if (this.ms.video.includes(this.media.mediaType)) {
                const video = document.createElement('video');
                video.setAttribute('style', 'width: 98vw; height: 78vh; padding: 1vh 1vw; ');
                const videoSource = document.createElement('source');
                const videoSourceURL = URL.createObjectURL(file);
                videoSource.src = videoSourceURL;
                videoSource.type = this.media.mediaType;
                video.controls = true;
                video.appendChild(videoSource);
                mediaWindow.appendChild(video);
                mediaInfo.innerHTML = `<b>Playing File</b>: ${this.media.name}`;
                mediaWindow.appendChild(mediaInfo);
                // URL.revokeObjectURL(videoSourceURL);
            }
            else if (this.ms.application.includes(this.media.mediaType)) {
                const appView = document.createElement('iframe');
                const appViewSource = URL.createObjectURL(file);
                appView.setAttribute('style', 'width: 98vw; height: 78vh; padding: 1vh 1vw; ');
                appView.src = appViewSource;
                mediaWindow.appendChild(appView);
                mediaInfo.innerHTML = `<b>Viewing File</b>: ${this.media.name}`;
                mediaWindow.appendChild(mediaInfo);
            }
            else {
                this.notSupported = true;
                const downloadElement = document.getElementById('download');
                const sourceUrl = URL.createObjectURL(file);
                downloadElement.href = sourceUrl;
                downloadElement.onclick = (() => {
                    window.location.href = sourceUrl;
                    URL.revokeObjectURL(sourceUrl);
                });
            }
        }, (err) => {
            const elem = document.getElementById('error');
            const errElem = document.createElement('div');
            errElem.setAttribute('class', 'alert alert-danger');
            errElem.innerHTML = '<p><b>Error</b>: Some kind of error occured' +
                ' while downloading file.</p>';
        });
    }
    closeMedia() {
        this.mediaClose.emit(null);
    }
};
OpenMediaComponent.ctorParameters = () => [
    { type: _mime_types_service__WEBPACK_IMPORTED_MODULE_3__["MimeTypesService"] },
    { type: _file_system_service__WEBPACK_IMPORTED_MODULE_4__["FileSystemService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], OpenMediaComponent.prototype, "mediaClose", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], OpenMediaComponent.prototype, "media", void 0);
OpenMediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-open-media',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./open-media.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/open-media/open-media.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./open-media.component.scss */ "./src/app/open-media/open-media.component.scss")).default]
    })
], OpenMediaComponent);



/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#register {\n  position: absolute;\n  top: 15%;\n  left: 33.33vw;\n  background: white;\n  width: 33vw;\n  height: 75vh;\n  padding: 15px;\n  border: 1px solid #e6e6e6;\n  border-radius: 10px;\n  box-shadow: 1px 1px 5px 1px black;\n  overflow: auto;\n}\n\n.title {\n  text-align: center;\n}\n\n.hidden {\n  visibility: 0;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXHByb2plY3RzXFxvbmxpbmUtc3RvcmFnZVxcb25saW5lLXN0b3JhZ2UtY2xpZW50L3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZWdpc3RlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTUlO1xyXG4gIGxlZnQ6IDMzLjMzdnc7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgd2lkdGg6IDMzdnc7XHJcbiAgaGVpZ2h0OiA3NXZoO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzAsIDIzMCwgMjMwLCAxKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCBibGFjaztcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IDA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iLCIjcmVnaXN0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUlO1xuICBsZWZ0OiAzMy4zM3Z3O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDMzdnc7XG4gIGhlaWdodDogNzV2aDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IGJsYWNrO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api */ "../api/dist/api.esm.js");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! email-validator */ "./node_modules/email-validator/index.js");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_5__);






let RegisterComponent = class RegisterComponent {
    constructor(http) {
        this.http = http;
        this.model = new api__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.passwordRepeat = '';
        this.userExist = false;
        this.registerSuccess = false;
        this.registerFailed = false;
    }
    ngOnInit() {
        this.http
            .get('/pricingplans')
            .subscribe((pricingplans) => {
            this.pricingPlans = pricingplans;
        });
    }
    validateEmail(em) {
        return email_validator__WEBPACK_IMPORTED_MODULE_4__["validate"](em);
    }
    validatePasswords() {
        return this.passwordRepeat === this.model.password;
    }
    save() {
        this.registerFailed = false;
        this.registerSuccess = false;
        const auth = 'Basic ' + buffer__WEBPACK_IMPORTED_MODULE_5__["Buffer"].from(this.model.email).toString('base64');
        this.http.get('/user', {
            headers: {
                Authorization: auth
            }
        }).subscribe((responce) => {
            this.userExist = responce.email === this.model.email;
            if (this.userExist) {
                const offsetTop = document.getElementById('email').offsetTop;
                document.getElementById('register').scrollTop = offsetTop;
                return;
            }
        }, (err) => {
            this.http.post('/user', this.model)
                .subscribe((user) => {
                this.registerSuccess = true;
                const offsetTop = document.getElementById('success').offsetTop;
                document.getElementById('register').scrollTop = offsetTop;
            }, (err) => {
                this.registerFailed = true;
                const offsetTop = document.getElementById('failed').offsetTop;
                document.getElementById('register').scrollTop = offsetTop;
            });
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/to4-precision.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/to4-precision.pipe.ts ***!
  \***************************************/
/*! exports provided: To4PrecisionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "To4PrecisionPipe", function() { return To4PrecisionPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let To4PrecisionPipe = class To4PrecisionPipe {
    transform(value) {
        return Number(value.toPrecision(4));
    }
};
To4PrecisionPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'to4Precision'
    })
], To4PrecisionPipe);



/***/ }),

/***/ "./src/app/upload-file/upload-file.component.scss":
/*!********************************************************!*\
  !*** ./src/app/upload-file/upload-file.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".uploadFile {\n  position: absolute;\n  background: white;\n  top: 2vh;\n  left: 20vw;\n  width: 60vw;\n  height: 75vh;\n  padding: 1vh 1vw;\n  border: 0.1px solid gray;\n  border-radius: 10px;\n  z-index: 100;\n  overflow: auto;\n}\n\n.hidden {\n  visibility: hidden;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLWZpbGUvRDpcXHByb2plY3RzXFxvbmxpbmUtc3RvcmFnZVxcb25saW5lLXN0b3JhZ2UtY2xpZW50L3NyY1xcYXBwXFx1cGxvYWQtZmlsZVxcdXBsb2FkLWZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VwbG9hZC1maWxlL3VwbG9hZC1maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQtZmlsZS91cGxvYWQtZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWRGaWxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdG9wOiAydmg7XHJcbiAgbGVmdDogMjB2dztcclxuICB3aWR0aDogNjB2dztcclxuICBoZWlnaHQ6IDc1dmg7XHJcbiAgcGFkZGluZzogMXZoIDF2dztcclxuICBib3JkZXI6IDAuMXB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsIi51cGxvYWRGaWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdG9wOiAydmg7XG4gIGxlZnQ6IDIwdnc7XG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IDc1dmg7XG4gIHBhZGRpbmc6IDF2aCAxdnc7XG4gIGJvcmRlcjogMC4xcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgei1pbmRleDogMTAwO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/upload-file/upload-file.component.ts":
/*!******************************************************!*\
  !*** ./src/app/upload-file/upload-file.component.ts ***!
  \******************************************************/
/*! exports provided: UploadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function() { return UploadFileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _file_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../file-system.service */ "./src/app/file-system.service.ts");




let UploadFileComponent = class UploadFileComponent {
    constructor(fs) {
        this.fs = fs;
        this.faWindowClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faWindowClose"];
        this.faInfo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfo"];
        this.fileEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.errorMessage = undefined;
        this.fileName = '';
        this.selectedFiles = [];
        this.uploading = false;
        this.help = false;
        this.progress = '';
        this.progressCount = 1;
    }
    ngOnInit() {
    }
    addSelectedFile() {
        this.errorMessage = '';
        const fileElement = document.getElementById('file');
        const file = fileElement.files.item(0);
        if (this.fileName !== '') {
            file.newName = this.fileName;
            const parts = file.name.split('.');
            if (parts.length > 1) {
                file.newName += '.' + parts[parts.length - 1];
            }
        }
        else {
            file.newName = file.name;
        }
        // skip adding if file is already there
        let index = this.selectedFiles.findIndex((f) => {
            return f === file;
        });
        if (index > 0) {
            return;
        }
        index = this.existingNames.findIndex((n) => {
            return n === file.newName;
        });
        if (index > 0) {
            this.errorMessage = 'A file with same name exist in current directory.' +
                ' Try with new name.';
            return;
        }
        // try to rename file if a file with same name is already there
        let matches = 0;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.selectedFiles.length; i++) {
            const value = this.selectedFiles.find((f) => {
                return f.newName === file.newName;
            }, i);
            if (value) {
                matches++;
            }
        }
        if (matches) {
            const parts = file.newName.split('.');
            if (parts.length < 2) {
                file.newName += `(${matches})`;
            }
            else {
                parts[parts.length - 2] += `(${matches})`;
                file.newName = parts.join('.');
            }
        }
        this.selectedFiles.push(file);
    }
    closeModel() {
        this.fileEvent.emit(null);
    }
    removeFile(s) {
        const index = this.selectedFiles.findIndex((f) => {
            return f === s;
        });
        this.selectedFiles.splice(index, 1);
    }
    toggleHelp() {
        if (this.help) {
            this.help = false;
        }
        else {
            this.help = true;
        }
    }
    upload() {
        const mainElement = document.getElementById('main');
        mainElement.style.opacity = '0.1';
        this.uploading = true;
        const interval = setInterval(() => {
            this.progressCount = (this.progressCount + 1) % 6;
            this.progress = this.progress + '. ';
            if (this.progressCount >= 5) {
                this.progress = '';
            }
        }, 1000);
        const formData = new FormData();
        const names = [];
        for (const s of this.selectedFiles) {
            formData.append('file[]', s);
            formData.append('name[]', s.newName);
        }
        formData.append('location', this.location);
        this.fs.uploadFiles(formData).subscribe((res) => {
            clearInterval(interval);
            for (const r of res) {
                this.fileEvent.emit(r);
            }
            this.fileEvent.emit(null);
        }, (err) => {
            clearInterval(interval);
            this.errorMessage = 'Some kind of error occured while upload files';
            mainElement.style.opacity = '1';
            this.uploading = false;
            const offsetTop = document.getElementById('error').offsetTop;
            mainElement.scrollTop = offsetTop;
        });
    }
    validateFileName() {
        const matches = this.fileName.match(/[0-9a-zA-Z-_\.]*/g);
        return matches.length <= 2;
    }
};
UploadFileComponent.ctorParameters = () => [
    { type: _file_system_service__WEBPACK_IMPORTED_MODULE_3__["FileSystemService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UploadFileComponent.prototype, "fileEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UploadFileComponent.prototype, "location", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UploadFileComponent.prototype, "existingNames", void 0);
UploadFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-file',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-file.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-file/upload-file.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-file.component.scss */ "./src/app/upload-file/upload-file.component.scss")).default]
    })
], UploadFileComponent);



/***/ }),

/***/ "./src/app/user-entry/user-entry.component.scss":
/*!******************************************************!*\
  !*** ./src/app/user-entry/user-entry.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZW50cnkvdXNlci1lbnRyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user-entry/user-entry.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-entry/user-entry.component.ts ***!
  \****************************************************/
/*! exports provided: UserEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEntryComponent", function() { return UserEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserEntryComponent = class UserEntryComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-entry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-entry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-entry/user-entry.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-entry.component.scss */ "./src/app/user-entry/user-entry.component.scss")).default]
    })
], UserEntryComponent);



/***/ }),

/***/ "./src/app/user-panel/user-panel.component.scss":
/*!******************************************************!*\
  !*** ./src/app/user-panel/user-panel.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  max-width: 24px;\n  max-height: 24px;\n  margin: 1px;\n}\n\n.item {\n  display: grid;\n  grid-template-columns: 0.3fr 3fr 0.7fr;\n  padding: 3px;\n}\n\n.item:hover {\n  background: rgba(230, 230, 230, 0.5);\n}\n\n.item-header {\n  grid-column: 1;\n}\n\n.item-content {\n  grid-column: 2;\n}\n\n.item-name:focus {\n  background: white;\n  border: none;\n}\n\n.item-actions {\n  grid-column: 3;\n  display: flex;\n  flex-direction: row-reverse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wYW5lbC9EOlxccHJvamVjdHNcXG9ubGluZS1zdG9yYWdlXFxvbmxpbmUtc3RvcmFnZS1jbGllbnQvc3JjXFxhcHBcXHVzZXItcGFuZWxcXHVzZXItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXItcGFuZWwvdXNlci1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFuZWwvdXNlci1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LXdpZHRoOiAyNHB4O1xyXG4gIG1heC1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luOiAxcHg7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zZnIgM2ZyIDAuN2ZyO1xyXG4gIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLml0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC41KTtcclxufVxyXG5cclxuLml0ZW0taGVhZGVyIHtcclxuICBncmlkLWNvbHVtbjogMTtcclxufVxyXG5cclxuLml0ZW0tY29udGVudCB7XHJcbiAgZ3JpZC1jb2x1bW46IDI7XHJcbn1cclxuXHJcbi5pdGVtLW5hbWU6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLml0ZW0tYWN0aW9ucyB7XHJcbiAgZ3JpZC1jb2x1bW46IDM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuIiwiaW1nIHtcbiAgbWF4LXdpZHRoOiAyNHB4O1xuICBtYXgtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDFweDtcbn1cblxuLml0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuM2ZyIDNmciAwLjdmcjtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC41KTtcbn1cblxuLml0ZW0taGVhZGVyIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG59XG5cbi5pdGVtLWNvbnRlbnQge1xuICBncmlkLWNvbHVtbjogMjtcbn1cblxuLml0ZW0tbmFtZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5pdGVtLWFjdGlvbnMge1xuICBncmlkLWNvbHVtbjogMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user-panel/user-panel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-panel/user-panel.component.ts ***!
  \****************************************************/
/*! exports provided: UserPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return UserPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _extended_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../extended-directory */ "./src/app/extended-directory.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _hru__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hru */ "./src/app/hru.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ "./node_modules/path/path.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _file_system_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../file-system.service */ "./src/app/file-system.service.ts");
/* harmony import */ var _mime_types_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mime-types.service */ "./src/app/mime-types.service.ts");











let UserPanelComponent = class UserPanelComponent {
    constructor(cookieService, http, router, fs, ms) {
        this.cookieService = cookieService;
        this.http = http;
        this.router = router;
        this.fs = fs;
        this.ms = ms;
        this.faFolder = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faFolder"];
        this.faFile = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faFile"];
        this.faFolderPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faFolderPlus"];
        this.faFileUpload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faFileUpload"];
        this.faDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faDownload"];
        this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCopy"];
        this.faCut = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCut"];
        this.faPaste = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPaste"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTrash"];
        this.faPowerOff = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPowerOff"];
        this.faArrowCircleUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faArrowCircleUp"];
        this.faArrowCircleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faArrowCircleRight"];
        this.faArrowCircleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faArrowCircleLeft"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCheck"];
        this.faCheckCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCheckCircle"];
        this.hru = _hru__WEBPACK_IMPORTED_MODULE_6__["hru"];
        this.triggers = {
            createDirectory: false,
            uploadFile: false
        };
        this.root = new _extended_directory__WEBPACK_IMPORTED_MODULE_1__["ExtendedDirectory"]();
        this.currentDirectory = new _extended_directory__WEBPACK_IMPORTED_MODULE_1__["ExtendedDirectory"]();
        this.forwardStack = [];
        this.backwardStack = [];
        this.maxStorage = 0;
        this.usage = 0;
        this.usagePercent = 0;
        this.selected = [];
        this.clipboard = [];
        this.clipboardDirectory = null;
        this.keep = true;
        this.playingAudio = null;
        this.media = null;
        this.mediaOpened = false;
        this.message = null;
        this.errorMessage = null;
    }
    ngOnInit() {
        if (!this.cookieService.get('login')) {
            this.router.navigateByUrl('/');
        }
        this.maxStorage = Number(this.cookieService.get('maxStorage'));
        this.fs.getEntries().subscribe((res) => {
            this.root = res;
            this.setIds(this.root);
            this.currentDirectory = this.root;
            this.usage = Number(this.root.size);
            this.usagePercent = (this.usage * 100) / this.maxStorage;
        });
    }
    /************************************************************************** */
    // ENTRY LEVEL OPERATIONS
    copyEntries() {
        this.clipboard = this.selected;
        this.clipboardDirectory = this.currentDirectory;
        this.keep = true;
        this.selected = [];
        const checkboxs = Array.from(document.querySelectorAll('input[type=checkbox]'));
        for (const e of checkboxs) {
            e.removeAttribute('checked');
        }
    }
    cutEntries() {
        this.clipboard = this.selected;
        this.clipboardDirectory = this.currentDirectory;
        this.keep = false;
        this.selected = [];
        const checkboxs = Array.from(document.querySelectorAll('input[type=checkbox]'));
        for (const e of checkboxs) {
            e.removeAttribute('checked');
        }
    }
    deleteEntry(entry) {
        this.selected = [entry]; // array of one element
        this.deleteEntries();
    }
    deleteEntries() {
        let locations = '';
        for (const s of this.selected) {
            locations += s.location + ':' + s.mediaType + ';';
        }
        const locationsParts = locations.split(';');
        locations = locationsParts.slice(0, locationsParts.length - 1).join(';');
        this.fs.deleteEntries(locations).subscribe((res) => {
            for (const r of res) {
                if (r.mediaType === 'directory') {
                    const index = this.currentDirectory.contents.directories.findIndex(e => {
                        return e.location === r.location;
                    });
                    this.currentDirectory.contents.directories.splice(index, 1);
                }
                else {
                    const index = this.currentDirectory.contents.files.findIndex(e => {
                        return e.location === r.location;
                    });
                    this.currentDirectory.contents.files.splice(index, 1);
                }
            }
        });
        this.selected = [];
    }
    isCut(entry) {
        const index = this.clipboard.findIndex(c => {
            return c.name === entry.name;
        });
        return !this.keep && index >= 0;
    }
    isCopied(entry) {
        const index = this.clipboard.findIndex(c => {
            return c.name === entry.name;
        });
        return this.keep && index >= 0;
    }
    isSelected(entry) {
        const index = this.selected.findIndex(s => {
            return s.name === entry.name;
        });
        return index >= 0;
    }
    pasteEntries() {
        this.errorMessage = '';
        this.message = '';
        const copyObjects = [];
        for (const s of this.clipboard) {
            const from = JSON.parse(JSON.stringify(s)); // original
            const to = JSON.parse(JSON.stringify(this.currentDirectory)); // new
            to.name = from.name;
            to.mediaType = from.mediaType;
            to.size = from.size;
            to.extension = from.extension || undefined;
            if (from.mediaType !== 'directory') {
                to.location = to.location + path__WEBPACK_IMPORTED_MODULE_7__["sep"] + from.name + from.extension;
            }
            else {
                to.location = to.location + path__WEBPACK_IMPORTED_MODULE_7__["sep"] + from.name;
            }
            copyObjects.push({
                from,
                to
            });
        }
        this.fs
            .copy({
            pairs: copyObjects,
            keep: this.keep
        })
            .subscribe((res) => {
            for (const r of res) {
                if (r.mediaType === 'directory') {
                    this.currentDirectory.contents.directories.push(r);
                    const item = copyObjects.find((c) => {
                        return c.to.name === r.name;
                    });
                    const index = this.clipboardDirectory.contents.directories.findIndex((d) => {
                        return d.name === item.from.name;
                    });
                    this.clipboardDirectory.contents.directories.splice(index, 1);
                }
                else {
                    this.currentDirectory.contents.files.push(r);
                    const item = copyObjects.find((c) => {
                        return c.to.name === r.name;
                    });
                    const index = this.clipboardDirectory.contents.files.findIndex((d) => {
                        return d.name === item.from.name;
                    });
                    this.clipboardDirectory.contents.files.splice(index, 1);
                }
            }
            this.clipboard = [];
            this.keep = true;
        }, err => {
            if (this.keep) {
                this.errorMessage =
                    'Some kind of error occured while copying files!';
            }
            else {
                this.errorMessage =
                    'Some kind of error occured while moving files!';
            }
            this.clipboard = [];
            this.keep = true;
        });
    }
    select(entry, event) {
        if (event.target.id === 'selectAll') {
            if (event.target.checked) {
                this.selected = JSON.parse(JSON.stringify(this.currentDirectory.contents.directories));
                for (const f of this.currentDirectory.contents.files) {
                    this.selected.push(JSON.parse(JSON.stringify(f)));
                }
                const checkboxs = Array.from(document.querySelectorAll('input[type=checkbox]'));
                for (const e of checkboxs) {
                    e.setAttribute('checked', 'true');
                }
            }
            else {
                this.selected = [];
                const checkboxs = Array.from(document.querySelectorAll('input[type=checkbox]'));
                for (const e of checkboxs) {
                    e.removeAttribute('checked');
                }
            }
        }
        else {
            if (event.target.checked) {
                this.selected.push(entry);
            }
            else {
                const index = this.selected.findIndex(s => {
                    return s.name === entry.name;
                });
                this.selected.splice(index, 1);
            }
        }
    }
    renameEntry(entry, newName) {
        if (entry.name === newName) {
            return;
        }
        const sourceEntry = entry;
        const newEntry = JSON.parse(JSON.stringify(sourceEntry));
        newEntry.name = newName.match(/[\w\.-]*/g).join('');
        newEntry.location = newEntry.location.replace(sourceEntry.name, newEntry.name);
        this.fs
            .copy({
            pairs: [
                {
                    from: sourceEntry,
                    to: newEntry
                }
            ],
            keep: false
        })
            .subscribe((res) => {
            if (sourceEntry.mediaType !== 'directory') {
                const index = this.currentDirectory.contents.files.findIndex(e => {
                    return (e.location === sourceEntry.location);
                });
                this.currentDirectory.contents.files.splice(index, 1);
                this.currentDirectory.contents.files.push(res[0]);
            }
            else {
                const index = this.currentDirectory.contents.directories.findIndex(e => {
                    return (e.location === sourceEntry.location);
                });
                this.currentDirectory.contents.directories.splice(index, 1);
                this.currentDirectory.contents.directories.push(res[0]);
            }
        });
    }
    /************************************************************************** */
    // DIRECTORY LEVEL OPERATIONS
    createDirectory(directory) {
        if (!directory) {
            this.triggers.createDirectory = false;
        }
        else {
            this.currentDirectory.contents.directories.push(directory);
            this.usage += directory.size;
            this.triggers.createDirectory = false;
        }
    }
    openDirectory(directory) {
        const ref = this.currentDirectory;
        this.currentDirectory = directory;
        this.backwardStack.push(ref);
    }
    previousDirectory() {
        if (this.backwardStack.length) {
            const ref = this.currentDirectory;
            this.currentDirectory = this.backwardStack.pop();
            this.forwardStack.push(ref);
            this.selected = [];
        }
    }
    reopenDirectory() {
        if (this.forwardStack.length) {
            const ref = this.currentDirectory;
            this.currentDirectory = this.forwardStack.pop();
            this.backwardStack.push(ref);
            this.selected = [];
        }
    }
    /************************************************************************** */
    // FILE LEVEL OPERATIONS
    closeFile(file) {
        this.mediaOpened = false;
        this.media = null;
    }
    downloadFile(name, location) {
        this.fs.downloadFile(location).subscribe((res) => {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(res);
            link.download = name;
            link.click();
            URL.revokeObjectURL(link.href);
        }, err => {
            this.errorHandler('Downlaod File', err);
        });
    }
    openFile(file) {
        if (this.ms.audio.includes(file.mediaType)) {
            this.playingAudio = '';
            const target = document.querySelector(`#${file.id}.item-content`);
            target.innerHTML = '';
            // purge other files if there are
            const audios = Array.from(document.getElementsByTagName('audio'));
            const contents = Array.from(document.getElementsByClassName('item-content'));
            for (const a of audios) {
                for (const c of contents) {
                    if (c.contains(a)) {
                        c.innerHTML = '';
                    }
                }
            }
            // Audio Container
            const audioContainer = document.createElement('div');
            const buttonContainer = document.createElement('div');
            audioContainer.setAttribute('class', 'flex-grow');
            // Audio Element
            let audioSrc;
            const audioElement = document.createElement('audio');
            audioElement.setAttribute('type', file.mediaType);
            audioElement.controls = true;
            audioElement.loop = false;
            const end = (function (event) {
                event.stopPropagation();
                URL.revokeObjectURL(audioSrc);
                target.innerHTML = '';
                this.playingAudio = '';
            }).bind(this);
            audioElement.setAttribute('style', 'display: inline-block;');
            audioElement.addEventListener('complete', end);
            // Audio Close Element
            const audioCloseElement = document.createElement('button');
            audioCloseElement.innerText = 'x';
            audioCloseElement.addEventListener('click', end);
            audioCloseElement.setAttribute('style', 'display: inline-block;');
            audioCloseElement.setAttribute('class', 'btn btn-sm btn-secondary mx-1');
            this.fs.downloadFile(file.location)
                .subscribe((res) => {
                this.playingAudio = file.id;
                audioSrc = URL.createObjectURL(res);
                audioElement.src = audioSrc;
                audioContainer.appendChild(audioElement);
                buttonContainer.appendChild(audioCloseElement);
                target.appendChild(audioContainer);
                target.appendChild(buttonContainer);
                console.log(this.playingAudio);
            }, (err) => {
                return;
            });
        }
        else {
            this.media = file;
            this.mediaOpened = true;
        }
    }
    uploadFile(file) {
        if (file) {
            this.currentDirectory.contents.files.push(file);
            this.usage += file.size;
            this.usagePercent = (this.usage * 100) / this.maxStorage;
        }
        else {
            this.triggers.uploadFile = false;
        }
    }
    /************************************************************************** */
    // CLASS LEVEL OPERATIONS
    checkInputCharacter(event) {
        const str = String.fromCharCode(event.charCode);
        if (!str.match(/[a-zA-Z0-9\.-_]/)) {
            return false;
        }
    }
    getExistingNames() {
        const existingNames = [];
        for (const d of this.currentDirectory.contents.directories) {
            existingNames.push(d.name);
        }
        for (const f of this.currentDirectory.contents.files) {
            existingNames.push(f.name + f.extension);
        }
        return existingNames;
    }
    getUsageClass() {
        if (this.usage < 25) {
            return 'alert alert-sm alert-success';
        }
        else if (this.usage < 50) {
            return 'alert alert-sm alert-primary';
        }
        else if (this.usage < 75) {
            return 'alert alert-sm alert-warning';
        }
        else {
            return 'alert alert-sm alert-danger';
        }
    }
    logout() {
        this.cookieService.delete('login');
        this.cookieService.delete('firstName');
        this.cookieService.delete('secondName');
        this.cookieService.delete('maxStorage');
        this.router.navigateByUrl('/login');
    }
    setIds(directory) {
        const setFileIds = (files) => {
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < files.length; i++) {
                files[i] = files[i];
                files[i].id = 'File' + files[i].name.replace(/\./g, '');
            }
        };
        setFileIds(directory.contents.files);
        for (const d of directory.contents.directories) {
            this.setIds(d);
        }
    }
    stopEventPropagation(event) {
        event.stopPropagation();
    }
    trigger(name) {
        this.triggers.createDirectory = false;
        this.triggers.uploadFile = false;
        switch (name) {
            case 'createDirectory':
                this.triggers.createDirectory = true;
                break;
            case 'uploadFile':
                this.triggers.uploadFile = true;
                break;
            default:
                break;
        }
    }
    errorHandler(action, error) {
        switch (action) {
            case 'Create Directory':
                this.errorMessage =
                    'Some kind of error occurred while creating directory';
                break;
            case 'Open Directory':
                this.errorMessage =
                    'Some kind of error occurred while opening directory';
                break;
            default:
                break;
        }
    }
};
UserPanelComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _file_system_service__WEBPACK_IMPORTED_MODULE_9__["FileSystemService"] },
    { type: _mime_types_service__WEBPACK_IMPORTED_MODULE_10__["MimeTypesService"] }
];
UserPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-user-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/user-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-panel.component.scss */ "./src/app/user-panel/user-panel.component.scss")).default]
    })
], UserPanelComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\online-storage\online-storage-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map