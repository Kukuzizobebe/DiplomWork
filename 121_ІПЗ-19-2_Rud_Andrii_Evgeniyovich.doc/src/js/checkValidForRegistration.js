
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
      
      getHashFromDatabase()
        .then(function(languag) {
   

    const Form=document.querySelector('form');
    const Email=document.getElementById('email')
    const Password=document.getElementById('password')
    const Password1=document.getElementById('password1')
    const RegExpEmail=/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/;
    const RegExpPass=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    
     let isValid=false;

    

    

    if(languag =='#UA')
    {
    Email.placeholder='Введіть електронну пошту...'
    Password.placeholder='Введіть пароль...'
    Password1.placeholder='Введіть пароль...'
    }
    else{
    Email.placeholder='Enter your email...'
    Password.placeholder='Enter your password...'
    Password1.placeholder='Repeat your password...'
    }

    const submit = () =>
    {
        if(languag=='#UA')
        {
            alert('Аккаунт зареєстрованно!');
        }
        else{
            alert('Account registered!');
        }
    }

    const validateElem = (elem) =>
    {
        if(elem.name=='email')
        {
            if(!RegExpEmail.test(elem.value)&&elem.value!=0){
                if(languag=='#UA')
                {
                    elem.nextElementSibling.textContent="Заповніть корректно поле пошти!"
                }
                else{
                    elem.nextElementSibling.textContent="Fill in the email field correctly!"
                }
            }
            else{
                elem.nextElementSibling.textContent="";
            }
        }
        if(elem.name=='psw')
        {
            if(!RegExpPass.test(elem.value) && elem.value!=0){
                if(languag=='#UA')
                {
                elem.nextElementSibling.textContent="Заповніть корректно поле паролю!"
                }
                else{
                elem.nextElementSibling.textContent="Fill in the password field correctly!"
                }
                if(elem.value.length<8){
                if(languag=='#UA')
                {
                    elem.nextElementSibling.textContent="Пароль повинен містити 8 символів і більше!";
                }
                else{
                    elem.nextElementSibling.textContent="The password must contain 8 characters or more!";
                }
            }
            else{
                elem.nextElementSibling.textContent=""
                
            }
        }
        else{
            elem.nextElementSibling.textContent=""
        }
        }
        if(elem.name=='psw1')
        {
        if(Password.value!=Password1.value && Password1.value!=0){
            if(languag=='#UA')
            {
            elem.nextElementSibling.textContent="Паролі не співпадають!"
            }
            else{
            elem.nextElementSibling.textContent="Passwords do not match!"
            }
        }
        else{
            elem.nextElementSibling.textContent=""
        }
    }
    if(Email.value!=0 && Password.value!=0 && Password1.value!=0)
    {
        isValid=true;
    }
}

    
   


    for(let elem of Form.elements)
    {
        if(!(elem.classList.contains('registerbtn')))
        {
            elem.addEventListener('blur',()=>{
                validateElem(elem);
            })
        }
    }

    Form.addEventListener('submit',(event)=>{
        event.preventDefault();

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
                    elem.nextElementSibling.textContent=""
                }
                
            }
            
        }

        if(isValid)
        {
           
            if(window.openDatabase){
                var db = openDatabase('MobNetSup.db', '1.0', 'MobNetSup DB', 2 * 1024 * 1024);

                db.transaction(function (tx,results) {
                    tx.executeSql('SELECT Email, Password FROM Users WHERE Email="'+Email.value+'" AND Password="'+Password.value+'" OR Email="'+Email.value+'"',[],renderList);
                    function renderList(tx,results){
                        if (results.rows.length > 0) {
                           
                            if(languag=="#UA")
                            {
                                alert("Данна пошта вже зареєстрована, вкажіть іншу!")
                            }
                            else{
                                alert("This e-mail address is already registered, enter another one!")
                            }


                           }
                        else
                           {
                            db.transaction(function (tx) {    
                                tx.executeSql('INSERT INTO Users (Email,Password) VALUES ( ? , ? )',[Email.value,Password.value]);
                                });
                                submit();
                                window.location.href="http://127.0.0.1:5500/src/LoginForm.html";
                            }
                    }

                })
                    
                }
            }               

        else
        {
            if(languag=='#UA')
            {
                alert("Аккаунт не зареєстровано!")
            }
            else{
                alert('Account not registered!');
            }
        }
    }
    )
})
});