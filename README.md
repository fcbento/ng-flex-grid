# ng-flex-grid

Set of Angular directives based on [Flexbox Grid](http://flexboxgrid.com/). It's quite simple actually and I wanted to upload an Angular package on npm to understand how it works. Created to avoid verbose html tags like ``` <div class="col-xs-12 col-lg-4 col-sm-2 col-md-6"> ```. 


## Install

npm i ng-flex-grid

## Imports

Import NgFlexGrid on any module.

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgFlexGrid } from 'src/directives/directives.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgFlexGrid
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
Add "node_modules/flexboxgrid/css/flexboxgrid.min.css"  to angular.json file

```
  "styles": [
      "src/styles.css",
      "node_modules/flexboxgrid/css/flexboxgrid.min.css"  
  ]
```

## Usage
```
<div grid [fluid]="true">
    <div row [position]="'center'">
    
        <div col [cols]="'6'">
            <p>Center 6</p>
        </div>
        
    </div>
</div>
```

### Options

```
    grid [fluid]="true"
    grid [fluid]="false"
```

```
    row [position]="'start'"
    row [position]="'center'"
    row [position]="'end'"
    row [position]="'middle'"
```
```
    col [cols]="xs sm md lg"
    
    col [cols]="'12'"
    col [cols]="'12 6 6 6'"
 ```

 ### Author
 
@[Felipe C. Bento](https://www.linkedin.com/in/felipe-bento/)