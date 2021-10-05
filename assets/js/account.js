
function hideFunction(elem) {
    var parentElem = elem.parentNode;
    var children = parentElem.childNodes;
    for (var i=0; i < children.length; i++) {
        if (children[i].tagName == "INPUT") {
            if(children[i].id == 'email'){
                if (children[i].type === "email" ) {
                    children[i].type = "password";
                    document.getElementById("hide-eye").style.display="block";
                    document.getElementById("show-eye").style.display="none";
                    document.getElementById("hide-eye1").style.display="block";
                    document.getElementById("show-eye1").style.display="none";
                } else {
                    children[i].type = "email";
                    document.getElementById("show-eye").style.display="block";
                    document.getElementById("hide-eye").style.display="none";
                    document.getElementById("show-eye1").style.display="block";
                    document.getElementById("hide-eye1").style.display="none";
                }
            }
            
        }
    }
}
function editFunction(elem) {
    var parentElem = elem.parentNode;
    var children = parentElem.childNodes;
    for (var i=0; i < children.length; i++) {
        if (children[i].tagName == "INPUT") {
            children[i].removeAttribute('readonly')
            var elemLen = children[i].value.length;
            if (document.selection) {
                children[i].focus();
                var oSel = document.selection.createRange();
                oSel.moveStart('character', -elemLen);
                oSel.moveStart('character', elemLen);
                oSel.moveEnd('character', 0);
                oSel.select();
            }
            else if (children[i].selectionStart || children[i].selectionStart == '0') {
                children[i].selectionStart = elemLen;
                children[i].selectionEnd = elemLen;
                children[i].focus();
            }
            
        }else if (children[i].tagName == "TEXTAREA") {
            children[i].removeAttribute('readonly')
            var elemLen = children[i].value.length;
            if (document.selection) {
                children[i].focus();
                var oSel = document.selection.createRange();
                oSel.moveStart('character', -elemLen);
                oSel.moveStart('character', elemLen);
                oSel.moveEnd('character', 0);
                oSel.select();
            }
            else if (children[i].selectionStart || children[i].selectionStart == '0') {
                children[i].selectionStart = elemLen;
                children[i].selectionEnd = elemLen;
                children[i].focus();
            }
        }
    }
}