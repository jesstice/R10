import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date',
  }
};

const realm = new Realm({schema: [Fave]})

export const createFave = (faveId) => {
  realm.write(() => {
    realm.create('fave', {id: faveId, faved_on: Date.now()})
  })
}

export const deleteFave = (faveId) => {
  let fave = realm.objects('fave').filtered('id == $0', faveId);

  realm.write(() => {
    realm.delete(fave);
  })
}

export const queryFaves = () => {
  let faves = realm.objects('Fave');
  return faves;
}

export default realm;