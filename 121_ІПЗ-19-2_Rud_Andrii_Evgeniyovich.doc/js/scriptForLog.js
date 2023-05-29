



document.addEventListener('DOMContentLoaded',()=>{
function getHashFromDatabase() {
    return new Promise(function(resolve, reject) {
      db.transaction(function(tx) {
        tx.executeSql('SELECT lang FROM Languages WHERE id=1', [], function(tx, results) {
          let len = results.rows.length;
          if (len > 0) {
            let languag = results.rows.item(0).lang;
            resolve(languag);
          }
        });
      });
    });
  }
  
getHashFromDatabase().then(function(languag) {


    
const Form=document.querySelector('form');
const Email=document.getElementById('email');
const Password=document.getElementById('password');
const Button=document.getElementById("Emailbtn")



if(languag =='#UA')
{
    Email.placeholder='Введіть пошту...'
    Password.placeholder='Введіть пароль...'
    
}
else{
    Email.placeholder='Enter your Email...'
    Password.placeholder='Enter your password...'
}




Button.addEventListener('click',()=>{
    for(let elem of Form.elements)
        {
            if(!(elem.classList.contains('registerbtn')))
            {
                if(elem.value == ""){
                
                if(languag=='#UA')
                {
                    elem.nextElementSibling.textContent="Дане поле не заповнене!"
                }
                else{
                    elem.nextElementSibling.textContent="This field is not filled!"
                }
                }

                else{
                    elem.nextElementSibling.textContent=" "
        if(window.openDatabase){
            var db = openDatabase('MobNetSup.db', '1.0', 'MobNetSup DB', 2 * 1024 * 1024);
                db.transaction(function (tx) {    
                  tx.executeSql('UPDATE RecentEmail SET Email=? WHERE id=1',[Email.value]);
                }),
            db.transaction(function (tx,results) {
                tx.executeSql('SELECT Email, Password FROM Users WHERE Email="'+Email.value+'" AND Password="'+Password.value+'" OR Email="'+Email.value+'"',[],renderList);
                function renderList(tx,results){
                    if (results.rows.length > 0) {
                        if(languag=="#UA")
                        {
                            alert("Авторизація успішна!")
                            window.location.href="/indexAfterLogin.html";
                        }
                        else{
                            alert("Authorization is successful!");
                            window.location.href="/indexAfterLogin.html";
                        }
                       }
                    else{
                        if(languag=="#UA")
                        {
                       alert("Ваш аккаунт не знайдено, натисніть на клавішу 'Зареєструвати'")
                        }
                        else{
                       alert("Account not found, click 'Register' to sign up!");
                        }
                    }
                   
                    
                }

            })
                
            }

                
                
            }
            
        }
   
    event.preventDefault();
        }
})

  


})
})