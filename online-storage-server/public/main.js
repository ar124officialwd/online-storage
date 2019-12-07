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
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-directory/create-directory.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-directory/create-directory.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"createDirectory\">\n  <div class=\"d-flex flex-row-reverse p-1\">\n    <button class=\"btn btn-sm\">\n      <fa-icon [icon]=\"faWindowClose\"\n        (click)=\"cancelCreateDirectory()\"></fa-icon>\n    </button>\n  </div>\n  <div class=\"m-1\">\n    <h4>Create New Directories</h4>\n  </div>\n  <form (ngSubmit)=\"createDirectory()\" #form=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"directory\">Enter names for directories</label>\n      <input type=\"text\" name=\"directory\" class=\"form-control\" maxlength=\"128\"\n        [(ngModel)]=\"model\" #directory=\"ngModel\"\n        (keypress)=\"checkInputCharacter($event)\"\n        required>\n\n      <div *ngIf=\"!directory.dirty || !directory.touched\" class=\"text-muted\">\n          <p>Seperate multiple names by semi-colon ;</p>\n          <p>Allowed characters are 'a to z', 'A-Z', ., - and _</p>\n      </div>\n\n      <div *ngIf=\"directory.invalid && !que.length && (directory.dirty || directory.touched)\"\n          class=\"text-muted\">\n        <div *ngIf=\"directory.errors.required\">\n          Directory name is required\n        </div>\n      </div>\n    </div>\n\n    <input [disabled]=\"form.invalid && !que\" type=\"submit\" value=\"Create\"\n      class=\"btn btn-sm btn-success m-2 p-1\">\n  </form>\n  <div id=\"directoryQue\" class=\"m-1 d-flex flex-row\">\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"login\">\n  <h4 class=\"title\">Login</h4>\n\n  <div *ngIf=\"otherError\" class=\"text-muted\">\n    Some kind of error occured, please try again\n  </div>\n\n  <div *ngIf=\"loginFailed\" class=\"text-muted\">\n    Failed: Invalid email or password!\n  </div>\n\n  <form (ngSubmit)=\"createSession()\" #loginForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" name=\"email\" class=\"form-control\"\n        [(ngModel)]=\"model.email\" #email=\"ngModel\" required>\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n        <div *ngIf=\"email.errors.required\" class=\"text-muted\">\n          Email is required\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" name=\"password\" class=\"form-control\"\n        minlength=8 maxlength=64 [(ngModel)]=\"model.password\"\n        #password=\"ngModel\" required>\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n        <div *ngIf=\"password.errors.required\" class=\"text-muted\">\n          Password is required\n        </div>\n        <div *ngIf=\"password.errors.minlength\" class=\"text-muted\">\n          Password must be atleast 8 character long\n        </div>\n      </div>\n    </div>\n\n    <div>\n      <button type=\"submit\" class=\"btn btn-success\"\n        [disabled]=\"!loginForm.valid\">Login</button>\n    </div>\n  </form>\n  <div class=\"text-muted\">\n    Not yet registered? <a routerLink=\"/register\">Signup</a> now\n  </div>\n\n  <div *ngIf=\"loginSuccess\" class=\"text-muted\">\n    You have been logined successfully, Redirecting...!\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div id=\"register\">\n  <h4 class=\"title\">Signup</h4>\n\n  <div id=\"failed\" [class.hidden]=\"!registerFailed\" class=\"alert alert-danger\">\n    Error while registering!\n  </div>\n  <div id=\"success\" [class.hidden]=\"!registerSuccess\" class=\"alert alert-success\">\n    You've been registered successfully! <a routerLink=\"/login\">Login</a> now.\n  </div>\n\n  <form (ngSubmit)=\"save()\" #registerForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" type=\"text\" name=\"firstName\" class=\"form-control\"\n        maxlength=\"128\" required>\n      <div *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\" class=\"text-muted\">\n        <div *ngIf=\"firstName.errors.required\">\n          First Name is required.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"secondName\">Second Name</label>\n      <input type=\"text\" name=\"secondName\" class=\"form-control\" maxlength=\"128\" [(ngModel)]=\"model.secondName\"\n        #secondName=\"ngModel\">\n      <div *ngIf=\"secondName.invalid && (secondName.dirty || secondName.touched)\" class=\"text-muted\">\n        <div *ngIf=\"secondName.errors.required\">\n          Second Name is required.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" name=\"email\" class=\"form-control\" maxlength=\"256\" [(ngModel)]=\"model.email\" #email=\"ngModel\"\n        required>\n      <div *ngIf=\"(!validateEmail(email.value) && (email.dirty || email.touched)) || userExist\" class=\"text-muted\">\n        <div *ngIf=\"!validateEmail(email.value)\">\n          Email is invalid.\n        </div>\n        <div *ngIf=\"userExist\">\n          Email is already registered, try another one\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" name=\"password\" class=\"form-control\" minlength=8 maxlength=\"64\"\n        [(ngModel)]=\"model.password\" #password=\"ngModel\">\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"text-muted\">\n        <div *ngIf=\"password.errors.required\">\n          Password is required.\n        </div>\n        <div *ngIf=\"password.errors.minlength\">\n          Password must be atleast 8 character long\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"repeatPassword\">Repeat Password</label>\n      <input type=\"password\" name=\"repeatPassword\" class=\"form-control\" maxlength=\"64\" [(ngModel)]=\"passwordRepeat\"\n        #repeatPassword=\"ngModel\" required>\n      <div *ngIf=\"repeatPassword.invalid && (repeatPassword.dirty || repeatPassword.touched)\" class=\"text-muted\">\n        <div *ngIf=\"repeatPassword.errors.required\">\n          Reapeat Password is required\n        </div>\n        <div *ngIf=\"repeatPassword.errors.minlength\">\n          Password must be atleast 8 character long\n        </div>\n      </div>\n      <div *ngIf=\"(repeatPassword.dirty || repeatPassword.touched)\" class=\"text-muted\">\n        <div *ngIf=\"(password.value != repeatPassword.value)\">\n          Passwords do not match\n        </div>\n      </div>\n    </div>\n    <div>\n      <label for=\"pricingPlans\">Pricing Plans</label>\n      <select name=\"pricingPlan\" class=\"form-control\"\n        [(ngModel)]=\"model.pricingPlan\" #pricingPlan=\"ngModel\" required>\n        <option *ngFor=\"let p of pricingPlans\" [ngValue]=\"p\">{{p.title}}</option>\n      </select>\n      <div *ngIf=\"pricingPlan.invalid && (pricingPlan.dirty || pricingPlan.touched)\">\n        <div *ngIf=\"pricingPlan.errors.required\" class=\"text-muted\">\n          You must select a pricing plan\n        </div>\n      </div>\n    </div>\n    <div class=\"p-2\">\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!registerForm.valid\">Register</button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-file/upload-file.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-file/upload-file.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"uploadFile\">\n\n  <div *ngIf=\"uploading\" class=\"m-5\">\n    <h3 class=\"text-primary\">Uploading {{progress}}</h3>\n    <p>Please wait while files are being uploaded</p>\n  </div>\n\n  <div id=\"main\">\n    <div class=\"d-flex flex-row-reverse p-1\">\n      <button class=\"btn btn-sm btn-secondary ml-1\"\n        (click)=\"closeModel()\">\n        <fa-icon [icon]=\"faWindowClose\"></fa-icon>\n      </button>\n      <button class=\"btn btn-sm btn-secondary ml-1\"\n        (click)=\"toggleHelp()\">\n        <fa-icon [icon]=\"faInfo\"></fa-icon>\n      </button>\n    </div>\n\n    <div *ngIf=\"!help\">\n      <div id=\"error\" [class.hidden]=\"!errorMessage\" class=\"alert alert-danger\">\n        {{errorMessage}}\n      </div>\n\n      <h4>Upload a new file</h4>\n      <form (ngSumbit)=\"upload()\" #form=\"ngForm\" id=\"uploadForm\">\n        <div class=\"form-group\">\n          <label for=\"file\">File</label>\n          <input type=\"file\" name=\"file\" id=\"file\" class=\"form-control\"\n            [(ngModel)]=\"file\" (change)=\"fileName = ''\"\n            #fileModel=\"ngModel\" required>\n          <div *ngIf=\"fileModel.invalid && (fileModel.dirty && fileModel.touched)\"\n            class=\"text-muted\">\n            <div *ngIf=\"fileModel.errors.required\">\n                Please choose a file\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"targetName\">Target Name</label>\n          <input type=\"text\" name=\"targetName\" class=\"form-control\"\n            [(ngModel)]=\"fileName\" #filename=\"ngModel\">\n          <div *ngIf=\"!(filename.dirty || filename.touched)\">\n            Please enter a name to save as a new name\n          </div>\n          <div *ngIf=\"!validateFileName() && (filename.dirty || filename.touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"!validateFileName()\">\n              File name is not valid, try another\n            </div>\n          </div>\n        </div>\n        <button type=\"button\" class=\"btn btn-sm btn-primary ml-1\"\n          (click)=\"addSelectedFile()\" [disabled]=\"!fileModel.valid\">\n          Add File</button>\n        <input (click)=\"upload()\" type=\"submit\" class=\"btn btn-sm btn-success ml-1\"\n          [disabled]=\"!form.valid || (fileName && !validateFileName())\"\n          value=\"Upload Selected\">\n      </form>\n      <h4>Selected Files: </h4>\n      <div *ngIf=\"selectedFiles.length\"\n        class=\"alert alert-primary m-1 p-1 d-flex flex-row flex-wrap\">\n        <div *ngFor=\"let s of selectedFiles\"\n          class=\"alert alert-sm alert-light m-1\">\n          <span>{{s.newName}}</span>\n          <button class=\"btn btn-sm btn-outline-secondary m-1\"\n            (click)=\"removeFile(s)\">X</button>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"help\" class=\"p-2\">\n      <ul>\n        <li>Upload file window let you upload one or more files.</li>\n        <li>To upload a file, use 'Select File' input box.</li>\n        <li>Now type an appropriate name for file and click 'Add file'</li>\n        <li>To add another file, repeat above two.</li>\n        <li>Selected files are always there at bottom, so you may remove one\n          or more of them, if you wish to cancel them.\n        </li>\n        <li>Click 'Upload Selected' to upload selected files</li>\n      </ul>\n      <p class=\"alert-warning p-2\">Click on info button again to close help.</p>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-entry/user-entry.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-entry/user-entry.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-auto\">\n  <ngb-tabset>\n    <ngb-tab title=\"Login\">\n      <ng-template ngbTabContent>\n        <app-login></app-login>\n        <div class=\"alert alert-primary m-1\">\n          If you've not yet register, head over to Register tab and register.\n        </div>\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab title=\"Register\">\n      <ng-template ngbTabContent>\n        <app-register></app-register>\n        <div class=\"alert alert-primary m-1\">\n          If you've already register, head over to Login tab and login.\n        </div>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/user-panel.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/user-panel.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"triggers.createDirectory\">\n  <app-create-directory (directory)=\"createDirectory($event)\"\n    [currentDirectory]=\"currentDirectory\"></app-create-directory>\n</div>\n<div *ngIf=\"triggers.uploadFile\">\n  <app-upload-file (fileEvent)=\"uploadFile($event)\"\n    [location]=\"currentDirectory.location\" [existingNames]=\"getExistingNames()\">\n  </app-upload-file>\n</div>\n\n<!-- File Manager Header -->\n<div class=\"item alert alert-sm alert-success\">\n  <div class=\"item-header\">\n    <input class=\"btn btn-sm btn-light m-1\" title=\"Select All\"\n      type=\"checkbox\" id=\"selectAll\" (change)=\"select(null, $event)\">\n  </div>\n  <div class=\"item-content\">\n    <span class=\"text-bold\">Current Location: </span> {{ currentDirectory.location | minifyPath:40 }}\n    <span class=\"ml-2 text-bold\">Usage: </span> {{ usagePercent | to4Precision }}%\n    <ngb-progressbar [value]=\"usagePercent\"\n      class=\"getUsageClass()\"></ngb-progressbar>\n  </div>\n  <div class=\"item-actions\">\n    <div class=\"d-flex flex-row\">\n      <button class=\"btn btn-sm btn-light m-1\" title=\"Go Back\"\n        [disabled]=\"!backwardStack.length\"\n        (click)=\"previousDirectory()\">\n        <fa-icon [icon]=\"faArrowCircleLeft\"></fa-icon>\n      </button>\n      <button class=\"btn btn-sm btn-light m-1\" title=\"Go Forward\"\n        [disabled]=\"!forwardStack.length\"\n        (click)=\"reopenDirectory()\">\n        <fa-icon [icon]=\"faArrowCircleRight\"></fa-icon>\n      </button>\n      <button class=\"btn btn-sm btn-light m-1\"\n        (click)=\"trigger('createDirectory')\" title=\"Create Directory\">\n        <fa-icon [icon]=\"faFolderPlus\"></fa-icon>\n      </button>\n      <button class=\"btn btn-sm btn-light m-1\" title=\"Upload File\"\n        (click)=\"trigger('uploadFile')\">\n        <fa-icon [icon]=\"faFileUpload\"></fa-icon>\n      </button>\n      <button [class]=\"!clipboard.length || !keep ? 'btn btn-sm btn-light m-1' :\n        'btn btn-sm btn-secondary m-1'\"\n        title=\"Copy\" (click)=\"copyEntries()\" [disabled]=\"!selected.length\">\n        <fa-icon [icon]=\"faCopy\"></fa-icon>\n      </button>\n      <button [class]=\"!clipboard.length || keep ? 'btn btn-sm btn-light m-1' :\n        'btn btn-sm btn-secondary m-1'\"\n        title=\"Cut\" (click)=\"cutEntries()\" [disabled]=\"!selected.length\">\n        <fa-icon [icon]=\"faCut\"></fa-icon>\n      </button>\n      <button class=\"btn btn-sm btn-light m-1\" title=\"Paste\"\n        (click)=\"pasteEntries()\" [disabled]=\"!clipboard.length ||\n          (!this.backwardStack.length && !this.forwardStack.length)\">\n        <fa-icon [icon]=\"faPaste\"></fa-icon>\n      </button>\n      <button class=\"btn btn-sm btn-light m-1\" title=\"Delete\"\n        (click)=\"deleteEntries()\" [disabled]=\"!selected.length\">\n        <fa-icon [icon]=\"faTrash\"></fa-icon>\n      </button>\n      <button class=\"btn btn-sm btn-light m-1\" title=\"Logout\"\n        (click)=\"logout()\">\n        <fa-icon [icon]=\"faPowerOff\"></fa-icon>\n      </button>\n    </div>\n  </div>\n</div>\n\n<!-- No files or directories are there -->\n<div *ngIf=\"!currentDirectory.contents.files.length &&\n  !currentDirectory.contents.directories.length\" class=\"p-5\">\n  <h3 class=\"text-muted\">\n    There is nothing here\n  </h3>\n</div>\n\n<!-- There is/are one/some files/directories -->\n<div *ngIf=\"currentDirectory.contents.files.length ||\n  currentDirectory.contents.directories.length\">\n  <div *ngIf=\"message\" class=\"alert alert-sm alert-primary\">\n    {{message}}\n  </div>\n  <div *ngIf=\"errorMessage\" class=\"alert alert-sm alert-danger\">\n    {{errorMessage}}\n  </div>\n\n  <div *ngFor=\"let e of currentDirectory.contents.directories\" class=\"item\"\n    (click)=\"openDirectory(e)\">\n    <div class=\"item-header\">\n      <input type=\"checkbox\" (change)=\"select(e, $event)\"\n        (click)=\"$event.stopPropagation();\">\n      <a (click)=\"openDirectory(e)\">\n        <img src=\"/images/folder.png\">\n      </a>\n    </div>\n    <div class=\"item-content\">\n      <span class=\"item-name\" contenteditable=\"true\" spellcheck=\"false\"\n        (click)=\"$event.stopPropagation();\"\n        (blur)=\"renameEntry(e, $event.target.innerText)\"\n        (keypress)=\"checkInputCharacter($event)\">{{e.name}}</span>\n    </div>\n    <div class=\"item-actions\">\n      <div>\n        <button (click)=\"deleteEntry(e)\"\n          class=\"btn btn-sm btn-light m-1\">\n          <fa-icon [icon]=\"faTrash\"></fa-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div *ngFor=\"let e of currentDirectory.contents.files\" class=\"item\">\n    <div class=\"item-header\">\n      <input type=\"checkbox\" (change)=\"select(e, $event)\">\n      <a href=\"#\">\n        <img src=\"/images/file.png\">\n      </a>\n    </div>\n    <div class=\"item-content\">\n      <span class=\"item-name\" contenteditable=\"true\" spellcheck=\"false\"\n        (blur)=\"renameEntry(e, $event.target.innerText)\">{{e.name}}</span>\n      <span>{{e.extension}}</span>\n    </div>\n    <div class=\"item-actions\">\n      <div>\n        <button (click)=\"deleteEntry(e)\" class=\"btn btn-sm btn-light mr-1\">\n          <fa-icon [icon]=\"faTrash\"></fa-icon>\n        </button>\n      </div>\n      <div>\n        <button (click)=\"downloadFile(e.name, e.location)\"\n          class=\"btn btn-sm btn-light mr-1\">\n          <fa-icon [icon]=\"faDownload\"></fa-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n");

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
            _minify_path_pipe__WEBPACK_IMPORTED_MODULE_17__["MinifyPathPipe"]
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
/* harmony default export */ __webpack_exports__["default"] = (".createDirectory {\n  position: absolute;\n  background: white;\n  top: 2vh;\n  left: 25vw;\n  width: 50vw;\n  height: 75vh;\n  padding: 1vh 1vw;\n  border: 0.1px solid grey;\n  border-radius: 10px;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kaXNrL3Byb2plY3RzL29ubGluZS1zdG9yYWdlL29ubGluZS1zdG9yYWdlLWNsaWVudC9zcmMvYXBwL2NyZWF0ZS1kaXJlY3RvcnkvY3JlYXRlLWRpcmVjdG9yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY3JlYXRlLWRpcmVjdG9yeS9jcmVhdGUtZGlyZWN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtZGlyZWN0b3J5L2NyZWF0ZS1kaXJlY3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlRGlyZWN0b3J5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdG9wOiAydmg7XG4gIGxlZnQ6IDI1dnc7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDc1dmg7XG4gIHBhZGRpbmc6IDF2aCAxdnc7XG4gIGJvcmRlcjogMC4xcHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgei1pbmRleDogMTAwO1xufVxuIiwiLmNyZWF0ZURpcmVjdG9yeSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRvcDogMnZoO1xuICBsZWZ0OiAyNXZ3O1xuICB3aWR0aDogNTB2dztcbiAgaGVpZ2h0OiA3NXZoO1xuICBwYWRkaW5nOiAxdmggMXZ3O1xuICBib3JkZXI6IDAuMXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHotaW5kZXg6IDEwMDtcbn0iXX0= */");

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





let CreateDirectoryComponent = class CreateDirectoryComponent {
    constructor(http, fs) {
        this.http = http;
        this.fs = fs;
        this.faWindowClose = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faWindowClose"];
        this.model = '';
        this.directory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.que = [];
    }
    ngOnInit() {
    }
    validateDirectory() {
        const matches = this.model.match(/[\w\.-]*/g);
        return matches.length === 2;
    }
    checkInputCharacter(event) {
        const str = String.fromCharCode(event.charCode);
        if (str.match(/;/)) {
            this.que.push(this.model);
            const buttonElement = document.createElement('button');
            buttonElement.setAttribute('class', 'btn btn-sm btn-light ml-1');
            buttonElement.innerText = 'x';
            buttonElement.onclick = (function (ev) {
                const target = ev.target;
                this.removeDirectory(target.innerText);
                const element = document.getElementById(target.innerText);
                document.getElementById('directoryQue').removeChild(element);
            }).bind(this);
            const divElement = document.createElement('div');
            divElement.setAttribute('class', 'alert alert-sm alert-secondary mr-1');
            divElement.setAttribute('id', this.model);
            divElement.innerText = this.model;
            divElement.appendChild(buttonElement);
            document.getElementById('directoryQue').appendChild(divElement);
            this.model = '';
            return false;
        }
        else if (!str.match(/[\.a-zA-Z0-9_-]/)) {
            return false;
        }
    }
    cancelCreateDirectory() {
        this.directory.emit(null);
    }
    createDirectory() {
        if (this.model !== '') {
            this.que.push(this.model);
        }
        const directories = []; // directory objects holding name and location
        const locations = []; // locations to be created
        for (const q of this.que) {
            const object = {
                location: this.currentDirectory.location + '/' + q,
                name: q
            };
            directories.push(object);
            locations.push(object.location);
        }
        this.fs.createDirectory({
            locations
        })
            .subscribe((responceLocations) => {
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < responceLocations.length; i++) {
                const directory = JSON.parse(JSON.stringify(this.currentDirectory));
                directory.location = responceLocations[i];
                directory.name = directories.find((d) => {
                    return d.location = responceLocations[i];
                }).name;
                this.directory.emit(directory);
            }
        }, (err) => {
            this.errorMessage = 'Some kind of error occured while creating directory.';
        });
    }
    removeDirectory(name) {
        const index = this.que.findIndex((e) => {
            return e === name;
        });
        this.que.splice(index, 1);
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
CreateDirectoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-directory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-directory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-directory/create-directory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-directory.component.scss */ "./src/app/create-directory/create-directory.component.scss")).default]
    })
], CreateDirectoryComponent);



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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






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
    deleteEntries(entries) {
        const responces = [];
        // tslint:disable-next-line: deprecation
        return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create((observer) => {
            for (const e of entries) {
                this.http.delete('/fileSystem', {
                    headers: {
                        Authorization: this.auth,
                        Location: e.location,
                    }
                }).subscribe((r) => {
                    if (r === e.location) {
                        observer.next(e);
                    }
                });
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
/* harmony default export */ __webpack_exports__["default"] = ("#login {\n  position: absolute;\n  top: 25%;\n  left: 33.33vw;\n  background: white;\n  width: 33vw;\n  height: 50vh;\n  padding: 10px;\n  border: 1px solid #e6e6e6;\n  border-radius: 10px;\n  box-shadow: 1px 1px 5px 1px black;\n  overflow: auto;\n}\n\n.title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kaXNrL3Byb2plY3RzL29ubGluZS1zdG9yYWdlL29ubGluZS1zdG9yYWdlLWNsaWVudC9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNSU7XG4gIGxlZnQ6IDMzLjMzdnc7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMzN2dztcbiAgaGVpZ2h0OiA1MHZoO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzMCwgMjMwLCAyMzAsIDEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggYmxhY2s7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIjbG9naW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiAzMy4zM3Z3O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDMzdnc7XG4gIGhlaWdodDogNTB2aDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IGJsYWNrO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

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

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#register {\n  position: absolute;\n  top: 15%;\n  left: 33.33vw;\n  background: white;\n  width: 33vw;\n  height: 75vh;\n  padding: 15px;\n  border: 1px solid #e6e6e6;\n  border-radius: 10px;\n  box-shadow: 1px 1px 5px 1px black;\n  overflow: auto;\n}\n\n.title {\n  text-align: center;\n}\n\n.hidden {\n  visibility: 0;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kaXNrL3Byb2plY3RzL29ubGluZS1zdG9yYWdlL29ubGluZS1zdG9yYWdlLWNsaWVudC9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVnaXN0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUlO1xuICBsZWZ0OiAzMy4zM3Z3O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDMzdnc7XG4gIGhlaWdodDogNzV2aDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzAsIDIzMCwgMjMwLCAxKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IGJsYWNrO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiIsIiNyZWdpc3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNSU7XG4gIGxlZnQ6IDMzLjMzdnc7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMzN2dztcbiAgaGVpZ2h0OiA3NXZoO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggYmxhY2s7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

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
        const auth = 'Basic ' + buffer__WEBPACK_IMPORTED_MODULE_5__["Buffer"].from(this.model.email).toString('base64');
        this.http.get('/user', {
            headers: {
                Authorization: auth
            }
        }).subscribe((responce) => {
            this.userExist = (responce.email === this.model.email);
        });
        if (this.userExist) {
            return;
        }
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
/* harmony default export */ __webpack_exports__["default"] = (".uploadFile {\n  position: absolute;\n  background: white;\n  top: 2vh;\n  left: 20vw;\n  width: 60vw;\n  height: 75vh;\n  padding: 1vh 1vw;\n  border: 0.1px solid gray;\n  border-radius: 10px;\n  z-index: 100;\n  overflow: auto;\n}\n\n.hidden {\n  visibility: hidden;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kaXNrL3Byb2plY3RzL29ubGluZS1zdG9yYWdlL29ubGluZS1zdG9yYWdlLWNsaWVudC9zcmMvYXBwL3VwbG9hZC1maWxlL3VwbG9hZC1maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91cGxvYWQtZmlsZS91cGxvYWQtZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkRmlsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRvcDogMnZoO1xuICBsZWZ0OiAyMHZ3O1xuICB3aWR0aDogNjB2dztcbiAgaGVpZ2h0OiA3NXZoO1xuICBwYWRkaW5nOiAxdmggMXZ3O1xuICBib3JkZXI6IDAuMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iLCIudXBsb2FkRmlsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRvcDogMnZoO1xuICBsZWZ0OiAyMHZ3O1xuICB3aWR0aDogNjB2dztcbiAgaGVpZ2h0OiA3NXZoO1xuICBwYWRkaW5nOiAxdmggMXZ3O1xuICBib3JkZXI6IDAuMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

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
        console.log(this.existingNames);
        this.errorMessage = '';
        const fileElement = document.getElementById('file');
        const file = fileElement.files.item(0);
        file.newName = this.fileName || file.name;
        const parts = file.name.split('.');
        if (parts.length > 1) {
            file.newName += '.' + parts[parts.length - 1];
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
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  max-width: 24px;\n  max-height: 24px;\n  margin: 1px;\n}\n\n.item {\n  display: grid;\n  grid-template-columns: 0.3fr 3fr 0.7fr;\n  padding: 3px;\n}\n\n.item:hover {\n  background: rgba(230, 230, 230, 0.5);\n}\n\n.item-header {\n  grid-column: 1;\n}\n\n.item-content {\n  grid-column: 2;\n}\n\n.item-name:focus {\n  background: white;\n  border: none;\n}\n\n.item-actions {\n  grid-column: 3;\n  display: flex;\n  flex-direction: row-reverse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kaXNrL3Byb2plY3RzL29ubGluZS1zdG9yYWdlL29ubGluZS1zdG9yYWdlLWNsaWVudC9zcmMvYXBwL3VzZXItcGFuZWwvdXNlci1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci1wYW5lbC91c2VyLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdXNlci1wYW5lbC91c2VyLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgbWF4LXdpZHRoOiAyNHB4O1xuICBtYXgtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDFweDtcbn1cblxuLml0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuM2ZyIDNmciAwLjdmcjtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC41KTtcbn1cblxuLml0ZW0taGVhZGVyIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG59XG5cbi5pdGVtLWNvbnRlbnQge1xuICBncmlkLWNvbHVtbjogMjtcbn1cblxuLml0ZW0tbmFtZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5pdGVtLWFjdGlvbnMge1xuICBncmlkLWNvbHVtbjogMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuIiwiaW1nIHtcbiAgbWF4LXdpZHRoOiAyNHB4O1xuICBtYXgtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDFweDtcbn1cblxuLml0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuM2ZyIDNmciAwLjdmcjtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC41KTtcbn1cblxuLml0ZW0taGVhZGVyIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG59XG5cbi5pdGVtLWNvbnRlbnQge1xuICBncmlkLWNvbHVtbjogMjtcbn1cblxuLml0ZW0tbmFtZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5pdGVtLWFjdGlvbnMge1xuICBncmlkLWNvbHVtbjogMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! api */ "../api/dist/api.esm.js");
/* harmony import */ var _hru__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hru */ "./src/app/hru.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _file_system_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../file-system.service */ "./src/app/file-system.service.ts");









let UserPanelComponent = class UserPanelComponent {
    constructor(cookieService, http, router, fs) {
        this.cookieService = cookieService;
        this.http = http;
        this.router = router;
        this.fs = fs;
        this.faFolder = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFolder"];
        this.faFile = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFile"];
        this.faFolderPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFolderPlus"];
        this.faFileUpload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFileUpload"];
        this.faDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faDownload"];
        this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCopy"];
        this.faCut = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCut"];
        this.faPaste = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPaste"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTrash"];
        this.faPowerOff = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPowerOff"];
        this.faArrowCircleUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowCircleUp"];
        this.faArrowCircleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowCircleRight"];
        this.faArrowCircleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowCircleLeft"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCheck"];
        this.faCheckCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCheckCircle"];
        this.hru = _hru__WEBPACK_IMPORTED_MODULE_6__["hru"];
        this.triggers = {
            createDirectory: false,
            uploadFile: false
        };
        this.root = new api__WEBPACK_IMPORTED_MODULE_5__["Directory"]();
        this.currentDirectory = new api__WEBPACK_IMPORTED_MODULE_5__["Directory"]();
        this.forwardStack = [];
        this.backwardStack = [];
        this.maxStorage = 0;
        this.usage = 0;
        this.usagePercent = 0;
        this.selected = [];
        this.clipboard = [];
        this.keep = true;
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
            this.currentDirectory = this.root;
            this.usage = Number(this.root.size);
            this.usagePercent = (this.usage * 100) / this.maxStorage;
        });
    }
    /************************************************************************** */
    // ENTRY LEVEL OPERATIONS
    copyEntries() {
        this.clipboard = this.selected;
        this.keep = true;
    }
    cutEntries() {
        this.clipboard = this.selected;
        this.keep = false;
    }
    deleteEntry(entry) {
        this.clipboard = [entry];
        this.deleteEntries();
    }
    deleteEntries() {
        this.fs.deleteEntries(this.selected).subscribe((res) => {
            if (res.mediaType === 'directory') {
                const index = this.currentDirectory.contents.directories.findIndex(e => {
                    return e.location === res.location;
                });
                this.currentDirectory.contents.directories.splice(index, 1);
            }
            else {
                const index = this.currentDirectory.contents.files.findIndex(e => {
                    return e.location === res.location;
                });
                this.currentDirectory.contents.files.splice(index, 1);
            }
        });
        this.selected = [];
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
            to.location = to.location + '/' + from.name + from.extension || '';
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
                }
                else {
                    this.currentDirectory.contents.files.push(r);
                }
            }
        }, err => {
            if (this.keep) {
                this.errorMessage =
                    'Some kind of error occured while copying files!';
            }
            else {
                this.errorMessage =
                    'Some kind of error occured while moving files!';
            }
        });
    }
    renameEntry(entry, newName) {
        if (entry.name === newName) {
            return;
        }
        const targetEntry = entry;
        const newEntry = JSON.parse(JSON.stringify(targetEntry));
        newEntry.name = newName.match(/[\w\.-]*/g).join('');
        newEntry.location = newEntry.location.replace(targetEntry.name, newEntry.name);
        this.fs
            .copy({
            pairs: [
                {
                    from: targetEntry,
                    to: newEntry
                }
            ],
            keep: false
        })
            .subscribe((res) => {
            if (entry.mediaType !== 'directory') {
                const index = this.currentDirectory.contents.files.findIndex(e => {
                    return (e.location = targetEntry.location);
                });
                this.currentDirectory.contents.files.splice(index, 1);
                this.currentDirectory.contents.files.push(res[0]);
            }
            else {
                const index = this.currentDirectory.contents.directories.findIndex(e => {
                    return (e.location = targetEntry.location);
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
                const index = this.selected.findIndex(i => {
                    return i === entry;
                });
                this.selected.splice(index, 1);
            }
        }
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
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _file_system_service__WEBPACK_IMPORTED_MODULE_8__["FileSystemService"] }
];
UserPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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

module.exports = __webpack_require__(/*! /disk/projects/online-storage/online-storage-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map