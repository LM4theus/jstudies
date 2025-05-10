function Login(user, password){
    if( user === 'pedro' && password === '123'){
        return true;
    } else {
        return false;
    }
}
let user = 'pedro'
let password = '123'
let loginIn = Login(user, password);
if (loginIn) {
    console.log('Acesso CONCEDIDO')
} else {
    console.log('Acesso NEGADO')
}