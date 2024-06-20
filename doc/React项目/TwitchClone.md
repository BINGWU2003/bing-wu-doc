## Twitch Clone

组件库:[shadcn](https://ui.shadcn.com/)

css库:[tailwindcss](https://tailwindcss.com/)

### nextjs中的路由

[nextjs路由文档](https://www.nextjs.cn/docs/basic-features/pages)

在app文件夹中创建新的文件文件夹,文件命名为xxx.tsx

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