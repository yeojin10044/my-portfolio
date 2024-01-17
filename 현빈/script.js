function loadJson(callback) {
    $.getJSON("responses.json", function(data) {
        callback(data);
    });
}
$(document).ready(function() {
    // JSON 로드 함수
    function loadJson(callback) {
        $.getJSON("responses.json", function(data) {
            callback(data);
        });
    }

    // 초기 메시지
    appendMessage('챗봇', '안녕하세요 무엇을 <br> 도와드릴까요?');

    // 엔터 키 감지
    $('#userInput').keydown(function(event) {
        if (event.keyCode === 13) {
            sendMessage();
        }
    });

    // 유저가 메시지를 입력하면 호출되는 함수
    window.sendMessage = function() {
        const userInput = $('#userInput').val();
        if (userInput.trim() === '') return;

        appendMessage('유저', userInput);

        // JSON 파일 로드 및 대화 패턴 적용
        loadJson(function(responses) {
            const response = responses[userInput] || '죄송해요, 잘 이해하지 못했어요.';
            appendMessage('챗봇', response);
        });

        // 입력창 비우기
        $('#userInput').val('');
    };

    // 챗봇 대답을 받아오는 함수 (가상 데이터 사용)
    // 기존 함수에서 JSON 파일을 로드하는 방식
    // (responses 객체 대신 로드한 JSON 데이터를 사용)
    function getBotResponse(userInput) {
        // JSON 파일 로드 및 대화 패턴 적용
        loadJson(function(responses) {
            const response = responses[userInput] || '죄송해요, 잘 이해하지 못했어요.';
            appendMessage('챗봇', response);
        });
    }

    // 메시지를 화면에 추가하는 함수
    function appendMessage(sender, message) {
        const chatBody = $('#chatBody');
        const className = sender === '유저' ? 'user' : 'bot';
        const messageHtml = `<div class="chat-message ${className}">${message}</div>`;
        chatBody.append(messageHtml);

        // 스크롤을 가장 아래로 이동
        chatBody.scrollTop(chatBody.prop('scrollHeight'));
    }
});
