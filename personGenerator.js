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
    firstNameFeMaleJson: `{
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
            return this.randomValue(this.firstNameFeMaleJson);  
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
        return new Date(this.randomIntNumber(2010,1950),this.randomIntNumber(12),this.randomIntNumber(31)).toLocaleDateString();
1       /*если функция Date вызывается в качестве конструктора с более, 
         чем одним аргументом, значения, большие логического диапазона 
         (например, 13 в качестве номера месяца) «переметнутся» на соседние значения*/
0    },    

    getPerson: function () {
        this.person = {};       
        this.person.gender=this.randomGender();        
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.lastName = this.randomSurname(this.person.gender);
        this.person.birthDate = this.randomBirthDate();
        return this.person;
    }
};
