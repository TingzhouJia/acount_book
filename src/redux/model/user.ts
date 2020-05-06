export default interface User{
    id:string,
    name:string,
    sex:string,
    permissions:Permissions[],
    relatedUser:User[],
    nickname?:string
}