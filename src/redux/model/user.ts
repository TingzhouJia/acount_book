export default interface User{
    name:string,
    sex:string,
    permissions:Permissions[],
    relatedUser:User[],
    nickname?:string
}