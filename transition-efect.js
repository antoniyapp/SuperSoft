$(document).ready(function () {
    $("div.story-part").click(function (event) {
        event.preventDefault();
        linkLocation=this.getAttribute('title');
        $(this).css('display','none');
        $(linkLocation).css('display','block');

    })
})
