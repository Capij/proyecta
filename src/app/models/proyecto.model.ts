export class ProjectModel{
    name: string;
    uid: string;
    typeTime: string;
    time: string;
    members: Array<MemberModel>=[];
    timestamp: Date;
}

export class MemberModel{
    id: string;
    name: string;
}