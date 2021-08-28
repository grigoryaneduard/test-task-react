import {configureDevtool, setLogEnabled, setUpdatesEnabled, setGraphEnabled} from 'mobx-react-devtools';

// Any configurations are optional
configureDevtool({
    // Turn on logging changes button programmatically:
    logEnabled: true,
    // Turn off displaying components updates button programmatically:
    updatesEnabled: false,
    // Log only changes of type `reaction`
    // (only affects top-level messages in console, not inside groups)
    logFilter: change => change.type === 'reaction',
});


setLogEnabled(true); // same as configureDevtool({ logEnabled: true });
setUpdatesEnabled(false); // same as configureDevtool({ updatesEnabled: false });
setGraphEnabled(false);
