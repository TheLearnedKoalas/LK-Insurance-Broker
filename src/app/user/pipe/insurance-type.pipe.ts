import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'insuranceType'
})
export class InsuranceTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 1: return 'Тhird-Party Insurance';
      case 2: return 'CASCO';
      case 3: return 'Property Insurance';
    }
  }

}
