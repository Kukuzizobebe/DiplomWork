
const ExitButton=document.getElementById("Exit")
ExitButton.addEventListener('click',()=>{
    if(window.openDatabase){
        var db = openDatabase('MobNetSup.db', '1.0', 'MobNetSup DB', 2 * 1024 * 1024);
        db.transaction(function (tx) {
            tx.executeSql('UPDATE Services SET ProdCount=0 WHERE id=1');
            tx.executeSql('UPDATE Services SET ProdCount=0 WHERE id=2');
            tx.executeSql('UPDATE Services SET ProdCount=0 WHERE id=3');
            tx.executeSql('UPDATE Services SET ProdCount=0 WHERE id=4');
            tx.executeSql('UPDATE Services SET ProdCount=0 WHERE id=5');
    })}
    
})
