// basic types
let id: number = 5
let company: string = 'Goody4444'
let isPublished: boolean = true
let x: any = 'Hello'


let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

// tuple
let person: [number, string, boolean] = [1, 'Goody', true]
// tuple array
let employee: [number, string][]

employee = [
    [1, 'Goody'],
    [2, 'Elvis'],
    [3, 'Edeh']
]


// union
let pid: String | Number 
pid = '22'

enum Direction1 {
    Up,
    Down,
    Left,
    Right,
}
// string
enum Direction2 {
    Up = 'up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

// Object

type User = {
    id: number,
    name: string
}


const user: User = {
    id: 1,
    name: 'john',

}

// Type Assertion
let cid: any = 1
let custmerId = cid as number

// Function 

function addNum(x: number, y: number): number {
    return x + y
}

// Volid

function log(message: string | number): void {
    
}