# arjsproject
If you want to test this project, it doesn't matter what OS it is.

Requirement
1. Prepare Notebook (including webcam) or PC with webcam
2. Installing node.js 
3. To remote test this, recomend using Smartphone
4. For remote test, you should apply nodejs ssl

Please, Follow below

```
$ mkdir pem
$ cd pem

$ openssl genrsa 1024 -outform PEM > private.pem
Generating RSA private key, 1024 bit long modulus
...++++++
............++++++
e is 65537 (0x10001)

$ openssl req -x509 -new -key private.pem -out public.pem
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) []:test
string is too long, it needs to be less than  2 bytes long
Country Name (2 letter code) []:KR
State or Province Name (full name) []:ARTest
Locality Name (eg, city) []:ARTest
Organization Name (eg, company) []:ARTest
Organizational Unit Name (eg, section) []:ARTest
Common Name (eg, fully qualified host name) []:ARTest
Email Address []:ARTest@gmail.com

$ git clone https://github.com/choco0908/arjsproject.git
$ cd arjsproject
$ npm install

$ mv ../*.pem serverpem

$ npm start
```

Change const hostname value in artest.js

Then, connect to https://localhost/artest or https://hostname/artest except IE 

Tested Mobiles : Galaxy Note 10 with Chrome Browser, iPhone 7 with Safari Browser


# Licenses
It is **all open source**! jsartoolkit5 is under LGPLv3 license and additional permission.

For legal details, be sure to check [jsartoolkit5 license](https://github.com/artoolkit/jsartoolkit5/blob/master/LICENSE.txt)
and [AR.js license](https://github.com/jeromeetienne/AR.js/blob/master/LICENSE.txt).
