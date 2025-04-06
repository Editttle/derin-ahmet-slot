const symbols = ["🍒", "⭐", "💎", "7️⃣", "🍋"];
let balance = 1000;

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spinSlots() {
    if (balance < 50) {
        document.getElementById("message").innerText = "Yetersiz bakiye!";
        return;
    }

    balance -= 50;

    const row1 = getRandomSymbol();
    const row2 = getRandomSymbol();
    const row3 = getRandomSymbol();

    document.getElementById("row1").innerText = row1;
    document.getElementById("row2").innerText = row2;
    document.getElementById("row3").innerText = row3;

    if (row1 === row2 && row2 === row3) {
        balance += 300;
        document.getElementById("message").innerText = "Tebrikler! Kazandınız!";
    } else {
        document.getElementById("message").innerText = "Tekrar deneyin.";
    }

    document.getElementById("balance").innerText = balance;
}

document.getElementById("spin").addEventListener("click", spinSlots);
