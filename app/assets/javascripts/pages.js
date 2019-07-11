$(document).on('ready turbolinks:load', function(){
    $.ajaxSetup({
        headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') }
      });
    $('#calendar').fullCalendar({
        events: '/events',
        //events: [ {title: 'Event1', start: '<%= Date.today %>' , end: '<%= Date.today + 4.days%>'},
        //{title: 'Event2', start: '<%= Date.today + 1.days %>'}],
        color: 'yellow',
        textColor: 'black',
        locale: 'es',
        eventDrop: function(event, delta, revertFunc) {
            $.ajax({
                url: 'events/' + event.id,
                type: 'PATCH',
                dataType: 'JSON',
                data: {event: {start: event.start.format() }}
            })
        },
        eventClick: function(event){
            $.ajax({
            url: '/events/' + event.id + '/edit',
            type: 'GET',
            dataType: 'script'
        })
        }
    });
});
