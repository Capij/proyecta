export class ProjectModel{
    name: string;
    typeTime: string;
    time: string;
    members: Array<MemberModel>
    timestamp: Date;
}

export class MemberModel{
    id: string;
    name: string;
}