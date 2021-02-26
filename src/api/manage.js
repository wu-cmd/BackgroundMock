

import axios from 'axios'

// post
// 登录接口
export function Logins(url, parameter) {
  return axios({
    url: url,
    method: 'post',
    data: parameter
  })
}
export function MenuList(url, parameter) {
  return axios({
    url: url,
    method: 'post',
    data: parameter
  })
}
export function userLi(url, parameter) {
  return axios({
    url: url,
    method: 'post',
    data: parameter
  })
}

export function status(url, parameter) {
  return axios({
    url: url,
    method: 'post',
    data: parameter
  })
}

export function addList(url, parameter) {
  return axios({
    url: url,
    method: 'post',
    params: parameter
  })
}
export function qxList(url, parameter) {
  return axios({
    url: url,
    method: 'post',
    params: parameter
  })
}
export function jsList(url, parameter) {
  return axios({
    url: url,
    method: 'post',
    params: parameter
  })
}
// // post method= {post | put}
// export function httpAction(url, parameter, method) {
//   return axios({
//     url: url,
//     method: method,
//     data: parameter
//   })
// }
// export function httpHeaderAction(url, parameter, method, headers) {
//   return axios({
//     url: url,
//     method: method,
//     data: parameter,
//     headers: headers
//   })
// }

// // put
// export function putAction(url, parameter) {
//   return axios({
//     url: url,
//     method: 'put',
//     data: parameter
//   })
// }

// // put 请求头接收参数
// export function putHeaderAction(url, parameter) {
//   return axios({
//     url: url,
//     method: 'put',
//     params: parameter
//   })
// }

// // get
// export function getAction(url, parameter) {
//   return axios({
//     url: url,
//     method: 'get',
//     params: parameter
//   })
// }

// // deleteAction
// export function deleteAction(url, parameter) {
//   return axios({
//     url: url,
//     method: 'delete',
//     params: parameter
//   })
// }

// // deleteStatus 禁用启用
// export function editStatus(url, parameter) {
//   return axios({
//     url: url,
//     method: 'delete',
//     params: parameter
//   })
// }

// export function getUserList(parameter) {
//   return axios({
//     url: api.user,
//     method: 'get',
//     params: parameter
//   })
// }

// export function getRoleList(parameter) {
//   return axios({
//     url: api.role,
//     method: 'get',
//     params: parameter
//   })
// }

// export function getServiceList(parameter) {
//   return axios({
//     url: api.service,
//     method: 'get',
//     params: parameter
//   })
// }

// export function getPermissions(parameter) {
//   return axios({
//     url: api.permissionNoPager,
//     method: 'get',
//     params: parameter
//   })
// }

// // id == 0 add     post
// // id != 0 update  put
// export function saveService(parameter) {
//   return axios({
//     url: api.service,
//     method: parameter.id == 0 ? 'post' : 'put',
//     data: parameter
//   })
// }

// /**
//  * 下载文件 用于excel导出
//  * @param url
//  * @param parameter
//  * @returns {*}
//  */
// export function downFile(url, parameter) {
//   return axios({
//     url: url,
//     params: parameter,
//     method: 'get',
//     responseType: 'blob'
//   })
// }

// /**
//  * 获取文件访问路径
//  * @param avatar
//  * @param imgerver
//  * @param str
//  * @returns {*}
//  */
// export function getFileAccessHttpUrl(avatar, imgerver, subStr) {
//   if (avatar && avatar.indexOf(subStr) != -1) {
//     return avatar
//   } else {
//     return imgerver + '/' + avatar
//   }
// }
