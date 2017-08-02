export class Init{
  load(){
    if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
     console.log("No markers found .... creating...")

      var markers =[
        {
          name:'Company One',
          lat:6.4338,
          lng: 3.4220,
          draggable: true
        },
        {
          name: 'Company Two',
           lat: 6.4561,
           lng: 3.4306,
          draggable: true
        },
        {
          name: 'Company Three',
          lat: 42.858279,
          lng: -70.930498,
          draggable: false
        }
      ]

      localStorage.setItem('markers',JSON.stringify(markers));
    }else {
      console.log('Loading markers...');
      var markers =[
        {
          name:'Company One',
          lat:6.4338,
          lng: 3.4220,
          draggable: true
        },
        {
          name: 'Company Two',
           lat: 6.4561,
           lng: 3.4306,
          draggable: true
        },
        {
          name: 'Company Three',
          lat: 42.858279,
          lng: -70.930498,
          draggable: false
        }
      ]
    localStorage.setItem('markers',JSON.stringify(markers));
    }

  }
}