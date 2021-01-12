
function loginWithKakao() {
    Kakao.Auth.login({
      success: function(authObj) {
        alert(JSON.stringify(authObj));
        Kakao.API.request({
              url: '/v2/user/me',
              success: function(response) {
                  console.log(response);
                  alert(response.kakao_account);
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