/*
 * @Author: BINGWU
 * @Date: 2024-05-07 01:18:01
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-06-30 15:07:14
 * @FilePath: \bing-wu-doc\.vitepress\config.mjs
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BING WU的个人文档",
  description: "BINGWU VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '前端',
        items: [
          { text: 'Nest', link: '/markdown-examples' },
          { text: 'Git', link: '/doc/front/Git' },
          { text: 'Uniapp', link: '/doc/front/uniapp总结' }
        ]
      },
      {
        text: 'React',
        items: [
          { text: 'React快速入门', link: '/doc/React/React快速入门' }
        ]
      },
      {
        text: 'React项目',
        items: [
          { text: 'TwitchClone', link: '/doc/React项目/TwitchClone' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: '公开的api', link: '/doc/utils-doc/公开的api' },
          { text: '工具文档库', link: '/doc/utils-doc/工具文档库' },
          { text: 'UI组件库', link: '/doc/utils-doc/UI组件库' },
          { text: 'PicGo+腾讯COS+Typora搭建图床', link: '/doc/utils-doc/PicGo+腾讯COS+Typora搭建图床' },
          { text: '使用Netlify自动化部署Vitepress', link: '/doc/utils-doc/使用Netlify自动化部署Vitepress' }
        ]
      },
    ],
    footer: {
      copyright: '版权所有 © 2024 BING WU'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BINGWU2003' },
      {
        icon: {
          svg: '<svg t="1715012178092" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7643" width="200" height="200"><path d="M512 512m-494.933333 0a494.933333 494.933333 0 1 0 989.866666 0 494.933333 494.933333 0 1 0-989.866666 0Z" fill="#C71D23" p-id="7644"></path><path d="M762.538667 457.045333h-281.088a24.4736 24.4736 0 0 0-24.439467 24.405334v61.098666c-0.034133 13.5168 10.922667 24.439467 24.405333 24.439467h171.1104c13.5168 0 24.439467 10.922667 24.439467 24.439467v12.219733a73.3184 73.3184 0 0 1-73.3184 73.3184h-232.209067a24.439467 24.439467 0 0 1-24.439466-24.439467v-232.174933a73.3184 73.3184 0 0 1 73.3184-73.3184h342.152533c13.482667 0 24.405333-10.922667 24.439467-24.439467l0.034133-61.098666a24.405333 24.405333 0 0 0-24.405333-24.439467H420.352a183.296 183.296 0 0 0-183.296 183.296V762.538667c0 13.482667 10.922667 24.439467 24.405333 24.439466h360.516267a164.9664 164.9664 0 0 0 165.000533-165.000533v-140.526933a24.439467 24.439467 0 0 0-24.439466-24.439467z" fill="#FFFFFF" p-id="7645"></path></svg>'
        },
        link: 'https://gitee.com/ice-fog'
      },
      {
        icon: {
          svg: '<svg t="1715012660173" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12974" width="200" height="200"><path d="M509.504 0.8a508.448 508.448 0 1 0 0 1016.96 508.448 508.448 0 0 0 0-1016.96z" fill="#FF509B" p-id="12975"></path><path d="M169.376 334.016c0 34.304 0 68.32 0.544 102.528 0.384 17.824 0.96 35.616 2.368 53.44 1.536 21.248 3.872 42.88 5.76 64.544 0 0.96 0.64 1.792 0.64 2.368 7.36-0.384 14.528-0.96 21.632-0.96 30.4-0.832 60.128 3.296 88.64 14.496 13.888 5.6 27.456 12.032 39.392 21.056 9.92 7.52 12.224 16.8 6.88 30.464-2.848 8.256-8.256 15.392-15.456 20.352-16.864 13.312-34.24 24.96-54.56 31.68a263.04 263.04 0 0 1-43.712 10.688c-19.328 2.88-39.04 4.256-58.752 6.176-4.064 0.64-7.968 0-12.224 0-1.92 0-2.56-0.96-2.56-2.88-0.16-8.704-0.96-17.792-1.504-26.88-0.96-11.52-2.144-23.04-3.52-34.56l-5.696-48.128c-1.984-16.992-4.32-33.856-6.24-50.688-1.92-16.672-3.52-33.088-5.76-49.568-2.752-18.752-5.312-37.312-8.16-56.416a506.784 506.784 0 0 0-12.928-65.92c-0.384-0.96 0.576-2.88 1.152-3.52A2543.904 2543.904 0 0 0 162.56 329.6c6.176-2.72 6.816-3.68 6.816 4.48v-0.096z m409.952 0c0 34.304 0 68.32 0.576 102.528 0.384 17.824 0.96 35.616 2.368 53.44 1.536 21.248 3.872 42.88 5.76 64.544 0 0.96 0.64 1.792 0.64 2.368 7.36-0.384 14.528-0.96 21.632-0.96 30.4-0.832 60.128 3.296 88.64 14.496 13.888 5.6 27.392 12.032 39.392 21.056 10.048 7.52 12.288 16.8 6.72 30.336-2.88 8.224-8.256 15.36-15.424 20.288-16.864 13.376-34.272 24.96-54.56 31.744a263.04 263.04 0 0 1-43.712 10.624c-19.392 2.912-39.104 4.32-58.816 6.24-4 0.576-7.968 0-12.224 0-1.92 0-2.56-0.96-2.56-2.88-0.16-8.704-0.864-17.792-1.44-26.88-0.96-11.552-2.144-23.104-3.52-34.624l-5.76-48.064c-1.92-17.056-4.256-33.92-6.176-50.752-1.92-16.64-3.52-33.088-5.856-49.504-2.72-18.752-5.216-37.312-8.064-56.48a506.784 506.784 0 0 0-12.992-65.888c-0.192-1.024 0.832-2.912 1.344-3.296 19.072-7.36 38.176-14.88 57.248-22.72 6.24-2.72 6.784-3.68 6.784 4.48v-0.096z m-110.848 183.008c10.112 0 20.352 0.192 30.4 0.64 2.56 0 3.872 1.92 3.872 4.16 0.256 5.312 0.64 10.144 0.64 15.36 0 23.584-0.384 47.616 0 71.168 0.32 19.072 0.96 37.76 1.28 56.864 0 0.96 0 2.336 0.384 4.448-10.816-0.064-21.696 0.256-31.936-0.064-0.96 0-2.56-1.6-2.56-2.56-1.44-16.832-2.784-33.6-4.352-50.432l-4.288-46.816c-1.28-15.904-2.848-32-4.256-48.128 0-0.96 0-1.92-0.384-3.328 3.68-0.832 7.424-1.28 11.2-1.312z m410.048 0c10.112 0 20.352 0.192 30.4 0.64 2.56 0 3.872 1.92 3.872 4.16 0.256 5.312 0.64 10.144 0.64 15.36 0 23.584-0.384 47.616 0 71.168 0.384 19.072 0.96 37.76 1.28 56.864 0 0.96 0 2.336 0.384 4.448-10.816-0.064-21.696 0.256-31.936-0.064-0.96 0-2.56-1.6-2.56-2.56-1.44-16.832-2.784-33.6-4.384-50.432l-4.256-46.816c-1.28-15.904-2.88-32-4.256-48.128 0-0.96 0-1.92-0.384-3.328 3.68-0.832 7.424-1.28 11.2-1.312z m-501.056-1.408c1.152 7.744 2.56 15.456 3.424 23.584 1.792 13.248 2.88 26.56 4.256 39.68 1.344 11.648 2.56 23.04 3.968 34.624 1.28 12.192 2.88 24.544 4.448 37.28 0.32 3.488 0.896 7.36 1.28 11.2-11.264 1.376-22.272 2.72-33.92 4.288a18171.84 18171.84 0 0 1-29.376-149.888c8.064-0.96 15.904-2.368 23.584-3.328 5.6-0.8 11.456-0.8 16.864-1.312 3.104-0.384 5.024 0.96 5.44 3.84z m410.048 0c1.216 7.744 2.56 15.456 3.424 23.584 1.792 13.248 2.944 26.56 4.32 39.68l3.84 34.624 4.448 37.28c0.384 3.488 0.96 7.36 1.312 11.2-11.232 1.376-22.24 2.72-33.888 4.288a15618.016 15618.016 0 0 1-29.376-149.888c8.064-0.96 15.904-2.368 23.68-3.328 5.568-0.8 11.36-0.8 16.768-1.312 3.104-0.384 5.024 0.96 5.44 3.84z m-363.2-140.16l2.88 43.68c1.28 19.712 2.88 39.424 4.256 59.136 0.96 14.304 1.536 28.448 2.88 42.816 1.344 15.648 2.88 31.168 4.256 46.56 1.344 11.2 2.368 23.04 3.296 34.24 1.344 12.16 2.752 24.576 3.52 37.312l0.96 10.624c0.032 1.92-0.896 2.272-2.816 1.92-10.048-0.96-19.712-1.536-30.4-2.496-9.088-91.84-16.864-184.448-34.24-276.992l17.184-1.92 20.16-1.28c5.6-0.416 7.68 0.896 8.096 6.4z m410.016 0l2.88 43.68c1.248 19.712 2.848 39.424 4.224 59.136 0.96 14.304 1.6 28.448 2.88 42.816 1.312 15.648 2.88 31.168 4.32 46.56 1.28 11.2 2.272 23.04 3.296 34.24 1.28 12.16 2.688 24.576 3.456 37.312l0.96 10.624c0.096 1.92-0.832 2.272-2.816 1.92-10.112-0.96-19.712-1.536-30.4-2.496-9.088-91.84-16.864-184.448-34.24-276.992l17.184-1.92 20.16-1.28c5.6-0.416 7.68 0.896 8.096 6.4z m-364.16 66.752v0.128c2.56 0 3.456 0.576 3.456 3.456-0.384 7.744 0 15.872 0 23.584v29.376c-5.76 0.64-11.008 0.96-16.224 1.28-1.6-18.688-2.912-37.664-4.448-57.824h17.248z m410.08 0v0.128c2.56 0 3.424 0.576 3.424 3.456-0.384 7.744 0 15.872 0 23.584v29.376c-5.76 0.64-11.008 0.96-16.224 1.28-1.6-18.688-2.912-37.664-4.448-57.824h17.248z m-382.784 0.256c2.88 0 4.288 0.96 4.288 4.48v52.96l-20.992-0.96V442.56h16.704v-0.064z m410.048 0c2.88 0 4.288 0.96 4.288 4.48v52.96l-20.992-0.96V442.56h16.704v-0.064z m-569.408-3.232c2.72-0.384 1.92 1.92 2.336 3.424l1.92 19.136c0.96 10.112 2.336 19.744 3.296 29.856v3.84l-15.648 2.752c-3.52-18.752-6.816-37.312-10.24-56.48 6.176-0.64 12.096-2.016 18.336-2.56z m410.048 0c2.72-0.384 1.92 1.92 2.336 3.424l1.92 19.136c0.96 10.112 2.336 19.744 3.296 29.856v3.84l-15.648 2.752c-3.52-18.752-6.816-37.312-10.24-56.48 6.08-0.64 12.096-2.016 18.336-2.56z m-382.656-3.136c1.92 0 2.944 1.216 3.392 3.52 1.696 17.792 3.296 35.168 5.216 53.536-6.816 0.832-13.184 0.96-20.352 1.536l-7.328-58.208c6.624-0.384 12.896-0.384 19.072-0.384z m410.112 0c1.92 0 2.88 1.216 3.296 3.52 1.728 17.792 3.328 35.168 5.216 53.536-6.784 0.832-13.152 0.96-20.352 1.536l-7.296-58.208c6.56-0.384 12.896-0.384 19.072-0.384h0.064z" fill="#FFFFFF" p-id="12976"></path><path d="M208.096 592.256c2.912 20.864 5.856 41.92 8.704 63.616 17.824-13.376 34.784-26.464 52.032-39.456-2.272-2.912-49.536-21.696-60.736-24.16z m410.112 0c2.88 20.864 5.76 41.92 8.64 63.616 17.824-13.376 34.784-26.464 52.032-39.456-2.304-2.912-49.472-21.696-60.672-24.16z" fill="#F66E98" p-id="12977"></path></svg>'
        },
        link: 'https://space.bilibili.com/355910465'
      },
      {
        icon: {
          svg: '<svg t="1715012611022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10124" width="200" height="200"><path d="M208.927 595.425c2.887 21.033 5.847 42.21 8.734 64.051 17.92-13.404 35.031-26.654 52.358-39.69-2.294-2.97-49.839-21.842-61.092-24.371z m412.62 0c2.888 21.033 5.848 42.21 8.735 64.051 17.92-13.404 35.021-26.654 52.357-39.69-2.293-2.97-49.838-21.842-61.091-24.371z" fill="#1296DB" p-id="10125"></path><path d="M512.174 0.338C229.581 0.338 0.543 229.386 0.543 511.969S229.59 1023.59 512.174 1023.59s511.621-229.038 511.621-511.62S794.757 0.337 512.175 0.337z m-29.03 444.395H500.1c2.888 0 4.3 0.963 4.3 4.434v53.392c-6.819-0.369-13.854-0.584-21.186-0.963v-56.863h-0.071z m-115.815-6.369c1.925 0 2.888 1.178 3.328 3.482 1.782 17.92 3.328 35.39 5.264 53.903-6.82 0.82-13.261 0.963-20.44 1.557-2.518-19.62-4.894-38.728-7.413-58.573 6.666-0.369 13.035-0.369 19.251-0.369z m-27.627 3.103c2.744-0.369 1.925 1.925 2.375 3.481 0.594 6.595 1.332 12.81 1.926 19.252 0.962 10.148 2.365 19.855 3.328 30.003v3.922l-15.77 2.734c-3.482-18.883-6.82-37.54-10.291-56.801 6.215-0.666 12.216-2.069 18.432-2.591z m-2.888 183.87c-2.519 8.376-8.366 14.96-15.544 20.438-16.958 13.415-34.437 25.109-54.887 31.918a264.704 264.704 0 0 1-43.98 10.742c-19.477 2.888-39.322 4.301-59.167 6.216-4.065 0.594-7.987 0-12.288 0-1.925 0-2.52-0.963-2.52-2.888-0.224-8.735-0.962-17.92-1.556-27.033-0.962-11.694-2.15-23.174-3.481-34.796-1.925-16.363-3.922-32.143-5.847-48.435-1.925-17.1-4.301-34.058-6.226-51.016-1.925-16.742-3.482-33.25-5.837-49.838-2.744-18.882-5.263-37.55-8.151-56.801a509.921 509.921 0 0 0-13.036-66.355c-0.368-0.953 0.594-2.878 1.188-3.482a2986.764 2986.764 0 0 0 57.61-22.804c6.216-2.735 6.81-3.697 6.81 4.444 0 34.437 0 68.72 0.594 103.157 0.369 17.92 0.963 35.84 2.365 53.689 1.557 21.401 3.933 43.172 5.858 65.024 0 0.952 0.594 1.771 0.594 2.355 7.403-0.358 14.581-0.952 21.77-0.952 30.577-0.82 60.498 3.328 89.16 14.581 13.987 5.632 27.617 12.084 39.69 21.187 9.994 7.547 12.288 16.876 6.881 30.648z m25.846 44.584c-10.066-50.432-19.845-100.045-29.543-150.835 8.141-0.973 15.995-2.376 23.767-3.338 5.632-0.82 11.47-0.82 16.958-1.331 3.113-0.38 5.038 0.952 5.478 3.922 1.188 7.782 2.52 15.544 3.482 23.767 1.782 13.26 2.888 26.665 4.3 39.915 1.332 11.704 2.51 23.173 3.923 34.806 1.33 12.288 2.887 24.73 4.444 37.54 0.368 3.481 0.962 7.403 1.331 11.264-11.336 1.403-22.436 2.734-34.14 4.29z m83.159-14.592c-10.138-0.962-19.845-1.556-30.577-2.519-9.185-92.416-16.967-185.651-34.437-278.733 5.632-0.583 11.469-1.33 17.326-1.914 6.81-0.38 13.404-0.82 20.214-1.332 5.632-0.379 7.782 0.953 8.151 6.431l2.888 43.991c1.33 19.845 2.887 39.69 4.3 59.535 0.953 14.367 1.547 28.59 2.878 43.029 1.331 15.77 2.888 31.324 4.3 46.879 1.332 11.253 2.366 23.173 3.329 34.427 1.33 12.288 2.744 24.74 3.481 37.55l0.963 10.731c0.072 1.925-0.891 2.294-2.816 1.925z m26.808-210.75c2.52 0 3.482 0.595 3.482 3.482-0.369 7.783 0 15.995 0 23.767v29.553c-5.847 0.594-11.11 0.963-16.364 1.331-1.556-18.882-2.887-37.918-4.444-58.204h17.326v0.072z m2.97 228.67c-0.973 0-2.53-1.556-2.53-2.519-1.546-16.957-2.887-33.833-4.433-50.79-1.332-15.565-2.898-31.55-4.301-47.104-1.331-15.995-2.888-32.133-4.301-48.435 0-0.953 0-1.915-0.369-3.328a53.658 53.658 0 0 1 11.264-1.332c10.138 0 20.44 0.226 30.577 0.594 2.519 0 3.932 1.925 3.932 4.301 0.215 5.253 0.584 10.138 0.584 15.401 0 23.767-0.369 47.903 0 71.608 0.379 19.252 0.973 37.99 1.331 57.242 0 0.963 0 2.365 0.379 4.444-10.957-0.082-21.852 0.297-32.143-0.082z m420.167-228.516h16.958c2.888 0 4.3 0.963 4.3 4.434v53.392c-6.82-0.369-13.854-0.584-21.196-0.963v-56.863h-0.062z m-115.814-6.369c1.915 0 2.878 1.178 3.328 3.482 1.772 17.92 3.328 35.39 5.253 53.903-6.81 0.82-13.25 0.963-20.439 1.557-2.519-19.62-4.884-38.728-7.403-58.573 6.594-0.369 13.035-0.369 19.25-0.369z m-27.627 3.103c2.734-0.369 1.925 1.925 2.365 3.481 0.594 6.595 1.331 12.81 1.925 19.252 0.963 10.148 2.376 19.855 3.338 30.003v3.922l-15.77 2.734c-3.48-18.883-6.82-37.54-10.3-56.801 6.143-0.666 12.216-2.069 18.431-2.591z m-3.113 183.726c-2.52 8.366-8.366 14.95-15.545 20.439-16.957 13.404-34.437 25.098-54.886 31.918a264.704 264.704 0 0 1-43.98 10.732c-19.477 2.887-39.323 4.3-59.168 6.226-4.075 0.593-7.987 0-12.288 0-1.925 0-2.519-0.963-2.519-2.888-0.225-8.745-0.962-17.92-1.556-27.034-0.963-11.694-2.15-23.173-3.482-34.806-1.925-16.363-3.922-32.133-5.847-48.435-1.925-17.1-4.3-34.058-6.226-51.015-1.925-16.733-3.481-33.25-5.837-49.838-2.744-18.883-5.263-37.54-8.15-56.792a509.921 509.921 0 0 0-13.036-66.355c-0.225-0.962 0.82-2.887 1.331-3.328a3055.2 3055.2 0 0 0 57.61-22.814c6.226-2.735 6.82-3.697 6.82 4.444 0 34.437 0 68.72 0.584 103.157 0.379 17.92 0.962 35.84 2.376 53.689 1.556 21.401 3.921 43.172 5.847 65.024 0 0.952 0.594 1.771 0.594 2.355 7.403-0.358 14.592-0.952 21.77-0.952 30.587-0.82 60.498 3.328 89.16 14.581 13.998 5.632 27.617 12.084 39.69 21.187 10.076 7.547 12.37 16.876 6.738 30.505z m26.07 44.728c-10.147-50.432-19.844-100.045-29.552-150.835 8.151-0.973 15.995-2.376 23.777-3.338 5.632-0.82 11.47-0.82 16.958-1.331 3.102-0.38 5.028 0.952 5.478 3.922 1.188 7.782 2.52 15.544 3.482 23.767 1.771 13.26 2.887 26.665 4.3 39.915 1.332 11.704 2.51 23.173 3.912 34.806 1.331 12.288 2.888 24.73 4.444 37.54 0.38 3.481 0.963 7.403 1.332 11.264-11.326 1.403-22.426 2.734-34.13 4.29z m83.088-14.592c-10.148-0.962-19.845-1.556-30.587-2.519-9.185-92.416-16.957-185.651-34.437-278.733 5.632-0.583 11.479-1.33 17.326-1.914 6.82-0.38 13.414-0.82 20.224-1.332 5.632-0.379 7.772 0.953 8.14 6.431l2.889 43.991c1.33 19.845 2.887 39.69 4.3 59.535 0.963 14.367 1.557 28.59 2.888 43.029 1.331 15.77 2.888 31.324 4.3 46.879 1.332 11.253 2.356 23.173 3.329 34.427 1.331 12.288 2.734 24.74 3.481 37.55l0.953 10.731c0.153 1.925-0.82 2.294-2.806 1.925z m26.88-210.75c2.519 0 3.482 0.595 3.482 3.482-0.38 7.783 0 15.995 0 23.767v29.553c-5.858 0.594-11.11 0.963-16.374 1.331-1.546-18.882-2.888-37.918-4.434-58.204h17.326v0.072z m2.96 228.67c-0.963 0-2.52-1.556-2.52-2.519-1.556-16.957-2.887-33.833-4.444-50.79-1.331-15.565-2.888-31.55-4.3-47.104-1.332-15.995-2.878-32.133-4.291-48.435 0-0.953 0-1.915-0.369-3.328a53.658 53.658 0 0 1 11.264-1.332c10.138 0 20.429 0.226 30.577 0.594 2.519 0 3.922 1.925 3.922 4.301 0.225 5.253 0.594 10.138 0.594 15.401 0 23.767-0.369 47.903 0 71.608 0.368 19.252 0.962 37.99 1.33 57.242 0 0.963 0 2.365 0.38 4.444-10.957-0.082-21.852 0.297-32.144-0.082z" fill="#1296DB" p-id="10126"></path></svg>'
        },
        link: 'https://space.bilibili.com/1746489039'
      },
      {
        icon: {
          svg: '<svg t="1715619334971" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="34973" width="200" height="200"><path d="M511.09761 957.257c-80.159 0-153.737-25.019-201.11-62.386-24.057 6.702-54.831 17.489-74.252 30.864-16.617 11.439-14.546 23.106-11.55 27.816 13.15 20.689 225.583 13.211 286.912 6.767v-3.061z" fill="#FAAD08" p-id="34974"></path><path d="M496.65061 957.257c80.157 0 153.737-25.019 201.11-62.386 24.057 6.702 54.83 17.489 74.253 30.864 16.616 11.439 14.543 23.106 11.55 27.816-13.15 20.689-225.584 13.211-286.914 6.767v-3.061z" fill="#FAAD08" p-id="34975"></path><path d="M497.12861 474.524c131.934-0.876 237.669-25.783 273.497-35.34 8.541-2.28 13.11-6.364 13.11-6.364 0.03-1.172 0.542-20.952 0.542-31.155C784.27761 229.833 701.12561 57.173 496.64061 57.162 292.15661 57.173 209.00061 229.832 209.00061 401.665c0 10.203 0.516 29.983 0.547 31.155 0 0 3.717 3.821 10.529 5.67 33.078 8.98 140.803 35.139 276.08 36.034h0.972z" fill="#000000" p-id="34976"></path><path d="M860.28261 619.782c-8.12-26.086-19.204-56.506-30.427-85.72 0 0-6.456-0.795-9.718 0.148-100.71 29.205-222.773 47.818-315.792 46.695h-0.962C410.88561 582.017 289.65061 563.617 189.27961 534.698 185.44461 533.595 177.87261 534.063 177.87261 534.063 166.64961 563.276 155.56661 593.696 147.44761 619.782 108.72961 744.168 121.27261 795.644 130.82461 796.798c20.496 2.474 79.78-93.637 79.78-93.637 0 97.66 88.324 247.617 290.576 248.996a718.01 718.01 0 0 1 5.367 0C708.80161 950.778 797.12261 800.822 797.12261 703.162c0 0 59.284 96.111 79.783 93.637 9.55-1.154 22.093-52.63-16.623-177.017" fill="#000000" p-id="34977"></path><path d="M434.38261 316.917c-27.9 1.24-51.745-30.106-53.24-69.956-1.518-39.877 19.858-73.207 47.764-74.454 27.875-1.224 51.703 30.109 53.218 69.974 1.527 39.877-19.853 73.2-47.742 74.436m206.67-69.956c-1.494 39.85-25.34 71.194-53.24 69.956-27.888-1.238-49.269-34.559-47.742-74.435 1.513-39.868 25.341-71.201 53.216-69.974 27.909 1.247 49.285 34.576 47.767 74.453" fill="#FFFFFF" p-id="34978"></path><path d="M683.94261 368.627c-7.323-17.609-81.062-37.227-172.353-37.227h-0.98c-91.29 0-165.031 19.618-172.352 37.227a6.244 6.244 0 0 0-0.535 2.505c0 1.269 0.393 2.414 1.006 3.386 6.168 9.765 88.054 58.018 171.882 58.018h0.98c83.827 0 165.71-48.25 171.881-58.016a6.352 6.352 0 0 0 1.002-3.395c0-0.897-0.2-1.736-0.531-2.498" fill="#FAAD08" p-id="34979"></path><path d="M467.63161 256.377c1.26 15.886-7.377 30-19.266 31.542-11.907 1.544-22.569-10.083-23.836-25.978-1.243-15.895 7.381-30.008 19.25-31.538 11.927-1.549 22.607 10.088 23.852 25.974m73.097 7.935c2.533-4.118 19.827-25.77 55.62-17.886 9.401 2.07 13.75 5.116 14.668 6.316 1.355 1.77 1.726 4.29 0.352 7.684-2.722 6.725-8.338 6.542-11.454 5.226-2.01-0.85-26.94-15.889-49.905 6.553-1.579 1.545-4.405 2.074-7.085 0.242-2.678-1.834-3.786-5.553-2.196-8.135" fill="#000000" p-id="34980"></path><path d="M504.33261 584.495h-0.967c-63.568 0.752-140.646-7.504-215.286-21.92-6.391 36.262-10.25 81.838-6.936 136.196 8.37 137.384 91.62 223.736 220.118 224.996H506.48461c128.498-1.26 211.748-87.612 220.12-224.996 3.314-54.362-0.547-99.938-6.94-136.203-74.654 14.423-151.745 22.684-215.332 21.927" fill="#FFFFFF" p-id="34981"></path><path d="M323.27461 577.016v137.468s64.957 12.705 130.031 3.91V591.59c-41.225-2.262-85.688-7.304-130.031-14.574" fill="#EB1C26" p-id="34982"></path><path d="M788.09761 432.536s-121.98 40.387-283.743 41.539h-0.962c-161.497-1.147-283.328-41.401-283.744-41.539l-40.854 106.952c102.186 32.31 228.837 53.135 324.598 51.926l0.96-0.002c95.768 1.216 222.4-19.61 324.6-51.924l-40.855-106.952z" fill="#EB1C26" p-id="34983"></path></svg>'
        },
        link: 'https://qm.qq.com/q/qZHKbcJyuW'
      }
    ],
    search: {
      provider: 'local',
      // 中文
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    logo: 'logo.svg',
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    outlineTitle: '文章目录',
    outline: [2, 6],
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    returnToTopLabel:'返回顶部',
  },
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
})
