# FixCrea Offline

FixCrea Offline uses a linear regression model to approximate an enzymatically-derived result for a given Jaffe-based creatinine result.

Try it out: [Demo](https://fixcrea.github.io/fixcrea_offline/)

## Features
- Simple and easy-to-use user interface.
- Works offline with any browser as long as Javascript is enabled.
- Compatible with SI units (umol/L) or conventional units (mg/dL) with a conversion factor of 88.4.
- Help and tooltips available on web page: just hover your mouse cursor over parts of the page.

## Online Resources

- Online deployment of Extreme Gradient Boosting model: https://fixcrea.com or https://fixcrea.onrender.com

- Github repo site for machine learning training: https://github.com/fixcrea/fixcrea

- Github repo site for offline linear regression version: https://github.com/fixcrea/fixcrea_offline

## Files Included

- The file index.html is the offline calculator app that uses SI units (umol/L).

- The file fixcrea_offline_conventional_units is the offline calculator app that uses conventional units (mg/dL).

- The js folder contains the files fixcrea_offline.js and fixcrea_offline_con.js which are the javascript files needed to run the apps for SI and conventional units respectively.

- The remaining files in the js and css folders contain the Boostrap and jQuery dependencies needed for fixcrea_offline_SI_units.html and fixcrea_conventional_units.html to function.

## Instructions

- Open fixcrea_offline_SI_units.html or fixcrea_offline_conventional_units.html in any web browser.

- Make sure javascript is enabled to be able to use the model.

## Updates
### 1.3 - 12.07.22
- Renamed fixcrea_offline_SI_units.html to index.html

### 1.2 - 11.25.22
- Renamed fixcrea_offline.html to fixcrea_offline_SI_units.html.
- Created conventional units calculator: fixcrea_offline_conventional_units.html and fixcrea_offline_con.js.

### 1.1 - 02.13.22
- Updated UI.

### 1.0 - 05.06.19
- Completed offline calculator app.