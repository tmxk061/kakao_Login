

var save_id = "1592528927";


function loginWithKakao_main() {
    Kakao.Auth.login({
      success: function(authObj) {
        //alert(JSON.stringify(authObj));
        Kakao.API.request({
              url: '/v2/user/me',
              success: function(response) {
                  //console.log(response);
                  //console.log(response.id);
                  //alert(response.id);
                  LoginCheck(response.id);
              },
              fail: function(error) {
                  console.log(error);
              }
          });
      },
      fail: function(err) {
        alert(JSON.stringify(err))
      },
    })
  }

  function LoginCheck(id){
    console.log(id);
    if(id == save_id)
    {
        alert("로그인 되었습니다.")
    }
    else
    {
        alert("회원이 아닙니다.")
    }
}