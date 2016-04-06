/* Accepts the following options:
 *      element
 *      text
 *      endpoint
 */
function createBatteryChart(options){
    getData(options);

}

function getData(options){
  $.get("http://192.168.1.98:16906/battery/" + options.endpoint, function(data){
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


$(document).ready(function(){
    console.log("ready");
    $(".nodeGraph").each(function(){
        options = {
            element: this.id,
            endpoint: this.dataset.nodeaddress
        }
        createBatteryChart(options);
    });

    setInterval(function(){
        $(".nodeGraph").each(function(){
            options = {
                element: this.id,
                endpoint: this.dataset.nodeaddress
            }
            createBatteryChart(options);
        });
    }, 60*1000);
});
