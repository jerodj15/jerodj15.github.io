(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _windows31_windows31_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./windows31/windows31.component */ "./src/app/windows31/windows31.component.ts");



class AppComponent {
    constructor() {
        this.title = 'Jerod\'s Portfolio 3.1';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "portfolioPage"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-windows31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_windows31_windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"]], styles: [".portfolioPage[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydGZvbGlvUGFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _windows31_windows31_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./windows31/windows31.component */ "./src/app/windows31/windows31.component.ts");
/* harmony import */ var _windows31_program_manager_program_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./windows31/program-manager/program-manager.component */ "./src/app/windows31/program-manager/program-manager.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/__ivy_ngcc__/fesm2015/angular-resizable-element.js");
/* harmony import */ var _windows31_program_manager_main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./windows31/program-manager/main/main.component */ "./src/app/windows31/program-manager/main/main.component.ts");
/* harmony import */ var _windows31_program_manager_main_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./windows31/program-manager/main/introduction/introduction.component */ "./src/app/windows31/program-manager/main/introduction/introduction.component.ts");
/* harmony import */ var _windows31_program_manager_main_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./windows31/program-manager/main/about-page/about-page.component */ "./src/app/windows31/program-manager/main/about-page/about-page.component.ts");
/* harmony import */ var _windows31_program_manager_resume_resume_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./windows31/program-manager/resume/resume.component */ "./src/app/windows31/program-manager/resume/resume.component.ts");
/* harmony import */ var _windows31_program_manager_resume_operating_systems_operating_systems_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./windows31/program-manager/resume/operating-systems/operating-systems.component */ "./src/app/windows31/program-manager/resume/operating-systems/operating-systems.component.ts");
/* harmony import */ var _windows31_program_manager_resume_web_development_web_development_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./windows31/program-manager/resume/web-development/web-development.component */ "./src/app/windows31/program-manager/resume/web-development/web-development.component.ts");
/* harmony import */ var _windows31_program_manager_resume_object_oriented_object_oriented_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./windows31/program-manager/resume/object-oriented/object-oriented.component */ "./src/app/windows31/program-manager/resume/object-oriented/object-oriented.component.ts");
/* harmony import */ var _windows31_program_manager_resume_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./windows31/program-manager/resume/graphics/graphics.component */ "./src/app/windows31/program-manager/resume/graphics/graphics.component.ts");
/* harmony import */ var _windows31_program_manager_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./windows31/program-manager/projects/projects.component */ "./src/app/windows31/program-manager/projects/projects.component.ts");
/* harmony import */ var _windows31_program_manager_resume_education_education_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./windows31/program-manager/resume/education/education.component */ "./src/app/windows31/program-manager/resume/education/education.component.ts");
/* harmony import */ var _windows31_program_manager_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./windows31/program-manager/contact/contact.component */ "./src/app/windows31/program-manager/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _windows31_program_manager_projects_project_display_project_display_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./windows31/program-manager/projects/project-display/project-display.component */ "./src/app/windows31/program-manager/projects/project-display/project-display.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_windows31_windows31_component__WEBPACK_IMPORTED_MODULE_3__["Windows31Component"], _windows31_program_manager_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"], _windows31_program_manager_projects_project_display_project_display_component__WEBPACK_IMPORTED_MODULE_19__["ProjectDisplayComponent"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
            angular_resizable_element__WEBPACK_IMPORTED_MODULE_6__["ResizableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _windows31_windows31_component__WEBPACK_IMPORTED_MODULE_3__["Windows31Component"],
        _windows31_program_manager_program_manager_component__WEBPACK_IMPORTED_MODULE_4__["ProgramManagerComponent"],
        _windows31_program_manager_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
        _windows31_program_manager_main_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_8__["IntroductionComponent"],
        _windows31_program_manager_main_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__["AboutPageComponent"],
        _windows31_program_manager_resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["ResumeComponent"],
        _windows31_program_manager_resume_operating_systems_operating_systems_component__WEBPACK_IMPORTED_MODULE_11__["OperatingSystemsComponent"],
        _windows31_program_manager_resume_web_development_web_development_component__WEBPACK_IMPORTED_MODULE_12__["WebDevelopmentComponent"],
        _windows31_program_manager_resume_object_oriented_object_oriented_component__WEBPACK_IMPORTED_MODULE_13__["ObjectOrientedComponent"],
        _windows31_program_manager_resume_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_14__["GraphicsComponent"],
        _windows31_program_manager_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"],
        _windows31_program_manager_resume_education_education_component__WEBPACK_IMPORTED_MODULE_16__["EducationComponent"],
        _windows31_program_manager_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
        _windows31_program_manager_projects_project_display_project_display_component__WEBPACK_IMPORTED_MODULE_19__["ProjectDisplayComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
        angular_resizable_element__WEBPACK_IMPORTED_MODULE_6__["ResizableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _windows31_windows31_component__WEBPACK_IMPORTED_MODULE_3__["Windows31Component"],
                    _windows31_program_manager_program_manager_component__WEBPACK_IMPORTED_MODULE_4__["ProgramManagerComponent"],
                    _windows31_program_manager_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                    _windows31_program_manager_main_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_8__["IntroductionComponent"],
                    _windows31_program_manager_main_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__["AboutPageComponent"],
                    _windows31_program_manager_resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["ResumeComponent"],
                    _windows31_program_manager_resume_operating_systems_operating_systems_component__WEBPACK_IMPORTED_MODULE_11__["OperatingSystemsComponent"],
                    _windows31_program_manager_resume_web_development_web_development_component__WEBPACK_IMPORTED_MODULE_12__["WebDevelopmentComponent"],
                    _windows31_program_manager_resume_object_oriented_object_oriented_component__WEBPACK_IMPORTED_MODULE_13__["ObjectOrientedComponent"],
                    _windows31_program_manager_resume_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_14__["GraphicsComponent"],
                    _windows31_program_manager_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"],
                    _windows31_program_manager_resume_education_education_component__WEBPACK_IMPORTED_MODULE_16__["EducationComponent"],
                    _windows31_program_manager_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
                    _windows31_program_manager_projects_project_display_project_display_component__WEBPACK_IMPORTED_MODULE_19__["ProjectDisplayComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                    angular_resizable_element__WEBPACK_IMPORTED_MODULE_6__["ResizableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]
                ],
                providers: [_windows31_windows31_component__WEBPACK_IMPORTED_MODULE_3__["Windows31Component"], _windows31_program_manager_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"], _windows31_program_manager_projects_project_display_project_display_component__WEBPACK_IMPORTED_MODULE_19__["ProjectDisplayComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_windows31_windows31_component__WEBPACK_IMPORTED_MODULE_3__["Windows31Component"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
    _windows31_windows31_component__WEBPACK_IMPORTED_MODULE_3__["Windows31Component"],
    _windows31_program_manager_program_manager_component__WEBPACK_IMPORTED_MODULE_4__["ProgramManagerComponent"],
    _windows31_program_manager_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
    _windows31_program_manager_main_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_8__["IntroductionComponent"],
    _windows31_program_manager_main_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__["AboutPageComponent"],
    _windows31_program_manager_resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["ResumeComponent"],
    _windows31_program_manager_resume_operating_systems_operating_systems_component__WEBPACK_IMPORTED_MODULE_11__["OperatingSystemsComponent"],
    _windows31_program_manager_resume_web_development_web_development_component__WEBPACK_IMPORTED_MODULE_12__["WebDevelopmentComponent"],
    _windows31_program_manager_resume_object_oriented_object_oriented_component__WEBPACK_IMPORTED_MODULE_13__["ObjectOrientedComponent"],
    _windows31_program_manager_resume_graphics_graphics_component__WEBPACK_IMPORTED_MODULE_14__["GraphicsComponent"],
    _windows31_program_manager_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"],
    _windows31_program_manager_resume_education_education_component__WEBPACK_IMPORTED_MODULE_16__["EducationComponent"],
    _windows31_program_manager_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
    _windows31_program_manager_projects_project_display_project_display_component__WEBPACK_IMPORTED_MODULE_19__["ProjectDisplayComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgPluralCase"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDragHandle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDragPreview"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDragPlaceholder"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_6__["ResizableDirective"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_6__["ResizeHandleDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormArrayName"]], [_angular_common__WEBPACK_IMPORTED_MODULE_20__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/windows31/program-manager/contact/contact.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/windows31/program-manager/contact/contact.component.ts ***!
  \************************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _windows31_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../windows31.component */ "./src/app/windows31/windows31.component.ts");



class ContactComponent {
    constructor(contactWin31) {
        this.contactWin31 = contactWin31;
    }
    ngOnInit() {
        this.fileButton = document.getElementById('fileButton12');
        this.fileButtonClick = false;
        this.minusButton = document.getElementById('closeButton12');
        this.minusButtonClick = false;
        this.dropDownFile = document.getElementById('dropDownFile12');
        document.getElementById('dropDownFile12').style.display = 'none';
    }
    fileButtonClicked() {
        if (this.fileButtonClick) {
            this.dropDownFile.style.display = 'none';
            this.fileButton.style.background = '#FAFAFA';
            this.fileButton.style.color = 'BLACK';
            this.fileButtonClick = false;
        }
        else {
            this.fileButton.style.background = '#0800ad';
            this.fileButton.style.color = '#c4c7ce';
            this.dropDownFile.style.display = 'flex';
            this.fileButtonClick = true;
        }
    }
    minusButtonClicked() {
        if (this.contactWin31.singleClickEnabled) {
            this.minimizeClicked();
        }
        else {
            if (this.minusButtonClick === false) {
                this.minusButton.style.background = '#0800ad';
                this.minusButtonClick = true;
            }
            else {
                this.minusButton.style.background = '#c4c7ce';
                this.minusButtonClick = false;
            }
        }
    }
    minimizeClicked() {
        this.contactWin31.alterContactShowing();
    }
    maximizeClicked() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 53, vars: 0, consts: [[1, "contact"], [1, "topBar12"], ["id", "closeButton12", 1, "closeButton12", 3, "click", "dblclick"], ["src", "../../../assets/Win31/Icons/minusButton.png", 3, "click", "dblclick"], ["id", "downArrow12", 3, "click"], ["id", "upArrow12", 3, "click"], ["id", "dropDownFile12", 1, "dropDownFile12"], ["id", "newButton12"], ["id", "openButton12"], ["id", "moveButton12"], [1, "subBar12"], ["id", "fileButton12", 3, "click"], ["id", "optionsButton12"], ["id", "windowButton12"], ["id", "helpButton12"], [1, "contactDisplay"], ["id", "linkedIn", "href", "https://www.linkedin.com/in/jerod-jones-0131835a/", "target", "_blank", 1, "linkButton"], ["src", "../../../../assets/Win31/Icons/linkedIn.png"], ["id", "gitHub", "href", "https://github.com/jerodj15", "target", "_blank", 1, "linkButton"], ["src", "../../../../assets/Win31/Icons/gitHub.png"], ["id", "eMail", "href", "mailto:jerodj15@gmail.com", 1, "linkButton"], ["src", "../../../../assets/Win31/Icons/MSMAI001.PNG"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_2_listener() { return ctx.minusButtonClicked(); })("dblclick", function ContactComponent_Template_button_dblclick_2_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_img_click_3_listener() { return ctx.minusButtonClicked(); })("dblclick", function ContactComponent_Template_img_dblclick_3_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_6_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2BC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_8_listener() { return ctx.maximizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2BC5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ove...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_24_listener() { return ctx.fileButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "ile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "indow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "elp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Email Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".contact[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  box-sizing: border-box;\r\n  width: 40vw;\r\n  height: 40vh;\r\n  overflow-x: hidden;\r\n  border: 2px solid #585c5c;\r\n  margin-left: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.topBar12[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  height: 3vh;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownMinus12[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: start;\r\n  -webkit-box-align: start;\r\n          align-items: start;\r\n  position: absolute;\r\n  margin-top: 3vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile12[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: start;\r\n  -webkit-box-align: start;\r\n          align-items: start;\r\n  position: absolute;\r\n  margin-top: 5.9vh;\r\n  border: 1px solid black;\r\n  width: 20vw;\r\n}\r\n\r\n.dropDownFile12[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  font-size: small;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  text-align: start;\r\n  padding: 2px;\r\n  padding-left: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownFile12[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  width: 99%;\r\n  color: black;\r\n}\r\n\r\n#mainButton12[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#mainButton12[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%]{\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#closeButton12[_ngcontent-%COMP%] {\r\n  \r\n  background: #c4c7ce;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#closeButton12[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 3px;\r\n}\r\n\r\n.topBar12[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.subBar12[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row nowrap;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.subBar12[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  padding: 0.3em;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.mainDisplay12[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #FAFAFA;\r\n}\r\n\r\n.contactDisplay[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  align-content: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  padding: 10px;\r\n}\r\n\r\n.linkButton[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  height: 100px;\r\n  max-width: 100px;\r\n  text-decoration: none;\r\n}\r\n\r\n.linkButton[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n.linkButton[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%] {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.linkButton[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.linkButton[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.linkButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  width: 70%;\r\n  height: 70%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQXFCO0VBQXJCLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3dpbmRvd3MzMS9wcm9ncmFtLW1hbmFnZXIvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgaGVpZ2h0OiA0MHZoO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNTg1YzVjO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi50b3BCYXIxMiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogM3ZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZHJvcERvd25NaW51czEyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDN2aDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmRyb3BEb3duRmlsZTEyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDUuOXZoO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG59XHJcblxyXG4uZHJvcERvd25GaWxlMTIgYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kcm9wRG93bkZpbGUxMiBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwODAwYWQ7XHJcbiAgY29sb3I6ICNGQUZBRkE7XHJcbn1cclxuXHJcbmhyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDk5JTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNtYWluQnV0dG9uMTIge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4jbWFpbkJ1dHRvbjEyOmZvY3VzIGxhYmVse1xyXG4gIGJhY2tncm91bmQ6ICMwODAwYWQ7XHJcbiAgY29sb3I6ICNGQUZBRkE7XHJcbn1cclxuXHJcbiNjbG9zZUJ1dHRvbjEyIHtcclxuICAvKmJhY2tncm91bmQ6ICNjN2M4Y2Q7Ki9cclxuICBiYWNrZ3JvdW5kOiAjYzRjN2NlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2Nsb3NlQnV0dG9uMTIgaW1ne1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogM3B4O1xyXG59XHJcblxyXG4udG9wQmFyMTIgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4uc3ViQmFyMTIge1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uc3ViQmFyMTIgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIHBhZGRpbmc6IDAuM2VtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubWFpbkRpc3BsYXkxMiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbn1cclxuXHJcbi5jb250YWN0RGlzcGxheSB7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmxpbmtCdXR0b24ge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5saW5rQnV0dG9uIGxhYmVsIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5saW5rQnV0dG9uOmZvY3VzIGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4ubGlua0J1dHRvbjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlua0J1dHRvbiBsYWJlbDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlua0J1dHRvbiBpbWcge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogNzAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"] }]; }, null); })();


/***/ }),

/***/ "./src/app/windows31/program-manager/main/about-page/about-page.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/windows31/program-manager/main/about-page/about-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _windows31_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../windows31.component */ "./src/app/windows31/windows31.component.ts");



class AboutPageComponent {
    constructor(aboutWin31) {
        this.aboutWin31 = aboutWin31;
    }
    ngOnInit() {
        this.fileButton = document.getElementById('fileButton4');
        this.fileButtonClick = false;
        this.minusButton = document.getElementById('closeButton4');
        this.minusButtonClick = false;
        this.dropDownFile = document.getElementById('dropDownFile4');
        document.getElementById('dropDownFile4').style.display = 'none';
    }
    minusButtonClicked() {
        if (this.aboutWin31.singleClickEnabled) {
            this.minimizeClicked();
        }
        else {
            if (this.minusButtonClick === false) {
                this.minusButton.style.background = '#0800ad';
                this.minusButtonClick = true;
            }
            else {
                this.minusButton.style.background = '#c4c7ce';
                this.minusButtonClick = false;
            }
        }
    }
    minimizeClicked() {
        this.aboutWin31.alterAboutWindowShowing();
    }
    fileButtonClicked() {
        if (this.fileButtonClick) {
            this.dropDownFile.style.display = 'none';
            this.fileButtonClick = false;
        }
        else {
            this.dropDownFile.style.display = 'flex';
            this.fileButtonClick = true;
        }
    }
}
AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) { return new (t || AboutPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"])); };
AboutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutPageComponent, selectors: [["app-about-page"]], decls: 79, vars: 0, consts: [["id", "aboutPage", 1, "aboutPage"], [1, "topBar4"], ["id", "closeButton4", 1, "closeButton4", 3, "click", "dblclick"], ["src", "../../../assets/Win31/Icons/minusButton.png"], ["id", "downArrow4", 3, "click"], ["id", "upArrow4"], ["id", "dropDownFile4", 1, "dropDownFile4"], ["id", "newButton4"], ["id", "openButton4"], ["id", "moveButton4"], ["id", "copyButton4"], ["id", "closeExitButton4"], [1, "subBar4"], ["id", "fileButton4", 3, "click"], ["id", "optionsButton4"], ["id", "windowButton4"], ["id", "helpButton4"], ["id", "aboutDisplay", 1, "aboutDisplay"]], template: function AboutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_Template_button_click_2_listener() { return ctx.minusButtonClicked(); })("dblclick", function AboutPageComponent_Template_button_dblclick_2_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About This Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_Template_button_click_6_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2BC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2BC5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ove...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "opy...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "xit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_Template_button_click_32_listener() { return ctx.fileButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "ile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "ptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "indow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "elp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Information on this page...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "This page was created using Angular 9.0. I have always been nostalgic for older technology I was exposed to as I was growing up. Even though, technically, my first operating system was Dos, I didn't think a website would be even remotely interesting if I created one with that type of theming in mind. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " This page is still a work in progress and different versions will continue to be added. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Navigating this page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Double clicking icons will send users to the different windows. Currently, only one sub-window can be opened at a time. And sometimes the z-index can act a little weird if users try to open more than one window. Still a work in progress. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Things that need to be implemented...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Upgrade Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Desktop toggle for single-click mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "95 version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "98 Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "XP Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "7 Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Control Panel Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Functional old school games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".aboutPage[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  box-sizing: border-box;\r\n  width: 80vw;\r\n  height: 80vh;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n  border: 2px solid #585c5c;\r\n  margin-left: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.topBar4[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  height: 3vh;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownMinus4[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: start;\r\n  -webkit-box-align: start;\r\n          align-items: start;\r\n  position: absolute;\r\n  margin-top: 3vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile4[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: start;\r\n  -webkit-box-align: start;\r\n          align-items: start;\r\n  position: absolute;\r\n  margin-top: 5.9vh;\r\n  border: 1px solid black;\r\n  width: 20vw;\r\n}\r\n\r\n.dropDownFile4[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  font-size: small;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  text-align: start;\r\n  padding: 2px;\r\n  padding-left: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownFile4[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  width: 99%;\r\n  color: black;\r\n}\r\n\r\n#mainButton4[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#mainButton4[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%]{\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#closeButton4[_ngcontent-%COMP%] {\r\n  \r\n  background: #c4c7ce;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#closeButton4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 3px;\r\n}\r\n\r\n.topBar4[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.subBar4[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row nowrap;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.subBar4[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  padding: 0.3em;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.mainDisplay4[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #FAFAFA;\r\n}\r\n\r\n.aboutDisplay[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  background: #FAFAFA;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.aboutDisplay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9tYWluL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQXFCO0VBQXJCLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3dpbmRvd3MzMS9wcm9ncmFtLW1hbmFnZXIvbWFpbi9hYm91dC1wYWdlL2Fib3V0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dFBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGhlaWdodDogODB2aDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1ODVjNWM7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnRvcEJhcjQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDN2aDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRyb3BEb3duTWludXM0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDN2aDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmRyb3BEb3duRmlsZTQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogNS45dmg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IDIwdnc7XHJcbn1cclxuXHJcbi5kcm9wRG93bkZpbGU0IGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZHJvcERvd25GaWxlNCBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwODAwYWQ7XHJcbiAgY29sb3I6ICNGQUZBRkE7XHJcbn1cclxuXHJcbmhyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDk5JTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNtYWluQnV0dG9uNCB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbiNtYWluQnV0dG9uNDpmb2N1cyBsYWJlbHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4jY2xvc2VCdXR0b240IHtcclxuICAvKmJhY2tncm91bmQ6ICNjN2M4Y2Q7Ki9cclxuICBiYWNrZ3JvdW5kOiAjYzRjN2NlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2Nsb3NlQnV0dG9uNCBpbWd7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi50b3BCYXI0IGxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuLnN1YkJhcjQge1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uc3ViQmFyNCBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgcGFkZGluZzogMC4zZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5tYWluRGlzcGxheTQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG59XHJcblxyXG4uYWJvdXREaXNwbGF5IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5hYm91dERpc3BsYXkgcCB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-page',
                templateUrl: './about-page.component.html',
                styleUrls: ['./about-page.component.css']
            }]
    }], function () { return [{ type: _windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"] }]; }, null); })();


/***/ }),

/***/ "./src/app/windows31/program-manager/main/introduction/introduction.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/windows31/program-manager/main/introduction/introduction.component.ts ***!
  \***************************************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _windows31_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../windows31.component */ "./src/app/windows31/windows31.component.ts");



class IntroductionComponent {
    constructor(introWin31) {
        this.introWin31 = introWin31;
    }
    ngOnInit() {
        this.fileButton = document.getElementById('fileButton3');
        this.fileButtonClick = false;
        this.minusButton = document.getElementById('closeButton3');
        this.minusButtonClick = false;
        this.dropDownFile = document.getElementById('dropDownFile3');
        document.getElementById('dropDownFile3').style.display = 'none';
    }
    minusButtonClicked() {
        if (this.introWin31.singleClickEnabled) {
            this.minimizeClicked();
        }
        else {
            if (this.minusButtonClick === false) {
                this.minusButton.style.background = '#0800ad';
                this.minusButtonClick = true;
            }
            else {
                this.minusButton.style.background = '#c4c7ce';
                this.minusButtonClick = false;
            }
        }
    }
    fileButtonClicked() {
        if (this.fileButtonClick) {
            this.dropDownFile.style.display = 'none';
            this.fileButtonClick = false;
        }
        else {
            this.dropDownFile.style.display = 'flex';
            this.fileButtonClick = true;
        }
    }
    minimizeClicked() {
        this.introWin31.alterIntroWindowShowing();
    }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"])); };
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-introduction"]], decls: 53, vars: 0, consts: [["id", "introduction", 1, "introduction"], [1, "topBar3"], ["id", "closeButton3", 1, "closeButton3", 3, "click", "dblclick"], ["src", "../../../assets/Win31/Icons/minusButton.png"], ["id", "downArrow3", 3, "click"], ["id", "upArrow3"], ["id", "dropDownFile3", 1, "dropDownFile3"], ["id", "newButton3"], ["id", "openButton3"], ["id", "moveButton3"], ["id", "copyButton3"], ["id", "closeExitButton"], [1, "subBar3"], ["id", "fileButton3", 3, "click"], ["id", "optionsButton3"], ["id", "windowButton3"], ["id", "helpButton3"], [1, "introDisplay"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntroductionComponent_Template_button_click_2_listener() { return ctx.minusButtonClicked(); })("dblclick", function IntroductionComponent_Template_button_dblclick_2_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntroductionComponent_Template_button_click_6_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2BC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2BC5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ove...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "opy...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "xit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntroductionComponent_Template_button_click_32_listener() { return ctx.fileButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "ile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "ptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "indow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "elp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "A little about myself...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "I'm a recent WGU graduate offering a strong foundation in software engineering and programming principles across multiple platforms. Experienced in object-oriented programming; developing, testing and debugging code; designing interfaces; and administering systems and networks. Quickly learning and mastering new technologies, successful working in both a team and selfdirected settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".introduction[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  box-sizing: border-box;\r\n  width: 80vw;\r\n  height: 80vh;\r\n  overflow-x: hidden;\r\n  border: 2px solid #585c5c;\r\n  margin: auto;\r\n}\r\n\r\n.topBar3[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  height: 3vh;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownMinus3[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: start;\r\n  -webkit-box-align: start;\r\n          align-items: start;\r\n  position: absolute;\r\n  margin-top: 3vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile3[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: start;\r\n  -webkit-box-align: start;\r\n          align-items: start;\r\n  position: absolute;\r\n  margin-top: 5.9vh;\r\n  border: 1px solid black;\r\n  width: 20vw;\r\n}\r\n\r\n.dropDownFile3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  font-size: small;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  text-align: start;\r\n  padding: 2px;\r\n  padding-left: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownFile3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  width: 99%;\r\n  color: black;\r\n}\r\n\r\n#mainButton3[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#mainButton3[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%]{\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#closeButton3[_ngcontent-%COMP%] {\r\n  \r\n  background: #c4c7ce;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#closeButton3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 3px;\r\n}\r\n\r\n.topBar3[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.subBar3[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row nowrap;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.subBar3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  padding: 0.3em;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.mainDisplay3[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #FAFAFA;\r\n}\r\n\r\n.introDisplay[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  height: 100%;\r\n}\r\n\r\n.introDisplay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n}\r\n\r\n.introDisplay[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9tYWluL2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHVCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsd0JBQWtCO1VBQWxCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHVCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsd0JBQWtCO1VBQWxCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBcUI7RUFBckIsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3dpbmRvd3MzMS9wcm9ncmFtLW1hbmFnZXIvbWFpbi9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm9kdWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogODB2dztcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1ODVjNWM7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udG9wQmFyMyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogM3ZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZHJvcERvd25NaW51czMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZHJvcERvd25GaWxlMyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiA1Ljl2aDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB3aWR0aDogMjB2dztcclxufVxyXG5cclxuLmRyb3BEb3duRmlsZTMgYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kcm9wRG93bkZpbGUzIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuaHIge1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogOTklO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI21haW5CdXR0b24zIHtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuI21haW5CdXR0b24zOmZvY3VzIGxhYmVse1xyXG4gIGJhY2tncm91bmQ6ICMwODAwYWQ7XHJcbiAgY29sb3I6ICNGQUZBRkE7XHJcbn1cclxuXHJcbiNjbG9zZUJ1dHRvbjMge1xyXG4gIC8qYmFja2dyb3VuZDogI2M3YzhjZDsqL1xyXG4gIGJhY2tncm91bmQ6ICNjNGM3Y2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jY2xvc2VCdXR0b24zIGltZ3tcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDNweDtcclxufVxyXG5cclxuLnRvcEJhcjMgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4uc3ViQmFyMyB7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5zdWJCYXIzIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBwYWRkaW5nOiAwLjNlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1haW5EaXNwbGF5MyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbn1cclxuXHJcbi5pbnRyb0Rpc3BsYXkge1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaW50cm9EaXNwbGF5IHAge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuLmludHJvRGlzcGxheSBoMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-introduction',
                templateUrl: './introduction.component.html',
                styleUrls: ['./introduction.component.css']
            }]
    }], function () { return [{ type: _windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"] }]; }, null); })();


/***/ }),

/***/ "./src/app/windows31/program-manager/main/main.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/windows31/program-manager/main/main.component.ts ***!
  \******************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _windows31_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../windows31.component */ "./src/app/windows31/windows31.component.ts");



class MainComponent {
    constructor(windows31) {
        this.windows31 = windows31;
        this.minusClicked = false;
    }
    ngOnInit() {
        this.fileButton = document.getElementById('dropDownFile2');
        this.minusButton = document.getElementById('closeButton2');
        document.getElementById('dropDownFile2').style.display = 'none';
    }
    minusButtonClicked() {
        if (this.windows31.singleClickEnabled) {
            this.minimizeClicked();
        }
        else {
            if (this.minusClicked === false) {
                this.minusButton.style.background = '#0800ad';
                this.minusClicked = true;
            }
            else {
                this.minusButton.style.background = '#c4c7ce';
                this.minusClicked = false;
            }
        }
    }
    fileButtonClicked() {
        if (this.fileButton.style.display === 'flex') {
            this.fileButton.style.display = 'none';
        }
        else {
            this.fileButton.style.display = 'flex';
        }
    }
    introClicked() {
        if (document.getElementById('introWindow').style.display === 'flex') {
            document.getElementById('introWindow').style.display = 'none';
            console.log('clicked and not showing');
        }
        else {
            document.getElementById('introWindow').style.zIndex = '1';
            document.getElementById('introWindow').style.display = 'flex';
            console.log('clicked and showing');
        }
    }
    sIntroClicked() {
        if (this.windows31.singleClickEnabled) {
            this.introClicked();
        }
    }
    aboutPageClicked() {
        if (document.getElementById('aboutPageWindow').style.display === 'flex') {
            document.getElementById('aboutPageWindow').style.display = 'none';
        }
        else {
            document.getElementById('aboutPageWindow').style.display = 'flex';
        }
    }
    sAboutPageClicked() {
        if (this.windows31.singleClickEnabled) {
            this.aboutPageClicked();
        }
    }
    maximizeClicked() {
    }
    minimizeClicked() {
        this.windows31.alterMainWindowShowing();
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 72, vars: 0, consts: [[1, "mainSection2"], [1, "topBar2"], ["id", "closeButton2", 1, "closeButton2", 3, "click", "dblclick"], ["src", "../../../assets/Win31/Icons/minusButton.png"], ["id", "downArrow2", 3, "click"], ["id", "upArrow2"], ["id", "dropDownFile2", 1, "dropDownFile2"], ["id", "newButton2"], ["id", "openButton2"], ["id", "moveButton2"], ["id", "copyButton2"], ["id", "deleteButton2"], ["id", "propertiesButton2"], ["id", "runButton2"], ["id", "exitButton2"], [1, "subBar2"], ["id", "fileButton2", 3, "click"], ["id", "optionsButton2"], ["id", "windowButton2"], ["id", "helpButton2"], [1, "mainDisplay2"], ["id", "introButton", 3, "dblclick", "click"], ["src", "../../../../assets/Win31/Icons/WRITE001.PNG"], ["id", "aboutPageButton", 3, "dblclick", "click"], ["src", "../../../../assets/Win31/Icons/MORIC002.PNG"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_2_listener() { return ctx.minusButtonClicked(); })("dblclick", function MainComponent_Template_button_dblclick_2_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_6_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2BC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2BC5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ove...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "opy...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "elete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "roperties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "un...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "it Windows...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_47_listener() { return ctx.fileButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "ile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "ptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "indow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "elp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function MainComponent_Template_button_dblclick_64_listener() { return ctx.introClicked(); })("click", function MainComponent_Template_button_click_64_listener() { return ctx.sIntroClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function MainComponent_Template_button_dblclick_68_listener() { return ctx.aboutPageClicked(); })("click", function MainComponent_Template_button_click_68_listener() { return ctx.sAboutPageClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "About Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mainSection2[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  box-sizing: border-box;\r\n  width: 30vw;\r\n  height: 40vh;\r\n  overflow-x: hidden;\r\n  border: 2px solid #585c5c;\r\n  margin: auto;\r\n}\r\n\r\n.topBar2[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  height: 3vh;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownMinus2[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  position: absolute;\r\n  margin-top: 3vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile2[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  position: absolute;\r\n  margin-top: 5.5vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  font-size: small;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  text-align: start;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownFile2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  width: 99%;\r\n  color: black;\r\n}\r\n\r\n#mainButton2[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#mainButton2[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%]{\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#closeButton2[_ngcontent-%COMP%] {\r\n  \r\n  background: #c4c7ce;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#closeButton2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 3px;\r\n}\r\n\r\n.topBar2[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.subBar2[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row nowrap;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.subBar2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  padding: 0.3em;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.mainDisplay2[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #FAFAFA;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  justify-items: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  align-content: flex-start;\r\n}\r\n\r\n#aboutPageButton[_ngcontent-%COMP%] {\r\n  padding: 0.5em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: 0;\r\n  background: #FAFAFA;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#aboutPageButton[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%] {\r\n  color: #FAFAFA;\r\n  background: #0800ad;\r\n}\r\n\r\n#introButton[_ngcontent-%COMP%] {\r\n  padding: 0.5em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: 0;\r\n  background: #FAFAFA;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#introButton[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%] {\r\n  color: #FAFAFA;\r\n  background: #0800ad;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHVCQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHVCQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBcUI7RUFBckIsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHVCQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluU2VjdGlvbjIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGhlaWdodDogNDB2aDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzU4NWM1YztcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi50b3BCYXIyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiAzdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kcm9wRG93bk1pbnVzMiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZHJvcERvd25GaWxlMiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogNS41dmg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5kcm9wRG93bkZpbGUyIGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRyb3BEb3duRmlsZTIgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG5ociB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiA5OSU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jbWFpbkJ1dHRvbjIge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4jbWFpbkJ1dHRvbjI6Zm9jdXMgbGFiZWx7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuI2Nsb3NlQnV0dG9uMiB7XHJcbiAgLypiYWNrZ3JvdW5kOiAjYzdjOGNkOyovXHJcbiAgYmFja2dyb3VuZDogI2M0YzdjZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNjbG9zZUJ1dHRvbjIgaW1ne1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogM3B4O1xyXG59XHJcblxyXG4udG9wQmFyMiBsYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMwODAwYWQ7XHJcbiAgY29sb3I6ICNGQUZBRkE7XHJcbn1cclxuXHJcbi5zdWJCYXIyIHtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnN1YkJhcjIgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIHBhZGRpbmc6IDAuM2VtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubWFpbkRpc3BsYXkyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuI2Fib3V0UGFnZUJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMC41ZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jYWJvdXRQYWdlQnV0dG9uOmZvY3VzIGxhYmVsIHtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG59XHJcblxyXG4jaW50cm9CdXR0b24ge1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2ludHJvQnV0dG9uOmZvY3VzIGxhYmVsIHtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return [{ type: _windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"] }]; }, null); })();


/***/ }),

/***/ "./src/app/windows31/program-manager/program-manager.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/windows31/program-manager/program-manager.component.ts ***!
  \************************************************************************/
/*! exports provided: ProgramManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramManagerComponent", function() { return ProgramManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _windows31_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../windows31.component */ "./src/app/windows31/windows31.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");




class ProgramManagerComponent {
    constructor(windows31) {
        this.windows31 = windows31;
        this.minusClicked = false;
    }
    ngOnInit() {
        this.minusButton = document.getElementById('closeButton');
        this.fileButton = document.getElementById('dropDownFile');
        document.getElementById('dropDownFile').style.display = 'none';
        this.mainCheckBox = document.getElementById('checkSingle');
    }
    hideFileMenu() {
        this.fileButton.style.display = 'none';
    }
    // Double click methods
    fileButtonClicked() {
        if (this.fileButton.style.display === 'flex') {
            this.fileButton.style.display = 'none';
        }
        else {
            this.fileButton.style.display = 'flex';
        }
    }
    minusButtonClicked() {
        if (this.windows31.singleClickEnabled) {
            this.minimizeClicked();
        }
        else {
            if (this.minusClicked === false) {
                this.minusButton.style.background = '#0800ad';
                this.minusClicked = true;
            }
            else {
                this.minusButton.style.background = '#c4c7ce';
                this.minusClicked = false;
            }
        }
    }
    maximizeClicked() {
        const currentWidth = document.getElementById('progMan').clientWidth;
        const windowWidth = window.innerWidth;
        const currentHeight = document.getElementById('progMan').offsetWidth;
        console.log('the width is ' + currentWidth + ' and the height is ' + currentHeight);
        console.log('the window width is ' + windowWidth);
        console.log('the percentage difference is ' + currentWidth / windowWidth);
    }
    minimizeClicked() {
        this.windows31.alterProgManShowing();
    }
    displayMainWindow() {
        this.windows31.alterMainWindowShowing();
    }
    displayResumeWindow() {
        this.windows31.alterResumeWindowShowing();
    }
    displayProjectsWindow() {
        this.windows31.alterProjectsShowing();
    }
    displayContactWindow() {
        this.windows31.alterContactShowing();
    }
    // Single click methods
    sDisplayMainWindow() {
        console.log('single service ' + this.windows31.singleClickEnabled);
        this.windows31.sAlterMainShowing();
    }
    sDisplayResumeWindow() {
        if (this.windows31.singleClickEnabled) {
            this.displayResumeWindow();
        }
    }
    sDisplayProjectsWindow() {
        if (this.windows31.singleClickEnabled) {
            this.displayProjectsWindow();
        }
    }
    sDisplayContactWindow() {
        if (this.windows31.singleClickEnabled) {
            this.displayContactWindow();
        }
    }
}
ProgramManagerComponent.ɵfac = function ProgramManagerComponent_Factory(t) { return new (t || ProgramManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"])); };
ProgramManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgramManagerComponent, selectors: [["app-program-manager"]], decls: 84, vars: 0, consts: [["id", "progMan", 1, "programManager"], [1, "topBar"], ["id", "closeButton", 1, "closeButton", 3, "click", "dblclick"], ["src", "../../../assets/Win31/Icons/minusButton.png"], ["id", "downArrow", 3, "click"], ["id", "upArrow", 3, "click"], ["id", "dropDownFile", 1, "dropDownFile"], ["id", "newButton"], ["id", "openButton"], ["id", "moveButton"], ["id", "copyButton"], ["id", "deleteButton"], ["id", "propertiesButton"], ["id", "runButton"], ["id", "exitButton"], [1, "subBar"], ["id", "fileButton", 3, "click"], ["id", "optionsButton"], ["id", "windowButton"], ["id", "helpButton"], [1, "programManagerDisplay", 3, "mousedown"], ["id", "mainButton", "cdkDrag", "", 3, "dblclick", "click"], ["src", "../../../assets/Win31/Icons/PROGM004.PNG"], ["id", "resumeButton", 3, "dblclick", "click"], ["id", "projectsButton", 3, "dblclick", "click"], ["id", "contactButton", 3, "dblclick", "click"], ["id", "upgradeButton"], ["src", "../../../assets/Win31/Icons/PROGM046.PNG"]], template: function ProgramManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramManagerComponent_Template_button_click_2_listener() { return ctx.minusButtonClicked(); })("dblclick", function ProgramManagerComponent_Template_button_dblclick_2_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Program Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramManagerComponent_Template_button_click_6_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2BC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramManagerComponent_Template_button_click_8_listener() { return ctx.maximizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2BC5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ove...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "opy...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "elete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "roperties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "un...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "it Windows...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramManagerComponent_Template_button_click_47_listener() { return ctx.fileButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "ile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "ptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "indow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "elp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ProgramManagerComponent_Template_div_mousedown_63_listener() { return ctx.hideFileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ProgramManagerComponent_Template_button_dblclick_64_listener() { return ctx.displayMainWindow(); })("click", function ProgramManagerComponent_Template_button_click_64_listener() { return ctx.sDisplayMainWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ProgramManagerComponent_Template_button_dblclick_68_listener() { return ctx.displayResumeWindow(); })("click", function ProgramManagerComponent_Template_button_click_68_listener() { return ctx.sDisplayResumeWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Resum\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ProgramManagerComponent_Template_button_dblclick_72_listener() { return ctx.displayProjectsWindow(); })("click", function ProgramManagerComponent_Template_button_click_72_listener() { return ctx.sDisplayProjectsWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ProgramManagerComponent_Template_button_dblclick_76_listener() { return ctx.displayContactWindow(); })("click", function ProgramManagerComponent_Template_button_click_76_listener() { return ctx.sDisplayContactWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Upgrade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"]], styles: [".programManager[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  box-sizing: border-box;\r\n  width: 80vw;\r\n  height: 40vh;\r\n  overflow-x: hidden;\r\n  border: 2px solid #585c5c;\r\n}\r\n\r\n.topBar[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  height: 3vh;\r\n  width: 80vw;\r\n}\r\n\r\n.dropDownMinus[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  position: absolute;\r\n  margin-top: 3vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  position: absolute;\r\n  margin-top: 5.5vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  font-size: small;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  text-align: start;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownFile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  width: 99%;\r\n  color: black;\r\n}\r\n\r\n#mainButton[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#mainButton[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%]{\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#resumeButton[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#resumeButton[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%] {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#projectsButton[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#projectsButton[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%] {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#contactButton[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#contactButton[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%] {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#closeButton[_ngcontent-%COMP%] {\r\n  background: #c4c7ce;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#closeButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 3px;\r\n}\r\n\r\n#upgradeButton[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#upgradeButton[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%] {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.topBar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.subBar[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row nowrap;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.subBar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  padding: 0.3em;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.programManagerDisplay[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #FAFAFA;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  align-content: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  justify-content: space-around;\r\n}\r\n\r\n#fileButton[_ngcontent-%COMP%]:hover {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#fileButton[_ngcontent-%COMP%]:focus{\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9wcm9ncmFtLW1hbmFnZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsdUJBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsdUJBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFJQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFxQjtFQUFyQiw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC93aW5kb3dzMzEvcHJvZ3JhbS1tYW5hZ2VyL3Byb2dyYW0tbWFuYWdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyYW1NYW5hZ2VyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogODB2dztcclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1ODVjNWM7XHJcbn1cclxuXHJcbi50b3BCYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDN2aDtcclxuICB3aWR0aDogODB2dztcclxufVxyXG5cclxuLmRyb3BEb3duTWludXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDN2aDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmRyb3BEb3duRmlsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogNS41dmg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5kcm9wRG93bkZpbGUgYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZHJvcERvd25GaWxlIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuaHIge1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogOTklO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI21haW5CdXR0b24ge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4jbWFpbkJ1dHRvbjpmb2N1cyBsYWJlbHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4jcmVzdW1lQnV0dG9uIHtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuI3Jlc3VtZUJ1dHRvbjpmb2N1cyBsYWJlbCB7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuI3Byb2plY3RzQnV0dG9uIHtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuI3Byb2plY3RzQnV0dG9uOmZvY3VzIGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4jY29udGFjdEJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbiNjb250YWN0QnV0dG9uOmZvY3VzIGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4jY2xvc2VCdXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICNjNGM3Y2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jY2xvc2VCdXR0b24gaW1ne1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogM3B4O1xyXG59XHJcblxyXG4jdXBncmFkZUJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbiN1cGdyYWRlQnV0dG9uOmZvY3VzIGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG5cclxuXHJcbi50b3BCYXIgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4uc3ViQmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnN1YkJhciBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgcGFkZGluZzogMC4zZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9ncmFtTWFuYWdlckRpc3BsYXkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4jZmlsZUJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuI2ZpbGVCdXR0b246Zm9jdXN7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgramManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-program-manager',
                templateUrl: './program-manager.component.html',
                styleUrls: ['./program-manager.component.css']
            }]
    }], function () { return [{ type: _windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"] }]; }, null); })();


/***/ }),

/***/ "./src/app/windows31/program-manager/projects/project-display/project-display.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/windows31/program-manager/projects/project-display/project-display.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProjectDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDisplayComponent", function() { return ProjectDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _windows31_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../windows31.component */ "./src/app/windows31/windows31.component.ts");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects.component */ "./src/app/windows31/program-manager/projects/projects.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ProjectDisplayComponent_li_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r3);
} }
class ProjectDisplayComponent {
    constructor(projectWin31, projectsComponent) {
        this.projectWin31 = projectWin31;
        this.projectsComponent = projectsComponent;
        this.minusClicked = false;
        // 0
        this.blankProject = {
            name: '',
            date: '',
            type: '',
            description: '',
            features: ['']
        };
        // Projects list
        // 1
        this.foodBlogProject = {
            name: 'Food Blogging Website',
            date: '2019',
            type: 'Contracted Project',
            description: 'This Angular JS website was created for a food blogger to be able to ' +
                'post reviews and pictures of different foods they sampled throughout their job / hobby. ' +
                'The database to store the information was based on separate Javascript file which provided ' +
                'the back end communication to the MongoDB that was created and stored on their own personal host.',
            features: ['Authentication for the admin to upload, create, delete, and organize different posts.',
                'A dashboard to view which articles where published and which were not.',
                'The admin could also keep track of how many people had viewed a particular article.',
                'Included an authentication method to keep comments on articles limited to authorized users.',
                'Color scheme reflected the desires of the client and the UI was approved before moving forward.',
                'Some art including a logo was created specifically for the client.']
        };
        // 2
        this.personalPortfolioWebsite = {
            name: 'Personal Portfolio Website',
            date: '2019',
            type: 'Personal Project',
            description: 'This Angular JS website was for me to showcase my own professional portfolio. The Angular framework ' +
                'was used because of it’s organization and scalability to incorporate additions in case they are ever needed.',
            features: ['Showcased projects I’m currently working and and ones I have completed.',
                'A separate page for my resume.',
                'Includes a personal page with some basic information on myself.']
        };
        // 3
        this.awkwardSoundBoard = {
            name: 'Awkward Soundboard',
            date: '2019',
            type: 'Personal Project',
            description: 'Another crossover for the original application known as awkward situation. This ' +
                'Angular JS Progressive Web Application was created for the comparability issues faced when ' +
                'trying to create the application to reach a broader group of people. Because of it’s simplicity,' +
                ' the PWA version of this application only took a few hours to create and now it can be accessed ' +
                'from any device with internet access.',
            features: ['The UI reflects the simple need to access sound for perfect comedic timing.',
                'The sound effects themselves are the originals used to keep the same consistency ' +
                    'from the previous versions. ']
        };
        // 4
        this.salonManagementSystem = {
            name: 'Salon Management System',
            date: '2019',
            type: 'Personal Project',
            description: 'This Java application was a windows desktop-based application that was designed ' +
                'and built to kept track of the day to day dealing of a salon style business. This used a ' +
                'MySQL database for information storage and retrieval. ',
            features: ['Creating and editing employees ',
                'Creating and editing Clients',
                'Allowed the end-user to schedule appointments for clients to a selected employee',
                'Allowed tracking of all client appointments and history',
                'Allowed the end-user to pull reports and data on Appointment history based on client or employee, Client retention, ' +
                    'and Client Revenue Stream']
        };
        // 5
        this.classScheduler = {
            name: 'Class Scheduler',
            date: '2019',
            type: 'Western Governors University',
            description: 'This Java Android application was an Android phone/Tablet-based application that was ' +
                'designed and  built to help students keep track and plan of class schedules throughout the students ' +
                'time in school. This application used the embedded database SQLite to store and retrieve information.',
            features: ['Allowed the student to enter and update information on Semesters, Classes, Professors, Homework Assignments, ' +
                    'and lecture notes for each class',
                'Showed a visual representation for each semesters Class schedule',
                'Allowed the end-user to link notes from a lecture to a Class and date',
                'Allowed the end-user to share notes taken from any lecture to share with other students via text or email']
        };
        // 6
        this.appointmentScheduler = {
            name: 'Appointment Scheduler',
            date: '2018',
            type: 'Personal Project',
            description: 'This JavaFX application used an SQL database to store and retrieve information for ' +
                'creating appointments and storing client information.',
            features: ['Implemented schedule conflict tracking so there was no overbooking.',
                'Simple user interface design.',
                'Report generation for average appointment times, number of appointment types, and schedule of employees for the week',
                'Multi-language support for French.']
        };
        // 7
        this.inventoryManagementSystem = {
            name: 'Inventory Management System',
            date: '2018',
            type: 'Western Governors University',
            description: 'This JavaFX application was a windows desktop-based application that was designed and' +
                ' built to keep track of inventory and parts for an auto repair shop. This application used both ' +
                'local storage or an SQL database to store and retrieve information.',
            features: ['Create and link components to a larger component of a vehicle',
                'Tracking of components stock level and minimal quantity on hand thresholds for more components needed to be ordered']
        };
        // 8
        this.studentManagementSystem = {
            name: 'Student Management System',
            date: '2017',
            type: 'Brookhaven College',
            description: 'This C++ application was a console based application designed to help a university' +
                ' migrate an existing student system to the new platform. The information of the students was ' +
                'all stored in a single array.',
            features: ['Each student had to be created as an object from the array.',
                'A roster had to be created to hold the student data.',
                'Functions, such as getting the student GPA average and average attendance were implemented to generate reports.',
                'Deconstructors were implemented to release the Roster from memory.']
        };
        // 9
        this.journalNotesKeeper = {
            name: 'Journal / Notes Keeper',
            date: '2017',
            type: 'Personal Project',
            description: 'This Java application was a Windows desktop-based application made to keep a local storage of ' +
                'either notes or journal entries. This application used an embedded SQLite to save data locally.',
            features: ['Included a simple interface to save the date, title, and entry of the user input',
                'Displayed a list of previous entries on the right hand side for easy accessibility.',
                'Double clicking an item in the list would display the saved information in the same format that was entered by the user',
                'An active search bar was located next to the list of entries that constantly updated as the user typed',
                'Could find entries by date, title, or any word located in the main entry.']
        };
        // 10
        this.awkwardSituationSoundBoard = {
            name: 'Awkward Situation Sound Board',
            date: '2017',
            type: 'Personal Project',
            description: 'This application was written for both C# and JavaFX. It was a simple sound board that contained ' +
                'sounds useful for making tense situations more humorous.',
            features: ['Used sounds stored within the application itself.',
                'Each triggered sound would stop another sound if it was playing to reduce mixing noises.',
                'The user interface incorporated large buttons to facilitate easier functionality with touch screen devices']
        };
        this.setupPage();
    }
    ngOnInit() {
        this.fileButton = document.getElementById('dropDownFile13');
        this.minusButton = document.getElementById('closeButton13');
        document.getElementById('dropDownFile13').style.display = 'none';
    }
    setupPage() {
        const projectNumber = this.projectWin31.selectedNumber;
        console.log('project number ' + this.projectWin31.selectedNumber);
        if (projectNumber === 0) {
            this.selectedProject = this.blankProject;
        }
        else if (projectNumber === 1) {
            this.selectedProject = this.foodBlogProject;
        }
        else if (projectNumber === 2) {
            this.selectedProject = this.personalPortfolioWebsite;
        }
        else if (projectNumber === 3) {
            this.selectedProject = this.awkwardSoundBoard;
        }
        else if (projectNumber === 4) {
            this.selectedProject = this.salonManagementSystem;
        }
        else if (projectNumber === 5) {
            this.selectedProject = this.classScheduler;
        }
        else if (projectNumber === 6) {
            this.selectedProject = this.appointmentScheduler;
        }
        else if (projectNumber === 7) {
            this.selectedProject = this.inventoryManagementSystem;
        }
        else if (projectNumber === 8) {
            this.selectedProject = this.studentManagementSystem;
        }
        else if (projectNumber === 9) {
            this.selectedProject = this.journalNotesKeeper;
        }
        else if (projectNumber === 10) {
            this.selectedProject = this.awkwardSituationSoundBoard;
        }
    }
    reloadElement() {
        this.setupPage();
        this.ngOnInit();
    }
    minusButtonClicked() {
        if (this.projectWin31.singleClickEnabled) {
            this.minimizeClicked();
        }
        else {
            if (this.minusClicked === false) {
                this.minusButton.style.background = '#0800ad';
                this.minusClicked = true;
            }
            else {
                this.minusButton.style.background = '#c4c7ce';
                this.minusClicked = false;
            }
        }
    }
    minimizeClicked() {
        this.projectWin31.alterProjectDisplayShowing();
    }
    fileButtonClicked() {
        if (this.fileButton.style.display === 'flex') {
            this.fileButton.style.display = 'none';
        }
        else {
            this.fileButton.style.display = 'flex';
        }
    }
}
ProjectDisplayComponent.ɵfac = function ProjectDisplayComponent_Factory(t) { return new (t || ProjectDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"])); };
ProjectDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectDisplayComponent, selectors: [["app-project-display"]], decls: 67, vars: 6, consts: [["id", "projectDisplay", 1, "projectDisplay", 3, "click"], [1, "topBar13"], ["id", "closeButton13", 1, "closeButton13", 3, "click", "dblclick"], ["src", "../../../assets/Win31/Icons/minusButton.png"], ["id", "downArrow13", 3, "click"], ["id", "upArrow13"], ["id", "dropDownFile13", 1, "dropDownFile13"], ["id", "newButton13"], ["id", "openButton13"], ["id", "moveButton13"], ["id", "copyButton13"], ["id", "closeExitButton13"], [1, "subBar13"], ["id", "fileButton13", 3, "click"], ["id", "optionsButton13"], ["id", "windowButton13"], ["id", "helpButton13"], [1, "projectDetailDisplay"], [1, "projectIntro"], [1, "projectTitle"], [1, "vl1"], [1, "projectDate"], [1, "vl2"], [1, "projectType"], [1, "projectDetails"], [4, "ngFor", "ngForOf"]], template: function ProjectDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDisplayComponent_Template_div_click_0_listener() { return ctx.reloadElement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDisplayComponent_Template_button_click_2_listener() { return ctx.minusButtonClicked(); })("dblclick", function ProjectDisplayComponent_Template_button_dblclick_2_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDisplayComponent_Template_button_click_6_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2BC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2BC5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ove...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "opy...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "xit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDisplayComponent_Template_button_click_32_listener() { return ctx.fileButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "ile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "ptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "indow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "elp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Features ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ProjectDisplayComponent_li_66_Template, 2, 1, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.projectTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedProject.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedProject.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedProject.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedProject.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedProject.features);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".projectDisplay[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  box-sizing: border-box;\r\n  width: 50vw;\r\n  height: 50vh;\r\n  overflow-x: hidden;\r\n  border: 2px solid #585c5c;\r\n  margin: auto;\r\n}\r\n\r\n.topBar13[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  height: 3vh;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownMinus13[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  position: absolute;\r\n  margin-top: 3vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile13[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  position: absolute;\r\n  margin-top: 5.5vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile13[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  font-size: small;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  text-align: start;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownFile13[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  width: 99%;\r\n  color: black;\r\n}\r\n\r\n#mainButton13[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#mainButton13[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%]{\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#closeButton13[_ngcontent-%COMP%] {\r\n  \r\n  background: #c4c7ce;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#closeButton13[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 3px;\r\n}\r\n\r\n.topBar13[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.subBar13[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row nowrap;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.subBar13[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  padding: 0.3em;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.mainDisplay13[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #FAFAFA;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  justify-items: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  align-content: flex-start;\r\n}\r\n\r\n.projectDetailDisplay[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #FAFAFA;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: column nowrap;\r\n  justify-items: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  padding: 10px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.vl1[_ngcontent-%COMP%] {\r\n  border-left: 6px solid green;\r\n  height: 10vh;\r\n  width: 10%;\r\n}\r\n\r\n.vl2[_ngcontent-%COMP%] {\r\n  border-right: 6px solid green;\r\n  height: 10vh;\r\n  width: 10%;\r\n}\r\n\r\n.projectIntro[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row nowrap;\r\n  -webkit-box-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n  align-content: space-evenly;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.projectTitle[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.projectDate[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.projectType[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9wcm9qZWN0cy9wcm9qZWN0LWRpc3BsYXkvcHJvamVjdC1kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1QkFBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1QkFBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQXFCO0VBQXJCLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix1QkFBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXdCO0VBQXhCLDZCQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBcUI7RUFBckIsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiw4QkFBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9wcm9qZWN0cy9wcm9qZWN0LWRpc3BsYXkvcHJvamVjdC1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdERpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzU4NWM1YztcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi50b3BCYXIxMyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogM3ZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZHJvcERvd25NaW51czEzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5kcm9wRG93bkZpbGUxMyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogNS41dmg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5kcm9wRG93bkZpbGUxMyBidXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kcm9wRG93bkZpbGUxMyBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwODAwYWQ7XHJcbiAgY29sb3I6ICNGQUZBRkE7XHJcbn1cclxuXHJcbmhyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDk5JTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNtYWluQnV0dG9uMTMge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4jbWFpbkJ1dHRvbjEzOmZvY3VzIGxhYmVse1xyXG4gIGJhY2tncm91bmQ6ICMwODAwYWQ7XHJcbiAgY29sb3I6ICNGQUZBRkE7XHJcbn1cclxuXHJcbiNjbG9zZUJ1dHRvbjEzIHtcclxuICAvKmJhY2tncm91bmQ6ICNjN2M4Y2Q7Ki9cclxuICBiYWNrZ3JvdW5kOiAjYzRjN2NlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2Nsb3NlQnV0dG9uMTMgaW1ne1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogM3B4O1xyXG59XHJcblxyXG4udG9wQmFyMTMgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4uc3ViQmFyMTMge1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uc3ViQmFyMTMgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIHBhZGRpbmc6IDAuM2VtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubWFpbkRpc3BsYXkxMyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0RGV0YWlsRGlzcGxheSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi52bDEge1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgZ3JlZW47XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi52bDIge1xyXG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIGdyZWVuO1xyXG4gIGhlaWdodDogMTB2aDtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ucHJvamVjdEludHJvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2plY3RUaXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvamVjdERhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2plY3RUeXBlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-display',
                templateUrl: './project-display.component.html',
                styleUrls: ['./project-display.component.css']
            }]
    }], function () { return [{ type: _windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"] }, { type: _projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/windows31/program-manager/projects/projects.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/windows31/program-manager/projects/projects.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _windows31_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../windows31.component */ "./src/app/windows31/windows31.component.ts");



class ProjectsComponent {
    constructor(projectWin31) {
        this.projectWin31 = projectWin31;
        this.minusClicked = false;
    }
    ngOnInit() {
        this.fileButton = document.getElementById('dropDownFile10');
        this.minusButton = document.getElementById('closeButton10');
        document.getElementById('dropDownFile10').style.display = 'none';
    }
    minimizeClicked() {
        this.projectWin31.alterProjectsShowing();
    }
    maximizeClicked() {
    }
    sSetSelectedNumber(input) {
        if (this.projectWin31.singleClickEnabled) {
            this.setSelectedNumber(input);
        }
    }
    setSelectedNumber(input) {
        this.projectWin31.setSelectedProjectNumber(input);
        console.log('the selected number from the display component is ' + this.projectWin31.selectedNumber);
        this.displayProjectWindow();
    }
    fileButtonClicked() {
        if (this.fileButton.style.display === 'flex') {
            this.fileButton.style.display = 'none';
        }
        else {
            this.fileButton.style.display = 'flex';
        }
    }
    displayProjectWindow() {
        const displayWindow = document.getElementById('projectDisplayWindow');
        const display = document.getElementById('projectDisplay');
        if (displayWindow.style.display === 'flex') {
            displayWindow.style.display = 'none';
        }
        else {
            display.click();
            displayWindow.style.display = 'flex';
        }
    }
    minusButtonClicked() {
        if (this.projectWin31.singleClickEnabled) {
            this.minimizeClicked();
        }
        else {
            if (this.minusClicked === false) {
                this.minusButton.style.background = '#0800ad';
                this.minusClicked = true;
            }
            else {
                this.minusButton.style.background = '#c4c7ce';
                this.minusClicked = false;
            }
        }
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 112, vars: 0, consts: [[1, "projects"], [1, "topBar10"], ["id", "closeButton10", 1, "closeButton10", 3, "click", "dblclick"], ["src", "../../../assets/Win31/Icons/minusButton.png", 3, "click", "dblclick"], ["id", "downArrow10", 3, "click"], ["id", "upArrow10", 3, "click"], ["id", "dropDownFile10", 1, "dropDownFile10"], ["id", "newButton10"], ["id", "openButton10"], ["id", "moveButton10"], ["id", "copyButton10"], ["id", "deleteButton10"], ["id", "propertiesButton10"], ["id", "runButton10"], ["id", "exitButton10"], [1, "subBar10"], ["id", "fileButton10", 3, "click"], ["id", "optionsButton10"], ["id", "windowButton10"], ["id", "helpButton10"], [1, "projectsDisplay"], ["id", "foodBlogger", 1, "projectButton", 3, "dblclick", "click"], ["src", "../../../../assets/LanguageIcons/favicon.ico"], ["id", "portfolioPage", 1, "projectButton", 3, "dblclick", "click"], ["id", "awkwardSoundboard", 1, "projectButton", 3, "dblclick", "click"], ["id", "myDeskForAndroid", 1, "projectButton"], ["src", "../../../../assets/LanguageIcons/androidLogo.png"], ["id", "desktopSmarthouse", 1, "projectButton"], ["src", "../../../../assets/LanguageIcons/javaFXlogo.png"], ["id", "salonManager", 1, "projectButton", 3, "dblclick", "click"], ["id", "classScheduler", 1, "projectButton", 3, "dblclick", "click"], ["id", "appointmentScheduler", 1, "projectButton", 3, "dblclick", "click"], ["id", "inventoryManager", 1, "projectButton", 3, "dblclick", "click"], ["id", "studentManager", 1, "projectButton", 3, "dblclick", "click"], ["id", "journalKeeper", 1, "projectButton", 3, "dblclick", "click"], ["src", "../../../../assets/LanguageIcons/Java-01.png"], ["id", "awkwardSituation", 1, "projectButton", 3, "dblclick", "click"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_2_listener() { return ctx.minusButtonClicked(); })("dblclick", function ProjectsComponent_Template_button_dblclick_2_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_img_click_3_listener() { return ctx.minusButtonClicked(); })("dblclick", function ProjectsComponent_Template_img_dblclick_3_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_6_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2BC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_8_listener() { return ctx.maximizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2BC5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ove...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "opy...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "elete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "roperties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "un...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "it Windows...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_47_listener() { return ctx.fileButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "ile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "ptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "indow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "elp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ProjectsComponent_Template_button_dblclick_64_listener() { return ctx.setSelectedNumber(1); })("click", function ProjectsComponent_Template_button_click_64_listener() { return ctx.sSetSelectedNumber(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Food Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ProjectsComponent_Template_button_dblclick_68_listener() { return ctx.setSelectedNumber(2); })("click", function ProjectsComponent_Template_button_click_68_listener() { return ctx.sSetSelectedNumber(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Portfolio Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ProjectsComponent_Template_button_dblclick_72_listener() { return ctx.setSelectedNumber(3); })("click", function ProjectsComponent_Template_button_click_72_listener() { return ctx.sSetSelectedNumber(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Awkward Sound Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "MyDesk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Desktop SmartHouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ProjectsComponent_Template_button_dblclick_84_listener() { return ctx.setSelectedNumber(4); })("click", function ProjectsComponent_Template_button_click_84_listener() { return ctx.sSetSelectedNumber(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Salon Management System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ProjectsComponent_Template_button_dblclick_88_listener() { return ctx.setSelectedNumber(5); })("click", function ProjectsComponent_Template_button_click_88_listener() { return ctx.sSetSelectedNumber(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Class Scheduler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ProjectsComponent_Template_button_dblclick_92_listener() { return ctx.setSelectedNumber(6); })("click", function ProjectsComponent_Template_button_click_92_listener() { return ctx.sSetSelectedNumber(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Appointment Scheduler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ProjectsComponent_Template_button_dblclick_96_listener() { return ctx.setSelectedNumber(7); })("click", function ProjectsComponent_Template_button_click_96_listener() { return ctx.sSetSelectedNumber(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Inventory Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ProjectsComponent_Template_button_dblclick_100_listener() { return ctx.setSelectedNumber(8); })("click", function ProjectsComponent_Template_button_click_100_listener() { return ctx.sSetSelectedNumber(8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Student Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ProjectsComponent_Template_button_dblclick_104_listener() { return ctx.setSelectedNumber(9); })("click", function ProjectsComponent_Template_button_click_104_listener() { return ctx.sSetSelectedNumber(9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Journal Keeper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ProjectsComponent_Template_button_dblclick_108_listener() { return ctx.setSelectedNumber(10); })("click", function ProjectsComponent_Template_button_click_108_listener() { return ctx.sSetSelectedNumber(10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Awkward Situation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".projects[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  box-sizing: border-box;\r\n  width: 50vw;\r\n  height: 50vh;\r\n  overflow-x: hidden;\r\n  border: 2px solid #585c5c;\r\n  margin: auto;\r\n}\r\n\r\n.topBar10[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  height: 3vh;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownMinus10[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  position: absolute;\r\n  margin-top: 3vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile10[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  position: absolute;\r\n  margin-top: 5.5vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile10[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  font-size: small;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  text-align: start;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownFile10[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  width: 99%;\r\n  color: black;\r\n}\r\n\r\n#mainButton10[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#mainButton10[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%]{\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#closeButton10[_ngcontent-%COMP%] {\r\n  \r\n  background: #c4c7ce;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#closeButton10[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 3px;\r\n}\r\n\r\n.topBar10[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.subBar10[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row nowrap;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.subBar10[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  padding: 0.3em;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.mainDisplay10[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #FAFAFA;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  justify-items: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  align-content: flex-start;\r\n}\r\n\r\n.projectsDisplay[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #FAFAFA;\r\n  display: grid;\r\n\r\n  justify-items: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-template-rows: repeat(auto-fill, 1fr);\r\n  padding: 10px;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.projectButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  height: 70%;\r\n}\r\n\r\n.projectButton[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  align-content: flex-end;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  height: 100px;\r\n  max-width: 100px;\r\n}\r\n\r\n.projectButton[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%] {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsdUJBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsdUJBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFxQjtFQUFyQiw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsdUJBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7O0VBRWIscUJBQXFCO0VBQ3JCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3dpbmRvd3MzMS9wcm9ncmFtLW1hbmFnZXIvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNTg1YzVjO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnRvcEJhcjEwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiAzdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kcm9wRG93bk1pbnVzMTAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDN2aDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmRyb3BEb3duRmlsZTEwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiA1LjV2aDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmRyb3BEb3duRmlsZTEwIGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRyb3BEb3duRmlsZTEwIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuaHIge1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogOTklO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI21haW5CdXR0b24xMCB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbiNtYWluQnV0dG9uMTA6Zm9jdXMgbGFiZWx7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuI2Nsb3NlQnV0dG9uMTAge1xyXG4gIC8qYmFja2dyb3VuZDogI2M3YzhjZDsqL1xyXG4gIGJhY2tncm91bmQ6ICNjNGM3Y2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jY2xvc2VCdXR0b24xMCBpbWd7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi50b3BCYXIxMCBsYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMwODAwYWQ7XHJcbiAgY29sb3I6ICNGQUZBRkE7XHJcbn1cclxuXHJcbi5zdWJCYXIxMCB7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5zdWJCYXIxMCBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgcGFkZGluZzogMC4zZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5tYWluRGlzcGxheTEwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnByb2plY3RzRGlzcGxheSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuXHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDFmcik7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9qZWN0QnV0dG9uIGltZyB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBoZWlnaHQ6IDcwJTtcclxufVxyXG5cclxuLnByb2plY3RCdXR0b24ge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0QnV0dG9uOmZvY3VzIGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css']
            }]
    }], function () { return [{ type: _windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"] }]; }, null); })();


/***/ }),

/***/ "./src/app/windows31/program-manager/resume/education/education.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/windows31/program-manager/resume/education/education.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _windows31_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../windows31.component */ "./src/app/windows31/windows31.component.ts");



class EducationComponent {
    constructor(educationWin31) {
        this.educationWin31 = educationWin31;
    }
    ngOnInit() {
        this.fileButton = document.getElementById('fileButton11');
        this.fileButtonClick = false;
        this.minusButton = document.getElementById('closeButton11');
        this.minusButtonClick = false;
        this.dropDownFile = document.getElementById('dropDownFile11');
        document.getElementById('dropDownFile11').style.display = 'none';
    }
    minusButtonClicked() {
        if (this.educationWin31.singleClickEnabled) {
            this.minimizeClicked();
        }
        else {
            if (this.minusButtonClick === false) {
                this.minusButton.style.background = '#0800ad';
                this.minusButtonClick = true;
            }
            else {
                this.minusButton.style.background = '#c4c7ce';
                this.minusButtonClick = false;
            }
        }
    }
    minimizeClicked() {
        this.educationWin31.alterEducationShowing();
    }
    maximizeClicked() {
    }
    fileButtonClicked() {
        if (this.fileButtonClick) {
            this.dropDownFile.style.display = 'none';
            this.fileButton.style.background = '#FAFAFA';
            this.fileButton.style.color = 'BLACK';
            this.fileButtonClick = false;
        }
        else {
            this.fileButton.style.background = '#0800ad';
            this.fileButton.style.color = '#c4c7ce';
            this.dropDownFile.style.display = 'flex';
            this.fileButtonClick = true;
        }
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"])); };
EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 99, vars: 0, consts: [[1, "education"], [1, "topBar11"], ["id", "closeButton11", 1, "closeButton11", 3, "click", "dblclick"], ["src", "../../../assets/Win31/Icons/minusButton.png"], ["id", "downArrow11", 3, "click"], ["id", "upArrow11", 3, "click"], ["id", "dropDownFile11", 1, "dropDownFile11"], ["id", "newButton11"], ["id", "openButton11"], ["id", "moveButton11"], ["id", "copyButton11"], ["id", "deleteButton11"], ["id", "propertiesButton11"], ["id", "runButton11"], ["id", "exitButton11"], [1, "subBar11"], ["id", "fileButton11", 3, "click"], ["id", "optionsButton11"], ["id", "windowButton11"], ["id", "helpButton11"], [1, "educationDisplay"], [1, "educationStuffs"], [1, "firstColl"], [1, "secondColl"], [1, "certificationStuffs"], [1, "cert1"], [1, "cert2"], [1, "cert3"], [1, "cert4"], [1, "cert5"], [1, "cert6"], [1, "cert7"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_Template_button_click_2_listener() { return ctx.minusButtonClicked(); })("dblclick", function EducationComponent_Template_button_dblclick_2_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_Template_button_click_6_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2BC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_Template_button_click_8_listener() { return ctx.maximizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2BC5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ove...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "opy...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "elete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "roperties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "un...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "it Windows...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_Template_button_click_47_listener() { return ctx.fileButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "ile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "ptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "indow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "elp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Bachelor of Science in Software Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Sep 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Western Governors University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Associate of Science in Computer Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Aug 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Brookhaven Community College");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Oracle Database SQL Certified Associate | 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Project+ | 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "CIW Site Development Associate | 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "User Interface Designer | 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "A+ | 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Advanced HTML5 & CSS3 Specialist | 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "ITIL Foundation (2011) | 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".education[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  box-sizing: border-box;\r\n  width: 40vw;\r\n  height: 50vh;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n  border: 2px solid #585c5c;\r\n  margin-left: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.topBar11[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  height: 3vh;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownMinus11[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: start;\r\n  -webkit-box-align: start;\r\n          align-items: start;\r\n  position: absolute;\r\n  margin-top: 3vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile11[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: start;\r\n  -webkit-box-align: start;\r\n          align-items: start;\r\n  position: absolute;\r\n  margin-top: 5.9vh;\r\n  border: 1px solid black;\r\n  width: 20vw;\r\n}\r\n\r\n.dropDownFile11[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  font-size: small;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  text-align: start;\r\n  padding: 2px;\r\n  padding-left: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownFile11[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  width: 99%;\r\n  color: black;\r\n}\r\n\r\n#mainButton11[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#mainButton11[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%]{\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#closeButton11[_ngcontent-%COMP%] {\r\n  \r\n  background: #c4c7ce;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#closeButton11[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 3px;\r\n}\r\n\r\n.topBar11[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.subBar11[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row nowrap;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.subBar11[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  padding: 0.3em;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.mainDisplay11[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #FAFAFA;\r\n}\r\n\r\n.educationDisplay[_ngcontent-%COMP%] {\r\n  overflow-y: scroll;\r\n  margin: 0;\r\n  height: 100%;\r\n  width: auto;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  align-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  padding: 10px;\r\n  background: url('skiFree3.gif');\r\n  background-size: cover;\r\n}\r\n\r\n.educationStuffs[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.64);\r\n  border-radius: 20px;\r\n  padding: 5px;\r\n  margin: 10%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  justify-items: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  align-content: center;\r\n  width: auto;\r\n  font-size: small;\r\n}\r\n\r\n.certificationStuffs[_ngcontent-%COMP%] {\r\n  background: rgba(255, 255, 255, 0.64);\r\n  border-radius: 20px;\r\n  padding: 5px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  width: auto;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: column nowrap;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  align-content: center;\r\n  font-size: small;\r\n}\r\n\r\n.firstColl[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.secondColl[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9yZXN1bWUvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQXFCO0VBQXJCLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsK0JBQWtFO0VBQ2xFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsV0FBVztFQUNYLDRCQUF3QjtFQUF4Qiw2QkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9yZXN1bWUvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkdWNhdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzU4NWM1YztcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udG9wQmFyMTEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDN2aDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRyb3BEb3duTWludXMxMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5kcm9wRG93bkZpbGUxMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiA1Ljl2aDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB3aWR0aDogMjB2dztcclxufVxyXG5cclxuLmRyb3BEb3duRmlsZTExIGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZHJvcERvd25GaWxlMTEgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG5ociB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiA5OSU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jbWFpbkJ1dHRvbjExIHtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuI21haW5CdXR0b24xMTpmb2N1cyBsYWJlbHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4jY2xvc2VCdXR0b24xMSB7XHJcbiAgLypiYWNrZ3JvdW5kOiAjYzdjOGNkOyovXHJcbiAgYmFja2dyb3VuZDogI2M0YzdjZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNjbG9zZUJ1dHRvbjExIGltZ3tcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDNweDtcclxufVxyXG5cclxuLnRvcEJhcjExIGxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuLnN1YkJhcjExIHtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnN1YkJhcjExIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBwYWRkaW5nOiAwLjNlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1haW5EaXNwbGF5MTEge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG59XHJcblxyXG4uZWR1Y2F0aW9uRGlzcGxheSB7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL1dpbjMxL0ltYWdlcy9za2lGcmVlMy5naWZcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmVkdWNhdGlvblN0dWZmcyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDEwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5jZXJ0aWZpY2F0aW9uU3R1ZmZzIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5maXJzdENvbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY29uZENvbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-education',
                templateUrl: './education.component.html',
                styleUrls: ['./education.component.css']
            }]
    }], function () { return [{ type: _windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"] }]; }, null); })();


/***/ }),

/***/ "./src/app/windows31/program-manager/resume/graphics/graphics.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/windows31/program-manager/resume/graphics/graphics.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GraphicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicsComponent", function() { return GraphicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _windows31_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../windows31.component */ "./src/app/windows31/windows31.component.ts");



class GraphicsComponent {
    constructor(graphicsWin31) {
        this.graphicsWin31 = graphicsWin31;
    }
    ngOnInit() {
        this.fileButton = document.getElementById('fileButton9');
        this.fileButtonClick = false;
        this.minusButton = document.getElementById('closeButton9');
        this.minusButtonClick = false;
        this.dropDownFile = document.getElementById('dropDownFile9');
        document.getElementById('dropDownFile9').style.display = 'none';
    }
    fileButtonClicked() {
        if (this.fileButtonClick) {
            this.dropDownFile.style.display = 'none';
            this.fileButtonClick = false;
        }
        else {
            this.dropDownFile.style.display = 'flex';
            this.fileButtonClick = true;
        }
    }
    minimizeClicked() {
        this.graphicsWin31.alterGraphicsShowing();
    }
    minusButtonClicked() {
        if (this.graphicsWin31.singleClickEnabled) {
            this.minimizeClicked();
        }
        else {
            if (this.minusButtonClick === false) {
                this.minusButton.style.background = '#0800ad';
                this.minusButtonClick = true;
            }
            else {
                this.minusButton.style.background = '#c4c7ce';
                this.minusButtonClick = false;
            }
        }
    }
}
GraphicsComponent.ɵfac = function GraphicsComponent_Factory(t) { return new (t || GraphicsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"])); };
GraphicsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraphicsComponent, selectors: [["app-graphics"]], decls: 76, vars: 0, consts: [[1, "graphics"], [1, "topBar9"], ["id", "closeButton9", 1, "closeButton9", 3, "click", "dblclick"], ["src", "../../../assets/Win31/Icons/minusButton.png"], ["id", "downArrow9", 3, "click"], ["id", "upArrow9"], ["id", "dropDownFile9", 1, "dropDownFile9"], ["id", "newButton9"], ["id", "openButton9"], ["id", "moveButton9"], ["id", "copyButton9"], [1, "subBar9"], ["id", "fileButton9", 3, "click"], ["id", "optionsButton9"], ["id", "windowButton9"], ["id", "helpButton9"], [1, "graphicsDisplay"], ["id", "deckDisplay"], ["src", "../../../../../assets/Win31/Images/deckAlmost.jpg"], ["src", "../../../../../assets/Win31/Images/5ofClubs.png", "id", "club5"], ["id", "levelOfExp"], [1, "columnsContainer"], [1, "zeroCol"], [1, "firstCol"], ["src", "../../../../../assets/Win31/Images/6ofSpades.png"], [1, "secondCol"], ["src", "../../../../../assets/Win31/Images/7ofHearts.png"], [1, "thirdCol"], ["src", "../../../../../assets/Win31/Images/5ofSpades.png"], [1, "fourthCol"], ["src", "../../../../../assets/Win31/Images/6ofDiamonds.png"], [1, "fifthCol"], ["src", "../../../../../assets/Win31/Images/5ofClubs.png"], [1, "sixthCol"], ["src", "../../../../../assets/Win31/Images/5ofHearts.png"]], template: function GraphicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GraphicsComponent_Template_button_click_2_listener() { return ctx.minusButtonClicked(); })("dblclick", function GraphicsComponent_Template_button_dblclick_2_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Graphics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GraphicsComponent_Template_button_click_6_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2BC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2BC5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ove...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "opy...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GraphicsComponent_Template_button_click_28_listener() { return ctx.fileButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "ptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "indow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "elp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "LEVEL OF EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Adobe Photoshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "GIMP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Blender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Inkscape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Figma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Adobe XD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".graphics[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  box-sizing: border-box;\r\n  width: 70vw;\r\n  height: 80vh;\r\n  max-width: 700px;\r\n  overflow-x: hidden;\r\n  border: 2px solid #585c5c;\r\n  margin-left: 10px;\r\n  margin-top: 10px;\r\n  overflow-y: hidden;\r\n\r\n}\r\n\r\n.topBar9[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  height: 3vh;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownMinus9[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  position: absolute;\r\n  margin-top: 3vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile9[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  position: absolute;\r\n  margin-top: 5.9vh;\r\n  border: 1px solid black;\r\n  width: 20vw;\r\n}\r\n\r\n.dropDownFile9[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  font-size: small;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  text-align: start;\r\n  padding: 2px;\r\n  padding-left: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownFile9[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  width: 99%;\r\n  color: black;\r\n}\r\n\r\n#mainButton9[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#mainButton9[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%]{\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#closeButton9[_ngcontent-%COMP%] {\r\n  \r\n  background: #c4c7ce;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#closeButton9[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 3px;\r\n}\r\n\r\n.topBar9[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.subBar9[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row nowrap;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.subBar9[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  padding: 0.3em;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.mainDisplay9[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #FAFAFA;\r\n}\r\n\r\n.graphicsDisplay[_ngcontent-%COMP%] {\r\n  background: #00a956;\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\n\r\n#levelOfExp[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n#deckDisplay[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  height: 15%;\r\n  width: 100%;\r\n}\r\n\r\n#club5[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: auto;\r\n}\r\n\r\n#deckDisplay[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  padding: 2px;\r\n}\r\n\r\n.columnsContainer[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  text-align: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n  align-content: center;\r\n  justify-items: center;\r\n  width: 100%;\r\n  height: 10vw;\r\n}\r\n\r\n.columnsContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  width: auto;\r\n  max-width: 100px;\r\n}\r\n\r\n.zeroCol[_ngcontent-%COMP%] {\r\n  width: 3%;\r\n  margin: 0;\r\n}\r\n\r\n.softwareLabel[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.firstCol[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 15%;\r\n}\r\n\r\n.secondCol[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 15%;\r\n}\r\n\r\n.thirdCol[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 15%;\r\n}\r\n\r\n.fourthCol[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 15%;\r\n}\r\n\r\n.fifthCol[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 15%;\r\n}\r\n\r\n.sixthCol[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 15%;\r\n}\r\n\r\n.firstCol[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: whitesmoke;\r\n  height: available;\r\n  -webkit-writing-mode: vertical-rl;\r\n      -ms-writing-mode: tb-rl;\r\n          writing-mode: vertical-rl;\r\n  font-size: xx-large;\r\n}\r\n\r\n.secondCol[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: whitesmoke;\r\n  height: available;\r\n  -webkit-writing-mode: vertical-rl;\r\n      -ms-writing-mode: tb-rl;\r\n          writing-mode: vertical-rl;\r\n  font-size: xx-large;\r\n}\r\n\r\n.thirdCol[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: whitesmoke;\r\n  height: available;\r\n  -webkit-writing-mode: vertical-rl;\r\n      -ms-writing-mode: tb-rl;\r\n          writing-mode: vertical-rl;\r\n  font-size: xx-large;\r\n}\r\n\r\n.fourthCol[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: whitesmoke;\r\n  height: available;\r\n  -webkit-writing-mode: vertical-rl;\r\n      -ms-writing-mode: tb-rl;\r\n          writing-mode: vertical-rl;\r\n  font-size: xx-large;\r\n}\r\n\r\n.fifthCol[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: whitesmoke;\r\n  height: available;\r\n  -webkit-writing-mode: vertical-rl;\r\n      -ms-writing-mode: tb-rl;\r\n          writing-mode: vertical-rl;\r\n  font-size: xx-large;\r\n}\r\n\r\n.sixthCol[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: whitesmoke;\r\n  height: available;\r\n  -webkit-writing-mode: vertical-rl;\r\n      -ms-writing-mode: tb-rl;\r\n          writing-mode: vertical-rl;\r\n  font-size: xx-large;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9yZXN1bWUvZ3JhcGhpY3MvZ3JhcGhpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1QkFBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1QkFBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQXFCO0VBQXJCLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDhCQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlDQUF5QjtNQUF6Qix1QkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUNBQXlCO01BQXpCLHVCQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQ0FBeUI7TUFBekIsdUJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlDQUF5QjtNQUF6Qix1QkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUNBQXlCO01BQXpCLHVCQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQ0FBeUI7TUFBekIsdUJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC93aW5kb3dzMzEvcHJvZ3JhbS1tYW5hZ2VyL3Jlc3VtZS9ncmFwaGljcy9ncmFwaGljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXBoaWNzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogNzB2dztcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzU4NWM1YztcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuXHJcbn1cclxuXHJcbi50b3BCYXI5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiAzdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kcm9wRG93bk1pbnVzOSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZHJvcERvd25GaWxlOSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogNS45dmg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IDIwdnc7XHJcbn1cclxuXHJcbi5kcm9wRG93bkZpbGU5IGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZHJvcERvd25GaWxlOSBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwODAwYWQ7XHJcbiAgY29sb3I6ICNGQUZBRkE7XHJcbn1cclxuXHJcbmhyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDk5JTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNtYWluQnV0dG9uOSB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbiNtYWluQnV0dG9uOTpmb2N1cyBsYWJlbHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4jY2xvc2VCdXR0b245IHtcclxuICAvKmJhY2tncm91bmQ6ICNjN2M4Y2Q7Ki9cclxuICBiYWNrZ3JvdW5kOiAjYzRjN2NlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2Nsb3NlQnV0dG9uOSBpbWd7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi50b3BCYXI5IGxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuLnN1YkJhcjkge1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uc3ViQmFyOSBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgcGFkZGluZzogMC4zZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5tYWluRGlzcGxheTkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG59XHJcblxyXG4uZ3JhcGhpY3NEaXNwbGF5IHtcclxuICBiYWNrZ3JvdW5kOiAjMDBhOTU2O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiNsZXZlbE9mRXhwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNkZWNrRGlzcGxheSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDE1JTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2NsdWI1IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbiNkZWNrRGlzcGxheSBpbWcge1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuLmNvbHVtbnNDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwdnc7XHJcbn1cclxuXHJcbi5jb2x1bW5zQ29udGFpbmVyIGltZyB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi56ZXJvQ29sIHtcclxuICB3aWR0aDogMyU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc29mdHdhcmVMYWJlbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4uZmlyc3RDb2wge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbi5zZWNvbmRDb2wge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbi50aGlyZENvbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuLmZvdXJ0aENvbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuLmZpZnRoQ29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTUlO1xyXG59XHJcblxyXG4uc2l4dGhDb2wge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbi5maXJzdENvbCBsYWJlbCB7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgaGVpZ2h0OiBhdmFpbGFibGU7XHJcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG59XHJcblxyXG4uc2Vjb25kQ29sIGxhYmVsIHtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBoZWlnaHQ6IGF2YWlsYWJsZTtcclxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbi50aGlyZENvbCBsYWJlbCB7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgaGVpZ2h0OiBhdmFpbGFibGU7XHJcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG59XHJcblxyXG4uZm91cnRoQ29sIGxhYmVsIHtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBoZWlnaHQ6IGF2YWlsYWJsZTtcclxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5maWZ0aENvbCBsYWJlbCB7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgaGVpZ2h0OiBhdmFpbGFibGU7XHJcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG59XHJcblxyXG4uc2l4dGhDb2wgbGFiZWwge1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGhlaWdodDogYXZhaWxhYmxlO1xyXG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphicsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-graphics',
                templateUrl: './graphics.component.html',
                styleUrls: ['./graphics.component.css']
            }]
    }], function () { return [{ type: _windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"] }]; }, null); })();


/***/ }),

/***/ "./src/app/windows31/program-manager/resume/object-oriented/object-oriented.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/windows31/program-manager/resume/object-oriented/object-oriented.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ObjectOrientedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectOrientedComponent", function() { return ObjectOrientedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _windows31_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../windows31.component */ "./src/app/windows31/windows31.component.ts");



class ObjectOrientedComponent {
    constructor(oOWin31) {
        this.oOWin31 = oOWin31;
        this.seven = 'black';
        this.six = 'ocean-green';
        this.five = 'dark-maroon';
        this.fontUsed = 'Consolas, \'Liberation Mono\', Menlo, Courier, monospace';
        this.objectKnowledge = [
            { name: 'Android', experience: 6 },
            { name: 'Java', experience: 7 },
            { name: 'C#', experience: 6 },
            { name: 'C++', experience: 5 },
            { name: 'Kotlin', experience: 7 }
        ];
    }
    ngOnInit() {
        this.fileButton = document.getElementById('fileButton8');
        this.fileButtonClick = false;
        this.minusButton = document.getElementById('closeButton8');
        this.minusButtonClick = false;
        this.dropDownFile = document.getElementById('dropDownFile8');
        document.getElementById('dropDownFile8').style.display = 'none';
        this.spinTheWheel();
    }
    minimizeClicked() {
        this.oOWin31.alterObjectOrientedShowing();
    }
    minusButtonClicked() {
        if (this.oOWin31.singleClickEnabled) {
            this.minimizeClicked();
        }
        else {
            if (this.minusButtonClick === false) {
                this.minusButton.style.background = '#0800ad';
                this.minusButtonClick = true;
            }
            else {
                this.minusButton.style.background = '#c4c7ce';
                this.minusButtonClick = false;
            }
        }
    }
    fileButtonClicked() {
        if (this.fileButtonClick) {
            this.dropDownFile.style.display = 'none';
            this.fileButtonClick = false;
        }
        else {
            this.dropDownFile.style.display = 'flex';
            this.fileButtonClick = true;
        }
    }
    spinTheWheel() {
    }
}
ObjectOrientedComponent.ɵfac = function ObjectOrientedComponent_Factory(t) { return new (t || ObjectOrientedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"])); };
ObjectOrientedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ObjectOrientedComponent, selectors: [["app-object-oriented"]], decls: 70, vars: 0, consts: [[1, "objectOriented"], [1, "topBar8"], ["id", "closeButton8", 1, "closeButton8", 3, "click", "dblclick"], ["src", "../../../assets/Win31/Icons/minusButton.png"], ["id", "downArrow8", 3, "click"], ["id", "upArrow8"], ["id", "dropDownFile8", 1, "dropDownFile8"], ["id", "newButton8"], ["id", "openButton8"], ["id", "moveButton8"], ["id", "copyButton8"], [1, "subBar8"], ["id", "fileButton8", 3, "click"], ["id", "optionsButton8"], ["id", "windowButton8"], ["id", "helpButton8"], ["id", "oODisplay", 1, "oODisplay"], [1, "skill"]], template: function ObjectOrientedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObjectOrientedComponent_Template_button_click_2_listener() { return ctx.minusButtonClicked(); })("dblclick", function ObjectOrientedComponent_Template_button_dblclick_2_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Object-Oriented Programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObjectOrientedComponent_Template_button_click_6_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2BC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2BC5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ove...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "opy...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObjectOrientedComponent_Template_button_click_28_listener() { return ctx.fileButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "ptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "indow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "elp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "JAVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "ANDROID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "C++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "KOTLIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".objectOriented[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  width: 40vw;\r\n  height: 40vh;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n  border: 2px solid #585c5c;\r\n  margin-left: 10px;\r\n  margin-top: 10px;\r\n  max-height: 700px;\r\n  max-width: 600px;\r\n}\r\n\r\n.topBar8[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  height: 3vh;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownMinus8[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: start;\r\n  -webkit-box-align: start;\r\n          align-items: start;\r\n  position: absolute;\r\n  margin-top: 3vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile8[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: start;\r\n  -webkit-box-align: start;\r\n          align-items: start;\r\n  position: absolute;\r\n  margin-top: 5.9vh;\r\n  border: 1px solid black;\r\n  width: 20vw;\r\n}\r\n\r\n.dropDownFile8[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  font-size: small;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  text-align: start;\r\n  padding: 2px;\r\n  padding-left: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownFile8[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  width: 99%;\r\n  color: black;\r\n}\r\n\r\n#mainButton8[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#mainButton8[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%]{\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#closeButton8[_ngcontent-%COMP%] {\r\n  \r\n  background: #c4c7ce;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#closeButton8[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 3px;\r\n}\r\n\r\n.topBar8[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.subBar8[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row nowrap;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.subBar8[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  padding: 0.3em;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.oODisplay[_ngcontent-%COMP%] {\r\n  background-image: url('jezzball.gif');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  align-content: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.skill[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  background: rgba(255, 255, 255, 0.73);\r\n  font-size: small;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9yZXN1bWUvb2JqZWN0LW9yaWVudGVkL29iamVjdC1vcmllbnRlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsdUJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBa0I7VUFBbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsdUJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBa0I7VUFBbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFxQjtFQUFyQiw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFDQUF3RTtFQUN4RSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUdBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFDQUFxQztFQUNyQyxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC93aW5kb3dzMzEvcHJvZ3JhbS1tYW5hZ2VyL3Jlc3VtZS9vYmplY3Qtb3JpZW50ZWQvb2JqZWN0LW9yaWVudGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub2JqZWN0T3JpZW50ZWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNDB2dztcclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNTg1YzVjO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWF4LWhlaWdodDogNzAwcHg7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuLnRvcEJhcjgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDN2aDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRyb3BEb3duTWludXM4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDN2aDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmRyb3BEb3duRmlsZTgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogNS45dmg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IDIwdnc7XHJcbn1cclxuXHJcbi5kcm9wRG93bkZpbGU4IGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZHJvcERvd25GaWxlOCBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwODAwYWQ7XHJcbiAgY29sb3I6ICNGQUZBRkE7XHJcbn1cclxuXHJcbmhyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDk5JTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNtYWluQnV0dG9uOCB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbiNtYWluQnV0dG9uODpmb2N1cyBsYWJlbHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4jY2xvc2VCdXR0b244IHtcclxuICAvKmJhY2tncm91bmQ6ICNjN2M4Y2Q7Ki9cclxuICBiYWNrZ3JvdW5kOiAjYzRjN2NlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2Nsb3NlQnV0dG9uOCBpbWd7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi50b3BCYXI4IGxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuLnN1YkJhcjgge1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uc3ViQmFyOCBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgcGFkZGluZzogMC4zZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5vT0Rpc3BsYXkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9XaW4zMS9JbWFnZXMvamV6emJhbGwuZ2lmXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcblxyXG4uc2tpbGwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjczKTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjectOrientedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-object-oriented',
                templateUrl: './object-oriented.component.html',
                styleUrls: [
                    './object-oriented.component.css'
                ]
            }]
    }], function () { return [{ type: _windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"] }]; }, null); })();


/***/ }),

/***/ "./src/app/windows31/program-manager/resume/operating-systems/operating-systems.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/windows31/program-manager/resume/operating-systems/operating-systems.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: OperatingSystemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatingSystemsComponent", function() { return OperatingSystemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _windows31_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../windows31.component */ "./src/app/windows31/windows31.component.ts");



class OperatingSystemsComponent {
    constructor(osWin31) {
        this.osWin31 = osWin31;
        this.operatingSystemsKnowledge = [
            { name: 'Windows (XP, 7, 8, 10',
                experience: 9 },
            { name: 'Linux', experience: 7 },
            { name: 'MacOS', experience: 7 }
        ];
    }
    ngOnInit() {
        this.fileButton = document.getElementById('fileButton6');
        this.fileButtonClick = false;
        this.minusButton = document.getElementById('closeButton6');
        this.minusButtonClick = false;
        this.dropDownFile = document.getElementById('dropDownFile6');
        document.getElementById('dropDownFile6').style.display = 'none';
    }
    minimizeClicked() {
        this.osWin31.alterOSWindowShowing();
    }
    fileButtonClicked() {
        if (this.fileButtonClick) {
            this.dropDownFile.style.display = 'none';
            this.fileButtonClick = false;
        }
        else {
            this.dropDownFile.style.display = 'flex';
            this.fileButtonClick = true;
        }
    }
    minusButtonClicked() {
        if (this.osWin31.singleClickEnabled) {
            this.minimizeClicked();
        }
        else {
            if (this.minusButtonClick === false) {
                this.minusButton.style.background = '#0800ad';
                this.minusButtonClick = true;
            }
            else {
                this.minusButton.style.background = '#c4c7ce';
                this.minusButtonClick = false;
            }
        }
    }
}
OperatingSystemsComponent.ɵfac = function OperatingSystemsComponent_Factory(t) { return new (t || OperatingSystemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"])); };
OperatingSystemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OperatingSystemsComponent, selectors: [["app-operating-systems"]], decls: 46, vars: 0, consts: [[1, "operatingSystems"], [1, "topBar6"], ["id", "closeButton6", 1, "closeButton6", 3, "click", "dblclick"], ["src", "../../../assets/Win31/Icons/minusButton.png"], ["id", "downArrow6", 3, "click"], ["id", "upArrow6"], ["id", "dropDownFile6", 1, "dropDownFile6"], ["id", "newButton6"], ["id", "openButton6"], ["id", "moveButton6"], ["id", "copyButton6"], [1, "subBar6"], ["id", "fileButton6", 3, "click"], ["id", "optionsButton6"], ["id", "windowButton6"], ["id", "helpButton6"], ["id", "osDisplay", 1, "osDisplay"], ["src", "../../../../../assets/Win31/Images/Minesweeper/osMineSkill.png"]], template: function OperatingSystemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OperatingSystemsComponent_Template_button_click_2_listener() { return ctx.minusButtonClicked(); })("dblclick", function OperatingSystemsComponent_Template_button_dblclick_2_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Operating Systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OperatingSystemsComponent_Template_button_click_6_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2BC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2BC5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ove...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "opy...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OperatingSystemsComponent_Template_button_click_28_listener() { return ctx.fileButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "ptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "indow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "elp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".operatingSystems[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  width: 40vw;\r\n  height: 50vh;\r\n  max-height: 700px;\r\n  max-width: 600px;\r\n  overflow-x: hidden;\r\n  border: 2px solid #585c5c;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.topBar6[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  height: 3vh;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownMinus6[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: start;\r\n  -webkit-box-align: start;\r\n          align-items: start;\r\n  position: absolute;\r\n  margin-top: 3vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile6[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: start;\r\n  -webkit-box-align: start;\r\n          align-items: start;\r\n  position: absolute;\r\n  margin-top: 5.9vh;\r\n  border: 1px solid black;\r\n  width: 20vw;\r\n}\r\n\r\n.dropDownFile6[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  font-size: small;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  text-align: start;\r\n  padding: 2px;\r\n  padding-left: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownFile6[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  width: 99%;\r\n  color: black;\r\n}\r\n\r\n#mainButton6[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#mainButton6[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%]{\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#closeButton6[_ngcontent-%COMP%] {\r\n  \r\n  background: #c4c7ce;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#closeButton6[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 3px;\r\n}\r\n\r\n.topBar6[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.subBar6[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row nowrap;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.subBar6[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  padding: 0.3em;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.mainDisplay6[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #FAFAFA;\r\n}\r\n\r\n.osDisplay[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  height: 100%;\r\n  width: 99%;\r\n}\r\n\r\n.osDisplay[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 90%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9yZXN1bWUvb3BlcmF0aW5nLXN5c3RlbXMvb3BlcmF0aW5nLXN5c3RlbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQXFCO0VBQXJCLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3dpbmRvd3MzMS9wcm9ncmFtLW1hbmFnZXIvcmVzdW1lL29wZXJhdGluZy1zeXN0ZW1zL29wZXJhdGluZy1zeXN0ZW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3BlcmF0aW5nU3lzdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiA0MHZ3O1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBtYXgtaGVpZ2h0OiA3MDBweDtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNTg1YzVjO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLnRvcEJhcjYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDN2aDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRyb3BEb3duTWludXM2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDN2aDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmRyb3BEb3duRmlsZTYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogNS45dmg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IDIwdnc7XHJcbn1cclxuXHJcbi5kcm9wRG93bkZpbGU2IGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZHJvcERvd25GaWxlNiBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwODAwYWQ7XHJcbiAgY29sb3I6ICNGQUZBRkE7XHJcbn1cclxuXHJcbmhyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDk5JTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNtYWluQnV0dG9uNiB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbiNtYWluQnV0dG9uNjpmb2N1cyBsYWJlbHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4jY2xvc2VCdXR0b242IHtcclxuICAvKmJhY2tncm91bmQ6ICNjN2M4Y2Q7Ki9cclxuICBiYWNrZ3JvdW5kOiAjYzRjN2NlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2Nsb3NlQnV0dG9uNiBpbWd7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi50b3BCYXI2IGxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuLnN1YkJhcjYge1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uc3ViQmFyNiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgcGFkZGluZzogMC4zZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5tYWluRGlzcGxheTYge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG59XHJcblxyXG4ub3NEaXNwbGF5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA5OSU7XHJcbn1cclxuXHJcbi5vc0Rpc3BsYXkgaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOTAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperatingSystemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-operating-systems',
                templateUrl: './operating-systems.component.html',
                styleUrls: ['./operating-systems.component.css']
            }]
    }], function () { return [{ type: _windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"] }]; }, null); })();


/***/ }),

/***/ "./src/app/windows31/program-manager/resume/resume.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/windows31/program-manager/resume/resume.component.ts ***!
  \**********************************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _windows31_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../windows31.component */ "./src/app/windows31/windows31.component.ts");



class ResumeComponent {
    constructor(resumeWin31) {
        this.resumeWin31 = resumeWin31;
        this.minusClicked = false;
    }
    ngOnInit() {
        this.fileButton = document.getElementById('dropDownFile5');
        this.minusButton = document.getElementById('closeButton5');
        document.getElementById('dropDownFile5').style.display = 'none';
    }
    minimizeClicked() {
        this.resumeWin31.alterResumeWindowShowing();
    }
    fileButtonClicked() {
        if (this.fileButton.style.display === 'flex') {
            this.fileButton.style.display = 'none';
        }
        else {
            this.fileButton.style.display = 'flex';
        }
    }
    minusButtonClicked() {
        if (this.resumeWin31.singleClickEnabled) {
            this.minimizeClicked();
        }
        else {
            if (this.minusClicked === false) {
                this.minusButton.style.background = '#0800ad';
                this.minusClicked = true;
            }
            else {
                this.minusButton.style.background = '#c4c7ce';
                this.minusClicked = false;
            }
        }
    }
    operatingSystemsButtonClicked() {
        this.resumeWin31.alterOSWindowShowing();
    }
    webDevButtonClicked() {
        this.resumeWin31.alterWebDevShowing();
    }
    objectOrientedClicked() {
        this.resumeWin31.alterObjectOrientedShowing();
    }
    graphicsButtonClicked() {
        this.resumeWin31.alterGraphicsShowing();
    }
    educationClicked() {
        this.resumeWin31.alterEducationShowing();
    }
    // Single click methods
    sOperatingSystemsButtonClicked() {
        if (this.resumeWin31.singleClickEnabled) {
            this.operatingSystemsButtonClicked();
        }
    }
    sWebDevButtonClicked() {
        if (this.resumeWin31.singleClickEnabled) {
            this.webDevButtonClicked();
        }
    }
    sObjectOrientedClicked() {
        if (this.resumeWin31.singleClickEnabled) {
            this.objectOrientedClicked();
        }
    }
    sGraphicsButtonClicked() {
        if (this.resumeWin31.singleClickEnabled) {
            this.graphicsButtonClicked();
        }
    }
    sEducationButtonClicked() {
        if (this.resumeWin31.singleClickEnabled) {
            this.educationClicked();
        }
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"])); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 84, vars: 0, consts: [[1, "resumePage"], [1, "topBar5"], ["id", "closeButton5", 1, "closeButton5", 3, "click", "dblclick"], ["src", "../../../assets/Win31/Icons/minusButton.png"], ["id", "downArrow5", 3, "click"], ["id", "upArrow5"], ["id", "dropDownFile5", 1, "dropDownFile5"], ["id", "newButton5"], ["id", "openButton5"], ["id", "moveButton5"], ["id", "copyButton5"], ["id", "deleteButton5"], ["id", "propertiesButton5"], ["id", "runButton5"], ["id", "exitButton5"], [1, "subBar5"], ["id", "fileButton5", 3, "click"], ["id", "optionsButton5"], ["id", "windowButton5"], ["id", "helpButton5"], ["id", "resumeDisplay", 1, "resumeDisplay"], ["id", "operatingSystems", 3, "dblclick", "click"], ["src", "../../../../assets/Win31/Icons/mineSweeper.jpg"], ["id", "webDevelop", 3, "dblclick", "click"], ["src", "../../../../assets/Win31/Icons/objectOrientedAlmost.jpg"], ["id", "graphicsDesign", 3, "dblclick", "click"], ["src", "../../../../assets/Win31/Icons/SOL001.PNG"], ["id", "objectOriented", 3, "dblclick", "click"], ["src", "../../../../assets/Win31/Icons/MSHEA001.PNG"], ["id", "education", 3, "dblclick", "click"], ["src", "../../../../assets/Win31/Icons/WINSE006.PNG"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeComponent_Template_button_click_2_listener() { return ctx.minusButtonClicked(); })("dblclick", function ResumeComponent_Template_button_dblclick_2_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Resum\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeComponent_Template_button_click_6_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2BC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2BC5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ove...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "opy...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "elete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "roperties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "un...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "it Windows...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeComponent_Template_button_click_47_listener() { return ctx.fileButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "ile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "ptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "indow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "elp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ResumeComponent_Template_button_dblclick_64_listener() { return ctx.operatingSystemsButtonClicked(); })("click", function ResumeComponent_Template_button_click_64_listener() { return ctx.sOperatingSystemsButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Operating Systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ResumeComponent_Template_button_dblclick_68_listener() { return ctx.webDevButtonClicked(); })("click", function ResumeComponent_Template_button_click_68_listener() { return ctx.sWebDevButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ResumeComponent_Template_button_dblclick_72_listener() { return ctx.graphicsButtonClicked(); })("click", function ResumeComponent_Template_button_click_72_listener() { return ctx.sGraphicsButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Graphics and Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ResumeComponent_Template_button_dblclick_76_listener() { return ctx.objectOrientedClicked(); })("click", function ResumeComponent_Template_button_click_76_listener() { return ctx.sObjectOrientedClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Object-Oriented Programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ResumeComponent_Template_button_dblclick_80_listener() { return ctx.educationClicked(); })("click", function ResumeComponent_Template_button_click_80_listener() { return ctx.sEducationButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".resumePage[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  box-sizing: border-box;\r\n  width: 30vw;\r\n  height: 40vh;\r\n  overflow-x: hidden;\r\n  border: 2px solid #585c5c;\r\n  margin: auto;\r\n}\r\n\r\n.topBar5[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  height: 3vh;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownMinus5[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  position: absolute;\r\n  margin-top: 3vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile5[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  position: absolute;\r\n  margin-top: 5.5vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile5[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  font-size: small;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  text-align: start;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownFile5[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  width: 99%;\r\n  color: black;\r\n}\r\n\r\n#mainButton5[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#mainButton5[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%]{\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#closeButton5[_ngcontent-%COMP%] {\r\n  \r\n  background: #c4c7ce;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#closeButton5[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 3px;\r\n}\r\n\r\n.topBar5[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.subBar5[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row nowrap;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.subBar5[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  padding: 0.3em;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.mainDisplay5[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #FAFAFA;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  justify-items: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  align-content: flex-start;\r\n}\r\n\r\n.resumeDisplay[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #FAFAFA;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row wrap;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: end;\r\n          align-items: flex-end;\r\n  align-content: flex-end;\r\n  padding: 10px;\r\n  overflow-y: hidden;\r\n}\r\n\r\n#operatingSystems[_ngcontent-%COMP%] {\r\n  padding: 2em;\r\n  margin: 0;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#operatingSystems[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%] {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#webDevelop[_ngcontent-%COMP%] {\r\n  padding: 2em;\r\n  margin: 0;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#webDevelop[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%] {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#graphicsDesign[_ngcontent-%COMP%] {\r\n  padding: 2em;\r\n  margin: 0;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#graphicsDesign[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%] {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#objectOriented[_ngcontent-%COMP%] {\r\n  padding: 2em;\r\n  padding-left: 40px;\r\n  margin: 0;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#objectOriented[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%] {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#education[_ngcontent-%COMP%] {\r\n  padding: 2em;\r\n  margin: 0;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#education[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%] {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1QkFBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix1QkFBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQXFCO0VBQXJCLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix1QkFBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixzQkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxvQkFBYTtFQUFiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULG9CQUFhO0VBQWIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1Qsb0JBQWE7RUFBYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsb0JBQWE7RUFBYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxvQkFBYTtFQUFiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC93aW5kb3dzMzEvcHJvZ3JhbS1tYW5hZ2VyL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bWVQYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMzB2dztcclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1ODVjNWM7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udG9wQmFyNSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogM3ZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZHJvcERvd25NaW51czUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDN2aDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmRyb3BEb3duRmlsZTUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDUuNXZoO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZHJvcERvd25GaWxlNSBidXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kcm9wRG93bkZpbGU1IGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuaHIge1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogOTklO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI21haW5CdXR0b241IHtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuI21haW5CdXR0b241OmZvY3VzIGxhYmVse1xyXG4gIGJhY2tncm91bmQ6ICMwODAwYWQ7XHJcbiAgY29sb3I6ICNGQUZBRkE7XHJcbn1cclxuXHJcbiNjbG9zZUJ1dHRvbjUge1xyXG4gIC8qYmFja2dyb3VuZDogI2M3YzhjZDsqL1xyXG4gIGJhY2tncm91bmQ6ICNjNGM3Y2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jY2xvc2VCdXR0b241IGltZ3tcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDNweDtcclxufVxyXG5cclxuLnRvcEJhcjUgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4uc3ViQmFyNSB7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5zdWJCYXI1IGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBwYWRkaW5nOiAwLjNlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1haW5EaXNwbGF5NSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5yZXN1bWVEaXNwbGF5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuI29wZXJhdGluZ1N5c3RlbXMge1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuI29wZXJhdGluZ1N5c3RlbXM6Zm9jdXMgbGFiZWwge1xyXG4gIGJhY2tncm91bmQ6ICMwODAwYWQ7XHJcbiAgY29sb3I6ICNGQUZBRkE7XHJcbn1cclxuXHJcbiN3ZWJEZXZlbG9wIHtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbiN3ZWJEZXZlbG9wOmZvY3VzIGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4jZ3JhcGhpY3NEZXNpZ24ge1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuI2dyYXBoaWNzRGVzaWduOmZvY3VzIGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG4jb2JqZWN0T3JpZW50ZWQge1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbiNvYmplY3RPcmllbnRlZDpmb2N1cyBsYWJlbCB7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuI2VkdWNhdGlvbiB7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4jZWR1Y2F0aW9uOmZvY3VzIGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.css']
            }]
    }], function () { return [{ type: _windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"] }]; }, null); })();


/***/ }),

/***/ "./src/app/windows31/program-manager/resume/web-development/web-development.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/windows31/program-manager/resume/web-development/web-development.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: WebDevelopmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebDevelopmentComponent", function() { return WebDevelopmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _windows31_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../windows31.component */ "./src/app/windows31/windows31.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function WebDevelopmentComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "progress", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", skill_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", skill_r1.experience);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", skill_r1.experience, " / 10");
} }
class WebDevelopmentComponent {
    constructor(webWin31) {
        this.webWin31 = webWin31;
        this.webKnowledge = [
            { name: 'HTML5', experience: 5 },
            { name: 'CSS3', experience: 5 },
            { name: 'JavaScript', experience: 6 },
            { name: 'Node.JS', experience: 6 },
            { name: 'React.JS', experience: 5 },
            { name: 'Angular.JS', experience: 6 },
            { name: 'Ionic', experience: 5 },
            { name: 'Python', experience: 5 },
            { name: 'Processing', experience: 4 }
        ];
    }
    ngOnInit() {
        this.fileButton = document.getElementById('fileButton7');
        this.fileButtonClick = false;
        this.minusButton = document.getElementById('closeButton7');
        this.minusButtonClick = false;
        this.dropDownFile = document.getElementById('dropDownFile7');
        document.getElementById('dropDownFile7').style.display = 'none';
    }
    minusButtonClicked() {
        if (this.webWin31.singleClickEnabled) {
            this.minimizeClicked();
        }
        else {
            if (this.minusButtonClick === false) {
                this.minusButton.style.background = '#0800ad';
                this.minusButtonClick = true;
            }
            else {
                this.minusButton.style.background = '#c4c7ce';
                this.minusButtonClick = false;
            }
        }
    }
    minimizeClicked() {
        this.webWin31.alterWebDevShowing();
    }
    fileButtonClicked() {
        if (this.fileButtonClick) {
            this.dropDownFile.style.display = 'none';
            this.fileButtonClick = false;
        }
        else {
            this.dropDownFile.style.display = 'flex';
            this.fileButtonClick = true;
        }
    }
}
WebDevelopmentComponent.ɵfac = function WebDevelopmentComponent_Factory(t) { return new (t || WebDevelopmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"])); };
WebDevelopmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebDevelopmentComponent, selectors: [["app-web-development"]], decls: 64, vars: 1, consts: [[1, "webDevelopment"], [1, "topBar7"], ["id", "closeButton7", 1, "closeButton7", 3, "click", "dblclick"], ["src", "../../../assets/Win31/Icons/minusButton.png"], ["id", "downArrow7", 3, "click"], ["id", "upArrow7"], ["id", "dropDownFile7", 1, "dropDownFile7"], ["id", "newButton7"], ["id", "openButton7"], ["id", "moveButton7"], ["id", "copyButton7"], [1, "subBar7"], ["id", "fileButton7", 3, "click"], ["id", "optionsButton7"], ["id", "windowButton7"], ["id", "helpButton7"], ["id", "webDevDisplay", 1, "webDevDisplay"], [1, "topHalf"], [1, "contestant1"], ["src", "../../../../../assets/Win31/Images/contestant1.jpg", "id", "contestant1Image"], ["src", "../../../../../assets/Win31/Images/quizPodium.png", "id", "quizPodium"], [1, "wheelSection"], ["src", "../../../../../assets/Win31/Images/spinnerWheel.png", "id", "moneyWheel"], [1, "contestant2"], ["src", "../../../../../assets/Win31/Images/contestant2.jpg"], ["src", "../../../../../assets/Win31/Images/showPodium.png", "id", "showPodium"], [1, "bottomHalf"], [1, "webTable"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], [1, "firstCol"], [1, "secondCol"], ["max", "10", 3, "value"], [1, "thirdCol"]], template: function WebDevelopmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebDevelopmentComponent_Template_button_click_2_listener() { return ctx.minusButtonClicked(); })("dblclick", function WebDevelopmentComponent_Template_button_dblclick_2_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebDevelopmentComponent_Template_button_click_6_listener() { return ctx.minimizeClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2BC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2BC5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ove...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "opy...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebDevelopmentComponent_Template_button_click_28_listener() { return ctx.fileButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "ptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "indow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "elp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, WebDevelopmentComponent_tr_63_Template, 7, 4, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.webKnowledge);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".webDevelopment[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  box-sizing: border-box;\r\n  width: 70vw;\r\n  height: 80vh;\r\n  overflow-x: hidden;\r\n  border: 2px solid #585c5c;\r\n  margin-left: 10px;\r\n  margin-top: 10px;\r\n  overflow-y: hidden;\r\n\r\n}\r\n\r\n.topBar7[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  height: 3vh;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownMinus7[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  position: absolute;\r\n  margin-top: 3vh;\r\n  border: 2px solid black;\r\n}\r\n\r\n.dropDownFile7[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n  position: absolute;\r\n  margin-top: 5.9vh;\r\n  border: 1px solid black;\r\n  width: 20vw;\r\n}\r\n\r\n.dropDownFile7[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  font-size: small;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  text-align: start;\r\n  padding: 2px;\r\n  padding-left: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.dropDownFile7[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  width: 99%;\r\n  color: black;\r\n}\r\n\r\n#mainButton7[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  background: #FAFAFA;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  border: none;\r\n  outline: none;\r\n  width: 60px;\r\n}\r\n\r\n#mainButton7[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%]{\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n#closeButton7[_ngcontent-%COMP%] {\r\n  \r\n  background: #c4c7ce;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#closeButton7[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 3px;\r\n}\r\n\r\n.topBar7[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 100%;\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.subBar7[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row nowrap;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.subBar7[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  padding: 0.3em;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.mainDisplay7[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #FAFAFA;\r\n}\r\n\r\n.webDevDisplay[_ngcontent-%COMP%] {\r\n  background: #FAFAFA;\r\n  height: 100%;\r\n}\r\n\r\n.topHalf[_ngcontent-%COMP%] {\r\n  border-bottom: 5px solid black;\r\n  padding-top: 10px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  width: 100%;\r\n  height: 40%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n  align-content: center;\r\n  margin: 0;\r\n  background: #ffffff;\r\n}\r\n\r\n.contestant1[_ngcontent-%COMP%] {\r\n  width: 25%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n#quizPodium[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 30%;\r\n}\r\n\r\n#showPodium[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 30%;\r\n}\r\n\r\n.wheelSection[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 50%;\r\n}\r\n\r\n.contestant2[_ngcontent-%COMP%] {\r\n  width: 25%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.bottomHalf[_ngcontent-%COMP%] {\r\n  border: 1px solid green;\r\n  width: 100%;\r\n  height: 70%;\r\n  margin: 0;\r\n}\r\n\r\n.webDevDisplay[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: auto;\r\n  -webkit-transition: all 2s;\r\n  transition: all 2s;\r\n}\r\n\r\n.webTable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.firstCol[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  width: 25%;\r\n}\r\n\r\n.secondCol[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\n.thirdCol[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  width: 25%;\r\n}\r\n\r\n#HTML5[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n  color: red;\r\n}\r\n\r\n#HTML5[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\nprogress[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9yZXN1bWUvd2ViLWRldmVsb3BtZW50L3dlYi1kZXZlbG9wbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsdUJBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsdUJBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFxQjtFQUFyQiw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsOEJBQTZCO1VBQTdCLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCwwQkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBOztBQUVBOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9yZXN1bWUvd2ViLWRldmVsb3BtZW50L3dlYi1kZXZlbG9wbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlYkRldmVsb3BtZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogNzB2dztcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1ODVjNWM7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcblxyXG59XHJcblxyXG4udG9wQmFyNyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogM3ZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZHJvcERvd25NaW51czcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDN2aDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmRyb3BEb3duRmlsZTcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDUuOXZoO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG59XHJcblxyXG4uZHJvcERvd25GaWxlNyBidXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRyb3BEb3duRmlsZTcgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDgwMGFkO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG59XHJcblxyXG5ociB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiA5OSU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jbWFpbkJ1dHRvbjcge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4jbWFpbkJ1dHRvbjc6Zm9jdXMgbGFiZWx7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuI2Nsb3NlQnV0dG9uNyB7XHJcbiAgLypiYWNrZ3JvdW5kOiAjYzdjOGNkOyovXHJcbiAgYmFja2dyb3VuZDogI2M0YzdjZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNjbG9zZUJ1dHRvbjcgaW1ne1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogM3B4O1xyXG59XHJcblxyXG4udG9wQmFyNyBsYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMwODAwYWQ7XHJcbiAgY29sb3I6ICNGQUZBRkE7XHJcbn1cclxuXHJcbi5zdWJCYXI3IHtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnN1YkJhcjcgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gIHBhZGRpbmc6IDAuM2VtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubWFpbkRpc3BsYXk3IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxufVxyXG5cclxuLndlYkRldkRpc3BsYXkge1xyXG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udG9wSGFsZiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5jb250ZXN0YW50MSB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI3F1aXpQb2RpdW0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG4jc2hvd1BvZGl1bSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbn1cclxuXHJcbi53aGVlbFNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jb250ZXN0YW50MiB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJvdHRvbUhhbGYge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ud2ViRGV2RGlzcGxheSBpbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogYXV0bztcclxuICB0cmFuc2l0aW9uOiBhbGwgMnM7XHJcbn1cclxuXHJcbi53ZWJUYWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5maXJzdENvbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5zZWNvbmRDb2wge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi50aGlyZENvbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbiNIVE1MNSB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuI0hUTUw1IHByb2dyZXNzIHtcclxuXHJcbn1cclxuXHJcbnByb2dyZXNzIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */", "@-webkit-keyframes SpinTheWheel {\r\n  0%{\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  10%{\r\n    -webkit-transform: rotate(-2deg);\r\n            transform: rotate(-2deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(722deg);\r\n            transform: rotate(722deg);\r\n  }\r\n}\r\n\r\n@keyframes SpinTheWheel {\r\n  0%{\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  10%{\r\n    -webkit-transform: rotate(-2deg);\r\n            transform: rotate(-2deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(722deg);\r\n            transform: rotate(722deg);\r\n  }\r\n}\r\n\r\n#moneyWheel[_ngcontent-%COMP%] {\r\n  -webkit-animation: SpinTheWheel 7s ease-out;\r\n          animation: SpinTheWheel 7s ease-out;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9yZXN1bWUvd2ViLWRldmVsb3BtZW50L0FuaW1hdGlvbnMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBVkE7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLDJDQUFtQztVQUFuQyxtQ0FBbUM7RUFDbkMsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxpQ0FBeUI7VUFBekIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvd2luZG93czMxL3Byb2dyYW0tbWFuYWdlci9yZXN1bWUvd2ViLWRldmVsb3BtZW50L0FuaW1hdGlvbnMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBTcGluVGhlV2hlZWwge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwJXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzIyZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbiNtb25leVdoZWVsIHtcclxuICBhbmltYXRpb246IFNwaW5UaGVXaGVlbCA3cyBlYXNlLW91dDtcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebDevelopmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-web-development',
                templateUrl: './web-development.component.html',
                styleUrls: [
                    './web-development.component.css',
                    './Animations.css'
                ]
            }]
    }], function () { return [{ type: _windows31_component__WEBPACK_IMPORTED_MODULE_1__["Windows31Component"] }]; }, null); })();


/***/ }),

/***/ "./src/app/windows31/windows31.component.ts":
/*!**************************************************!*\
  !*** ./src/app/windows31/windows31.component.ts ***!
  \**************************************************/
/*! exports provided: Windows31Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Windows31Component", function() { return Windows31Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Windows31Component {
    constructor() {
        this.dragPosition = { x: 50, y: 50 };
        this.progManager = document.getElementById('programManWindow');
    }
    ngOnInit() {
        this.progManClicked = false;
        this.singleClickCheckbox = document.getElementById('toggleSingle');
        this.singleClickEnabled = false;
        this.hideAllWindows();
        document.getElementById('projectDisplayWindow').style.display = 'none';
        this.singleClicked();
        this.splashStart();
    }
    splashStart() {
        const splashDiv = document.getElementById('startupScreen');
        const desktopDiv = document.getElementById('desktop');
        setTimeout(() => {
            splashDiv.style.display = 'none';
            desktopDiv.style.display = 'flex';
        }, 2300);
    }
    hideAllWindows() {
        document.getElementById('programManWindow').style.display = 'none';
        document.getElementById('mainAppWindow').style.display = 'none';
        document.getElementById('introWindow').style.display = 'none';
        document.getElementById('aboutPageWindow').style.display = 'none';
        document.getElementById('resumeWindow').style.display = 'none';
        document.getElementById('osWindow').style.display = 'none';
        document.getElementById('webDevWindow').style.display = 'none';
        document.getElementById('objectOrientedWindow').style.display = 'none';
        document.getElementById('graphicsWindow').style.display = 'none';
        document.getElementById('projectsWindow').style.display = 'none';
        document.getElementById('educationWindow').style.display = 'none';
        document.getElementById('contactsWindow').style.display = 'none';
        document.getElementById('projectDisplayWindow').style.display = 'none';
    }
    // For the single click checkbox
    singleClicked() {
        const checkboxEnabled = this.singleClickEnabled;
        if (checkboxEnabled === false) {
            this.singleClickEnabled = true;
        }
        else {
            this.singleClickEnabled = false;
        }
        console.log('The single click option enabled is ' + this.singleClickEnabled);
    }
    // Alter window single click methods
    sAlterProgMan() {
        console.log(this.singleClickEnabled);
        if (this.singleClickEnabled) {
            this.alterProgManShowing();
        }
    }
    sAlterMainShowing() {
        if (this.singleClickEnabled) {
            this.alterMainWindowShowing();
        }
    }
    // Alter window showing methods
    alterProgManShowing() {
        this.progManager = document.getElementById('programManWindow');
        if (this.progManClicked) {
            this.progManager.style.display = 'none';
            this.progManClicked = false;
        }
        else {
            this.progManager.style.display = 'flex';
            this.progManClicked = true;
        }
    }
    alterMainWindowShowing() {
        const mainWindow = document.getElementById('mainAppWindow');
        if (mainWindow.style.display === 'none') {
            mainWindow.style.display = 'flex';
        }
        else {
            mainWindow.style.display = 'none';
        }
    }
    alterIntroWindowShowing() {
        const introWindow = document.getElementById('introWindow');
        if (introWindow.style.display === 'none') {
            introWindow.style.display = 'flex';
        }
        else {
            introWindow.style.display = 'none';
        }
    }
    alterAboutWindowShowing() {
        const aboutWindow = document.getElementById('aboutPageWindow');
        if (aboutWindow.style.display === 'none') {
            aboutWindow.style.display = 'flex';
        }
        else {
            aboutWindow.style.display = 'none';
        }
    }
    // Resume Stuff
    alterResumeWindowShowing() {
        const resumeWindow = document.getElementById('resumeWindow');
        if (resumeWindow.style.display === 'none') {
            resumeWindow.style.display = 'flex';
        }
        else {
            resumeWindow.style.display = 'none';
        }
    }
    alterOSWindowShowing() {
        const osWindow = document.getElementById('osWindow');
        if (osWindow.style.display === 'none') {
            osWindow.style.display = 'flex';
        }
        else {
            osWindow.style.display = 'none';
        }
    }
    alterWebDevShowing() {
        const webDevWindow = document.getElementById('webDevWindow');
        if (webDevWindow.style.display === 'none') {
            webDevWindow.style.display = 'flex';
        }
        else {
            webDevWindow.style.display = 'none';
        }
    }
    alterObjectOrientedShowing() {
        const objectOrientedWindow = document.getElementById('objectOrientedWindow');
        if (objectOrientedWindow.style.display === 'none') {
            objectOrientedWindow.style.display = 'flex';
        }
        else {
            objectOrientedWindow.style.display = 'none';
        }
    }
    alterGraphicsShowing() {
        const graphicsWindow = document.getElementById('graphicsWindow');
        if (graphicsWindow.style.display === 'none') {
            graphicsWindow.style.display = 'flex';
        }
        else {
            graphicsWindow.style.display = 'none';
        }
    }
    alterEducationShowing() {
        const eduWindow = document.getElementById('educationWindow');
        if (eduWindow.style.display === 'none') {
            eduWindow.style.display = 'flex';
        }
        else {
            eduWindow.style.display = 'none';
        }
    }
    // Projects stuff
    alterProjectsShowing() {
        const projectsWindow = document.getElementById('projectsWindow');
        if (projectsWindow.style.display === 'none') {
            projectsWindow.style.display = 'flex';
        }
        else {
            projectsWindow.style.display = 'none';
        }
    }
    alterProjectDisplayShowing() {
        const projectDisplay = document.getElementById('projectDisplayWindow');
        if (projectDisplay.style.display === 'none') {
            projectDisplay.style.display = 'flex';
        }
        else {
            projectDisplay.style.display = 'none';
        }
    }
    // Contact Stuff
    alterContactShowing() {
        const contactsWindow = document.getElementById('contactsWindow');
        if (contactsWindow.style.display === 'none') {
            contactsWindow.style.display = 'flex';
        }
        else {
            contactsWindow.style.display = 'none';
        }
    }
    setSelectedProjectNumber(input) {
        this.selectedNumber = input;
        console.log('the selected number from the projects component ' + this.selectedNumber);
    }
}
Windows31Component.ɵfac = function Windows31Component_Factory(t) { return new (t || Windows31Component)(); };
Windows31Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Windows31Component, selectors: [["app-windows31"]], decls: 39, vars: 13, consts: [["id", "windows31", 1, "windows31"], ["id", "startupScreen", 1, "startupScreen"], ["src", "../../assets/Win31/Images/jerodJones3.1.png"], ["id", "desktop", 1, "desktop"], ["cdkDrag", "", "id", "manIcon", 1, "programManagerIcon"], ["id", "managerIcon", "cdkDragHandle", "", 3, "dblclick", "click"], ["src", "../../assets/Win31/Icons/PROGM001.PNG"], ["id", "toggleSingle", 1, "toggleSingle"], ["type", "checkbox", "checked", "", 1, "checkSingle", 3, "change"], ["id", "programManWindow", "cdkDrag", "", 1, "programManWindow", 3, "cdkDragFreeDragPosition"], ["id", "mainAppWindow", "cdkDrag", "", 1, "mainAppWindow", 3, "cdkDragFreeDragPosition"], ["id", "introWindow", "cdkDrag", "", 1, "introWindow", 3, "cdkDragFreeDragPosition"], ["id", "aboutPageWindow", "cdkDrag", "", 1, "aboutPageWindow", 3, "cdkDragFreeDragPosition"], ["id", "resumeWindow", "cdkDrag", "", 1, "resumeWindow", 3, "cdkDragFreeDragPosition"], ["id", "osWindow", "cdkDrag", "", 1, "osWindow", 3, "cdkDragFreeDragPosition"], ["id", "webDevWindow", "cdkDrag", "", 1, "webDevWindow", 3, "cdkDragFreeDragPosition"], ["id", "objectOrientedWindow", "cdkDrag", "", 1, "objectOrientedWindow", 3, "cdkDragFreeDragPosition"], ["id", "graphicsWindow", "cdkDrag", "", 1, "graphicsWindow", 3, "cdkDragFreeDragPosition"], ["id", "educationWindow", "cdkDrag", "", 1, "educationWindow", 3, "cdkDragFreeDragPosition"], ["id", "projectsWindow", "cdkDrag", "", 1, "projectsWindow", 3, "cdkDragFreeDragPosition"], ["id", "projectDisplayWindow", "cdkDrag", "", 1, "projectDisplayWindow", 3, "cdkDragFreeDragPosition"], ["id", "contactsWindow", "cdkDrag", "", 1, "contactsWindow", 3, "cdkDragFreeDragPosition"]], template: function Windows31Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function Windows31Component_Template_button_dblclick_5_listener() { return ctx.alterProgManShowing(); })("click", function Windows31Component_Template_button_click_5_listener() { return ctx.sAlterProgMan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Portfolio Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Single Click Mode Enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Windows31Component_Template_input_change_12_listener() { return ctx.singleClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-program-manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-about-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-operating-systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-web-development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-object-oriented");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-graphics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-project-display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.dragPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.dragPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.dragPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.dragPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.dragPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.dragPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.dragPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.dragPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.dragPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.dragPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.dragPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.dragPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.dragPosition);
    } }, styles: [".windows31[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n}\r\n\r\n#desktop[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n#startupScreen[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  background: black;\r\n}\r\n\r\n.startupScreen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: auto;\r\n}\r\n\r\n.desktop[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #00adab;\r\n}\r\n\r\n.programManWindow[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-top: 100px;\r\n  width: 100%;\r\n}\r\n\r\n.mainAppWindow[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-top: 150px;\r\n  margin-left: 100px;\r\n  width: 100%;\r\n}\r\n\r\n.osWindow[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n#managerIcon[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  border: none;\r\n  background: rgba(250,250,250,0);\r\n  position: absolute;\r\n  margin-left: 100px;\r\n  margin-top: 100px;\r\n  width: 60px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n#managerIcon[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%] {\r\n  background: #0800ad;\r\n  color: #FAFAFA;\r\n}\r\n\r\n.toggleSingle[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n  justify-items: center;\r\n  align-content: space-around;\r\n  margin: 0;\r\n  color: #FAFAFA;\r\n  font-size: 3vh;\r\n  padding: 10px;\r\n  position: fixed;\r\n  -webkit-transform: translateY(90vh)translateX(50vw);\r\n          transform: translateY(90vh)translateX(50vw);\r\n}\r\n\r\ninput.checkSingle[_ngcontent-%COMP%] {\r\n  width: 5vh;\r\n  height: 5vh;\r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luZG93czMxL3dpbmRvd3MzMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsOEJBQTZCO1VBQTdCLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0VBQ2YsbURBQTJDO1VBQTNDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvd2luZG93czMxL3dpbmRvd3MzMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpbmRvd3MzMSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4jZGVza3RvcCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI3N0YXJ0dXBTY3JlZW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuXHJcbi5zdGFydHVwU2NyZWVuIGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uZGVza3RvcCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMwMGFkYWI7XHJcbn1cclxuXHJcbi5wcm9ncmFtTWFuV2luZG93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYWluQXBwV2luZG93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ub3NXaW5kb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI21hbmFnZXJJY29uIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwyNTAsMjUwLDApO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNtYW5hZ2VySWNvbjpmb2N1cyBsYWJlbCB7XHJcbiAgYmFja2dyb3VuZDogIzA4MDBhZDtcclxuICBjb2xvcjogI0ZBRkFGQTtcclxufVxyXG5cclxuLnRvZ2dsZVNpbmdsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICNGQUZBRkE7XHJcbiAgZm9udC1zaXplOiAzdmg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwdmgpdHJhbnNsYXRlWCg1MHZ3KTtcclxufVxyXG5cclxuaW5wdXQuY2hlY2tTaW5nbGUge1xyXG4gIHdpZHRoOiA1dmg7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Windows31Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-windows31',
                templateUrl: './windows31.component.html',
                styleUrls: ['./windows31.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jerod\Desktop\Projects\Angular\Windows Again\WindowsAgain (4)\WindowsAgain\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map