*Спроектировать REST API, которое позволит выполнять перечень операций над данными (перечень представлен в [Таблице 1](https://docs.google.com/document/d/1wFRh8t6A0U1LM5JG5bsQZEqgq_qS9V7dOrsd8fMhNS0/edit?usp=sharing)). Привести примеры запросов обращения к API.*
*Примечание: в таблице приведен пример ее заполнения.*


| Описание функции | Метод запроса | Пример запроса |
|:-----|:-----:|:-----|
| Получить список стран | GET | GET /restapi/countries HTTP 1.1 |
| | | Host: my.site.com |
| | | User-Agent: Internet-Explorer 9.0 |
| | | |
| Получить список отелей в стране | GET | GET /restapi/hotels/{country} HTTP 1.1 |
| | | Host: my.site.com |
| | | User-Agent: Internet-Explorer 9.0 |
| | | |
| Добавить страну | POST | POST /restapi/country HTTP 1.1 |
| | | Host: my.site.com |
| | | User-Agent: Internet-Explorer 9.0 |
| | | |
| | | Name={name}&Description={description} |
| | | |
| Добавить отель в страну | POST | POST /restapi/hotel HTTP 1.1 |
| | | Host: my.site.com |
| | | User-Agent: Internet-Explorer 9.0 |
| | | |
| | | Country={country}&Name={name}&Description={description} |
| | | |
| Удалить определенный отель | DELETE | DELETE /restapi/hotel/{id} HTTP 1.1 |
| | | Host: my.site.com |
| | | User-Agent: Internet-Explorer 9.0 |
| | | |
| Получить информацию об определенном отеле | GET | GET /restapi/hotel/{id} HTTP 1.1 |
| | | Host: my.site.com |
| | | User-Agent: Internet-Explorer 9.0 |
| | | |
| Обновить информацию об определенном отеле | PUT | PUT /restapi/hotel/{id}/update HTTP 1.1 |
| | | Host: my.site.com |
| | | User-Agent: Internet-Explorer 9.0 |
| | | |
| | | Country={new country}&Name={new name}&Description={new description} |