
// *********** Lock/Unlock Button script *************

let locked = false;

function toggleLock() {
    locked = !locked;
    document.getElementById('html-code').readOnly = locked;
    document.getElementById('css-code').readOnly = locked;
    document.getElementById('js-code').readOnly = locked;
}

// ********** Copy button Script **********

document.getElementById('copyHtml').addEventListener('click', function () {
    const htmlContent = document.getElementById('html-code');
    htmlContent.select();
    document.execCommand('copy');
    alert('Code copied to clipboard!');
});

document.getElementById('copyCss').addEventListener('click', function () {
    const cssContent = document.getElementById('css-code');
    cssContent.select();
    document.execCommand('copy');
    alert('Code copied to clipboard!');
});

document.getElementById('copyJs').addEventListener('click', function () {
    const jsContent = document.getElementById('js-code');
    jsContent.select();
    document.execCommand('copy');
    alert('Code copied to clipboard!');
});

// ********** Save Button Script ****************

document.getElementById('saveBtn').addEventListener('click', function () {
    const htmlContent = document.getElementById('html-code').value;
    const cssContent = document.getElementById('css-code').value;
    const jsContent = document.getElementById('js-code').value;
    alert('Code saved!');
});


// **************** Code Run Script *********

function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}