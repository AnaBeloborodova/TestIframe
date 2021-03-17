function autoResize(iframe) {
    $(iframe).height($(iframe).contents().find('html').height());
    console.log("function autoResize(iframe) {\n" +
        "    $(iframe).height($(iframe).contents().find('html').height());};");
};

