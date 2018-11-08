//==================================
//　【関数名】NotInputCheck
//　【機　能】未入力チェック
//==================================
var NotInputCheck = function(targetValue) {
    if (targetValue == "") {
        return true;
    } else {
        return false;
    }
};

//==================================
//　【関数名】CharTypeCheck
//　【機　能】文字種チェック
//==================================
var CharTypeCheck = function(targetValue) {
    if( targetValue.match(/[^0-9 a-z A-Z ]/g) ) {
        return true;
    } else { 
        return false;
    }
};

//==================================
//　【関数名】UserIdCheck
//　【機　能】ユーザＩＤチェック
//==================================
var UserIdCheck = function(userId) {

    var errMsg = "";

    // 未入力チェック
    if ( NotInputCheck(userId) ) {
        errMsg = "ユーザＩＤが未入力です。" ;
    }
    // 半角英数字チェック
    else if ( CharTypeCheck(userId) ) {
        errMsg = "ユーザＩＤの入力可能文字は、半角英数字のみです。"
    }

    if( errMsg !== "" ) {
        // エラーメッセージ表示
        window.alert( errMsg );
        return true;
    }

    return false;

};

//==================================
//　【関数名】PassWordCheck
//　【機　能】パスワードチェック
//==================================
var PassWordCheck = function(passWord) {

    var errMsg = "";

    // 未入力チェック
    if ( NotInputCheck(passWord) ) {
        errMsg = "パスワードが未入力です。" ;
    }
    // 半角英数字チェック
    else if ( CharTypeCheck(passWord) ) {
        errMsg = "パスワードの入力可能文字は、半角英数字のみです。"
    }

    if( errMsg !== "" ) {
        // エラーメッセージ表示
        window.alert( errMsg );
        return true;
    }

    return false;

};
