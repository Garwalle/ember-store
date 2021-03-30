import Model, { attr, hasMany } from "@ember-data/model";

export default class EmployeeModel extends Model {
  @attr('string') name;
  @attr('string') email;
  @attr('string') password;
  @hasMany('order') orders;
}
