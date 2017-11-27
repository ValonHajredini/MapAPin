
export class InitMarkersService {

  load() {
    if (localStorage.getItem('markers') === null || localStorage.getItem('marlers') === undefined) {
      console.log('No markers found, ... Crieting markers');
      var markers = [
        {
          name: 'Company one',
          lat: 42.825588,
          lng: -70.929190,
          dragable: true
        }, {
          name: 'Company two',
          lat: 42.825588,
          lng: -71.017029,
          dragable: true
        }, {
          name: 'Company one',
          lat: 42.825588,
          lng: -70.969990,
          dragable: true
        }, {
          name: 'Company two',
          lat: 42.825588,
          lng: -71.018029,
          dragable: true
        },{
          name: 'Company one',
          lat: 42.825588,
          lng: -70.959990,
          dragable: true
        }, {
          name: 'Company two',
          lat: 42.825588,
          lng: -71.014029,
          dragable: true
        },{
          name: 'Company one',
          lat: 42.825588,
          lng: -70.992990,
          dragable: true
        }, {
          name: 'Company two',
          lat: 42.825588,
          lng: -71.011029,
          dragable: true
        },{
          name: 'Company one',
          lat: 42.825588,
          lng: -70.920990,
          dragable: true
        }, {
          name: 'Company two',
          lat: 42.825588,
          lng: -71.011029,
          dragable: true
        }, {
          name: 'Company Thre',
          lat: 42.858217,
          lng: -70.922990,
          dragable: true
        }
      ];
      localStorage.setItem('markers', JSON.stringify(markers));
      console.log(markers);
    }else {
      console.log('Markers found, Loading...');
    }
  }

}
