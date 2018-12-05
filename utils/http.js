import{config} from "../config.js"

const tips={
  1 : "出现了一个未定义错误",
  3000:"Title 不存在",
  404:"路径错误",
}

class HTTP{
  request(params){
    if(!params.method){
      params.method = "GET"
    }

    wx.request({
      url: config.api_base_url + params.url,
      method:params.method,
      data:params.data,
      header:{
        "content-type":"application/json"
      },
      success:(res) => {
        let code = res.statusCode.toString()
        if(code.startsWith("2")){
          params.success(res.data)
        }else{
          console.log(res.data)
          let error_code = res.data.statusCode
          this._show_error(error_code)
        }
      },
      fail:(err) => {
        let error_code = res.data.error_code
        this._show_error(error_code)
      }
    })
  }

  _show_error(error_code) {
    if(!error_code){
      error_code = 1 
    }

    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }
}



export {HTTP}