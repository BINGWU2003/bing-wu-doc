## 技术选型

React18 + ReactRouter6 + Ant desgin

## 项目初始化

### 创建项目

```bash
pnpm create vite
```

### 安装依赖

- Ant Desgin

```bash
pnpm install antd
```

- 安装ReactRouter

```bash
pnpm install react-router-dom
```

- 安装Prisma

```bash
pnpm install prisma
```

  #### Prisma

**需要提前安装Prisma**

- 创建一个名为 `prisma` 的新目录，其中包含一个名为 `schema.prisma` 的文件

```bash
prisma init
```

修改`schema`文件内容为以下内容

```js
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

`provider`为数据库的类型,这边使用mysql

- 在项目根目录创建`.env`文件

添加以下内容

```javascript
DATABASE_URL=DATBABSE_TYPE://USER:PASSWORD@HOST:PORT/DATABASE
```

DATABASE_URL说明:

`DATBABSE_TYPE`:数据库的类型(mysql等等)

`USER`:登陆数据库的账号

`PASSWORD`:登陆数据库的账号的密码

`HOST`:主机地址

`PORT`:端口号

`DATABASE`:连接的数据库

- 测试数据库的连接

在`schema`文件中添加以下内容

```javascript
model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
}
```

![image-20240725165947540](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240725165947540.png?imageSlim)

使用push命令把本地的表模型推送到数据库

```bash
prisma db push
```

在数据库`clonetwitchvite`中创建了一个`User`表

![image-20240725170522881](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240725170522881.png?imageSlim)
