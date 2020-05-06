
enum Permissions {
    AddCard = 'read:card',
    RemoveCard='delete:card',
    RemoveAllCard='delete:AllCard',
    Addutilities = 'write:utilties',
    RemoveUtilities='delete:utilities',
    AddPrivateStatement='write:PrivateStatement',
    ViewPrivateStatement='read:PrivateStatement',
    RemovePrivateStatement='delete:PrivateStatement',
    ViewAll = 'read:all',
    RemoveAll = 'delete:all',
  }
  
  export default Permissions