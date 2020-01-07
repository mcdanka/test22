import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarGraphComponent } from './bar-graph/bar-graph.component';


@NgModule({
    declarations: [
        BarGraphComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        BarGraphComponent
    ]
})

export class ComponentsModule { }
