import {Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  NzNotificationService,
  NzMessageService,
  NgZorroAntdModule, NZ_MESSAGE_CONFIG
} from 'ng-zorro-antd';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {CommonService} from './base/services/common.service';
import {InterceptorService} from './base/services/interceptor.service';
import {AdminInterceptorService} from './modules/admin/admin-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // 浏览器模块
    BrowserAnimationsModule,
    // 路由模块,
    AppRoutingModule,
    // 网络服务
    HttpClientModule,
    // 表单模块
    FormsModule,
    ReactiveFormsModule,
    // zorro模块
    NgZorroAntdModule.forRoot(),
  ],
  providers: [
    // 消息通知
    NzMessageService,
    NzNotificationService,
    // 消息通知配置
    {provide: NZ_MESSAGE_CONFIG, useValue: {nzDuration: 3500}},
    // 网络拦截器
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AdminInterceptorService, multi: true},
    // 标题服务
    Title,
    // 公共服务,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
