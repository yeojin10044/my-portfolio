function loadAnotherJson(callback) {
    $.getJSON("responses.json", function(data) {
        callback(data);
    });
}

$(document).ready(function() {
    // 초기 메시지
    appendAnotherMessage('챗봇', '쇼핑몰 관련된 질문을<br> 해주시면 대답해드릴게요.');

    // 엔터 키 감지
    $('#anotherUserInput').keydown(function(event) {
        if (event.keyCode === 13) {
            sendAnotherMessage();
        }
    });

    // 유저가 메시지를 입력하면 호출되는 함수
    window.sendAnotherMessage = function() {
        const userInput = $('#anotherUserInput').val();
        if (userInput.trim() === '') return;

        appendAnotherMessage('유저', userInput);

        // JSON 파일 로드 및 대화 패턴 적용
        loadAnotherJson(function(responses) {
            const response = responses[userInput] || '죄송해요, 잘 이해하지 못했어요.';
            appendAnotherMessage('챗봇', response);
        });

        // 입력창 비우기
        $('#anotherUserInput').val('');
    };

    // 챗봇 대답을 받아오는 함수 (가상 데이터 사용)
    // 기존 함수에서 JSON 파일을 로드하는 방식
    // (responses 객체 대신 로드한 JSON 데이터를 사용)
    function getAnotherBotResponse(userInput) {
        // JSON 파일 로드 및 대화 패턴 적용
        loadAnotherJson(function(responses) {
            const response = responses[userInput] || '죄송해요, 잘 이해하지 못했어요.';
            appendAnotherMessage('챗봇', response);
        });
    }

    // 메시지를 화면에 추가하는 함수
    function appendAnotherMessage(sender, message) {
        const chatBody = $('#anotherChatBody');
        const className = sender === '유저' ? 'user' : 'bot';
        const messageHtml = `<div class="another-chat-message ${className}">${message}</div>`;
        chatBody.append(messageHtml);

        // 스크롤을 가장 아래로 이동
        chatBody.scrollTop(chatBody.prop('scrollHeight'));
    }
});

// jQuery를 사용한 뒤로가기 아이콘 클릭 이벤트 핸들러
$('#goBackLink').on('click', function() {
    window.history.back(); // 뒤로가기
});
