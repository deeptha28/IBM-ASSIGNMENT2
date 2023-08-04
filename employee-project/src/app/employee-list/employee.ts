export class Employee {
    constructor(public firstName: string,
        public lastName: string,
        public email: string,
        public departmentName: string,
        public locationName: string,
        public city: string) {
        
        }
}

export class Department {
    constructor(
        public departmentName: string,
        public locationName: string,
        public city: string) {
        
        }
}


