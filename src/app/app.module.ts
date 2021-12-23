import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CoreAnimationDirective } from './directives/gsap/core-animation.directive';
import { FadeInAnimationDirective } from './directives/gsap/fade-in-animation.directive';
import { IfAnimatedDirective } from './directives/structural/if-animated.directive';
import { SvgSiteLogoComponent } from './svg-site-logo/svg-site-logo.component';
import { HeroComponent } from './hero/hero.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HeaderComponent } from './header/header.component';
import { MissionComponent } from './mission/mission.component';
import { SkillsComponent } from './skills/skills.component';
import { QuoteComponent } from './quote/quote.component';
import { RecentWorkComponent } from './recent-work/recent-work.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { FooterComponent } from './footer/footer.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    CoreAnimationDirective,
    FadeInAnimationDirective,
    IfAnimatedDirective,
    SvgSiteLogoComponent,
    HeroComponent,
    MainNavComponent,
    HeaderComponent,
    MissionComponent,
    SkillsComponent,
    QuoteComponent,
    RecentWorkComponent,
    ResponsiveComponent,
    CallToActionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
