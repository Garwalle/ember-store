import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  //host = 'http://solo-2.sts-sio-caen.info/rest';
  host = 'http://127.0.0.1:8090/rest';
  urlForQuery(query, modelName) {
    if (query.sql) {
      query.filter = query.sql;
    }
    return super.urlForQuery(...arguments);
  }
}

// Exemple d'utilisation du WHERE : this.store.query('product', { sql:'stock > 0' });
