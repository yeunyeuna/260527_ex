document.getElementById('recommendBtn').addEventListener('click', function() {
    const menus = [
        "김치찌개",
        "된장찌개",
        "제육볶음",
        "불고기",
        "비빔밥",
        "냉면",
        "짜장면",
        "짬뽕",
        "탕수육",
        "치킨",
        "피자",
        "햄버거",
        "샐러드",
        "파스타",
        "寿司"  // 스시
    ];

    const randomIndex = Math.floor(Math.random() * menus.length);
    const selectedMenu = menus[randomIndex];

    document.getElementById('result').textContent = "오늘의 점심 메뉴: " + selectedMenu;
});