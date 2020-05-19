import axios from 'axios'//导入插件
export function request(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',//baseurl
    timeout:5000//超时时间，超过5000ms：超时
  })
  // instance.interceptors.request.use(
  //   res=>{
  //   console.log(res)
  //   return res
  //   },
  //   err=>{
  //     console.log(err);
  //   }
  //   )
  // instance.interceptors.response.use(
  //   res=>{
  //     console.log(res);
  //     return res
  //   },
  //   err=>{
  //     console.log(err);
  //   }
  // )
  //请求拦截
  instance.interceptors.request.use(config=>{
    // console.log(aaa);
    return config //拦截了config，要把config还回去
  },err =>{
    console.log(err);
  } )
  //响应拦截
  instance.interceptors.response.use(res=>{
      // console.log(res);
    // return res//拦截了返回结果，把结果还回去
    return res.data//可以少写一个data
    },
    err=>{
      console.log(err);
    })
  
  //instance 就是一个Promise，上面的没有必要，直接return instance
  //发送真正的请求
  // return instance(config)
  return instance(config)
}
