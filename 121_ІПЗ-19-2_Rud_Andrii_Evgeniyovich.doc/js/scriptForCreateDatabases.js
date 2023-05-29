if(window.openDatabase){
  var db = openDatabase('MobNetSup.db', '1.0', 'MobNetSup DB', 2 * 1024 * 1024);
  db.transaction(function (tx) {    
    tx.executeSql('CREATE TABLE IF NOT EXISTS Languages (id INTEGER PRIMARY KEY,lang TEXT)');
  }),
  db.transaction(function(tx){
    tx.executeSql('INSERT INTO Languages (id,lang) VALUES (1,"#UA")');
  }),
  db.transaction(function (tx) {    
  tx.executeSql('CREATE TABLE Users (id INTEGER PRIMARY KEY,Email TEXT,Password TEXT)'); 
  }),
  db.transaction(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS Services (id INTEGER PRIMARY KEY,ProdName TEXT,ProdCount INT,ProdCost INT)');  
  }),
  db.transaction(function (tx) {
  tx.executeSql('INSERT INTO Services (id,ProdName,ProdCount,ProdCost) VALUES (1,"Проведення кабелю RG-58",0,350)');
  tx.executeSql('INSERT INTO Services (id,ProdName,ProdCount,ProdCost) VALUES (2,"Встановлення репітора 3 діапазоном 900/1800/2100 МГц",0,3499)');
  tx.executeSql('INSERT INTO Services (id,ProdName,ProdCount,ProdCost) VALUES (3,"Встановлення антени базової дводіапазонна",0,4300)');
  tx.executeSql('INSERT INTO Services (id,ProdName,ProdCount,ProdCost) VALUES (4,"Встановлення сім-карти з підтримкою 4G",0,100)');
  tx.executeSql('INSERT INTO Services (id,ProdName,ProdCount,ProdCost) VALUES (5,"Встановлення станції Mikrotik mANTBox 52",0,5587)');
  }),
   db.transaction(function (tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS Contact (id INTEGER PRIMARY KEY,FirstName TEXT,LastName TEXT,PhoneNumber TEXT,TypeOfClient TEXT)');
   }), 
   db.transaction(function (tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS ContactFormMaster (id INTEGER PRIMARY KEY,FirstName TEXT,LastName TEXT,Email TEXT,City TEXT,Problem TEXT)'); 
   }),
   db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS RecentEmail (id INTEGER PRIMARY KEY,Email TEXT)'); 
    tx.executeSql('INSERT INTO RecentEmail (id,Email) VALUES (1,"")'); 
 }) 
}

  
    
      
    
