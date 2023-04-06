# HHU Sanity Extensions

Browser extensions for the HHU websites to put me at ease.


## Extensions

Functionality split between the following extensions for now:

### HHU-Sanity-Login

- Auto redirects to Ilias/LSF login page
- Auto logins when username/password fields are autofilled
    - You will need to click anywhere on the page to login (Because of browser security shenanigans)

### HHU-Sanity-PDF

- Opens (hopefully) all PDFs on HHU pages in the browser so your downloads folder doesn't fill with hundreds of badly named files
- Currenly uses manifest v2 (Scheduled to be removed on chrome in 2023), could work with v3, but that would remove the filename in case you do choose to download a PDF

### HHU-Sanity-PDF-v3

- Same as above, but worse. Manifest v3 sucks.

### HHU-Sanity-Pretty-LSF

- Adds a green highligh to all cources in the timetable that are online (Course note contains 'online')

## TODO

- [x] Somewhat proper manifest v3 version of the PDF extension
- [x] Add autologin for the LSF
    - [x] Check if the lsf redirects nicely like ilias
- [ ] Add more HHU subdomains
