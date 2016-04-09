/* Accepts the following options:
 *      element
 *      text
 *      endpoint
 */
function createBatteryChart(options){
    getData(options);

}

function getData(options){
  var query_string = ""
  if( typeof options.start_time !== 'undefined'){
      query = {
          start_time: options.start_time,
          end_time: options.end_time
      }
      query_string = $.param(query);
  }
  var url = "http://192.168.1.98:16906/battery/" + options.endpoint + "?" + query_string;
  console.log(url);
  $.get(url, function(data){
    createChart(data, options);
  });
}


function createChart(data, options){
    d = data.map(function(datapoint){
        var o = {
            x: new Date(Date.parse(datapoint.db_time)),
            y: datapoint.batt_mv
        }
        return o;
    });

    var chart = new CanvasJS.Chart(options.element,
    {
      axisX: {
      },
      axisY: {
          minimum: 2000,
          maximum: 4500
      },
      zoomEnabled: true,
      data: [
      {
        type: "line",
        dataPoints: d
      }
      ]
    });
    chart.render();
}

function renderGraphs(){
    $(".nodeGraph").each(function(){
        options = {
            element: this.id,
            endpoint: this.dataset.nodeaddress,
            start_time: this.dataset.start_time,
            end_time: this.dataset.end_time
        }
        createBatteryChart(options);
    });
}

$(document).ready(function(){
    console.log("Document Ready");

    renderGraphs();
    setInterval(function(){
        renderGraphs();
    }, 60*1000);
});
