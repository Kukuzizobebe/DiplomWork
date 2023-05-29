
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
    const Emails=document.getElementById('emails')
    const Info=document.getElementById('subjects')
    const selector=document.getElementById('city')

   
    let isValid=false;

    const RegExpNamLast=/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
    const RegExpTel=/^\+380\d{3}\d{2}\d{2}\d{2}$/;
    const RegExpEmail=/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
    const RegExpComm=/^[a-z0-9][a-z0-9\s]{0,98}[a-z0-9]$/i
    if(languag=='#UA')
    {
        firstName.placeholder="Введіть ваше ім'я..."
        lastName.placeholder="Введіть ваше прізвище..."
        Emails.placeholder="Введіть вашу пошту..."
        Info.placeholder="Опишіть вашу проблему..."
    }
    else{
        firstName.placeholder="Enter your firstname..."
        lastName.placeholder="Enter your lastname..."
        Emails.placeholder="Enter your email..."
        Info.placeholder="Describe your problem..."
    }
    
    const submit = () =>
    {
        if(languag=='#UA')
        {
            alert('Інформацію надіслано на вашу пошту: '+Emails.value+'!');
        }
        else{
            alert('Information sent on email: '+Emails.value+'!');
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
        if(elem.name=='email')
        {
            if(!RegExpEmail.test(elem.value)&&elem.value!=0){
                if(languag=='#UA')
                {
                    elem.nextElementSibling.textContent="Заповніть корректно поле пошта!"
                }
                else{
                    elem.nextElementSibling.textContent="Fill in the email field correctly!"
                }      
            }
            else{
                elem.nextElementSibling.textContent="";

               
            }
        }
        if(elem.name=='subject')
        {
            if(!RegExpComm.test(elem.value)&&elem.value!=0){
                if(languag=='#UA')
                {
                    elem.nextElementSibling.textContent="Заповніть корректно поле опис проблеми!"
                }
                else{
                    elem.nextElementSibling.textContent="Fill in the describe problem field correctly!"
                }      
            }
            else{
                elem.nextElementSibling.textContent="";

               
            }
        }
        
    if(firstName.value!=0&& lastName.value!=0 && Email.value!=0 && Info.value!=0)
    {
        isValid=true;
    }
    }

    
    for(let elem of Form.elements)
    {
        if(!(elem.classList.contains('ordermaster')))
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
            if(!(elem.classList.contains('ordermaster'))&&!(elem.classList.contains('AddInfo')))
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
        //tx.executeSql('INSERT INTO ContactFormMaster (FirstName,LastName,PhoneNumber,Email,City,Problem) VALUES ("'+firstName.value+'" ,"'+lastName.value+'" ,"'+Emails.value+'" ,"'+selector.value+'" ,"'+Info.value+'")');
            submit();
            if(window.openDatabase){
                var db = openDatabase('MobNetSup.db', '1.0', 'MobNetSup DB', 2 * 1024 * 1024);
                db.transaction(function (tx) {
                    tx.executeSql('INSERT INTO ContactFormMaster (FirstName,LastName,Email,City,Problem) VALUES ("'+firstName.value+'" ,"'+lastName.value+'" ,"'+Emails.value+'" ,"'+selector.value+'" ,"'+Info.value+'")');
            })}
            if(languag=='#UA')
                {
                    Email.send({
                    SecureToken :"a9dddb5a-1d21-4e9b-a3b8-b7330b4a9582",
                    To : Emails.value,
                    From : "rud.andre.4455@gmail.com",
                    Subject : "Шановний "+firstName.value+" "+lastName.value+"!",
                    Body : "Дякуємо вам, за довіру до нашої компанії, ми обов'язково зв'яємось з вами за поштою: "+Emails.value+" протягом декількох годин, ваш MobNetSupport!"
                
                
                });
                }
            else{
                    Email.send({
                    SecureToken :"a9dddb5a-1d21-4e9b-a3b8-b7330b4a9582",
                    To : Emails.value,
                    From : "rud.andre.4455@gmail.com",
                    Subject : "Dear "+ firstName.value+" "+lastName.value+"!",
                    Body : "Thank you for trusting our company, we will definitely contact you by mail: "+Emails.value+" within a few hours, your MobNetSupport!"
                 }).then(
                    message => alert(message)
                  );
                }
               
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
    }
    )
})
});