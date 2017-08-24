import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date',
  }
};

const realm = new Realm({schema: [Fave]});

console.log('path', realm.path);

export const createFave = (faveId) => {
  realm.write(() => {
    realm.create('Fave', {id: faveId, faved_on: new Date()})
  })
}


export const deleteFave = (faveId) => {
  let fave = realm.objects('Fave').filtered('id == $0', faveId);

  realm.write(() => {
    realm.delete(fave);
  })
}

export const queryFaves = () => {
  let faves = realm.objects('Fave');
  return faves;
}

export default realm;