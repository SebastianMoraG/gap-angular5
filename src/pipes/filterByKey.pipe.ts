import { Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'filterByKey'
})
export class FilterByKey implements PipeTransform{
    transform(list:any, word:string = '', property: string = 'marca'){
        console.log("List: ",list);
        console.log(word);
        if(word === '') return list;
        return list.filter( (value) => {
            return value[property] && value[property].toLocaleLowerCase().indexOf(word.toLocaleLowerCase()) >= 0;
        });
    }
}