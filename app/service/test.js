'use strict';
const Service = require('egg').Controller;
class TestService extends Service {
  async index() {
    return 200;
  }
}
module.exports = TestService;
