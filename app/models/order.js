import Model, { attr, hasMany, belongsTo } from '@ember-data/model';
 
export default class OrderModel extends Model {
  @attr dateCreation;
  @attr status;
  @attr amount;
  @attr toPay;
  @attr itemsNumber;
  @attr missingNumber;
  @hasMany('orderdetail') orderdetails;
  @belongsTo('user') user;
  get count(){
    return this.orderdetails.length;
  }
}