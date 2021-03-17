function autoResize(iframe) {
    $(iframe).height($(iframe).contents().find('html').height());
};

