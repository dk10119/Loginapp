import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' }
];
var MemberRoutingModule = /** @class */ (function () {
    function MemberRoutingModule() {
    }
    MemberRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], MemberRoutingModule);
    return MemberRoutingModule;
}());
export { MemberRoutingModule };
//# sourceMappingURL=member-routing.module.js.map