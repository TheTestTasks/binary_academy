*Установить mongodb.*

*Скачать файл [results.json](https://drive.google.com/file/d/0B7JFNnXkcLbzd2l4aVNpaTJsYzg/view?usp=sharing). Выполнить команду* 
```mongoimport --db yourDbName --collection yourCollectionName --file ~/results.json```

*Запустить консоль командой mongo.*

*Выполнить команду use yourDbName.*

*Написать запрос для поиска всех студентов у которых score > 93% и меньше 95% по любому из типов выполненных заданий.*

*Написать запрос-аггрегацию для выборки всех студентов у которых результат по экзамену более 90% (использоdание unwind).*

*Студенту с именем Vinnie Auerbach добавить поле “accepted” со значением true.*


----------


1) Написать запрос для поиска всех студентов у которых score > 93% и меньше 95% по любому из типов выполненных заданий.
```
> db.students.find({scores: {$elemMatch: {score: {$gt: 93, $lt: 95}}}})

{ "_id" : 19, "name" : "Gisela Levin", "scores" : [ { "type" : "exam", "score" : 44.51211101958831 }, { "type" : "quiz", "score" : 0.6578497966368002 }, { "type" : "homework", "score" : 93.36341655949683 }, { "type" : "homework", "score" : 49.43132782777443 } ] }
{ "_id" : 29, "name" : "Gwyneth Garling", "scores" : [ { "type" : "exam", "score" : 48.36644963899371 }, { "type" : "quiz", "score" : 10.37827022865908 }, { "type" : "homework", "score" : 22.00937866160616 }, { "type" : "homework", "score" : 93.26639335532833 } ] }
{ "_id" : 52, "name" : "Tawana Oberg", "scores" : [ { "type" : "exam", "score" : 80.59006098671075 }, { "type" : "quiz", "score" : 93.28438118988183 }, { "type" : "homework", "score" : 93.12134003887978 }, { "type" : "homework", "score" : 68.64511133845058 } ] }
{ "_id" : 55, "name" : "Tresa Sinha", "scores" : [ { "type" : "exam", "score" : 94.93136959210354 }, { "type" : "quiz", "score" : 72.32226123565266 }, { "type" : "homework", "score" : 4.988845385625684 }, { "type" : "homework", "score" : 77.248768811767 } ] }
{ "_id" : 57, "name" : "Chad Rahe", "scores" : [ { "type" : "exam", "score" : 40.84572027366789 }, { "type" : "quiz", "score" : 29.22733629679561 }, { "type" : "homework", "score" : 93.12112348179406 }, { "type" : "homework", "score" : 27.06916803280036 } ] }
{ "_id" : 67, "name" : "Merissa Mann", "scores" : [ { "type" : "exam", "score" : 75.1949733626123 }, { "type" : "quiz", "score" : 52.56522605123723 }, { "type" : "homework", "score" : 83.8722548112793 }, { "type" : "homework", "score" : 94.67518167209815 } ] }
{ "_id" : 74, "name" : "Leola Lundin", "scores" : [ { "type" : "exam", "score" : 31.62936464207764 }, { "type" : "quiz", "score" : 91.28658941188532 }, { "type" : "homework", "score" : 23.95163257932222 }, { "type" : "homework", "score" : 93.71671632774428 } ] }
{ "_id" : 84, "name" : "Timothy Harrod", "scores" : [ { "type" : "exam", "score" : 93.23020013495737 }, { "type" : "quiz", "score" : 49.06010347848443 }, { "type" : "homework", "score" : 74.00788699415295 }, { "type" : "homework", "score" : 43.46258375716373 } ] }
{ "_id" : 97, "name" : "Maren Scheider", "scores" : [ { "type" : "exam", "score" : 94.4329121733663 }, { "type" : "quiz", "score" : 77.28263690107663 }, { "type" : "homework", "score" : 6.872536184428357 }, { "type" : "homework", "score" : 59.46326216544371 } ] }
{ "_id" : 112, "name" : "Myrtle Wolfinger", "scores" : [ { "type" : "exam", "score" : 73.93895528856032 }, { "type" : "quiz", "score" : 35.99397009906073 }, { "type" : "homework", "score" : 93.85826506506328 }, { "type" : "homework", "score" : 71.21962876453497 } ] }
{ "_id" : 131, "name" : "Fletcher Mcconnell", "scores" : [ { "type" : "exam", "score" : 24.98670635479149 }, { "type" : "quiz", "score" : 94.90809903126159 }, { "type" : "homework", "score" : 6.631220621711343 }, { "type" : "homework", "score" : 29.37194792367135 } ] }
{ "_id" : 154, "name" : "Rachell Aman", "scores" : [ { "type" : "exam", "score" : 94.50988306850947 }, { "type" : "quiz", "score" : 5.68414255121964 }, { "type" : "homework", "score" : 64.46720717616572 }, { "type" : "homework", "score" : 47.34684739970935 } ] }
{ "_id" : 155, "name" : "Aleida Elsass", "scores" : [ { "type" : "exam", "score" : 42.89558347656537 }, { "type" : "quiz", "score" : 94.10647660402866 }, { "type" : "homework", "score" : 9.36808988965816 }, { "type" : "homework", "score" : 30.56402201379193 } ] }
{ "_id" : 167, "name" : "Malisa Jeanes", "scores" : [ { "type" : "exam", "score" : 40.68676040665008 }, { "type" : "quiz", "score" : 52.60826688242043 }, { "type" : "homework", "score" : 94.67979508129564 }, { "type" : "homework", "score" : 56.90401843569644 } ] }
{ "_id" : 191, "name" : "Efrain Claw", "scores" : [ { "type" : "exam", "score" : 94.67153825229884 }, { "type" : "quiz", "score" : 82.30087932110595 }, { "type" : "homework", "score" : 67.17105893041146 }, { "type" : "homework", "score" : 75.86075840047938 } ] }
```


2) Написать запрос-аггрегацию для выборки всех студентов у которых результат по экзамену более 90% (использоdание unwind).
```
> db.students.aggregate({$unwind: "$scores"}, {$match:{"scores.type": "exam", "scores.score": {$gt: 90}}})

{ "_id" : 7, "name" : "Salena Olmos", "scores" : { "type" : "exam", "score" : 90.37826509157176 } }
{ "_id" : 9, "name" : "Sanda Ryba", "scores" : { "type" : "exam", "score" : 97.00509953654694 } }
{ "_id" : 13, "name" : "Jessika Dagenais", "scores" : { "type" : "exam", "score" : 90.47179954427436 } }
{ "_id" : 44, "name" : "Houston Valenti", "scores" : { "type" : "exam", "score" : 98.06441387027331 } }
{ "_id" : 47, "name" : "Kurtis Jiles", "scores" : { "type" : "exam", "score" : 92.96916908741805 } }
{ "_id" : 49, "name" : "Dinah Sauve", "scores" : { "type" : "exam", "score" : 96.64807532447064 } }
{ "_id" : 55, "name" : "Tresa Sinha", "scores" : { "type" : "exam", "score" : 94.93136959210354 } }
{ "_id" : 59, "name" : "Vinnie Auerbach", "scores" : { "type" : "exam", "score" : 95.45508256300009 } }
{ "_id" : 72, "name" : "Leonida Lafond", "scores" : { "type" : "exam", "score" : 92.10605086888438 } }
{ "_id" : 84, "name" : "Timothy Harrod", "scores" : { "type" : "exam", "score" : 93.23020013495737 } }
{ "_id" : 97, "name" : "Maren Scheider", "scores" : { "type" : "exam", "score" : 94.4329121733663 } }
{ "_id" : 127, "name" : "Jessika Dagenais", "scores" : { "type" : "exam", "score" : 96.93459855769822 } }
{ "_id" : 136, "name" : "Margart Vitello", "scores" : { "type" : "exam", "score" : 99.33685767140612 } }
{ "_id" : 153, "name" : "Mariette Batdorf", "scores" : { "type" : "exam", "score" : 91.38690728885123 } }
{ "_id" : 154, "name" : "Rachell Aman", "scores" : { "type" : "exam", "score" : 94.50988306850947 } }
{ "_id" : 159, "name" : "Terica Brugger", "scores" : { "type" : "exam", "score" : 97.822030541043 } }
{ "_id" : 174, "name" : "Dusti Lemmond", "scores" : { "type" : "exam", "score" : 91.51968055194875 } }
{ "_id" : 191, "name" : "Efrain Claw", "scores" : { "type" : "exam", "score" : 94.67153825229884 } }
```


3) Студенту с именем Vinnie Auerbach добавить поле “accepted” со значением true.
```
> db.students.update({name: "Vinnie Auerbach"}, {$set: {accepted: true}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 0 })

> db.students.findOne({name: "Vinnie Auerbach"})
{
    "_id" : 59,
    "name" : "Vinnie Auerbach",
    "scores" : [
        {
            "type" : "exam",
            "score" : 95.45508256300009
        },
        {
            "type" : "quiz",
            "score" : 7.512188017365151
        },
        {
            "type" : "homework",
            "score" : 28.5905754294006
        },
        {
            "type" : "homework",
            "score" : 23.91300715707971
        }
    ],
    "accepted" : true
}
```