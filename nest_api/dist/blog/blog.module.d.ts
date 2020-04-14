import { NestModule, MiddlewareConsumer } from '@nestjs/common';
export declare class BlogModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void;
}
