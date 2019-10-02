export interface ProjectModel{
    id?: string;
    title: string;
    uid: string;
    typeTime: string;
    time: string;
    members: Array<string>;
    desc: string;
    timestamp: Date;
}

export class MemberModel{
    id: string;
    name: string;
}