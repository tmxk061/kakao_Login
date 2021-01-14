

var save_id = "1592528927";

function LoginRogic(){
    var id = loginWithKakao();

    if(id == save_id)
    {
        alert("로그인 되었습니다.")
    }
    else
    {
        alert("회원이 아닙니다.")
    }
}