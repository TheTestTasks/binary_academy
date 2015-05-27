*Спроектировать REST API, которое позволит выполнять перечень операций над данными (перечень представлен в [Таблице 1](https://docs.google.com/document/d/1wFRh8t6A0U1LM5JG5bsQZEqgq_qS9V7dOrsd8fMhNS0/edit?usp=sharing)). Привести примеры запросов обращения к API.*

*Примечание: в таблице приведен пример ее заполнения.*

```
  ┌─────────────────────────┬──────────────┬──────────────────────────────────────────────┐
  │Описание функции         │Метод запроса │Пример запроса                                │
  ├─────────────────────────┼──────────────┼──────────────────────────────────────────────┤
  │                         │              │GET /restapi/countries HTTP/1.1               │
  │Получить список стран    │     GET      │Host: my.site.com                             │
  │                         │              │User-Agent: Internet-Explorer 9.0             │
  ├─────────────────────────┼──────────────┼──────────────────────────────────────────────┤
  │Получить список отелей в │              │GET /restapi/coutry/{country}/hotels HTTP/1.1 │
  │стране                   │     GET      │Host: my.site.com                             │
  │                         │              │User-Agent: Internet-Explorer 9.0             │
  ├─────────────────────────┼──────────────┼──────────────────────────────────────────────┤
  │                         │              │POST /restapi/country HTTP/1.1                │
  │                         │              │Host: my.site.com                             │
  │Добавить страну          │     POST     │User-Agent: Internet-Explorer 9.0             │
  │                         │              │                                              │
  │                         │              │Name={name}                                   │
  │                         │              │&Description={description}                    │
  ├─────────────────────────┼──────────────┼──────────────────────────────────────────────┤
  │                         │              │POST /restapi/hotel HTTP/1.1                  │
  │                         │              │Host: my.site.com                             │
  │                         │              │User-Agent: Internet-Explorer 9.0             │
  │Добавить отель в страну  │     POST     │                                              │
  │                         │              │Country={country}                             │
  │                         │              │&Name={name}                                  │
  │                         │              │&Description={description}                    │
  ├─────────────────────────┼──────────────┼──────────────────────────────────────────────┤
  │Удалить определенный     │              │DELETE /restapi/hotel/{id} HTTP/1.1           │
  │отель                    │    DELETE    │Host: my.site.com                             │
  │                         │              │User-Agent: Internet-Explorer 9.0             │
  ├─────────────────────────┼──────────────┼──────────────────────────────────────────────┤
  │Получить информацию об   │              │GET /restapi/hotel/{id} HTTP/1.1              │
  │определенном отеле       │     GET      │Host: my.site.com                             │
  │                         │              │User-Agent: Internet-Explorer 9.0             │
  ├─────────────────────────┼──────────────┼──────────────────────────────────────────────┤
  │                         │              │PUT /restapi/hotel/{id} HTTP/1.1              │
  │                         │              │Host: my.site.com                             │
  │Обновить информацию об   │              │User-Agent: Internet-Explorer 9.0             │
  │определенном отеле       │     PUT      │                                              │
  │                         │              │Country={new country}                         │
  │                         │              │&Name={new name}                              │
  │                         │              │&Description={new description}                │
  └─────────────────────────┴──────────────┴──────────────────────────────────────────────┘
```
