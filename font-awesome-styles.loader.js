
module.exports = function(content) {
    this.cacheable(true);
    var config = this.exec(content, this.resourcePath);
    var source =
        "@import \"~@liveauctioneers/font-awesome/less/variables.less\";\n"
        + "@import \"./font-awesome.config.less\";\n"
        + "@import \"~@liveauctioneers/font-awesome/less/core.less\";\n"
        + "@import \"~@liveauctioneers/font-awesome/less/icons.less\";\n"
        + "@import \"~@liveauctioneers/font-awesome/less/path.less\";\n";
    return source;
};
