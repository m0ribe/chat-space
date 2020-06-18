$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Main-chat__Message-list__Text-box" data-message-id=${message.id}>
          <div class="Main-chat__Message-list__Text-box__Text-info">
            <div class="Main-chat__Message-list__Text-box__Text-info__User">
              ${message.user_name}
            </div>
            <div class="Main-chat__Message-list__Text-box__Text-info__Date">
              ${message.created_at}
            </div>
          </div>
          <div class="Main-chat__Message-list__Text-box__Comment">
            <p class="Main-chat__Message-list__Text-box__Comment__content">
              ${message.content}
            </p>
            <img class="Main-chat__Message-list__Text-box__Comment__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Main-chat__Message-list__Text-box" data-message-id=${message.id}>
        <div class="Main-chat__Message-list__Text-box__Text-info">
          <div class="Main-chat__Message-list__Text-box__Text-info__User">
            ${message.user_name}
          </div>
          <div class="Main-chat__Message-list__Text-box__Text-info__Date">
            ${message.created_at}
          </div>
        </div>
        <div class="Main-chat__Message-list__Text-box__Comment">
          <p class="Main-chat__Message-list__Text-box__Comment__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  

  $('.Main-chat__Message-form__Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Main-chat__Message-list').append(html);
      $('.Main-chat__Message-form__Form')[0].reset();
      $('.Main-chat__Message-list').animate({ scrollTop: $('.Main-chat__Message-list')[0].scrollHeight});
      $('.Main-chat__Message-form__Form__Send').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});
