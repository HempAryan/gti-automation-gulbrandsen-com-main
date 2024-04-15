# gci-automation.gulbrandsen.com

The <https://gti-automation.gulbrandsen.com> lives on a Gulbrandsen corporate AWS S3 bucket.  To help with continual updates to the site, we have created a GIT project that allows for code changes offline and tracking of the same changes for future tracking.

This project has included a bare minimum implementation of `express.js` used only in development, in order to assist the developer with viewing code changes before loading into the live S3 bucket.

The `/public` folder houses all files that are live on the Gulbrandsen corporate S3 bucket.  All code changes relevant to the site need to be in this `/public` folder or sub folder.

## Installation

Use `npm i` to download all dependencies.

## Usage

Use the command `npm run dev` to run the local version of the website.
OR
Use the command `node src/app.js` to run the local version of the website.

## Authors

Mick McGuire
Hemant Jhamnani

## License

Gulbrandsen Inc

# Version-240404-1152

Deleted NJ scrubber Live pages and its references.

# Version-240411-1815

Deleted TX Scrubber Live pages and its references.

# Version-240415-1530

Deleted TX ACH Scrubber Live pages and its references.