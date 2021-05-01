import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";


const appRoutes : Routes = [
{ path: '', redirectTo: '/home' ,pathMatch:'full'   },
{ path :'home', component:HomeComponent },
{path : 'contact-us', component: ContactUsComponent },
{ path : 'about-us' , component : AboutUsComponent},

];
@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {
    
}