export interface employee {
    name: string;
    age: string;
    salary: string;
    team: String
    position: String
    id: number
}

 const DUMMY_DATA: employee [] = [
    {
        name: "Jan",
        age: '28',
        salary: '3900',
        team: "Alfa",
        position: "Frontend developer",
        id: 1
    },
    {
        name: "Tomasz",
        age: '22',
        salary: '2800',
        team: "Beta",
        position: "Manager",
        id: 2
    },
    {
        name: "Joanna",
        age: '40',
        salary: '10000',
        team: "Beta",
        position: "Backend developer",
        id: 3
    },
    {
        name: "Ingo",
        age: '40',
        salary: '4200',
        team: "Beta",
        position: "Backend developer",
        id: 4
    },
    {
        name: "Emma",
        age: '40',
        salary: '25000',
        team: "Beta",
        position: "Manager",
        id: 5
    },
    {
        name: "Tom",
        age: '40',
        salary: '4200',
        team: "Beta",
        position: "Backend developer",
        id: 6
    },
];

export default DUMMY_DATA;