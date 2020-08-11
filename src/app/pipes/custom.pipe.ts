import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'userExtract'})

export class UserExtractPipe implements PipeTransform {

    // transform(items: any, filter: any): any {
    //     if (filter && Array.isArray(items)) {
    //         let filterKeys = Object.keys(filter);
    //         return items.filter((item) => {
    //             return filterKeys.some((keyName) => {
    //                 //var re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
    //                 //return value.replace(re, "<mark>" + args + "</mark>");
    //                 //let searchValue = new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === '';
    //                 return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === '';
    //             });
    //         });
    //     } else {
    //         return items;
    //     }
    // }

    transform(items: any[], terms: string): any[] {
        if(!items) return [];
        if(!terms) return items;
        terms = terms.toLowerCase();
        return items.filter( it => {
          return it.action.toLowerCase().includes(terms); // only filter country name
        });
      }
}