'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('test webhook11');
    ctx.body = {
      code: 200,
      data: {
        msg: 'hi, egg',
      },
    };
  }
}

module.exports = HomeController;
