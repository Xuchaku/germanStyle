import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import {GalleryComponent} from "./gallery/gallery.component"
import {ProductComponent} from "./product/product.component"


const routes: Routes = [
	{path: "gallery", component: GalleryComponent},
	{path: "gallery/:name", component: ProductComponent},
	{path: "", component: GalleryComponent}
	// {path: "spring-summer", component: AppComponent},
	// {path: "autumn-winter", component: AppComponent},
	// {path: "sells", component: AppComponent},

]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule{

}