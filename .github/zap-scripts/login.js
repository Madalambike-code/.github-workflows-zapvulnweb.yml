// Authentication Script for testphp.vulnweb.com

function authenticate(helper, paramsValues, credentials) {
    // Get username and password from ZAP
    var username = credentials.getParam("Username");
    var password = credentials.getParam("Password");

    // Prepare the login request
    var msg = helper.prepareMessage();
    msg.setRequestHeader("POST /userinfo.php HTTP/1.1");
    msg.getRequestHeader().setHeader("Host", "testphp.vulnweb.com");

    // Login parameters for testphp.vulnweb.com
    msg.setRequestBody("uname=" + username + "&pass=" + password + "&login=login");

    // Set the content length correctly
    msg.getRequestHeader().setContentLength(msg.getRequestBody().length());

    // Return the HTTP request
    return msg;
}

function getRequiredParamsNames(){
    return [];
}

function getOptionalParamsNames(){
    return [];
}

function getCredentialsParamsNames(){
    return ["Username", "Password"];
}
