# webscraping
purpose: website scraping for up to 3 levels

How to run: Go to the project directory and enter command
  >npm run start
  
Console output all the links in the page up to 3 levels
output example:

[Seed]
https://www.51.ca

[Level 1] <n> is the index of [level 1] links
  
<0>https://www.51.ca/weather/#cityCAXX0504

<1>http://www.torontoGasprices.com

<2>https://www.51.ca/weather/#cityCAXX0518

<3>http://www.vancouverGasprices.com

<4>https://www.51.ca/weather/#cityCAXX0343

<5>http://www.ottawaGasprices.com

<6>https://www.51.ca/weather/#cityCAXX0054

[level 2] <<n>m, m is the index of [level 2] links
  
<<11>16 https://play.google.com/store/apps/details?id=gbis.gbandroid

<<11>17 http://www.facebook.com/gasbuddy

<<11>18 http://twitter.com/gasbuddy

<<11>19 https://www.linkedin.com/company/gasbuddy

<<11>20 http://instagram.com/gasbuddy

<<11>21 http://media.gasbuddy.com/MediaContacts

<<11>22 http://media.gasbuddy.com/

<<11>23 http://help.gasbuddy.com/hc/en-us

<<11>24 http://business.gasbuddy.com/for_business/advertise-with-gasbuddy/

<<11>25 http://www.facebook.com/gasbuddy

<<11>26 http://www.facebook.com/gasbuddy

<<11>27 http://twitter.com/gasbuddy

[level 3] <<<n>>m>k, k is the index of [level 3] links
  
<<<4>>1>36 http://www.torontoGasprices.com

<<<4>>1>37 http://www.torontoGasprices.com

<<<4>>1>38 http://www.torontoGasprices.com

<<<4>>1>39 http://www.torontoGasprices.com

<<<4>>1>40 http://www.torontoGasprices.com

<<<4>>1>41 http://www.torontoGasprices.com

<<<4>>1>42 http://www.torontoGasprices.com

<<<4>>1>43 http://www.torontoGasprices.com

<<<4>>1>44 http://www.torontoGasprices.com

<<<4>>1>45 http://www.torontoGasprices.com

<<<4>>1>46 http://www.torontoGasprices.com

<<<4>>1>47 http://www.torontoGasprices.com

<<<4>>1>48 http://www.torontoGasprices.com

To change the seed url, go to bottom of index.ts 

const url = "https://www.51.ca"

siteScraper(url);  // For this demonstration, we're ignoring the returned Promise.

change const url = "your seed url";


