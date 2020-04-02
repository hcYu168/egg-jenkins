'use strict';
const Controller = require('egg').Controller;
class TestController extends Controller {
  async index() {
    const { ctx, service } = this;
    ctx.body = await service.test.index();
  }
}
module.exports = TestController;
