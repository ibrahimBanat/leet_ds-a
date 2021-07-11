/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.history = [homepage];
  this.curruent = 0;
  this.limit = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.curruent++;
  this.curruent == this.history.length
    ? this.history.push(url)
    : (this.history[this.curruent] = url);
  this.limit = this.curruent;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  this.curruent = Math.max(0, this.curruent - steps);
  return this.history[this.curruent];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  this.curruent = Math.min(this.limit, this.curruent + steps);
  return this.history[this.curruent];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
