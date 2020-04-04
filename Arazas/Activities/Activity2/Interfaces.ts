import { MaritalStatus } from './Enum';

interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: Date;
    status: MaritalStatus
    hoursOfWork: number;
}

interface GenericItem {
    id: number;
}

export { IEmployee, GenericItem };