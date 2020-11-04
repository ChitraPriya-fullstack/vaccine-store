const INITIAL_STATE =  { 
    sections: [
    {
      title: 'COVID',
      imageUrl: 'https://media.istockphoto.com/photos/coronavirus-covid19-single-dose-small-vials-and-multi-dose-picture-id1218961180',
      id: 1,
      linkUrl: 'order/covid'
    },
    {
      title: 'DTP',
      imageUrl: 'https://media.istockphoto.com/photos/ncov-corona-virus-vaccine-concept-picture-id1208559761',
      id: 2,
      linkUrl: 'order/dtp'
    },
    {
      title: 'MMR',
      imageUrl: 'https://media.istockphoto.com/photos/measles-mumps-rubella-vaccine-vials-with-syringe-picture-id917896456',
      id: 3,
      linkUrl: 'order/mmr'
    },
    {
      title: 'RotaVirus',
      imageUrl: 'https://media.istockphoto.com/photos/vaccine-vial-dose-flu-shot-drug-needle-syringemedical-concept-picture-id1181127245',
      size: 'large',
      id: 4,
      linkUrl: 'order/rotavirus'
    },
    {
      title: 'Polio',
      imageUrl: 'https://media.istockphoto.com/photos/african-baby-receiving-vaccine-picture-id480585529',
      size: 'large',
      id: 5,
      linkUrl: 'order/polio'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
} 
export default directoryReducer;