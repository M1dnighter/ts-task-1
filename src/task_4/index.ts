/** Задача 4
 * Разобраться и описать в чём заключается разница между IFoo и FooType
 * (фактически нужно описать в чём разница между type и interface)
 * + к карме, если приведете примеры
*/

//Interface это всегда объект, а Type может быть другими сущностями.
//interface мы можем расширять(наследовать) например:
interface Animal {
    name: string
}

interface Dog extends Animal {
    bark: () => void;
}

const dog: Dog = {
    name: 'Бобик',
    bark: () => console.log('Гав')
}

// interface IFoo {
//     a: number
//     b: string
// }
 
// type FooType = {
//     a: number
//     b: string
// };
