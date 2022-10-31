export default function wrapGifts(gifts) {
    const giftsLen = gifts.length;
    console.log(giftsLen);
    if (!giftsLen) {
        return [];
    }
    const oneGiftLen = gifts[0].length;
    let empaquetado = [];
    empaquetado.push("*".repeat(oneGiftLen + 2));

    gifts.map((gift) => {
        const regalo = "*" + gift + "*";
        empaquetado.push(regalo);
    });
    empaquetado.push("*".repeat(oneGiftLen + 2));
    return empaquetado;
}

wrapGifts(["🏈🎸", "🎮🧸"]);
