const dateEl = document.querySelector("#date");
const contentEl = document.querySelector("#content");
let targetEl;

// $("p").on("click", function(e) {
//     dateEl.value = e.target.innerText;
//     e.target.parentNode.classList.add("selected");
// })
// 원래는 p 태그를 클릭하면 그 부모에 selected라는 클래스를 부여하고,
// 클래스가 있는 곳에 내용을 추가하는 식으로 완성했는데
// 그렇게 하면, 클릭만 하고 내용을 추가하지 않았을 경우에도 클래스가 남기 때문에 알맞은 곳에 div가 들어가지 않는 문제가 생겨서
// 올려주신대로 전역변수를 이용했습니다

document.querySelector("table").addEventListener("click", function (e) {
    if (e.target.tagName === "P") {
        dateEl.value = e.target.textContent;
        targetEl = e.target.parentNode;
    } else if (e.target.tagName === "TD") { // div 클릭하는 경우에도 텍스트 들어가기 때문에 else if 처리
        dateEl.value = e.target.firstChild.textContent;
        targetEl = e.target;
    }
});


function writeSchedule() {
    const divEl = document.createElement("div");
    divEl.textContent = contentEl.value;
    divEl.setAttribute("onclick", "deleteContent(this);");
    targetEl.append(divEl);
    // document.querySelector(".selected").appendChild(divEl);
    // document.querySelector(".selected").classList.remove("selected");
    dateEl.value = "";
    contentEl.value = "";
}

function deleteContent(t) {
    t.remove();
}