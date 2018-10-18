/*import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class ArraySortPipe  implements PipeTransform {
  transform(array: any[], field: string): any[] {
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}*/

import { Component, NgModule, Pipe,PipeTransform } from '@angular/core';

    @Pipe({ name: "sort" })

    export class ArraySortPipe {

    transform(array: Array<string>, args: string): Array<string> {
        if (array !== undefined) {
            array.sort((a: any, b: any) => {
                if ( a[args] < b[args] ){
                    return -1;
                } else if ( a[args] > b[args] ) {
                    return 1;
                } else {
                    return 0;   
                }
            });
        }
        return array;
    }

  }