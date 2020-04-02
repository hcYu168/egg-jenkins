'use strict';
const Controller = require('egg').Controller;
class TestController extends Controller {
  async index() {
    this.ctx.body = 200;
  }
}
module.exports = TestController;
