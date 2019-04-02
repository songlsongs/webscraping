# webscraping
purpose: find all links of a website for up to 3 levels

How to run: Go to the project directory and enter command
  >npm run start
  
Console output all the links in the page up to 3 levels
output example:

[Seed]
https://www.51.ca

[Level 1]  [n] is the index of [level 1] links

[0] https://www.51.ca/weather/#cityCAXX0504

[1] http://www.torontoGasprices.com

[2] https://www.51.ca/weather/#cityCAXX0518

[3] http://www.vancouverGasprices.com

[4] https://www.51.ca/weather/#cityCAXX0343

[5] http://www.ottawaGasprices.com

[6] https://www.51.ca/weather/#cityCAXX0054

[7] http://www.calgaryGasprices.com

[8] https://www.51.ca/weather/#cityCAXX0301

[9] http://www.montrealGasprices.com

[10] https://www.51.ca/weather/#cityCAXX0547

[11] http://www.winnipegGasprices.com

[12] https://www.51.ca/my/register.php?s=&action=signup

[13] https://www.51.ca/my/member.php?s=&action=lostpw

[14] https://www.51.ca/my/register.php?s=&action=signup

[15] https://123.51.ca/


[level 2]  [n][m], m is the index of [level 2] links
  
[11][16] https://play.google.com/store/apps/details?id=gbis.gbandroid

[11][17] http://www.facebook.com/gasbuddy

[11][18] http://twitter.com/gasbuddy

[11][19] https://www.linkedin.com/company/gasbuddy

[11][20] http://instagram.com/gasbuddy

[11][21] http://media.gasbuddy.com/MediaContacts

[11][22] http://media.gasbuddy.com/

[11][23] http://help.gasbuddy.com/hc/en-us

[11][24] http://business.gasbuddy.com/for_business/advertise-with-gasbuddy/

[11][25] http://www.facebook.com/gasbuddy

[11][26] http://www.facebook.com/gasbuddy

[11][27] http://twitter.com/gasbuddy


[level 3]  [n][m][k], k is the index of [level 3] links
  
[6][3][26] http://www.facebook.com/gasbuddy

[6][3][27] http://twitter.com/gasbuddy

[6][3][28] https://www.linkedin.com/company/gasbuddy

[6][3][29] http://instagram.com/gasbuddy

[6][3][30] http://media.gasbuddy.com/MediaContacts

[6][3][31] http://media.gasbuddy.com/

[6][3][32] http://help.gasbuddy.com/hc/en-us

[6][3][33] http://business.gasbuddy.com/for_business/advertise-with-gasbuddy/

[6][3][34] http://www.facebook.com/gasbuddy

[6][3][35] http://www.facebook.com/gasbuddy

[6][3][36] http://twitter.com/gasbuddy

[6][3][37] http://twitter.com/gasbuddy

[6][3][38] https://www.linkedin.com/company/gasbuddy

[6][3][39] https://www.linkedin.com/company/gasbuddy

[6][3][40] http://instagram.com/gasbuddy

This output can be sorted and persist into a file.

To change the seed url, go to bottom of index.ts 

const url = "https://www.51.ca"

change to const url = "your seed url";


