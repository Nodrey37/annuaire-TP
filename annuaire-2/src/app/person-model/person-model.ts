export type Person = {
        gender : string,
        name :{
            first: string,
            last: string,
        },
        location:{
            city: string,
            country: string,
        },
        email: string,
        login:{
            uuid: string,
        },
        dob:{
            age: number,
        },
        phone: string,
        cell: string,
    };
//Get Api
export type PeopleResponse= {
    results: Person[],
}