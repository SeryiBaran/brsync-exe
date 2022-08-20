const bs = require("browser-sync").create();

bs.init({
    server: "./"
});

bs.reload("**/*");
