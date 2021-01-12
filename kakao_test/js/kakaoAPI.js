// SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init('08f9c3456cd84f0e93a2f99a212dc02a');
// SDK 초기화 여부를 판단합니다.
console.log(Kakao.isInitialized());


function loginWithKakao() {
    Kakao.Auth.login({
      success: function(authObj) {
        //alert(JSON.stringify(authObj));
        Kakao.API.request({
              url: '/v2/user/me',
              success: function(response) {
                console.log(response);
                  console.log(response.id);
                  alert(response.id);
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

  function LogoutTest(){
    if (!Kakao.Auth.getAccessToken()) {
    console.log('Not logged in.');
    return;
    }
    Kakao.Auth.logout(function() {
    console.log(Kakao.Auth.getAccessToken());
    });
  }

  function CallId(){
    Kakao.API.request({
        url: '/v2/user/me',
        success: function(response) {
          console.log(response);
            console.log(response.id);
            alert(response.id);
        },
        fail: function(error) {
            console.log(error);
        }
    });
  }