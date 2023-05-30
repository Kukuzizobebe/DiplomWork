
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
    const firstName=document.getElementById('fname')
    const lastName=document.getElementById('lname')
    const phoneNumber=document.getElementById('phone')
    const selector=document.getElementById('tarrifs')
    let isValid=false;
    
   


    const RegExpNamLast=/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/;
    const RegExpTel=/^\+380\d{3}\d{2}\d{2}\d{2}$/;
    if(languag=='#UA')
    {
        firstName.placeholder="Введіть ім'я..."
        lastName.placeholder='Введіть прізвище...'
        phoneNumber.placeholder='+380...'
    }
    else{
        firstName.placeholder='Enter your firstname...'
        lastName.placeholder='Enter your lastname...'
        phoneNumber.placeholder='+380...'
    }

    const submit = () =>
    {
        if(languag=='#UA')
        {
            alert("Ми обов'язково з вами звяжемось "+firstName.value+" "+lastName.value+" протягом декількох годин, дякуємо за довіру!");
        }
        else{
            alert('We will definitely contact '+firstName.value+" "+lastName.value+' within a few hours, thank you for your trust!');
        }
    }

    const validateElem = (elem) =>
    {
        if(elem.name=='firstname')
        {
            if(!RegExpNamLast.test(elem.value)&&elem.value!=0){

                if(languag=='#UA')
                {
                    elem.nextElementSibling.textContent="Заповніть корректно поле ім'я!"
                }
                else{
                    elem.nextElementSibling.textContent="Fill in the firstname field correctly!"
                }      
            }
            else{
                elem.nextElementSibling.textContent="";

               
            }
        }
        
        if(elem.name=='lastname')
        {
            if(!RegExpNamLast.test(elem.value)&&elem.value!=0){
 
                if(languag=='#UA')
                {
                    elem.nextElementSibling.textContent="Заповніть корректно поле прізвище!"
                }
                else{
                    elem.nextElementSibling.textContent="Fill in the lastname field correctly!"
                }      
            }
            else{
                elem.nextElementSibling.textContent="";

            }
        }
        
        if(elem.name=='phone')
        {
            if(!RegExpTel.test(elem.value)&& elem.value!=0){

                if(languag=='#UA')
                {
                    elem.nextElementSibling.textContent="Заповніть корректно поле номер телефона!"
                }
                else{
                    elem.nextElementSibling.textContent="Fill in the telephone number field correctly!"
                }      
            }
            else{
                elem.nextElementSibling.textContent="";
            }
        }
        if(firstName.value!=0&& lastName.value!=0 && phoneNumber.value!=0)
        {
            isValid=true
        }

    }

    
    for(let elem of Form.elements)
    {
        if(!(elem.classList.contains('ButtonF')))
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
            if(!(elem.classList.contains('ButtonF'))&&!(elem.classList.contains('selector')))
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
            submit();
            if(window.openDatabase){
            var db = openDatabase('MobNetSup.db', '1.0', 'MobNetSup DB', 2 * 1024 * 1024);
            db.transaction(function (tx) {
                tx.executeSql('INSERT INTO ContactFormMaster (FirstName,LastName,PhoneNumber,TypeOfClient) VALUES ("'+firstName.value+'" ,"'+lastName.value+'" ,"'+phoneNumber.value+'","'+selector.value+'")');
              })}
        }
        else{
            if(languag=='#UA')
            {
                alert("Інформація не надіслана!")
            }
            else{
                alert('Information not sent!');
            }
        }
    })
}) 
    })
