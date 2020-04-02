'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('test webhook12');
    ctx.body = {
      code: 200,
      data: {
        msg: 'hi, egg',
      },
    };
  }
}

module.exports = HomeController;
