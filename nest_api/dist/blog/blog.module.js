"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const blog_schema_1 = require("./schemas/blog.schema");
const blog_service_1 = require("./blog.service");
const blog_controller_1 = require("./blog.controller");
const authentication_middleware_1 = require("../common/authentication.middleware");
let BlogModule = class BlogModule {
    configure(consumer) {
        consumer
            .apply(authentication_middleware_1.AuthenticationMiddleware)
            .forRoutes({ method: common_1.RequestMethod.POST, path: '/blog/post' }, { method: common_1.RequestMethod.PUT, path: '/blog/edit' }, { method: common_1.RequestMethod.DELETE, path: '/blog/delete' });
    }
};
BlogModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Post', schema: blog_schema_1.BlogSchema }])],
        providers: [blog_service_1.BlogService],
        controllers: [blog_controller_1.BlogController],
    })
], BlogModule);
exports.BlogModule = BlogModule;
//# sourceMappingURL=blog.module.js.map