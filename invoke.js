(async () => {
  const contactFinder = new ContactFinder("group-name");
  await contactFinder.downloadMembersAsCSV(); // This will download the contacts as CSV
})();
