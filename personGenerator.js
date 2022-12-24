const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Елена",
            "id_2": "Екатерина",
            "id_3": "Светлана",
            "id_4": "Ирина",
            "id_5": "Анастасия",
            "id_6": "Виктория",
            "id_7": "Анна",
            "id_8": "Мария",
            "id_9": "Валерия",
            "id_10": "Дарья"
        }
    }`,
    femaleFamilyNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Олеговна",
            "id_2": "Павловна",
            "id_3": "Юрьевна",
            "id_4": "Яковлевна",
            "id_5": "Степановна",
            "id_6": "Львовна",
            "id_7": "Олеговна",
            "id_8": "Богдановна",
            "id_9": "Борисовна",
            "id_10": "Георгиевна"
        }
    }`,
    maleFamilyNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Иванович",
            "id_2": "Смирнович",
            "id_3": "Кузнецович",
            "id_4": "Попович",
            "id_5": "Васильевич",
            "id_6": "Петрович",
            "id_7": "Соколович",
            "id_8": "Михайлович",
            "id_9": "Медведевич",
            "id_10": "Орехович"
        }
    }`,
    occupationJson: `{
        "count": 15,
        "list": {
            "id_1": "Водитель",
            "id_2": "Электромонтер",
            "id_3": "Программист",
            "id_4": "Врач",
            "id_5": "Менеджер",
            "id_6": "Официант",
            "id_7": "Биотехнолог",
            "id_8": "Дизайнер",
            "id_9": "Воспитатель",
            "id_10": "Секретарь",
            "id_11": "Косметолог",
            "id_12": "Швея",
            "id_13": "Оператор",
            "id_14": "Медсестра",
            "id_15": "Слесарь",
            "id_16": "Инженер"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);     
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
        if (gender===this.GENDER_MALE){
            return this.randomValue(this.firstNameMaleJson);   
        } else  {
            return this.randomValue(this.firstNameFemaleJson);  
        } 
    },

     randomSurname: function(gender) { 
        if (gender===this.GENDER_MALE){
            return this.randomValue(this.surnameJson);   
        } else  {
            return `${this.randomValue(this.surnameJson)}a`;  
        }  
    },   

    randomGender: function() {
        if (this.randomIntNumber()==1) {
            return this.GENDER_MALE;
        }
        else {
            return this.GENDER_FEMALE;
        } 
    },  
    
    randomBirthDate: function() {
        const randomDate = new Date(this.randomIntNumber(2010,1950),this.randomIntNumber(12),this.randomIntNumber(31));
        /*если функция Date вызывается в качестве конструктора с более, 
         чем одним аргументом, значения, большие логического диапазона 
         (например, 13 в качестве номера месяца) «переметнутся» на соседние значения*/
        let monthText='';
        switch (randomDate.getMonth()) {
            case 0:
                monthText = 'Января'; 
                break;
            case 1:   
                monthText = 'Февраля';
                break;
            case 2:   
                monthText = 'Марта';
                break;                
            case 3: 
                monthText = 'Аперля';
                break;               
            case 4:  
                monthText = 'Мая';
                break;                   
            case 5:   
                monthText = 'Июня';
                break;                
            case 6:  
                monthText = 'Июля';
                break;                
            case 7:   
                monthText = 'Августа';
                break;                
            case 8:  
                monthText = 'Сентября';
                break;                
            case 9:   
                monthText = 'Октября';
                break;                 
            case 10:   
                monthText = 'Ноября';
                break;                 
            case 11: 
                monthText = 'Декабря';
                break;                   
        }
        return `${randomDate.getDate()} ${monthText} ${randomDate.getFullYear()}г.`;
    },

    randomFamilyName: function(gender) {
        if (gender===this.GENDER_MALE){
            return this.randomValue(this.maleFamilyNameJson);   
        } else  {
            return this.randomValue(this.femaleFamilyNameJson);  
        } 
    },

    randomOccupation: function(gender) {
        let jobTitle='';        
            do {
                jobTitle=this.randomValue(this.occupationJson);
                //debugger;
                if (gender===this.GENDER_MALE){
                    if (jobTitle!=="Косметолог" && jobTitle!=="Воспитатель" && jobTitle!=="Швея"&& jobTitle!=="Медсестра"){
                        break;
                    }                    
                } else {
                    if (jobTitle!=="Слесарь" && jobTitle!=="Оператор" && jobTitle!=="Электромонтер" && jobTitle!=="Водитель" & jobTitle!=="Инженер"){
                        break;
                    }           
                }
            } while (true);           
            return jobTitle; 
       
    },

    getPerson: function () {
        this.person = {};                   
        this.person.gender=this.randomGender();        
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.lastName = this.randomSurname(this.person.gender);
        this.person.birthDate = this.randomBirthDate();
        this.person.familyName= this.randomFamilyName(this.person.gender);
        this.person.jobProffesion= this.randomOccupation(this.person.gender);
        return this.person;
    }
};
