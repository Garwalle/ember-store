import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') name;
  @attr comments;
  @attr stock;
  @attr('string') image;
  @attr price;
  @attr promotion;
  @belongsTo('section') section;
  @hasMany('product', { inverse: null }) packs;
  @hasMany('orderdetail') orderdetails;
}
