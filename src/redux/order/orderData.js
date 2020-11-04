const ORDER_DATA = {
    covid :{
      id: 1,
      title: 'Covid',
      routeName: 'order/covid',
      items: [
        {
          id: 1,
          name: 'Covax USA',
          imageUrl: 'https://media.istockphoto.com/photos/covid19-coronavirus-vaccine-vial-with-syringe-and-stethoscope-picture-id1211256683',
          price: 25
        },
        {
          id: 2,
          name: 'Covax China',
          imageUrl: 'https://media.istockphoto.com/photos/coronavirus-vaccine-picture-id1217837559',
          price: 18
        },
        {
          id: 3,
          name: 'Covax India',
          imageUrl: 'https://media.istockphoto.com/photos/coronavirus-covid-19-vaccination-picture-id1218561900',
          price: 35
        },
        {
          id: 4,
          name: 'Covax Denmark',
          imageUrl: 'https://media.istockphoto.com/photos/coronavirus-vaccine-picture-id1204654839',
          price: 25
        },
        {
          id: 5,
          name: 'Covax Brazil',
          imageUrl: 'https://media.istockphoto.com/photos/coronavirus-vaccine-vial-picture-id1217229591',
          price: 18
        },
        {
          id: 6,
          name: 'Covax Africa',
          imageUrl: 'https://media.istockphoto.com/photos/coronavirus-vaccine-vial-and-syringe-isolated-on-white-background-picture-id1217014808',
          price: 14
        },
        {
          id: 7,
          name: 'Covax Australia',
          imageUrl: 'https://media.istockphoto.com/photos/coronavirus-covid19-vaccine-vial-in-nurse-hand-closeup-view-picture-id1215071957',
          price: 18
        },
        {
          id: 8,
          name: 'Covax Swiss',
          imageUrl: 'https://media.istockphoto.com/photos/coronavirus-vaccine-for-covid19-immunization-picture-id1223650359',
          price: 14
        },
        {
          id: 9,
          name: 'Covax Finland',
          imageUrl: 'https://media.istockphoto.com/photos/coronavirus-covid-19-vaccine-concept-small-glass-vials-with-blue-caps-picture-id1226912839',
          price: 16
        }
      ] 
    },
    dtp: {
      id: 2,
      title: 'DTP',
      routeName: 'order/dtp',
      items: [
        {
          id: 10,
          name: 'DTP USA',
          imageUrl: 'https://media.istockphoto.com/photos/vaccine-picture-id546805660',
          price: 220
        },
        {
          id: 11,
          name: 'DTP UAE',
          imageUrl: 'https://media.istockphoto.com/photos/vaccine-picture-id547413270',
          price: 280
        },
        {
          id: 12,
          name: 'DTP INDIA',
          imageUrl: 'https://image.shutterstock.com/z/stock-photo-dtp-diphtheria-tetanus-pertussis-vaccine-for-injection-384898699.jpg',
          price: 110
        },
        {
          id: 13,
          name: 'DTP RUSSIA',
          imageUrl: 'https://media.istockphoto.com/photos/vaccine-picture-id588987218',
          price: 160
        },
        {
          id: 14,
          name: 'DTP Australia',
          imageUrl: 'https://media.istockphoto.com/photos/doctor-fills-injection-syringe-with-vaccine-picture-id1205972800',
          price: 160
        },
        {
          id: 15,
          name: 'DTP DENMARK',
          imageUrl: 'https://media.istockphoto.com/photos/the-doctor-prepares-the-syringe-for-vaccination-picture-id679524826',
          price: 160
        }      
      ]
    },
    mmr: {
      id: 3,
      title: 'MMR',
      routeName: 'order/mmr',
      items: [
        {
          id: 16,
          name: 'MMR INDIA',
          imageUrl: 'https://media.istockphoto.com/photos/measles-mumps-and-rubella-mmr-vaccine-vial-picture-id1211256727',
          price: 125
        },
        {
          id: 17,
          name: 'MMR USA',
          imageUrl: 'https://media.istockphoto.com/photos/children-vaccine-for-prevention-of-viral-diseases-picture-id1126559054',
          price: 90
        },
        {
          id: 18,
          name: 'MMR AUSTRALIA',
          imageUrl: 'https://media.istockphoto.com/photos/vaccine-holding-in-hand-with-injection-syringe-at-the-background-picture-id1126559052',
          price: 90
        },
        {
          id: 19,
          name: 'MMR DENMARK',
          imageUrl: 'https://media.istockphoto.com/photos/concept-of-a-mmr-vaccine-for-measles-mumps-and-rubella-as-outbreaks-picture-id1148029631',
          price: 165
        }
      ]
    },
    rotavirus:{
      id: 4,
      title: 'Rotavirus',
      routeName: 'order/rotavirus',
      items: [
        {
          id: 20,
          name: 'Rotavirus INDIA',
          imageUrl: 'https://media.istockphoto.com/photos/rotavirus-vaccine-picture-id514169958',
          price: 25
        },
        {
          id: 21,
          name: 'Rotavirus USA',
          imageUrl: 'https://media.istockphoto.com/photos/open-vial-rotavirus-vaccine-vial-on-white-background-picture-id1156023136',
          price: 20
        },
        {
          id: 22,
          name: 'Rotavirus UAE',
          imageUrl: 'https://media.istockphoto.com/photos/rotavirus-vaccine-with-other-medicines-picture-id917896418',
          price: 80
        }
      ]
    },
    polio:{
      id: 5,
      title: 'Polio',
      routeName: 'order/polio',
      items: [
        {
          id: 23,
          name: 'Polio USA',
          imageUrl: 'https://media.istockphoto.com/photos/polio-vaccination-syringe-background-picture-id1140388724',
          price: 325
        },
        {
          id: 24,
          name: 'Polio UAE',
          imageUrl: 'https://media.istockphoto.com/photos/polio-vaccination-picture-id586718854',
          price: 20
        },
        {
          id: 25,
          name: 'Polio INDIA',
          imageUrl: 'https://media.istockphoto.com/photos/polio-picture-id1128161064',
          price: 25
        },
        {
          id: 26,
          name: 'Polio AUSTRALIA',
          imageUrl: 'https://media.istockphoto.com/photos/polio-vaccine-picture-id508491372',
          price: 25
        },
        {
          id: 27,
          name: 'Polio DENMARK',
          imageUrl: 'https://media.istockphoto.com/photos/polio-virus-picture-id959403016',
          price: 40
        }
      ]
    } 
  }

  export default ORDER_DATA;