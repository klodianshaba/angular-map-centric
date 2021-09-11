import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapCentricComponent} from "./components/map-centric/map-centric.component";

const routes: Routes = [{path: '', component: MapCentricComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapCentricRoutingModule { }
