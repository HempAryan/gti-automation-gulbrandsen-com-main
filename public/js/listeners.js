    //user account event listeners
    const LOGIN = document.querySelector('#login');
    const CONFIRM_USER = document.querySelector('#confirm-user');
    const RESEND_CODE = document.querySelector('#resend-code');
    const NEW_PASSWORD_REQUIRED = document.querySelector('#new-password-required');
    const CHANGE_PASSWORD = document.querySelector('#change-password');
    const LOGOUT = document.querySelector('#logout');

    //SC Kettles event listeners
    const SC_KETTLE_DROPDOWN = document.querySelector('#scKettleDropdown');
    const SC_BATCH_DROPDOWN = document.querySelector('#scBatchDropdown');
    const SC_CSV_DROPDOWN = document.querySelector('#scCsvDropdown');


    //TX kettles event listeners
    const TX_KETTLE_DROPDOWN = document.querySelector('#txKettleDropdown');
    const TX_BATCH_DROPDOWN = document.querySelector('#txBatchDropdown');

    //TX Scrubber event listeners
    const TX_SCRUBBER_WEEK = document.querySelector('#txScrubberWeekSelected');

    //NJ Scrubber event listeners
    const NJ_SCRUBBER_WEEK = document.querySelector('#njScrubberWeekSelected');



    if (NJ_SCRUBBER_WEEK) {
        NJ_SCRUBBER_WEEK.addEventListener('click', function() {
            document.querySelector('#njScrubberWeekSelected .spinner-border').classList.remove('invisible');
            document.querySelector('#njScrubberWeekSelected .btn-text').innerHTML = "Loading";

            //Reset the download buttons since we generated a new chart
            //
            ['#csv', '#csv2', '#csv3'].forEach(function(element){
                document.querySelector(element).removeAttribute('href');
                document.querySelector(element).innerHTML = "Create CSV";
            });

            site.njScrubberGetWeek2();
        }, false);
    }


    if (TX_SCRUBBER_WEEK) {
        TX_SCRUBBER_WEEK.addEventListener('click', function() {
            document.querySelector('#txScrubberWeekSelected .spinner-border').classList.remove('invisible');
            document.querySelector('#txScrubberWeekSelected .btn-text').innerHTML = "Loading";
            site.txScrubberGetWeek();
        }, false);
    }


    if (TX_BATCH_DROPDOWN) {
        TX_BATCH_DROPDOWN.addEventListener('click', function() { site.txSelectBatch() }, false);
    }



    if (TX_KETTLE_DROPDOWN) {
        TX_KETTLE_DROPDOWN.addEventListener('click', function() { site.txSelectKettle() }, false);
    }


    if (SC_CSV_DROPDOWN) {
        SC_CSV_DROPDOWN.addEventListener('click', function() { site.scCsvBatch() }, false);
    }


    if (SC_BATCH_DROPDOWN) {
        SC_BATCH_DROPDOWN.addEventListener('click', function() { site.scSelectBatch() }, false);
    }

    if (SC_KETTLE_DROPDOWN) {
        SC_KETTLE_DROPDOWN.addEventListener('click', function() { site.scSelectKettle() }, false);
    }


    if (LOGOUT) {
        LOGOUT.addEventListener('click', function() { site.signOut() }, false);
    }


    if (CHANGE_PASSWORD) {
        CHANGE_PASSWORD.addEventListener('click', function() { site.changePassword() }, false);
    }

    if (NEW_PASSWORD_REQUIRED) {
        NEW_PASSWORD_REQUIRED.addEventListener('click', function() { site.newPasswordRequired() }, false);
    }

    if (LOGIN) {
        LOGIN.addEventListener('click', function() { site.login() }, false);
    }

    if (CONFIRM_USER) {
        CONFIRM_USER.addEventListener('click', function() { site.confirmUser() }, false);
    }

    if (RESEND_CODE) {
        RESEND_CODE.addEventListener('click', function() { site.resendConfirmationCode() }, false);
    }