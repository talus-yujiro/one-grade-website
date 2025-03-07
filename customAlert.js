function showCustomAlert(message) {
    let existingAlert = document.getElementById("custom-alert");
    if (existingAlert) existingAlert.remove();

    // カスタムアラートのコンテナ作成
    let alertContainer = document.createElement("div");
    alertContainer.id = "custom-alert";
    alertContainer.style.position = "fixed";
    alertContainer.style.top = "50%";
    alertContainer.style.left = "50%";
    alertContainer.style.transform = "translate(-50%, -50%)";
    alertContainer.style.padding = "20px";
    alertContainer.style.background = "#abc3ff";
    alertContainer.style.border = "2px solid #00134c";
    alertContainer.style.zIndex = "1000";
    alertContainer.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)";
    alertContainer.style.borderRadius = "8px";
    alertContainer.style.textAlign = "center";
    alertContainer.style.opacity = "0"; // 最初は透明
    alertContainer.style.transition = "opacity 0.5s ease-in-out"; // フェードアニメーション

    // メッセージ表示用要素
    let messageElem = document.createElement("p");
    messageElem.innerText = message;
    messageElem.style.marginBottom = "15px";

    // OKボタン作成
    let closeButton = document.createElement("button");
    closeButton.innerText = "OK";
    closeButton.style.padding = "5px 15px";
    closeButton.style.cursor = "pointer";
    closeButton.style.border = "1px solid #00134c";
    closeButton.style.background = "#5787ff";
    closeButton.style.color = "#00134c";
    closeButton.style.borderRadius = "5px";
    closeButton.style.boxShadow = "0px 0px 5px 1px rgba(0, 0, 0, 0.6)";
    closeButton.onclick = function () {
        alertContainer.style.opacity = "0"; // フェードアウト
        setTimeout(() => alertContainer.remove(), 500); // 0.5秒後に削除
    };

    // 要素を組み立てて追加
    alertContainer.appendChild(messageElem);
    alertContainer.appendChild(closeButton);
    document.body.appendChild(alertContainer);

    // 少し遅れてフェードイン
    setTimeout(() => alertContainer.style.opacity = "1", 10);
}

// **グローバルスコープに登録**
window.showCustomAlert = showCustomAlert;