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

const Button1 = document.getElementById("Product1");
const Button2 = document.getElementById("Product2");
const Button3 = document.getElementById("Product3");
const Button4 = document.getElementById("Product4");
const Button5 = document.getElementById("Product5");
const Result=document.getElementById("OrderPrice");


let price = 0;
let P1 = 0,
  P2 = 0,
  P3 = 0,
  P4 = 0,
  P5 = 0;


Button1.addEventListener("click", priceAdd);

Button2.addEventListener("click", priceAdd1);

Button3.addEventListener("click", priceAdd2);

Button4.addEventListener("click", priceAdd3);

Button5.addEventListener("click", priceAdd4);


function priceAdd() {
      P1++;
      if(window.openDatabase){
      var db = openDatabase('MobNetSup.db', '1.0', 'MobNetSup DB', 2 * 1024 * 1024);
      db.transaction(function (tx) {    
        tx.executeSql('UPDATE Services SET ProdCount="'+P1+'" WHERE id=1');
      }),
      db.transaction(function (tx) {    
        tx.executeSql('SELECT ProdCost FROM Services WHERE id=1',[],(tx,results)=>{
          let len=results.rows.length;
          let ProdCost1;
          for (let i = 0; i < len; i++) {
            ProdCost1=results.rows.item(i).ProdCost;
            ProdCost1=ProdCost1*P1;
          }
          if(languag=='#UA')
          {
            alert("Загальна сума замовлення складає: "+ ProdCost1 + '\nКількість замовленних Кабелів складає: '+ P1)
          }
          else{
            alert("The total amount of the order is: "+ ProdCost1 +'\nThe number of ordered Сables is: '+ P1)
        }
      }) 
      })}
     
}

function priceAdd1() {
    P2++;
    if(window.openDatabase){
    var db = openDatabase('MobNetSup.db', '1.0', 'MobNetSup DB', 2 * 1024 * 1024);
    db.transaction(function (tx) {    
      tx.executeSql('UPDATE Services SET ProdCount="'+P2+'" WHERE id=2');
    }),
    db.transaction(function (tx) {    
      tx.executeSql('SELECT ProdCost FROM Services WHERE id=2',[],(tx,results)=>{
        let len=results.rows.length;
        let ProdCost2;
        for (let i = 0; i < len; i++) {
          ProdCost2=results.rows.item(i).ProdCost;
          ProdCost2=ProdCost2*P2;
        }
        if(languag=='#UA')
        {
          alert("Загальна сума замовлення складає: " + ProdCost2 +'\nКількість замовленних Репіторів складає: '+ P2)
        }
        else{
          alert("The total amount of the order is: " + ProdCost2 +'\nThe number of ordered Repeaters is: '+ P2)
      }
    }) 
    })}
}

function priceAdd2() {
    P3++;
    if(window.openDatabase){
      var db = openDatabase('MobNetSup.db', '1.0', 'MobNetSup DB', 2 * 1024 * 1024);
      db.transaction(function (tx) {    
        tx.executeSql('UPDATE Services SET ProdCount="'+P3+'" WHERE id=3');
      }),
      db.transaction(function (tx) {    
        tx.executeSql('SELECT ProdCost FROM Services WHERE id=3',[],(tx,results)=>{
          let len=results.rows.length;
          let ProdCost3;
          for (let i = 0; i < len; i++) {
            ProdCost3=results.rows.item(i).ProdCost;
            ProdCost3=ProdCost3*P3;
          }
          if(languag=='#UA')
          {
            alert("Загальна сума замовлення складає: "+ ProdCost3+'\nКількість замовленних Антен базових складає: '+ P3)
          }
          else{
            alert("The total amount of the order is: " + ProdCost3 + '\nThe number of basic antennas ordered is: '+ P3)
        }
      }) 
      })}
}

function priceAdd3() {
    P4++;
    if(window.openDatabase){
      var db = openDatabase('MobNetSup.db', '1.0', 'MobNetSup DB', 2 * 1024 * 1024);
      db.transaction(function (tx) {    
        tx.executeSql('UPDATE Services SET ProdCount="'+P4+'" WHERE id=4');
      }),
      db.transaction(function (tx) {    
        tx.executeSql('SELECT ProdCost FROM Services WHERE id=4',[],(tx,results)=>{
          let len=results.rows.length;
          let ProdCost4;
          for (let i = 0; i < len; i++) {
            ProdCost4=results.rows.item(i).ProdCost;
            ProdCost4=ProdCost4*P4;
          }
          if(languag=='#UA')
          {
            alert("Загальна сума замовлення складає: "+ ProdCost4 + "\nКількість замовленних Сім-карт складає: " + P4)
          }
          else{
            alert("The total amount of the order is: "+ ProdCost4 + "\nThe number of SIM cards ordered is: " + P4)
        }
      }) 
      })}
  
}
function priceAdd4() {
    P5++;
    if(window.openDatabase){
      var db = openDatabase('MobNetSup.db', '1.0', 'MobNetSup DB', 2 * 1024 * 1024);
      db.transaction(function (tx) {    
        tx.executeSql('UPDATE Services SET ProdCount="'+P5+'" WHERE id=5');
      }),
      db.transaction(function (tx) {    
        tx.executeSql('SELECT ProdCost FROM Services WHERE id=5',[],(tx,results)=>{
          let len=results.rows.length;
          let ProdCost5;
          for (let i = 0; i < len; i++) {
            ProdCost5=results.rows.item(i).ProdCost;
            ProdCost5=ProdCost5*P5;
          }
          if(languag=='#UA')
          {
            alert("Загальна сума замовлення складає: "+ ProdCost5 +'\nКількість замовленних Станцій складає: '+ P5)
          }
          else{
            alert("The total amount of the order is: "+ ProdCost5 +'\nThe number of ordered Stations is: '+ P5)
        }
      }) 
      })}
}
    })