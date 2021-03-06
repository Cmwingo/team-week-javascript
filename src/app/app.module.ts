import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { MessageBoardComponent } from './message-board/message-board.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ResourcesComponent } from './resources/resources.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

export const firebaseGoogleAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    MessageBoardComponent,
    GlossaryComponent,
    PostDetailComponent,
    ResourcesComponent,
    GlossaryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseGoogleAuthConfig),
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
