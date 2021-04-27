import Model, { attr, hasMany, belongsTo } from '@ember-data/model';
 
export default class OrderModel extends Model {
  @attr dateCreation;
  @attr amount;
  @hasMany('orderdetail') orderdetails;
  get count(){
    return this.orderdetails.length;
  }
}