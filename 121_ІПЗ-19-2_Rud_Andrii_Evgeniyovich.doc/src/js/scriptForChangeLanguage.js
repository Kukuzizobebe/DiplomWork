
if(window.openDatabase){
var db = openDatabase('MobNetSup.db', '1.0', 'MobNetSup DB', 2 * 1024 * 1024);
const arrLang={
  'Services':{
    'UA':'Послуги',
    'ENG':'Services'
  },
  'Login':{
    'UA':'Авторизація',
    'ENG':'Sign in'
  },
  'Registration':
  {
    'UA':'Реєстрація',
    'ENG':'Sign up'
  },
  'Contacts':
  {
    'UA':'Контакти',
    'ENG':'Contacts'
  },
  'ContactInfo':
  {
    'UA':'Контактна інформація',
    'ENG':'Contacts information'
  },
  'CallBack':
  {
    'UA':'Зателефонуємо до вас',
    'ENG':'We call back to you'
  },
  'Fname':
  {
    'UA':"Ваше ім'я",
    'ENG':'Your firstname'
  },
  'Lname':
  {
    'UA':"Ваше прізвище",
    'ENG':'Your lastname'
  },
  'Yemail':
  {
    'UA':"Ваш номер телефону",
    'ENG':'Your phone number'
  },
  'Client':
  {
    'UA':"Клієнт",
    'ENG':'Client'
  },
  'NClient':
  {
    'UA':"Новий клієнт",
    'ENG':'New client'
  },
  'EClient':
  {
    'UA':"Існуючий клієнт",
    'ENG':'Existing client'
  },
  'ButtonF':
  {
    'UA':"Записатись",
    'ENG':'Enroll'
  },
  'EAcc':
  {
    'UA':"Авторизація до аккаунту",
    'ENG':'Sign in'
  },
  'ILogin':
  {
    'UA':"Ваша пошта",
    'ENG':'Your email'
  },
  'IPassword':
  {
    'UA':"Ваш пароль",
    'ENG':'Your password'
  },
  'loginbtn':
  {
    'UA':"Продовжити",
    'ENG':'Continue'
  },
  'registerbtn':
  {
    'UA':"Зареєструвати",
    'ENG':"Register"
  },
  'RAcc':
  {
    'UA':"Реєстрація аккаунту",
    'ENG':'Sign up'
  },
  'IPassword1':
  {
    'UA':"Повторіть пароль",
    'ENG':'Confirm password'
  },
  'Cable':
  {
    'UA':"Кабель RG-58",
    'ENG':'RG-58 cable'
  },
  'CableT':
  {
    'UA':"Кабель RG-58 - це кабель, призначений для вирішення проведення кабельного та супутникового зв'язку. Надаємо як сам товар так і за додаткову плату його встановлення.",
    'ENG':'Cable RG-58 - the same cable, intended for carrying out cable and satellite communications. We give it as the product itself, and for an additional fee, it is installed.'
  },
  'Repit':
  {
    'UA':"Встановлення репітора 3 діапазоном 900/1800/2100 МГц",
    'ENG':'Installation of repeater 3 with a range of 900/1800/2100 MHz'
  },
  'RepitT':
  {
    'UA':"Репітер - це пристрій, мережеве обладнання для підсилювання сигналу.Надаємо як сам товар так і за додаткову плату його встановлення.",
    'ENG':'Repeater is a device, network equipment for signal amplification. We provide both the product itself and its installation for an additional fee.'
  },
  'Ant':
  {
    'UA':"Встановлення антени базової дводіапазонна",
    'ENG':'Installation of a basic two-band antenna'
  },
  'AntT':
  {
    'UA':"Антена базова дводіапазонна - це пристрій, предназначена для стационарной установки, щоб забезпечитив работу в двух діапазонах частот УКВ.Надаємо як сам товар так і за додаткову плату його встановлення.",
    'ENG':'The basic two-band antenna is a device designed for stationary installation to ensure operation in two VHF frequency bands. We provide both the product itself and its installation for an additional fee.'
  },
  'Sim':
  {
    'UA':"Сім-карти з підтримкою 4G",
    'ENG':'SIM card with 4G support'
  },
  'SimT':
  {
    'UA':"Головне її завдання – це автентифікація користувача в мережі або простими словами – це перевірка для оператора та абонента.Надаємо як сам товар так і за додаткову плату його встановлення.",
    'ENG':'Its main task is user authentication in the network, or in simple words, it is a check for the operator and the subscriber. We provide both the product itself and its installation for an additional fee.'
  },
  'Mikr':
  {
    'UA':"Встановлення станції Mikrotik mANTBox 52",
    'ENG':'Installing the Mikrotik mANTBox 52 station'
  },
  'MikrT':
  {
    'UA':"Mikrotik mANTBox - це пристрій, який працює з робочою частотою 5.1 - 5.8 GHz, підтримкою стандартів Wi-Fi 802.11 a/n/ac та займається підтримкою зв'язку. Надаємо як сам товар так і за додаткову плату його встановлення.",
    'ENG':'Mikrotik mANTBox is a device that works with an operating frequency of 5.1 - 5.8 GHz, supports Wi-Fi 802.11 a/n/ac standards and is engaged in communication support. We provide both the product itself and its installation for an additional fee.'
  },
  'Maist':
  {
    'UA':"Виклик майстра",
    'ENG':'Call the master'
  },
  'MaistT':
  {
    'UA':"Виклик майства - це окремий функціонал, відповідно до якого, замовляються послуги майстра від нашої компанії з налаштуванням окремих девайсів за вимогами користувача.",
    'ENG':"Calling a master is a separate functionality, according to which, the services of a master are ordered from our company with the configuration of individual devices according to the user's requirements."
  },
  'MaistP':
  {
    'UA':"Ціна уточнюється",
    'ENG':'The price is being clarified'
  },
  'Product1':
  {
    'UA':"Замовити",
    'ENG':'Order'
  },
  'Product2':
  {
    'UA':"Замовити",
    'ENG':'Order'
  },
  'Product3':
  {
    'UA':"Замовити",
    'ENG':'Order'
  },
  'Product4':
  {
    'UA':"Замовити",
    'ENG':'Order'
  },
  'Product5':
  {
    'UA':"Замовити",
    'ENG':'Order'
  },
  'Product6':
  {
    'UA':"Замовити",
    'ENG':'Order'
  },
  'MaistZ':
  {
    'UA':"Замовити майстра",
    'ENG':"Master's service"
  },
  'fiName':
  {
    'UA':"Ваше ім'я",
    'ENG':"Your firstname"
  },
  'LaName':
  {
    'UA':"Ваше прізвище",
    'ENG':"Your lastname"
  },
  'ZEmail':
  {
    'UA':"Ваша пошта",
    'ENG':"Your email"
  },
  'Dnipro':
  {
    'UA':"Дніпро",
    'ENG':"Dnipro"
  },
  'Lviv':
  {
    'UA':"Львів",
    'ENG':"Lviv"
  },
  'Odessa':
  {
    'UA':"Одеса",
    'ENG':"Odessa"
  },
  'Zaporizhzhia':
  {
    'UA':"Запоріжжя",
    'ENG':"Zaporizhzhia"
  },
  'Kiyv':
  {
    'UA':"Київ",
    'ENG':"Kiyv"
  },
  'Cities':
  {
    'UA':"Ваше місто",
    'ENG':"Your city"
  },
  'AddInfo':
  {
    'UA':"Опис проблеми",
    'ENG':"Description of the problem"
  },
  'ordermaster':
  {
    'UA':'Подати запит',
    'ENG':'Submit a request'
  },
  'Exit':{
    'UA':'Вихід',
    'ENG':'Sign out',
  },
  'OrderPrice':{
    'UA':'Корзина',
    'ENG':'Shopping cart'
  },
  'NameOfServ':{
    'UA':"Назва товару/послуги",
    'ENG':"Product/service name",
  },
  'SumOfServ':{
    'UA':"Сума за товар/послугу",
    'ENG':"The amount for the product/service",
  },
  'CountOfServ':{
    'UA':"Кількість замовленних товарів/послуг",
    'ENG':"Number of products/services ordered",
  },
  'MinusOfServ':{
    'UA':"Відняти",
    'ENG':"Minus",
  },
  'totalSum':{
    'UA':"Загальна сума",
    'ENG':"Total sum",
  },
  'SendButton':{
    'UA':"Відправити на пошту",
    'ENG':"Send to email"
  },
  'CleanButton':{
    'UA':"Очистити кошик",
    'ENG':"Clean cart"
  },
  'Text1h2':
  {
    'UA':"Мобільний зв'язок",
    'ENG':"Mobile Communication"
  },
  'Textp':
  {
    'UA':"Зв'язок із застосуванням радіотехнологій, під час якого кінцеве обладнання хоча б одного із споживачів може вільно переміщуватися в межах телекомунікаційної мережі, зберігаючи єдиний унікальний ідентифікаційний номер мобільної станції.",
    'ENG':"Communication using radio technologies during which the end equipment thoughb of one of the consumers can move freely within the telecommunications network,keeping a single unique identification number of the mobile station."
  },
  'Text2h2':
  {
    'UA':"Стаціонарний телефон як перший спосіб зв'язку",
    'ENG':"Landline telephone as the first method of communication"
  },
  'Text2p':
  {
    'UA':" Давним-давно міста були оповиті кілометрами кабелів, за якими здійснювалися дзвінки. Тоді не було електронних систем для автоматичної обробки викликів,  а у телефонів були відсутні диски і кнопки для прямого набору потрібного абонента.  Дзвінок проходив через комутатор до центральної станції, де було безліч комутаційних щитів і телефоністок. Абонент кожен раз говорив, з ким його треба з'єднати. Телефоністка визначала, місцевий це дзвінок або міжміський.",
    'ENG':"Once upon a time, cities were surrounded by kilometers of cables for making calls.Then there were no electronic systems for automatic call processing,and the telephones lacked dials and buttons for direct dialing of the desired subscriber.The call went through a switch to the central station, where there were many switchboardsshields and telephone boxes. The subscriber said every time with whom he should be connected.The operator determined whether it was a local call or a long-distance call."
  },
  'Text2p2':
  {
    'UA':"Така система була актуальною до 1920-років, коли телефони обзавелися складальними дисками.  На зміну телефонисткам прийшло електромеханічне комутаційне обладнання, яке використовувало  приводи, шукачі і реле. Один з типів електромеханічного комутатора - декадно-кроковий. Він  реагував на цифру, набрану на телефонному диску, а потім шукав шлях з'єднання. Повне витіснення електромеханічних комутаторів цифровими відбулося лише до 2000-х років.",
    'ENG':"This system was relevant until the 1920s, when telephones acquired collapsible discs.Operators were replaced by electromechanical switching equipment that used actuators, detectors and relays. One of the types of electromechanical commutator is ten-step. Heresponded to the number dialed on the telephone dial, and then looked for a connection path. The complete displacement of electromechanical switches by digital ones took place only by the 2000s."
  },
  'Text3h2':
  {
    'UA':"Початок ери бездротових технологій",
    'ENG':"The beginning of the era of wireless technologies"
  },
  'Text3p':
  {
    'UA':"Цікаво, що попередниками мобільних телефонів були автомобільні пристрої, вони встановлювалися в кузові  машин. Поява справжнього мобільника стало можливим завдяки збігу низки обставин.Роберт Міллер з США в 1970-ті роки активно розвивав ідею мобільних телефонів. Одного дня він дізнався, що компанія Intel випустила мікропроцесор 8008, який здатний був виконувати всі необхідні операції.Однак перший масовий мобільний телефон був винайдений в Америці. У Motorola зібралися кращі інженери і промислові дизайнери для створення першого мобільного пристрою DynaTAC 8000X. І у них це чудово вийшло (в іншому випадку  компанія б закрилася, так як її з усіх боків давив найсильніший конкурент - телекомунікаційна компанія АТ & Т).  Цікаво, що телефон був сконструйований всього лише за 3 місяці: саме такий термін встановив директор Motorola Мартін Купер.",
    'ENG':"It is interesting that the predecessors of mobile phones were car devices, they were installed in the bodycars The emergence of a real mobile phone became possible due to the coincidence of a number of circumstances.Robert Miller from the USA actively developed the idea of mobile phones in the 1970s. One day he found out that Intel released the 8008 microprocessor, which was capable of performing all the necessary operations.However, the first mass mobile phone was invented in America. The best engineers and industrialists gathered at Motorola designers to create the first DynaTAC 8000X mobile device. And it turned out great for them (otherwise the company would have closed, as it was pressed from all sides by the strongest competitor - the telecommunications company JSC & T). It is interesting that the phone was designed in just 3 months: this is the deadline set by the director of Motorola, Martin Cooper."
  },
  'Text4h2':
  {
    'UA':"Коли світ усвідомив, що майбутнє за бездротовим зв'язком",
    'ENG':"When the world realized that the future is wireless"
  },
  'Text4p':
  {
    'UA':"Таким чином, одночасно можна було посилати тільки одне повідомлення або приймати.«Титанік» отримав телеграму від лайнера «Каліфорнія», який плив неподалік, про великому скупченні льоду. Ця інформація була проігнорована:  Філіпс продовжив відправляти повідомлення пасажирів першого класу на материк. «Каліфорнія» перешкоджала нормальній відправці телеграм, так як займала ту ж частоту. У підсумку цей лайнер отримав від «Титаніка» обурене повідомлення з проханням негайно припинити радіообмін. Через 45 хвилин після цього сталося зіткнення з айсбергом. В той момент Джек Філіпс з жахом усвідомив свою помилку.Цікаво, що корабель «Каліфорнія» все ще перебував поруч, проте він не міг отримати сповіщення про катастрофу.  Причина цього банальна: оператор задовольнив прохання Філіпса і пішов спати.Через пару тижнів після катастрофи американський уряд на законодавчому рівні зобов'язало кораблі підтримувати цілодобову радіозв'язок.  Потенціал бездротових комунікацій був усвідомлений.",
    'ENG':"Thus, only one message could be sent or received at a time. 'Titanic' received a telegram from the liner 'California', which was sailing nearby, about a large accumulation of ice. This information was ignored: Phillips continued to send first class messages to the mainland. 'California' interfered with the normal sending of telegrams, as it occupied the same frequency. As a result, this liner received an indignant message from the 'Titanic' with a request to immediately stop the radio exchange. 45 minutes later, a collision with an iceberg occurred. At that moment, Jack Phillips was horrified to realize his mistake. It is interesting that the ship 'California' was still nearby, but he could not receive notification of the disaster. The reason for this is banal: the operator complied with Phillips' request and went to sleep. A couple of weeks after the disaster, the American government legally obliged the ship to maintain 24-hour radio communication. The potential of wireless communications was realized."
  },
  'Text4p2':
  {
    'UA':"Люди отримали можливість дзвонити не тільки в рамках однієї мережі, а й на міські АТС, міжміські та за кордон. Одна базова станція охоплювала в середньому 60 км, а при рівнинному рельєфі радіус покриття міг становити навіть 100 км.Рік за роком мобільний зв'язок розвивався в різних країнах. До 1970 року використовувалася рухома телефонна радіозв'язок, а вже після виходу першого телефону, збільшенняпотреб населення та обмеженості каналів був здійснений перехід на системи стільникового зв'язку. Ємність мережі була збільшена за рахунок повторного використання частот в системі з комірчастою структурою.",
    'ENG':"People got the opportunity to call not only within the same network, but also to city PBX, long-distance and abroad. One base station covered an average of 60 km, and with flat terrain, the coverage radius could be even 100 km. Year after year, mobile communication developed in different countries. Until 1970, mobile telephone radio communication was used, and after the release of the first telephone, the increase in the needs of the population and the limitation of channels, the transition to cellular communication systems was made. The capacity of the network was increased due to the repeated use of frequencies in the system with a cellular structure."
  },
  'Text5h2':
  {
    'UA':"Питання безпеку і конфіденційності мобільних мереж",
    'ENG':"Issues of security and privacy of mobile networks"
  },
  'Text5p':
  {
    'UA':"У міру впровадження мобільного зв'язку постало питання про конфіденційність переданих даних. Особливо проблема прослуховування турбувала спецкористувачів радіочастотного ресурсу - поліцію і військових. Як не дивно, ідея, як захистити телефонні розмови від сторонніх вух, належить не уряду або окремим інженерам, а Хеді Ламарр - зірці Голлівуду. Ніхто навіть не підозрював про її здібності до винахідництва.",
    'ENG':"In the course of the introduction of mobile communication, the question of the confidentiality of transmitted data arose. The problem of eavesdropping especially bothered the special users of the radio frequency resource - the police and the military. Surprisingly, the idea of how to protect phone conversations from outside ears does not belong to the government or individual engineers, but to Hedy Lamarr - a Hollywood star. No one even suspected her inventive abilities."
  },
  'Text5p2':
  {
    'UA':"Хеді жила за часів Другої світової. Вона розуміла, чим можуть обернутися для світу прагнення Гітлера, тому хотіла якось допомогти США виграти війну.Знайти спосіб запобігання перехоплення даних Хеді допомогло звичайне фортепіано. Відомо, що музичний мотив створюється при переході з однієї ноти на іншу. Якщо радіосигнал буде перестрибувати кожну секунду з однієї частоти на іншу, його буде неможливо заглушити. Однак треба було придумати, як співрозмовники одночасно будуть «перескакувати» між конкретними каналами. У цьому теж допомогла музика, а саме механічне піаніно. Щоб два механічних інструменту грали синхронно, в них потрібно вставити перфокарти. Абсолютно те ж саме можна зробити  і з бездротовими передавачами.Хеді звернулася зі своїм винаходом до американського уряду. Тоді все заявили, що рішення непрактично. Тільки через 20 років (до 1950 року),  коли з'явилися інтегральні схеми, стали застосовувати зміну частот. Хеді за свою роботу не отримала ні цента. Цікаво, що технологія постійної зміни каналу використовується не тільки в GSM, CDMA та інших мережах, але і в Wi-Fi, Bluetooth.Таким чином, робота інженерів і винахідників з різних куточків світу дозволила створити те, без чого сьогодні ми не уявляємо життя, -  мобільний зв'язок. Розвиток технологій підштовхувалося різними страшними подіями, а також конкуренцією. Сьогодні мобільний зв'язок теж не стоїть на місці. Світ змінюється, нехай і не такими швидкими темпами, як раніше.",
    'ENG':"Hedy lived during the Second World War. She understood what Hitler's aspirations could turn into for the world, so she wanted to somehow help the United States win the war. An ordinary piano helped Hedi find a way to prevent data interception. It is known that a musical motif is created when moving from one note to another. If the radio signal jumps every second from one frequency to another, it will be impossible to jam it. However, it was necessary to figure out how the interlocutors would 'jump' between specific channels at the same time. This was also helped by music, namely the mechanical piano. In order for two mechanical instruments to play synchronously, punch cards must be inserted into them. The exact same thing can be done with wireless transmitters. Hedy turned to the American government with her invention. Then everyone said that the decision was impractical. Only after 20 years (until 1950), when integrated circuits appeared, they began to apply frequency change. Hedi did not receive a cent for her work. It is interesting that the technology of constant channel change is used not only in GSM, CDMA and other networks, but also in Wi-Fi, Bluetooth. Thus, the work of engineers and inventors from different parts of the world made it possible to create something without which we cannot imagine life today. -  Mobile Communication. The development of technology was pushed by various terrible events, as well as competition. Today, mobile communication also does not stand still. The world is changing, albeit not at such a fast pace as before."
  },
};

const allLang=['UA','ENG']
const select=document.getElementById('selector-lang')

select.addEventListener('change',changeURLLanguage);

function changeURLLanguage()
{
  if(window.openDatabase){
  let lang="#"+select.value
  location.href=window.location.pathname+lang;
    var db = openDatabase('MobNetSup.db', '1.0', 'MobNetSup DB', 2 * 1024 * 1024);
    db.transaction(function (tx) {    
      tx.executeSql('UPDATE Languages SET lang="'+ window.location.hash +'" WHERE id=1');
      location.reload()
    })
  }
}


  function changeLanguage()
  {
    function getHashFromDatabase() {
      return new Promise(function(resolve, reject) {
        db.transaction(function(tx) {
          tx.executeSql('SELECT lang FROM Languages WHERE id=1', [], function(tx, results) {
            let len = results.rows.length;
            if (len > 0) {
              let hash = results.rows.item(0).lang;
              resolve(hash);
            } else {
              reject(new Error('No hash found'));
            }
          });
        });
      });
    }
    
    getHashFromDatabase()
      .then(function(hash) {
        // Значення hash успішно отримано з бази даних
        hash = hash.substr(1);
        if (!allLang.includes(hash)) {
          location.href = window.location.pathname + '#' + select.value;
          location.reload();
        }
        select.value = hash;
        for (let key in arrLang) {
          let element = document.querySelector('.' + key);
          if (element) {
            element.innerHTML = arrLang[key][hash];
          }
        }
      })

  }
  changeLanguage()
}



  
  

  


  


  
