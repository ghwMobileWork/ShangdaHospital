---
title: 商大医院 v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.5"

---

# 商大医院

> v1.0.0

# 医生端

## GET 通过病人姓名查询预约记录

GET /yuyue/findbyname

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageNum|query|string| 否 |页号|
|pageSize|query|string| 否 |页面大小|
|search|query|string| 否 |病人姓名|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 登陆

POST /doctor/login

> Body 请求参数

```json
{
  "username": "string",
  "password": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|
|» password|body|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|
|1002|Unknown|用户名或密码错误|Inline|

### 返回数据结构

# 医生端/医生

## GET 查看预约自己的病人

GET /yuyue/loadself

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageNum|query|string| 否 |分页页码|
|pageSize|query|string| 否 |分页大小|
|search|query|string| 否 |医生的id|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PUT 医生会诊

PUT /yuyue/zhenduan

> Body 请求参数

```json
{
  "id": 0,
  "patientId": 0,
  "doctorId": 0,
  "time": "string",
  "result": "string",
  "statue": 0,
  "doctorList": [
    {
      "id": 0,
      "username": null,
      "password": null,
      "doctorName": "string",
      "department": "string",
      "sex": null
    }
  ],
  "patientList": [
    {
      "id": 0,
      "username": null,
      "password": null,
      "patientName": "string",
      "sex": "string"
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 否 |预约id|
|result|query|string| 否 |诊断结果|
|body|body|object| 否 |none|
|» id|body|integer| 是 |none|
|» patientId|body|integer| 是 |none|
|» doctorId|body|integer| 是 |none|
|» time|body|string| 是 |none|
|» result|body|string| 是 |none|
|» statue|body|integer| 是 |none|
|» doctorList|body|[object]| 是 |none|
|»» id|body|integer| 否 |none|
|»» username|body|null| 否 |none|
|»» password|body|null| 否 |none|
|»» doctorName|body|string| 否 |none|
|»» department|body|string| 否 |none|
|»» sex|body|null| 否 |none|
|» patientList|body|[object]| 是 |none|
|»» id|body|integer| 否 |none|
|»» username|body|null| 否 |none|
|»» password|body|null| 否 |none|
|»» patientName|body|string| 否 |none|
|»» sex|body|string| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 医生端/管理员

## GET 加载所有医生信息

GET /doctor/loadall

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageNum|query|string| 否 |分页查询的页数|
|pageSize|query|string| 否 |分页查询页面大小|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 加载所有病人信息

GET /patient/loadall

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageNum|query|string| 否 |分页查询的页数|
|pageSize|query|string| 否 |分页查询页面大小|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## DELETE 删除医生用户

DELETE /doctor

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 否 |删除医生的id|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PUT 修改医生信息

PUT /doctor

> Body 请求参数

```json
{
  "id": 0,
  "username": "string",
  "password": "string",
  "doctorName": "string",
  "department": "string",
  "sex": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» id|body|integer| 是 |none|
|» username|body|string| 是 |none|
|» password|body|string| 是 |none|
|» doctorName|body|string| 是 |none|
|» department|body|string| 是 |none|
|» sex|body|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## DELETE 删除病人用户

DELETE /patient//delete/

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 通过名字查询医生

GET /doctor/findbyname

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageNum|query|string| 否 |none|
|pageSize|query|string| 否 |none|
|search|query|string| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 通过名字查询病人

GET /patient/findbyname

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageNum|query|string| 否 |none|
|pageSize|query|string| 否 |none|
|search|query|string| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获得所有预约记录

GET /yuyue/loadall

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageNum|query|string| 否 |页号|
|pageSize|query|string| 否 |页面大小|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 病人端

## POST 病人注册

POST /patient/register

> Body 请求参数

```json
{
  "patientName": "string",
  "username": "string",
  "password": "string",
  "sex": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» patientName|body|string| 是 |none|
|» username|body|string| 是 |none|
|» password|body|string| 是 |none|
|» sex|body|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 取消预约或删除预约记录

GET /yuyue/delete/

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 否 |预约的id|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PUT 修改病人信息

PUT /patient

> Body 请求参数

```json
{
  "id": 0,
  "username": "string",
  "password": "string",
  "patientName": "string",
  "sex": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» id|body|integer| 是 |none|
|» username|body|string| 是 |none|
|» password|body|string| 是 |none|
|» patientName|body|string| 是 |none|
|» sex|body|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 通过科室查询医生

GET /doctor/findbydepartment

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageNum|query|string| 否 |页面号|
|pageSize|query|string| 否 |页面大小|
|search|query|string| 否 |科室名|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 病人登陆

POST /patient/login

> Body 请求参数

```json
{
  "username": "string",
  "password": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|username|query|string| 是 |用户名|
|password|query|string| 是 |密码|
|body|body|object| 否 |none|
|» username|body|string| 是 |none|
|» password|body|string| 是 |none|

> 返回示例

> 成功

```json
{
  "msg": "登录成功",
  "result": {
    "username": "用户名",
    "password": "密码"
  },
  "code": 1
}
```

> 用户名或密码错误

```json
{
  "msg": "用户名或密码错误",
  "result": {
    "uname": "用户名",
    "pwd": "密码"
  },
  "code": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|
|1002|Unknown|用户名或密码错误|Inline|

### 返回数据结构

## POST 病人预约挂号

POST /yuyue/newyuyue

> Body 请求参数

```json
{
  "patientId": 0,
  "doctorId": 0,
  "statue": 0,
  "time": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» patientId|body|integer| 是 |none|
|» doctorId|body|integer| 是 |none|
|» statue|body|integer| 是 |none|
|» time|body|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 病人查看自己的预约历史

GET /yuyue/loadyuyue

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|search|query|string| 否 |病人id|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 数据模型

