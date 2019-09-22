/*
function sayHello(name) {
  console.log("Hello " + name);
}
//sayHello("Steve");
console.log(window);*/
/*
var message = " ";
console.log(global.message);
*/

//console.log(module);

/*
const log = require("./logger");
//console.log(log);
log("message");

const path = require("path");
var pathObj = path.parse(__filename);
console.log(pathObj);
*/

/*
const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory:  ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
*/

/*
const fs = require("fs");
//const files = fs.readdirSync("./");

//console.log(files);

fs.readdir("./", function(err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});
*/

/*
const EventEmitter = require("events");
// const emitter = new EventEmitter();

const Logger = require("./logger");
const logger = new Logger();
logger.on("messageLogged", arg => {
  console.log("Listener called ", arg);
});
logger.log("message");
*/

/*
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.on("connection", socket => {
  console.log("New Connection..");
});

server.listen(3000);
console.log("Listening on port 3000..");
*/

/*
const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/plain" });
    res.end("Hello World");
  })
  .listen(3000);

console.log("Server is listening at port 3000 ");
*/

/*
const events = require("events");
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
  console.log("Connection successful");
  eventEmitter.emit("Data_received");
};

eventEmitter.on("connection", connectHandler);
eventEmitter.on("data_received", function() {
  console.log("Data received successfully");
});

eventEmitter.emit("connection");
console.log("Program Ended");
*/

/*
var fs = require("fs");

fs.readFile("1.txt", function(err, data) {
  if (err) {
    console.log(err.stack);
    return;
  }
  console.log(data.toString());
});
console.log("Program Ended");
*/

/*
var events = require("events");
var eventEmitter = new events.EventEmitter();

var listner1 = function listner1() {
  console.log("Listener1 executed");
};

var listner2 = function listner2() {
  console.log("Listener2 executed");
};

eventEmitter.addListener("connection", listner1);
eventEmitter.on("connection", listner2);

var eventListeners = require("events").EventEmitter.listenerCount(
  eventEmitter,
  "connection"
);
console.log(eventListeners + " Listner(s) listening to connection event");
eventEmitter.emit("connection");

eventEmitter.removeListener("connection", listner1);

console.log("Listener 1 will listen now");

eventEmitter.emit("connection");

eventListener = require("events").EventEmitter.listenerCount(
  eventEmitter,
  "connection"
);
console.log(eventListeners + "Listener(s) listening to connection event");
console.log("Program Ended");
*/

/*
const buf = new Buffer(10);
console.log(buf);

var buf1 = new Buffer([10, 20, 30, 40, 50]);
console.log(buf1);

var buf2 = new Buffer("Simply Easy Learning", "utf-8");
console.log(buf2);

//buf.write(string[,offset][,length][,encoding]);

buff = new Buffer(256);
len = buff.write("Simply Easy Learning"); // To write into Buffer

console.log("Octets written: " + len);

//buf.toString([encoding][,start][,end])

var buff1 = new Buffer(26);
for (var i = 0; i < 26; i++) {
  buff1[i] = i + 97;
}

console.log(buff1.toString("ascii"));
console.log(buff1.toString("ascii", 0, 5));
console.log(buff1.toString("utf8", 0, 5));
console.log(buff1.toString(undefined, 0, 5));

//TOJSON
var buff1 = new Buffer("Simply Easy Learning");
var json = buff1.toJSON();
console.log(json);

//Concatenate Buffers
var buffer1 = new Buffer("TutorialsPoint");
var buffer2 = new Buffer("Simply Easy Learning");
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("Buffer content: " + buffer3.toString());

//Compare Buffers
var buffer1 = new Buffer("TutorialsPoint");
var buffer2 = new Buffer("Simply Easy Learning");
var result = buffer1.compare(buffer2);

if (result < 0) {
  console.log(buffer1 + " comes before " + buffer2);
} else if (result > 0) {
  console.log(buffer1 + " comes after " + buffer2);
} else {
  console.log("Both " + buffer1 + " and " + buffer2 + " are equal ");
}

//copy Buffer
var buffer1 = new Buffer("ABC");
var buffer2 = new Buffer(3);

buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

//Slice Buffer
var buffer1 = new Buffer("TutorialsPoint");
var buffer2 = buffer1.slice(0, 9);
console.log("buffer2 content " + buffer2);

//Buffer Length
var buffer1 = new Buffer("TutorialsPoint");
console.log("Buffer length " + buffer1.length);
*/

/*
//Streams - read from a source and write data in a continuous fashion
//Types of Streams - readable, writable, Duplex, Transform
var fs = require("fs");
var data = "";

var readerStream = fs.createReadStream("1.txt");

readerStream.setEncoding("UTF8");

readerStream.on("data", chunk => {
  data += chunk;
});

readerStream.on("end", () => {
  console.log(data);
});

readerStream.on("error", err => {
  console.log(err.stack);
});

console.log("Program end");

var fs = require("fs");
var data = "Simple Easy Learning";

var writerStream = fs.createWriteStream("output.txt");
writerStream.write(data, "UTF8");

writerStream.end();

writerStream.on("finish", () => {
  console.log("Write Completed.");
});

writerStream.on("error", err => {
  console.log(err.stack);
});

console.log("Program Ended");
*/

/*

//Piping Stream - Output of one stream is presented to the input of another
var fs = require("fs");

var readerStream = fs.createReadStream("1.txt");

var writerStream = fs.createWriteStream("output.txt");

readerStream.pipe(writerStream);
console.log("Program Ended");
*/

//Chaining Streams
//Create Multiple chain operations using pipe
//Save and Compress a text file
/*
var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("1.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"));

console.log("File Compressed");
*/

//Decompress
/*
var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input.txt"));

console.log("File Decompressed");
*/

//Synchronous and Asynchronous read
/*
var fs = require("fs");
fs.readFile("input.txt", (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});

var data = fs.readFileSync("input.txt");
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
*/

//Open File
/*
var fs = require("fs");

console.log("Going to open file!");
fs.open("input.txt", "r+", (err, fd) => {
  if (err) {
    return console.error(err);
  }
  console.log("File opened Successfully");
});
*/

/*
var fs = require("fs");
console.log("Going to get File info!");
fs.stat("input.txt", (err, stats) => {
  if (err) {
    console.error(err);
  }
  console.log(stats);
  console.log("Got file info successfully!");

  console.log("isFile?" + stats.isFile());
  console.log("isDirectory?" + stats.isDirectory());
});
*/

/*
var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile("input.txt", "Simply Easy Learning!", err => {
  if (err) {
    return console.error(err);
  }
  console.log("Data Written successfully");
  console.log("Let's read newly written data");
  fs.readFile("input.txt", (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
});
*/

//Reading file
/*
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open("1.txt", "r+", (err, fd) => {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully");
  console.log("Going to read the files");
  fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
    if (err) {
      return console.error(err);
    }
    console.log(bytes + " bytes read");
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }
  });
});
*/

//Closing file
/*
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open("1.txt", "r+", (err, fd) => {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully");
  console.log("Going to read the file");
  fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
    if (err) {
      return console.log(err);
    }

    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }

    fs.close(fd, err => {
      if (err) {
        return console.log(err);
      }
      console.log("File Closed Successfully");
    });
  });
});
*/

//Truncate file
/*
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open("1.txt", "r+", (err, fd) => {
  if (err) {
    console.error(err);
  }
  console.log("File opened successfully");
  console.log("Going to truncate the file after 10 bytes");

  fs.ftruncate(fd, 10, err => {
    if (err) {
      console.error(err);
    }
    console.log("File truncated successfully");
    console.log("Going to read the same file");
    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
      if (err) {
        console.error(err);
      }
      if (bytes > 0) {
        console.log(buf.slice(0, bytes).toString());
      }

      fs.close(fd, err => {
        if (err) {
          console.error(err);
        }
        console.log("File closed successfully");
      });
    });
  });
});
*/

//Delete File
/*
var fs = require("fs");

console.log("Going to delete an existing file");

fs.unlink("2.txt", err => {
  if (err) {
    console.error(err);
  }
  console.log("File Deleted successfully");
});
*/

//Create a directory
/*
var fs = require("fs");
fs.mkdir("/tmp/test", err => {
  if (err) {
    return console.error(err);
  }
  console.log("Directory created successfully");
});
*/

//Read Directory
/*
var fs = require("fs");

console.log("Going to read directory");
fs.readdir("/tmp/", (err, files) => {
  if (err) {
    return console.error(err);
  }
  files.forEach(file => {
    console.log(file);
  });
});
*/

//Remove Directory
/*
var fs = require("fs");

console.log("Going to delete directory /tmp/test");
fs.rmdir("/tmp/test", err => {
  if (err) {
    console.error(err);
  }
  console.log("File remove successfully");
});
console.log("Going to read the directory");
fs.readdir("/tmp", (files, err) => {
  if (err) {
    return console.error(err);
  }
  files.foreach(file => {
    console.log(file);
  });
});
*/

//Global objects
/*
console.log(__filename);
console.log(__dirname);


function printHello() {
  console.log("Hello, World");
}


var t = setTimeout(printHello, 2000);
clearTimeout(t);

setInterval(printHello, 2000);
*/

/*
//console
console.info("Program Started");
var counter = 10;
console.log("Counter: %d", counter);
console.log("Counter: ", counter);
console.time("Getting data");
console.timeEnd("Getting data");
console.info("Program ended");
*/

//Process
/*
process.on("exit", code => {
  setTimeout(() => {
    console.log("This will not run");
  }, 0);
  console.log("About to exit with code", code);
});
console.log("Program ended");


process.stdout.write("Hello world!" + "\n");
process.argv.forEach((val, index, array) => {
  console.log(index + " : " + val);
});

console.log(process.execPath);
console.log(process.platform);


console.log("current directory " + process.cwd());
console.log("current version " + process.version);
console.log(process.memoryUsage());
*/

//OS Module
/*
var os = require("os");
console.log("endianness: " + os.endianness());
console.log("type: " + os.type());
console.log("Platform: " + os.platform());
console.log("Total memory: " + os.totalmem());
console.log("Free Memory: " + os.freemem());
*/

//Path Module
/*
var path = require("path");
console.log(
  "Normalization: " + path.normalize("/test/test1//2slashes/1slash/tab/..")
);
console.log(
  "joint path: " + path.join("/test", "test1", "2slashes/1slash", "tab")
);
console.log("resolve: " + path.resolve("app.js"));
console.log("Ext name: " + path.extname("app.js"));
*/

//Net Module
/*
var net = require("net");
var server = net
  .createServer(connection => {
    console.log("Client Connected");
    connection.on("end", () => {
      console.log("Client Disconnected");
    });
    connection.write("Hello World!\r\n");
    connection.pipe(connection);
    connection.end();
  })
  .listen(8080);
*/

/*
var net = require("net");
var client = net.connect({ port: 8080 }, () => {
  console.log("Connected to server!");
});
client.on("data", data => {
  console.log(data.toString());
  client.end();
});
client.on("end", () => {
  console.log("Disconnected from server");
});
*/

//DNS module
/*
var dns = require("dns");

dns.lookup("www.google.com", function onLookup(err, address, family) {
  console.log("address: " + address);
  dns.reverse(address, function(err, hostnames) {
    if (err) {
      console.log(err.stack);
    }
    console.log("Reverse for " + address + ":" + JSON.stringify(hostnames));
  });
});
*/

//Domain module
/*
var EventEmitter = require("events").EventEmitter;
var domain = require("domain");

var emitter1 = new EventEmitter();
var domain1 = domain.create();

domain1.on("error", err => {
  console.log("Domain handled this error (" + err.message + ")");
});

domain1.add(emitter1);
emitter1.on("error", err => {
  console.log("Listener handled this error (" + err.message + ")");
});

emitter1.emit("error", new Error("To be handled by domain1"));

var domain2 = domain.create();

domain2.on("error", err => {
  console.log("Domain2 handled this error (" + err.mesage + ")");
});

domain2.run(() => {
  var emitter2 = new EventEmitter();
  emitter2.emit("error", new Error("To be handled by domain2"));
});

domain1.remove(emitter1);
emitter1.emit(
  "error",
  new Error("converted to exception. System will crash!)")
);
*/

//Web Module
/*
var http = require("http");
var fs = require("fs");
var url = require("url");

http
  .createServer((req, res) => {
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received");

    fs.readFile(pathname.substr(1), (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(404, { "Content-Type": "text/html" });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data.toString());
      }
      res.end();
    });
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
*/

//Express Framework
/*
var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Hello world1");
});

var server = app.listen(8081, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`Example app listening at http:// ${host}, ${port}`);
});
*/

//Basic Routing
/*
var express = require("express");
var app = express();

app.get("/", (req, res) => {
  console.log("Got a GET response for the homepage");
  res.send("Hello GET");
});

app.post("/", (req, res) => {
  console.log("Got a POST request for the homepage");
});

app.delete("del_user", (req, res) => {
  console.log("Got a DELETE requestfor /del_user");
});

app.get("/list_user", (req, res) => {
  console.log("Got a GET request for /list_user");
  res.send("Page Listing");
});

app.get("/ab*cd", (req, res) => {
  console.log("Got a GET request for /ab*cd");
  res.send("Page Pattern Match");
});

var server = app.listen(8081, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
*/

//Serving Static Files
/*
var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

var server = app.listen(8081, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s %S", host, port);
});
*/

//Getting values through a form
/*
var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/index.htm", (req, res) => {
  res.sendFile(__dirname + "/" + "index.htm");
});

app.get("/process_get", (req, res) => {
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(8081, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http:// %s:%s", host, port);
});
*/

//Post Method
/*
var express = require("express");
var app = express();
var bodyparser = require("body-parser");

var urlencodedParser = bodyparser.urlencoded({ extended: false });

app.use(express.static("public"));

app.get("/index.htm", (req, res) => {
  res.sendFile(__dirname + "/" + "index.htm");
});

app.post("/process_post", urlencodedParser, (req, res) => {
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(8081, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
*/

//File Upload
/*
var express = require("express");
var app = express();
var fs = require("fs");

var bodyParser = require("body-parser");
var multer = require("multer");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: "./tmp/" }));

app.get("/index.htm", (req, res) => {
  res.sendFile(__dirname + "/" + "index.htm");
});

app.post("/file_upload", (req, res) => {
  console.log(req.files.file.name);
  console.log(req.files.file.path);
  console.log(req.files.file.type);
  var file = __dirname + "/" + req.files.file.name;
  fs.readFile(req.files.file.path, (err, data) => {
    fs.writeFile(file, data, err => {
      if (err) {
        console.log(err);
      } else {
        response = {
          message: "File uploaded successfully",
          filename: req.files.file.name
        };
      }
      console.log(response);
      res.end(JSON.stringify(response));
    });
  });
});

var server = app.listen(8081, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s %s", host, port);
});
*/

//File upload
/*
var express = require("express");
var app = express();
var fs = require("fs");

var bodyParser = require("body-parser");
var multer = require("multer");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: "/tmp/" }));

app.get("/index.htm", function(req, res) {
  res.sendFile(__dirname + "/" + "index.htm");
});

app.post("/file_upload", function(req, res) {
  console.log(req.files.file.name);
  console.log(req.files.file.path);
  console.log(req.files.file.type);
  var file = __dirname + "/" + req.files.file.name;

  fs.readFile(req.files.file.path, function(err, data) {
    fs.writeFile(file, data, function(err) {
      if (err) {
        console.log(err);
      } else {
        response = {
          message: "File uploaded successfully",
          filename: req.files.file.name
        };
      }

      console.log(response);
      res.end(JSON.stringify(response));
    });
  });
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
*/

//Cookies Management
/*
var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
  console.log("Cookies: ", req.cookies);
});
app.listen(8081);
*/

//List Users
/*
var express = require("express");
var app = express();
var fs = require("fs");

app.get("/listusers", (req, res) => {
  fs.readFile(__dirname + "/" + "users.json", "utf8", (err, data) => {
    console.log(data);
    res.end(data);
  });
});

var server = app.listen(8081, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
*/

//Adduser
/*
var express = require("express");
var app = express();

var fs = require("fs");

var user = {
  user4: {
    name: "mohit",
    password: "password4",
    profession: "teacher",
    id: 4
  }
};

app.get("/addUser", (req, res) => {
  fs.readFile(__dirname + "/" + "users.json", "utf8", (err, data) => {
    data = JSON.parse(data);
    data["user4"] = user["user4"];
    console.log(data);
    res.end(JSON.stringify(data));
  });
});

var server = app.listen(8081, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example running at http:%s:%s", host, port);
});
*/

//Show Detail
/*
var express = require("express");
var app = express();
var fs = require("fs");

app.get("/:id", function(req, res) {
  // First read existing users.
  fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
    var users = JSON.parse(data);
    var user = users["user" + req.params.id];
    console.log(user);
    res.end(JSON.stringify(user));
  });
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
*/

//Delete user
/*
var express = require("express");
var app = express();
var fs = require("fs");

var id = 2;

app.get("/deleteUser", function(req, res) {
  // First read existing users.
  fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
    data = JSON.parse(data);
    delete data["user" + id];

    console.log(data);
    res.end(JSON.stringify(data));
  });
});

var server = app.listen(8082, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
*/

//Scaling Application
//Exec method
/*
const fs = require("fs");
const child_process = require("child_process");

for (var i = 0; i < 3; i++) {
  var workerProcess = child_process.exec(
    "node client.js " + i,
    (error, stdout, stderr) => {
      if (error) {
        console.log(error.stack);
        console.log("Error Code: " + error.code);
        console.log("Signal received: " + error.signal);
      }
      console.log("stdout:" + stdout);
      console.log("stderr: " + stderr);
    }
  );
  workerProcess.on("exit", code => {
    console.log("Child Process exited with exit code " + code);
  });
}
*/

//Spawn method - Any 1 process waits and execute
/*
var fs = require("fs");
const child_process = require("child_process");

for (var i = 0; i < 3; i++) {
  var workerProcess = child_process.spawn("node", ["client.js", i]);
  workerProcess.stdout.on("data", data => {
    console.log("stdout: " + data);
  });
  workerProcess.stdout.on("data", data => {
    console.log("stderr: " + data);
  });

  workerProcess.on("close", code => {
    console.log("Child process exited with code " + code);
  });
}
*/

//Fork method
const fs = require("fs");
const child_process = require("child_process");

for (var i = 0; i < 3; i++) {
  var workerProcess = child_process.fork("client.js", [i]);

  workerProcess.on("close", code => {
    console.log("child process exited with code " + code);
  });
}
