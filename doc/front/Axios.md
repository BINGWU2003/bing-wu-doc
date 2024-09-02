## Axios

### 请求失败自动重新请求

#### 方案1

手动实现一个简易的请求失败

##### 基本流程

<img src="https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240902222824361.png?imageSlim" alt="image-20240902222824361" style="zoom:50%;" />

##### 源代码

配置基本项

```js
// 最大重试次数
const MAX_RETRIES = 3 
// 重试时间间隔
const RETRY_DELAY = 1000
```

重试的请求函数

`instance(config)`发送请求

```js
const backoff = new Promise((resolve) => {
    setTimeout(() => {
      resolve(instance(config))
    // RETRY_DELAY 每次请求的时间间隔
    }, RETRY_DELAY)
})
```

所有代码

```js
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { getUserStore } from '@/stores'
const userStore = getUserStore()
const instance = axios.create({
  baseURL: 'http://localhost:3000'
})
const MAX_RETRIES = 3
const RETRY_DELAY = 1000

// 添加请求拦截器
instance.interceptors.request.use(
  async (config) => {
    // 在发送请求之前做些什么
    config.headers.Authorization = `Bearer ${userStore.token}`
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code && response.data.code === 2000) {
      return Promise.reject(response)
    }
    return response
  },
  async (error) => {
    const config = error.config
    if (!config.retryCount) {
      config.retryCount = 0
    }
    if (config.retryCount < MAX_RETRIES) {
      config.retryCount++
      console.log('retryCount', config.retryCount)
      const backoff = new Promise((resolve) => {
        setTimeout(() => {
          resolve(instance(config))
        }, RETRY_DELAY)
      })
      await backoff
    }
    if (error?.response?.status === 401) {
      // 清空token
      userStore.setToken('')
      ElMessage.error('登陆过期')
    }
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance

```

#### 方案2

通过库`axios-retry`来实现

[官方文档](https://www.npmjs.com/package/axios-retry)

```bash
pnpm install axios-retry
```

### 取消请求
