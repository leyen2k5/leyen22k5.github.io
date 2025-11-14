function calculate() {
    var a = document.frmCal.txta.value.trim();
    var b = document.frmCal.txtb.value.trim();
    var operator = document.frmCal.slto.value;
    var result;

    // Kiểm tra nhập trống
    if (a === "" || (b === "" && ["+", "-", "*", "/", "%", "^", "max", "min"].includes(operator))) {
        document.getElementById("result").innerText = "Missing input!";
        alert("Please fill in all required fields.");
        return;
    }

    // Chuyển sang số
    a = parseFloat(a);
    b = parseFloat(b);

    // Kiểm tra số không hợp lệ
    if (isNaN(a) || (isNaN(b) && ["+", "-", "*", "/", "%", "^", "max", "min"].includes(operator))) {
        document.getElementById("result").innerText = "Invalid number!";
        alert("Please enter valid numbers.");
        return;
    }

    switch (operator) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;

        case "/":
            if (b === 0) {
                alert("Error: Cannot divide by zero!");
                result = "∞";
                break;
            }
            result = a / b;
            break;

        case ":":   // bạn đang dùng ":" để làm phép mod, mình giữ nguyên
        case "%":
            result = a % b;
            break;

        // ======= Phép tính nâng cao =======

        case "^":       // power
            result = Math.pow(a, b);
            break;

        case "sqrt":    // căn bậc 2 chỉ dùng a
            if (a < 0) {
                alert("Square root of negative number is invalid!");
                result = "Error";
                break;
            }
            result = Math.sqrt(a);
            break;

        case "abs":
            result = Math.abs(a);
            break;

        case "round":
            result = Math.round(a);
            break;

        case "max":
            result = Math.max(a, b);
            break;

        case "min":
            result = Math.min(a, b);
            break;

        default:
            result = "Invalid operator";
    }

    // Output
    document.getElementById("result").innerText = result;
    document.getElementById("result").style.color = "red";
    document.getElementById("result").style.fontWeight = "bold";
}
