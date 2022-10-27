
// Fix chrome downloading pdf instead of viewing files in browser
chrome.webRequest.onHeadersReceived.addListener(
  function(details) {
    let content_type = details.responseHeaders.find(e => e.name.toLowerCase() === 'content-type');
    if (content_type && content_type.value == 'application/pdf') {
      let content_disposition = details.responseHeaders.find(e => e.name.toLowerCase() === 'content-disposition');
      if (content_disposition) {
        content_disposition.value = content_disposition.value.replace('attachment', 'inline');
      } else {
        details.responseHeaders.push({ name: 'content-disposition', value: 'inline' });
      }
    }

    return { responseHeaders: details.responseHeaders };
  },
  // filters
  {
    urls: ["https://*.hhu.de/*"],
  },
  // extraInfoSpec
  ["blocking","responseHeaders"]
);
