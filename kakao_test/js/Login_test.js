

const save_id_DB = ["1592528927","1592738539"];

//로그인 과정
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
                  LoginCheckRogic(response.id);
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

  function LoginCheckRogic(id){
    console.log(id);
    if(LoginIDCheck(id))
    {
        alert("로그인 되었습니다.")
    }
    else
    {
        alert("회원이 아닙니다.")
    }

    function LoginIDCheck(id){
        save_id_DB.forEach(function(element){
            console.log(String(id),element);
            if(String(element) == String(id))
            {
                return true;
            }
        })

        return false;

    }
}