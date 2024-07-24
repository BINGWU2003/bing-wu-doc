## Twitch Clone

源码:[GitHub地址](https://github.com/BINGWU2003/twitch-clone.git)

线上地址:[地址](https://bing-wu-twicth.netlify.app/)

### 工具

[Clrek](https://clerk.com/):搭建账号系统和权限

[ClrekDoc](https://clerk.com/docs)

[Ngrok](https://ngrok.com/download)

[Prisma](https://www.prisma.io/):用于连接和操作数据库

组件库:[shadcn](https://ui.shadcn.com/)

css库:[tailwindcss](https://tailwindcss.com/)

### nextjs中的路由

[nextjs路由文档](https://www.nextjs.cn/docs/basic-features/pages)

在app文件夹中创建新的文件夹,文件命名为page.tsx

文件夹的名称表示路由的路径

![image-20240620173022124](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240620173022124.png?imageSlim)

路径为**/register**

![image-20240620173038618](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240620173038618.png?imageSlim)

### nextjs中的布局的搭建

#### 使用文件夹名称当作路由地址

在app文件夹中创建好这些文件

![image-20240620174326917](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240620174326917.png?imageSlim)

auth/login/page.tsx

```tsx
export default function Login(){
  return(
    <>
      <div>login</div>
    </>
  )
}
```

auth/register/page.tsx

```tsx
export default function Register(){
  return(
    <div>
      <h1>Register</h1>
    </div>
  )
}
```

auth/layout.tsx

类似vue中的侧边栏的效果,侧边栏不变,路由页面不断变化

```tsx
function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>顶部导航</div>
      <div>{children}</div>
    </div>
  );
}
```

**/auth/login**页面

![image-20240620174708025](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240620174708025.png?imageSlim)

**/auth/regist**页面

![image-20240620174740482](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240620174740482.png?imageSlim)

#### 不使用文件夹名称当作路由地址

将文件夹名称命名为(xxx)

![image-20240620175514518](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240620175514518.png?imageSlim)

直接通过**/register**访问页面

![image-20240620175445723](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240620175445723.png?imageSlim)

### 使用prisma连接mysql

安装prisma

```bash
npm install @prisma/client
```

初始化prisma

```bash
npx prisma init
```

![image-20240629162241180](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240629162241180.png?imageSlim)

把db里的provider的值改成**mysql**

![image-20240629162445110](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240629162445110.png?imageSlim)

将.env中的url改成自己的数据库地址

![image-20240629162538273](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240629162538273.png?imageSlim)

数据库url的解释

以mysql为例

格式

```javascript
mysql://USER:PASSWORD@HOST:PORT/DATABASE
```
- USER:登陆数据的账号
- PASSWORD:登陆数据库的账号的密码
- HOST:主机地址
- PORT:端口号
- DATABASE:连接的数据库

例如

```javascript
DATABASE_URL="mysql://root:randompassword@localhost:3306/mydb"
```

测试是否连接成功

```bash
npx prisma db push
```

出现它代表连接成功

![image-20240629164250823](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240629164250823.png?imageSlim)

### prisma命令行

#### 将本地的表推送到数据库

```bash
npx prisma db push
```

在schema.prisma文件中创建一个表

```javascript
// User表
// 用户名
// 头像
// 外部用户id
// 简介
// 创建时间
// 更新时间
model User {
  id             String   @id @default(uuid())
  username       String   @unique
  imageUrl       String   @db.Text
  externalUserId String   @unique
  bio            String?  @db.Text
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}
```

![image-20240629170924810](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240629170924810.png?imageSlim)

访问数据库,新增了一个User表

![image-20240629170836429](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240629170836429.png?imageSlim)

#### 将数据库的表拉取到本地

```bash
npx prisma db pull
```

在数据库中新建test表

![image-20240629171133442](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240629171133442.png?imageSlim)

执行此命令

![image-20240629171306299](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240629171306299.png?imageSlim)

新增了一个test的model

#### 在网页端操作数据库

```bash
npx prisma studio
```

执行此命令,控制台会生成一个地址,浏览器打卡并访问

![image-20240629171805502](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240629171805502.png?imageSlim)

访问地址就能直接操作数据库了,像一个小型navicat

![image-20240629171946671](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240629171946671.png?imageSlim)

### 搭建navbar

#### 代码文件路径

![image-20240630171747130](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240630171747130.png?imageSlim)

#### index.tsx

```tsx
import { Logo } from "./logo"
import { Search } from "./search"
import { Actions } from "./actions"
export default function Navbar() {
  return (
    <>
      <div className="flex items-center bg-[#252630] justify-between px-6">
        <Logo></Logo>
        <Search></Search>
        <Actions></Actions>
      </div>
    </>
  )
}
```

#### actions.tsx

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server"
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { Clapperboard } from "lucide-react";
export const Actions = async () => {
  const user = await currentUser();
  return (
    <>
      <div>
        {
          !user && (
            <Button>
              <SignInButton></SignInButton>
            </Button>
          )
        }
        {
          user && (
            <div className="flex items-center">
              <Link href={`/u/${user.username}`}>
                <div className="flex items-center">
                  <Clapperboard></Clapperboard>
                  <div className="ml-2 text-sm">控制面板</div>
                </div>
              </Link>
              <div className="ml-6 flex items-center">
                <UserButton></UserButton>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}
```

#### logo.tsx

```tsx
import Image from "next/image"
// 用于跳转
import Link from "next/link"
export const Logo = () => {
  return (
    <>
      {/* 点击logo跳转到首页 */}
      <Link href='/'>
        <div className="flex h-20 items-center">
          <Image src='/CloneTwitch.svg' alt="CloneTwitch" width={50} height={50}></Image>
          <div className="ml-4">
            <p className="text-2xl font-bold">Clone Twitch</p>
            <p className="text-sm text-[#737481]">欢迎来到本站~</p>
          </div>
        </div>
      </Link>
    </>
  )
}
```

#### search.tsx

此组件为客户端组件

使用**"use client";**声明为客户端组件

```tsx
"use client";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation";
export const Search = () => {
  const router = useRouter()
  const [inputValue, setInputValue] = useState<string>('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) {
      return
    } else {
      router.push(`/search?keyword=${inputValue}`)
      setInputValue('')
    }
  }
  return (
    <>
      <form className="flex items-center" onSubmit={handleSubmit}>
        <Input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="请输入内容" className="bg-[#1f2029] w-96 " />
        <Button type="submit" variant="secondary" className="bg-[#252630] hover:bg-transparent ml-2">
          <SearchIcon className="color-[#252630]"/>
        </Button>
      </form>
    </>
  )
}
```

### 部署应用

使用[netlify](https://www.netlify.app/)自动化部署应用

#### 项目配置

在package.json文件的scripts对象中新增一行命令

用于生成prisma的数据库配置文件

```
"postinstall": "prisma generate"
```

![image-20240714003911157](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240714003911157.png?imageSlim)

#### 开始部署

打开netlify登陆并前往首页

1.选择导入项目

2.导入已存在的项目(选择GitHub,登陆并授权,再中选择自己的项目)

![image-20240714003722490](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240714003722490.png?imageSlim)

配置站点名称

![image-20240714004152642](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240714004152642.png?imageSlim)

配置环境变量

![image-20240714004227657](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240714004227657.png?imageSlim)

环境变量的数据来自**.env**文件

- **DATABASE_URL**相对于key
- **=**右边的内容相当于value

![image-20240714004327651](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240714004327651.png?imageSlim)

配置完环境变量后点击Deploy按钮开始部署

部署成功之后就可以访问站点了

![image-20240714004628855](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240714004628855.png?imageSlim)
