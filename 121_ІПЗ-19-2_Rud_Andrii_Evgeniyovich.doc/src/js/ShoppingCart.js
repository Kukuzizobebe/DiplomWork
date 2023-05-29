document.addEventListener("DOMContentLoaded", () => {
  function getHashFromDatabase() {
    return new Promise(function (resolve, reject) {
      db.transaction(function (tx) {
        tx.executeSql(
          "SELECT lang FROM Languages WHERE id=1",
          [],
          function (tx, results) {
            let len = results.rows.length;
            if (len > 0) {
              let languag = results.rows.item(0).lang;
              resolve(languag);
            }
          }
        );
      });
    });
  }

  getHashFromDatabase().then(function (languag) {
    const clearButton = document.getElementById("ClearButton");
    const sendButton = document.getElementById("SentButton");

    const textForCount = document.getElementById("countOfP1");
    const textForCount1 = document.getElementById("countOfP2");
    const textForCount2 = document.getElementById("countOfP3");
    const textForCount3 = document.getElementById("countOfP4");
    const textForCount4 = document.getElementById("countOfP5");

    const sumForP1 = document.getElementById("sum1");
    const sumForP2 = document.getElementById("sum2");
    const sumForP3 = document.getElementById("sum3");
    const sumForP4 = document.getElementById("sum4");
    const sumForP5 = document.getElementById("sum5");

    const minusForP1 = document.getElementById("minus1");
    const minusForP2 = document.getElementById("minus2");
    const minusForP3 = document.getElementById("minus3");
    const minusForP4 = document.getElementById("minus4");
    const minusForP5 = document.getElementById("minus5");

    const totalSum = document.getElementById("totalsum");

    let P1 = 0;
    let P2 = 0;
    let P3 = 0;
    let P4 = 0;
    let P5 = 0;

    selectCountOfProd();

    minusForP1.addEventListener("click", () => {
      P1++;
      if (window.openDatabase) {
        var db = openDatabase(
          "MobNetSup.db",
          "1.0",
          "MobNetSup DB",
          2 * 1024 * 1024
        );
        db.transaction(function (tx) {
          tx.executeSql(
            "SELECT ProdCount FROM Services WHERE id=1",
            [],
            (tx, results) => {
              let len = results.rows.length;
              let ProdCount1;
              for (let i = 0; i < len; i++) {
                ProdCount1 = results.rows.item(i).ProdCount;
                if (ProdCount1 > 0) {
                  ProdCount1 = ProdCount1 - P1;
                  db.transaction(function (tx) {
                    tx.executeSql(
                      "UPDATE Services SET ProdCount=? WHERE id=1",
                      [ProdCount1]
                    );
                    textForCount.textContent = ProdCount1;
                    location.reload();
                  });
                }
              }
            }
          );
        });
      }
    });

    minusForP2.addEventListener("click", () => {
      P2++;
      if (window.openDatabase) {
        var db = openDatabase(
          "MobNetSup.db",
          "1.0",
          "MobNetSup DB",
          2 * 1024 * 1024
        );
        db.transaction(function (tx) {
          tx.executeSql(
            "SELECT ProdCount FROM Services WHERE id=2",
            [],
            (tx, results) => {
              let len = results.rows.length;
              let ProdCount2;
              for (let i = 0; i < len; i++) {
                ProdCount2 = results.rows.item(i).ProdCount;
                if (ProdCount2 > 0) {
                  ProdCount2 = ProdCount2 - P2;
                  db.transaction(function (tx) {
                    tx.executeSql(
                      "UPDATE Services SET ProdCount=? WHERE id=2",
                      [ProdCount2]
                    );
                    textForCount.textContent = ProdCount2;
                    location.reload();
                  });
                }
              }
            }
          );
        });
      }
    });

    minusForP3.addEventListener("click", () => {
      P3++;
      if (window.openDatabase) {
        var db = openDatabase(
          "MobNetSup.db",
          "1.0",
          "MobNetSup DB",
          2 * 1024 * 1024
        );
        db.transaction(function (tx) {
          tx.executeSql(
            "SELECT ProdCount FROM Services WHERE id=3",
            [],
            (tx, results) => {
              let len = results.rows.length;
              let ProdCount3;
              for (let i = 0; i < len; i++) {
                ProdCount3 = results.rows.item(i).ProdCount;
                if (ProdCount3 > 0) {
                  ProdCount3 = ProdCount3 - P3;
                  db.transaction(function (tx) {
                    tx.executeSql(
                      "UPDATE Services SET ProdCount=? WHERE id=3",
                      [ProdCount3]
                    );
                    textForCount.textContent = ProdCount3;
                    location.reload();
                  });
                }
              }
            }
          );
        });
      }
    });

    minusForP4.addEventListener("click", () => {
      P4++;
      if (window.openDatabase) {
        var db = openDatabase(
          "MobNetSup.db",
          "1.0",
          "MobNetSup DB",
          2 * 1024 * 1024
        );
        db.transaction(function (tx) {
          tx.executeSql(
            "SELECT ProdCount FROM Services WHERE id=4",
            [],
            (tx, results) => {
              let len = results.rows.length;
              let ProdCount4;
              for (let i = 0; i < len; i++) {
                ProdCount4 = results.rows.item(i).ProdCount;
                if (ProdCount4 > 0) {
                  ProdCount4 = ProdCount4 - P4;
                  db.transaction(function (tx) {
                    tx.executeSql(
                      "UPDATE Services SET ProdCount=? WHERE id=4",
                      [ProdCount4]
                    );
                    textForCount.textContent = ProdCount4;
                    location.reload();
                  });
                }
              }
            }
          );
        });
      }
    });

    minusForP5.addEventListener("click", () => {
      P5++;
      if (window.openDatabase) {
        var db = openDatabase(
          "MobNetSup.db",
          "1.0",
          "MobNetSup DB",
          2 * 1024 * 1024
        );
        db.transaction(function (tx) {
          tx.executeSql(
            "SELECT ProdCount FROM Services WHERE id=5",
            [],
            (tx, results) => {
              let len = results.rows.length;
              let ProdCount5;
              for (let i = 0; i < len; i++) {
                ProdCount5 = results.rows.item(i).ProdCount;
                if (ProdCount5 > 0) {
                  ProdCount5 = ProdCount5 - P5;
                  db.transaction(function (tx) {
                    tx.executeSql(
                      "UPDATE Services SET ProdCount=? WHERE id=5",
                      [ProdCount5]
                    );
                    textForCount.textContent = ProdCount5;
                    location.reload();
                  });
                }
              }
            }
          );
        });
      }
    });

    function selectCountOfProd() {
      if (window.openDatabase) {
        function calculateTotalSum() {
          totalSum.textContent =
            Number(sumForP1.textContent) +
            Number(sumForP2.textContent) +
            Number(sumForP3.textContent) +
            Number(sumForP4.textContent) +
            Number(sumForP5.textContent);
        }
        var db = openDatabase(
          "MobNetSup.db",
          "1.0",
          "MobNetSup DB",
          2 * 1024 * 1024
        );
        db.transaction(function (tx) {
          tx.executeSql(
            "SELECT ProdCount FROM Services WHERE id=1",
            [],
            (tx, results) => {
              let len = results.rows.length;
              let ProdCount1;
              for (let i = 0; i < len; i++) {
                ProdCount1 = results.rows.item(i).ProdCount;
                textForCount.textContent = ProdCount1;
                sumForP1.textContent = 350 * Number(textForCount.textContent);
                calculateTotalSum();
              }
            }
          );
        }),
          db.transaction(function (tx) {
            tx.executeSql(
              "SELECT ProdCount FROM Services WHERE id=2",
              [],
              (tx, results) => {
                let len = results.rows.length;
                let ProdCount2;
                for (let i = 0; i < len; i++) {
                  ProdCount2 = results.rows.item(i).ProdCount;
                  textForCount1.textContent = ProdCount2;
                  sumForP2.textContent =
                    3499 * Number(textForCount1.textContent);
                  calculateTotalSum();
                }
              }
            );
          });

        db.transaction(function (tx) {
          tx.executeSql(
            "SELECT ProdCount FROM Services WHERE id=3",
            [],
            (tx, results) => {
              let len = results.rows.length;
              let ProdCount3;
              for (let i = 0; i < len; i++) {
                ProdCount3 = results.rows.item(i).ProdCount;
                textForCount2.textContent = ProdCount3;
                sumForP3.textContent = 4300 * Number(textForCount2.textContent);
                calculateTotalSum();
              }
            }
          );
        });

        db.transaction(function (tx) {
          tx.executeSql(
            "SELECT ProdCount FROM Services WHERE id=4",
            [],
            (tx, results) => {
              let len = results.rows.length;
              let ProdCount4;
              for (let i = 0; i < len; i++) {
                ProdCount4 = results.rows.item(i).ProdCount;
                textForCount3.textContent = ProdCount4;
                sumForP4.textContent = 100 * Number(textForCount3.textContent);
                calculateTotalSum();
              }
            }
          );
        });

        db.transaction(function (tx) {
          tx.executeSql(
            "SELECT ProdCount FROM Services WHERE id=5",
            [],
            (tx, results) => {
              let len = results.rows.length;
              let ProdCount5;
              for (let i = 0; i < len; i++) {
                ProdCount5 = results.rows.item(i).ProdCount;
                textForCount4.textContent = ProdCount5;
                sumForP5.textContent = 5587 * Number(textForCount4.textContent);
                calculateTotalSum();
              }
            }
          );
        });
      }
    }

    clearButton.addEventListener("click", () => {
      if (window.openDatabase) {
        var db = openDatabase(
          "MobNetSup.db",
          "1.0",
          "MobNetSup DB",
          2 * 1024 * 1024
        );
        db.transaction(function (tx) {
          tx.executeSql("UPDATE Services SET ProdCount=0 WHERE id=1");
          tx.executeSql("UPDATE Services SET ProdCount=0 WHERE id=2");
          tx.executeSql("UPDATE Services SET ProdCount=0 WHERE id=3");
          tx.executeSql("UPDATE Services SET ProdCount=0 WHERE id=4");
          tx.executeSql("UPDATE Services SET ProdCount=0 WHERE id=5");
        });
      }

      location.reload();
      if (languag == "#UA") {
        alert("Корзина пуста!");
      } else {
        alert("The cart is empty!");
      }
    });

    sendButton.addEventListener("click", (event) => {
      if (window.openDatabase) {
        let ProdCount = textForCount.textContent;
        let ProdCount1 = textForCount1.textContent;
        let ProdCount2 = textForCount2.textContent;
        let ProdCount3 = textForCount3.textContent;
        let ProdCount4 = textForCount4.textContent;

        let body =
          "<h1>Вы замовили:</h1><br><h3>Кількість замовленних Кабелів складає: " +
          ProdCount +
          "</h3><br><h3>Кількість замовленних Репіторів складає: " +
          ProdCount1 +
          "</h3><br><h3>Кількість замовленних Антен базових складає: " +
          ProdCount2 +
          "</h3><br><h3>Кількість замовленних Сім-карт складає: " +
          ProdCount3 +
          "</h3><br><h3>Кількість замовленних Станцій складає: " +
          ProdCount4 +
          "</h3><br><h3>Загальна сума: " +
          totalSum.textContent +
          "</h3><br><h3>Оплата: Монобанк: 4444 1111 5555 7777,   ПриватБанк: 4444 8888 7777 4444,   Райффайзенбанк: 4444 5555 7777 8888,</h3><br><h3>Дякуємо за замовлення, Ваш MobNetSupport!</h3><br><h3>";
        let body1 =
          "<h1>You ordered:</h1><br><h3>The number of cables ordered is: " +
          ProdCount +
          "</h3><br><h3>The number of repeaters ordered is: " +
          ProdCount1 +
          "</h3><br><h3>The number of basic antennas ordered is: " +
          ProdCount2 +
          "</h3><br><h3>The number of SIM cards ordered is: " +
          ProdCount3 +
          "</h3><br><h3>The number of stations ordered is: " +
          ProdCount4 +
          "</h3><br><h3>Total amount: " +
          totalSum.textContent +
          "</h3><br><h3>Payment:Monobank: 4444 1111 5555 7777,PrivatBank: 4444 8888 7777 4444,Raiffeisenbank: 4444 5555 7777 8888,</h3><br><h3>Thank you for your order, Yours MobNetSupport!</h3>";

        var db = openDatabase(
          "MobNetSup.db",
          "1.0",
          "MobNetSup DB",
          2 * 1024 * 1024
        );
        db.transaction(function (tx) {
          tx.executeSql(
            "SELECT Email FROM RecentEmail WHERE id=1",
            [],
            (tx, results) => {
              let len = results.rows.length;
              let Emails;
              for (let i = 0; i < len; i++) {
                Emails = results.rows.item(i).Email;
                if (languag == "#UA") {
                  Email.send({
                    SecureToken: "a9dddb5a-1d21-4e9b-a3b8-b7330b4a9582",
                    To: Emails,
                    From: "rud.andre.4455@gmail.com",
                    Subject: "Ваше замовлення сформоване!",
                    Body: body,
                  }).then((message) =>
                    alert(
                      "Чек буде відправленно на вашу пошту: " +
                        Emails +
                        ",\nдякуємо за замовлення, Ваш MobNetSupport"
                    )
                  );
                } else {
                  Email.send({
                    SecureToken: "a9dddb5a-1d21-4e9b-a3b8-b7330b4a9582",
                    To: Emails,
                    From: "rud.andre.4455@gmail.com",
                    Subject: "Ваше замовлення сформоване!",
                    Body: body1,
                  }).then((message) =>
                    alert(
                      "The check will be sent to your mail: " +
                        Emails +
                        ",\nThank you for your order, Yours MobNetSupport"
                    )
                  );
                }
              }
            }
          );
        });
      }
    });
  });
});
