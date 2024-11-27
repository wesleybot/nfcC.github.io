// 模擬後台的有效代碼列表
const validCodes = {
    "CARE1234": { item: "泡麵套餐", claimed: false },
    "LOVE5678": { item: "飲料組合", claimed: false }
};

function verifyCode() {
    // 獲取用戶輸入的代碼
    const userCode = document.getElementById("couponCode").value.trim();
    const resultDiv = document.getElementById("result");

    // 驗證代碼是否有效
    if (validCodes[userCode]) {
        if (!validCodes[userCode].claimed) {
            // 標記代碼已使用
            validCodes[userCode].claimed = true;
            resultDiv.innerHTML = `成功兌換！您領取的是：<strong>${validCodes[userCode].item}</strong>`;
            resultDiv.className = "success";
        } else {
            resultDiv.innerHTML = "此代碼已被使用，請聯繫工作人員。";
            resultDiv.className = "error";
        }
    } else {
        resultDiv.innerHTML = "無效的愛心代碼，請重試。";
        resultDiv.className = "error";
    }
}