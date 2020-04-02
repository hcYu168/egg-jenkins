'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      data: {
        msg: 'test webhook14',
      },
    };
  }
}

module.exports = HomeController;
